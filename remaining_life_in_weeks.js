function lifeTime(age) {
  var remainingLifeTime = 90 - age;
  var months = remainingLifeTime * 12;
  var weeks = remainingLifeTime * 52;
  var days = remainingLifeTime * 365;

  console.log(
    "You have " +
      months +
      " months , " +
      weeks +
      "weeks and " +
      days +
      " days remaining in your Life"
  );
}
lifeTime(10);

