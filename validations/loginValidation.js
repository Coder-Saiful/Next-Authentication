import Joi from "joi";

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.base': `Invalid email address.`,
            'string.empty': `Email field is required.`,
            'any.required': `Email field is required.`,
            'string.email': `Invalid email address.`,
        }),
        password: Joi.string().min(6).max(32).required().messages({
            'string.base': ``,
            'string.empty': `Password field is required.`,
            'any.required': `Password field is required.`,
            'string.min': 'Password must be at least 6 characters.',
            'string.max': 'Password must be less than or equal to 32 characters.'
        })
    });
    const {
        error
    } = schema.validate(data, {
        abortEarly: false
    });
    if (error) {
        error.details.forEach(err => {
            err[err.context.key] = err.message;
            delete err.message;
            delete err.path;
            delete err.type;
            delete err.context;
        });
        const [email, password] = error.details;
        const errors = {
            ...email,
            ...password
        };
        return errors
    } else {
        return false;
    }
}