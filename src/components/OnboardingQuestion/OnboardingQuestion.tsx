import React from 'react'

export const OnboardingQuestion = ({ question, subHeading }: { question: React.ReactNode, subHeading?: string }) => {
    return (
        <div className='flex gap-6 flex-col'>
            <h1 className='font-medium text-4xl'>{question}</h1>
            <p className='text-[#00000073]'>{subHeading}</p>
        </div>
    )
}

