"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        question_name: "Что является химической формулой воды?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 1,
        img: "2",
      },
      {
        question_name: "Что является химической формулой воды?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 1,
        img: "2",
      },
      {
        question_name: "Что является химической формулой воды?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 1,
        img: "2",
      },
      {
        question_name: "Что является химической формулой воды?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 1,
        img: "2",
      },
      {
        question_name: "Что является химической формулой воды?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 1,
        img: "2",
      },
      {
        question_name:
          "Какое устройство стал символом контакта человека с интернетом в 2000-х годах?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 2,
        img: "2",
      },
      {
        question_name:
          "Какой технологической компании принадлежит логотип с яблоком?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 2,
        img: "2",
      },
      {
        question_name:
          "Как называется язык программирования, который был разработан для удобства написания кода в интернете",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 2,
        img: "2",
      },
      {
        question_name:
          'Кто изобрел первую вычислительную машину, известную как "аналоговый компьютер"?',
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 2,
        img: "2",
      },
      {
        question_name:
          "Какое устройство используется для хранения данных, способное переносить их на физические носители?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 2,
        img: "2",
      },
      {
        question_name: "Какой континент считается родиной пингвинов?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 3,
        img: "2",
      },
      {
        question_name: 'Какой элемент таблицы Менделеева имеет символ "O"?',
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 3,
        img: "2",
      },
      {
        question_name: 'Кто написал знаменитый роман "1984"?',
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 3,
        img: "2",
      },
      {
        question_name:
          "Какое время года знаменует собой цветение цветов и начало тепла?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 3,
        img: "2",
      },
      {
        question_name: "В каком году человек впервые ступил на Луну?",
        answer1: "H2O",
        answer2: "H2",
        answer3: "Co2",
        answer4: "qwe",
        topic_id: 3,
        img: "2",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
