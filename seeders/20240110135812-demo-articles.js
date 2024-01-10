'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>',
        published: '2020-01-08 15:02:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Morning vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        published: '2020-04-14 15:02:41',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        published: '2060-05-28 15:02:55',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};