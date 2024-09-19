"use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

// --------------------------------------------------------------------Функція, яка отримує кількість фільмів які ви уже подивилися
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви уже подивилися?', '');
    }
}

start();
// --------------------------------------------------------------------Функція, яка отримує кількість фільмів які ви уже подивилися

// --------------------------------------------------------------------Головний об*єкт програми, де зберігаються данні.
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// --------------------------------------------------------------------Головний об*єкт програми, де зберігаються данні.

// --------------------------------------------------------------------Функція, яка перевіряє приватність бази данних
function showMyDB() {
    if (personalMovieDB.privat !== false) {
        console.log('Це приватна база данних!!!');
    } else {
        console.log(personalMovieDB);
    }
}

showMyDB();
// --------------------------------------------------------------------Функція, яка перевіряє приватність бази данних

// --------------------------------------------------------------------Функція, яка дізнається про улюблені жанри
function writeYourGenres() {
    for (let i = 1; i < 4; i++ ) {
        personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}?`);
    }
}

writeYourGenres();
// --------------------------------------------------------------------Функція, яка дізнається про улюблені жанри

// --------------------------------------------------------------------Функція, яка дізнається про останні переглянуті фільми і їх оцінку
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один із останніх фільмів?', ''),
              b = prompt('На скільки ви його оцінюєте?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();
// --------------------------------------------------------------------Функція, яка дізнається про останні переглянуті фільми і їх оцінку

// --------------------------------------------------------------------Функція, яка дає оцінку глядачу
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто доволі мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви - класний глядач");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви - кіноман");
    } else {
        console.log("Виникла помилка :(");
    }
}

detectPersonalLevel();
// --------------------------------------------------------------------Функція, яка дає оцінку глядачу

console.log(personalMovieDB);