const http = require("http");
const data = require("./data.js");

/**
 * Обработчик запросов на сервер.
 *
 * @param request Запрос клиента.
 * @param response Ответ сервера.
 */
function listener({ method, url }, response) {
  // Вывести в консоль сервера информацию о текущем запросе.
  console.log(`${Date()} | ${method} ${url}`);

  // Создаём регулярное выражение для проверки адреса страницы поста.
  const postUrlRegExp = /^\/post\/(?<postId>\d+)$/;

  if (url === "/" || url === "/index.html" ) {
    // Реализуйте обработку запроса главной страницы.
  }
  else if (postUrlRegExp.test(url)) {
    // Получаем идентификатор поста из строки адреса.
    const postId = parseInt(postUrlRegExp.exec(url).groups.postId);

    // Получаем пост по его идентификатору.
    const post = data.posts.byId(postId);

    // Реализуйте обработку запроса страницы поста.
  }
  else {
    // Обработка неизвестных адресов.
    response.statusCode = 404;
    response.end();
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
  .listen(PORT,
    () => console.log(`Сервер начал прослушивание на порту ${PORT}`));