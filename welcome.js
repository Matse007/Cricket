module.exports = bot => {
  const JT = '260497864277491712';
  bot.on('guildMemberAdd', (member) => {
    member.send("Welcome to the Biomutant Speedrunners Discord! \n Whenever you have a question feel free to ask! We are here to help. \n Don't forget to grab your role in the #roles channel. \n Read the rules! \n Happy running!");
    member.guild.members.cache.get(JT).send("There is a new member on the server: " + member.user.username);
  })
}