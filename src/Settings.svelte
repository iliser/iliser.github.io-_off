<script>
    import { createEventDispatcher } from 'svelte';
    import {settings} from './SettingsStore.js';

    let {width,height,difficult} = $settings;
    $: sessionStorage.setItem('width',width);
	$: sessionStorage.setItem('height',height);
    $: sessionStorage.setItem('difficult',difficult);

    $: settings.update(v => ({...v,width}));
    $: settings.update(v => ({...v,height}));
    $: settings.update(v => ({...v,difficult}));

    const dispatch = createEventDispatcher();
</script>

<form on:submit|preventDefault={()=>{console.log("CLOSE");dispatch("close")}}>
<label>Сложность поля</label>
<input type="number" bind:value={difficult}/>
<label>Размеры поля</label>
<input type='number' bind:value={width}/>
<input type='number' bind:value={height}/>
<button type="submit" style="display:none">Пересоздать поле</button>
</form>