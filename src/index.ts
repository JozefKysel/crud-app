import app from './app/server';
import { appConfig } from './config'

app.listen(appConfig.port, () => {
    console.log(`App is listening on port ${appConfig.port}`);
});