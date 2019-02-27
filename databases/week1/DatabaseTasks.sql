#show tables;
SELECT *
FROM task;
######################## exercise 1 #########################
SELECT COUNT(id) 
FROM task;
######################## exercise 2 #########################
SELECT COUNT(id)
FROM task
WHERE task.due_date IS NULL;
######################## exercise 3 #########################
SELECT *
FROM task JOIN status ON  task.status_id=status.id
WHERE status.name='DONE';
######################## exercise 4 #########################
SELECT *
FROM task JOIN status ON  task.status_id=status.id
WHERE status.name NOT LIKE '%DONE%';
######################## exercise 5 #########################
SELECT *
FROM task
ORDER BY task.created DESC;
######################## exercise 6 #########################
SELECT MAX(task.created)
FROM task;
######################## exercise 7 #########################
SELECT task.title,task.due_date
FROM task
WHERE task.title LIKE '%database%' OR task.description LIKE '%database%';
######################## exercise 8 #########################
SELECT task.title,status.name
FROM task JOIN status ON task.status_id=status.id;
######################## exercise 9 #########################
SELECT status.name,COUNT(task.status_id)
FROM task JOIN status ON status.id=task.status_id
GROUP BY task.status_id;
######################## exercise 10 ########################
SELECT status.name, COUNT(task.status_id)
FROM task JOIN status ON task.status_id = status.id
GROUP BY task.status_id
ORDER BY COUNT(task.status_id) DESC;
