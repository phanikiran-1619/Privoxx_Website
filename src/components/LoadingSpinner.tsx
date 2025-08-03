import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const LoadingSpinner = ({ 
  size = 'md', 
  className,
  text 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Loader2 className={cn('animate-spin text-primary', sizeClasses[size])} />
      {text && (
        <span className="ml-2 text-sm text-muted-foreground">{text}</span>
      )}
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-primary-foreground mb-2">
          Loading Privoxx
        </h2>
        <p className="text-primary-foreground/70">
          Please wait while we prepare your experience...
        </p>
      </div>
    </div>
  );
};

export const ContentSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-muted rounded w-3/4"></div>
      <div className="h-4 bg-muted rounded w-full"></div>
      <div className="h-4 bg-muted rounded w-5/6"></div>
      <div className="h-4 bg-muted rounded w-4/6"></div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-muted rounded w-1/2"></div>
      <div className="h-4 bg-muted rounded w-full"></div>
      <div className="h-4 bg-muted rounded w-3/4"></div>
      <div className="h-10 bg-muted rounded w-1/3"></div>
    </div>
  );
}; 