import { Component } from 'inferno'
import { parse as csvparse } from 'csv-parse/browser/esm/sync'
import { LoadingScreen } from "./LoadingScreen.jsx"
import { Search } from "./search/Search.jsx"
import { Hierarchy } from "./hierarchy/Hierarchy.jsx"
import { Inspector } from "./detail/Inspector.jsx"
import "./css/App.scss"

export class App extends Component {
  constructor(props) {
    super(props)

    let hashmatch = window.location.hash.match("\#\/(.*)")

    this.state = {
      selection: hashmatch ? hashmatch[1] : null
    }

    fetch("data.csv")
      .then(response => response.text())
      .then(data => this.setState({ data: this.parseData(data) }))

  }

  parseData(data) {
    return csvparse(data, {
      columns: true,
      skipEmptyLines: true
    })
  }

  updateSelection(newSelection) {
    this.setState({ selection: newSelection })
    window.location = "#/" + newSelection
  }

  render() {
    if (this.state.data) {
      return (
        <div class="app container">
          <div class="menu">
            <h1>NOCledgeBase</h1>
          </div>
          <Search elements={this.state.data} selection={this.state.selection} onSelection={(newSelection) => this.updateSelection(newSelection)} />
          <Hierarchy data={this.state.data} selection={this.state.selection} onSelection={(newSelection) => this.updateSelection(newSelection)} />
          <Inspector data={this.state.data} selection={this.state.selection} onSelection={(newSelection) => this.updateSelection(newSelection)} />
        </div>
      )
    } else {
      return <LoadingScreen/>
    }
  }
}
