import { Link } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FLOW_TYPE_LABELS, type FlowTypeParam } from '@/features/data-flow/flowTypes';

type Props = {
  flowType: FlowTypeParam;
};

export function DataSourceCreateView({ flowType }: Props) {
  const label = FLOW_TYPE_LABELS[flowType];

  return (
    <Card className="bg-white">
      <CardContent className="space-y-4 py-4">
        <p className="text-sm text-slate-600">
          Đây là màn hình tạo mới nguồn dữ liệu {label} (stub). Sau này có thể thay bằng form cấu hình kết nối thực tế.
        </p>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/data-flows/${flowType}/sources`}>Quay lại danh sách</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
