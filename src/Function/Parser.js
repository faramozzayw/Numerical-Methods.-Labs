const Parser = string => {
	// base case:
	// x^2 => x ** 2
	// log(x)
 

	let result = string;
	//let regExpArray = [/\^/gi, /log\(x\)*/gi, /sqrt(x)/gi];
	//let symbol = ['^', 'log(x)', 'sqrt(x)'];

	//for (let i = 0; i < regExpArray.length; i++) {
	//	result = result.includes('^') ? result.replace(regSt, '**') : result;
	//	console.log("result: ", result);
	//}

	let regSt = /\^/gi;
	result = result.includes('^') ? result.replace(regSt, '**') : result;
	console.log("result", result);


	let regExp = /log\(x\)*/gi;
	result = result.includes('log(x)') ? result.replace(regExp, 'Math.log(x)') : result;
	console.log("result", result);

	let regExpress = /sqrt\(x\)*/gi;
	result = result.includes('sqrt(x)') ? result.replace(regExpress, 'Math.sqrt(x)') : result;
	console.log("result", result);



	return result;
}

export default Parser;