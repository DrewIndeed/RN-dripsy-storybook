import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import {Input as TextInput} from '../components/Input';
import {BufferView} from './decorators';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultTextInputProps = {
  label: 'Demo',
  onChangeText: action('onChangeText'),
};

storiesOf('TextInput', module)
  .addDecorator(BufferView)
  .add('default', () => <TextInput {...defaultTextInputProps} />)
  .add('with placeholder', () => (
    <TextInput {...defaultTextInputProps} placeholder="Some placeholder" />
  ))
  .add('with value', () => (
    <TextInput {...defaultTextInputProps} value="Some value" />
  ))
  .add('with success message', () => (
    <TextInput
      {...defaultTextInputProps}
      message="This is a success"
      messageType="success"
    />
  ))
  .add('with error message', () => (
    <TextInput
      {...defaultTextInputProps}
      message="This is an error"
      messageType="error"
    />
  ))
  .add('with left icon', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Email"
      value="andrew@gmail.com"
      keyboardType="email-address"
      iconLeft={<Icon name="rocket" size={30} color="#28559a" />}
    />
  ))
  .add('with right icon', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Email"
      value="andrew@gmail.com"
      keyboardType="email-address"
      iconRight={<Icon name="rocket" size={30} color="#28559a" />}
    />
  ))
  .add('email', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Email"
      value="andrew@gmail.com"
      keyboardType="email-address"
    />
  ))
  .add('password', () => (
    <TextInput
      {...defaultTextInputProps}
      label="Password"
      value="password"
      secureTextEntry
    />
  ));
