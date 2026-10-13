// Dated events (Slow Jam sessions, concerts, workshops). The weekly Collins jam is fixed and lives in ui.ts.
export interface AbmEvent {
  date: string; // ISO date, Madrid local
  time: string;
  title: { es: string; en: string };
  place: string;
  address?: string;
  mapUrl?: string;
  kind: "slow-jam" | "concert" | "workshop" | "other";
}

export const events: AbmEvent[] = [];
