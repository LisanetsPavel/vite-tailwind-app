import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/views/Home';
import { DashboardPage } from '@/views/Dashboard';
import { ReportsPage } from '@/views/Reports';
import { AppRoutes } from '@/utils/router-utils';
import { GalleryContainer } from '@/views/Gallery';

export default function ContentBlock() {
  return (
    <div className="bg-amber-50 flex grow p-4 dark:bg-neutral-600 h-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={AppRoutes.Dashboard} element={<DashboardPage />} />
        <Route path={AppRoutes.Reports} element={<ReportsPage />} />
        <Route path={AppRoutes.Gallery} element={<GalleryContainer />} />
      </Routes>
    </div>
  );
}
