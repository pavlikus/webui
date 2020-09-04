# Сборка UI с помощью webpack, ajax
## Цель:
### В этой самостоятельной работе мы тренируем умения:

1. Собирать UI с помощью webpack
2. Использовать ajax

### Данное домашнее задание это подготовка к использованию react.js и сборке проекта backend + frontend. Оно рассчитано на материал следующих занятий:

* ES6, NodeJS окружение, babel + webpack, транспайлинг
* CSS препроцессоры". "fetch || axios || $.ajax для REST запросов, модульность

В первой части дз для начала потренируемся использовать node.js, webpack и babel.
Это можно сделать в отдельном тестовом проекте.

## Задача:

1. Установить node js
2. После установки приложить скриншот с версией node.js
3. Для установки библиотек используем npm
4. Установить babel
5. Написать любой код на ES6 и с помощью babel посмотреть как он преобразуется в старый стиль
6. Приложить скриншот
7. Создать проект (nmp init)
8. Установить в проект пакет axios
9. Приложить скриншот package.json
10. Клонировать демонстрационный webpack проект https://github.com/wbkd/webpack-starter
11. Установить зависимости
12. Запустить проект
13. Приложить скриншот запущенного проекта

Во второй части дз собираем вместе backend и frontend

1. Настроить сборку webpack-ом в проекте django. Это можно сделать по данной инструкции: https://gist.github.com/DanteOnline/501018d64e2ddbb2324121df9a94b7e5
2. Создать в django тестовую view и тестовый url. Просто пустую страницу с шаблоном
3. К шаблону подключить скрипт собранный webpack-ом <script src="{% static 'frontend/index.js' %}"></script>
Проверить что всё работает и скрипт выполняется при отгрузке страницы
4. Установить axios
5. В скрипте с помощью fetch получить данные по курсам
6. В этом же скрипте с помощью axios получить данные по студентам (или любые другие для которых у вас есть api)
7. Вывести полученные данные в консоль (этого будет достаточно) или на страницу использую минимальную разметку

В этом дз этого будет достаточно, т.к. всё остальное будет удобнее делать с помощью react

Для тех у кого есть желание ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ:

1. Сделать страницы логина и регистрации (но теперь мы взаимодействуем с сервером с помощью fetch или axios или ajax)
Дополнительно:
2. Так же можно попробовать переделать другие страницы, например страницу со списком курсов для тренировки (хотя потом это удобнее будет сделать уже на react)
3. Если в api есть авторизация по токену, можно в личном кабинете сделать на ajax возможность обновлять и создавать токен

## Критерии оценки:
### Задание считается выполненным когда:
Из первой части
* установлено node js (скриншот), 2. запущен проект на webpack (скриншот) - 6 баллов
Из 2-ой части
* работает получение данных через fetch. Без ошибок - 5 баллов

### Дополнительно:
Из первой части
* Есть скриншот работы babel - 2 балла
* Есть скриншот package.json с axios в зависимостях - 2 балла
Из второй части
* Работает получение данных через axios - 5 баллов

Любое решенное доп. задание +10 баллов

Итого максимум 6 + 2 + 2 + 5 + 5 = 20 баллов
Рекомендуем сдать до: 06.09.2020

TODO:
- [ ] Есть скриншот работы babel
- [ ] Есть скриншот package.json с axios в зависимостях
