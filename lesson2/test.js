/*** Не обращайте внимания ***/
var _0x356f=["\x5B","\x2C\x20","\x66\x6F\x72\x45\x61\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x5D","\x23","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74"];function printArray(_0x1594x2,_0x1594x3){function _0x1594x4(_0x1594x2){var _0x1594x5=_0x356f[0];_0x1594x2[_0x356f[2]](function (_0x1594x6){if(_0x1594x6 instanceof Array){_0x1594x5+=_0x1594x4(_0x1594x6)+_0x356f[1];} else {_0x1594x5+=_0x1594x6+_0x356f[1];} ;} );return _0x1594x5[_0x356f[4]](0,_0x1594x5[_0x356f[3]]-2)+_0x356f[5];} ;var _0x1594x7=document[_0x356f[7]](_0x356f[6]+_0x1594x3);_0x1594x7[_0x356f[8]]=_0x1594x4(_0x1594x2);} ;


/***
 Сервисная функция. Полезно разобраться как она работает
 ***/
function generateArray(len, haveArrays) {
    var result = [];
    for (var i = 0; i < len; i++) {
        if (Math.random() < 0.5 && haveArrays) {
            result.push(generateArray(~~(Math.random() * 3 + 1), false));
        } else {
            result.push(~~(Math.random() * 10));
        }    }

    return result;
}


function linearize(arr) {
    /*
     Ваш код будет написан здесь
     Замените return arr; на реальный код
     =================
     Беру 1й эл-т массива
     Если его длина больше 1, то поочереди выбираю внутренние элементы и пушу в новый массив
     Иначе сразу пушу эл-т в новый массив
     */
        var newarr = []
        arr.forEach(function(element) {
            if (!element.length) {
                newarr.push(element);
            }
            while (element.length) {
                newarr.push(element.shift());
            }
                });

    return newarr;
}

var sourceArray = generateArray(~~(Math.random() * 4) + 3, true);
console.log(sourceArray);
var resultArray = linearize(sourceArray);
console.log(sourceArray);
console.log(resultArray);

