import React from 'react';
import { testSnapshot } from 'app/utils/tests';
import { TextUI } from './ui';

describe('Text UI', () => {
    it('matches snapshot', () => {
        testSnapshot(<TextUI />);
    });
});
