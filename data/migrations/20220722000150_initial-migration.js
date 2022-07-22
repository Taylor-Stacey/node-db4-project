
exports.up = async function (knex) {
  await knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.varchar('recipe_name', 200).unique().notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id');
      tbl.varchar('ingredient_name', 20).unique().notNullable();
      tbl.varchar('ingredient_unit', 50)
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      // tbl.increments('step_number');
      tbl.varchar('step_instructions', 100).notNullable();

    })
    .createTable('step_ingredients', tbl => {
      tbl.increments('quantity_id');
      tbl.varchar('quantity', 10).unique();
    })
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
