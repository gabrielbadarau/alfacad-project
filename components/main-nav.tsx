'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import logo from '../public/logo.png';

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
      href: `/projects`,
      label: 'Proiecte',
      active: pathname === `/projects`,
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
      <Link href='/overview'>
        <Image src={logo} alt='Logo' priority width={80} height={54} />
      </Link>

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
