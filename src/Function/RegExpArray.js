//const ctg = x =>  1 / Math.tan(x);
//const arcctg = x =>  Math.PI / 2 - Math.atan(x);


const RegExpArray = [
	[/\^/gi, '**'], 
	[/sqrt\((.*)\)/gi, 'Math.sqrt($1)'],
	[/\|(.*)\|/gi, 'Math.abs($1)'],
	[/(pi)/g, 'Math.PI'],

	[/log\((.*)\)/gi, 'Math.log($1)'],


	// имеються проблемы
	[/arccos\((.*)\)/gi, 'Math.acos($1)'],
	[/arcsin\((.*)\)/gi, 'Math.asin($1)'],
	[/arctg\((.*)\)/gi, 'Math.atan($1)'],
	[/arcctg\((.*)\)/gi, 'arcctg($1)'],

	// имеються проблемы
	[/cos\((.*)\)/gi, 'Math.cos($1)'],
	[/sin\((.*)\)/gi, 'Math.sin($1)'],
	[/tg\((.*)\)/gi, 'Math.tan($1)'],
	[/ctg\((.*)\)/gi, 'ctg($1)'],


];

export default RegExpArray;