import React from 'react';
import { testSnapshot } from 'app/utils/tests';
import { WelcomeUI } from './ui';

describe('Welcome UI', () => {
    it('matches snapshot', () => {
        testSnapshot(<WelcomeUI toNextScreen={() => {}} styles={{}} />);
    });
});
