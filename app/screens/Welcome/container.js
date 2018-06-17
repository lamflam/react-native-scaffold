import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { WelcomeUI } from './ui';

export class Welcome extends PureComponent {
    static displayName = 'WelcomeContainer';

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func.isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.toNextScreen = this.toNextScreen.bind(this);
    }

    toNextScreen() {
        const { navigation } = this.props;
        navigation.navigate('todo');
    }

    render() {
        return <WelcomeUI toNextScreen={this.toNextScreen} />;
    }
}

export const WelcomeContainer = Welcome;
