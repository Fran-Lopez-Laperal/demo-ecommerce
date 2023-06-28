const generateError = (msg, code) => {
    const err = new Error(msg);
    err.httpsStatus = code;
    throw err
}



module.exports = generateError