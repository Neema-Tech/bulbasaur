"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface LangSwitcherPropsI {
  currLang: string;
}
export default function LangSwitcher(props: LangSwitcherPropsI) {
  const { currLang } = props;
  const pathName = usePathname();

 
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const pathnameIsMissingLocale = i18n.locales.every(
      locale => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );
  
    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return '/';
        segments.splice(1,1);
        return segments.join('/');
      }
      const segments = pathName.split('/');
      segments[1] = locale;
      return segments.join('/');
    }
  }


  return (
    <div className="dropdown inline-block relative group">
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1">{currLang}</span>
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </button>
      <ul className={`dropdown-menu absolute hidden group-hover:block text-gray-700 pt-1`}>
        {i18n.locales.map(locale => (
          <li key={locale} className="">
            <Link
              href={redirectedPathName(locale)}
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            >
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
