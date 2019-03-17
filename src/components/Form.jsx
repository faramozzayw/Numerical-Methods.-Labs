import React, { Component } from 'react';

import MyFunc from './../Function/MyFunc' 

export default class  extends Component {
	state = {
		fx: '2 - x - lnx = 0',
		h: '',
		a: '',
		b: ''
	}

	handleInputChange = e => this.setState({[e.target.name]: e.target.value})

	handleClick = e => {
		e.preventDefault();
		console.clear();
		if (this.state.a.trim() === '' || this.state.b.trim() === '' || this.state.h.trim() === '') {
			alert('Помилка вводу: порожня строка'); 
			return;
		}
		const [a, b, h] = [Number(this.state.a), Number(this.state.b), Number(this.state.h)];

		let result;

		Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(h) ? 
		result = MyFunc(a, b, h) :
		alert('Перевірте правильність даних.');

		console.log(result);
	}

	render()  {
		return (
			<div className="uk-container">
				<form>
			    <fieldset className="uk-fieldset">

			        <legend className="uk-legend">Введення данних</legend>

			        <div className="uk-margin">
			            <input 	className="uk-input uk-form-large" type="text" placeholder="Введіть рівняння" id="func"
													value={this.state.fx}
													name='fx'
													// onChange={this.handleInputChange.bind(this)}
													readOnly
									 />
							</div> 
							<div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Введіть початок проміжку" id="first"
			            				value={this.state.a}
			            				name='a'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			         	</div>				
			        <div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Введіть кінець проміжку" id="end"
			            				value={this.state.b}
			            				name='b'
													onChange={this.handleInputChange.bind(this)}
			            				/>

			        <div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Введіть H" id="h"
			            				value={this.state.h}
			            				name='h'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			         	</div>				
			        		<button className="uk-button uk-button-primary"
			        		onClick={this.handleClick.bind(this)}>Почати відокремлення кореня</button>
			        </div>
			    </fieldset>
				</form>
			</div>
		);
	}
}
