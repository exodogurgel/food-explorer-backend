const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const { title, description, category, price, amount, ingredients } = request.body;

    const dish_id = await knex("dishes").insert({
      title,
      description,
      category,
      price,
      amount
    });

    if (ingredients.length > 0) {
      const ingredientsInsert = ingredients.map(ingredient => {
        return {
          dish_id,
          name : ingredient
        }
      });

      await knex("ingredients").insert(ingredientsInsert);
    }

    return response.status(201).json();
  }

  async update(request, response) {
    const { title, description, category, price, amount, ingredients } = request.body;
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();

    dish.title = title ?? dish.title;
    dish.description = description ?? dish.description;
    dish.category = category ?? dish.category;
    dish.price = price ?? dish.price;
    dish.amount = amount ?? dish.amount;

    await knex("dishes").where({ id }).update(dish);
    await knex("dishes").where({ id }).update('updated_at', knex.fn.now());

    if (ingredients.length > 0) {
      const ingredientsInsert = ingredients.map(ingredient => {
        return {
          dish_id: dish.id,
          name : ingredient
        }
      })
      
      await knex("ingredients").where({ dish_id: id}).delete()
      await knex("ingredients").where({ dish_id: id}).insert(ingredientsInsert)
    }

    return response.status(200).json();
  }

  async index(request, response) {
    const { title, ingredients } = request.query;

    let dishes;

    if (ingredients) {
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());

      dishes = await knex("ingredients")
        .select([
          "dishes.id",
          "dishes.title",
        ])
        .whereLike("dishes.title", `%${title}%`)
        .whereIn("name", filterIngredients)
        .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
        .orderBy("dishes.title")
    } else {
      dishes = await knex("dishes")
        .whereLike("title", `%${title}%`)
        .orderBy("title")
    }

    const dishesIngredients = await knex("ingredients") 
    const dishesWithIngredients = dishes.map(dish => {
      const dishIngredient = dishesIngredients.filter(ingredient => ingredient.dish_id === dish.id);

      return {
        ...dish,
        ingredients: dishIngredient
      }
    })
    
    return response.status(200).json(dishesWithIngredients);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.status(200).json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients").where({ dish_id: id }).orderBy("name");

    return response.status(200).json({
      ...dish,
      ingredients
    });
  }
}

module.exports = DishesController;