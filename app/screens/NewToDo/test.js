import React from 'react';
import { testSnapshot } from 'app/utils/tests';
import { NewToDoUI } from './ui';

describe('NewToDo UI', () => {
    it('renders correctly', () => {
        testSnapshot(<NewToDoUI />);
    });
});
