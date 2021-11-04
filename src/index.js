import { render } from 'inferno';

function HelloWorld(props) {
	return(<div>Hello World!</div>)
}

render(<HelloWorld />, document.getElementById('app'));
