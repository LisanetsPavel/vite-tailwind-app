import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '@/utils/router-utils';

interface Props {
  children: React.ReactNode;
  to: AppRoutes;
}
export default function NavItem({ children, to }: Props) {
  return (
    <li className="p-2 font hover:font-bold cursor-pointer text-xl text-slate-600 dark:text-amber-100">
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}
