const template = require('./template.hbs')

const hbsHtml = template({
  data: 'my input data',
  name: 'link'
})

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')
  root.innerHTML = hbsHtml
})