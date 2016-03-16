console.log('hi')

d3.csv("https://github.com/ArtsyDM/Analytics/blob/master/WINS.csv", function(d) {
  return {
    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    artist: d.Artist
  };
}, function(error, rows) {
  console.log(rows);
});
