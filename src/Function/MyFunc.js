import Parser from './Parser';

const ctg = x => 1 / Math.tan(x);

const actg = x => Math.PI / 2 - Math.atan(x);

const relength = x => {
	let count = 5;
	let localX = x.toString();
	let p = localX.indexOf('.') + 1 + count;
	let result = Number.parseFloat(localX.length > 5 ? localX.slice(0, p) : localX);
	return result;
}

const Calc = (fx, a, b, h) => {
	console.clear();
	let x = a;
	let functionString = Parser(fx);

	let u = eval(functionString);
	if (!Number.isFinite(u)) {
		alert('Неочікуваний результат. Будь ласка, перевірте правильність даних та спробуйте знову.')
		return;
	}

	let result = [];
	do {
		let v = eval(functionString);
		if (u * v < 0) {
			let resX = relength(x);
			let xh = relength(x-h);
			alert(`На ділянці [${(x-h) < x ? `${xh}, ${resX}` : `${resX}, ${xh}`}] існує корінь`);
			result.push(`[${(x-h) < x ? `${xh}, ${resX}` : `${resX}, ${xh}`}]`);
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