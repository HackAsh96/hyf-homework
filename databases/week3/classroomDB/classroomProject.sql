##create an index on 'name' column in 'student' table
CREATE INDEX name_idx
ON student (name);
##Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER TABLE class
ADD COLUMN status ENUM('not-started','ongoing','finished');
