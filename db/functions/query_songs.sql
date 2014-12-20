select
  songs.title,
  songs.doc,
  percent,
  writers.name,
  publishers.name
FROM
  songs
INNER JOIN percentages ON percentages.song_id = songs.id
INNER JOIN writers ON writers.id = percentages.writer_id
--INNER JOIN percentages ON percentages.writer_id = writers.id
INNER JOIN publishers on publishers.id = percentages.publisher_id
ORDER BY songs.title desc;
