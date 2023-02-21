-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  category_name VARCHAR(30) NOT NULL,
);

CREATE TABLE Product (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL, -- need to validate that the value is a decimal.
    stock INT NOT NULL , -- need to set default value of 10 and validate the value is numeric.
    category_id INT 
    FOREIGN KEY (category_id)
    REFERENCES Category(id),
);

CREATE TABLE Tag (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tag_name VARCHAR(30),

);

CREATE TABLE ProductTag (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT
    FOREIGN KEY (product_id)
    REFERENCES Product(id),
    tag_id INT
    FOREIGN KEY (tag_id)
    REFERENCES Tag(id),
);