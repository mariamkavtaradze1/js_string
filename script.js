function WordCount(str) {
    var punctuation = /[\.,?!]/g
    var newStr = str.replace(punctuation, "")
    const arr = newStr.split(" ")
    var map1 = new Map()
    for (var i = 0; i < arr.length; i++) {
        if (map1.has(arr[i])) {
            var k = map1.get(arr[i])
            map1.set(arr[i], ++k)
        } else {
            map1.set(arr[i], 1);
        }
    }
    for (var [key, value] of map1) {
        console.log(key + ': ' + value);
    }
}

WordCount("windows is bad, is not it?. Linux is it good.")




