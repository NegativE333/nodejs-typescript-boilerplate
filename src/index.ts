import express from 'express';

const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.get('/', (req, res) => {
    res.json({ message : "Node js server is running using typescript."});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));