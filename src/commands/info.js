module.exports = async (msg) => {
	//let helpMsg = '**Thanks for using Tarkov TK** \n \n';
	//helpMsg += 'Tarkov TK is very much a work in progress, so if you have any suggestions or issues, please let me know via Twitter https://twitter.com/KyleShepherdDev \n\n';
	//helpMsg += 'Also if you enjoy the bot and want to support me, any help would be appreciated! https://ko-fi.com/kyleshepherd';
	helpMsg += 'Hello all, Nick here, I just wanna give full credit to Kyle Shepard, as he is the creator of this bot and open-sourced it when he could no longer afford it.';
	helpMsg += 'Please follow his twitter https://twitter.com/KyleShepherdDev';
	await msg.channel.send(helpMsg);
};