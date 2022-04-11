import App from './app/App';
import routerRoot from './routers';

const app = new App();

app.addRouter(routerRoot);

app.startServer();
