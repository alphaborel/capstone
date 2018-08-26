exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t)=>{
  t.increments('id').primary();
  t.string('username').unique();
  t.string('password');
  t.string('buisnessName');
  t.string('email');
  t.timestamps(true, true);
  })
  .catch(e => console.error(`Error creating ${tableName} table`, e));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
