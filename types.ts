export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface SpecItem {
  label: string;
  value: string;
  unit?: string;
}
