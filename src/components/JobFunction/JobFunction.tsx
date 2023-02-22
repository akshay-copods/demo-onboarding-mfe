import { Button, Select } from "antd"
import React from 'react'
import { QuestionType } from "../../types/question"
import { OnboardingQuestion } from "../OnboardingQuestion/OnboardingQuestion"


export const JobFunction = ({ question, jobOptions, changePage }: { question?: QuestionType | undefined, jobOptions: Array<{ id: number, value: string, label: string }>, changePage: (e: number) => void }) => {
    return <div className='flex flex-col gap-20 w-[44rem]'>
        <OnboardingQuestion question={question?.question} subHeading={question?.subheading} />
        <div className='flex flex-col gap-24'>
            <Select
                size='large'
                defaultValue={jobOptions[0].label}
                className='w-full'
                options={jobOptions}
            />
            <Button onClick={() => changePage(3)} className='bg-geekblue-600 self-end rounded-sm' type='primary'>Continue</Button>
        </div>
    </div>
}