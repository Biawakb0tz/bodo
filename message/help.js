const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {weton,week,calender,dateIslamic} = require('../lib/functions')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/msg.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)



let yes = "*「 _Error_ 」* ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(JSON.parse(fs.readFileSync('./database/listerror.json'))).forEach((i) => {
        if (JSON.parse(fs.readFileSync('./database/listerror.json'))[i].cmd === q) {
            status = true
        }
    })
    return status
}



exports.allmenu =  (getLimit, senderNumber, limitCount, user, getBalance, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var balance =  getBalance(senderNumber, user).toLocaleString() 
} catch{ 
var balance = getBalance(senderNumber, user)
}
return `📚 *MENU* MD - BETA
 *Hari ${week}, Tanggal ${calender}* 
 ${dateIslamic}

 *Haii Kak* ${pushname}

 ▸ Mode : ${publik ? "Public" : "Self"}
 ▸ Status : ${isPremium ? 'Premium':'Free'}
 ▸ Time : ${timeWib} WIB 
 ▸ Time : ${timeWit} WIT 
 ▸ Time : ${timeWita} WITA
 ▸ Status : ${isPremium ? 'Premium':'Free'}
 ▸ Total User : ${JSON.parse(fs.readFileSync('./database/user.json')).length.toLocaleString()}
 ▸ Total Error : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}
 ▸ User Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
 ▸ Total Feature : ${totalFitur()}
╰────────◉

           *❲ COMMAND ❳*
					          ▾`}

exports.fitur = (prefix) => {
return`
❐ *❲ ADMIN MENU ❳*
 ▸ ${prefix}antilinkgc    
 ▸ ${prefix}gc
 ▸ ${prefix}tagall
 ▸ ${prefix}hidetag
 ▸ ${prefix}remove   _kick_
 ▸ ${prefix}add 
 ▸ ${prefix}opentime 
 ▸ ${prefix}closetime 
 ▸ ${prefix}kickme 
 ▸ ${prefix}banchat
 ▸ ${prefix}unbanchat 
 ▸ ${prefix}ban 
 ▸ ${prefix}unban
 ▸ ${prefix}getpp
 ▸ ${prefix}listonline
╰────────◉ 
`+'_*Powered By Nodejs*_'
}
  


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
