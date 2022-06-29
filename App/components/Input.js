import React from 'react';
import {View, TextInput} from 'dripsy';
import {FieldWrapper} from './FieldWrapper';

export const Input = ({label, message, messageType, ...rest}) => {
  return (
    <FieldWrapper label={label} message={message} messageType={messageType}>
      <TextInput variant="form.input" {...rest} />
      <View variant="form.border" />
    </FieldWrapper>
  );
};
