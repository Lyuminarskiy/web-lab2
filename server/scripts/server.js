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
  if(request.url === "...") {
    /* ... */
  }
  else if(request.url === "...") {
    /* ... */
  }
  else {
    response.statusCode = 404;
    response.end("...");
  }
}

// Получаем номер порта через параметр командной строки.
// Выбираем 80 порт, если параметр не был указан.
const PORT = parseInt(process.argv[2]) || 80;

const server = http
  .createServer(listener)
  .listen(PORT, () => console.log(`Сервер начал прослушивание на порту ${PORT}`));