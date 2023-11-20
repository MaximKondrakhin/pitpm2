const fs = require('fs');

let writeableStream = fs.createWriteStream('dzQuastions.txt');
writeableStream.write('1. Основы Node.js:\n');
writeableStream.write('   - Что такое Node.js и его архитектура.\n' 
+ '   - Установка Node.js и npm (Node Package Manager).\n' + '   - Основы работы с REPL (Read-Eval-Print Loop).\n');

writeableStream.write('2. Тестирование:\n');
writeableStream.write('   - Использование фреймворков для тестирования, таких как Mocha и Chai.\n' 
+ '   - Написание unit-тестов и интеграционных тестов.\n');

writeableStream.write('3. Система файлов и потоки (File System and Streams):\n');
writeableStream.write(' - Работа с файлами и директориями в Node.js.\n' 
+ '   - Использование потоков для обработки данных.\n');

writeableStream.write('4. Деплоймент и управление серверами:\n');
writeableStream.write('   - Деплоймент Node.js приложений на хостинг-платформах.\n' 
+ '   - Использование управления процессами, таким как PM2.\n');

writeableStream.write('5. Микросервисная архитектура:\n');
writeableStream.write('   - Введение в микросервисы и их реализация с использованием Node.js.\n' 
+ '   - Взаимодействие между микросервисами.\n');

writeableStream.write('6. Разработка API и RESTful сервисы:\n');
writeableStream.write('   - Проектирование и разработка API с использованием Express.js.\n' 
+ '   - Введение в RESTful архитектуру и реализация RESTful сервисов.\n');

writeableStream.write('7. Работа с событиями:\n');
writeableStream.write('   - Использование событий и EventEmitter в Node.js.\n');

writeableStream.write('8. Дополнительные инструменты и библиотеки:\n');
writeableStream.write('   - Изучение других библиотек и инструментов, таких как GraphQL, Redis и др.\n');

writeableStream.end('Задание выполнено');
let readableStream = fs.createReadStream(
    'dz.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});