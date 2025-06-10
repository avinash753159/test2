'use client';
import { useSidebarStore } from '@/store/sidebar';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Topbar() {
  const { toggle } = useSidebarStore();
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-between border-b bg-background p-2">
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={toggle} aria-label="Toggle sidebar">
          ☰
        </Button>
        <span className="font-medium capitalize">
          {pathname.replace('/app', '') || 'Dashboard'}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Input placeholder="Search" className="w-40" />
        <Button
          variant="outline"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌞' : '🌚'}
        </Button>
        <motion.span
          whileTap={{ scale: 0.9 }}
          className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"
        />
      </div>
    </div>
  );
}
