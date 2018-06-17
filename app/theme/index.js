import { Dimensions } from 'react-native';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import themeInterface from 'react-with-styles-interface-react-native';
import { withStyles } from 'react-with-styles';
import { normalize } from './normalize';

const colors = {
    black: '#000',
    white: '#FFF',
    gray00: '#111',
    gray02: '#222',
    gray03: '#333'
};

const fontFamily = 'Avenir Book';
const fonts = {
    normal: {
        fontFamily,
        fontSize: normalize(14),
        backgroundColor: 'transparent'
    },
    bold: {
        fontFamily,
        fontSize: normalize(14),
        fontWeight: '900',
        backgroundColor: 'transparent'
    }
};

const theme = {
    normalize,
    colors,
    fonts,
    device: {
        get width() {
            return Dimensions.get('window').width;
        },
        get height() {
            return Dimensions.get('window').height;
        }
    }
};

export function registerTheme() {
    ThemedStyleSheet.registerTheme(theme);
    ThemedStyleSheet.registerInterface(themeInterface);
}

export { withStyles, normalize };
