CREATE DATABASE myDatabase;

CREATE TABLE todo(
todo_id BIGSERIAL NOT NULL PRIMARY KEY,
description VARCHAR (300)
);

CREATE TABLE internal_info(
internal_id BIGSERIAL NOT NULL PRIMARY KEY,
quest_name VARCHAR (300),
quest_desc VARCHAR (300),
points NUMERIC(100)
);

CREATE TABLE general_story(
general_id BIGSERIAL NOT NULL PRIMARY KEY,
general_title VARCHAR (300),
general_message VARCHAR (300),
general_win1 VARCHAR (300),
general_win2 VARCHAR (300)
);

CREATE TABLE empire_story(
empire_id BIGSERIAL NOT NULL PRIMARY KEY,
empire_title VARCHAR (300),
empire_message VARCHAR (300),
empire_win1 VARCHAR (300),
empire_win2 VARCHAR (300)
);

CREATE TABLE federation_story(
federation_id BIGSERIAL NOT NULL PRIMARY KEY,
federation_title VARCHAR (300),
federation_message VARCHAR (300),
federation_win1 VARCHAR (300),
federation_win2 VARCHAR (300)
);

CREATE TABLE union_story(
union_id BIGSERIAL NOT NULL PRIMARY KEY,
union_title VARCHAR (300),
union_message VARCHAR (300),
union_win1 VARCHAR (300),
union_win2 VARCHAR (300)
);

CREATE TABLE conclusion_story(
conclusion_id BIGSERIAL NOT NULL PRIMARY KEY,
conclusion_title VARCHAR (300),
conclusion_message VARCHAR (300),
conclusion_win1 VARCHAR (300),
conclusion_win2 VARCHAR (300)
);

CREATE TABLE empire_button(
empire_button_id BIGSERIAL NOT NULL PRIMARY KEY,
empire_first_button VARCHAR (300),
empire_second_button VARCHAR (300)
);

CREATE TABLE federation_button(
federation_button_id BIGSERIAL NOT NULL PRIMARY KEY,
federation_first_button VARCHAR (300),
federation_second_button VARCHAR (300)
);

CREATE TABLE union_button(
union_button_id BIGSERIAL NOT NULL PRIMARY KEY,
union_first_button VARCHAR (300),
union_second_button VARCHAR (300)
);