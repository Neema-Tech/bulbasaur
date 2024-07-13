export enum LANG {
  INDONESIA = 'id',
  ENGLISH = 'en',
}
export const i18n = {
  defaultLocale: LANG.ENGLISH as LANG,
  locales: Object.values(LANG) as Array<LANG>,
} as const


export type Locale = (typeof i18n)['locales'][number]