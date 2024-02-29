import {atom} from 'recoil'
interface conversationInput {
    role:string
    parts:string
}
interface botInput {
    isLoading:boolean
    isBotConversation:conversationInput[]
}
export const userState = atom<conversationInput[]>({
    key:'userState',
    default:[]
})

export const botState = atom<botInput>({
    key:'botState',
    default:{
        isLoading:true,
        isBotConversation:[]
    }
})