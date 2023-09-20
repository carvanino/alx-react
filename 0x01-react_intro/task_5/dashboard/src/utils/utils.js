function getFullYear () {
    const today = new Date();

    const currentYear = today.getFullYear();

    return currentYear;
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}

module.exports = {getFullYear, getFooterCopy, getLatestNotification};