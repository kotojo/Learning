exports.home = function (request, reply) {
  const recipes = [{
    id: 1,
    name: 'Silicate soup',
    cuisine: 'Martain',
    stars: 100,
    serves: 1,
    prep_time: '2 hours',
    cooking_time: '12 minutes'
  }, {
    id: 2,
    name: 'Methane trifle',
    cuisine: 'Neptunian',
    stars: 200,
    serves: 1,
    prep_time: '1 hour',
    cooking_time: '24 minutes'
  }]

  reply.views('index', {
    recipes: recipes
  })
}
