  create or replace function query_songs (uid integer)
  returns table (title varchar, "songID" integer[], doc date[], percent integer[], "writerName" varchar[], "pubName" varchar[], pro varchar[], "writerID" integer[] ) AS $$
  declare
  begin

  RETURN query
    SELECT songs.title, songs.id as "songID", array_agg(distinct songs.doc) as "doc", array_agg(percentages.percent) as "percents", array_agg(writers.name) as "writerName", array_agg(publishers.name) as "pubName", array_agg(writers.pro) as "PRO", array_agg(writers.id) as "writerID"
    FROM songs
    INNER JOIN percentages ON percentages.song_id = songs.id
    INNER JOIN writers ON writers.id = percentages.writer_id
    INNER JOIN publishers ON publishers.id = percentages.publisher_id
    WHERE percentages.user_id = uid
    GROUP BY songs.title, songs.id
    ORDER By songs.title;


  end;
  $$ language plpgsql;
