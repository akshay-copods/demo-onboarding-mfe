import { Button } from "antd"
import React, { useState } from 'react'
import { QuestionType } from "../../types/question"
import { AddPeople, Battery } from "../Icons"
import { IntentCard } from "../IntentCard/IntentCard"
import { OnboardingQuestion } from "../OnboardingQuestion/OnboardingQuestion"

export const IntentSelection = ({ question, changePage }: { question: QuestionType | undefined, changePage: (e: number) => void }) => {
    const [ticked, setTicked] = useState('add')
    return (
        <div className="flex flex-col gap-14 px-40 pt-8">
            <OnboardingQuestion question={question?.question} subHeading={question?.subheading} />
            <div className="h-[25rem] overflow-auto ">
                <h3 className="font-medium pb-2 uppercase">Acquire Users</h3>
                <div className="flex gap-7">
                    <IntentCard value="add" tick={ticked} disabled={false} content='Acquire users through self serve sign up' icon={<AddPeople />} />
                    <IntentCard value="manage" tick={ticked} disabled={true} icon={<Battery />} content='Manage Tenant Workflow' />
                </div>
            </div>
            <div className="flex justify-end sticky bottom-0">
                <Button onClick={() => changePage(4)} type="primary" className="mr-32 bg-geekblue-600">Continue</Button>
            </div>
        </div>

    )
}


