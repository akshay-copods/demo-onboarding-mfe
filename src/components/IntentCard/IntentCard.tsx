import React, { ReactNode } from 'react'

export const IntentCard = ({ value, disabled, icon, content, tick }: { value: string, tick: string, disabled?: boolean, icon?: ReactNode, content?: string }) => {
    if (disabled) {
        return <label className={`card bg-gray-400 inline-flex relative w-[16rem] rounded-[4px] py-6 px-6 border-geekblue-600 border-2 justify-end`}>
            <span className="plan-details flex-1 gap-2 flex ">
                {icon}
                <span className="text-sm flex-1 inline-flex w-[9.5rem] text-black opacity-80">{content}</span>
            </span>
        </label>
    }
    return (
        <label className={`card inline-flex bg-geekblue-100 relative w-[16rem] rounded-[4px] py-6 px-6 border-geekblue-600 border-2 justify-end`}>
            <input value={value} disabled={disabled} name="plan" className="radio absolute m-0 left-2 top-2" type="radio" checked={value === 'add'} />
            <span className="plan-details flex-1 gap-2 flex ">
                {icon}
                <span className="text-sm flex-1 inline-flex w-[9.5rem]">{content}</span>
            </span>
        </label>
    )
}


