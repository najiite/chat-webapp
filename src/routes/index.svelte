<script>
    import { supabase } from "../lib/supabaseClient"
    import { user } from '../stores/auth'
    import { page } from '$app/stores'
    import { username } from "../stores/messages";
    const pageUrl = $page.url


</script>

<div class="bg-cover p-5 md:p-20" style="background-image: url('/home.jpg');">

    <h1 class="text-center m-5 text-4xl font-semibold text-teal-50 leading-relaxed">
        Welcome to 
            <span class="rounded uppercase bg-teal-50 text-teal-800 p-3">Wixper</span> 
        quick private chat with friends
    </h1>
    <div class="grid md:grid-cols-3 gap-4 my-10">
        <div class="">
            <img class="rounded-lg" src="/phone.jpg" alt="phone"/>
        </div>
        <div class="col-span-2 md:ml-20">
            <h1 class="text-4xl font-semibold text-teal-50 my-10">
                Hello {username}
            </h1>
            <p class=" text-2xl font-semibold text-teal-50">Start sharing your profile link to start having private conversations with friends</p>
            <div class="my-5">
                <a 
                    href={`../profile/${username}/${$user.id}`} 
                        class="t-btn bg-teal-800">View Profile
                </a>
            </div>
        </div>
    </div>
</div>