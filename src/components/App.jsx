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

    let hash= window.location.hash.match("\#\/(.*)")

    this.state = {
      selection: hash? hash[1] : ""
    }

    window.onhashchange = (e) => {
      let hash = e.newURL.match("\#\/(.*)")
      this.setState({ selection: hash ? hash[1] : "" })
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
    if(newSelection)
      window.location = "#/" + newSelection
  }

  render() {
    if (this.state.data) {
      let hasChildren = this.state.data.filter(e => e.parent === this.state.selection).length
      return (
        <div class="app container">
          <div class="menu">
            <h1>NOCledgeBase</h1>
          </div>
          <div class="ui">
            <Search elements={this.state.data} selection={this.state.selection} onSelection={(newSelection) => this.updateSelection(newSelection)} />
            {
              hasChildren ?
                <Hierarchy data={this.state.data} selection={this.state.selection} />
              : null
            }
            <Inspector data={this.state.data} selection={this.state.selection} />
          </div>
        </div>
      )
    } else {
      return <LoadingScreen/>
    }
  }
}
