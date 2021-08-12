const db  = require("./db");

(async () => {
    try {
    const res = await db.query("SELECT NOW()");
    console.log(res.rows[0].now);
    } catch (error) {
    console.log(error.message);
    } finally {
    db.end();
    }
})();