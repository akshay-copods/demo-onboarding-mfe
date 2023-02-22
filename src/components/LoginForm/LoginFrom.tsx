import { GoogleOutlined } from "@ant-design/icons"
import { Button } from "antd"
import React from 'react'
import { InputField } from "../InputField/InputField"

export const LoginForm = () => {
    return (
        <div className='w-[442px] flex flex-col'>
            <h2 className='font-medium text-2xl mb-6'>Welcome to Stealth SaaS!</h2>
            <div className='gap-10 flex flex-col'>
                <InputField />
                <a className='w-full' href='/onboarding'>
                    <Button className='bg-geekblue-600 rounded-sm w-full' type="primary">Continue</Button>
                </a>
                <div className='flex items-center gap-1 pb-4'>
                    <span className='h-[1px] bg-breaker2 w-full'></span>
                    <span>OR</span>
                    <span className='h-[1px] bg-breaker2 w-full'></span> </div>
            </div>
            <Button icon={<GoogleOutlined />} className='border-geekblue rounded-sm flex items-center justify-center'>Continue with google</Button>
            <p className='text-sm text-center mt-7'>Already have an account? <a className='text-geekblue-600' href="#">Log In</a></p>
        </div>
    )
}

