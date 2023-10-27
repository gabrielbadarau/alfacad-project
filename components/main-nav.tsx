'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import { cn } from '@/lib/utils';

import logo from '../public/logo.png';
import { MenuSquare } from 'lucide-react';

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
      label: 'Dashboard',
      active: pathname === `/overview`,
    },
    {
      href: `/projects`,
      label: 'Proiecte',
      active: pathname === `/projects`,
    },
    {
      href: `/meetings`,
      label: 'Întâlniri',
      active: pathname === `/meetings`,
    },
    {
      href: `/vacations`,
      label: 'Concedii',
      active: pathname === `/vacations`,
    },
  ];

  if (hideRoutes) {
    routes = [];
  }

  return (
    <nav
      className={cn(
        'flex items-center sm:space-x-4 md:space-x-5 lg:space-x-6',
        className
      )}
      {...props}
    >
      <Image src={logo} alt='Logo' priority width={80} height={54} />

      <NavigationMenu className='sm:hidden'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-slate-900 tracking-wide'>
              <MenuSquare className='shrink-0 h-6 w-6' />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      route.active
                        ? 'text-slate-900 dark:text-white tracking-wide font-bold'
                        : 'text-muted-foreground'
                    )}
                  >
                    {route.label}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'hidden sm:inline text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-slate-900 dark:text-white tracking-wide'
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
