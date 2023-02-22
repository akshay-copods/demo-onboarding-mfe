import React, { useEffect, useState } from 'react'
import { CompanyDetails, ImageBanner, IntentSelection, JobFunction, ProductInfo, WelcomeUser } from "../components"
import "../index.scss"
import { OnboardingQuestions } from "../types/question"
const Onboarding = () => {
    const [user, setUser] = useState<{ id: number, name: string } | null>(null)
    const [jobOptions, setJobOptions] = useState([])
    const [onboardingQuestion, setOnboardingQuestion] = useState<OnboardingQuestions>()
    const [productOption, setProductOption] = useState()
    const [page, setPage] = useState(0)
    useEffect(() => {
        (async () => {
            // turning on the mock server
            // Be careful not to visit before the mock server is turned on.
            const { worker } = await import('../mocks/browser');
            worker.start();

            // getting the data
            const users = await fetch('/user');
            const userData = await users.json();
            setUser(userData);

            const jobOptions = await fetch('/jobFunction')
            const jobOptionData = await jobOptions.json()
            setJobOptions(jobOptionData.options)

            const onboardingQuestion = await fetch('/onboardingQuestions')
            const onboardingQuestionData = await onboardingQuestion.json()
            setOnboardingQuestion(onboardingQuestionData)

            const productOptions = await fetch('/getProductsOptions')
            const productOptionsData = await productOptions.json()
            console.log(productOptionsData)
            setProductOption(productOptionsData.options)

        })();
    }, []);
    console.log(productOption)
    function renderPage(page: number) {
        switch (page) {
            case 0:
                return <WelcomeUser user={user} changePage={setPage} />
            case 1:
                return <CompanyDetails question={onboardingQuestion?.companyDetails} changePage={setPage} />
            case 2:
                return <JobFunction question={onboardingQuestion?.jobFunction} jobOptions={jobOptions} changePage={setPage} />
            case 4:
                return <ProductInfo productOption={productOption} question={onboardingQuestion?.productInfo} />
            default:
                break;
        }
    }
    return (
        <main className='flex flex-col h-screen'>
            {/* <Header /> */}
            {/* <IntentSelection /> */}
            {page !== 3 ? <div className='flex flex-row-reverse h-full'>
                <ImageBanner />
                <div className='flex flex-col px-24 flex-1 items-center justify-center'>
                    {renderPage(page)}
                </div>
            </div> : <IntentSelection question={onboardingQuestion?.intentSelection} changePage={setPage} />}
        </main>

    )
}

export default Onboarding
