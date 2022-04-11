# Write your MySQL query statement below
# Write your MySQL query statement below
SELECT Users.name, SUM(CASE WHEN Rides.distance > 0 THEN Rides.distance ELSE 0 END ) as travelled_distance
FROM Users
LEFT JOIN Rides ON Rides.user_id = Users.id
GROUP BY Users.name
ORDER BY travelled_distance DESC, Users.name ASC

