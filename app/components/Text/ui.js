import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';
import { styled } from './styles';

export class Text extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired,
        style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        bold: PropTypes.bool
    };

    static defaultProps = {
        bold: false,
        style: null
    };

    render() {
        const { bold, children, styles, style, ...rest } = this.props;
        return (
            <RNText style={[bold ? styles.bold : styles.text, style]} {...rest}>
                {children}
            </RNText>
        );
    }
}

export const TextUI = styled(Text);
