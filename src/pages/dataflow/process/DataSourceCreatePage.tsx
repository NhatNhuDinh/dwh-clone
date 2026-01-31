import { useParams, Navigate } from 'react-router';
import { isFlowTypeParam } from '@/features/data-flow/flowTypes';
import { DataSourceCreateView } from '@/features/data-flow/source/DataSourceCreateView';

export default function DataSourceCreatePage() {
  const { flowType } = useParams<{ flowType: string }>();

  if (!flowType || !isFlowTypeParam(flowType)) {
    return <Navigate to="/data-flows/mssql/sources" replace />;
  }

  return <DataSourceCreateView flowType={flowType} />;
}
