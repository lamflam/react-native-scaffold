import React from 'react';
import { testSnapshot } from 'app/utils/tests';
import { ViewUI } from './ui';

describe('View UI', () => {
    it('matches snapshot', () => {
        testSnapshot(<ViewUI />);
    });
});
