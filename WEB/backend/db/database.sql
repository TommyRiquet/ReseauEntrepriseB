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



INSERT INTO users(user_id, name, mail, password, role)
VALUES
 (1, 'Armand','armand@gmail.com' ,'psw1', 'waiting'),
 (2, 'Hilaire','hilaire@gmail.com' , 'psw2', 'student');

 INSERT INTO formations(formation_id, name, title, content)
VALUES
 (1, 'Armand', 'Math', 'ceci est un cours de math'),
 (2, 'Hilaire', 'Francais', 'ceci est un cours de francais');
