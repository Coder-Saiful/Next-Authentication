import Joi from "joi";

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.base': `Invalid email address.`,
            'string.empty': `Email field is required.`,
            'any.required': `Email field is required.`,
            'string.email': `Invalid email address.`,
            // 'string.min': '',
            // 'string.max': '',===
          }),
        password: Joi.string().min(6).max(32).required()
    });
    const {error} = schema.validate(data, {abortEarly: false});
    if (error) {
        error.details.forEach(err => {
            err[err.context.key] = err.message;
            delete err.message;
            delete err.path;
            delete err.type;
            delete err.context;
        });
        const [email, password] = error.details;
        const errors = {...email, ...password};
        return errors
    } else {
        return false;
    }
}