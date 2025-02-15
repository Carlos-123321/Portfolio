DROP TABLE IF EXISTS user;

CREATE TABLE user (
                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255),
                          email VARCHAR(255)
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
                      tech_Stack JSON
);
