import { Component } from 'inferno'
import "./Search.scss"

export class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: "",
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
    this.props.onSelection(value)
  }

  render() {
    let matches = this.props.elements.filter(
      e => (e.name + " " + e.long).toLowerCase().includes(this.state.filter.toLowerCase())
    ).sort((a, b) => a.name > b.name)
    if (matches.length == 1 && this.props.selection != matches[0].name) {
      this.select(matches[0].name)
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
          { (matches.length == 0) ?
              <option disabled>Kein Element gefunden</option>
            : <option disabled>Element auswählen...</option> }
          { matches.map(e => (<option value={e.name} selected={this.props.selection == e.name}>{e.name} ({e.long})</option>)) }
        </select>
      </div>
    )
  }
}
