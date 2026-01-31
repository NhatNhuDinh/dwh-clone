import { useParams, Navigate } from 'react-router';
import { isFlowTypeParam } from '@/features/data-flow/flowTypes';
import { DataSourceListView } from '@/features/data-flow/source/DataSourceListView';

export default function DataSourceListPage() {
  const { flowType } = useParams<{ flowType: string }>();

  if (!flowType || !isFlowTypeParam(flowType)) {
    return <Navigate to="/data-flows/mssql/sources" replace />;
  }

  return <DataSourceListView flowType={flowType} />;
}
