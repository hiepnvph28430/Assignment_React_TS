import * as Yup from 'yup'
export const signupSchema = Yup.object({
    firstName: Yup.string().trim().required("Trường dữ liệu bắt buộc và không được để trống"),
    lastName: Yup.string().trim().required("Trường dữ liệu bắt buộc và không được để trống"),
    email: Yup.string().email("Email sai định dạng").trim().required("Trường dữ liệu bắt buộc và không được để trống"),
    password: Yup.string().min(6).trim().required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Mật khẩu không khớp'),
    role: Yup.string().default("member")
})
export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").trim().required("Trường dữ liệu bắt buộc và không được để trống"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
})
export type SigninForm = Yup.InferType<typeof signinSchema>

export interface IUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    role: string
}