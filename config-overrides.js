const path = require('path')
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    fixBabelImports('formik-antd', {
        libraryName: 'formik-antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
)