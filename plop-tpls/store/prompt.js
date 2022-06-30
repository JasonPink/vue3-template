import path from 'path';
import fs from 'fs';

function getFolder(path) {
  let components = [];
  const files = fs.readdirSync(path);
  files.forEach(function (item) {
    let stat = fs.lstatSync(path + '/' + item);
    if (stat.isDirectory() === true && item != 'components') {
      components.push(path + '/' + item);
      components.push.apply(components, getFolder(path + '/' + item));
    }
  });
  return components;
}
module.exports = {
  description: '创建全局模块化状态',
  prompts: [
    // {
    //   type: "list",
    //   name: "path",
    //   message: "请选择页面创建目录",
    //   choices: getFolder("src/store"),
    // },
    {
      type: 'input',
      name: 'name',
      message: '请输入模块名称',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '模块名称不能为空';
        } else {
          return true;
        }
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: `src/store/modules/{{camelCase name}}/index.ts`,
        templateFile: 'plop-tpls/store/index.hbs',
      },
      {
        path: 'src/store/index.ts',
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template:
          "import { use{{properCase name}}Store } from './modules/{{name}}';\n$1",
        type: 'modify',
      },
      {
        path: 'src/store/index.ts',
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: '\tuse{{properCase name}}Store,\n$1',
        type: 'modify',
      },
    ];
    return actions;
  },
};
