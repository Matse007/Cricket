module.exports = {
    name: 'reactionroles',
    descritpion: "Sets up a reaction role message!",
    async execute(message, args, Discord, bot) {
      const rereg = (args[0] === "registerer");
      const channel = '843530990721695745';
  
      //initializing all roles:
      const lookingToRunRole = 
              message.guild.roles.cache.find(role => role.name === "looking to run");
  
      //initializing all emojis:
      const lookingToRunEmote = '🏃';
  
      if(!rereg){
        let embed = new Discord.MessageEmbed()
        .setColor('#39ff14')
        .setTitle('Choose the role you want!')
        .setDescription(`${lookingToRunEmote} for the looking to run role.`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(lookingToRunEmote);
      }
  
      bot.on('messageReactionAdd', async (reaction, user) => {
        if(reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === lookingToRunEmote) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(lookingToRunRole);
          }
        } else {
          return;
        }
      });
  
       bot.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === lookingToRunEmote) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(lookingToRunRole);
          }
        } else {
          return;
        }
      });
    }
  }
  