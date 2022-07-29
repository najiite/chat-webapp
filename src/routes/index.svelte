<script>
    function autoBottom() {
    document.body.scrollTo(0,50)
  }
  
</script>
<svelte:window on:scroll={autoBottom} />
<h1 class="heading">
    Chat webapp
</h1>
<div class="chat-bubble-sender">
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release 
    of Letraset sheets containing Lorem
</div>
<div class="chat-bubble-receiver">
    It was popularised in the 1960s with the release 
    of Letraset sheets containing Lorem
</div>
<div class="chat-bubble-sender">
    It has survived
</div>
<div class="chat-bubble-receiver">
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release 
    of Letraset sheets containing Lorem
</div>
<div class="chat-bubble-sender">
    It has survived not only five centuries
</div>
<div class="chat-bubble-receiver">
    It has survived not only five centuries, but also the leap into electronic typesetting, 
    remaining essentially unchanged. It was popularised in the 1960s with the release 
    of Letraset sheets containing Lorem
</div>
<div class="mb-10">
    <form >
        <div class="relative">
            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-purple-900 block w-full p-2.5" type="text" placeholder="enter message" />
            <button class="text-purple-900 absolute right-2.5 bottom-2.5">
                <svg class="w-6 h-6  font-extrabold" 
                    fill="none" stroke="currentColor" 
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
                        </path>
                </svg>
            </button>
        </div>
        
    </form>
</div>