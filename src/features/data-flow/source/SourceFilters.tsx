import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export type DataSourceFilters = {
  organizationId?: string;
  type?: string;
  keyword?: string;
};

const ALL_ORG_VALUE = '__all_org__';
const ALL_TYPE_VALUE = '__all_type__';

type Props = {
  value: DataSourceFilters;
  onChange: (value: DataSourceFilters) => void;
  onReset?: () => void;
  onApply?: () => void;
  typeOptions?: { label: string; value: string }[];
  organizationOptions?: { label: string; value: string }[];
};

export function SourceFilters({
  value,
  onChange,
  onReset,
  onApply,
  typeOptions = [],
  organizationOptions = [],
}: Props) {
  return (
    <div className="bg-white border-none rounded-md p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-600">Tổ chức:</span>
          <Select
            value={value.organizationId ?? ALL_ORG_VALUE}
            onValueChange={(organizationId) =>
              onChange({
                ...value,
                organizationId:
                  organizationId === ALL_ORG_VALUE ? undefined : organizationId,
              })
            }
          >
            <SelectTrigger size="sm" className="min-w-48">
              <SelectValue placeholder="Tất cả tổ chức" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_ORG_VALUE}>Tất cả tổ chức</SelectItem>
              {organizationOptions.map((org) => (
                <SelectItem key={org.value} value={org.value}>
                  {org.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-600">Loại dữ liệu:</span>
          <Select
            value={value.type ?? ALL_TYPE_VALUE}
            onValueChange={(type) =>
              onChange({
                ...value,
                type: type === ALL_TYPE_VALUE ? undefined : type,
              })
            }
          >
            <SelectTrigger size="sm" className="min-w-48">
              <SelectValue placeholder="Tất cả" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_TYPE_VALUE}>Tất cả</SelectItem>
              {typeOptions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={onReset}
            className="bg-white px-4"
          >
            Xóa bộ lọc
          </Button>
          <Button
            size="sm"
            type="button"
            onClick={onApply}
            className="bg-[#c8872a] hover:bg-[#b4741e]"
          >
            Áp dụng bộ lọc
          </Button>
        </div>
      </div>
    </div>
  );
}