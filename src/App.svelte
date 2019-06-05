<script>
	import GameField from './GameField.svelte';
	import Settings from './Settings.svelte';
	import Modal from './Modal.svelte';

	let mode = 0;
</script>


<button on:click={()=>mode = 1}>Настройки</button>
{#if mode == 1}
<Modal on:close={()=>mode = 0}>
	<h2 slot="header">Настройки</h2>
	<Settings on:close={()=>mode = 0}/>
</Modal>
{/if}
<GameField/>
