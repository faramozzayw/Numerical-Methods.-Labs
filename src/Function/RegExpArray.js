const RegExpArray = [
	[/\^/gi, '**'], 
	[/sqrt\((.*)\)/gi, 'Math.sqrt($1)'], 
	[/log\((.*)\)/gi, 'Math.log($1)'],
	[/\|(.*)\|/, 'Math.abs($1)']
];

export default RegExpArray;