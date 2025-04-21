import { Hono } from 'jsr:@hono/hono';
import { cors } from 'jsr:@hono/hono/cors';

self.onmessage = async (e) => {
  const app = new Hono();

  app.use('*', cors());

  app.get('/*', async (c) => {

    if (c.req.path.endsWith('.js')) {
      const script = await Deno.readTextFile(import.meta.dirname + c.req.path);
      c.header('Content-Type', 'text/javascript');
      // @ts-ignore
      return c.body(script);
    } else {
      const file = await Deno.readFile(import.meta.dirname + c.req.path);
      // @ts-ignore
      return c.body(file);
    }
  });

  Deno.serve({ port: 8787 }, app.fetch);
};