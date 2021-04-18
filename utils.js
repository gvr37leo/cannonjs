var lastUpdate = Date.now();
function loop(callback){
    var now = Date.now()
    callback((now - lastUpdate) / 1000)
    lastUpdate = now
    requestAnimationFrame(() => {
        loop(callback)
    })
}