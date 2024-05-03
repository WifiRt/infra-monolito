import './configure-env';
import { createApp } from './create-app';

const app = createApp();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));