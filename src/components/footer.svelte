 <script>
    import { chats} from '../stores/messages'
    import Chatlist from './chatlist.svelte';

    let opacity = 'opacity-0'
    const handleDrawer =()=>{
      opacity === 'opacity-0' ? opacity = "opacity-100" : opacity = "opacity-0"
    }
 </script>


 <!-- drawer component -->
 <div id="drawer-example" 
    class={`fixed z-40 h-screen ${opacity} p-4 overflow-y-auto bg-white w-80
         dark:bg-gray-800 transition-transform left-0 top-0 transform-none`} 
        tabindex="-1" aria-labelledby="drawer-label" aria-modal="true" role="dialog">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info</h5>
    <button on:click={handleDrawer} type="button" data-drawer-dismiss="drawer-example" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
       <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="py-4 overflow-y-auto">
        <ul class="space-y-2">
            {#each $chats as chat}
                <Chatlist chat={chat} />
            {/each}
        </ul>
     </div>
 </div>

<footer 
class="p-4 bg-white rounded-lg shadow-inner   
 w-full fixed bottom-0 dark:bg-gray-800">
    <ul class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <li>
             <a href="/" class="flex items-center mx-3 px-3 hover:text-purple-900 text-lg font-bold">
                <svg class="w-6 h-6 mx-3 " 
                    fill="none" stroke="currentColor" 
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                        </path>
                </svg>
           New Chat</a>
        </li>
        <li>
            <button on:click={handleDrawer} class="flex items-center mx-3 px-3 hover:text-purple-900 text-lg font-bold">
                <svg class="w-6 h-6 mx-3" 
                    fill="none" stroke="currentColor" 
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                        </path>
                </svg>
            Chats
            </button>
        </li>
    </ul>
</footer>