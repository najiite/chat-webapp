 <script>
    import { chats} from '../stores/messages'
    import Chatlist from './chatlist.svelte'
    
    let opacity = 'invisible'
    const handleDrawer =()=>{
      opacity === 'invisible' ? opacity = "visible" : opacity = "invisible"
    }
 </script>


 <!-- drawer component -->
 <div id="drawer-example" 
    class={`fixed z-40 h-screen ${opacity} p-4 overflow-y-auto bg-white w-80
         dark:bg-gray-800 transition-transform left-0 top-0 transform-none`} 
        tabindex="-1" aria-labelledby="drawer-label" aria-modal="true" role="dialog">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Active Chats</h5>
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
    <div class="flex place-content-end text-sm text-gray-500 dark:text-gray-400">
        
            <button on:click={handleDrawer} class="flex items-center mx-3 px-3 text-neutral-600 hover:text-teal-900 text-lg font-bold">
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
        </div>
</footer>