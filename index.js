import { appRender } from "./appRender.js";

appRender(false)


//ПЛАН РАЗРАБОТКИ ФОРМЫ АВТОРИЗАЦИИ
//1. Разработаь форму регистрации ЕСТЬ
//2. Прописать стили ЕСТЬ
//3. вместо формы вставить кнопки перехода на регистрацию
//4. Для того, чтобы формы менялись при нажатии надо просто создать контейтейнер, в который будет поочередно рендерится та или иная разметка, далее создать функции, которые будуть внутри друг друга запускать отрисовку разной разметки.
//5. Получить токен из нового API авторизации ЕСТЬ
//6. Проработать процесс регистрации в приложении с комментариями