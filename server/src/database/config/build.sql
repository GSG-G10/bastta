BEGIN;

DROP TABLE IF EXISTS users,
products,
favourite_products CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE name VARCHAR(250) NOT NULL,
    description TEXT NOT NULL,
    class VARCHAR(250) NOT NULL,
    type VARCHAR(250) NOT NULL,
    post_date DATE NOT NULL,
    city VARCHAR(200) NOT NULL,
    price INTEGER NOT NULL DEFAULT 0,
    currency VARCHAR(50),
    likes INTEGER NOT NULL DEFAULT 0,
    images TEXT NOT NULL,
    phone VARCHAR(25),
    approved BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE favourite_products(
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
);

COMMIT;
