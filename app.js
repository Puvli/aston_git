//1 глубокое копирование
function deepCopy(obj) { // рекурсивная функция
    if (obj === null || typeof obj !== "object") {
      return obj; // Возвращаем примитивы и null без изменений
    }
  
    if (Array.isArray(obj)) {
      return obj.map(deepCopy); // Для массивов создаем новый массив и копируем элементы рекурсивно
    }
  
    const copy = {}; // Новый объект
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]); // Рекурсивное копирование
      }
    }
  
    return copy;
  }

  //2
  function selectFromInterval(arr, a, b) {
    if (!Array.isArray(arr)) {
        throw new Error("first parameter must be an array!");
    }

    if (!arr.every(item => typeof item === "number")) {
        throw new Error("There are not only numbers in the array!");
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("incorrect input parameters!");
    }

    const [min, max] = a < b ? [a, b] : [b, a];

    return arr.filter(num => num >= min && num <= max).sort((x, y) => x - y);
}

const arr = [
  {name: 'Bob', age: '25'},
  {name: 'Ann', age: '30'},
  {name: 'Tom', age: '35'},
];

//3 Функция fn
const fn = (key) => (item) => {
  console.log(item[key]);
}

//4 разворот строки
function reverseStr(str) {
  return str.split('').reverse().join('');
}
  