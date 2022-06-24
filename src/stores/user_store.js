import { writable } from 'svelte/store';
import { supabase } from '../supabase.js';

export const user = writable({});

export async function load_users(username, password){
    const { data, error } = await supabase
        .from('auth_user')
        .select('username, permission_edit')
        .eq('username', username)
        .eq('password', password);

    if (error) {
        return console.error(error);
    }

    user.set(data[0]);
    return data ? data[0] : false;
}

export async function add_user(username, password) {
    const { data, error } = await supabase.from('auth_user').insert([{ username, password }]);

    if (error) {
        return console.error(error);
    }
}

export function logout_user() {
    user.set({});
}