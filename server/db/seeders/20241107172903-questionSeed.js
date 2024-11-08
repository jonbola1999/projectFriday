"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        question_name: "В каком году человек впервые ступил на Луну?",
        answer1: "1965",
        answer2: "1969",
        answer3: "1971",
        answer4: "1975",
        topic_id: 1,
        img: "1969",
      },
      {
        question_name: "Какое из перечисленных произведений не является драмой?",
        answer1: "Гамлет",
        answer2: "Три сестры",
        answer3: "Мастер и Маргарита",
        answer4: " Вишневый сад",
        topic_id: 1,
        img: "Мастер и Маргарита",
      },
      {
        question_name: "Какой океан является самым большим на Земле?",
        answer1: "Атлантический",
        answer2: "Индийский",
        answer3: "Северный Ледовитый",
        answer4: "Тихий",
        topic_id: 1,
        img: "Тихий",
      },
      {
        question_name: "Кто был первым президентом Соединенных Штатов Америки?",
        answer1: " Авраам Линкольн",
        answer2: "Дональд Трамп",
        answer3: "Джордж Вашингтон",
        answer4: "Теодор Рузвельт",
        topic_id: 1,
        img: "Джордж Вашингтон",
      },
      {
        question_name: "Кто из следующих ученых известен своими разработками в области радиации?",
        answer1: "Альберт Эйнштейн",
        answer2: "Мария Кюри",
        answer3: "Исаак Ньютон",
        answer4: "Чарльз Дарвин",
        topic_id: 1,
        img: "Мария Кюри",
      },
      {
        question_name:
          "Какой из следующих методов используется для деструктуризации объектов в JavaScript?",
        answer1: "{ a, b } = obj",
        answer2: "let { a, b } = obj",
        answer3: "a, b = obj",
        answer4: "a = obj.a, b = obj.b",
        topic_id: 2,
        img: "let { a, b } = obj",
      },
      {
        question_name:
          "Какое значение будет у переменной `x` после выполнения следующего кода: let x = '5' + 3 ?",
        answer1: "8",
        answer2: "'53'",
        answer3: "'8'",
        answer4: "null",
        topic_id: 2,
        img: "'53'",
      },
      {
        question_name: "Что возвращает метод pop()?",
        answer1: "Новый массив",
        answer2: "Новую длину массива",
        answer3: "Удаленное значение",
        answer4: "Добавленное значение",
        topic_id: 2,
        img: "Удаленное значение",
      },
      {
        question_name:
          "Какой метод используется для добавления элемента в конец массива в JavaScript?",
        answer1: "append()",
        answer2: "push()",
        answer3: "add()",
        answer4: "insert()",
        topic_id: 2,
        img: "push()",
      },
      {
        question_name: "Что такое 'рекурсия' в программировании?",
        answer1: "Процесс итеративного повторения",
        answer2: "Процесс, когда функция вызывает саму себя",
        answer3: "Процесс обработки данных в массиве  ",
        answer4: " Процесс выполнения кода в многопоточном режиме  ",
        topic_id: 2,
        img: "Процесс, когда функция вызывает саму себя",
      },
      {
        question_name: "Кто в понедельник отвечает за новости?",
        answer1: "Маша",
        answer2: "Никита",
        answer3: "Юля",
        answer4: "Расул",
        topic_id: 3,
        img: "Маша",
      },
      {
        question_name: 'Продолжите фразу "Знаешь чувство будто..."',
        answer1: "Свернул не туда",
        answer2: "Поднял базу",
        answer3: "Поднял сервер",
        answer4: "Поднял клиент (Забуксовал)",
        topic_id: 3,
        img: "Поднял клиент (Забуксовал)",
      },
      {
        question_name: "Магия",
        answer1: "Макс",
        answer2: "Андрей",
        answer3: "Юра",
        answer4: "Милана",
        topic_id: 3,
        img: "Андрей",
      },
      {
        question_name:
          "Что кажется невозможным, до тех пор пока ты это не сделал?",
        answer1: "Победить Ростика в тенис",
        answer2: "Понять Реакт",
        answer3: "Привыкнуть хлопать",
        answer4: "Понять рекурсию",
        topic_id: 3,
        img: "Победить Ростика в тенис",
      },
      {
        question_name: "'Вот они, слева направо' о ком речь?",
        answer1: "Фаза 1",
        answer2: "Фаза 2",
        answer3: "Помощники",
        answer4: "Преподаватели",
        topic_id: 3,
        img: "Помощники",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
