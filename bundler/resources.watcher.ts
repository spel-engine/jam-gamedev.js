import { walk } from 'jsr:@std/fs@1.0.4';


const resourcesPath = Deno.cwd() + '\\src\\resources';

const watcher = Deno.watchFs(resourcesPath);

// const models = Deno.readDirSync(Deno.cwd() + '/src/resources/models');
let newFile = 
`type Resources = {
  images: Map<string, any>;
  videos: Map<string, any>;
  models: Map<string, any>;
  shaders: Map<string, any>;
  fonts: Array<string>;
};

export const resources: Resources = {
  images: new Map({{images}}),
  videos: new Map([]),
  models: new Map(
    {{models}}
  ),
  shaders: new Map([]),
  fonts: {{fonts}},
};
`
console.log(resourcesPath);

async function generateModels() {
    const resourcesModels = []
    for await (const walkEntry of walk(Deno.cwd() + '/src/resources/models')) {
        const type = walkEntry.isSymlink
          ? "symlink"
          : walkEntry.isFile
          ? "file"
          : "directory";
      
        const info = walkEntry.name.split('.');
    
        if (['obj', 'fbx'].includes(info[1])) {
            resourcesModels.push([info[0], walkEntry.path
                .replace(`${resourcesPath}\\models`, '')
                .replaceAll('\\', '/')
                .replace('/', '')
            ])
        }
    }
    
    newFile = newFile.replace('{{models}}', `${JSON.stringify(resourcesModels, null, 2)}`)
    
}


async function generateFonts() {
    const resourcesModels = []
    for await (const walkEntry of walk(Deno.cwd() + '/src/resources/fonts')) {
        const type = walkEntry.isSymlink
          ? "symlink"
          : walkEntry.isFile
          ? "file"
          : "directory";
      
        const info = walkEntry.name.split('.');
    
        if (['ttf'].includes(info[1])) {
            resourcesModels.push(walkEntry.path
                .replace(`${resourcesPath}\\fonts`, '')
                .replaceAll('\\', '/')
                .replace('/', '')
            )
        }
    }
    
    newFile = newFile.replace('{{fonts}}', `${JSON.stringify(resourcesModels, null, 2)}`)
    
}

async function generateImages() {
    const resourcesModels = []
    for await (const walkEntry of walk(Deno.cwd() + '/src/resources/images')) {
        const type = walkEntry.isSymlink
          ? "symlink"
          : walkEntry.isFile
          ? "file"
          : "directory";
      
        const info = walkEntry.name.split('.');
    
        if (['jpg', 'png'].includes(info[1])) {
            resourcesModels.push([info[0], walkEntry.path
                .replace(`${resourcesPath}\\images`, '')
                .replaceAll('\\', '/')
                .replace('/', '')
            ])
        }
    }
    
    newFile = newFile.replace('{{images}}', `${JSON.stringify(resourcesModels, null, 2)}`)
    
}


await generateModels()
await generateFonts()
await generateImages()

await Deno.writeTextFile(resourcesPath + "/resources_.ts", newFile);
// for await (let event of watcher) {
//     console.log(">>>> event", event);
// }

