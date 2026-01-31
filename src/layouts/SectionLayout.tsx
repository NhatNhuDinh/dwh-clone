import { Outlet, useMatches } from 'react-router';
import { useEffect } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  getLocationString,
  SECTION_TITLES,
  isFlowTypeParam,
} from '@/features/data-flow/flowTypes';

type RouteHandle = {
  location?: string;
  title?: string;
  /** Luồng dữ liệu: breadcrumb/title lấy từ params.flowType + section */
  flowTypeAware?: boolean;
  section?: import('@/features/data-flow/flowTypes').DataFlowSection;
};

export default function SectionLayout() {
  const matches = useMatches();

  const currentWithHandle = [...matches].reverse().find(
    (match) =>
      (match.handle as RouteHandle | undefined)?.title != null ||
      (match.handle as RouteHandle | undefined)?.flowTypeAware === true,
  );

  const handle = (currentWithHandle?.handle ?? {}) as RouteHandle;
  const params = (currentWithHandle as { params?: Record<string, string> })
    ?.params ?? {};
  const flowType = params.flowType;

  const location =
    handle.flowTypeAware &&
    handle.section &&
    flowType &&
    isFlowTypeParam(flowType)
      ? getLocationString(flowType, handle.section)
      : handle.location;

  const title =
    handle.flowTypeAware &&
    handle.section &&
    flowType &&
    isFlowTypeParam(flowType)
      ? SECTION_TITLES[handle.section](flowType)
      : handle.title;

  const locationParts =
    location
      ?.split('/')
      .map((part) => part.trim())
      .filter(Boolean) ?? [];

  // Set document.title khi title thay đổi
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div className="flex h-full flex-col bg-[#f3f4f6]">
      {/* Top location / breadcrumb + title area */}
      <div className="px-6">
        <Card className="border-none bg-transparent p-0 shadow-none">
          <CardHeader className="gap-2 px-0 py-0">
            {locationParts.length > 0 && (
              <Breadcrumb className="text-xs text-slate-500">
                <BreadcrumbList>
                  {locationParts.map((part, index) => {
                    const isLast = index === locationParts.length - 1;
                    return (
                      <>
                        <BreadcrumbItem key={part}>
                          {isLast ? (
                            <BreadcrumbPage>{part}</BreadcrumbPage>
                          ) : (
                            <span className="font-medium">{part}</span>
                          )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                      </>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            )}

            {title && (
              <CardTitle className="text-xl font-semibold text-slate-900">
                {title}
              </CardTitle>
            )}
          </CardHeader>
        </Card>
      </div>

      {/* Inner content where child routes are rendered */}
      <div className="flex-1 px-6 py-4">
        <Outlet />
      </div>
    </div>
  );
}

