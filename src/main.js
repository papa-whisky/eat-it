import test from './components/test/test'

const names = [
  { name: "Bob" },
  { name: "Gary" },
  { name: "Sheila" }
]

const rootDiv = document.querySelector('#root')

test(rootDiv, names)

if (module.hot) {
    module.hot.accept();
}
