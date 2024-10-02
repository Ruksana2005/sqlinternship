CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    author VARCHAR(100),
    status VARCHAR(50)
);

CREATE TABLE issued_books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(100),
    book_id INT,
    issue_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(id)
);
