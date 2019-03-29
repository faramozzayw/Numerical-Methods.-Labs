import Parser from './Parser';

const Calc = (fx, a, b, h) => {
	let x = a;

	let functionString = Parser(fx);
	console.log("functionString", functionString);

	let u = eval(functionString);
	if (!Number.isFinite(u)) {
		alert('Неочікуваний результат. Будь ласка, перевірте правильність даних та спробуйте знову.')
		return;
	}

	let result;
	
	do {
		let v = eval(functionString);
		if (u * v < 0) {
			alert(`На ділянці [${(x-h) < x ? `${x-h}, ${x}` : `${x}, ${x-h}`}] існує корінь`);
			result = `[${(x-h) < x ? `${x-h}, ${x}` : `${x}, ${x-h}`}]`;
			u = v;
		} else {
			u = v;
		}
		x += h;
	} while (x <= b);

	alert('Кінець відокремлення.');
	return result;
}

export default Calc;