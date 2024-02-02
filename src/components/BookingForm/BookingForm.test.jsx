import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm component', () => {
  test('renders without errors', () => {
    render(<BookingForm />);
    
    // Ensure that the form elements are present
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
  });

  test('submits form successfully with valid input', async () => {
    render(<BookingForm />);
    
    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-02-02' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    // Submit the form
    const submitButton = screen.getByText(/Reserve a Table/i);
    fireEvent.click(submitButton);

    // Wait for the confirmation message
    await waitFor(() => {
      expect(screen.getByText(/Booking Has Been Confirmed!/i)).toBeInTheDocument();
    });
  });

  test('displays validation errors for empty form submission', async () => {
    render(<BookingForm />);
    
    // Submit the form without entering any data
    const submitButton = screen.getByText(/Reserve a Table/i);
    fireEvent.click(submitButton);

    // Check for validation errors
    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of guests must be at least 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion is required/i)).toBeInTheDocument();
  });

  // Add more tests as needed for additional scenarios or edge cases
});
