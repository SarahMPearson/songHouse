
create or replace function add_song(uid integer, title varchar, doc_string varchar, ids_and_percents integer[][])
returns integer AS $$
declare
  sid integer;
  --pubid integer;
  --wid integer;
  --pct integer;
  --song_data_string varchar;
  song_data varchar[];
  doc_date date;
begin

  -- insert the note
  SELECT to_date(doc_string, 'YYYY MM DD') INTO doc_date;
  
  insert into songs (title, doc, user_id) values (title, doc_date, uid) returning id into sid;
  
  foreach song_data SLICE 1 IN ARRAY ids_and_percents
  loop
    --select string_to_array(tags, '#') into song_data;
    insert into percentages (user_id, song_id, publisher_id, writer_id, percent)  values (uid, sid, song_data[1], song_data[2], song_data[3]);
  end loop;
  
  return sid;
end;
$$ language plpgsql;

SELECT add_song(2, 'Test Song 2', '2014 12 19', Array[ Array [10,2,100]]);