const { hash } = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("users").insert([
    {
      name: "admin",
      email: "admin@email.com",
      password: await hash("0908", 8),
      isAdmin: true,
    },
  ]);
};