const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/;这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
    publicPath: './',
    // 与package.json中build选项下的from相对应
    outputDir: 'dist/frontEnd',
    devServer: {
        // proxy: 'http://192.168.78.106:8081/messageRouteApp/'
    },

    chainWebpack: config => {
        // alias 路径别名
        config.resolve.alias.set('@', resolve('src')).set('~', resolve('src/api'));
        // webpack配置第三发组件：如Jquery、Quill等
    }
};