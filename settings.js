
global.nomerOwner ="6285811965686"
global.nomerOwner2 = "6285811965687"
global.ownerName = "I'm From Indonesia"
global.botName = "Anything For u" 
global.sessionName ="session"
global.setmenu ="gif"
global.docType = "docx"
global.Qoted = "ftoko"
global.Instagram ="https://www.instagram.com/officialdittaz/"
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = botName
global.publik = true
global.Console = true
global.autorespon = false
global.copyright = "© Anything For U" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Anything For u"
global.packName = "Mysticker"
global.authorName = "Mau nyolong Bilang Alepyu"
global.replyType = "mess"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = false
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 30
global.gcount = {
prem : 60,
user : 20
} 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






