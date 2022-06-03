//Все задания оформить в виде функций: 
//1 Вывести знак * столько раз сколько задаст пользователь

/*
function printSymbols(simbolStars){
    let i=0; str="";
    for(i; i<=simbolStars; i++){
        str+='*'
    } if (simbolStars<0){
        simbolStars=1;
    }
    console.log(str);
}

let symbol;
printSymbols = prompt('Введите начальное значение');
console.log(symbols);
*/





//2 Вывод чисел от limit1 до limit2, которые кратны num


function arrayTask3 (limit1, limit2, num){
    for (limit1; limit1<=limit2; limit1++){
        if(limit1%num){
        }
    }return arrayTask3;
} 

let limit1=1;
let limit=50;
let num=2;
console.log(limit1);



//3 Сумма четных элементов массива


let sumNumber1 = [10, 20, 5, 4, 9, -5, 2, 3, 13, 90, 16]; // - объявляю в массиве элементы
function arrayTask3 (array){ // - объявили массив
    let result = 0; // - создали счетчик
    for(i=0; i<array.length; i++){ // тут пропускаем все элементы в массиве
        if(array[i]%2==0){ // если длина массива делиться на 2 и равна нулю тоесть чеьная
            result += array[i]; // то тогда мы складываем их между собой
        }
    }
    console.log (result); // и выводим результат
} 
console.log (arrayTask3(sumNumber1));  // это для чего? почему именно arrayTask3 и sumNumber
 


//4 Обнулите все элементы массива меньше 10

let sumNumber2 = [10, 20, 5, 4, 9, -5, 2, 3, 13, 90, 16];
function arrayTask3 (array, num=10){
    for(i=0; i<array.length; i++){
        if(array[i]<num){
           array[i]=0; 
        }
    }
    console.log (array); // почему именно array - хотя это массив а num это просто порог числа так ведь?
}
console.log (arrayTask3(sumNumber2));



//(дополнительные ):
//5 Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет строку -000004








//6 соедините два массива в один большой