import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BookingForm } from '../BookingForm';

// Mock the analytics functions
vi.mock('@/lib/analytics', () => ({
  trackFormSubmission: vi.fn(),
  trackDemoBooking: vi.fn(),
}));

// Mock the toast hook
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

// Mock fetch
global.fetch = vi.fn();

describe('BookingForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the booking form with all fields', () => {
    render(<BookingForm />);
    
    expect(screen.getByText('Book Your Demo')).toBeInTheDocument();
    expect(screen.getByText('Product Type *')).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Organization/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Quantity Required/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Additional Requirements/)).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<BookingForm />);
    
    expect(screen.getByText('+91 98765 43210')).toBeInTheDocument();
    expect(screen.getByText('privoxx.connect@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Within 24 hours')).toBeInTheDocument();
  });

  it('shows demo benefits', () => {
    render(<BookingForm />);
    
    expect(screen.getByText('What You\'ll Get:')).toBeInTheDocument();
    expect(screen.getByText('Personalized product demonstration')).toBeInTheDocument();
    expect(screen.getByText('Installation guidance and requirements')).toBeInTheDocument();
    expect(screen.getByText('Custom pricing based on your needs')).toBeInTheDocument();
    expect(screen.getByText('Technical specifications and warranty')).toBeInTheDocument();
  });

  it('submits form with correct data', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });
    global.fetch = mockFetch;

    render(<BookingForm />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Full Name/), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/), {
      target: { value: '+91 98765 43210' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/), {
      target: { value: 'john@example.com' },
    });
    
    // Submit the form
    fireEvent.click(screen.getByText('Book Demo Now'));
    
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('http://localhost:5000/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('John Doe'),
      });
    });
  });
}); 