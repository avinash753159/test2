import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export function Table({ className, ...props }: HTMLAttributes<HTMLTableElement>) {
  return (
    <table
      className={clsx('w-full text-sm', className)}
      {...props}
    />
  );
}

export function THead({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={clsx('border-b', className)} {...props} />
  );
}

export function TBody({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={className} {...props} />;
}

export function TR({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={className} {...props} />;
}

export function TH({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className={clsx('px-2 py-1 text-left font-semibold', className)} {...props} />
  );
}

export function TD({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) {
  return <td className={clsx('px-2 py-1', className)} {...props} />;
}
