import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styled, Text} from 'dripsy';

export const Button = ({
  onPress = () => {},
  children = '',
  outline = false,
}) => {
  // button container base styles
  let containerStyle = {
    backgroundColor: 'primary',
    paddingVertical: '$3',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'primary',
    marginVertical: '$2',
  };

  // button text base styles
  let textStyle = {
    color: 'background',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'black',
  };

  // adjust styling objects if it is another variant
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

  // create a styled container using Dripsy style to use the theme
  const StyledTouchableOpacity = styled(TouchableOpacity)(containerStyle);

  // render
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Text sx={textStyle}>{children}</Text>
    </StyledTouchableOpacity>
  );
};
