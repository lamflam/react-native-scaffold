import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNTextInput } from 'react-native';
import { styled } from './styles';

class TextInput extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired,
        style: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.object])
    };

    static defaultProps = {
        style: null
    };

    render() {
        const { styles, style, ...rest } = this.props;
        return <RNTextInput style={[styles.input, style]} {...rest} />;
    }
}

export const TextInputUI = styled(TextInput);
