import { Button, Input, Select } from "antd"
import React from 'react'
import { QuestionType } from "../../types/question"
import { LaunchingSoonChip } from "../LaunchingSoonChip/LaunchingSoonChip"
import { OnboardingQuestion } from "../OnboardingQuestion/OnboardingQuestion"

const options = [{}]
export const ProductInfo = ({ productOption, question }: { productOption?: any, question?: QuestionType | undefined }) => {
    const { Option } = Select;
    const liveProducts = productOption.filter((item: any) => !item.disabled)
    const launchingSoonProducts = productOption.filter((item: any) => item.disabled)
    return (
        <div className='flex flex-col gap-20 w-[44rem]'>
            <OnboardingQuestion question={question?.question} />
            <div className='flex flex-col gap-14'>
                <Select
                    placeholder='Select your product'
                    size='large'
                    className='w-full'
                    defaultValue={liveProducts[0].label}
                >
                    {liveProducts.map((item: any) => <Option key={item.id} >{item.label}</Option>)}
                    <Option className='pointer-events-none'><LaunchingSoonChip /></Option>
                    {launchingSoonProducts.map((item: any) => <Option key={item.id} disabled={item.disabled}>{item.label}</Option>)}
                </Select>
                <Input size="large" placeholder="Enter a product name" />
                <Button disabled className='bg-geekblue-600 self-end rounded-sm' type='primary'>Continue</Button>
            </div>
        </div>
    )
}


