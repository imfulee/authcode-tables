import { writable } from 'svelte/store';

export const search_term = writable('');
export const searching = writable(false);

export const update_searchterm = (term) => {
    search_term.set(term);
}

export const search_toggle = (term) => {
    if (term === ''){
        searching.set(false);
    } else {
        searching.set(true);
    } 
}