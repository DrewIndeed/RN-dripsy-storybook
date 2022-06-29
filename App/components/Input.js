import React from 'react';
import {View, TextInput, Text} from 'dripsy';
import {FieldWrapper} from './FieldWrapper';

export const Input = ({
  label = '',
  message = '',
  messageType = '',
  iconLeft = '',
  iconRight = '',
  ...rest
}) => {
  // const StyledText = styled(Text)({});
  return (
    <FieldWrapper label={label} message={message} messageType={messageType}>
      <View
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text sx={{marginRight: iconLeft !== '' ? 5 : 0}}>{iconLeft}</Text>
        <TextInput variant="form.input" {...rest} />
        <Text>{iconRight}</Text>
      </View>
      <View variant="form.border" />
    </FieldWrapper>
  );
};
