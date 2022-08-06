import { writable } from "svelte/store";
import { supabase } from "../lib/supabaseClient"
export const messages = writable([])
export const chats = writable([])

export let loading = true
export let username = null
export let displayname = null

export const loadMessages = async (chatkey) => {
    const {data,error} = await supabase.from('messages').select().match({chatkey: chatkey})
    
    if (error) {
        console.log(error)
    }
    messages.set(data)
}
export async function getProfile() {
    try {
      loading = true
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profile')
        .select(`username`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) throw error

      if (data) {
        username = data.username
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      loading = false
    }
  }
export async function getDisplayname(userid) {
      try {
        loading = true
        let { data, error, status } = await supabase
          .from('profile')
          .select(`username`)
          .eq('id', userid)
          .single()
  
        if (error && status !== 406) throw error
  
        if (data) {
          displayname = data.username
        }
      } catch (error) {
        console.log(error.message)
      } finally {
        loading = false
      }
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

export const newChat  = async (chatkey,user1,user2,username1,username2) => {
    const { data, error } = await supabase
    .from('chats')
    .insert([
        { chatkey, user1, user2,username1,username2},
    ])
    if (error) {
        console.log(error)
    }
    window.location = `/chat/${chatkey}/${user1}`
}
