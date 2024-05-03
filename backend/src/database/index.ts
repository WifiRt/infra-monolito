import { Pool, PoolClient } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export class DatabaseProvider {
    async query(query: string, args: any[]) {
        return pool.query(query, args);
    }

    async transaction(fn: <T>(client: PoolClient) => Promise<T>) {
        const client = await pool.connect();

        try {
            await client.query('BEGIN');

            await fn(client);

            await client.query('COMMIT');
        } catch (e) {
            await client.query('ROLLBACK');
            throw e;
        } finally {
            client.release();
        }
    }
}