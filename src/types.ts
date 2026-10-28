export interface EconomicHighlight {
  id: string;
  number: number;
  formattedMetric: string;
  unit: string;
  title: string;
  subtext: string;
  detailStats?: {
    label: string;
    value: string;
    badge?: string;
  }[];
  badgeText?: string;
  accentColor: string;
}

export type ViewMode = 'classic' | 'grid' | 'slideshow';
export type ThemeMode = 'classic-blue' | 'dark-slate' | 'newspaper';
