class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = "Put your life in the hands of a computer";
		
		const options = ['Option 1', 'Option 2', 'Option 3'];
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options}/>
				<AddOptions />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
	
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);

	}
}

class Action extends React.Component {
	
	handlePick() {
		alert("Hi");
	}
	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll() {
		console.log(this.props.options);
		// alert("Remove All");
	}

	render() {
		return (
			<div>
			{
				this.props.options.map((option) => <Option key={option} optionText={option}/>)
			}
			<button onClick={this.handleRemoveAll}>Remove All</button>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}

class AddOptions extends React.Component {
	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		
		if (option) {
			alert(option);
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add option</button>
				</form>
			</div>
		);
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));