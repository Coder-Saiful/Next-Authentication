import Joi from "joi";

export const signupValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50).messages({
            'string.base': `Name must be a letter.`,
            'string.empty': `Name is required.`,
            'any.required': `Name is required.`,
            'string.min': 'Name must be at least 3 characters.',
            'string.max': 'Name must be less than or equal to 60 characters.'
        }),
        email: Joi.string().email().required().messages({
            'string.base': `Invalid email address.`,
            'string.empty': `Email is required.`,
            'any.required': `Email is required.`,
            'string.email': `Invalid email address.`,
        }),
        password: Joi.string().min(6).max(32).required().messages({
            'string.base': ``,
            'string.empty': `Password is required.`,
            'any.required': `Password is required.`,
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
        const [name, email, password] = error.details;
        const errors = {
            ...name,
            ...email,
            ...password
        };
        return errors
    } else {
        return false;
    }
}