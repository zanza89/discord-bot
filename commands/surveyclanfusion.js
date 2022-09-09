const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('surveyclanfusion')
		.setDescription('starts a survey to all guild members'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor(0x3498DB)
			.setAuthor({ name: 'Tona', iconURL: 'https://cdn.discordapp.com/avatars/123301130443685890/557b618fabe8a274f5eb1ca02924fd70.webp' })
			.setTitle('SoloLvLing - Clan Umfrage')
			.setDescription('Hallo ihr Lieben!\n\nhier ist unsere Website, wo ihr eure Clan- Aktivität nachschauen könnt.\nSie wird ständig von Thorkeil gewartet und gepflegt wie ein Baby :)\nSo dass nach und nach immer mehr Content und Nützliches dazu kommt.\nFür Verbesserungsvorschläge und Anreize haben wir natürlich auch ein offenes Ohr.')
			.setThumbnail('https://cdn.discordapp.com/attachments/987474227995230329/1012661919078952980/IMG_0128.png')
			.setURL('https://immortal.zwoggel.org')
			.addFields({ name: 'Stimme für eine Clanfusion!', value: 'für mehr..' },
				{ name: 'https://immortal.zwoggel.org', value: 'invite Code: ' },
			)
			.setTimestamp();
		interaction.channel.send({ embeds: [embed] });
	},
};