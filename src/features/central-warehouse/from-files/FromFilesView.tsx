import { Button } from '@/components/ui/button';
import { FromFilesTable } from '@/features/central-warehouse/from-files/FromFilesTable';
import { fromFilesMock } from '@/features/central-warehouse/from-files/data';

export function FromFilesView() {

  return (
    <div className="space-y-4">
      <div className="rounded-md bg-white p-4 text-xs shadow-sm">
        <div className="mb-3 flex items-center justify-end">
          <Button size="sm" type="button" className="bg-[#c8872a] text-xs hover:bg-[#b4741e]">
            Chọn nguồn dữ liệu tập tin
          </Button>
        </div>
        <FromFilesTable
          data={fromFilesMock}
          onDelete={(row) => console.log('delete', row)}
        />
      </div>
    </div>
  );
}
