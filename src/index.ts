import App from './app';
import routerRoot from './routers';

const app = new App();

app.addRouter(routerRoot);

app.startServer();
