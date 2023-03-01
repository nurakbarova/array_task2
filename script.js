let a = [19, 63, 7, 80, 90];
let plural = 0
let counter = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 1) {

        plural += a[i];
        counter++;


    }



}
console.log(plural);