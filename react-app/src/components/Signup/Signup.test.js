// dependencies
import React from 'react';
import { render, fireEvent } from "@testing-library/react";

// components
import Signup from './signup';

describe('<Signup />', () => {

    it('should have a `<form>` element', () => {
        const { getByText } = render(<Signup />);
        const form = getByText(/form/i);
        expect(form).toBeInTheDocument();
    });


    it("Empty input validations are triggering errors ", () => {

        const mockSubmit = jest.fn();
        const { queryByTestId } = render(<Signup handleSubmit={mockSubmit} />);

        fireEvent.change(queryByTestId("input-firstName"), { target: { value: 'Joe' } });
        fireEvent.change(queryByTestId("input-lastName"), { target: { value: 'Doe' } });
        fireEvent.change(queryByTestId("input-email"), { target: { value: 'john@doe.com' } });

        fireEvent.submit(queryByTestId("input-form"));

        const { getByText } = render(<Signup />);
        const passwordError = getByText('Password is required');
        expect(passwordError).toBeInTheDocument();

        const termsError = getByText('Please check terms and conditions');
        expect(termsError).toBeInTheDocument();  
        
        //const emailError = getByText('Email is required');
        //expect(emailError).toThrow();  
        //expect(mockSubmit).toHaveBeenCalled(); //   
    });
});