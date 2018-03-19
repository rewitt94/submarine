var sqlite = require('sqlite3').verbose()
var db = new sqlite.Database('leaderboard')

db.run(`
  DELETE FROM leaderboard
  WHERE length(name) > 15
`);
