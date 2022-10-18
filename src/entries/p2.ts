
import '@/pages/p2/index.ts'
import '@/pages/p2/style.scss'

if (process.env.NODE_ENV === 'development') {
  require('@/pages/p2/index.hbs')
  require('@/partials/registerHotReload.ts')
}
