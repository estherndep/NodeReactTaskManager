/**
* @jest-environment jsdom
*/

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TaskInput from './index'

describe('TaskInput componet', () => {
    it('should render ', () => {
        render(<TaskInput/>)
    })

    it('should create task', () => {
        const inputElement = doc.getByTestId('input')

        // Create the todo.
        fireEvent.change(inputElement, { target: { value: 'Feed my dog.' } })
        fireEvent.submit(inputElement)

        // The input field should be blank.
        expect(inputElement.value).toBe('');
    })
})
