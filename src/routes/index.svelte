<script>
    import Message from '../components/message.svelte'
    import { user } from '../stores/auth'
    import { page } from '$app/stores'
    import {SHA256} from 'crypto-js/sha256'
    const pageUrl = $page.url
    console.log(SHA256('hELLO'))

</script>


<h1 class="heading">
   Wixper
</h1>

<form class="my-10" >
    <p>Your Private chat link</p>
    <div>{pageUrl}{$user.id}</div>
 </form>