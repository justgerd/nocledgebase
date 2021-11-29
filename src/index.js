import { render } from 'inferno'
import { initDevTools } from 'inferno-devtools'
import { App } from "./components/App.jsx"

initDevTools()

render(<App />, document.getElementById('app'))
