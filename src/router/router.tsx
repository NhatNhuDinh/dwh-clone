import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {

    path: '/auth/callback',
    lazy: async () => {
      const [{ default: Component }] = await Promise.all([
        import('../pages/AuthCallback'),
      ]);
      return { Component };
    },
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            lazy: async () => {
              const { default: Component } = await import(
                '../pages/home/HomePage'
              );
              return { Component };
            },
            handle: {
              title: 'Bàn làm việc | Kho dữ liệu',
            },
          },
          {
            element: <SectionLayout />,
            children: [
              {
                path: '/core-tools/organizations',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/core-tools/OrganizationPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location: 'Công cụ nền / Quản lý tổ chức',
                  title: 'Quản lý tổ chức',
                },
              },
              {
                path: '/core-tools/department',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/core-tools/DepartmentPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location: 'Công cụ nền / Tổ chức con',
                  title: 'Tổ chức con',
                },
              },
              {
                path: '/core-tools/users',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/core-tools/UserPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location: 'Công cụ nền / Quản lý người dùng',
                  title: 'Quản lý người dùng',
                },
              },
              {
                path: '/core-tools/permissions',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/core-tools/PermissionPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location: 'Công cụ nền / Quản lý quyền',
                  title: 'Quản lý quyền',
                },
              },
              {
                path: '/core-tools/actions',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/core-tools/ActionPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location: 'Công cụ nền / Danh sách hành động',
                  title: 'Danh sách hành động',
                },
              },
              {
                path: '/core-tools/manuals',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/core-tools/ManualPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location: 'Công cụ nền / Danh sách hướng dẫn sử dụng',
                  title: 'Danh sách hướng dẫn sử dụng',
                },
              },
              {
                path: '/core-tools/qas',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/core-tools/QaPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location: 'Công cụ nền / Danh sách Q&A',
                  title: 'Danh sách Q&A',
                },
              },
          {
            path: '/core-tools/system-logs',
            lazy: async () => {
              const [{ default: Component }] = await Promise.all([
                import('../pages/core-tools/SystemLogsPage'),
              ]);
              return { Component };
            },
            handle: {
              location: 'Công cụ nền / Quản lý log hệ thống / Log hệ thống',
              title: 'Log hệ thống',
            },
          },
          {
            path: '/core-tools/access-log',
            lazy: async () => {
              const [{ default: Component }] = await Promise.all([
                import('../pages/core-tools/AccessLogPage'),
              ]);
              return { Component };
            },
            handle: {
              location: 'Công cụ nền / Quản lý log hệ thống / Nhật ký truy cập',
              title: 'Nhật ký truy cập',
            },
          },
          {
            path: '/core-tools/login-status',
            lazy: async () => {
              const [{ default: Component }] = await Promise.all([
                import('../pages/core-tools/LoginStatusPage'),
              ]);
              return { Component };
            },
            handle: {
              location: 'Công cụ nền / Quản lý log hệ thống / Tình trạng đăng nhập hệ thống',
              title: 'Tình trạng đăng nhập hệ thống',
            },
          },
          {
            path: '/specialized-warehouse/query-jobs',
            lazy: async () => {
              const [{ default: Component }] = await Promise.all([
                import('../pages/specialized-warehouse/QueryJobPage'),
              ]);
              return { Component };
            },
            handle: {
              location: 'Kho dữ liệu chuyên ngành / Quản lý các Job truy vấn Dữ liệu',
              title: 'Quản lý các Job truy vấn Dữ liệu',
            },
          },
              // Luồng dữ liệu: 6 tab (MSSQL, PostgreSQL, MySQL, Oracle, File, API) dùng chung 4 form
              {
                path: '/data-flows/:flowType/sources',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/dataflow/source/DataSourceListPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  flowTypeAware: true,
                  section: 'sources',
                  title: '', // SectionLayout dùng SECTION_TITLES
                },
              },
              {
                path: '/data-flows/:flowType/processes',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/dataflow/process/DataProcessListPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  flowTypeAware: true,
                  section: 'processes',
                  title: '',
                },
              },
              {
                path: '/data-flows/:flowType/versions',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/dataflow/version/DataVersionPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  flowTypeAware: true,
                  section: 'versions',
                  title: '',
                },
              },
              {
                path: '/data-flows/:flowType/data-enrichment',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/dataflow/data-enrichment/DataEnrichmentPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  flowTypeAware: true,
                  section: 'data-enrichment',
                  title: '',
                },
              },
              {
                path: '/data-flows/:flowType/sources/create',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/dataflow/process/DataSourceCreatePage'),
                  ]);
                  return { Component };
                },
                handle: {
                  flowTypeAware: true,
                  section: 'sources-create',
                  title: '',
                },
              },
              // Ứng dụng khai thác dữ liệu / Kênh chia sẻ dữ liệu
              {
                path: '/data-extraction/config-access',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/data-extraction/data-sharing/access-control/ConfigAccessPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location:
                    'Ứng dụng khai thác dữ liệu / Kênh chia sẻ dữ liệu / Cấu hình - cấp quyền truy xuất dữ liệu cho tổ chức',
                  title:
                    'Cấu hình - cấp quyền truy xuất dữ liệu cho tổ chức',
                },
              },
              {
                path: '/data-extraction/api-access',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/data-extraction/data-sharing/shared-api-access/ApiExtractionPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location:
                    'Ứng dụng khai thác dữ liệu / Kênh chia sẻ dữ liệu / Truy xuất dữ liệu thông qua API đã được chia sẻ',
                  title:
                    'Truy xuất dữ liệu thông qua API đã được chia sẻ',
                },
              },
              // Kho dữ liệu trung tâm / Tích hợp dữ liệu mới
              {
                path: '/central-warehouse/from-files',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/central-warehouse/FromFilesPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location:
                    'Kho dữ liệu trung tâm / Tích hợp dữ liệu mới / Tích hợp từ các tập tin sẵn có',
                  title: 'Tích hợp từ các tập tin sẵn có',
                },
              },
              {
                path: '/central-warehouse/from-databases',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/central-warehouse/FromDatabasesPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location:
                    'Kho dữ liệu trung tâm / Tích hợp dữ liệu mới / Tích hợp Dữ liệu từ các Cơ sở Dữ liệu cục bộ',
                  title:
                    'Tích hợp Dữ liệu từ các Cơ sở Dữ liệu cục bộ',
                },
              },
              {
                path: '/central-warehouse/from-url',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/central-warehouse/FromUrlPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location:
                    'Kho dữ liệu trung tâm / Tích hợp dữ liệu mới / Tích hợp Dữ liệu từ URL',
                  title: 'Tích hợp Dữ liệu từ URL',
                },
              },
              // Quản trị vận hành và khai thác
              {
                path: '/operations-management/system-monitoring-report',
                lazy: async () => {
                  const [{ default: Component }] = await Promise.all([
                    import('../pages/operations-management/SystemMonitoringReportPage'),
                  ]);
                  return { Component };
                },
                handle: {
                  location:
                    'Quản trị vận hành và khai thác / Báo cáo giám sát hệ thống',
                  title: 'Báo cáo giám sát hệ thống',
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);