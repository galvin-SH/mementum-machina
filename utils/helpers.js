module.exports = {
    // timeStamp is passed in as a string from the database e.g. Tue Oct 10 2023 20:29:21 GMT-0700 (Pacific Daylight Time)
    formatTimeStamp: (timeStamp) => {
        return new Date(timeStamp).toLocaleDateString();
    },
};
