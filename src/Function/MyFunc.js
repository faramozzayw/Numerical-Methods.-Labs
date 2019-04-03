import Parser from './Parser';

const ctg = x => 1 / Math.tan(x);

const actg = x => Math.PI / 2 - Math.atan(x);

const relength = x => {
	let localX = x.toString();
	let result = Number.parseFloat(localX.length > 5 ? localX.slice(0, 5) : localX);
	console.log(result);
	return result
}

const Calc = (fx, a, b, h) => {
	console.clear();
	let x = a;

	let functionString = Parser(fx);
	console.log("[functionString]: ", functionString);

	let u = eval(functionString);
	if (!Number.isFinite(u)) {
		alert('Неочікуваний результат. Будь ласка, перевірте правильність даних та спробуйте знову.')
		return;
	}

	let result = [];
	do {
		let v = eval(functionString);

		if (u * v < 0) {
			alert(`На ділянці [${(x-h) < x ? `${x-h}, ${x}` : `${x}, ${x-h}`}] існує корінь`);
			result.push(`[${(x-h) < x ? `${x-h}, ${x}` : `${x}, ${x-h}`}]`);
			u = v;
		} else {
			u = v;
		}

		x = relength(x) + h;
	} while (x <= b);

	alert('Кінець відокремлення.');
	return result;
}

export default Calc;