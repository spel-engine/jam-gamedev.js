import { serveFile } from 'jsr:@std/http@1.0.8/file-server';

const rootPath = `${Deno.cwd()}/dist`;

export function server() {
  const handler = async (req: Request) => {
    const path = (new URL(req.url)).pathname;

    if (path === '/') {
      return serveFile(req, rootPath + '/index.html');
    } else {
      return serveFile(req, rootPath + path);
    }
  };

  Deno.serve({ port: 8787, hostname: '0.0.0.0' }, handler);
}
