import React from 'react';
import {DripsyProvider, makeTheme, View} from 'dripsy';

// create app theme using Dripsy
const theme = makeTheme({
  colors: {
    white: '#fff',
    lightgray: '#e8eae3',
    bluegray: '#64748b',
    midgray: '#6b6d70',
    slimdarkgray: '#373833',
    darkgray: '#181818',
    black: '#000000',
    cyan: '#2cccc3',
    lightblue: '#4b9fe1',
    midblue: '#28559a',
    darkblue: '#150734',
    yellow: '#facd3d',
    pink: '#e60476',
    lipstick: '#fa2742',
  },

  space: {
    $none: 0,
    $0: 2,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
    $8: 512,
  },

  form: {
    input: {fontSize: 14, fontWeight: '500', paddingBottom: 10},
    border: {
      height: 1,
      backgroundColor: 'darkgray',
    },
  },

  text: {
    labelText: {
      color: 'slimdarkgray',
      fontSize: 18,
      marginBottom: 10,
    },

    messageText: {
      color: 'slimdarkgray',
      fontSize: 12,
      marginTop: 5,
    },

    messageSuccess: {
      color: 'cyan',
    },

    messageError: {
      color: 'lipstick',
    },

    // base
    buttonBase: {
      fontSize: 12,
      alignSelf: 'center',
      fontWeight: 'bold',
    },

    // sizes
    buttonMedium: {
      fontSize: 16,
    },
    buttonLarge: {
      fontSize: 20,
    },

    // variants
    buttonSolid: {
      color: 'white',
    },
    buttonPrimaryOutline: {
      color: 'lipstick',
    },
    buttonSecondarOutline: {
      color: 'slimdarkgray',
    },
  },

  layout: {
    buff: {
      flex: 1,
      marginVertical: '$4',
      marginHorizontal: '$3',
    },
    fieldWrapper: {
      marginBottom: '$2',
    },
  },

  buttons: {
    // sizes
    large: {
      paddingVertical: '$3',
      paddingHorizontal: '$4',
    },
    medium: {
      paddingVertical: '$2',
      paddingHorizontal: '$3',
    },

    // styles
    outlinePrimary: {
      backgroundColor: 'white',
      borderRadius: 6,
      borderWidth: 1,
      borderColor: 'lipstick',
    },

    outlineSecondary: {
      backgroundColor: 'white',
      borderRadius: 6,
      borderWidth: 1,
      borderColor: 'slimdarkgray',
    },

    solid: {
      color: 'white',
      borderRadius: 6,
      borderWidth: 1,
      borderColor: 'transparent',
    },

    // types
    primary: {
      backgroundColor: 'lipstick',
      borderColor: 'lipstick',
    },
    secondary: {
      backgroundColor: 'slimdarkgray',
      borderColor: 'slimdarkgray',
    },
  },
});

// theme provider View to provide through decorators
export const BufferView = storyFn => (
  <DripsyProvider theme={theme}>
    <View variant="layout.buff">{storyFn()}</View>
  </DripsyProvider>
);
