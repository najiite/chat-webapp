<script>
    import Message from '../../../components/message.svelte'
    import { user } from '../../../stores/auth'
    import { messages, sendMessage, loadMessages, username, displayname, getDisplayname} from '../../../stores/messages'
    import { page } from '$app/stores';
    import { onMount } from "svelte";

    let newMessage
    const chatkey = $page.params.chatkey
    const receiver = $page.params.receiver
    loadMessages(chatkey)
    getDisplayname(receiver)
    onMount(() => window.scrollTo(0,document.body.scrollHeight));

    const handleSend =()=>{
        sendMessage(chatkey,$user.id,receiver,newMessage)
        newMessage = ""
    }
</script>

<div class="bg-cover pb-5 px-1 md:p-20 bg-zinc-50">
    <div class="relative container max-w-lg mx-auto mb-10">
        
        <div class="sticky top-0">
            <div class="flex items-center bg-white text-teal-900 border border-teal-900 rounded-b-lg p-2"><svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    {displayname}</div>
        </div>
        <div>
            {#each $messages as message}
                <Message message={message} />
            {/each}
            <form on:submit|preventDefault={handleSend}>
                <div class="relative">
                    <input bind:value={newMessage} class="border border-neutral-500 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-teal-900 block w-full p-2.5" type="text" placeholder="enter message" />
                    <button type="submit" class="text-teal-900 absolute right-2.5 bottom-2.5">
                        <svg class="w-6 h-6  font-extrabold" 
                            fill="none" stroke="currentColor" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
                                </path>
                        </svg>
                    </button>
                </div>
                
            </form>
            
        </div>
    </div>
</div>