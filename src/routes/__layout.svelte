<script>
  import {supabase} from "../lib/supabaseClient"
    import { user } from '../stores/auth'
    import { loadChats } from "../stores/messages";
    import "../app.css";


    user.set(supabase.auth.user())
    supabase.auth.onAuthStateChange((_, session) =>{
        user.set(session?.user)
        if (session?.user) {
          loadChats()
        }
    })
</script>

  <Nav />
    <div class="container max-w-lg mx-auto p-5">
      {#if $user }

          <slot></slot>
      {:else}
          <Auth />
      {/if}
    </div>
  <Footer />