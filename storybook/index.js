// if you use expo remove this line
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from '../app.json';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {setConsoleOptions} from '@storybook/addon-console';
import {loadStories} from './storyLoader';

import './rn-addons';

// ignore 'EventEmitter.removeListener(\'change\', ...): Method has been deprecated warning
LogBox.ignoreLogs(['EventEmitter.removeListener']);

// enables knobs for all stories
addDecorator(withKnobs);

setConsoleOptions({
  panelExclude: [],
});
// addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// import stories
configure(() => {
  // require('./stories');
  // require('../App/stories/Button.stories');
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  tabOpen: 0,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
