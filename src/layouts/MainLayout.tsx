import { Outlet, useMatches, useLocation } from 'react-router';
import { useEffect } from 'react';
import { AppHeader } from '@/layouts/AppHeader';

type RouteHandle = {
  title?: string;
};

export default function MainLayout() {
  const matches = useMatches();
  const location = useLocation();
  
  // Set document.title cho các route không dùng SectionLayout
  useEffect(() => {
    const currentMatch = [...matches].reverse().find(
      (match) => (match.handle as RouteHandle | undefined)?.title != null
    );
    
    const handle = (currentMatch?.handle ?? {}) as RouteHandle;
    if (handle.title) {
      document.title = handle.title;
    }
  }, [matches]);

  // Chỉ trang home mới có background xanh
  const isHomePage = location.pathname === '/';

  return (
    <div className={`min-h-dvh text-foreground ${isHomePage ? 'bg-[#0b63d9]' : 'bg-[#f3f4f6]'}`}>
      <AppHeader />

      <main className="mx-auto flex w-[80%] max-w-[1600px] flex-col gap-6 px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

