import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HeroSection } from '../HeroSection';

// Mock the analytics functions
vi.mock('@/lib/analytics', () => ({
  trackButtonClick: vi.fn(),
  trackProductInterest: vi.fn(),
}));

// Mock the VariableProximity component
vi.mock('@/components/VariableProximity', () => ({
  default: ({ label }: { label: string }) => <span>{label}</span>,
}));

describe('HeroSection', () => {
  it('renders the hero section with correct content', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('Instant Privacy.')).toBeInTheDocument();
    expect(screen.getByText('Anytime. Anywhere.')).toBeInTheDocument();
    expect(screen.getByText('Book Your Demo Today')).toBeInTheDocument();
    expect(screen.getByText('Watch Product Demo')).toBeInTheDocument();
  });

  it('displays statistics', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('500+')).toBeInTheDocument();
    expect(screen.getByText('Installations')).toBeInTheDocument();
    expect(screen.getByText('200+')).toBeInTheDocument();
    expect(screen.getByText('Happy Customers')).toBeInTheDocument();
    expect(screen.getByText('25+')).toBeInTheDocument();
    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('renders hero image', () => {
    render(<HeroSection />);
    
    const heroImage = screen.getByAltText('Privoxx Privacy Solutions - Three Product Variants');
    expect(heroImage).toBeInTheDocument();
  });

  it('shows coming soon badge', () => {
    render(<HeroSection />);
    
    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });
}); 