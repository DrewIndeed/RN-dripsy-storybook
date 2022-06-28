import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styled, Text} from 'dripsy';

export const Button = ({
  onPress = () => {},
  children = '',
  outline = false,
}) => {
  let containerStyle = {
    backgroundColor: 'primary',
    paddingVertical: '$3',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'primary',
    marginVertical: '$2',
  };

  let textStyle = {
    color: 'background',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'black',
  };

  if (outline) {
    containerStyle = {
      ...containerStyle,
      ...{backgroundColor: 'transparent', borderColor: 'secondary'},
    };

    textStyle = {
      ...textStyle,
      ...{color: 'secondary'},
    };
  }

  const StyledTouchableOpacity = styled(TouchableOpacity)(containerStyle);

  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Text sx={textStyle}>{children}</Text>
    </StyledTouchableOpacity>
  );
};
