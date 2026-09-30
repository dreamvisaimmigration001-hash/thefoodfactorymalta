export type PageId =
  | 'home'
  | 'about'
  | 'facilities'
  | 'solutions'
  | 'brands'
  | 'rd'
  | 'quality'
  | 'sustainability'
  | 'story'
  | 'news'
  | 'contact';

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
}

export interface FacilityZone {
  id: string;
  name: string;
  headline: string;
  sqm: string;
  temperature: string;
  capacity: string;
  description: string;
  features: string[];
  image: string;
}

export interface FoodSolutionCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  applications: string[];
  shelfLife: string;
  temperatureRegime: string;
  image: string;
}

export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  founded?: string;
  description: string;
  highlights: string[];
  image: string;
  website?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  headline: string;
  description: string;
  significance: string;
  image: string;
}

export interface QualityCertification {
  id: string;
  code: string;
  name: string;
  scope: string;
  body: string;
  status: string;
  summary: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  fullText: string[];
  image: string;
  featured?: boolean;
}

export interface SustainabilityMetric {
  id: string;
  value: string;
  metric: string;
  impact: string;
  description: string;
}
