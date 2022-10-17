/**
 * auto build webpack entry
 */

import fs from 'fs'
import { pages } from './pages.config'

const importData = (pageName: string): string => (`
import '@/pages/${pageName}/style.scss'

if (process.env.NODE_ENV === 'development') {
  require('@/pages/${pageName}/index.hbs')
}
`)

// path from the root
const currentEntries = fs.readdirSync('./src/entries')

pages.forEach(page => {
  // if entry is not exist, build it!
  if (!currentEntries.includes(`${page.name}.ts`)) {
    fs.writeFileSync(`./src/entries/${page.name}.ts`, importData(page.name))
  }
})
