import fs from 'fs';
import path from 'path';

const REPORTS_DIR = path.join(process.cwd(), 'data', 'reports');

export function getAllReportDates(): string[] {
  if (!fs.existsSync(REPORTS_DIR)) return [];
  return fs.readdirSync(REPORTS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort((a, b) => b.localeCompare(a)); // 최신순
}

export function getLatestReportDate(): string | null {
  const dates = getAllReportDates();
  return dates[0] ?? null;
}

export function getReport(date: string): any | null {
  const filePath = path.join(REPORTS_DIR, `${date}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}
