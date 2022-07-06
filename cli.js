const program = require('commander');
const api = require("./index.js");
const pkg = require("./package.json")

program.version(pkg.version)

program.command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(0,-1).join(" ")
        api.add(words).then(()=>{console.log("添加成功")}).catch(()=>{console.log("添加失败")})
    });

program.command('clear')
    .description('clear all task')
    .action(() => {
        api.clear().then(() => { console.log("删除成功") }).catch(() => { console.log("删除失败") })
    });


program.parse(process.argv);

if (process.argv.length === 2) {
    api.showAll()
}
