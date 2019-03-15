import React, { Component } from 'react';

import CalcResult from './../Function/Calculations' 

export default class  extends Component {
	state = {
		defaultfx: '2-x-lnx=0', // 2 - x - Math.log10(x) = 0
		fx: '',
		h: '',
		a: '',
		b: ''
	}

	handleInputChange = event => {
		const target = event.target;
		const value = event.target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}

	handleClick = e => {
		e.preventDefault();
		CalcResult(this.state.fx, this.state.a, this.state.b, this.state.h)
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
													name='fx'
													onChange={this.handleInputChange.bind(this)}
									 />
			            <input className="uk-input App-form" type="text" placeholder="Введіть початок проміжку" id="first"
			            				value={this.state.a}
			            				name='a'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			            <input className="uk-input App-form" type="text" placeholder="Введіть кінець проміжку" id="end"
			            				value={this.state.b}
			            				name='b'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			            <input className="uk-input App-form" type="text" placeholder="Введіть H" id="h"
			            				value={this.state.h}
			            				name='h'
													onChange={this.handleInputChange.bind(this)}
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
