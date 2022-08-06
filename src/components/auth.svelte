<script>
import { supabase } from '../lib/supabaseClient';
    let loading
    let email
    let password
    let loginemail
    let loginpassword
    let username

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
                },
                {
                    data: {
                        username: username
                    }
                })

            if (error) throw error
            alert("Registration successful")
            
        } catch (error) {
            console.error(error)
            alert(error.error_description || error.message)
        } finally {
            loading = false
        }

    }
</script>

<div class="bg-cover  p-5 md:p-20" style="background-image: url('/login.jpg')">
    <h1 class="text-center m-5 text-4xl font-semibold text-teal-50 leading-relaxed">Welcome to <span class="rounded uppercase bg-teal-50 text-teal-800 p-3">Wixper</span> quick private chat with friends</h1>
    <div class="grid md:grid-cols-2 gap-4">

        <div class="px-10 py-2 bg-white bg-opacity-5 backdrop-blur-lg rounded drop-shadow-lg">

            <h1 class="heading">
                Login
            </h1>
            <p class="m-3 text-center text-teal-50 font-semibold">Login with your email</p>

            <form class="my-10" on:submit|preventDefault={loginUser}>
                <input type="email" placeholder="Email" bind:value={loginemail} class="input" />
                <input type="password" placeholder="Password" bind:value={loginpassword} class="input" />
                <button class="t-btn bg-teal-700 my-5">Login</button>
            </form>
        </div>

        <div class=" bg-white bg-opacity-5 px-10 py-2 backdrop-blur-md rounded drop-shadow-lg">
            <h1 class="heading">
                New User? Register
            </h1>
            <p class="m-3 text-center text-teal-50 font-semibold">Register with your email</p>
            
            <form class="my-10" on:submit|preventDefault={registerUser}>
                <input type="email" placeholder="Email" bind:value={email} class="input" required/>
                <input type="text" placeholder="Username(Display name)" bind:value={username} class="input" pattern="[A-Za-z0-9]+" maxlength="15" required/>
                <input type="password" placeholder="Password" bind:value={password} class="input" required/>
                <button class="t-btn bg-teal-700 my-5">Register</button>
            </form>
        </div>
    </div>
</div>

 