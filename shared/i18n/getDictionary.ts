import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(m => m.default),
  pt: () => import('./dictionaries/pt.json').then(m => m.default),
}

export async function getDictionary(locale: Locale) {
  console.log('locale:', locale)
  console.log('available:', Object.keys(dictionaries))
  return dictionaries[locale]();
}
