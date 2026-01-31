import { ConnectionListView } from '@/features/central-warehouse/connection-list/ConnectionListView';
import { fromUrlMock } from '@/features/central-warehouse/connection-list/data';

export default function FromUrlPage() {
  return (
    <ConnectionListView
      data={fromUrlMock}
      emptyMessage="Trống"
      onAddNew={() => {}}
      onLink={(row) => console.log('link', row)}
      onEdit={(row) => console.log('edit', row)}
      onDelete={(row) => console.log('delete', row)}
    />
  );
}
