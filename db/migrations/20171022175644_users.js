
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table)=>{
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.boolean('is_admin');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
