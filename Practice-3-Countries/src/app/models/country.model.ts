export interface ICountry {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  gini?: { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Currencies {
  KWD?: TartuGecko;
  USD?: TartuGecko;
  CHF?: TartuGecko;
  MDL?: TartuGecko;
  AOA?: TartuGecko;
  BOB?: TartuGecko;
  AUD?: TartuGecko;
  TVD?: TartuGecko;
  PEN?: TartuGecko;
  XPF?: TartuGecko;
  EUR?: TartuGecko;
  BWP?: TartuGecko;
  AFN?: TartuGecko;
  HUF?: TartuGecko;
  XOF?: TartuGecko;
  CAD?: TartuGecko;
  IDR?: TartuGecko;
  TWD?: TartuGecko;
  XCD?: TartuGecko;
  AWG?: TartuGecko;
  XAF?: TartuGecko;
  SHP?: TartuGecko;
  LRD?: TartuGecko;
  DZD?: TartuGecko;
  MAD?: TartuGecko;
  MRU?: TartuGecko;
  TRY?: TartuGecko;
  SOS?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  BYN?: TartuGecko;
  BBD?: TartuGecko;
  TND?: TartuGecko;
  ILS?: TartuGecko;
  MMK?: TartuGecko;
  DJF?: TartuGecko;
  GIP?: TartuGecko;
  CDF?: TartuGecko;
  BZD?: TartuGecko;
  BMD?: TartuGecko;
  GBP?: TartuGecko;
  RUB?: TartuGecko;
  JPY?: TartuGecko;
  KYD?: TartuGecko;
  HNL?: TartuGecko;
  BIF?: TartuGecko;
  PYG?: TartuGecko;
  ARS?: TartuGecko;
  STN?: TartuGecko;
  LSL?: TartuGecko;
  ZAR?: TartuGecko;
  SDG?: BAM;
  KGS?: TartuGecko;
  BRL?: TartuGecko;
  KHR?: TartuGecko;
  GTQ?: TartuGecko;
  AZN?: TartuGecko;
  MYR?: TartuGecko;
  COP?: TartuGecko;
  BHD?: TartuGecko;
  CLP?: TartuGecko;
  MKD?: TartuGecko;
  MZN?: TartuGecko;
  ETB?: TartuGecko;
  INR?: TartuGecko;
  KZT?: TartuGecko;
  OMR?: TartuGecko;
  AED?: TartuGecko;
  PLN?: TartuGecko;
  LKR?: TartuGecko;
  TJS?: TartuGecko;
  SYP?: TartuGecko;
  LYD?: TartuGecko;
  HTG?: TartuGecko;
  TOP?: TartuGecko;
  GEL?: TartuGecko;
  ERN?: TartuGecko;
  TZS?: TartuGecko;
  CZK?: TartuGecko;
  BTN?: TartuGecko;
  EGP?: TartuGecko;
  VND?: TartuGecko;
  PGK?: TartuGecko;
  BSD?: TartuGecko;
  HRK?: TartuGecko;
  UZS?: TartuGecko;
  GYD?: TartuGecko;
  YER?: TartuGecko;
  MWK?: TartuGecko;
  GMD?: TartuGecko;
  PAB?: TartuGecko;
  IMP?: TartuGecko;
  KRW?: TartuGecko;
  GGP?: TartuGecko;
  PKR?: TartuGecko;
  NZD?: TartuGecko;
  AMD?: TartuGecko;
  TMT?: TartuGecko;
  DOP?: TartuGecko;
  SBD?: TartuGecko;
  VUV?: TartuGecko;
  MGA?: TartuGecko;
  LAK?: TartuGecko;
  CKD?: TartuGecko;
  MNT?: TartuGecko;
  SZL?: TartuGecko;
  ISK?: TartuGecko;
  NPR?: TartuGecko;
  GHS?: TartuGecko;
  IQD?: TartuGecko;
  THB?: TartuGecko;
  RSD?: TartuGecko;
  UGX?: TartuGecko;
  SAR?: TartuGecko;
  JOD?: TartuGecko;
  SRD?: TartuGecko;
  KES?: TartuGecko;
  MXN?: TartuGecko;
  BAM?: BAM;
  SCR?: TartuGecko;
  BGN?: TartuGecko;
  FKP?: TartuGecko;
  GNF?: TartuGecko;
  LBP?: TartuGecko;
  MUR?: TartuGecko;
  NOK?: TartuGecko;
  KMF?: TartuGecko;
  VES?: TartuGecko;
  IRR?: TartuGecko;
  SEK?: TartuGecko;
  FJD?: TartuGecko;
  PHP?: TartuGecko;
  HKD?: TartuGecko;
  UYU?: TartuGecko;
  MOP?: TartuGecko;
  TTD?: TartuGecko;
  RWF?: TartuGecko;
  ALL?: TartuGecko;
  KPW?: TartuGecko;
  MVR?: TartuGecko;
  SGD?: TartuGecko;
  ZWL?: TartuGecko;
  QAR?: TartuGecko;
  ANG?: TartuGecko;
  CRC?: TartuGecko;
  CVE?: TartuGecko;
  RON?: TartuGecko;
  SLL?: TartuGecko;
  NIO?: TartuGecko;
  JMD?: TartuGecko;
  JEP?: TartuGecko;
  WST?: TartuGecko;
  NGN?: TartuGecko;
  ZMW?: TartuGecko;
  UAH?: TartuGecko;
  CNY?: TartuGecko;
  SSP?: TartuGecko;
  BDT?: TartuGecko;
  NAD?: TartuGecko;
  BND?: TartuGecko;
  KID?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export enum StartOfWeek {
  Monday = 'monday',
  Sunday = 'sunday',
  Turday = 'turday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}