

 function countnumber(orderno: any){
     
     return erat(orderno);
    }

    function getMedian(Arr:number[]){
      return getMedian2(Arr);
     }
    
    var erat = function(n:number) {
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
            if(array[i]) {
                result.push(i);
            }
        }
        return result;
    };

    function median(arr:any){
        arr.sort(function(a:any, b:any){ return a - b; });
        var i = arr.length / 2;
        return i % 1 == 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
      }

    var getMedian2 = function(narray:any[]){
        var toptal = narray.length;
        const mArr= [];
        var medIndex;
        if (toptal%2==0){
             medIndex = narray.length/2;
            mArr.push(narray[(narray.length/2)-1])
            mArr.push(narray[(narray.length/2)])
            
        }else{
             medIndex = ~~(narray.length/2);
             mArr.push(narray[medIndex]);
            
             
        } 
        
        return mArr;
    }



    exports.getMedian=getMedian;
exports.countnumber=countnumber;

