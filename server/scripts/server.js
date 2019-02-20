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
  console.log(`${Date()} | ${request.method} | ${request.url}`);
  
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

let server = http.createServer(listener);
server.listen(80);