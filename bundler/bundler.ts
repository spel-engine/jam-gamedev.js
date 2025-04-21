import * as esbuild from 'npm:esbuild@0.24.0';
import { denoPlugins } from 'jsr:@luca/esbuild-deno-loader@^0.11.0';
import { copyPlugin } from './copy-plugin.ts';

export async function bundler() {
  const res = await esbuild.build({
    plugins: [
      ...denoPlugins({
        loader: 'native',
      }),
      copyPlugin({
        src: './src/resources',
        dest: './dist/resources',
        overwrite: true,
      }),
    ],
    entryPoints: [`./src/main.ts`],
    bundle: true,
    outfile: './dist/app.js',
    write: true,
    format: 'esm',
    minify: true,
    treeShaking: true,
    loader: { '.html': 'text' },
  });

  esbuild.stop();
}

export async function bundlerServe() {
  const ctx = await esbuild.context({
    plugins: [
      ...denoPlugins({
        loader: 'native',
      }),
      copyPlugin({
        src: './src/resources',
        dest: './dist/resources',
        overwrite: true,
      }),
    ],
    entryPoints: [`./src/main.ts`],
    bundle: true,
    outfile: './dist/app.js',
    write: true,
    format: 'esm',
    minify: false,
    treeShaking: true,
    loader: { '.html': 'text' },
  });

  await ctx.watch();
  console.log('ESBuild Watching...');
}
