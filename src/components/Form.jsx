import React, { Component } from 'react';

export default class  extends Component {
	state = {
		defaultfx: '2-x-lnx=0', // 2 - x - Math.log10(x) = 0
		fx: '',
		h: '',
		a: '',
		b: ''
	}

	handleFunc = e => {
		this.setState({
			fx: e.target.value
		});	
	}

	handleFirst = e => {
		this.setState({
			a: e.target.value
		});	
	}

	handleEnd = e => {
		this.setState({
			b: e.target.value
		});	
	}

	handleClick = e => {
		e.preventDefault();
		console.log(`
			Function: ${this.state.fx}
			First: ${this.state.a}
			End: ${this.state.b}
		`);
	}

	render()  {
		return (
			<div>
				<form>
			    <fieldset className="uk-fieldset">

			        <legend className="uk-legend">Введення данних</legend>

			        <div className="uk-margin">
			            <input 	className="uk-input App-form" type="text" placeholder="Введіть рівняння" id="func"
													value={this.state.fx}
													onChange={this.handleFunc.bind(this)}
									 />
			            <input className="uk-input App-form" type="text" placeholder="Введіть початок проміжку" id="first"
			            				value={this.state.a}
													onChange={this.handleFirst.bind(this)}
			            				/>
			            <input className="uk-input App-form" type="text" placeholder="Введіть кінець проміжку" id="end"
			            				value={this.state.b}
													onChange={this.handleEnd.bind(this)}
			            				/>
			        		<button className="uk-button uk-button-primary"
			        		onClick={this.handleClick.bind(this)}>Почати відокремлення кореня</button>
			        </div>
			    </fieldset>
				</form>
			</div>
		);
	}
}
