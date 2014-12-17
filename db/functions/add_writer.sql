create or replace function add_writer (user_id integer, name varchar, phone char, pro varchar, publisher_id integer)
returns integer AS $$
declare
  wid integer;

begin

  -- insert the writer
  insert into writers (name, phone, pro, user_id, publisher_id) values (name, phone, pro, user_id, publisher_id) returning id into wid;
  return wid;


end;
$$ language plpgsql;
