// typeof() выводит тип данных (строка/число/массив и т.д)

const numbers = [1, -45, 26, 33, 1058, 7.5, -7.333];
let sum = 0;
let average = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

average = sum / numbers.length;
console.log(average, ' — average —');






