CREATE DATABASE pernlogin;


CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    mail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255)
);

CREATE TABLE formations(
    formation_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    content VARCHAR NOT NULL,
    FOREIGN KEY(name) REFERENCES users(name)
);



INSERT INTO users(user_id, name, password, role)
VALUES
 (1, 'Armand', 'psw1', 'admin'),
 (2, 'Hilaire', 'psw2', 'student');