import React from 'react';
import { testSnapshot } from 'utils/tests';
import { WelcomeUI } from './ui';

describe('Welcome UI', () => {
    it('matches snapshot', () => {
        testSnapshot(<WelcomeUI />);
    });
});
