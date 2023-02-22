import { Input } from "antd"
import React from 'react'

export const InputField = () => {
    return (
        <label className='flex flex-col gap-2' htmlFor="email">Enter Email
            <Input id='email' placeholder='name@company.com' className='rounded-sm' />
        </label>
    )
}