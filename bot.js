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











client.login(process.env.BOT_TOKEN);
