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



















client.login(process.env.BOT_TOKEN);



