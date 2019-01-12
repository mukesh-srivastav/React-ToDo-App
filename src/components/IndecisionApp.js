import React from 'react';
import AddOptions from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}

	//Life cycle methods. only accessible to class based components

	componentDidMount() {

		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
		
			if(options) {
				this.setState(() => ({ options }));			
			}
		} catch (e) {
			// do nothing at all if json parsing fails
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log('updating data');
		}
	}

	componentWillUnmount() {
		console.log('componentWillUnmount!');
	}


	handleDeleteOptions() {
		this.setState(() => ({options: []}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random()*this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}


	handleAddOption(option) {

		if(!option) {
			return 'Enter valid value to add item';
		} else if(this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({options: prevState.options.concat(option)}));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState)=>({
			options: prevState.options.filter((option) => option !== optionToRemove)
		}));
	}

	render() {
		const subtitle = "Put your life in the hands of a computer";
		
		return (
			<div>
				<Header subtitle={subtitle}/>
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePick = {this.handlePick}
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOptions
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

export default IndecisionApp;