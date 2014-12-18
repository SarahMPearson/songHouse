create table songs(
  id serial primary key,
  title varchar(255) not null,
  doc date not null,
  user_id integer not null references users(id)
);
