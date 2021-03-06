
exports.up = function(knex, Promise) {
  return knex.schema.createTable('loans', (t)=>{
    t.increments('id').primary();
    t.string('lenderName');
    t.string('recipientsName');
    t.string('loanNumber');
    t.string('totalAmount');
    t.string('startDate');
    t.string('payoffDate');
    t.boolean('isUserLoan');
    t.text('notes');
    t.integer('userId')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('cascade');
    t.timestamps(true, true);
  })
  .catch(e => console.error(`Error creating ${tableName} table`, e));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('loans');
};
