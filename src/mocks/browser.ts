import { rest, setupWorker } from 'msw';
import { handlers } from './handler';
 
const getUser = rest.get('/user',(_req, res, ctx) => {
    return res(
      ctx.json({
        id:1,
        name: 'Ajay',
      })
    );
  })

  const getJobFunctionOptions = rest.get('/jobFunction',(_req, res, ctx) => {
    return res(
      ctx.json({
        options:[
            {
                id:1,
                label:'Product Management',
                value:'Product Management',
            },
            {
                id:2,
                label:'Application Development',
                value:'Application Development',
            },
            {
                id:3,
                label:'Growth team',
                value:'Growth team',
            },
            {
                id:4,
                label:'DevOps / IT Operations',
                value:'DevOps / IT Operations'
            },
            {
                id:5,
                label:'Business Analytics',
                value:'Business Analytics'
            },
            {
                id:6,
                label:'P&L Lead / Manager',
                value:'P&L Lead / Manager'
            },
            {
                id:7,
                label:'CxO',
                value:'CxO'
            },
        ]
      })
    );
  })

  const getOnboardingQuestions = rest.get('/onboardingQuestions',(_req, res, ctx) => {
    return res(
      ctx.json({
        companyDetails:{question:`Enter your company's name and URL`,subheading:'With your company details help us understand your company and create a customized experience for you. '}
       ,
       jobFunction:{
        question:'What best describes your job function?',
        subheading:'This will help us personalize your experience with StealthSaaS'
       },
       productInfo:{
        question:'What are you building this workflow for and which product?',
        subheading:''
       },
       intentSelection:{
        question:'What would you like to accomplish with Stealth SaaS?',
        subheading:`Let's start by selecting the specific task so that we can accelerate your SaaS growth.`
       }
      })
    );
  })

  const getProductOptions = rest.get('/getProductsOptions',(_req,res,ctx)=>{
    return res(ctx.json({
      options:[
        {
            id:1,
            disabled:false,
            label:'Company Website',
            value:'Company Website',
        },
        {
            id:2,
            disabled:true,
            label:'Cloud Market-Space',
            value:'Cloud Market-Space',
        },
        {
            id:3,
            disabled:true,
            label:'Marketing Campaigns',
            value:'Marketing Campaigns',
        },
        {
            id:4,
            disabled:true,
            label:'Training Workshops',
            value:'Training Workshops'
        },
        {
            id:5,
            disabled:true,
            label:'CRM Portals',
            value:'CRM Portals'
        },
    ]
    }))
  })

// export const worker = setupWorker(getUser,getJobFunctionOptions,getOnboardingQuestions,getProductOptions);
export const worker = setupWorker(...handlers)

