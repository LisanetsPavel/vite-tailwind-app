import { Table } from '@/components/Table';
import { userColumns, userRows } from '@/views/Dashboard/DashboardPage/utils';

export default function DashboardPage() {
  return (
    <div className="bg-gray-200 p-8 m-2 w-full flex flex-col">
      <div className="mb-4 self-center"> DashboardPage </div>
      <Table rows={userRows} columns={userColumns} />
    </div>
  );
}
