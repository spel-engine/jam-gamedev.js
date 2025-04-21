import { Webview } from 'jsr:@webview/webview';

const worker = new Worker(
  new URL('./resources_server.ts', import.meta.url).href,
  {
    type: 'module',
  },
);

worker.postMessage('run');

const html = "<html><head><script type='module' defer>globalThis.BASE_PATH = 'http://localhost:8787';</script></head><body><script type='module'  src='http:localhost:8787/app.js' defer> </script></body></html>";

const webview = new Webview(true);

webview.navigate("data:text/html," + encodeURIComponent(html));

webview.run();