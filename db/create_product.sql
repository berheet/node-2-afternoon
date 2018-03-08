-- create table products (
--     product_id serial primary key NOT NULL,
--     name varchar(255) NOT NULL,
--     description varchar(255) NOT NULL,
--     price integer NOT NULL,
--     image_url text NOT NULL
-- )

insert into products (name, description, price, image_url) values ($1, $2, $3, $4);