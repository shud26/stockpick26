import { redirect } from 'next/navigation';
import { getLatestNewsDate } from '@/lib/reports';

export default function NewsPage() {
  const latest = getLatestNewsDate();
  if (latest) redirect(`/news/${latest}`);
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <p style={{ color: '#9ca3af' }}>아직 뉴스 요약이 없습니다. 매일 오전 9시에 생성됩니다.</p>
    </div>
  );
}
