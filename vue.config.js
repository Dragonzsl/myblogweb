module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:9900/api/",
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}