import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Button} from '../components/Button';
import {BufferView} from './decorators';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('primary', () => (
    <Button
      onPress={() => {
        action('pressed-default');
        console.log('From Primary');
      }}>
      Press Me
    </Button>
  ))
  .add('secondary', () => (
    <Button
      type="secondary"
      variant="outline"
      onPress={() => {
        action('pressed-default');
        console.log('From Secondary');
      }}>
      Press Me
    </Button>
  ));
