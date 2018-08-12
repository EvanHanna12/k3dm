const reqEvent = (event) => require(`../events/${event}`)

module.exports = client => {
	client.on('ready', () => reqEvent('ready')(client));
	// client.on('reconnecting', () => reqEvent('reconnecting')(client));
	// client.on('disconnect', () => reqEvent('disconnect')(client));
	client.on('message', reqEvent('message'));
	client.on('messageDelete', reqEvent('messageDelete'));
	client.on('messageUpdate', reqEvent('messageUpdate'));
	client.on('guildBanAdd', reqEvent('guildBanAdd'));
	client.on('guildBanRemove', reqEvent('guildBanRemove'));
	client.on('roleCreate', reqEvent('roleCreate'));
	client.on('roleDelete', reqEvent('roleDelete'));
	client.on('roleUpdate', reqEvent('roleUpdate'));
	client.on('guildMemberUpdate', reqEvent('guildMemberUpdate'));
	client.on('guildCreate', reqEvent('guildCreate'));
	client.on('guildDelete', reqEvent('guildDelete'));
	client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
	client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
};
