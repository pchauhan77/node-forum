CREATE DATABASE myDatabase;

CREATE TABLE todo(
todo_id BIGSERIAL NOT NULL PRIMARY KEY,
description VARCHAR (300)
);

CREATE TABLE forum(
forum_id BIGSERIAL NOT NULL PRIMARY KEY,
q_name VARCHAR (300),
q_desc VARCHAR (300),
points NUMERIC(100),
title VARCHAR (300),
mymessage VARCHAR (300),
win1 VARCHAR (300),
win2 VARCHAR (300),
first_button VARCHAR (300),
second_button VARCHAR (300)
);