CREATE DATABASE eatit;

# MAIN TABLES:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  facebook_id INT,
  profile_pic_url VARCHAR(500)
);

CREATE TABLE recommendations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  location VARCHAR(200),
  img_url VARCHAR(500),
  zomato_id INT,
  user_id INT
);

CREATE TABLE friends (
  id SERIAL PRIMARY KEY,
  user_id INT,
  friend_id INT
);
