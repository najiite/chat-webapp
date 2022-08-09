<script>
    import { user } from '../stores/auth'
    import { deleteChat } from "../stores/messages";
    export let chat
    let receiver
    let recipient
    if ($user.id==chat.user1) {
        receiver = chat.user2
        recipient  = chat.username2
    } else {
        receiver = chat.user1
        recipient  = chat.username1
        
    }
    const handleDelete =(key)=>{
        deleteChat(key) 
    }
</script>

<li>
    <div  class="flex items-center justify-between p-2 text-base font-normal  text-teal-900 hover:text-teal-50 rounded-lg dark:text-white hover:bg-teal-900">
       <a href={`/chat/${chat.chatkey}/${receiver}`} class="flex items-center">
        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
  
            <span class="flex-1 text-xs ml-3 whitespace-nowrap">{recipient}</span>
              
        </a>
        <button on:click={handleDelete(chat.chatkey)} class="items-end px-2 ml-3 text-sm font-medium hover:text-red-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>  
    </div>
 </li>