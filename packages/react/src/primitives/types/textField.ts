import * as React from 'react';

import { FlexStyleProps } from './flex';
import { InputProps } from './input';
import { FieldProps } from './field';
import { TextareaProps } from './textarea';

export type TextFieldType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | string;

export interface TextFieldOptions extends FieldProps, FlexStyleProps {
  /**
   * Input field type
   */
  type?: TextFieldType;

  /**
   * Component(s) to show after input
   */
  outerEndComponent?: React.ReactNode;

  /**
   * Component(s) to show before input
   */
  outerStartComponent?: React.ReactNode;

  /**
   * FieldGroupIconButton component to show inside of input at start
   */
  innerStartComponent?: React.ReactNode;

  /**
   * FieldGroupIconButton component to show inside of input at end
   */
  innerEndComponent?: React.ReactNode;
}

export interface TextInputFieldProps<ElementType>
  extends TextFieldOptions,
    InputProps<ElementType> {
  multiline: false;
}

export interface TextAreaFieldProps<ElementType>
  extends TextFieldOptions,
    TextareaProps<ElementType> {
  multiline: true;
}

export type TextFieldProps<ElementType> =
  ElementType extends HTMLTextAreaElement
    ? TextAreaFieldProps<HTMLTextAreaElement>
    : TextInputFieldProps<HTMLInputElement>;
