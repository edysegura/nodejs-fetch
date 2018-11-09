const fetch = require('node-fetch')

async function main() {
  const response = await fetch('https://api.github.com/users/edysegura')
  const data = await response.json()
  console.log(JSON.stringify(data, null, 2))
}

main()
