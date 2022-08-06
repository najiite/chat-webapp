<script>
  import {supabase} from "../lib/supabaseClient"
    import { user } from '../stores/auth'
    import { loadChats, getProfile} from "../stores/messages";
    import "../app.css";


    user.set(supabase.auth.user())
    supabase.auth.onAuthStateChange((_, session) =>{
        user.set(session?.user)
        if (session?.user) {
          loadChats()
          getProfile()
        }
    })
</script>
<svelte:head>
  <title>Wixper Chat Webapp</title>
</svelte:head>
  <Nav />
    <div class="mx-auto">
      {#if $user }

          <slot></slot>
      {:else}
          <Auth />
      {/if}
    </div>
  
    {#if $user }
  <Footer />
  {/if}