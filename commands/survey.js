const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('survey')
		.setDescription('start survey to chose clan-logo.'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('logo1')
					.setLabel('Uno')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo2')
					.setLabel('Dos')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo3')
					.setLabel('Tres')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo4')
					.setLabel('Cuatro')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo5')
					.setLabel('Cinco')
					.setStyle(ButtonStyle.Primary),
			);
		const row2 = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('logo6')
					.setLabel('Seis')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo7')
					.setLabel('Siete')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo8')
					.setLabel('Ocho')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo9')
					.setLabel('Nueve')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('logo10')
					.setLabel('Diez')
					.setStyle(ButtonStyle.Primary),
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

		await interaction.reply({ content: '', ephemeral: true, embeds: [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10], components: [row, row2] });
		if (!interaction.isButton()) return;
	},
};