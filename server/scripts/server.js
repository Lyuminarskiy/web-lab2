const http = require("http");
const data = require("./data.js");

/**
 * Обработчик запросов на сервер.
 *
 * @param request Запрос клиента.
 * @param response Ответ сервера.
 */
function listener(request, response) {
  // Вывести в консоль сервера информацию о текущем запросе.
  console.log(`${Date()} | ${request.method} ${request.url}`);

  // Поместите сюда обработку запроса клиента.
  if (request.url === "...") {
    /* ... */
  }
  else if (request.url === "...") {
    /* ... */
  }
  else {
    response.statusCode = 404;
    response.end("...");
  }
}

// Порт по умолчанию.
const DEFAULT_PORT = 80;

// Номер параметра командной строки со значением порта.
const PORT_PARAMETER_NUMBER = 2;

// Получаем номер порта через параметр командной строки.
// Если параметр не был указан, то выбираем порт по умолчанию.
const PORT = parseInt(process.argv[PORT_PARAMETER_NUMBER]) || DEFAULT_PORT;

http
  .createServer(listener)
  .listen(30000,
    () => console.log(`Сервер начал прослушивание на порту ${PORT}`));