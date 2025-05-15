DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS user;


CREATE TABLE user (
                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255),
                          email VARCHAR(255),
                          password VARCHAR(255),
                          role VARCHAR(15)
);

DROP TABLE IF EXISTS project;

CREATE TABLE project (
                      id BIGINT AUTO_INCREMENT PRIMARY KEY,
                      name VARCHAR(255),
                      description TEXT NOT NULL,
                      cover_Image VARCHAR(255),
                      reviews INT(1),
                      type VARCHAR(255),
                      github_Link VARCHAR(255),
                      start_Date DATE,
                      end_Date DATE,
                      images JSON,
                      tech_Stack JSON,
                      features JSON,
                      knowledge JSON,
                      summary JSON
);


CREATE TABLE comment (
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      user_id BIGINT,
                      comment TEXT,
                      approved BOOLEAN,
                      FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS about;

CREATE TABLE about (
                               id INT PRIMARY KEY,
                               about_Me_Text text,
                               title text

);

DROP TABLE IF EXISTS skills;

CREATE TABLE skills (
                         id INT PRIMARY KEY,
                         title text,
                         soft_Skills JSON,
                         frontend_technologies JSON,
                         backend_technologies JSON

);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
                        id INT PRIMARY KEY,
                        title text

);

DROP TABLE IF EXISTS intro;

CREATE TABLE intro (
                         id INT PRIMARY KEY,
                         title text,
                         second_Title text,
                         third_Title text,
                         image text

);

DROP TABLE IF EXISTS journey;

CREATE TABLE journey (
                       id INT PRIMARY KEY,
                       title text,
                       academic JSON

);

DROP TABLE IF EXISTS work;

CREATE TABLE work (
                         id INT PRIMARY KEY,
                         title text,
                         paragraph text

);

DROP TABLE IF EXISTS hobby;

CREATE TABLE hobby (
                        id INT PRIMARY KEY,
                        title text,
                        below text,
                        hobbies JSON

);


