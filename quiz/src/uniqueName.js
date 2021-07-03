const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');


export const getName = () => {
	let username = uniqueNamesGenerator({
		dictionaries: [adjectives, animals, colors],
		length: 2,
		style: "capital",
		separator: " "
	});
	localStorage.setItem('username', username);
	return username;
}



