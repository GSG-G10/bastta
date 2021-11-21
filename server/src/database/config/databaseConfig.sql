-- db
CREATE DATABASE bastta;
CREATE USER organizer WITH superuser password '123456';
ALTER DATABASE bastta OWNER TO organizer;
-- test db
CREATE DATABASE basttatest;
CREATE USER organizer2 WITH superuser password '123456';
ALTER DATABASE basttatest OWNER TO organizer2;
