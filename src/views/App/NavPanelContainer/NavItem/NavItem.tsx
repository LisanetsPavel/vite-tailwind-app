import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { AppRoutes } from '@/utils/router-utils';

interface Props {
  children: React.ReactNode;
  to: AppRoutes;
}
export default function NavItem({ children, to }: Props) {
  const match = useMatch(to);

  const activeClassname =
    'p-2 font hover:font-bold cursor-pointer text-xl hover:text-slate-700 text-slate-900 dark:text-amber-100';

  const className =
    'p-2 font hover:font-bold cursor-pointer text-xl hover:text-slate-700 text-slate-600 dark:text-amber-100';

  return (
    <li className={match ? activeClassname : className}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}
