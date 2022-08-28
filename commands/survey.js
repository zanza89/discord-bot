const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('survey')
		.setDescription('start survey to chose clan-logo.'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select_logo')
					.setPlaceholder('nichts ausgewählt..')
					.addOptions(
						{
							label: 'Uno',
							description: 'crystal-raspberry',
							value: 'first_option',
						},
						{
							label: 'Dos',
							description: 'dark-purpled',
							value: 'second_option',
						},
						{
							label: 'Tres',
							description: 'light-purpled',
							value: 'third_option',
						},
						{
							label: 'Cuatro',
							description: 'black-and-white',
							value: 'fourth_option',
						},
						{
							label: 'Cinco',
							description: 'emerald-green',
							value: 'fith_option',
						},
						{
							label: 'Seis',
							description: 'fire-nation-red',
							value: 'sixth_option',
						},
						{
							label: 'Siete',
							description: 'dried-blood-crusade',
							value: 'seventh_option',
						},
						{
							label: 'Ocho',
							description: 'dried-blood-persia',
							value: 'eighth_option',
						},
						{
							label: 'Nueve',
							description: 'crystal-shallow',
							value: 'ninth_option',
						},
						{
							label: 'Diez',
							description: 'crystal-ocean',
							value: 'tenth_option',
						},
					),
			);
		const embed = new EmbedBuilder()
			.setColor(0x3498DB)
			.setAuthor({ name: 'Tona', iconURL: 'https://cdn.discordapp.com/avatars/123301130443685890/557b618fabe8a274f5eb1ca02924fd70.webp' })
			.setTitle('Clanumfrage')
			.setDescription('Hi Clanmember,\n\nder Clan ist in letzter Zeit stetig gewachsen und das ist auch nicht zuletzt euer Verdienst. Anlässlich der Gestaltung einer Hompage für den Clan, starten wir eine Umfrage, um ein passendes Clanlogo zu erwählen :)\nFür Desgin- Vorschläge bzw. Änderungen sind wir natürlich auch offen.')
			.setThumbnail('https://cdn.discordapp.com/avatars/1009464464711634984/170a441bcb686530a8e4b17fdcdbbd06.webp')
			.addFields({ name: 'Wähle ein Logo aus!', value: 'es stehen folgende zur Auswahl..' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Design Uno', value: 'crystal-raspberry' },
			)
			.setURL('https://youtu.be/3p-diH3sMOw')
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661916675608576/IMG_0122.png');

		const embed2 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Dos', value: 'dark-purpled' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661917069889546/IMG_0123.png');
		const embed3 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Tres', value: 'light-purpled' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661917480910888/IMG_0124.png');
		const embed4 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Cuatro', value: 'black-and-white' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661917833244692/IMG_0125.png');
		const embed5 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Cinco', value: 'emerald-green' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661918223310968/IMG_0126.png');
		const embed6 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Seis', value: 'fire-nation-red' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661918630150194/IMG_0127.png');
		const embed7 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Siete', value: 'dried-blood-crusade' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661919078952980/IMG_0128.png');
		const embed8 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Ocho', value: 'dried-blood-persia' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661919569690745/IMG_0129.png');
		const embed9 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Nueve', value: 'crystal-shallow' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012661920039448616/IMG_0130.png');
		const embed10 = new EmbedBuilder()
			.setColor(0x3498DB)
			.addFields({ name: 'Design Diez', value: 'crystal-ocean' })
			.setImage('https://cdn.discordapp.com/attachments/987474227995230329/1012744760164884510/IMG_0134.png')
			.setTimestamp()
			.setFooter({ text: '\u00A9' + 'copyright Eren Gencer (Tona)' });

		await interaction.reply({ content: '', ephemeral: true, embeds: [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10], components: [row] });

	},
};