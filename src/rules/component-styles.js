/**
 * @file component-styles.js
 * @author liwenqian
 * @desc 组件样式规则
 */

const utils = require('../utils');

module.exports = {
    name: 'component-styles',
    exec(file, reporter) {
        const styles = utils.parseComponent(file.content).styles[0];

        if (styles && !styles.scoped) {
            reporter.error(file.path, '组件样式必须使用 scoped');
        }

        if (styles && styles.content.indexOf('fixed') !== -1) {
            reporter.error(file.path, '组件样式禁止使用 position: fixed');
        }
    }
};
