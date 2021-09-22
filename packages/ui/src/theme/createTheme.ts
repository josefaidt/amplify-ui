import { PartialDeep } from 'type-fest';
import { paramCase } from 'change-case';

// Using internal Style Dictionary methods
import resolveObject from 'style-dictionary/lib/utils/resolveObject';
import usesReference from 'style-dictionary/lib/utils/references/usesReference';
import deepExtend from 'style-dictionary/lib/utils/deepExtend';

import { ThemeConfig } from './types/themeConfig';
import { AmplifyTheme, defaultTheme } from '.';

/**
 * What we want to be shared at build-time and run-time:
 * - 'propertySetup': adding token metadata
 * - flatten object
 * - reference resolution (RN only)
 * - CSS variable creation
 * - name transform?
 */

export const CSS_VARIABLE_PREFIX = 'amplify';

('{colors.background.foo}');

function isPlainObject(value) {
  if (
    typeof value !== 'object' ||
    value === null ||
    Object.prototype.toString.call(value) !== '[object Object]'
  ) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

/**
 * Takes an plain javascript object and will make a flat array of all the leaf nodes.
 * This is copied from Style Dictionary
 * It is also a recursive function, don't know how to type it.
 */
function flattenTheme(theme, to_ret = []) {
  for (var name in theme) {
    if (theme.hasOwnProperty(name)) {
      if (isPlainObject(theme[name]) && 'value' in theme[name]) {
        to_ret.push(theme[name]);
      } else if (isPlainObject(theme[name])) {
        flattenTheme(theme[name], to_ret);
      }
    }
  }

  return to_ret;
}

/**
 * Using `any` type here for now because
 * this is a recursive function.
 * This is mimicking part of what Style Dictionary does.
 */
export function setupTheme(theme: PartialDeep<AmplifyTheme>, path = []) {
  let toRet = {};

  if (theme.hasOwnProperty('value')) {
    const { value } = theme;
    // should see if there is a way to share this logic
    // with style dictionary...
    const name = `--${paramCase([CSS_VARIABLE_PREFIX].concat(path).join(' '))}`;
    return {
      name,
      path,
      value: cssValue(value),
      original: value,
      toString: () => `var(${name})`,
    };
  } else {
    for (const name in theme) {
      if (theme.hasOwnProperty(name)) {
        toRet[name] = setupTheme(theme[name], path.concat(name));
      }
    }
  }
  return toRet;
}

export const cssValue = (value: string) => {
  // TODO: handle non-strings
  if (typeof value === 'string' && usesReference(value)) {
    return `var(--${paramCase(
      [CSS_VARIABLE_PREFIX]
        .concat(value.replace(/\{|\}/g, '').replace('.value', '').split('.'))
        .join(' ')
    )})`;
  }
  return value;
};

export interface CreatedThemeOverride extends PartialDeep<AmplifyTheme> {
  name: string;
  toString(): string;
  css: Array<string>;
}

export interface CreatedTheme extends AmplifyTheme {
  toString(): string;
  css: Array<string>;
  overrides: Record<string, CreatedThemeOverride>;
  config: ThemeConfig;
}

// web
export function createTheme(
  config: ThemeConfig,
  _theme = defaultTheme
): CreatedTheme {
  // merge config.tokens and theme
  // run through setup?
  // need to create CSS variables
  // each token should have:
  // - CSS variable name of itself
  // - its value (reference to another CSS variable or raw value)
  const theme = setupTheme(
    // merge default and base theme so we have always have a
    // full theme to start from.
    deepExtend([_theme, config.tokens])
  ) as any;
  const css = flattenTheme(theme).map((token) => {
    return `${token.name}: ${token.value};`;
  });
  const { overrides, name = 'amplify-theme' } = config;

  const _overrides = {};
  if (overrides) {
    for (const [key, value] of Object.entries(overrides)) {
      const { tokens } = value;
      const theme = setupTheme(tokens);
      _overrides[key] = {
        ...theme,
        name: key,
        toString: () => key,
        css: flattenTheme(theme).map((token) => {
          return `${token.name}: ${token.value};`;
        }),
      };
    }
  }

  // what is the type of this object?
  return {
    ...theme,
    toString: () => name,
    css,
    config,
    // keep overrides separate from base theme
    // this allows web platforms to use plain CSS scoped to a
    // selector and only override the CSS vars needed. This
    // means we could generate CSS at build-time in a postcss
    // plugin, or do it at runtime and inject the CSS into a
    // style tag.
    // This also allows RN to dynamically switch themes in a
    // provider.
    overrides: _overrides,
    // for nested themes?
    extendTheme: function () {},
  };
}

export function setupRNTheme(theme: any = {}, path = []) {
  let toRet = {};

  if (theme.hasOwnProperty('value')) {
    const { value } = theme;
    return {
      path,
      value,
      original: value,
      // this doesn't work.
      toString: () => value,
    };
  } else {
    for (const name in theme) {
      if (theme.hasOwnProperty(name)) {
        toRet[name] = setupRNTheme(theme[name], path.concat(name));
      }
    }
  }
  return toRet;
}

export const createRNTheme = (baseTheme: any) => {
  const theme = setupRNTheme(baseTheme) as any;
  // we need to wait on resolution until we get to the themeprovider
  return resolveObject(theme);
};
