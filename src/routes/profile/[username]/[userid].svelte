<script>
    import { supabase } from "../../../lib/supabaseClient"
    import { page } from '$app/stores';
    import { newChat,username } from '../../../stores/messages'
    import { user } from '../../../stores/auth'
    const pageUrl = $page.url

    const userid1 = $page.params.userid
    const username1 = $page.params.username
    const chatkey = crypto.randomUUID();
    const startChat =()=> {
        newChat(chatkey,userid1,$user.id,username1,username)
        
    }
</script>


<h1 class="heading">
   Profile Page
</h1>

<form class="my-10" >
    <div>{pageUrl}</div>
    {#if $user.id !==userid1}
        <button type="button" on:click={startChat} class="t-btn bg-sky-900 my-5 w-full">Start Chat</button>
    {:else} 
        <h3 class="heading">Share your profile link to start chatting</h3> 
    {/if}
 </form>