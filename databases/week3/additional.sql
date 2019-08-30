use meal;
-- Get meals that has a price smaller than a specific price fx 90
-- select * from meal where proce<90;
-- Get meals that still has available reservations
-- select title from meal inner join reservation on meal.id=reservation.meal_id where meal.max_reservations < reservation.number_of_guests
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- select * from meal where title like'%pizza%'
-- Get meals that has been created between two dates
-- select * from meal where created_date between '2019-08-30' and '2019-09-30'
-- Get only specific number of meals fx return only 3 meals
-- select * from meal limit 3;
-- Get the meals that have good reviews
-- select * from meal inner join review on meal.id= review.meal_id where review.description='bra'
-- Get reservations for a specific meal sorted by created_date
-- select * from reservation inner join meal on reservation.meal_id = meal.id where meal.title = 'pizza' order by reservation.created_date;
-- Sort all meals by average number of stars in the reviews
select meal.title, avg(review.stars) from meal left join review on meal.id = review.meal_id group by meal.title order by avg(review.stars) desc;