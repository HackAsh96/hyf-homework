 ##ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
 
 ###find all user that have database inside title or description
 SELECT * 
 FROM user JOIN user_task ON user.id=user_task.user_id
 JOIN task ON user_task.task_id=task.id
 WHERE task.title LIKE '%database%' OR task.description LIKE '%database%';
 
 ###to find all tasks assigned to Donald Duck
SELECT *
FROM user JOIN user_task ON user.id=user_task.user_id
JOIN task ON user_task.task_id=task.id
WHERE user.name LIKE '%Donald%Duck%';

###to find the status name of the tasks assigned to Pavel
SELECT status.name,user.name,task.title
FROM user JOIN user_task ON user.id=user_task.user_id
JOIN task ON user_task.task_id=task.id
JOIN status ON task.status_id=status.id
WHERE user.name LIKE '%Pavel%';

###to add a new task
INSERT INTO task (title, description, created, updated, due_date, status_id) values ('Make React project', 'Title says it all.', NOW(), NOW(), null, 2);

###to change the title of a task
UPDATE task
SET title = 'Hello from Zendesk'
WHERE id=3;

###to change the due date of a task
UPDATE task 
SET due_date = NOW()+INTERVAL 3 DAY
WHERE id=37;

###to change the status of a task
UPDATE task
SET status_id = 1
WHERE id=4;

###to mark a task as completed
UPDATE task
SET status_id = 3
WHERE id=25;

###to delete a task
DELETE FROM task
WHERE id=1;

###to delete a user
DELETE FROM user
WHERE id=1;

 SELECT * 
 FROM user JOIN user_task ON user.id=user_task.user_id
 JOIN task ON user_task.task_id=task.id
 where task.id=35;
 