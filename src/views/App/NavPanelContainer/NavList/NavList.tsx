import { NavItem } from '@/views/App/NavPanelContainer';
import { AppRoutes } from '@/utils/router-utils';

export default function NavList() {
  return (
    <section className="p-4">
      <ul>
        <NavItem to={AppRoutes.Dashboard}>Dashboard</NavItem>
        <NavItem to={AppRoutes.Reports}>Reports</NavItem>
        <NavItem to={AppRoutes.Gallery}>Gallery</NavItem>
      </ul>
    </section>
  );
}
