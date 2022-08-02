import { writable } from "svelte/store";
import { supabase } from "../lib/supabaseClient"
import { user } from './auth'
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
    const mySubscription = supabase
            .from('*')
            .on('INSERT', payload => {
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
loadChats()

export const sendMessage  = async (chatkey,sender,receiver,message) => {
    const { data, error } = await supabase
  .from('messages')
  .insert([
    { sender: sender, receiver: receiver, chatkey: chatkey, message: message},
  ])
    if (error) {
        console.log(error)
    }
}

