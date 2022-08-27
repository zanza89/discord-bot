module.exports = {
	name: 'messageCreate',
	execute(message) {
		console.log(message.content);
		console.log(message.createdAt.toDateString());
		console.log(message.author.tag);
	},
};