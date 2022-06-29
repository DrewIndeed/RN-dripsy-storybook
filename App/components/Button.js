import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, styled} from 'dripsy';

export const Button = ({
  onPress = () => {},
  children = '',
  size = 'large',
  type = 'primary',
  variant = 'solid',
}) => {
  // create Dripsy version of TouchableOpacity
  const StyledTouchableOpacity = styled(TouchableOpacity)({});

  // variants arrays
  let containerVariantArr = [];
  let textVariantArr = ['text.buttonBase'];

  // ADJUST VARIANTS ARRAYS BASED ON PROPS 👇
  // handle size
  if (size === 'large') {
    containerVariantArr.push('buttons.large');
    textVariantArr.push('text.buttonLarge');
  } else {
    containerVariantArr.push('buttons.medium');
  }

  // handle type
  if (type === 'primary') {
    containerVariantArr.push('buttons.primary');
  } else {
    containerVariantArr.push('buttons.secondary');
  }

  // handle variant
  if (variant === 'solid') {
    containerVariantArr.push('buttons.solid');
    textVariantArr.push('text.buttonSolid');
  } else {
    containerVariantArr.push(
      type === 'primary'
        ? 'buttons.outlinePrimary'
        : 'buttons.outlineSecondary',
    );
    textVariantArr.push(
      type === 'primary'
        ? 'text.buttonPrimaryOutline'
        : 'text.buttonSecondaryOutline',
    );
  }

  // render
  return (
    <StyledTouchableOpacity onPress={onPress} variants={containerVariantArr}>
      <Text variants={textVariantArr}>{children}</Text>
    </StyledTouchableOpacity>
  );
};
