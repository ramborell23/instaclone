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
    follow_id SERIAL PRIMARY KEY,
    owner_id int references users(id),
    follower_id int references users(id)
);

CREATE TABLE posts (
    ID SERIAL PRIMARY KEY,
    owner_id int,
    imageUrl VARCHAR
);

CREATE TABLE likesTable (
    post_id int references posts(id),
    liked_by VARCHAR,
    UNIQUE(post_id,liked_by)
);

INSERT INTO users (username, fullname, password_digest, profile_pic)
VALUES ('nkabrown', 'Nathan Brown', '$2a$10$qJtLhwnSR8TxL90.KiVc0e3..9W5ZpowbLZsw1cTJwFkOPN2zQurm', 'https://ca.slack-edge.com/T721T1ADB-U82GCBLJZ-c386045ec74f-48'),
       ('alejo4373', 'Alejandro Franco', '$2a$10$p7NoV5PCSOeZ3vr6yNfYBOiSJFAVA6U7821MO8bs1fGPppHm6YAOi', 'https://avatars1.githubusercontent.com/u/18352555?s=460&v=4'),
       ('olu_joya', 'Joyce Ajagbe', '$2a$10$YlpJQtFeGM4bhabR07kHguu.xkcxZgZhyKQIdntFJjf2YfYJvjmke', 'https://scontent-iad3-1.cdninstagram.com/vp/5127c1551c1c1446eb491570f792dae7/5B0D75AD/t51.2885-19/s150x150/15624894_1434539023285351_2626038060990595072_a.jpg')
       ;

INSERT INTO followInfo (owner_id, follower_id)
VALUES (1,2),
       (1,3),
       (2,3)
       ;

INSERT INTO posts (owner_id, imageUrl)
VALUES (1,'https://www.famousbirthdays.com/faces/hoechlin-tyler-image.jpg'),
       (2, 'https://img.buzzfeed.com/buzzfeed-static/static/2015-02/18/10/enhanced/webdr09/enhanced-buzz-32241-1424274656-13.jpg?downsize=715:*&output-format=auto&output-quality=auto'),
       (3, 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg'),
       (3, 'http://img1.10bestmedia.com/Images/Photos/303170/p-14529665131-fce9cfbaad-k_54_990x660.jpg');

/*
  username  | password
  alejo4373 | alejo 
  olu_joya  | joyce 
  nkabrown  | nathan 

*/