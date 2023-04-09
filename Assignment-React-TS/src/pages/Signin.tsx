import React from 'react'
import { useForm } from 'react-hook-form';

type Props = {}

const Signin = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = async (data: any) => {
        console.log(data)

    }
    return (
        <div>
            <div className="tw-mx-auto tw-max-w-screen-xl tw-px-4 tw-py-16 tw-sm:px-6 tw-lg:px-8">
                <div className="tw-mx-auto tw-max-w-lg">
                    <h1 className="tw-text-center tw-text-2xl tw-font-bold tw-text-indigo-600 tw-sm:text-3xl ">
                        Get started today
                    </h1>

                    <p className="tw-mx-auto tw-mt-4 tw-max-w-md tw-text-center tw-text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                        dolores deleniti inventore quaerat mollitia?
                    </p>

                    <form
                        action=""
                        className="tw-mt-6 tw-mb-0 tw-space-y-4 tw-rounded-lg tw-p-4 tw-shadow-lg tw-sm:p-6 tw-lg:p-8" onSubmit={handleSubmit(onHandleSubmit)}
                    >
                        <p className="tw-text-center tw-text-lg tw-font-medium">Sign in to your account</p>

                        <div>
                            <label htmlFor="email" className="tw-sr-only">Email</label>

                            <div className="tw-relative">
                                {/* <input
                                    type="email"
                                    className="tw-w-full tw-rounded-lg tw-border-gray-200 tw-p-4 tw-pr-12 tw-text-sm tw-shadow-sm"
                                    placeholder="Enter email"
                                /> */}
                                <input type="email" {...register('email')} className="tw-w-full tw-rounded-lg tw-border-gray-200 tw-p-4 tw-pr-12 tw-text-sm tw-shadow-sm" />

                                <span
                                    className="tw-absolute tw-inset-y-0 tw-right-0 tw-grid tw-place-content-center tw-px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="tw-h-4 tw-w-4 tw-text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="tw-sr-only">Password</label>

                            <div className="tw-relative">
                                {/* <input
                                    type="password"
                                    className="tw-w-full tw-rounded-lg tw-border-gray-200 tw-p-4 tw-pr-12 tw-text-sm tw-shadow-sm"
                                    placeholder="Enter password"
                                /> */}
                                <input type="password" {...register('password')} className="tw-w-full tw-rounded-lg tw-border-gray-200 tw-p-4 tw-pr-12 tw-text-sm tw-shadow-sm" />

                                <span
                                    className="tw-absolute tw-inset-y-0 tw-right-0 tw-grid tw-place-content-center tw-px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="tw-h-4 tw-w-4 tw-text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="tw-block tw-w-full tw-rounded-lg tw-bg-indigo-600 tw-px-5 tw-py-3 tw-text-sm tw-font-medium tw-text-white"
                        >
                            Sign in
                        </button>

                        <p className="tw-text-center tw-text-sm tw-text-gray-500">
                            No account?
                            <a className="tw-underline" href="/signup">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin