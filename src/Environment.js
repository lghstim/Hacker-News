// 1
const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

// 2
const store = new Store(new RecordSource())

// 3
const network = Network.create((operation, variables) => {
  // 4
  return fetch('https://api.graph.cool/relay/v1/cj7efiax70p7n0114smn4twtm', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})

// 5
const environment = new Environment({
  network,
  store,
})

// 6
export default environment
