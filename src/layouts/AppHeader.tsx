import { ExternalLink, ChevronDown, Bell, HelpCircle, Search, Settings, Loader2, AlertTriangle } from 'lucide-react';
import { NavLink } from 'react-router';
import { useAuth } from 'react-oidc-context';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AppUserMenu } from '@/layouts/AppUserMenu';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, useMemo } from 'react';
import {
  FLOW_TYPE_PARAMS,
  getFlowTypeFullLabel,
  SECTION_TITLES,
} from '@/features/data-flow/flowTypes';
import type { FlowTypeParam } from '@/features/data-flow/flowTypes';

type NavNode = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavNode[];
};

const dataFlowSectionKeys = [
  'sources',
  'processes',
  'versions',
  'data-enrichment',
] as const;

function buildDataFlowNavChildren(): NavNode[] {
  return FLOW_TYPE_PARAMS.map((flowType: FlowTypeParam) => ({
    label: getFlowTypeFullLabel(flowType),
    children: dataFlowSectionKeys.map((section) => ({
      label: SECTION_TITLES[section](flowType),
      href: `/data-flows/${flowType}/${section}`,
    })),
  }));
}

const navItems: NavNode[] = [
  {
    label: 'Luồng dữ liệu',
    children: buildDataFlowNavChildren(),
  },
  {
    label: 'Kho dữ liệu trung tâm',
    children: [
      {
        label: 'Tích hợp dữ liệu mới',
        children: [
          {
            label: 'Tích hợp từ các tập tin sẵn có',
            href: '/central-warehouse/from-files',
          },
          {
            label: 'Tích hợp Dữ liệu từ các Cơ sở Dữ liệu cục bộ',
            href: '/central-warehouse/from-databases',
          },
          {
            label: 'Tích hợp Dữ liệu từ URL',
            href: '/central-warehouse/from-url',
          },
        ],
      },
    ],
  },
  {
    label: 'Kho dữ liệu chuyên ngành',
    children: [
      { label: 'Truy vấn dữ liệu', external: true },
      { label: 'Bảng điều khiển', external: true },
      { label: 'Cơ sở dữ liệu', external: true },
      { label: 'Quản lý các Job truy vấn Dữ liệu', href: '/specialized-warehouse/query-jobs' },
    ],
  },
  {
    label: 'Phân tích dữ liệu',
    children: [
      { label: 'Tổng quan', external: true },
      { label: 'Dân số', external: true },
      { label: 'Ngành Y tế', external: true },
      { label: 'Ngành Giáo dục và Đào tạo', external: true },
      { label: 'Ngành Tư pháp', external: true },
      { label: 'Ngành Bảo hiểm xã hội', external: true },
      { label: 'Ngành Kế hoạch đầu tư', external: true },
      { label: 'Ngành Giao thông vận tải', external: true },
      { label: 'Ngành Văn hóa thể thao và Du lịch', external: true },
      { label: 'Ngành Tài chính, kho bạc', external: true },
    ],
  },
  {
    label: 'Ứng dụng khai thác dữ liệu',
    children: [
      { label: 'Trực quan hóa dữ liệu', external: true },
      {
        label: 'Kênh chia sẻ dữ liệu',
        children: [
          {
            label: 'Cấu hình - cấp quyền truy xuất dữ liệu cho tổ chức',
            href: '/data-extraction/config-access',
          },
          {
            label: 'Truy xuất dữ liệu thông qua API đã được chia sẻ',
            href: '/data-extraction/api-access',
          },
        ],
      },
    ],
  },
  {
    label: 'Quản trị vận hành và khai thác',
    children: [
      {
        label: 'Báo cáo giám sát hệ thống',
        href: '/operations-management/system-monitoring-report',
      },
    ],
  },
  {
    label: 'Công cụ nền',
    children: [
      { label: 'Quản lý Tổ chức', href: '/core-tools/organizations' },
      { label: 'Tổ chức con', href: '/core-tools/department' },
      { label: 'Quản lý người dùng', href: '/core-tools/users' },
      { label: 'Quản lý quyền', href: '/core-tools/permissions' },
      { label: 'Danh sách hành động', href: '/core-tools/actions' },
      { label: 'Danh sách hướng dẫn sử dụng', href: '/core-tools/manuals' },
      { label: 'Danh sách Q&A', href: '/core-tools/qas' },
      {
        label: 'Quản lý log hệ thống',
        children: [
          { label: 'Log hệ thống', href: '/core-tools/system-logs' },
          { label: 'Nhật ký truy cập', href: '/core-tools/access-log' },
          { label: 'Tình trạng đăng nhập hệ thống', href: '/core-tools/login-status' },
        ],
      },
    ],
  },
];

function renderLeaf(item: NavNode) {
  return (
    <DropdownMenuItem key={item.label} className="cursor-pointer" asChild>
      {item.external && item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-between gap-2"
        >
          <span>{item.label}</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      ) : item.href ? (
        <NavLink
          to={item.href}
          className="flex w-full items-center justify-between gap-2"
        >
          <span>{item.label}</span>
        </NavLink>
      ) : (
        <span className="flex w-full items-center justify-between gap-2">
          <span>{item.label}</span>
          {item.external ? <ExternalLink className="h-3 w-3" /> : null}
        </span>
      )}
    </DropdownMenuItem>
  );
}

function renderSubItems(children: NavNode[]) {
  return children.map((child) => {
    if ('children' in child && child.children && child.children.length > 0) {
      return (
        <DropdownMenuSub key={child.label}>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <span className="flex w-full items-center justify-between gap-2">{child.label}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>{renderSubItems(child.children)}</DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    }

    return renderLeaf(child);
  });
}

function TopNavTrigger({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1 whitespace-nowrap">
      <span>{label}</span>
      <ChevronDown className="h-3 w-3" />
    </span>
  );
}

export function AppHeader() {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated;
  const isLoading = auth.isLoading;
  const error = auth.error;

  const displayName =
    auth.user?.profile?.name ?? auth.user?.profile?.preferred_username ?? 'Người dùng';

  // ====== overflow tabs logic ======
  const navRowRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(navItems.length);

  const recompute = useCallback(() => {
    const navEl = navRowRef.current;
    const measureEl = measureRef.current;
    if (!navEl || !measureEl) return;

    const containerWidth = navEl.clientWidth;
    // gap-2 = 0.5rem = 8px. Hardcoded for stability.
    const gap = 8;

    const itemEls = Array.from(
      measureEl.querySelectorAll<HTMLElement>('[data-measure="item"]')
    );
    const moreEl = measureEl.querySelector<HTMLElement>('[data-measure="more"]');

    const widths = itemEls.map((el) => el.offsetWidth);
    const moreWidth = moreEl?.offsetWidth ?? 0;

    let used = 0;
    let count = 0;

    for (let i = 0; i < widths.length; i++) {
      const next = widths[i] + (count > 0 ? gap : 0);

      // nếu còn item phía sau thì phải chừa chỗ cho nút "..."
      const needsMore = i < widths.length - 1;
      const reserve = needsMore ? (gap + moreWidth) : 0;

      if (used + next + reserve <= containerWidth) {
        used += next;
        count++;
      } else {
        break;
      }
    }

    setVisibleCount(Math.max(0, Math.min(count, navItems.length)));
  }, []);

  useLayoutEffect(() => {
    recompute();
  }, [recompute]);

  useEffect(() => {
    const el = navRowRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => recompute());
    ro.observe(el);
    return () => ro.disconnect();
  }, [recompute]);

  const visibleItems = useMemo(() => navItems.slice(0, visibleCount), [visibleCount]);
  const overflowItems = useMemo(() => navItems.slice(visibleCount), [visibleCount]);

  // Hover dropdown: mở khi hover, đóng khi rời chuột (có delay để di chuyển sang content)
  const [openNavLabel, setOpenNavLabel] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpenNavLabel(null), 150);
  }, [clearCloseTimeout]);

  const handleNavTriggerEnter = useCallback((label: string) => {
    clearCloseTimeout();
    setOpenNavLabel(label);
  }, [clearCloseTimeout]);

  useEffect(() => () => clearCloseTimeout(), [clearCloseTimeout]);

  // ====== UI ======
  return (
    <header className="bg-[#FFFFFF] text-slate-900 shadow-sm">
      <div className="mx-auto flex w-[80%] max-w-[1600px] items-center justify-between gap-4 px-4 py-2">
        <div className="flex min-w-0 items-center gap-3 h-11">
          <img
            src="/logo-header.png"
            alt="Logo"
            className="h-10 w-10 shrink-0 rounded-full object-contain"
          />
          
          {/* ép 1 dòng + nếu dài quá thì ... */}
          <span className="truncate whitespace-nowrap text-md font-bold uppercase tracking-wide">
            Kho cơ sở dữ liệu dùng chung tỉnh
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <Button
            variant="ghost"
            size="icon"
            className="hidden h-8 w-8 rounded-full bg-white/80 shadow-sm sm:inline-flex"
            aria-label="Tìm kiếm"
          >
            <Search className="h-4 w-4 text-slate-600" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden h-8 w-8 rounded-full bg-white/80 shadow-sm sm:inline-flex"
            aria-label="Thông báo"
          >
            <Bell className="h-4 w-4 text-slate-700" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden h-8 w-8 rounded-full bg-white/80 shadow-sm sm:inline-flex"
            aria-label="Cài đặt"
            title="Cài đặt"
          >
            <Settings className="h-4 w-4 text-slate-700" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden h-8 w-8 rounded-full bg-white/80 shadow-sm sm:inline-flex"
            aria-label="Trợ giúp"
            title="Trợ giúp"
          >
            <HelpCircle className="h-4 w-4 text-slate-700" />
          </Button>
        </div>
      </div>

      <nav className="border-t border-black/5 bg-[#f9e3b7]">
        <div className="mx-auto flex h-12 w-[80%] max-w-[1600px] items-center justify-between gap-4 px-4 text-xs sm:text-sm">
          <div
            ref={navRowRef}
            className="flex flex-1 min-w-0 flex-nowrap items-center gap-2 overflow-hidden"
          >
            {visibleItems.map((item) => (
              <DropdownMenu
                key={item.label}
                open={openNavLabel === item.label}
                onOpenChange={(open) => {
                  if (!open) setOpenNavLabel(null);
                }}
                modal={false}
              >
                <DropdownMenuTrigger asChild>
                  <NavLink
                    to={item.href ?? '#'}
                    className={({ isActive }) =>
                      [
                        'relative flex h-full shrink-0 items-center justify-center rounded-none px-4 text-sm font-semibold whitespace-nowrap transition-colors',
                        'text-slate-900 hover:bg-[#be8a4b] hover:text-white',
                        isActive || openNavLabel === item.label ? 'bg-[#be8a4b] nav-item-open' : '',
                      ].join(' ')
                    }
                    onMouseEnter={() => handleNavTriggerEnter(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <TopNavTrigger label={item.label} />
                  </NavLink>
                </DropdownMenuTrigger>

                {item.children?.length ? (
                  <DropdownMenuContent
                    align="start"
                    className="min-w-64 text-sm"
                    onMouseEnter={() => handleNavTriggerEnter(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    {renderSubItems(item.children)}
                  </DropdownMenuContent>
                ) : null}
              </DropdownMenu>
            ))}

            {/* "..." menu when overflow — mở khi hover, không cần click */}
            {overflowItems.length > 0 ? (
              <DropdownMenu
                open={openNavLabel === '__overflow__'}
                onOpenChange={(open) => {
                  if (!open) setOpenNavLabel(null);
                }}
                modal={false}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="relative flex h-full shrink-0 items-center rounded-none px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#be8a4b] hover:text-white whitespace-nowrap"
                    onMouseEnter={() => handleNavTriggerEnter('__overflow__')}
                    onMouseLeave={scheduleClose}
                  >
                    ...
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="min-w-64 text-sm"
                  onMouseEnter={() => handleNavTriggerEnter('__overflow__')}
                  onMouseLeave={scheduleClose}
                >
                  {overflowItems.map((item) =>
                    item.children?.length ? (
                      <DropdownMenuSub key={item.label}>
                        <DropdownMenuSubTrigger className="cursor-pointer">
                          {item.label}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          {renderSubItems(item.children)}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    ) : (
                      <DropdownMenuItem key={item.label} className="cursor-pointer">
                        <span className="flex w-full items-center justify-between gap-2">
                          <span>{item.label}</span>
                          {item.external ? <ExternalLink className="h-3 w-3" /> : null}
                        </span>
                      </DropdownMenuItem>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}

            {/* Hidden measure row (offscreen) */}
            <div
              ref={measureRef}
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] top-0 flex gap-4"
            >
              {navItems.map((it) => (
                <div
                  key={it.label}
                  data-measure="item"
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold whitespace-nowrap"
                >
                  <span>{it.label}</span>
                  <ChevronDown className="h-3 w-3" />
                </div>
              ))}
              <div data-measure="more" className="px-3 py-2 text-sm font-medium whitespace-nowrap">
                ...
              </div>
            </div>
          </div>

          {/* User Profile / Auth Button */}
          <div className="shrink-0">
            {isLoading ? (
              <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs shadow-sm">
                <Loader2 className="h-3 w-3 animate-spin text-slate-600" />
                <span>Đang kiểm tra...</span>
              </div>
            ) : error ? (
              <button
                type="button"
                onClick={() => auth.signinRedirect()}
                className="flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 shadow-sm hover:bg-red-100"
              >
                <AlertTriangle className="h-3 w-3" />
                <span>Lỗi đăng nhập</span>
              </button>
            ) : isAuthenticated ? (
              <AppUserMenu
                name={displayName}
                initials={displayName
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 3)
                  .toUpperCase()}
              />
            ) : (
              <button
                type="button"
                onClick={() => auth.signinRedirect()}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-medium text-slate-900 shadow-sm hover:bg-slate-100"
              >
                <span>Đăng nhập</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header >
  );
}
