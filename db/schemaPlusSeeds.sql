DROP DATABASE IF EXISTS donuts_db
CREATE DATABASE donuts_db;
USE donuts_db;

CREATE TABLE donuts (
  id int(11) NOT NULL AUTO_INCREMENT,
  donut_name varchar(160) NOT NULL DEFAULT "",
  devoured boolean DEFAULT 0,
  date_added timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  date_devoured timestamp NULL DEFAULT "" ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

  INSERT INTO donuts
    (donut_name, devoured, date_added, date_devoured)
  VALUES
    ("Chocolate Donut with Rainbow Sprinkles", 0),
    ("Powdered Sugar Donut", 1),
    ("Boston Cream Donut", 0),
    ("Oreo Donut with Peanut Butter Drizzle", 0),
    ("Jelly Donut", 0);