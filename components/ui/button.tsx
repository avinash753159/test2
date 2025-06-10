import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};

const button = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-sky-600 text-white hover:bg-sky-700',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => (
  <button ref={ref} className={clsx(button({ variant }), className)} {...props} />
));
Button.displayName = 'Button';

export { Button };
