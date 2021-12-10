import { Component } from 'inferno'
import "./Search.scss"

export class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "",
      hasSelected: props.selection
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", () => this.searchInput.focus())
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", () => this.searchInput.focus())
  }

  changeFilter(value) {
    this.setState({filter: value})
  }

  select(value) {
    this.setState({hasSelected: value})
    this.props.onSelection(value)
  }

  render() {
    let matches = this.props.elements.filter(e => e.toLowerCase().includes(this.state.filter.toLowerCase()))
    if (matches.length == 1 && this.state.hasSelected != matches[0]) {
      this.select(matches[0])
    }
    return (
      <div class="search">
        <input
          class="filter"
          type="search"
          autocomplete="off"
          placeholder="Netzelement..."
          autofocus
          onInput={e => this.changeFilter(e.target.value)}
          ref={input => this.searchInput = input}
        />
        <select class="elements" onInput={(e) => this.select(e.target.value)} size="2">
          <option disabled>Element auswählen...</option>
          { matches.map(e => (<option value={e} selected={this.state.hasSelected == e}>{e}</option>)) }
        </select>
      </div>
    )
  }
}
