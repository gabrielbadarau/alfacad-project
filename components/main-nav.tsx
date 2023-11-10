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
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

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
      active: pathname.startsWith(`/overview`),
    },
    {
      href: `/projects`,
      label: 'Lucrări',
      active: pathname.startsWith(`/projects`),
    },
    {
      href: `/meetings`,
      label: 'Întâlniri',
      active: pathname.startsWith(`/meetings`),
    },
    {
      href: `/vacations`,
      label: 'Concedii',
      active: pathname.startsWith(`/vacations`),
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
      <Image
        className='hidden sm:inline'
        src={logo}
        alt='Logo'
        priority
        width={80}
        height={54}
      />

      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'hidden sm:inline text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-slate-900 dark:text-white tracking-wide font-semibold'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}

      <Sheet>
        <SheetTrigger className='sm:hidden' asChild>
          <Button variant='outline'>
            <MenuSquare className='shrink-0 h-6 w-6' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='w-[280px]'>
          <SheetHeader>
            <SheetTitle className='flex justify-center'>
              <Image src={logo} alt='Logo' priority width={120} height={120} />
            </SheetTitle>
          </SheetHeader>

          <SheetDescription className='flex flex-col flex-nowrap gap-4 mt-16'>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'w-full text-sm font-medium transition-colors hover:text-primary'
                )}
              >
                <SheetClose asChild>
                  <Button
                    variant={route.active ? 'default' : 'outline'}
                    className='w-full'
                  >
                    {route.label}
                  </Button>
                </SheetClose>
              </Link>
            ))}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MainNav;
