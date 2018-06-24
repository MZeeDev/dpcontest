class ErrorHandler {
    sendError(res, error) {
        try {
            console.log(error);
            res.status(error.code || 400).send(error);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

const errorHandler = new ErrorHandler();
module.exports = { errorHandler };