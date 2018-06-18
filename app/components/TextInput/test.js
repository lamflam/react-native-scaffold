import React from 'react';
import { testSnapshot } from 'app/utils/tests';
import { TextInputUI } from './ui';

describe('TextInput UI', () => {
    it('renders correctly', () => {
        testSnapshot(<TextInputUI />);
    });
});
