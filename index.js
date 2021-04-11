const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "k!";

client.on("message", function(message) {
	
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	const commandBody = message.content.slice(prefix.length);

	//Yo, I know no one is working on this anymore, but fuck it, I'll do sum
	//Gon replace all the command stuff with a Switch for simplicity's sake
	switch(command) {

		case "ping": //Sends back latency
			const timeTaken = Date.now() - message.createdTimestamp;
			message.channel.send(`Pong! This message had a latency of ${timeTaken}ms.`);
			break;

		case "beep": //sends boop!
			message.channel.send('Boop!');
			break;

		case "server": //gets server name and member count
			message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
			break;

		case "user info": //Information about the user
			message.channel.send(`***Username:***  ${message.author.tag}\n***User ID:***  ${message.author.id}\n***Is this user a bot?:***  ${message.author.bot}\n***User created at:***  ${message.author.createdAt}`);
			break;

		case "help":
			message.channel.send(`Hello! If you're having bot issues, please submit a ticket in the Keomi Support server, which can be found here: https://discord.gg/tctgKsq\nFor command help, please use k!commands!`);
			break;

		default:
			message.channel.send('Unknown command!');
	}

});
client.login(config.BOT_TOKEN);
