# MongoDB Aggregation Error: Handling Empty Sets in $avg

This repository demonstrates a common error in MongoDB aggregation pipelines: attempting to calculate the average using `$avg` on an empty set.  The code example shows how this can lead to an error, and the solution illustrates how to gracefully handle cases where there are no values to average.

## Problem
The provided code attempts to compute the average age of users over 25 grouped by city.  If a city has no users over 25, the `$avg` operator will throw an error because it cannot compute the average of an empty set.

## Solution
The solution introduces a conditional `$ifNull` operator to handle situations where no users meet the criteria for a particular city. If no users over 25 exist for a city, the average age will be set to 0.
