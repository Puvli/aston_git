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
  