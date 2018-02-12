DROP DATABASE IF EXISTS instagran_db;
CREATE DATABASE instagran_db;

\c instagran_db;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    fullname VARCHAR,
    password_digest VARCHAR,
    profile_pic VARCHAR
);

CREATE TABLE followInfo (
    owner_id int,
    follower_id int
);

CREATE TABLE posts (
    ID SERIAL PRIMARY KEY,
    owner_id VARCHAR,
    imageUrl VARCHAR,
    likes json
);

INSERT INTO users (username, fullname, password_digest, profile_pic)
VALUES ('mk_johnson17', 'Tyler Johnson', '1234hey', 'https://www.famousbirthdays.com/faces/creator-tyler-image.jpg'),
       ('mm_tin23', 'Mike Martinez', 'abcd', 'https://resources.tidal.com/images/2d76cf9f/e8ee/4a9f/91eb/464e39716d0d/320x320.jpg');

INSERT INTO followInfo (owner_id, follower_id)
VALUES (1,2);

INSERT INTO posts(owner_id, imageUrl, likes)
VALUES (1,'https://www.famousbirthdays.com/faces/hoechlin-tyler-image.jpg', '["mm_tin23"]'),
       (2, 'https://img.buzzfeed.com/buzzfeed-static/static/2015-02/18/10/enhanced/webdr09/enhanced-buzz-32241-1424274656-13.jpg?downsize=715:*&output-format=auto&output-quality=auto', '["mk_johnson17"]')

