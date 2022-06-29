import React from 'react';
import {Text, View} from 'dripsy';

export const FieldWrapper = ({
  children,
  label = '',
  message = '',
  messageType,
}) => {
  const msgTypeVariantArr = ['text.messageText'];

  if (messageType === 'success') {
    msgTypeVariantArr.push('text.messageSuccess');
  } else if (messageType === 'error') {
    msgTypeVariantArr.push('text.messageError');
  }

  return (
    <View variant="layout.fieldWrapper">
      <Text variant="text.labelText">{label}</Text>
      {children}
      <Text variants={msgTypeVariantArr}>{message}</Text>
    </View>
  );
};
