import Link from 'next/link';
import { getAllReportDates, getReport } from '@/lib/reports';
import { redirect } from 'next/navigation';

export default function Home() {
  const dates = getAllReportDates();
  if (dates.length === 0) {
    return (
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af' }}>아직 리포트가 없습니다. 내일 오전 9시에 첫 리포트가 생성됩니다.</p>
      </div>
    );
  }

  // 리포트가 있으면 최신 날짜로 리다이렉트
  redirect(`/daily/${dates[0]}`);
}
