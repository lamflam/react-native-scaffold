import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View as RNView } from 'react-native';
import { styled } from './styles';

export class View extends PureComponent {
    static propTypes = {
        styles: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.object])).isRequired,
        style: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    };

    static defaultProps = {
        style: null
    };

    render() {
        const { children, styles, style, ...rest } = this.props;
        return (
            <RNView style={[styles.view, style]} {...rest}>
                {children}
            </RNView>
        );
    }
}

export const ViewUI = styled(View);
