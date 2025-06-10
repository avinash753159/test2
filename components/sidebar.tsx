'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DashboardIcon, TableIcon, ListIcon, BellIcon, UserIcon, CreditCardIcon } from './icons';
import { useSidebarStore } from '@/store/sidebar';
import clsx from 'clsx';

const links = [
  { href: '/app', label: 'Dashboard', icon: DashboardIcon },
  { href: '/app/rfqs', label: 'RFQs', icon: TableIcon },
  { href: '/app/fscs', label: 'FSCs', icon: ListIcon },
  { href: '/app/categories', label: 'Categories', icon: ListIcon },
  { href: '/app/notifications', label: 'Notifications', icon: BellIcon },
  { href: '/app/account', label: 'Account', icon: UserIcon },
  { href: '/app/billing', label: 'Billing', icon: CreditCardIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { collapsed } = useSidebarStore();
  return (
    <nav
      aria-label="Sidebar"
      className={clsx(
        'hidden border-r bg-background lg:block transition-all',
        collapsed ? 'w-16' : 'w-56'
      )}
    >
      <div className="p-4 space-y-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent',
              pathname === href && 'bg-accent'
            )}
          >
            <Icon className="h-5 w-5" />
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </div>
    </nav>
  );
}
