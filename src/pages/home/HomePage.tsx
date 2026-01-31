import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileText, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-10 text-white">
      {/* Hero section */}
      <section className="rounded-3xl bg-[#0b63d9] px-6 py-12 text-center">
        <h1 className="text-4xl font-semibold">Xin chào, Pham Thien Dat</h1>

        {/* Search box */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white/95 p-4 text-left text-slate-900 shadow-md">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[220px_1fr_auto] sm:items-end">
            <div>
              <Select defaultValue="pipeline">
                <SelectTrigger className="h-9 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pipeline">Tiến trình dữ liệu</SelectItem>
                  <SelectItem value="source">Nguồn dữ liệu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                placeholder="Nhập nội dung tìm kiếm..."
                className="h-9 text-sm"
              />
            </div>

            <div className="flex justify-end">
              <Button
                className="h-9 bg-[#c37b32] px-6 hover:bg-[#b26f2c]"
                type="button"
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workbench cards */}
      <section className="space-y-6">
        <h2 className="text-center text-2xl font-semibold">Bàn làm việc</h2>

        <div className="space-y-6">
          {/* Top row: 4 cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              'Danh sách tiến trình lấy dữ liệu MySQL',
              'Danh sách nguồn dữ liệu MSSQL',
              'Danh sách tiến trình lấy dữ liệu MSSQL',
              'Danh sách nguồn dữ liệu PostgreSQL',
            ].map((title) => (
              <div key={title} className="flex flex-col items-center gap-4">
                <Card className="w-full rounded-sm bg-white text-slate-900 shadow-md">
                  <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center">
                      <FileText className="h-12 w-12 text-green-500" strokeWidth={1.5} />
                    </div>
                  </CardContent>
                </Card>
                <div className="text-base font-normal leading-snug text-white text-center">
                  {title}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: 1 centered card */}
          <div className="flex flex-col items-center gap-4">
            <Card className="w-full max-w-sm rounded-lg bg-white text-slate-900 shadow-md md:max-w-md">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center">
                  <Shield className="h-12 w-12 text-blue-500" strokeWidth={1.5} />
                </div>
              </CardContent>
            </Card>
            <div className="text-base font-normal leading-snug text-white text-center">
              Quản lý phiên bản dữ liệu MSSQL
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
