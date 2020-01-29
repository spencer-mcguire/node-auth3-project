const db = require('../dbConfig');

module.exports = {
  find,
  findBy,
  findById,
  add
};

function find() {
  return db('users as u').select('u.id', 'u.username');
}

function findBy(filter) {
  return db('users as u')
    .select('u.id', 'u.username', 'u.password')
    .where(filter);
}

function findById(id) {
  return db('users')
    .select('u.id', 'u.username')
    .where({ id })
    .first();
}

function add(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
