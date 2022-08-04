exports.up = knex => knex.schema.createTable("dishes", table => {
  table.increments("id");
  table.text("name");
  table.text("description");
  table.text("category");
  table.text("image");
  table.text("price");
  table.integer("amount");

  table.timestamps("created_at").default(knex.fn.now());
  table.timestamps("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("dishes");