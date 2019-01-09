class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.addOne = this.addOne.bind(this);
		this.removeOne = this.removeOne.bind(this);
		this.reset = this.reset.bind(this);

		this.state = {
			count: 0
		}
	}

	componentDidMount() {
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount, 10);

		if (!isNaN(count)) {
			this.setState(() => ({count }));
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options !== this.state.count) {
			localStorage.setItem('count', this.state.count);			
		}
	}

	addOne() {
		this.setState((prevState) => {
			// It's just changing these specific properties of state, not overriding the whole state object.
			return {
				count: prevState.count + 1
			};
		});
	}

	removeOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}

	reset() {
		this.setState({
				count: 0
		});
		// this.setState((prevState) => {
		// 	// It's just changing these specific properties of state, not overriding the whole state object.
		// 	return {
		// 		count: prevState.count + 1
		// 	};
		// });
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.addOne}>+1</button>
				<button onClick={this.removeOne}>-1</button>
				<button onClick={this.reset}>reset</button>
			</div>
		);
	}
}

// Counter.defaultProps = {
// 	count: 100
// };
ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };

// const subtractOne = () => {
// 	count--;
// 	renderCounterApp();
// };

// const reset = () => {
// 	count = 0;
// 	renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateTwo = (
// 	<div>
// 		<h1>Count: {count} </h1>
// 		<button onClick={addOne}>+1</button>
// 		<button onClick={subtractOne}>-1</button>
// 		<button onClick={reset}>Reset</button>
// 	</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();