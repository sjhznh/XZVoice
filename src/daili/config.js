const pkg = require("../../package.json");

const mainConfig = {
    softName: "樺英雄AI配音专家",
    softVersion: pkg.version,
    userFolder: "xzvoice", // 用户文件夹名
    proName: "voice", //项目名称
    company: "樺英雄独家制作",
    nshPath: "src/daili/nsh/installer.nsh", //自定义nsis脚本路径
};

module.exports = mainConfig;
