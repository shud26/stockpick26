import fs from "fs";
import path from "path";

const DATA = path.join(process.cwd(), "data");

export interface Row {
  name: string;
  price: number;
  r1: number | null;
  r3: number | null;
  r6: number | null;
  score: number;
  aboveMa200: boolean | null;
  asof: string;
}

export interface Momentum {
  updated: string;
  source: string;
  signal: {
    held: string;
    signal: string;
    winner: string;
    scores: Record<string, number>;
    safe: string;
  };
  etfNames: string[];
  table: Row[];
  basket: string[];
}

export interface LogEntry {
  date: string;
  signal: string;
  held: string;
  scores: Record<string, number>;
}

export function getMomentum(): Momentum {
  return JSON.parse(fs.readFileSync(path.join(DATA, "momentum.json"), "utf-8"));
}

export function getLog(): LogEntry[] {
  const f = path.join(DATA, "log.json");
  if (!fs.existsSync(f)) return [];
  return JSON.parse(fs.readFileSync(f, "utf-8")).reverse();
}
