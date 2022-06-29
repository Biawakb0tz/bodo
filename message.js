

module.exports = async (senderNumber, prefix,command) => {

if(senderNumber.startsWith("62")){
global.mess = {
wait: '_Wait sedang prosses :) !_',
search: 'Searching...',
scrap: '_Wait sedang prosses :) !_',
success: '_Berhasil :) !_',
limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
claimOn: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam }.`,
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "_Link error , coba lagi :) !_"
},

block:{
Bowner: `Maaf kak command 「 *${command}* 」 telah di block oleh owner`,
Bsystem: `Command 「 *${command}* 」telah di block oleh system karena terjadi error`
},

 only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: '_Fitur ini dapat digunakan di dalam Group :) !_',
ownerB: '_Fitur khusus owner Bot :) !_',
admin: '_Fitur dapat digunakan oleh admin Group :) !_',
Badmin: '_Fitur dapat digunakan setelah Bot menjadi Admin :) !_'
 }
 }

} else {
	
//BAHASA ENGLISH
global.mess = {
wait: '_Please wait a second :) !_',
search: 'Searching...',
scrap: 'Scrapping...',
success: 'Success!',
limit: `[❕] your limit has run out, please type ${prefix}limit for check your limit`,
eror: 'There somethings wrong\nPlease try again later or contact to the developer',
claimOn: `You have made a claim before, Please claim again at hours }.`,
wrongFormat: 'Format is wrong',

error: {
stick: 'That is not sticker :v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "_Error link , coba lagi :) !_"
},

block:{
Bowner: `Sorry, the command「 *${command}* 」has been blocked by the owner`,
Bsystem: `Sorry, the command「 *${command}* 」has been blocked by the system due to an error`
},

only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: '_This features can be used in the group :) !_',
ownerB: '_This feature can be used only for bot owner :) !_',
admin: '_This feature can be used only for group admin :) !_',
Badmin: '_This feature can be used after the bot becomes admin :) !_'
 }
 }
}   

  
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