DROP TABLE IF EXISTS user;

CREATE TABLE user (
                          id BIGINT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255),
                          email VARCHAR(255)
);
