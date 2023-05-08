
import { StoryBlock } from "@app/model/convs-mgr/stories/blocks/main";
import { QuestionMessageBlock } from "@app/model/convs-mgr/stories/blocks/messaging";
import { IObject } from "@iote/bricks";

export interface AssessmentQuestion extends StoryBlock 
{ 
    questionType: AssessmentQuestionType, 
    marks: number, 
    feedback?: string, 
    options?: AssessmentQuestionOptions[] 
} 

export interface AssessmentQuestionOptions 
{ 
    id: string, 
    text: string, 
    value: string
}

export enum AssessmentQuestionType {
    SingleSelectOptions = 1,
}
