create or replace function add_publisher (user_id integer, name varchar, address varchar, phone char)
returns integer AS $$
declare
  pid integer;

begin

  -- insert the publisher
  insert into publishers (name, address, phone, user_id) values (name, address, phone, user_id) returning id into pid;
  return pid;


end;
$$ language plpgsql;
