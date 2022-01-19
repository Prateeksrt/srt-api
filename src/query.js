const { Client } = require('pg')

const insert_to_user_table = `INSERT INTO user_table(user_name, email, google_data) values($1, $2, $3)`
const select_by_email = `SELECT * FROM user_table WHERE email=$1`

function db_config() {
    return process.env.NODE_ENV !== 'production'
        ? {connectionString: process.env.DATABASE_URL, ssl: false}
        : {connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false}};
}

const db_client = () => new Client(db_config())

const add_user = async (user_name, email, google_data) => {
    const client = db_client()
    await client.connect()
    const res = await client.query(insert_to_user_table, [user_name, email, google_data])
    await client.end()
}

const get_user_by_email = async (email) => {
    const client = db_client()
    await client.connect()
    const res = await client.query(select_by_email, [email])
    await client.end()
    return res.rows[0];
}

module.exports = {add_user, get_user_by_email}
