-- If you are done with the above tasks, you can continue with these advanced tasks:
--   Create an index on the name column of the student table.
--   Add a new column to the class table named status which can only have the following 
--  											values: not-started, ongoing, finished (hint: enumerations).
use school;
-- alter table class add column status enum('notstarted', 'ongoing', 'finished');
select * from class