'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  className: string;
  hideRoutes?: boolean;
}

const MainNav: React.FC<MainNavProps> = ({
  className,
  hideRoutes = false,
  ...props
}) => {
  const pathname = usePathname();

  let routes = [
    {
      href: `/overview`,
      label: 'Overview',
      active: pathname === `/overview`,
    },
    {
      href: `/team`,
      label: 'Team',
      active: pathname === `/team`,
    },
  ];

  if (hideRoutes) {
    routes = [];
  }

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-slate-900 dark:text-white'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
