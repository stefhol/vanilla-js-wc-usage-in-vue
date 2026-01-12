// server.js
import express from 'express';
import cors from 'cors';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

app.get('/script.js', async (_req, res) => {
    try {
        const filePath = join(process.cwd(), 'script.js');
        const data = await readFile(filePath, 'utf-8');
        res.type('application/javascript');
        res.send(data);
    } catch (err) {
        res.status(502).send(`/* proxy error: ${err.message} */`);
    }
});
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
