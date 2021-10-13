import { createTheme } from '../createTheme';

const darkTokens = {
  colors: {
    background: {
      primary: { value: '#000' },
    },
  },
};

const mobileTokens = {
  space: {
    medium: { value: '0.5rem' },
  },
};

const desktopTokens = {
  space: {
    medium: { value: '2.5rem' },
  },
};

const discoTokens = {
  colors: {
    background: {
      primary: { value: 'pink' },
    },
  },
};

describe('@aws-amplify/ui', () => {
  describe('overrides', () => {
    const themeWithOverrides = createTheme({
      tokens: {},
      overrides: [
        {
          mediaQuery: 'prefers-color-scheme: dark',
          tokens: darkTokens,
        },
        {
          breakpoint: 'small',
          tokens: mobileTokens,
        },
        {
          breakpoint: 'large',
          tokens: desktopTokens,
        },
        {
          selector: '.disco-theme',
          tokens: discoTokens,
        },
      ],
    });
    it('should match snapshot', () => {
      expect(themeWithOverrides.css).toMatchInlineSnapshot(`
        "[data-amplify-theme] {
        --amplify-components-alert-background-color: var(--amplify-colors-background-tertiary);
        --amplify-components-alert-padding-vertical: var(--amplify-space-small);
        --amplify-components-alert-padding-horizontal: var(--amplify-space-medium);
        --amplify-components-alert-info-background-color: var(--amplify-colors-background-info);
        --amplify-components-alert-error-background-color: var(--amplify-colors-background-error);
        --amplify-components-alert-warning-background-color: var(--amplify-colors-background-warning);
        --amplify-components-alert-success-background-color: var(--amplify-colors-background-success);
        --amplify-components-badge-line-height: 1;
        --amplify-components-badge-font-weight: var(--amplify-font-weights-semibold);
        --amplify-components-badge-font-size: var(--amplify-font-sizes-small);
        --amplify-components-badge-text-align: center;
        --amplify-components-badge-padding-vertical: var(--amplify-space-xs);
        --amplify-components-badge-padding-horizontal: var(--amplify-space-small);
        --amplify-components-badge-background-color: var(--amplify-colors-background-tertiary);
        --amplify-components-badge-border-radius: 9999px;
        --amplify-components-badge-info-background-color: var(--amplify-colors-background-info);
        --amplify-components-badge-warning-background-color: var(--amplify-colors-background-warning);
        --amplify-components-badge-success-background-color: var(--amplify-colors-background-success);
        --amplify-components-badge-error-background-color: var(--amplify-colors-background-error);
        --amplify-components-badge-small-font-size: var(--amplify-font-sizes-xs);
        --amplify-components-badge-small-padding-vertical: var(--amplify-space-xxs);
        --amplify-components-badge-small-padding-horizontal: var(--amplify-space-xs);
        --amplify-components-badge-large-font-size: var(--amplify-font-sizes-medium);
        --amplify-components-badge-large-padding-vertical: var(--amplify-space-small);
        --amplify-components-badge-large-padding-horizontal: var(--amplify-space-medium);
        --amplify-components-button-font-weight: bold;
        --amplify-components-button-text-align: center;
        --amplify-components-button-border-radius: var(--amplify-components-fieldcontrol-border-radius);
        --amplify-components-button-transition-duration: var(--amplify-components-fieldcontrol-transition-duration);
        --amplify-components-button-font-size: var(--amplify-components-fieldcontrol-font-size);
        --amplify-components-button-line-height: var(--amplify-components-fieldcontrol-font-size);
        --amplify-components-button-padding-block-start: var(--amplify-components-fieldcontrol-padding-block-start);
        --amplify-components-button-padding-block-end: var(--amplify-components-fieldcontrol-padding-block-end);
        --amplify-components-button-padding-inline-start: var(--amplify-components-fieldcontrol-padding-inline-start);
        --amplify-components-button-padding-inline-end: var(--amplify-components-fieldcontrol-padding-inline-end);
        --amplify-components-button-border-color: var(--amplify-colors-brand-primary-20);
        --amplify-components-button-border-width: var(--amplify-border-widths-small);
        --amplify-components-button-border-style: solid;
        --amplify-components-button-color: var(--amplify-colors-brand-primary-80);
        --amplify-components-button-hover-color: var(--amplify-colors-focus);
        --amplify-components-button-hover-background-color: var(--amplify-colors-brand-primary-10);
        --amplify-components-button-hover-border-color: var(--amplify-colors-brand-primary-60);
        --amplify-components-button-focus-color: var(--amplify-colors-focus);
        --amplify-components-button-focus-border-color: var(--amplify-colors-focus);
        --amplify-components-button-focus-box-shadow: var(--amplify-colors-focus-0-px-0-px-0-px-1-px);
        --amplify-components-button-active-color: var(--amplify-colors-font-inverse);
        --amplify-components-button-active-background-color: var(--amplify-colors-brand-primary-100);
        --amplify-components-button-active-border-color: var(--amplify-colors-brand-primary-100);
        --amplify-components-button-loading-color: var(--amplify-colors-font-tertiary);
        --amplify-components-button-loading-background-color: transparent;
        --amplify-components-button-loading-border-color: var(--amplify-colors-border-tertiary);
        --amplify-components-button-disabled-color: var(--amplify-colors-font-tertiary);
        --amplify-components-button-disabled-background-color: transparent;
        --amplify-components-button-disabled-border-color: var(--amplify-colors-border-tertiary);
        --amplify-components-button-primary-border-width: 0;
        --amplify-components-button-primary-background-color: var(--amplify-colors-brand-primary-80);
        --amplify-components-button-primary-color: var(--amplify-colors-font-inverse);
        --amplify-components-button-primary-disabled-background-color: var(--amplify-colors-background-tertiary);
        --amplify-components-button-primary-disabled-color: var(--amplify-colors-font-tertiary);
        --amplify-components-button-primary-loading-background-color: var(--amplify-colors-background-tertiary);
        --amplify-components-button-primary-loading-color: var(--amplify-colors-font-tertiary);
        --amplify-components-button-primary-hover-background-color: var(--amplify-colors-brand-primary-90);
        --amplify-components-button-primary-focus-background-color: var(--amplify-colors-brand-primary-90);
        --amplify-components-button-primary-active-background-color: var(--amplify-colors-brand-primary-100);
        --amplify-components-button-link-border-width: 0;
        --amplify-components-button-link-background-color: transparent;
        --amplify-components-button-link-color: var(--amplify-colors-font-interactive);
        --amplify-components-button-link-hover-color: var(--amplify-colors-font-hover);
        --amplify-components-button-link-focus-color: var(--amplify-colors-font-focus);
        --amplify-components-button-link-active-color: var(--amplify-colors-font-active);
        --amplify-components-button-link-disabled-color: var(--amplify-colors-font-tertiary);
        --amplify-components-button-link-loading-color: var(--amplify-colors-font-tertiary);
        --amplify-components-button-small-font-size: var(--amplify-components-fieldcontrol-small-font-size);
        --amplify-components-button-small-line-height: var(--amplify-components-fieldcontrol-small-font-size);
        --amplify-components-button-small-padding-block-start: var(--amplify-components-fieldcontrol-small-padding-block-start);
        --amplify-components-button-small-padding-block-end: var(--amplify-components-fieldcontrol-small-padding-block-end);
        --amplify-components-button-small-padding-inline-start: var(--amplify-components-fieldcontrol-small-padding-inline-start);
        --amplify-components-button-small-padding-inline-end: var(--amplify-components-fieldcontrol-small-padding-inline-end);
        --amplify-components-button-large-font-size: var(--amplify-components-fieldcontrol-large-font-size);
        --amplify-components-button-large-line-height: var(--amplify-components-fieldcontrol-large-font-size);
        --amplify-components-button-large-padding-block-start: var(--amplify-components-fieldcontrol-large-padding-block-start);
        --amplify-components-button-large-padding-block-end: var(--amplify-components-fieldcontrol-large-padding-block-end);
        --amplify-components-button-large-padding-inline-start: var(--amplify-components-fieldcontrol-large-padding-inline-start);
        --amplify-components-button-large-padding-inline-end: var(--amplify-components-fieldcontrol-large-padding-inline-end);
        --amplify-components-card-background-color: var(--amplify-colors-background-primary);
        --amplify-components-card-border-width: var(--amplify-border-widths-small);
        --amplify-components-card-border-style: solid;
        --amplify-components-card-border-color: var(--amplify-colors-border-primary);
        --amplify-components-card-box-shadow: var(--amplify-shadows-medium);
        --amplify-components-card-padding: var(--amplify-space-medium);
        --amplify-components-checkbox-cursor: pointer;
        --amplify-components-checkbox-align-items: center;
        --amplify-components-checkbox-disabled-cursor: not-allowed;
        --amplify-components-checkbox-button-position: relative;
        --amplify-components-checkbox-button-align-items: center;
        --amplify-components-checkbox-button-justify-content: center;
        --amplify-components-checkbox-button-color: var(--amplify-colors-white);
        --amplify-components-checkbox-button-before-width: 100%;
        --amplify-components-checkbox-button-before-height: 100%;
        --amplify-components-checkbox-button-before-border-width: var(--amplify-border-widths-medium);
        --amplify-components-checkbox-button-before-border-radius: 20%;
        --amplify-components-checkbox-button-before-border-style: solid;
        --amplify-components-checkbox-button-before-border-color: var(--amplify-colors-border-primary);
        --amplify-components-checkbox-button-focus-outline-color: var(--amplify-colors-transparent);
        --amplify-components-checkbox-button-focus-outline-style: solid;
        --amplify-components-checkbox-button-focus-outline-width: var(--amplify-outline-widths-medium);
        --amplify-components-checkbox-button-focus-outline-offset: var(--amplify-outline-offsets-medium);
        --amplify-components-checkbox-button-focus-border-color: var(--amplify-colors-transparent);
        --amplify-components-checkbox-button-focus-box-shadow: var(--amplify-0-0-0-2-px-colors-focus);
        --amplify-components-checkbox-button-disabled-border-color: var(--amplify-colors-border-disabled);
        --amplify-components-checkbox-button-error-border-color: var(--amplify-colors-error);
        --amplify-components-checkbox-button-error-focus-border-color: var(--amplify-colors-transparent);
        --amplify-components-checkbox-button-error-focus-box-shadow: var(--amplify-0-0-0-2-px-colors-error);
        --amplify-components-checkbox-icon-background-color: var(--amplify-colors-brand-primary-80);
        --amplify-components-checkbox-icon-border-radius: 20%;
        --amplify-components-checkbox-icon-opacity: var(--amplify-opacities-0);
        --amplify-components-checkbox-icon-transform: scale(0);
        --amplify-components-checkbox-icon-transition-property: all;
        --amplify-components-checkbox-icon-transition-duration: var(--amplify-time-transition-short);
        --amplify-components-checkbox-icon-transition-timing-function: ease-in-out;
        --amplify-components-checkbox-icon-checked-opacity: var(--amplify-opacities-100);
        --amplify-components-checkbox-icon-checked-transform: scale(1);
        --amplify-components-checkbox-icon-checked-disabled-background-color: var(--amplify-colors-background-disabled);
        --amplify-components-checkbox-label-disabled-color: var(--amplify-colors-font-disabled);
        --amplify-components-checkboxfield-align-items: flex-start;
        --amplify-components-checkboxfield-align-content: center;
        --amplify-components-checkboxfield-flex-direction: column;
        --amplify-components-checkboxfield-justify-content: center;
        --amplify-components-divider-border-style: solid;
        --amplify-components-divider-border-color: var(--amplify-colors-border-primary);
        --amplify-components-divider-border-width: var(--amplify-border-widths-medium);
        --amplify-components-divider-small-border-width: var(--amplify-border-widths-small);
        --amplify-components-divider-large-border-width: var(--amplify-border-widths-large);
        --amplify-components-divider-opacity: var(--amplify-opacities-60);
        --amplify-components-field-gap: var(--amplify-space-xs);
        --amplify-components-field-font-size: var(--amplify-font-sizes-medium);
        --amplify-components-field-small-gap: var(--amplify-space-xxs);
        --amplify-components-field-small-font-size: var(--amplify-font-sizes-small);
        --amplify-components-field-large-gap: var(--amplify-space-small);
        --amplify-components-field-large-font-size: var(--amplify-font-sizes-large);
        --amplify-components-fieldcontrol-border-style: solid;
        --amplify-components-fieldcontrol-border-color: var(--amplify-colors-border-primary);
        --amplify-components-fieldcontrol-border-width: var(--amplify-border-widths-small);
        --amplify-components-fieldcontrol-border-radius: var(--amplify-radii-medium);
        --amplify-components-fieldcontrol-padding-block-start: var(--amplify-space-small);
        --amplify-components-fieldcontrol-padding-block-end: var(--amplify-space-small);
        --amplify-components-fieldcontrol-padding-inline-start: var(--amplify-space-medium);
        --amplify-components-fieldcontrol-padding-inline-end: var(--amplify-space-medium);
        --amplify-components-fieldcontrol-font-size: var(--amplify-components-field-font-size);
        --amplify-components-fieldcontrol-line-height: var(--amplify-line-heights-medium);
        --amplify-components-fieldcontrol-transition-duration: var(--amplify-time-transition-medium);
        --amplify-components-fieldcontrol-outline-color: var(--amplify-colors-transparent);
        --amplify-components-fieldcontrol-outline-style: solid;
        --amplify-components-fieldcontrol-outline-width: var(--amplify-outline-widths-medium);
        --amplify-components-fieldcontrol-outline-offset: var(--amplify-outline-offsets-medium);
        --amplify-components-fieldcontrol-small-font-size: var(--amplify-components-field-small-font-size);
        --amplify-components-fieldcontrol-small-padding-block-start: var(--amplify-space-xs);
        --amplify-components-fieldcontrol-small-padding-block-end: var(--amplify-space-xs);
        --amplify-components-fieldcontrol-small-padding-inline-start: var(--amplify-space-small);
        --amplify-components-fieldcontrol-small-padding-inline-end: var(--amplify-space-small);
        --amplify-components-fieldcontrol-small-line-height: var(--amplify-line-heights-small);
        --amplify-components-fieldcontrol-large-font-size: var(--amplify-components-field-large-font-size);
        --amplify-components-fieldcontrol-large-padding-block-start: var(--amplify-space-medium);
        --amplify-components-fieldcontrol-large-padding-block-end: var(--amplify-space-medium);
        --amplify-components-fieldcontrol-large-padding-inline-start: var(--amplify-space-large);
        --amplify-components-fieldcontrol-large-padding-inline-end: var(--amplify-space-large);
        --amplify-components-fieldcontrol-large-line-height: var(--amplify-line-heights-large);
        --amplify-components-fieldcontrol-quiet-border-style: none;
        --amplify-components-fieldcontrol-quiet-border-block-end: var(--amplify-border-widths-small-solid-colors-border-primary-value);
        --amplify-components-fieldcontrol-quiet-border-inline-start: none;
        --amplify-components-fieldcontrol-quiet-border-inline-end: none;
        --amplify-components-fieldcontrol-quiet-border-block-start: none;
        --amplify-components-fieldcontrol-quiet-border-radius: 0;
        --amplify-components-fieldcontrol-quiet-focus-border-block-end-color: var(--amplify-colors-focus);
        --amplify-components-fieldcontrol-quiet-focus-box-shadow: var(--amplify-0-1-px-colors-focus);
        --amplify-components-fieldcontrol-quiet-error-border-block-end-color: var(--amplify-colors-error);
        --amplify-components-fieldcontrol-quiet-error-focus-box-shadow: var(--amplify-0-1-px-colors-error);
        --amplify-components-fieldcontrol-focus-border-color: var(--amplify-colors-focus);
        --amplify-components-fieldcontrol-focus-box-shadow: var(--amplify-0-px-0-px-0-px-1-px-colors-focus);
        --amplify-components-fieldcontrol-disabled-cursor: not-allowed;
        --amplify-components-fieldcontrol-disabled-border-color: var(--amplify-colors-transparent);
        --amplify-components-fieldcontrol-disabled-background-color: var(--amplify-colors-background-disabled);
        --amplify-components-fieldcontrol-error-border-color: var(--amplify-colors-error);
        --amplify-components-fieldcontrol-error-focus-box-shadow: var(--amplify-0-px-0-px-0-px-1-px-colors-error);
        --amplify-components-fieldgroup-gap: 0;
        --amplify-components-fieldmessages-error-color: var(--amplify-colors-error);
        --amplify-components-fieldmessages-error-font-size: var(--amplify-font-sizes-small);
        --amplify-components-fieldmessages-description-font-style: italic;
        --amplify-components-fieldmessages-description-font-size: var(--amplify-font-sizes-small);
        --amplify-components-flex-gap: var(--amplify-space-medium);
        --amplify-components-flex-justify-content: normal;
        --amplify-components-flex-align-items: stretch;
        --amplify-components-flex-align-content: normal;
        --amplify-components-flex-flex-wrap: nowrap;
        --amplify-components-heading-1-font-size: var(--amplify-font-sizes-xxxxl);
        --amplify-components-heading-1-font-weight: var(--amplify-font-weights-light);
        --amplify-components-heading-2-font-size: var(--amplify-font-sizes-xxxl);
        --amplify-components-heading-2-font-weight: var(--amplify-font-weights-light);
        --amplify-components-heading-3-font-size: var(--amplify-font-sizes-xxl);
        --amplify-components-heading-3-font-weight: var(--amplify-font-weights-normal);
        --amplify-components-heading-4-font-size: var(--amplify-font-sizes-xl);
        --amplify-components-heading-4-font-weight: var(--amplify-font-weights-medium);
        --amplify-components-heading-5-font-size: var(--amplify-font-sizes-large);
        --amplify-components-heading-5-font-weight: var(--amplify-font-weights-semibold);
        --amplify-components-heading-6-font-size: var(--amplify-font-sizes-medium);
        --amplify-components-heading-6-font-weight: var(--amplify-font-weights-bold);
        --amplify-components-heading-color: var(--amplify-colors-font-primary);
        --amplify-components-heading-line-height: 1.25;
        --amplify-components-icon-line-height: 1;
        --amplify-components-icon-height: var(--amplify-font-sizes-medium);
        --amplify-components-icon-large-height: var(--amplify-font-sizes-large);
        --amplify-components-icon-small-height: var(--amplify-font-sizes-small);
        --amplify-components-image-max-width: 100%;
        --amplify-components-image-height: auto;
        --amplify-components-image-object-fit: initial;
        --amplify-components-image-object-position: initial;
        --amplify-components-link-active-color: var(--amplify-colors-font-active);
        --amplify-components-link-color: var(--amplify-colors-font-interactive);
        --amplify-components-link-focus-color: var(--amplify-colors-font-focus);
        --amplify-components-link-hover-color: var(--amplify-colors-font-hover);
        --amplify-components-link-large-font-size: var(--amplify-font-sizes-large);
        --amplify-components-link-small-font-size: var(--amplify-font-sizes-small);
        --amplify-components-link-visited-color: var(--amplify-colors-font-tertiary);
        --amplify-components-pagination-current-color: var(--amplify-colors-white);
        --amplify-components-pagination-current-font-size: var(--amplify-font-sizes-small);
        --amplify-components-pagination-current-background-color: rgba(0, 0, 0, 0.4);
        --amplify-components-pagination-button-color: inherit;
        --amplify-components-pagination-button-font-weight: inherit;
        --amplify-components-pagination-button-padding-top: 0;
        --amplify-components-pagination-button-padding-right: 6px;
        --amplify-components-pagination-button-padding-bottom: 0;
        --amplify-components-pagination-button-padding-left: 6px;
        --amplify-components-pagination-button-transition: var(--amplify-background-color-time-transition-medium);
        --amplify-components-pagination-button-hover-background-color: rgba(0, 0, 0, 0.1);
        --amplify-components-pagination-button-disabled-opacity: var(--amplify-opacities-40);
        --amplify-components-pagination-ellipsis-padding-right: 8px;
        --amplify-components-pagination-ellipsis-padding-left: 8px;
        --amplify-components-pagination-item-container-margin-left: 4px;
        --amplify-components-pagination-item-container-margin-right: 4px;
        --amplify-components-pagination-item-shared-height: var(--amplify-font-sizes-xxl);
        --amplify-components-pagination-item-shared-min-width: var(--amplify-font-sizes-xxl);
        --amplify-components-pagination-item-shared-border-radius: var(--amplify-font-sizes-medium);
        --amplify-components-phonenumberfield-min-width: 6.5rem;
        --amplify-components-phonenumberfield-white-space: nowrap;
        --amplify-components-phonenumberfield-small-min-width: 5.5rem;
        --amplify-components-phonenumberfield-large-min-width: 7.5rem;
        --amplify-components-placeholder-border-radius: var(--amplify-radii-medium);
        --amplify-components-placeholder-transition-duration: var(--amplify-time-transition-long);
        --amplify-components-placeholder-start-color: var(--amplify-colors-background-secondary);
        --amplify-components-placeholder-end-color: var(--amplify-colors-background-tertiary);
        --amplify-components-placeholder-small-height: var(--amplify-space-small);
        --amplify-components-placeholder-default-height: var(--amplify-space-medium);
        --amplify-components-placeholder-large-height: var(--amplify-space-large);
        --amplify-components-radio-align-items: center;
        --amplify-components-radio-justify-content: flex-start;
        --amplify-components-radio-gap: inherit;
        --amplify-components-radio-disabled-cursor: not-allowed;
        --amplify-components-radio-button-align-items: center;
        --amplify-components-radio-button-justify-content: center;
        --amplify-components-radio-button-width: var(--amplify-font-sizes-medium);
        --amplify-components-radio-button-height: var(--amplify-font-sizes-medium);
        --amplify-components-radio-button-box-sizing: border-box;
        --amplify-components-radio-button-border-width: var(--amplify-border-widths-medium);
        --amplify-components-radio-button-border-style: solid;
        --amplify-components-radio-button-border-radius: 50%;
        --amplify-components-radio-button-border-color: var(--amplify-colors-border-primary);
        --amplify-components-radio-button-color: var(--amplify-colors-white);
        --amplify-components-radio-button-background-color: var(--amplify-colors-white);
        --amplify-components-radio-button-transition-property: all;
        --amplify-components-radio-button-transition-duration: var(--amplify-time-transition-medium);
        --amplify-components-radio-button-outline-color: var(--amplify-colors-transparent);
        --amplify-components-radio-button-outline-style: solid;
        --amplify-components-radio-button-outline-width: var(--amplify-outline-widths-medium);
        --amplify-components-radio-button-outline-offset: var(--amplify-outline-offsets-medium);
        --amplify-components-radio-button-before-content: \\"\\";
        --amplify-components-radio-button-before-display: inline-block;
        --amplify-components-radio-button-before-width: 50%;
        --amplify-components-radio-button-before-height: 50%;
        --amplify-components-radio-button-before-border-radius: 50%;
        --amplify-components-radio-button-before-background-color: currentColor;
        --amplify-components-radio-button-small-width: var(--amplify-font-sizes-xs);
        --amplify-components-radio-button-small-height: var(--amplify-font-sizes-xs);
        --amplify-components-radio-button-large-width: var(--amplify-font-sizes-large);
        --amplify-components-radio-button-large-height: var(--amplify-font-sizes-large);
        --amplify-components-radio-button-checked-color: var(--amplify-colors-red-60);
        --amplify-components-radio-button-checked-disabled-color: var(--amplify-colors-disabled);
        --amplify-components-radio-button-focus-border-color: var(--amplify-colors-focus);
        --amplify-components-radio-button-focus-box-shadow: var(--amplify-0-0-0-1-px-colors-focus);
        --amplify-components-radio-button-error-border-color: var(--amplify-colors-error);
        --amplify-components-radio-button-error-focus-box-shadow: var(--amplify-0-0-0-1-px-colors-error);
        --amplify-components-radio-button-disabled-border-color: var(--amplify-colors-border-disabled);
        --amplify-components-radio-button-disabled-background-color: var(--amplify-colors-white);
        --amplify-components-radio-button-disabled-color: var(--amplify-colors-white);
        --amplify-components-radio-label-disabled-color: var(--amplify-colors-font-disabled);
        --amplify-components-rating-large-size: var(--amplify-font-sizes-xxxl);
        --amplify-components-rating-default-size: var(--amplify-font-sizes-xl);
        --amplify-components-rating-small-size: var(--amplify-font-sizes-small);
        --amplify-components-rating-filled-color: var(--amplify-colors-icon-filled);
        --amplify-components-rating-empty-color: var(--amplify-colors-icon-empty);
        --amplify-components-select-padding-inline-end: var(--amplify-space-xxl);
        --amplify-components-select-wrapper-display: block;
        --amplify-components-select-wrapper-position: relative;
        --amplify-components-select-wrapper-cursor: pointer;
        --amplify-components-select-icon-wrapper-position: absolute;
        --amplify-components-select-icon-wrapper-height: 50%;
        --amplify-components-select-icon-wrapper-top: 25%;
        --amplify-components-select-icon-wrapper-right: var(--amplify-space-medium);
        --amplify-components-select-icon-wrapper-pointer-events: none;
        --amplify-components-select-white-space: nowrap;
        --amplify-components-select-min-width: 6.5rem;
        --amplify-components-select-small-min-width: 5.5rem;
        --amplify-components-select-large-min-width: 7.5rem;
        --amplify-components-switchfield-disabled-opacity: var(--amplify-opacities-30);
        --amplify-components-switchfield-focused-shadow: var(--amplify-shadows-small);
        --amplify-components-switchfield-label-padding: var(--amplify-space-xs);
        --amplify-components-switchfield-large-font-size: var(--amplify-font-sizes-large);
        --amplify-components-switchfield-small-font-size: var(--amplify-font-sizes-small);
        --amplify-components-switchfield-thumb-background: var(--amplify-colors-white);
        --amplify-components-switchfield-thumb-border-color: var(--amplify-colors-neutral-20);
        --amplify-components-switchfield-thumb-border-radius: var(--amplify-radii-xxxl);
        --amplify-components-switchfield-thumb-checked-transform: var(--amplify-transforms-slide-x-medium);
        --amplify-components-switchfield-thumb-transition-duration: var(--amplify-time-transition-medium);
        --amplify-components-switchfield-thumb-width: var(--amplify-space-relative-medium);
        --amplify-components-switchfield-track-background: var(--amplify-colors-neutral-40);
        --amplify-components-switchfield-track-border-radius: var(--amplify-radii-xxxl);
        --amplify-components-switchfield-track-checked-background: var(--amplify-colors-blue-40);
        --amplify-components-switchfield-track-height: var(--amplify-space-relative-medium);
        --amplify-components-switchfield-track-padding: var(--amplify-outline-widths-medium);
        --amplify-components-switchfield-track-transition-duration: var(--amplify-time-transition-short);
        --amplify-components-switchfield-track-width: var(--amplify-space-relative-xl);
        --amplify-components-tabs-background-color: transparent;
        --amplify-components-tabs-border-color: var(--amplify-colors-border-secondary);
        --amplify-components-tabs-border-style: solid;
        --amplify-components-tabs-border-width: var(--amplify-border-widths-medium);
        --amplify-components-tabs-item-background-color: transparent;
        --amplify-components-tabs-item-border-color: var(--amplify-colors-border-secondary);
        --amplify-components-tabs-item-border-style: solid;
        --amplify-components-tabs-item-border-width: var(--amplify-border-widths-medium);
        --amplify-components-tabs-item-color: var(--amplify-colors-font-secondary);
        --amplify-components-tabs-item-font-size: var(--amplify-font-sizes-medium);
        --amplify-components-tabs-item-font-weight: var(--amplify-font-weights-bold);
        --amplify-components-tabs-item-padding-vertical: var(--amplify-space-small);
        --amplify-components-tabs-item-padding-horizontal: var(--amplify-space-medium);
        --amplify-components-tabs-item-text-align: center;
        --amplify-components-tabs-item-transition-duration: var(--amplify-time-transition-medium);
        --amplify-components-tabs-item-hover-color: var(--amplify-colors-font-hover);
        --amplify-components-tabs-item-focus-color: var(--amplify-colors-font-focus);
        --amplify-components-tabs-item-active-color: var(--amplify-colors-font-interactive);
        --amplify-components-tabs-item-active-border-color: var(--amplify-colors-font-interactive);
        --amplify-components-tabs-item-active-background-color: transparent;
        --amplify-components-tabs-item-disabled-color: var(--amplify-colors-font-disabled);
        --amplify-components-tabs-item-disabled-background-color: transparent;
        --amplify-components-tabs-item-disabled-border-color: var(--amplify-colors-border-tertiary);
        --amplify-components-text-color: var(--amplify-colors-font-primary);
        --amplify-components-text-primary-color: var(--amplify-colors-font-primary);
        --amplify-components-text-secondary-color: var(--amplify-colors-font-secondary);
        --amplify-components-text-tertiary-color: var(--amplify-colors-font-tertiary);
        --amplify-components-text-error-color: var(--amplify-colors-font-error);
        --amplify-components-text-warning-color: var(--amplify-colors-font-warning);
        --amplify-components-text-success-color: var(--amplify-colors-font-success);
        --amplify-components-text-info-color: var(--amplify-colors-font-info);
        --amplify-components-togglebutton-border-color: var(--amplify-colors-border-secondary);
        --amplify-components-togglebutton-color: rgba(0, 0, 0, 0.54);
        --amplify-components-togglebutton-hover-background-color: rgba(0, 0, 0, 0.04);
        --amplify-components-togglebutton-focus-border-color: var(--amplify-colors-focus);
        --amplify-components-togglebutton-focus-color: rgba(0, 0, 0, 0.54);
        --amplify-components-togglebutton-active-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebutton-disabled-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebutton-disabled-border-color: var(--amplify-colors-border-secondary);
        --amplify-components-togglebutton-disabled-color: var(--amplify-colors-font-disabled);
        --amplify-components-togglebutton-pressed-color: rgba(0, 0, 0, 0.87);
        --amplify-components-togglebutton-pressed-background-color: rgba(0, 0, 0, 0.08);
        --amplify-components-togglebutton-pressed-hover-background-color: rgba(0, 0, 0, 0.12);
        --amplify-components-togglebutton-primary-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebutton-primary-border-width: var(--amplify-border-widths-small);
        --amplify-components-togglebutton-primary-focus-border-color: var(--amplify-colors-focus);
        --amplify-components-togglebutton-primary-focus-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebutton-primary-focus-box-shadow: var(--amplify-0-0-0-1-px-colors-focus);
        --amplify-components-togglebutton-primary-focus-color: rgba(0, 0, 0, 0.54);
        --amplify-components-togglebutton-primary-hover-background-color: rgba(0, 0, 0, 0.04);
        --amplify-components-togglebutton-primary-hover-color: rgba(0, 0, 0, 0.54);
        --amplify-components-togglebutton-primary-disabled-background-color: var(--amplify-colors-background-tertiary);
        --amplify-components-togglebutton-primary-disabled-color: var(--amplify-colors-font-disabled);
        --amplify-components-togglebutton-primary-pressed-background-color: rgba(0, 128, 128, 0.08);
        --amplify-components-togglebutton-primary-pressed-color: rgba(0, 128, 128, 0.87);
        --amplify-components-togglebutton-primary-pressed-hover-background-color: rgba(0, 128, 128, 0.12);
        --amplify-components-togglebutton-link-color: rgba(0, 0, 0, 0.54);
        --amplify-components-togglebutton-link-hover-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebutton-link-hover-color: rgba(0, 0, 0, 0.54);
        --amplify-components-togglebutton-link-focus-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebutton-link-focus-color: rgba(0, 0, 0, 0.54);
        --amplify-components-togglebutton-link-disabled-color: var(--amplify-colors-font-disabled);
        --amplify-components-togglebutton-link-pressed-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebutton-link-pressed-color: rgba(0, 0, 0, 0.87);
        --amplify-components-togglebutton-link-pressed-hover-background-color: var(--amplify-colors-transparent);
        --amplify-components-togglebuttongroup-align-items: center;
        --amplify-components-togglebuttongroup-align-content: center;
        --amplify-components-togglebuttongroup-justify-content: flex-start;
        --amplify-border-widths-small: 1px;
        --amplify-border-widths-medium: 2px;
        --amplify-border-widths-large: 3px;
        --amplify-colors-red-10: hsl(0, 75%, 95%);
        --amplify-colors-red-20: hsl(0, 75%, 85%);
        --amplify-colors-red-40: hsl(0, 75%, 75%);
        --amplify-colors-red-60: hsl(0, 50%, 50%);
        --amplify-colors-red-80: hsl(0, 95%, 30%);
        --amplify-colors-red-90: hsl(0, 100%, 20%);
        --amplify-colors-red-100: hsl(0, 100%, 15%);
        --amplify-colors-orange-10: hsl(30, 75%, 95%);
        --amplify-colors-orange-20: hsl(30, 75%, 85%);
        --amplify-colors-orange-40: hsl(30, 75%, 75%);
        --amplify-colors-orange-60: hsl(30, 50%, 50%);
        --amplify-colors-orange-80: hsl(30, 95%, 30%);
        --amplify-colors-orange-90: hsl(30, 100%, 20%);
        --amplify-colors-orange-100: hsl(30, 100%, 15%);
        --amplify-colors-yellow-10: hsl(60, 75%, 95%);
        --amplify-colors-yellow-20: hsl(60, 75%, 85%);
        --amplify-colors-yellow-40: hsl(60, 75%, 75%);
        --amplify-colors-yellow-60: hsl(60, 50%, 50%);
        --amplify-colors-yellow-80: hsl(60, 95%, 30%);
        --amplify-colors-yellow-90: hsl(60, 100%, 20%);
        --amplify-colors-yellow-100: hsl(60, 100%, 15%);
        --amplify-colors-green-10: hsl(130, 75%, 95%);
        --amplify-colors-green-20: hsl(130, 75%, 85%);
        --amplify-colors-green-40: hsl(130, 75%, 75%);
        --amplify-colors-green-60: hsl(130, 50%, 50%);
        --amplify-colors-green-80: hsl(130, 95%, 30%);
        --amplify-colors-green-90: hsl(130, 100%, 20%);
        --amplify-colors-green-100: hsl(130, 100%, 15%);
        --amplify-colors-teal-10: hsl(190, 75%, 95%);
        --amplify-colors-teal-20: hsl(190, 75%, 85%);
        --amplify-colors-teal-40: hsl(190, 70%, 70%);
        --amplify-colors-teal-60: hsl(190, 50%, 50%);
        --amplify-colors-teal-80: hsl(190, 95%, 30%);
        --amplify-colors-teal-90: hsl(190, 100%, 20%);
        --amplify-colors-teal-100: hsl(190, 100%, 15%);
        --amplify-colors-blue-10: hsl(220, 95%, 95%);
        --amplify-colors-blue-20: hsl(220, 85%, 85%);
        --amplify-colors-blue-40: hsl(220, 70%, 70%);
        --amplify-colors-blue-60: hsl(220, 50%, 50%);
        --amplify-colors-blue-80: hsl(220, 95%, 30%);
        --amplify-colors-blue-90: hsl(220, 100%, 20%);
        --amplify-colors-blue-100: hsl(220, 100%, 15%);
        --amplify-colors-purple-10: hsl(300, 95%, 95%);
        --amplify-colors-purple-20: hsl(300, 85%, 85%);
        --amplify-colors-purple-40: hsl(300, 70%, 70%);
        --amplify-colors-purple-60: hsl(300, 50%, 50%);
        --amplify-colors-purple-80: hsl(300, 95%, 30%);
        --amplify-colors-purple-90: hsl(300, 100%, 20%);
        --amplify-colors-purple-100: hsl(300, 100%, 15%);
        --amplify-colors-pink-10: hsl(340, 95%, 95%);
        --amplify-colors-pink-20: hsl(340, 90%, 85%);
        --amplify-colors-pink-40: hsl(340, 70%, 70%);
        --amplify-colors-pink-60: hsl(340, 50%, 50%);
        --amplify-colors-pink-80: hsl(340, 95%, 30%);
        --amplify-colors-pink-90: hsl(340, 100%, 20%);
        --amplify-colors-pink-100: hsl(340, 100%, 15%);
        --amplify-colors-neutral-10: hsl(210, 5%, 95%);
        --amplify-colors-neutral-20: hsl(210, 5%, 90%);
        --amplify-colors-neutral-40: hsl(210, 5%, 80%);
        --amplify-colors-neutral-60: hsl(210, 6%, 70%);
        --amplify-colors-neutral-80: hsl(210, 10%, 40%);
        --amplify-colors-neutral-90: hsl(210, 25%, 25%);
        --amplify-colors-neutral-100: hsl(210, 50%, 10%);
        --amplify-colors-brand-primary-10: var(--amplify-colors-teal-10);
        --amplify-colors-brand-primary-20: var(--amplify-colors-teal-20);
        --amplify-colors-brand-primary-40: var(--amplify-colors-teal-40);
        --amplify-colors-brand-primary-60: var(--amplify-colors-teal-60);
        --amplify-colors-brand-primary-80: var(--amplify-colors-teal-80);
        --amplify-colors-brand-primary-90: var(--amplify-colors-teal-90);
        --amplify-colors-brand-primary-100: var(--amplify-colors-teal-100);
        --amplify-colors-brand-secondary-10: var(--amplify-colors-purple-10);
        --amplify-colors-brand-secondary-20: var(--amplify-colors-purple-20);
        --amplify-colors-brand-secondary-40: var(--amplify-colors-purple-40);
        --amplify-colors-brand-secondary-60: var(--amplify-colors-purple-60);
        --amplify-colors-brand-secondary-80: var(--amplify-colors-purple-80);
        --amplify-colors-brand-secondary-90: var(--amplify-colors-purple-90);
        --amplify-colors-brand-secondary-100: var(--amplify-colors-purple-100);
        --amplify-colors-font-primary: var(--amplify-colors-neutral-100);
        --amplify-colors-font-secondary: var(--amplify-colors-neutral-80);
        --amplify-colors-font-tertiary: var(--amplify-colors-neutral-60);
        --amplify-colors-font-disabled: var(--amplify-colors-font-tertiary);
        --amplify-colors-font-inverse: var(--amplify-colors-white);
        --amplify-colors-font-interactive: var(--amplify-colors-brand-primary-80);
        --amplify-colors-font-hover: var(--amplify-colors-brand-primary-90);
        --amplify-colors-font-focus: var(--amplify-colors-brand-primary-90);
        --amplify-colors-font-active: var(--amplify-colors-brand-primary-100);
        --amplify-colors-font-info: var(--amplify-colors-blue-80);
        --amplify-colors-font-warning: var(--amplify-colors-orange-80);
        --amplify-colors-font-error: var(--amplify-colors-red-80);
        --amplify-colors-font-success: var(--amplify-colors-green-80);
        --amplify-colors-background-primary: var(--amplify-colors-white);
        --amplify-colors-background-secondary: var(--amplify-colors-neutral-10);
        --amplify-colors-background-tertiary: var(--amplify-colors-neutral-20);
        --amplify-colors-background-disabled: var(--amplify-colors-background-tertiary);
        --amplify-colors-background-info: var(--amplify-colors-blue-20);
        --amplify-colors-background-warning: var(--amplify-colors-orange-20);
        --amplify-colors-background-error: var(--amplify-colors-red-20);
        --amplify-colors-background-success: var(--amplify-colors-green-20);
        --amplify-colors-border-primary: var(--amplify-colors-neutral-60);
        --amplify-colors-border-secondary: var(--amplify-colors-neutral-40);
        --amplify-colors-border-tertiary: var(--amplify-colors-neutral-20);
        --amplify-colors-border-disabled: var(--amplify-colors-border-tertiary);
        --amplify-colors-focus: var(--amplify-colors-brand-primary-100);
        --amplify-colors-disabled: var(--amplify-colors-neutral-40);
        --amplify-colors-error: var(--amplify-colors-red-80);
        --amplify-colors-shadow-primary: hsl(210, 50%, 10%, 0.25);
        --amplify-colors-shadow-secondary: hsl(210, 50%, 10%, 0.15);
        --amplify-colors-shadow-tertiary: hsl(210, 50%, 10%, 0.05);
        --amplify-colors-black: #000;
        --amplify-colors-white: #fff;
        --amplify-colors-transparent: transparent;
        --amplify-colors-icon-filled: var(--amplify-colors-orange-40);
        --amplify-colors-icon-empty: var(--amplify-colors-neutral-60);
        --amplify-fonts-default-variable: 'InterVariable', -apple-system, BlinkMacSystemFont,
                'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',
                sans-serif;
        --amplify-fonts-default-static: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
                'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
        --amplify-font-sizes-xs: 0.75rem;
        --amplify-font-sizes-small: 0.875rem;
        --amplify-font-sizes-medium: 1rem;
        --amplify-font-sizes-large: 1.25rem;
        --amplify-font-sizes-xl: 1.5rem;
        --amplify-font-sizes-xxl: 2rem;
        --amplify-font-sizes-xxxl: 3rem;
        --amplify-font-sizes-xxxxl: 5rem;
        --amplify-font-weights-hairline: 100;
        --amplify-font-weights-thin: 200;
        --amplify-font-weights-light: 300;
        --amplify-font-weights-normal: 400;
        --amplify-font-weights-medium: 500;
        --amplify-font-weights-semibold: 600;
        --amplify-font-weights-bold: 700;
        --amplify-font-weights-extrabold: 800;
        --amplify-font-weights-black: 900;
        --amplify-line-heights-small: 2;
        --amplify-line-heights-medium: 2.25;
        --amplify-line-heights-large: 2.5;
        --amplify-opacities-0: 0;
        --amplify-opacities-10: 0.1;
        --amplify-opacities-20: 0.2;
        --amplify-opacities-30: 0.3;
        --amplify-opacities-40: 0.4;
        --amplify-opacities-50: 0.5;
        --amplify-opacities-60: 0.6;
        --amplify-opacities-70: 0.7;
        --amplify-opacities-80: 0.8;
        --amplify-opacities-90: 0.9;
        --amplify-opacities-100: 1;
        --amplify-outline-offsets-small: 1px;
        --amplify-outline-offsets-medium: 2px;
        --amplify-outline-offsets-large: 3px;
        --amplify-outline-widths-small: 1px;
        --amplify-outline-widths-medium: 2px;
        --amplify-outline-widths-large: 3px;
        --amplify-radii-small: 0.125rem;
        --amplify-radii-medium: 0.25rem;
        --amplify-radii-large: 1rem;
        --amplify-radii-xl: 2rem;
        --amplify-radii-xxl: 4rem;
        --amplify-radii-xxxl: 8rem;
        --amplify-shadows-small: 0px 2px 4px var(--amplify-colors-shadow-tertiary);
        --amplify-shadows-medium: 0px 2px 6px var(--amplify-colors-shadow-secondary);
        --amplify-shadows-large: 0px 4px 12px var(--amplify-colors-shadow-primary);
        --amplify-space-xxs: 0.25rem;
        --amplify-space-xs: 0.5rem;
        --amplify-space-small: 0.75rem;
        --amplify-space-medium: 1rem;
        --amplify-space-large: 1.5rem;
        --amplify-space-xl: 2.0rem;
        --amplify-space-xxl: 3.0rem;
        --amplify-space-xxxl: 4.5rem;
        --amplify-space-relative-xxs: 0.25em;
        --amplify-space-relative-xs: 0.5em;
        --amplify-space-relative-small: 0.75em;
        --amplify-space-relative-medium: 1em;
        --amplify-space-relative-large: 1.5em;
        --amplify-space-relative-xl: 2.0em;
        --amplify-space-relative-xxl: 3.0em;
        --amplify-space-relative-xxxl: 4.5em;
        --amplify-time-transition-short: 100ms;
        --amplify-time-transition-medium: 250ms;
        --amplify-time-transition-long: 500ms;
        --amplify-transforms-slide-x-small: translateX(0.5em);
        --amplify-transforms-slide-x-medium: translateX(1em);
        --amplify-transforms-slide-x-large: translateX(2em);
        }

        @media (prefers-color-scheme: dark) {
          [data-amplify-theme] {
            --amplify-colors-background-primary: #000;
          }
        }
        @media(min-width: 30em) {
          [data-amplify-theme] {
            --amplify-space-medium: 0.5rem;
          }
        }
        @media(min-width: 62em) {
          [data-amplify-theme] {
            --amplify-space-medium: 2.5rem;
          }
        }
        .disco-theme {
        --amplify-colors-background-primary: pink;
        }"
      `);
    });
  });
});
