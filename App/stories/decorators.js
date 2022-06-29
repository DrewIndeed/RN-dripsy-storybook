import React from 'react';
import {DripsyProvider, makeTheme, View} from 'dripsy';

// create app theme using Dripsy
const theme = makeTheme({
  colors: {
    primary: 'orange',
    secondary: 'black',
    background: 'white',
    callout: 'pink',
    accent: 'green',
    muted: 'gray',
    warning: 'yellow',
    error: 'red',
    gray: '#888',
  },
  space: {
    $none: 0,
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
    $8: 512,
  },
  text: {
    primary: {
      fontSize: 40,
    },
    secondary: {
      fontSize: 60,
    },
  },
  fontWeights: {
    black: '500',
  },
});

// theme provider View to provide through decorators
export const BufferView = storyFn => (
  <DripsyProvider theme={theme}>
    <View
      sx={{
        flex: 1,
        marginVertical: '$4',
        marginHorizontal: '$3',
      }}>
      {storyFn()}
    </View>
  </DripsyProvider>
);
