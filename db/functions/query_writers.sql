create or replace function query_writers (uid integer, lmt integer, ofst integer)
returns table (writer_id integer, name varchar, phone char, pro varchar, updated_at timestamp) AS $$
declare
begin

  return query
  select w.id, w.name, w.phone, w.pro, w.updated_at
  from writers w
  where w.user_id = uid
  order by updated_at desc
  offset ofst
  limit lmt;

end;
$$ language plpgsql;
