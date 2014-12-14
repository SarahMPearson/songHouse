create or replace function query_publisher (uid integer, lmt integer, ofst integer)
returns table (publisher_id integer, name varchar, address varchar, phone varchar, updated_at timestamp) AS $$
declare
begin

  return query
  select p.id, p.name, p.address, p.phone, p.updated_at
  from publishers p
  where p.user_id = uid
  order by updated_at desc
  offset ofst
  limit lmt;

end;
$$ language plpgsql;
