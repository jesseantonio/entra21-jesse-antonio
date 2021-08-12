const db = require("./db");

(async () => {
    try {
        const { rows } = await db.query("SELECT NOW()");
        console.log(rows);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();