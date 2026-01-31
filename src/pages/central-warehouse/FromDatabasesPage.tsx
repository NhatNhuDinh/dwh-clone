import { ConnectionListView } from '@/features/central-warehouse/connection-list/ConnectionListView';
import { fromDatabasesMock } from '@/features/central-warehouse/connection-list/data';

export default function FromDatabasesPage() {
  return (
    <ConnectionListView
      data={fromDatabasesMock}
      emptyMessage="Chưa có kết nối cơ sở dữ liệu nào."
      onAddNew={() => {}}
      onLink={(row) => console.log('link', row)}
      onEdit={(row) => console.log('edit', row)}
      onDelete={(row) => console.log('delete', row)}
    />
  );
}
