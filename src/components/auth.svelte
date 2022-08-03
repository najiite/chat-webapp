<script>
import { supabase } from '../lib/supabaseClient';
    import { user } from '../stores/auth'
    let loading
    let email
    let password
    let loginemail
    let loginpassword

    const loginUser = async()=>{
        try {
            loading = true
            const {error} = await supabase.auth.signIn({
                email: loginemail,
                password: loginpassword
                })
            if (error) throw error
            
        } catch (error) {
            console.error(error)
            alert(error.error_description || error.message)
        } finally {
            loading = false
        }

    }

    const registerUser = async()=>{
        try {
            loading = true
            const {error} = await supabase.auth.signUp({
                email: email,
                password: password
                })

            if (error) throw error
            alert("Confirm your sign up, please check your email")
            
        } catch (error) {
            console.error(error)
            alert(error.error_description || error.message)
        } finally {
            loading = false
        }

    }
</script>

<h1 class="heading">
    Login
 </h1>
 <p class="m-3 text-center text-slate-600 font-semibold">Login with your email</p>

 <form class="my-10" on:submit|preventDefault={loginUser}>
    <input type="email" placeholder="Enter your email" bind:value={loginemail} class="input" />
    <input type="password" placeholder="Enter your Password" bind:value={loginpassword} class="input" />
    <button class="t-btn bg-sky-900 my-5">Login</button>
 </form>

 <h1 class="heading">
    New User? Register
  </h1>
  <p class="m-3 text-center text-slate-600 font-semibold">Register with your email</p>
 
  <form class="my-10" on:submit|preventDefault={registerUser}>
     <input type="email" placeholder="Enter your email" bind:value={email} class="input" />
     <input type="password" placeholder="Enter your Password" bind:value={password} class="input" />
     <button class="t-btn bg-sky-900 my-5">Register</button>
  </form>