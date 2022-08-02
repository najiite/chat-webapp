<script>
    export let message
    import { user } from '../stores/auth'
</script>

<div class={`chat-bubble-receiver ${message.sender == $user.id ? 'chat-bubble-sender' : 'chat-bubble-receiver'}`}>
    {message.message}
</div>