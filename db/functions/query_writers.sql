create or replace function query_writers (uid integer, lmt integer, ofst integer)
returns table (writer_id integer, name varchar, phone char, pro varchar, updated_at timestamp, publisher_id integer) AS $$
declare
begin

  return query
  --select *
  --w.id, w.name, w.phone, w.pro, w.updated_at, w.publisher_id
  --from writers w
  --inner join publishers p on w.publisher_id = p.id
  --where w.user_id = uid
  --order by updated_at desc
  --offset ofst
  --limit lmt;

  select w.id, w.name, w.phone, w.pro, w.updated_at, w.publisher_id, p.name
  from writers w
  inner join publishers p on w.publisher_id = p.id
  where w.user_id = p.user_id
  order by updated_at desc
  offset ofst
  limit lmt;

end;
$$ language plpgsql;
