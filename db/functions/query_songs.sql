create or replace function query_songs (uid integer)
returns table (title varchar, doc date, "writerName" varchar, "pubName" varchar, pro varchar, percent integer) AS $$
declare
begin

  --return query
  --select w.id, w.name, w.phone, w.pro, w.updated_at, w.publisher_id, p.name as "pubName"
  --from writers w
  --inner join publishers p on w.publisher_id = p.id
  --where w.user_id = p.user_id
  --order by updated_at desc
  --offset ofst
  --limit lmt;

  --end;
  --$$ language plpgsql;

return query
select
  songs.title,
  songs.doc,
  writers.name as "writerName",
  publishers.name as "pubName",
  writers.pro,
  percentages.percent
FROM
  songs
INNER JOIN percentages ON percentages.song_id = songs.id
INNER JOIN writers ON writers.id = percentages.writer_id
--INNER JOIN percentages ON percentages.writer_id = writers.id
INNER JOIN publishers on publishers.id = percentages.publisher_id
--WHERE percentages.song_id = 25 -- request.payload.??
GROUP BY percentages.song_id
ORDER BY songs.title desc;

end;
$$ language plpgsql;

create or replace function query_songs (uid integer)
returns table (title varchar, doc date, "writerName" varchar, "pubName" varchar, pro varchar, percent integer) AS $$
declare
begin

SELECT DISTINCT ON (songs.id)
  songs.title,
  songs.doc,
  percent,
  writers.name,
  publishers.name
FROM
  percentages
INNER JOIN songs ON percentages.song_id = songs.id
INNER JOIN writers ON writers.id = percentages.writer_id
INNER JOIN publishers on publishers.id = percentages.publisher_id
WHERE percentages.user_id = songs.user_id
ORDER BY songs.title desc;

end;
$$ language plpgsql;
