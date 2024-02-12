// the use of path module

const path = require("path")
const pathObj = path.parse(__filename)
console.log(pathObj.dir)

// the use of os module

const os = require("os")
const totalMemo = os.totalmem()
const freeMemo = os.freemem()
console.log(totalMemo, freeMemo)

// the use of fs module

const fs = require("fs")
const files = fs.readdirSync("./views")
console.log(files)

// the use of events module

const EmitEvent = require("events")
const emitter = new EmitEvent()
// register a listener
emitter.on("messageLogged", function() {
    console.log("Listener Called")
})
// raise an event
emitter.emit("messageLogged")