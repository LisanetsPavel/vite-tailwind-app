import mainLogo from '@/assets/logo.png';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '@/utils/router-utils';

export default function LogoBlock() {
  return (
    <section className="flex justify-center flex-col items-center gap-1 font-bold">
      <NavLink to={AppRoutes.Home}>
        <img src={mainLogo} className="w-20 h-20" alt="main logo" />
      </NavLink>
      <h1 className="text-2xl text-white">Awesome company</h1>
    </section>
  );
}
