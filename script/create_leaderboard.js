var sqlite = require('sqlite3').verbose()
var db = new sqlite.Database('leaderboard')

db.run(`
  CREATE TABLE
  IF NOT EXISTS leaderboard (
    name text NOT NULL,
    score integer NOT NULL
  )
`);
