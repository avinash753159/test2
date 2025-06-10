import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './button';

type DialogProps = {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
};

export function Dialog({ trigger, title, children }: DialogProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="rounded-lg bg-white dark:bg-gray-900 p-4 w-96">
              <h2 className="mb-2 text-lg font-semibold">{title}</h2>
              <div className="mb-4">{children}</div>
              <div className="text-right">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
