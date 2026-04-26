import fs from 'fs';
import path from 'path';

const REPORTS_DIR = path.join(process.cwd(), 'data', 'reports');
const NEWS_DIR    = path.join(process.cwd(), 'data', 'news');

export function getAllReportDates(): string[] {
  if (!fs.existsSync(REPORTS_DIR)) return [];
  return fs.readdirSync(REPORTS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort((a, b) => b.localeCompare(a));
}

export function getLatestReportDate(): string | null {
  return getAllReportDates()[0] ?? null;
}

export function getReport(date: string): any | null {
  const filePath = path.join(REPORTS_DIR, `${date}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function getAllNewsDates(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs.readdirSync(NEWS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
    .sort((a, b) => b.localeCompare(a));
}

export function getLatestNewsDate(): string | null {
  return getAllNewsDates()[0] ?? null;
}

export function getNews(date: string): any | null {
  const filePath = path.join(NEWS_DIR, `${date}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
