//1.расширение функции
function memoize(callback) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify([...args].sort()); // Сортируем аргументы, чтобы порядок не влиял на ключ
    console.log(key);
    console.log("cache before ", cache);

    if (cache[key] !== undefined) {
      console.log("Get from cache");
      return cache[key];
    }

    console.log("First calculation");
    const result = callback(...args);
    cache[key] = result;
    console.log("cache after ", cache);

    return result;
  };
}

//2. каррированная функция
function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b); //рекурсивно вызываем add(a + b), накапливая сумму
    }
    return a;
  };
}

//3. контекст
function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const boundLogger = logger.bind(obj);
boundLogger();

console.log("call");
logger.call(obj);

console.log("apply");
logger.apply(obj);

//4. Полифил
function myBind(fn, context, ...boundArgs) {
  return function (...args) {
    return fn.apply(context, [...boundArgs, ...args]);
  };
}

//3 Функция fn
const fn = (key) => (item) => {
  console.log(item[key]);
}

//4 разворот строки
function reverseStr(str) {
  return str.split('').reverse().join('');
}
  
