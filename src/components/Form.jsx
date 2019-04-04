import React, { Component } from 'react';

import MyFunc from './../function/MyFunc'

export default class  extends Component {
	state = {
		fx:'',
		h: '',
		a: '',
		b: ''
	}

	handleInputChange = e => this.setState({[e.target.name]: e.target.value})

	handleClick = e => {
		e.preventDefault();
		console.clear();
		if (this.state.fx.trim() === '' || this.state.a.trim() === '' || this.state.b.trim() === '' || this.state.h.trim() === '') {
			alert('Input error. Check the correctness of the data.'); 
			return;
		}
		const [fx, a, b, h] = [String(this.state.fx), Number(this.state.a), Number(this.state.b), Number(this.state.h)];
		let result;

		Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(h) && h > 0  ? 
			result = MyFunc(fx, a, b, h) :
			alert('Input error. Check the correctness of the data.');

		console.log(result);
	}

	render()  {
		return (
			<div className="uk-container">
				<form>
			    <fieldset className="uk-fieldset">
			        <legend className="uk-legend">A inputting data</legend>
			        <div className="uk-margin">
			            <input 	className="uk-input uk-form-large" type="text" placeholder="Input a function" id="func"
													value={this.state.fx}
													name='fx'
													onChange={this.handleInputChange.bind(this)}
									 />
							</div> 
							<div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Input a start of interval" id="first"
			            				value={this.state.a}
			            				name='a'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			         	</div>				
			        <div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Input a end of interval" id="end"
			            				value={this.state.b}
			            				name='b'
													onChange={this.handleInputChange.bind(this)}
			            				/>

			        <div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Input a accuracy" id="h"
			            				value={this.state.h}
			            				name='h'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			         	</div>				
			        		<button className="uk-button uk-button-primary"
			        		onClick={this.handleClick.bind(this)}>Start a root separation</button>
			        </div>
			    </fieldset>
				</form>
			</div>
		);
	}
}
