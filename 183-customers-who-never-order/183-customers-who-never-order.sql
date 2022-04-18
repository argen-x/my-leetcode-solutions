# Write your MySQL query statement below
SELECT name as Customers
FROM Customers
LEFT JOIN Orders
ON Customers.Id = Orders.customerId
WHERE Orders.customerId IS NULL


