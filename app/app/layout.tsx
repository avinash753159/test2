import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <ScrollArea className="flex-1 p-4">{children}</ScrollArea>
      </div>
    </div>
  );
}
