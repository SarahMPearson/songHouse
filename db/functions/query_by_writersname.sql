SELECT
  songs.title,
  songs.doc,
  percent,
  writers.name,
  publishers.name
FROM
songs
INNER JOIN percentages ON percentages.song_id = songs.id
INNER JOIN writers ON writers.id = percentages.writer_id
INNER JOIN publishers on publishers.id = percentages.publisher_id
WHERE percentages.writer_id = 2; -- request.payload.writer_id?
