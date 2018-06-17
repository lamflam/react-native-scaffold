import React from 'react';
import { testSnapshot } from 'app/utils/tests';
import { Welcome2UI } from './ui';

describe('Welcome2 UI', () => {
    it('matches snapshot', () => {
        testSnapshot(<Welcome2UI />);
    });
});
