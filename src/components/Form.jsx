import React, { Component } from 'react';

export default class  extends Component {
	state = {
		fx: '',
		h: '',
		a: '',
		b: ''
	}

	render()  {
		return (
			<div>
				<form>
			    <fieldset class="uk-fieldset">

			        <legend class="uk-legend">Введення данних</legend>

			        <div class="uk-margin">
			            <input class="uk-input App-form" type="text" placeholder="Введіть рівняння" />
			            <input class="uk-input App-form" type="text" placeholder="Введіть початок проміжку" />
			            <input class="uk-input App-form" type="text" placeholder="Введіть кінець проміжку" />
			        		<button class="uk-button uk-button-primary">Почати відокремлення кореня</button>
			        </div>
			    </fieldset>
				</form>
			</div>
		);
	}
}
