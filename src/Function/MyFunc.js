const MyFunc = (a, b, h) => {
	let x = a;
	let u = 2 - x - Math.log(x);
	if (!Number.isFinite(u)) {
		alert('Неочікуваний результат. Будь ласка, перевірте правильність даних та спробуйте знову.')
		return;
	}
	
	do {
		let v = 2 - x - Math.log(x);
		if (u * v < 0) {
			alert(`На ділянці [${(x-h) < x ? `${x-h}, ${x}` : `${x}, ${x-h}`}] існує корінь`);
			u = v;
		} else {
			u = v;
		}
		x += h;
	} while (x <= b)

	alert('Кінець відокремлення.');
}

export default MyFunc;