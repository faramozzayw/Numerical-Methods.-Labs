const RegExpArray = [
	[/\^/gi, '**'],
	[/(\d{1,})[x-х]/gi, '$1*x'],
	[/sqrt\(2\)/g, 'Math.SQRT2'],
	[/sqrt\((.*?)\)/g, 'Math.sqrt($1)'],

	[/\|(.*?)\|/g, 'Math.abs($1)'],
	[/(pi|PI)/g, 'Math.PI'],

	[/log\((.*?)\)/gi, 'Math.log($1)'],
	[/ln\((.*?)\)/g, 'Math.log($1)'],

	[/\barccos\((.*?)\)/g, 'Math.acos($1)'],
	[/\barcsin\((.*?)\)/g, 'Math.asin($1)'],
	[/\barctg\((.*?)\)/g, 'Math.atan($1)'],
	[/\barcctg\((.*?)\)/g, 'arcctgx($1)'],

	[/\bcos\((.*?)\)/g, 'Math.cos($1)'],
	[/\bsin\((.*?)\)/g, 'Math.sin($1)'],
	[/\bctg\((.*?)\)/g, 'ctgx($1)'],
	[/\btg\((.*?)\)/g, 'Math.tan($1)'],
];

export default RegExpArray;