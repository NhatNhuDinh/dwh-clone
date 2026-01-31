import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCallback, useEffect, useRef, useState } from 'react';

type AppUserMenuProps = {
  name: string;
  initials: string;
};

export function AppUserMenu({ name, initials }: AppUserMenuProps) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, [clearCloseTimeout]);

  const handleEnter = useCallback(() => {
    clearCloseTimeout();
    setOpen(true);
  }, [clearCloseTimeout]);

  useEffect(() => () => clearCloseTimeout(), [clearCloseTimeout]);

  return (
    <DropdownMenu
      open={open}
      onOpenChange={(next) => {
        // chỉ cho phép đóng từ Radix (click ra ngoài, ESC), mở thì do hover điều khiển
        if (!next) setOpen(false);
      }}
      modal={false}
    >
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-transparent px-2 py-1 text-left text-xs outline-none sm:text-sm"
          onMouseEnter={handleEnter}
          onMouseLeave={scheduleClose}
        >
          <Avatar size="default">
            <AvatarFallback className="bg-slate-800 text-white">{initials}</AvatarFallback>
          </Avatar>
          <span className="hidden font-medium sm:inline">{name}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-52 text-sm"
        onMouseEnter={handleEnter}
        onMouseLeave={scheduleClose}
      >
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Thông tin cá nhân</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">Đơn vị tổ chức</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem className="cursor-pointer">Phòng ban 1</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Phòng ban 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" variant="destructive">
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

