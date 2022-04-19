# Write your MySQL query statement below
SELECT Users.name as NAME, SUM(Transactions.amount) as BALANCE
FROM Users
LEFT JOIN Transactions
ON Users.account = Transactions.account
GROUP BY Transactions.account
HAVING BALANCE > 10000
