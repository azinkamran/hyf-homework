use meal;
-- insert into reservation values(null,11,'2019-9-30',8);
-- insert into reservation values(null,15,'2019-9-30',9);
-- insert into reservation values(null,10,'2019-9-30',10);
-- Get all reservations
-- select * from reservation
-- Add a new reservation
-- insert into reservation values(null,10,'2019-9-30',7)
-- Get a reservation with any id, fx 1
-- select * from reservation where id=2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- update reservation set number_of_guests=15 where id=2;
-- Delete a reservation with any id, fx 1
delete from reservation where id=1;