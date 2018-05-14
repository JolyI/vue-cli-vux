const configBase = {}
switch (process.env.NODE_ENV) {
    case 'production':
        configBase.baseUrl = "//aiyong.dafysz.cn"
        break;
    case 'production':
        configBase.baseUrl = "//qktest.dafycredit.cn"
        break;
    default:
    configBase.baseUrl = "//qkdev.dafycredit.cn"
}

module.exports = configBase