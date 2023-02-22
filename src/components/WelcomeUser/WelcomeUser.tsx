import { Button } from "antd"
import React from 'react'

export const WelcomeUser = ({ changePage, user }: { user?: { id: number, name: string } | null, changePage: (e: number) => void }) => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-6'>
                <h1 className='font-medium text-4xl'>Welcome to Stealth-SaaS {user?.name}!</h1>
                <p>We want to know you a bit so that we can get you there a tad bit faster</p>
            </div>
            <Button onClick={() => changePage(1)} className='self-start bg-geekblue-600 rounded-sm' type='primary'>Let&apos;s get started</Button>
        </div>
    )
}


