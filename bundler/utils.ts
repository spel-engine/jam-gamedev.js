// import { readableStreamFromReader } from 'jsr:@std/streams@1.0.0';

const rootPath = `${Deno.cwd()}\\dist`;
// console.log(rootPath);
// const currentWorkingDirectory = Deno.cwd();

export function createDistFolder() {
  Deno.mkdirSync(`${Deno.cwd()}\\dist`);
}

export const randomId = async (): Promise<string> => {
  return await crypto.randomUUID().split('-').join('') +
    await crypto.randomUUID().split('-').join('');
};
