import { en } from '@/lang/locales/en';

declare global {
  export type Language = typeof en;

  type PathsToStringProps<T> = T extends string
    ? []
    : {
        [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
      }[Extract<keyof T, string>];

  type Join<T extends string[], D extends string> = T extends []
    ? never
    : T extends [infer F]
      ? F
      : T extends [infer F, ...infer R]
        ? F extends string
          ? `${F}${D}${Join<Extract<R, string[]>, D>}`
          : never
        : string;

  type DottedLanguageObjectStringPaths = Join<
    PathsToStringProps<Language>,
    '.'
  >;
}

export type ImageFormat = {
  id: number;
  name: string;
  alternativeText: null | string;
  caption: null | string;
  width: number;
  height: number;
  formats: null | any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null | any;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: ImageFormat;
};

export type Question = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};
