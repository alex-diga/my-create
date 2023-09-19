# 项目

项目是由 vite 创建的 vue3 + ts

## 项目依赖

1. 项目 CSS 使用 `less`
2. 项目全局状态使用 `pinia`
3. 项目请求库使用 `axios`

## 代码规范

项目统一代码规范和格式，通过 eslint + prettier 配置作代码格式校验和修复

### 自动格式

1. 项目已配置自动检测和修复代码，你只需要编辑代码并保存即可，对应配置可在 `.vscode/seetings.json` 调整
2. 在提交代码时，设置了 pre-commit 钩子，你需要注意 `git commit` 代码时，是否通过代码校验

> 当 lint-staged 校验失败后文件丢失？可尝试通过 git stash pop 找回

### 手动校验

你可以执行 `npm run lint` 命令校验项目 `/src` 目录下的代码并修复，也可执行 `npm run format` 命令格式化 `/src` 目录下的代码

## 编辑器插件

请安装编辑器插件: `ESLint`、`Prettier`、`Volar` 插件

## 链接

1. [vue](https://cn.vuejs.org/guide/introduction.html)
2. [vite](https://cn.vitejs.dev/guide/)
3. [typescript](https://www.typescriptlang.org/zh/)
4. [lesscss](https://lesscss.com.cn/usage/)
5. [pinia](https://pinia.vuejs.org/zh/introduction.html)
6. [axios](https://www.axios-http.cn/docs/intro)
7. [eslint](https://zh-hans.eslint.org/)
8. [stylelint](https://stylelint.io/)
