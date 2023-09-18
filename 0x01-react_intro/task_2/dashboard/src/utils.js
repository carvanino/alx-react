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

export {getFullYear, getFooterCopy};