function randomHex(length) {
    let chars = "0123456789abcdef";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function randomDevice(){
    const devices = [
        {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; LE2110 Build/TKQ1.230329.002)",
            "model": "LE2110",
            "version": "13"
        },
        {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 12; SM-G991B Build/SP1A.210812.016)",
            "model": "SM-G991B",
            "version": "12"
        },
        {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 11; Pixel 5 Build/RQ3A.210805.001.A1)",
            "model": "Pixel 5",
            "version": "11"
        },
        {
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; MI 9 Build/QKQ1.190825.002)",
            "model": "MI 9",
            "version": "10"
        }
    ]

    return devices[Math.floor(Math.random() * devices.length)];
}

module.exports = {
    randomHex,
    randomDevice
}