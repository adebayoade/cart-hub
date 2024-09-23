import { Outlet } from 'react-router-dom';
import Footer from '../ui/footer';

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
