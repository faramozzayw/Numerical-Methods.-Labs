import RegExpArray from './RegExpArray';

const Parser = string => {
	console.log("[input in Parser]: ", string);
	let i = 0;
	let result = string;
	while (i < RegExpArray.length) {
		let regExp = new RegExp(RegExpArray[i][0]);
		let string = RegExpArray[i][1];
		result = regExp.test(result) ? result.replace(regExp, string) : result;
		i++;
	}
	console.log("[output in Parser]: ", result);

	return result;
}

export default Parser;