
import '@/pages/index/index.ts'
import '@/pages/index/style.scss'

if (process.env.NODE_ENV === 'development') {
  require('@/pages/index/index.hbs')
  require('@/partials/registerHotReload.ts')
}
