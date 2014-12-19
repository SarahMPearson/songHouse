
create or replace function add_song (uid integer, title varchar, doc_string varchar, ids_and_percents integer[][])
returns integer AS $$
declare
  sid integer;
  song_data varchar[];
  doc_date date;
begin

  -- insert the note
  doc_date := SELECT to_date(doc_string, 'YYYY MM DD') ;
  
  insert into songs (title, doc, user_id) values (title, doc_date, uid) returning id into sid;
  
  foreach song_data in array ids_and_percents
  loop
    insert into percentages (user_id, song_id, publisher_id, writer_id, percent)  values (uid, sid, song_data[1], song_data[2], song_data[3]);
  end loop;
  
  return sid;
end;
$$ language plpgsql;

 INTO doc;

SELECT add_song(2, 'Test Song 2', '2014 12 19', ARRAY [[10,2,100]]);