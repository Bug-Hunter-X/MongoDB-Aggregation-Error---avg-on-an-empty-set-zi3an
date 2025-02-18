```javascript
db.users.aggregate([
  {
    $match: {
      age: { $gt: 25 }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: { $avg: "$age" }
    }
  },
  {
    $project: {
      _id: 1,
      averageAge: { $ifNull: ["$averageAge", 0] }
    }
  }
]);
```