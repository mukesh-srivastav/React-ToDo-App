class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility : false
		};
	}

	handleToggleVisibility() {
		this.setState((prevState)=>{
			return {
				visibility: !prevState.visibility
			};
		})
	}

	render() {
		return (
			<div>
				<h1>Visibility Test</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.visibility && (
					<div>
						<p>
							Now you can see the details!
						</p>
					</div>	
				)}
			</div>
		);
	}

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = true;

// const toggleVisibility = () => {
// 	visibility = !visibility;
// 	render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Test</h1>
// 			<button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
// 			{visibility && (
// 				<div>
// 					<p>
// 						Now you can see the details!
// 					</p>
// 				</div>	
// 			)}
// 		</div>
// 	);

// 	ReactDOM.render(template, appRoot);
// };

// render();