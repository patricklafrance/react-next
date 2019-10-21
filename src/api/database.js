const faker = require("faker");
const { ROLES } = require("../shared/roles");

function createUser(id, firstName, lastName, username, role, password) {
    return {
        id,
        firstName,
        lastName,
        username,
        role,
        password
    };
}

function createProduct(id, name, price, quantity) {
    return {
        id,
        name,
        price,
        quantity
    };
}

const users = [];
const products = [];

users.push(
    createUser(1, "Patrick", "Lafrance", "pat", ROLES.admin, "test123!")
);

users.push(createUser("Bine", "Binette", "bine", ROLES.user, "test123!"));

for (let i = 0; i < 20; i += 1) {
    products.push(
        createProduct(
            i,
            faker.commerce.productName(),
            faker.commerce.price(5, 100),
            faker.random.number(40)
        )
    );
}

module.exports = {
    users,
    products
};
