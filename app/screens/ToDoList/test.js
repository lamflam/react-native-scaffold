import React from 'react';
import { testSnapshot } from 'app/utils/tests';
import { ToDoListUI } from './ui';

describe('ToDoListUI UI', () => {
    it('matches snapshot', () => {
        testSnapshot(<ToDoListUI />);
    });
});
