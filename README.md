# electron-vue-quick-start
electron-vue-quick-start
* 使用electron-quick-start和vue-cli搭建的快速启动工程
* 安装依赖
  ```
  yarn
  ```
  如果是windows可能需要重新编译
  * 安装编译环境
   ```
  yarn global add windows-build-tools
   ```
   * 进入工程目录，重新编译
   ```
  yarn run rebuildnew
   ```
* vue前端
  ```
  yarn run serve
  ```
* electron start(推荐使用vscode直接进行调试，可在src/electron下附加断点调试。launch.json也已上传)
  ```
  yarn start
  ```

* 打包程序
  ```
  yarn run release
  ```
  也可只打windows、mac、linux其中一种
  ```
  yarn run release:win
  yarn run release:mac
  yarn run release:linux
  ```
