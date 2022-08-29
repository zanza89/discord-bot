module.exports = {
	name: 'guildMemberAdd',
	execute(member) {
		// console.log('New User ' + member.user.username + ' has joined ' + member.guild.name);
		// member.guild.channels.cache.find(c => c.name === 'eingang').send(member.user.username + 'has joined this server');
		console.log(member);
	},
};