import { Button, Input } from "antd"
import React from 'react'
import { QuestionType } from "../../types/question"
import { OnboardingQuestion } from "../OnboardingQuestion/OnboardingQuestion"

export const CompanyDetails = ({ question, changePage }: { question: QuestionType | undefined, changePage: (e: number) => void }) => {
    return (
        <div className='flex w-[44rem] flex-col gap-24'>
            <OnboardingQuestion question={question?.question} subHeading={question?.subheading} />
            <div className='flex flex-col gap-14'>
                <div>
                    <Input className='rounded-sm' addonBefore="http://" placeholder="your organization URL" />
                </div>
                <Input className='rounded-sm' placeholder="your organization URL" />
            </div>
            <Button onClick={() => changePage(2)} type='primary' className='bg-geekblue-600 self-end rounded-sm'>Continue</Button>
        </div>
    )
}
