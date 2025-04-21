import { Plugin, PluginBuild } from 'npm:esbuild@0.24.0';
import { type CopyOptions, copySync, emptyDirSync } from 'jsr:@std/fs@1.0.4';

interface CopyPluginOptions extends CopyOptions {
  src?: string;
  dest?: string;
}

export const copyPlugin = (options: CopyPluginOptions = {}): Plugin => ({
  name: 'esbuild-copy-plugin',
  setup(build: PluginBuild) {
    const src = options.src || './assets';
    const dest = options.dest || './dist';

    build.onStart(() => {
      emptyDirSync(dest);
      Deno.removeSync(dest);
    });
    build.onEnd(() => copySync(src, dest));
  },
});
