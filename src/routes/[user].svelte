<script>
    import { page } from '$app/stores';
    import { newChat } from '../stores/messages'
    import { user } from '../stores/auth'
    const pageUrl = $page.url

    const user1 = $page.params.user
    const chatkey = crypto.randomUUID();
    const startChat =()=> {
        newChat(chatkey,user1,$user.id)
        
    }
</script>


<h1 class="heading">
   Private chat link 
</h1>

<form class="my-10" >
    <div>{pageUrl}</div>
    {#if $user.id !==user1}
        <button type="button" on:click={startChat} class="t-btn bg-sky-900 my-5 w-full">Start Chat</button>   
    {/if}
 </form>