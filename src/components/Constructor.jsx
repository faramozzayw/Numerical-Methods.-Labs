import React, { Component } from 'react';

export default class Constructor extends Component {
	state = {
		func: ''
	}

	handleClick = e => {
		e.preventDefault();
		const resultStr = this.state.func.concat(e.target.value);
		this.setState({
			func: resultStr
		});
	}

	deletedClick = e => {
		e.preventDefault();
		if (e.target.value === 'one') {
		  this.setState({
			  func: this.state.func.slice(this.state.func.lenght, -1)
		  });
		} else {
			this.setState({
				func: ''
			})
		}
	}

	render() {
		return (
			<div>
				<form>
					<fieldset className="uk-fieldset" >
						<button className="uk-button uk-button-primary"
			  	      		onClick={this.handleClick.bind(this)}
			  	      		value={'/'}
			  	      		title='Знак деления'>/</button>
			  		<button className="uk-button uk-button-primary"
			  		      	onClick={this.handleClick.bind(this)}
			  		      	value={'+'}>+</button>
			  		<button className="uk-button uk-button-primary"
			  		      	onClick={this.handleClick.bind(this)}
			  		      	value={'**'}
			  		      	title='Возведение в степень.'>**</button>
			  		<button className="uk-button uk-button-primary"
			  		      	onClick={this.handleClick.bind(this)}
			  		      	value={'x'}
			  		      	title='Добавить переменную х.'>x</button>
			  		<button className="uk-button uk-button-primary"
			  		      	onClick={this.deletedClick.bind(this)}
			  		      	value='one'
			  		      	title='Удалить один символ.'>⬅</button>
			  		<button className="uk-button uk-button-primary"
			  		      	onClick={this.deletedClick.bind(this)}
			  		      	value='all'
			  		      	title='Удалить один символ.'>CE</button>  
					</fieldset>    	
					<input 	className="uk-input App-form" type="text" placeholder="Введіть рівняння" id="func"
									value={this.state.func}
									readOnly
					/>
				</form>
			</div>
		);
	}
}
