import { Component } from 'inferno'
import { LoadingScreen } from "./LoadingScreen.jsx"
import { Search } from "./search/Search.jsx"
import { Hierarchy } from "./hierarchy/Hierarchy.jsx"
import { Inspector } from "./detail/Inspector.jsx"
import "./css/App.scss"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selection: ""
    }

    fetch("data.json")
      .then(response => response.json())
      .then(data => this.setState({ data: data }))

  }

  updateSelection(newSelection) {
    this.setState({ selection: newSelection })
  }

  render() {
    if (this.state.data) {
      return (
        <div class="app container">
          <div class="menu">
            <h1>NOCledgeBase</h1>
          </div>
          <Search list={Object.keys(this.state.data)} onSelection={(newSelection) => this.updateSelection(newSelection)} />
          <Hierarchy data={this.state.data} selection={this.state.selection} onSelection={(newSelection) => this.updateSelection(newSelection)} />
          <Inspector data={this.state.data[this.state.selection]} />
        </div>
      )
    } else {
      return <LoadingScreen/>
    }
  }
}
