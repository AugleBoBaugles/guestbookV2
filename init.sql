-- CREATE DATABASE guestbook;
USE guestbook;

-- DROP TABLE entries;

CREATE TABLE entries (
	id INT AUTO_INCREMENT,
	fname VARCHAR (50),
    lname VARCHAR (50),
    job VARCHAR (50),
    company VARCHAR (50),
    linkedIn VARCHAR (100),
    email VARCHAR (100),
    howWeMet VARCHAR (20),
    howWeMetOther text,
    message text,
    mailingList VARCHAR (20),
    format VARCHAR (20),
    timestamp DATETIME DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

INSERT INTO entries (fname, lname, job, company, linkedIn, email, howWeMet, howWeMetOther, message, mailingList, format)
VALUES ('Augy', 'Markham', 'student', 'GRC', 'https://www.linkedin.com/in/augy-markham-438119244/', 'augmarkham@gmail.com', 'jobFair', '', 'It was nice to meet you!', 'checked', 'html'); 

SELECT * FROM entries;
