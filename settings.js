const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'
//owmner v card
global.ytname = "YT: @elitepro-empire" //ur YouTube channel name
global.socialm = "GitHub: Elite-MD" //ur github or insta name
global.location = "Port Harcourt, Nigeria" //ur location

//new
global.botname = 'ELITE-PRO-V2' //ur bot name
global.ownernumber = '2348109263390' //ur owner number
global.ownername = 'ELITEPRO' //ur owner name

global.themeemoji = '👨‍💻'
global.wm = "EliteProEmpire"
global.botscript = 'https://github.com/Elite-MD/Elite-Pro-V2' //script link
global.elitepropp = 'https://files.catbox.moe/syvykg.jpg' //ElitePro thumbnail 

global.packname = "Sticker By"
global.author = "ELITE-PRO-V2\n\n+2348109263390"
global.creator = "2348109263390@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348109263390"] // Premium User
global.hituet = 0
//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































function _0x2889(_0xa5f436,_0x5c4bf4){var _0x301ca0=_0x301c();return _0x2889=function(_0x2889ab,_0x1bb777){_0x2889ab=_0x2889ab-0x119;var _0x4f1c2f=_0x301ca0[_0x2889ab];return _0x4f1c2f;},_0x2889(_0xa5f436,_0x5c4bf4);}function _0x301c(){var _0x1668c9=['wagc','readFileSync','https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g','148MFVBwn','websitex','2165916yIEwKZ','813rTfhRQ','1287369MnYkUG','./EliteProMedia/theme/elitepro.jpg','8131566aHoBsJ','thumb','10zmkSdO','1670UmZBtl','121YZItqg','997204OWwgwg','https://youtu.be/BBpWz_ZmcUE?si=39L8fTnsN-sDxfV_','755776BivLxb','107875MwhyiB','7mmpoSu'];_0x301c=function(){return _0x1668c9;};return _0x301c();}var _0x380c9f=_0x2889;(function(_0x1c3712,_0x184320){var _0x1b5ffe=_0x2889,_0x1433c6=_0x1c3712();while(!![]){try{var _0x3586b7=-parseInt(_0x1b5ffe(0x119))/0x1+-parseInt(_0x1b5ffe(0x12a))/0x2*(-parseInt(_0x1b5ffe(0x124))/0x3)+parseInt(_0x1b5ffe(0x121))/0x4*(parseInt(_0x1b5ffe(0x11c))/0x5)+-parseInt(_0x1b5ffe(0x127))/0x6*(parseInt(_0x1b5ffe(0x11d))/0x7)+-parseInt(_0x1b5ffe(0x11b))/0x8+-parseInt(_0x1b5ffe(0x125))/0x9*(-parseInt(_0x1b5ffe(0x129))/0xa)+parseInt(_0x1b5ffe(0x12b))/0xb*(parseInt(_0x1b5ffe(0x123))/0xc);if(_0x3586b7===_0x184320)break;else _0x1433c6['push'](_0x1433c6['shift']());}catch(_0x204a0a){_0x1433c6['push'](_0x1433c6['shift']());}}}(_0x301c,0xac627),global[_0x380c9f(0x122)]=_0x380c9f(0x11a),global[_0x380c9f(0x11e)]=_0x380c9f(0x120),global[_0x380c9f(0x128)]=fs[_0x380c9f(0x11f)](_0x380c9f(0x126)));

//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
