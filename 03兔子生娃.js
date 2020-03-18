/*
有一对兔子， 从出生后第3个月起每个月都生一对兔子， 
小兔子长到第三个月后每个月又生一对兔子， 
假如兔子都不死， 
问 第三十个月的兔子总数为多少？
*/



for (i = 1; i <= 30; i++) {
    var num = 2
    if (i == 1 || i == 2) {

        console.info("第" + i + "月" + num + "只兔子")
    } else {

        var a = 2;
        var b = 2;
        var num

        for (var i = 3; i <= 30; i++) {
            num = a + b;
            a = b;
            b = num;

            console.info("第" + i + "月" + num + "只兔子")
        }


    }
}