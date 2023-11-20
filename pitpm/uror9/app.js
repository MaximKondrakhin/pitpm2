const fs = require('fs');

fs.writeFileSync('hello.txt', 'HI MAX!\n');
fs.appendFile('hello.txt', 'Привет мир!', function (error) {
    if (error) throw error; // если возникла ошибка

    console.log(
        'Запись файла завершена. Содержимое файла:'
    );
    let data = fs.readFileSync('hello.txt', 'utf8');
    console.log(data); // выводим считанные данные
});