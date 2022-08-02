<script>
    import { user } from '../stores/auth'
    export let chat
    let receiver
    if ($user.id==chat.user1) {
        receiver = chat.user2
    } else {
        receiver = chat.user1
    }
</script>

<li>
    <a href={`/chat/${chat.chatkey}-${receiver}`} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span class="flex-1 ml-3 whitespace-nowrap">{chat.chatkey}</span> 
  </a>
 </li>