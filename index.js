const fetch = require('node-fetch')
const co = require('co')

co(function *() {
    let response = yield fetch('https://api.github.com/users/edysegura')
    let json = yield response.json()
    console.log(JSON.stringify(json, null, 2))
});