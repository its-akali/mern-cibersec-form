export const validateSchema = (schema) => (req, res, next) => {
    try {
        // schema.parse() -> basicamente comprueba el metodo de validacion y si todo va guay ps guay
        next();
    } catch (err) {
        return res.status(400).json({ message: err }); // check when validation is done
    }
};
