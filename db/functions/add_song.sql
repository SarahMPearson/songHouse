create or replace function add_song (user_id integer, title varchar, doc date)
returns integer AS $$
declare

  sid integer;
  
begin

  -- insert the note
  insert into songs (title, doc, user_id) values (title, doc, user_id) returning id into sid;
  return sid;
  -- create temp table
  --create temp table tagger on commit drop as select nid, t.id as tid, t.name as tname from tags t where t.name = any(names);

      -- looping over all the tags
      --foreach tagname in array names
      --loop
      --tid := (select t.tid from tagger t where t.tname = tagname);
      --raise notice 'tid: %', tid;


          -- take the temp table and insert it into the join table
          --insert into notes_tags select t.nid, t.tid from tagger t;
            -- return the note id
            --return nid;

end;
$$ language plpgsql;
