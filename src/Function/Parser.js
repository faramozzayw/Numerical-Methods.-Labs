import RegExpArray from './RegExpArray'

const Parser = string => {
	console.log(RegExpArray);
	console.log("[string in Parser]: ", string);
	let i = 0;
	let result = string;
	while (i < RegExpArray.length) {
		let regExp = new RegExp(RegExpArray[i][0]);
		let string = RegExpArray[i][1];

		result = result.replace(regExp, string);
		i++;
	}
	console.log("[result in Parser]: ", result);

	return result;
}

export default Parser;