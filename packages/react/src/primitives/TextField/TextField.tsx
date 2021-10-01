import classNames from 'classnames';

import { ComponentClassNames } from '../shared/constants';
import { useAmplifyFieldID } from '../shared/utils';
import { FieldDescription, FieldErrorMessage } from '../Field';
import { Flex } from '../Flex';
import { FieldGroup } from '../FieldGroup';
import { Input } from '../Input';
import { Label } from '../Label';
import {
  TextAreaFieldProps,
  TextFieldProps,
  TextInputFieldProps,
} from '../types';
import { Textarea } from '../Textarea';
import { ChangeEventHandler } from 'react';
import { isElementOfType } from 'react-dom/test-utils';

const isMultilineField = <ElementType,>(props: TextFieldProps<ElementType>) => {
  return props.multiline;
};

export const TextField = <ElementType,>(props: TextFieldProps<ElementType>) => {
  const {
    alignContent,
    alignItems,
    autoComplete,
    className,
    defaultValue,
    descriptiveText,
    direction = 'column',
    errorMessage,
    gap,
    hasError = false,
    id,
    isDisabled,
    isReadOnly,
    isRequired,
    justifyContent,
    label,
    labelHidden = false,
    outerEndComponent,
    outerStartComponent,
    innerStartComponent,
    innerEndComponent,
    multiline = false,
    size,
    testId,
    type = 'text',
    value,
    wrap,
    ...rest
  } = props;

  const fieldId = useAmplifyFieldID(id);
  let control = null;

  if (isMultilineField(props)) {
    control = (
      <Textarea
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        hasError={hasError}
        onChange={props.onChange}
        onCopy={props.onCopy}
        id={fieldId}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        size={size}
        type={type}
        value={value}
        {...rest}
      />
    );
  } else {
    <Input
      autoComplete={autoComplete}
      defaultValue={defaultValue}
      hasError={hasError}
      id={fieldId}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      size={size}
      type={type}
      onChange={props.onChange}
      value={value}
      {...rest}
    />;
  }

  return (
    <Flex
      alignContent={alignContent}
      alignItems={alignItems}
      className={classNames(
        ComponentClassNames.Field,
        ComponentClassNames.TextField,
        className
      )}
      data-size={size}
      direction={direction}
      gap={gap}
      justifyContent={justifyContent}
      testId={testId}
      wrap={wrap}
    >
      <Label htmlFor={fieldId} visuallyHidden={labelHidden}>
        {label}
      </Label>
      <FieldDescription
        labelHidden={labelHidden}
        descriptiveText={descriptiveText}
      />
      <FieldGroup
        outerStartComponent={outerStartComponent}
        outerEndComponent={outerEndComponent}
        innerStartComponent={innerStartComponent}
        innerEndComponent={innerEndComponent}
      >
        {control}
      </FieldGroup>
      <FieldErrorMessage hasError={hasError} errorMessage={errorMessage} />
    </Flex>
  );
};
