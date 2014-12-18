create table percentages(
  id serial primary key,
  percent integer not null,
  user_id integer not null references users(id),
  publisher_id integer not null references publishers(id),
  writer_id integer not null references writers(id),
  song_id integer not null references songs(id)
);
