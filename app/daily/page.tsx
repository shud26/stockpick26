import { redirect } from 'next/navigation';
import { getLatestReportDate } from '@/lib/reports';

export default function DailyPage() {
  const latest = getLatestReportDate();
  if (latest) {
    redirect(`/daily/${latest}`);
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-[#6B6B70]">리포트가 없습니다. 내일 오전 9시에 생성됩니다.</p>
    </div>
  );
}
