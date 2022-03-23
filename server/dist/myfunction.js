function countnumber(orderno) {
    return erat(orderno);
}
function getMedian(Arr) {
    console.log("hello");
    console.log(median(Arr) + "A");
    return getMedian2(Arr);
}
var erat = function (n) {
    var result = [];
    var maxlimit = Math.sqrt(n);
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    for (var i = 2; i <= maxlimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    for (var i = 2; i < n; i++) {
        if (array[i]) {
            result.push(i);
        }
    }
    return result;
};
function median(arr) {
    arr.sort(function (a, b) { return a - b; });
    var i = arr.length / 2;
    return i % 1 == 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}
var getMedian2 = function (narray) {
    var toptal = narray.length;
    const mArr = [];
    var medIndex;
    console.log(toptal + 'a');
    if (toptal % 2 == 0) {
        medIndex = narray.length / 2;
        mArr.push(narray[(narray.length / 2) - 1]);
        mArr.push(narray[(narray.length / 2)]);
        console.log(medIndex);
        console.log(mArr);
    }
    else {
        medIndex = ~~(narray.length / 2);
        mArr.push(narray[medIndex]);
        console.log("selam");
        console.log(mArr[1]);
    }
    return mArr;
};
exports.getMedian = getMedian;
exports.countnumber = countnumber;
//# sourceMappingURL=myfunction.js.map