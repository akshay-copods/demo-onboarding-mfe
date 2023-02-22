export interface QuestionType {
    question:string
    subheading:string
}
export interface OnboardingQuestions  {
   companyDetails:QuestionType,
   jobFunction:QuestionType,
   productInfo:QuestionType,
   intentSelection:QuestionType
}