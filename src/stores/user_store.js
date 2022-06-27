import { writable } from 'svelte/store';
import { supabase } from '../supabase.js';

export const user = writable({});
export const users_list = writable([]);

export async function load_users() {
    const { data, error } = await supabase.from('auth_user').select();

    if (error) {
        return console.error(error);
    }
    users_list.set(data);
}

export async function add_user(username, password) {
    const { data, error } = await supabase.from('auth_user').insert([{ username, password }]);

    if (error) {
        return console.error(error);
    }
}

export async function login_user(username, password) {
    const { data, error } = await supabase
        .from('auth_user')
        .select()
        .eq('username', username)
        .eq('password', password);

    if (error) {
        return console.error(error);
    }

    user.set(data[0]);
    return true
}

export function logout_user() {
    user.set({});
}