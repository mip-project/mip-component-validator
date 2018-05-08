/**
 * @file reporter.js
 * @desc 报告信息
 * @author liwenqian
 */

class Reporter {
    constructor() {
        this.warns = [];
        this.errors = [];
    }

    warn(file, message, row, col) {
        this.warns.push({
            file: file,
            message: message,
            row: row == null ? -1 : row,
            col: col == null ? -1 : col
        });
    }

    error(file, message, row, col) {
        this.errors.push({
            file: file,
            message: message,
            row: row == null ? -1 : row,
            col: col == null ? -1 : col
        });
    }

    getReport() {
        return {
            status: (this.warns.length || this.errors.length) ? 1 : 0,
            warn: this.warns,
            errors: this.errors
        };
    }
}

module.exports = Reporter;
