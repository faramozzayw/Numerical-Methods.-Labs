const MyFunc = (a, b, h) => {
	let x = a;
	const u = 2 - x - Math.log10(x);
	while (x <= b) {
		v = 2 - i - Math.log10(i);
		if (u * v < 0) {
			alert('На ділянці x-h, x існує корінь');
			u = v;
		} else {
			u = v;
		}
		x +=h
	}
	alert('Кінець відокремлення.')
}

export default MyFunc;