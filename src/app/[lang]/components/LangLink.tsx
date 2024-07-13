import Link from 'next/link'
import { i18n } from '@/i18n.config'

interface LangLinkPropsI {
  href: string
  lang: string
  children: React.ReactNode
  [key: string]: any
}

export default function LangLink({ href, lang, ...props }: LangLinkPropsI) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`
  console.log(`${isDefaultLang ? 'Is INDONESIA' : 'is English'} so here's our path: ${path}`)
  return <Link href={path} {...props} />
}