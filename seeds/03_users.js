
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 100, name: 'Diego', email: 'diego@itesm.mx', password: 'pass', role: '1'}
      ]);
    });
};
