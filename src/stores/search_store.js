import { writable } from 'svelte/store';

export const search_term = writable('');

export const update_searchterm = (term) => {
    search_term.set(term);
}