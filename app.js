function myPrompt() {
    let number = prompt("Введите число");
    
    if (!Number.isInteger(Number(number))) {
        alert("Некорректный ввод!");
        return;
    }

    let base = prompt("Введите систему счисления для числа");
    
    if (!Number.isInteger(Number(base)) || base < 2 || base > 36) {
        alert("Некорректный ввод!");
        return;
    }

    let convertedNumber = Number(number).toString(Number(base));
    
    alert(`Ответ: число ${number} в ${base}-ой системе счисления = ${convertedNumber}`);
}

myPrompt();
