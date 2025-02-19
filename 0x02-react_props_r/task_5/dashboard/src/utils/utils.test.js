const assert = require('assert');
// import { getFooterCopy, getFullYear, getLatestNotification } from "../../../../task_2/dashboard/src/utils";
const { getFooterCopy, getFullYear, getLatestNotification } = require("./utils");


describe('getFullYear', () => {
    it('Should return the current year', () => {
        const currentYear = new Date().getFullYear()
        assert.equal(getFullYear(), currentYear);
    });
});

describe('getFooterCopy', () => {
    it('Should return the correct string based on the arg passed', () => {
        assert.equal(getFooterCopy(true), 'Holberton School');
        assert.equal(getFooterCopy(false), 'Holberton School main dashboard');
    });
});

describe('getLastestNotification', () => {
    it('Should return the correct string', () => {
        assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD')
    })
})