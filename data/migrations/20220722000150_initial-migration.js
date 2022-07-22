
exports.up = async function (knex) {
  await knex.schema
    .createTable('recipes', tbl => {
      // tbl.varchar('recipe_name', 80).unique().notNullable();
      tbl.increments('recipe_id');
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      // tbl.varchar('ingredient_name', 20).unique().notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      // tbl.increments('step_number');
      // tbl.varchar('step_instructions', 100).notNullable();

    })
    .createTable('step_ingredients', tbl => {
      tbl.increments('quantity_id');
      // tbl.varchar('quantity', 10).unique();
    })
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
