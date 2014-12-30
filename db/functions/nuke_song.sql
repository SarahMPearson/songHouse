create or replace function nuke_song (uid integer, sid integer)
returns integer AS $$
declare
begin

  DELETE FROM percentages WHERE song_id = sid;
  DELETE FROM songs WHERE id = sid;

return sid;

end;
$$ language plpgsql;
