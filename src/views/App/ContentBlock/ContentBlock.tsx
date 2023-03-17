import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/views/Home';
import { DashboardPage } from '@/views/Dashboard';
import { ReportsPage } from '@/views/Reports';

export default function ContentBlock() {
  return (
    <div className="bg-blue-200 flex grow p-4 dark:bg-neutral-600">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </div>
  );
}
