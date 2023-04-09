import joi from "joi";
export const signupSchema = joi.object({
    name: joi.string(),
    email: joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "string.empty": "Email không được để trống",
        "any.required": "Bắt buộc có email"
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống",
        "any.required": "Bắt buộc có Password",
        "string.min": "Password phải có tối thiểu {#limit} ký tự"
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "any.only": "Password không khớp",
        "string.empty": "ConfirmPassword không được để trống",
        "any.required": "Bắt buộc có ConfirmPassword "
    })

})

export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "string.empty": "Email không được để trống",
        "any.required": "Bắt buộc có email"
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống",
        "any.required": "Bắt buộc có Password",
        "string.min": "Password phải có tối thiểu {#limit} ký tự"
    }),
})
