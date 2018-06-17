import express from 'express';
import path from 'path';
const app = express();
const publicPath = path.resolve(__dirname, '..', '..', 'public');
app.use(express.static(publicPath));
app.listen(80, () => {   
    console.log(`Cinebrain-1.0 listening on port 80 and looking in folder ${publicPath}`);
});