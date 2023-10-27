import { UserButton } from '@clerk/nextjs';
import MainNav from '@/components/main-nav';

interface NavbarProps {
  hideRoutes?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ hideRoutes = false }) => (
  <div className='border-b'>
    <div className='flex h-16 items-center px-4'>
      <MainNav hideRoutes={hideRoutes} className='sm:mx-6' />
      <div className='ml-auto flex items-center space-x-4'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  </div>
);

export default Navbar;
