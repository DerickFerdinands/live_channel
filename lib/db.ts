const mysql = require('mysql2/promise'); // Import promise-based version

const pool = mysql.createPool({
    host: 'testrmdb.ca8kj24hg2kr.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: '1qaz2wsx',
    port:3306,
    database: 'live',
    connectionLimit: 1, // Adjust as needed
});

// @ts-ignore
export async function executeQuery(sql, ...values) {
    const connection = await pool.getConnection();
    try {
        // Check if connection is already established
        if (connection.state === 'connected') {
            // Connection is ready, proceed with query
            const [result] = await connection.query(sql, values);
            return result;
        } else {
            // Connection is not ready, attempt to connect
            await connection.connect();
            const [result] = await connection.query(sql, values);
            return result;
        }
    } catch (error) {
        console.error('Query error:', error);
        throw error; // Re-throw to handle errors gracefully
    } finally {
        if (connection) {
            connection.release(); // Release connection back to the pool
        }
    }
}
