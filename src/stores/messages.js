import { writable } from "svelte/store";
import { supabase } from "../lib/supabaseClient"
export const messages = writable([])
export const chats = writable([])

export const loadMessages = async (chatkey) => {
    const {data,error} = await supabase.from('messages').select().match({chatkey: chatkey})
    
    if (error) {
        console.log(error)
    }
    messages.set(data)
}
const loadNewmessages = async () => {
    
            supabase
            .from('messages')
            .on('*', payload => {
            messages.update( (cur) => { 
                return [...cur, payload.new]
            })
            })
            .subscribe()
        }
loadNewmessages()

export const loadChats = async () => {
    const {data,error} = await supabase.from('chats').select()
        if (error) {
            console.log(error)
        }
        chats.set(data)

}

export const sendMessage  = async (chatkey,sender,receiver,message) => {
    const { data, error } = await supabase
  .from('messages')
  .insert([
    { sender: sender, receiver: receiver, chatkey: chatkey, message: message},
  ])
    if (error) {
        console.log(error)
    }
    loadNewmessages()
}

export const newChat  = async (chatkey,user1,user2) => {
    const { data, error } = await supabase
    .from('chats')
    .insert([
        { chatkey, user1, user2},
    ])
    if (error) {
        console.log(error)
    }
    window.location = `/chat/${chatkey}-${user1}`
}
