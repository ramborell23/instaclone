DROP DATABASE IF EXISTS instagran_db;
CREATE DATABASE instagran_db;

\c instagran_db;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    fullname VARCHAR,
    password_digest VARCHAR,
    profile_pic VARCHAR,
    number_of_posts int,
    number_of_followers int,
    number_of_following int
);

CREATE TABLE followInfo (
    owner_id int,
    follower_id int
);

CREATE TABLE posts (
    ID SERIAL PRIMARY KEY,
    owner_id int,
    imageUrl VARCHAR,
    likes json
);

INSERT INTO users (username, fullname, password_digest, profile_pic, number_of_posts,number_of_followers,number_of_following)
VALUES ('mk_johnson17', 'Tyler Johnson', '1234hey', 'https://www.famousbirthdays.com/faces/creator-tyler-image.jpg', 1, 2, 1),
       ('mm_tin23', 'Mike Martinez', 'abcd', 'https://resources.tidal.com/images/2d76cf9f/e8ee/4a9f/91eb/464e39716d0d/320x320.jpg', 1, 1, 0),
       ('nkabrown', 'Nathen Brown', '2bits', 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/qrfrMs0JNAnqocUwIwnqdulEIeF.jpg', 3, 0, 0);

INSERT INTO followInfo (owner_id, follower_id)
VALUES (1,2),
       (1,3);

INSERT INTO posts(owner_id, imageUrl, likes)
VALUES (1,'https://www.famousbirthdays.com/faces/hoechlin-tyler-image.jpg', '["mm_tin23"]'),
       (2, 'https://img.buzzfeed.com/buzzfeed-static/static/2015-02/18/10/enhanced/webdr09/enhanced-buzz-32241-1424274656-13.jpg?downsize=715:*&output-format=auto&output-quality=auto', '["mk_johnson17"]'),
       (3, 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg','["mk_johnson17"]'),
       (3, 'http://img1.10bestmedia.com/Images/Photos/303170/p-14529665131-fce9cfbaad-k_54_990x660.jpg', '["mk_johnson17"]');

