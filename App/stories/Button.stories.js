import React from 'react';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Button} from '../components/Button';
import {BufferView} from './decorators';

storiesOf('Button', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Button onPress={action('pressed-default')}>Press Me</Button>
  ))
  .add('outline', () => (
    <Button onPress={action('pressed-outline')} outline>
      Press Me
    </Button>
  ));
