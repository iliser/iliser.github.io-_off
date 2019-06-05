import {writable} from 'svelte/store'

export const settings = writable({
    width:sessionStorage.getItem('width') || 8,
	height:sessionStorage.getItem('height') || 8,
    difficult:sessionStorage.getItem('difficult') || 1,
});