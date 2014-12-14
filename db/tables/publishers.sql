create table publishers(
  id serial primary key,
  name varchar(100) not null,
  address varchar(300) not null,
  phone char(12),
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  user_id integer not null references users(id)
);
