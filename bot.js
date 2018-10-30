const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "."
const devs = ['200644160179535872','455653515881218048'];
const adminprefix = "."

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 :rocket: البوت يعمل 24 ساعه
 اكتب
 .support لدخول سيرفر الدعم :smile:
.invite للحصول على رابط دخول البوت ٍ
انشا روم باسم 
welcome وسيرحب البوت بالناس
البوت مضاد للهاكرز والبوتس الهاكرز بس لازم تكون رتبته عاليه 
**
        ***__General orders__***
**
『${prefix}server/يعرض لك معلومات عن السيرفر』
『${prefix}count/يعرض لك عدد الاشخاص بالسيرفر بدون بوتات』
『${prefix}invites/ يعرض لك  عدد انفايتاتك بالسيرفر 』
『${prefix}inv-info <invitelink here> / لمعلومات عن الدعوه』
『 مثال : invinfo m82n8P
『${prefix}giveaway / يعمل لك جيف اواى 』
『${prefix}top/يعرض لك روابط الانفايتات حكك في السيرفر 』
『${prefix}perms/ يقولك البرمشنات الى حقق فى السيرفر 』
『${prefix}say/يكرر الكلام الي تكتبو』
『${prefix}image/صورة السيرفر』
『${prefix}members/عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『${prefix}id/معلومات عنك』
『${prefix}bans / عدد الاشخاص المبندة 』
『${prefix}support/سيرفر الدعم』
『${prefix}link/يعرض لك لينك السيرفر لكل يوم انفيت』
『${prefix}find/للبحث عن عضو معين』
『${prefix}email/يساعدك فى صنع جيميل وباسورد له』
**
        ***__Administrative Orders__***
**
『${prefix}move @user /  لسحب الشخص الى روومك』
『${prefix}temp / انشا روم مؤقت  』
『${prefix}setvoice /يصنع لك ساعه و فويس اونلاين وتاريخ 』
『${prefix}bc / رسالة جماعية الى كل اعضاء السيرفر』
『${prefix}bk <everyone or @role> / راسال رساله جماعيه لرتبه محدده』
『${prefix}hc / اخفاء الشات』
『${prefix}sc / اضهار الشات المخفية』
『${prefix}color <numbr> / يصنع لك الوان فى سيرفرك』
『${prefix}clear <numbr> / مسح الشات بعدد』
『${prefix}kick @user <reason> / طرد الشخص من السيرفر』
『${prefix}ban @user <reason> / حضر الشخص من السيرفر』
『${prefix}vkick / لطرد احد من الروم الصوتيه』
『${prefix}mc / تقفيل الشات』
『${prefix}unmc / فتح الشات』
**
   `,`
***__Games orders__***
 **
『${prefix}marry  / لعبه التزاوج بس منشن للى تبيه』
『${prefix}sra7a /لعب صراحة』
『${prefix}halt3lm /معلومات عامه』
『${prefix}hack / لعبه الهاكر بس منشن حد』
『${prefix}nkt /نكت مضحكه
『${prefix}marim /لعبه مريم اساله ونت جاوب فويس』
『${prefix}t7dy /تحديات وعواقب صعبه لعبه مرا مضحكه』
『${prefix}8ball /تسال سؤوال ويجاوب اجابه عشوائيه 』
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;

      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});






client.on('message', message => {
    if (message.content.startsWith(".id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('**المعلومات التى توصل لها البوت** ')
            .addField('``بينق ``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``مساحه البوت``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('**عدد السيرفرات التى بها البوت**', [client.guilds.size], true)
            .addField('``اسم البوت``' , `[ ${client.user.tag} ]` , true)
            .addField('``ايدى البوت``' , `[ ${client.user.id} ]` , true)
            .addField("** اسمك **", `${message.author.username}`)
            .addField('** التاج **', message.author.discriminator)
            .addField('**الايدى حقك**', message.author.id)
            .addField('**تاريخ دخولك الديسكورد**', message.author.createdAt)
    })
}
});






client.on('message', message => {
       if(message.content.startsWith(`.support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Support Server Click here")
           .setURL("https://discord.gg/5zGFUsX")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });



client.on("message",function(message) {
	var prefix = ".";
    if(message.content.startsWith(prefix + 'bot')) {
        var uptime = client.uptime;
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var notCompleted = true;
 
    while (notCompleted) {
 
        if (uptime >= 8.64e+7) {
 
            days++;
            uptime -= 8.64e+7;
 
        } else if (uptime >= 3.6e+6) {
 
            hours++;
            uptime -= 3.6e+6;
 
        } else if (uptime >= 60000) {
 
            minutes++;
            uptime -= 60000;
 
        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
 
        }
 
        if (uptime < 1000)  notCompleted = false;
 
    }
 
var v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("#6a109d")
  v1.setDescription('***__ انتظر .. جاري الحصول علي البيانات __***')
  v1.setFooter("# | SmartBot |")
var heroo = new Discord.RichEmbed()
.setColor('#6a109d')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setTitle('S_C BOT Info')
.setURL('https://discordapp.com/oauth2/authorize?client_id=471464656242737183&permissions=2080898225&scope=bot')
.setAuthor(client.user.username,client.user.avatarURL)
.addField("**البرفكس** :",`**[ ${prefix} ]**`,true)
.addField("**السيرفرات** :","**[ "+client.guilds.size+" ]**",true)
.addField("**القنوات** :","**[ "+client.channels.size+" ]**",true)
.addField("**المستخدمين** :","**[ "+client.users.size+" ]**",true)
.addField("**اسم البوت** : ","**[ "+client.user.username+" ]**",true)
.addField("**ايدي البوت **:","**[ "+client.user.id+" ]**",true)
.addField("**الحجم المستخدم** :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("**موعد الاقلاع** :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter(" Smart Bot  |");
  message.channel.send({embed:v1}).then(m => {
      setTimeout(() => {
         m.edit({embed:heroo});
      },3000);
  });
}
});





client.on('message', msg => {
     if(msg.content === 'هلا')
                 setTimeout(function() {
   msg.reply('هلا حبي')
                 }, 10000)
   });


   client.on('message', msg => {
     if(msg.content === 'السلام عليكم')
                 setTimeout(function() {
   msg.reply('https://media1.tenor.com/images/53450faac6ba46523b9817356ab55a80/tenor.gif?itemid=10748497')
                 }, 10000)
   });



   client.on('message', msg => {
     if(msg.content === 'باك')
                 setTimeout(function() {
   msg.reply('https://media.giphy.com/media/3orif16n4OBZk75t4c/giphy.gif')
                 }, 10000)
   });





 client.on('message', msg => {
     if(msg.content === '.help')
                 setTimeout(function() {
   msg.reply('**تم الارسال بالخاص , https://media.giphy.com/media/3oEdv9OpWdiMIcCnYc/giphy.gif**')
                 }, 5000)
   });



   client.on('message', msg => {
     if(msg.content === '.invite')
                 setTimeout(function() {
   msg.reply('**تم الارسال بالخاص رابط البوت,https://media.giphy.com/media/3oEdv9OpWdiMIcCnYc/giphy.gif**')
                 }, 5000)
   });




 client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='.members')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('🌷| Members info')
         .addBlankField(true)
         .addField('📗| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('➡| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });



       client.on('message', async msg => {
             client.snek = require('snekfetch');
           var p = "."
         if(msg.content.startsWith(p + "say")) {
          let args = msg.content.split(' ').slice(1).join(' ');
         if(!args) return args.missing(msg, 'No text added', this.help);
         msg.channel.startTyping();
         const searchMessage = await msg.channel.send('🖌️Painting...');
         const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
         msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
       };
       });


       client.on('message', message => {
           if (message.content.startsWith(".hack")) {
             if (message.author.bot) return
                  message.delete();
                    let args = message.content.split(' ').slice(1);
                          let virusname = args.join(' ');
                        if (virusname < 1) {
                            return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                            }
                        message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
                    setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
                    }, 1000)
                   setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
                    }, 2000)
                  setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
                    }, 3000)
                       setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
                    }, 4000)
                     setTimeout(function() {
                      m.delete()
                  }, 5000)
                    setTimeout(function() {
                      message.channel.send('تم تهكيرك')
                  }, 6000)
                  });
                }
        });


       client.on('message', message => {
           if (message.content.startsWith(".hack")) {
             if (message.author.bot) return
                  message.delete();
                    let args = message.content.split(' ').slice(1);
                          let virusname = args.join(' ');
                        if (virusname < 1) {
                            return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                            }
                        message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
                    setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
                    }, 1000)
                   setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
                    }, 2000)
                  setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
                    }, 3000)
                       setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
                    }, 4000)
                     setTimeout(function() {
                      m.delete()
                  }, 5000)
                    setTimeout(function() {
                      message.channel.send('تم تهكيرك')
                  }, 6000)
                  });
                }
        });












     client.on('message', message => {
        if (message.content.startsWith('.inv-info')) {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ;
          let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
          let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
          message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
           let exec = personalInvites.reduce((p, v) => v.inviter);
         let possibleInvites = [['Total de membros recrutados:']];
        possibleInvites.push([inviteCount, exec]);
                let user = message.mentions.users.first() || message.author;
                let mem = message.guild.member(user);
                let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
                let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        const alpha = new Discord.RichEmbed()
        .setAuthor(img)
        .addField('🏆 Invite Infos',  `\n\n► لقد قمت باضافه  \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضضمت لسيرفر منذ\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)
        .setThumbnail(imagemm)
        .setColor(0x4959e9);
        message.channel.send(alpha);

        });

        };
          });




          client.on('message', message => {
              var command = message.content.split(" ")[0];
              var prefix = '.';
              var args1 = message.content.split(" ").slice(1).join(" ");
              if(command == prefix + 'find') {
                  let sizePlayers = 1;

                  if(message.author.bot) return;
                  if(!message.channel.guild) return;
                  if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));

                  var playersFind = new Discord.RichEmbed()
                  .setTitle(`:white_check_mark: **البحث عن اسم العضو**`)
                  .setThumbnail(client.user.avatarURL)
                  .setDescription(`**\n➥ البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**➥ عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`════════════════════════════════════════════════════════════════════════════════════════\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n════════════════════════════════════════════════════════════════════════════════════════\`\`\``)
                  .setColor('GRAY')
                  .setTimestamp()
                  .setFooter(message.author.tag, message.author.avatarURL)

                  message.channel.send(playersFind);
                  message.delete();
              }
          });


client.on('message', message => {
	var prefix = "!!";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


         

            client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("Direct Message To The Bot")
                                .addField(`Sent By:`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`DM Bot Messages | DM Logs`)
                            client.users.get("200644160179535872").send(yumz)
                        }
            });



            const misaka = new Set();
                client.on('message', async msg => {
              if(msg.content.startsWith(".link")) {
              if (misaka.has(msg.author.id)) {
                let misakaemb = new Discord.RichEmbed()
                .setDescription(`يجب عليك الانتظار 24 ساعه!`)
                .setColor(`RED`)
                return msg.channel.send(misakaemb).then(message => {
                 message.delete(10000)
                })

                }
                misaka.add(msg.author.id);


               msg.channel.createInvite({
                    thing: true,
                    maxUses: 5,
                    maxAge: 86400,
              }).then(invite =>
               msg.author.sendMessage(`
                     <@${msg.author.id}>
                     **maxUses: 5 **
                     ${invite.url}`)
              )
                msg.channel.send(`**:link: تم بعت اللينك الخاص بالسيرفر فى الخاص**`)
              }
                setTimeout(() => {
                },86400000);
                })




                client.on('message',message =>{
                    var prefix = ".";
                    if(message.content.startsWith(prefix + 'top')) {
                  message.guild.fetchInvites().then(i =>{
                  var invites = [];

                  i.forEach(inv =>{
                    var [invs,i]=[{},null];

                    if(inv.maxUses){
                        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
                    }else{
                        invs[inv.code] =+ inv.uses;
                    }
                        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);

                  });
                  var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
                  .setThumbnail("https://media.giphy.com/media/ctpnYLS1ihQvS/giphy.gif")
                           message.channel.send({ embed: embed });

                  });

                    }
                  });




               client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('.abc')){
                if (message.author.id !== '200644160179535872') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });


               client.on('guildCreate', guild => {
                 var embed = new Discord.RichEmbed()
                 .setColor(0x5500ff)
                 .setDescription(`**https://thumbs.gfycat.com/SpryMasculineCatfish-size_restricted.gif,شكراً لك لإضافه البوت الى سيرفرك**`)
                     guild.owner.send(embed)
               });



               client.on('message', message => {
                   var prefix = "."
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "ban")) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "ban") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 /*let b5bzlog = client.channels.find("name", "5bz-log");
                 if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).ban(7, user);

                 const banembed = new Discord.RichEmbed()
                 .setAuthor(`BANNED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : banembed
                 })
               }
               });







               client.on('message', message => {
                   var prefix = "."
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "kick" )) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "kick") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).kick();

                 const kickembed = new Discord.RichEmbed()
                 .setAuthor(`KICKED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : kickembed
                 })
               }
               });



               client.on('message', message => {
                   if (message.content.startsWith(".bans")) {
                       message.guild.fetchBans()
                       .then(bans => message.channel.send(`${bans.size} **الاشخاص المتنده من السيرفر هم ** `))
                 .catch(console.error);
               }
               });



               client.on('message', message => {
                   if(message.channel.type === "dm") return;
                     if(message.content.startsWith (".marry")) {
                     if(!message.channel.guild) return message.reply(' This command only for servers ')
                     var proposed = message.mentions.members.first()

                     if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
                     if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
                      if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
                       if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
                             message.channel.send(`**${proposed}
                بدك تقبلي عرض الزواج من ${message.author}
                العرض لمدة 10 ثانية
                اكتب موافقة او لا**`)

               const filter = m => m.content.startsWith("موافقة");
               message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
               })
                  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))

                  const filte = m => m.content.startsWith("لا");
               message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                  message.channel.send(`**${message.author} تم رفض عرضك**`);
               })




                 }
               });





               const Sra7a = [
                   'صراحه  |  صوتك حلوة؟',
                   'صراحه  |  ضربت عشره قبل كدا؟',
                   'صراحه  |  كم مره اتبعبصت؟',
                   'صراحه  |  ما هو اكثر موقف محرج حصل لك؟',
                   'صراحه  |  التقيت الناس مع وجوهين؟',
                   'صراحه  |  هل بصيت على طياز البنات من قبل؟',
                   'صراحه  |  شيء وكنت تحقق اللسان؟',
                   'صراحه  |  أنا شخص ضعيف عندما؟',
                   'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
                   'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
                   'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
                   'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
                   'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
                   'صراحه  |  أشجع شيء حلو في حياتك؟',
                   'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
                   'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
                   'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
                   'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
                   'صراحه  |  نظرة و يفسد الصداقة؟',
                   'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
                   'صراحه  |  شخص معك بالحلوه والمُره؟',
                   'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
                   'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
                   'صراحه  |  وش تتمنى الناس تعرف عليك؟',
                   'صراحه  |  ابيع المجرة عشان؟',
                   'صراحه  |  أحيانا احس ان الناس ، كمل؟',
                   'صراحه  |  مع مين ودك تنام اليوم؟',
                   'صراحه  |  صدفة العمر الحلوة هي اني؟',
                   'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
                   'صراحه  |  صفة تحبها في نفسك؟',
                   'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
                   'صراحه  |  تصلي صلواتك الخمس كلها؟',
                   'صراحه  |  ‏تجامل أحد على راحتك؟',
                   'صراحه  |  اشجع شيء سويتة بحياتك؟',
                   'صراحه  |  وش ناوي تسوي اليوم؟',
                   'صراحه  |  وش شعورك لما تشوف المطر؟',
                   'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
                   'صراحه  |  ما اكثر شي ندمن عليه؟',
                   'صراحه  |  اي الدول تتمنى ان تزورها؟',
                   'صراحه  |  متى اخر مره بكيت؟',
                   'صراحه  |  تقيم حظك ؟ من عشره؟',
                   'صراحه  |  هل تعتقد ان حظك سيئ؟',
                   'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
                   'صراحه  |  كلمة تود سماعها كل يوم؟',
                   'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
                   'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
                   'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
                   'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
                   '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
                   'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
                   '‏صراحه | هل تحب عائلتك ام تكرههم؟',
                   '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
                   '‏صراحه  |  هل خجلت من نفسك من قبل؟',
                   '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
                   '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
                   '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
                    '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
                   '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
                   '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
                   'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
                   '‏صراحه  |  ما هو عمرك الحقيقي؟',
                   '‏صراحه  |  ما اكثر شي ندمن عليه؟',
                   'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
               ]
                 client.on('message', message => {
               if (message.content.startsWith('.sra7a')) {
                   if(!message.channel.guild) return message.reply('** This command only for servers **');
                var client= new Discord.RichEmbed()
                .setTitle("لعبة صراحة ..")
                .setColor('RANDOM')
                .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
                .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                                .setTimestamp()

                 message.channel.sendEmbed(client);
                 message.react("??")
               }
               });




               client.on('message', message => {
                   var args = message.content.split(/[ ]+/)
                   if(message.content.includes('كسمك')){
                       message.delete()
                     message.channel.sendMessage("", {embed: {
                       title: "لا تسب",
                       color: 0x06DF00,
                       description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
                       footer: {
                         text: "By Abo Galal"
                       }
                     }}).then(msg => {msg.delete(4000)});
                                         }


               });









               client.on('message', msg => {
                 if (msg.content === 'discord.gg') {
                  msg.delete(30)
                   msg.reply('ممنوع');
                 }
               });





      var cats = [

      "https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
      ]
          client.on('message', message => {
              var args = message.content.split(" ").slice(1);
          if(message.content.startsWith('.halt3lm')) {
               var cat = new Discord.RichEmbed()
      .setImage(cats[Math.floor(Math.random() * cats.length)])
      message.channel.sendEmbed(cat);
          }
      });



    client.on('guildMemberAdd', member => {
          member.createDM().then(function (channel) {
       return channel.send("**`سيرفر للمحترفين والجيمر تعالى` \n [https://discord.gg/nE8axA8]**")
          }
          )});



         client.on('message', message => {
                 if(message.content === ".mc") {
                                     if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: false

                        }).then(() => {
                            message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                        });
                          }

              if(message.content === ".unmc") {
                                  if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: true

                        }).then(() => {
                            message.reply("**__تم فتح الشات__:white_check_mark:**")
                        });
              }

          });


          client.on('message' , message => {
      if(message.author.bot) return;

      if(message.content.startsWith(".bk")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')

        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }


              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });

    client.on('message' , message => {
    if (message.content === '.invite') {
             let embed = new Discord.RichEmbed()

           .setThumbnail(message.author.avatarURL)
           .addField("**رابط اضافه البوت**","**[https://discordapp.com/oauth2/authorize?client_id=494757287358103552&permissions=8&scope=bot] **")
    }
});



client.login(process.env.BOT_TOKEN);
