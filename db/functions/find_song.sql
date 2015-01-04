create or replace function find_song (uid integer, sid integer)
returns table (title varchar, "songID" integer, doc date[], percent integer[], "writerName" varchar[], "pubName" varchar[], pro varchar[]) AS $$
declare
begin

  RETURN query
    SELECT songs.title, songs.id as "songID", array_agg(distinct songs.doc) as "doc", array_agg(percentages.percent) as "percents", array_agg(writers.name) as "writerName", array_agg(publishers.name) as "pubName", array_agg(writers.pro) as "PRO"
    FROM songs
    INNER JOIN percentages ON percentages.song_id = songs.id
    INNER JOIN writers ON writers.id = percentages.writer_id
    INNER JOIN publishers ON publishers.id = percentages.publisher_id
    INNER JOIN users ON users.id = percentages.user_id
    where songs.id = sid and users.id = uid
    --where songs.id = 36 and users.id = 3
    group by songs.id;

end;
$$ language plpgsql;
