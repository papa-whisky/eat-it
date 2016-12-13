import test from './components/test/test'

const names = [
  { name: "Bob" },
  { name: "Gary" },
  { name: "Sheila" }
]

document.querySelector('#root').innerHTML = test(names)
