import { writable } from 'svelte/store';
import { supabase } from '../supabase.js';

export const user = writable({});
export const users_list = writable([]);
export const logged_in = writable(false);

export async function load_users() {
    const { data, error } = await supabase.from('auth_user').select();

    if (error) {
        return console.error(error);
    }
    users_list.set(data);
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
    logged_in.set(true);
    return true
}

export function logout_user() {
    logged_in.set(false);
    user.set({});
}

export async function add_user(param) {
    const { data, error } = await supabase.from('auth_user').insert([{...param}]);
    
    if (error) {
        return console.error(error);
    }

    return users_list.update((cur) => [...cur, data[0]]);
}

export async function update_user(user_i) {
    const { error } = await supabase.from('auth_user').update({
        id: user_i.id,
        username: user_i.username,
        password: user_i.password,
        permission_user_add: user_i.permission_user_add,
        permission_user_edit: user_i.permission_user_edit,
        permission_user_delete: user_i.permission_user_delete,
        permission_authcode_add: user_i.permission_authcode_add,
        permission_authcode_edit: user_i.permission_authcode_edit,
        permission_authcode_delete: user_i.permission_authcode_delete
    }).match({ id: user_i.id });
    if (error) {
        return console.error(error);
    }
    users_list.update((cur) => {
        for (const [index, user_j] of cur.entries()) {
            if (user_j.id === user_i.id) {
                return [
                    ...cur.slice(0, index),
                    {
                        id: user_i.id,
                        username: user_i.username,
                        password: user_i.password,
                        permission_user_add: user_i.permission_user_add,
                        permission_user_edit: user_i.permission_user_edit,
                        permission_user_delete: user_i.permission_user_delete,
                        permission_authcode_add: user_i.permission_authcode_add,
                        permission_authcode_edit: user_i.permission_authcode_edit,
                        permission_authcode_delete: user_i.permission_authcode_delete
                    },
                    ...cur.slice(index + 1)];
            }
        }
        return cur;
    });
}

export async function delete_user(id) {
    const { error } = await supabase.from('auth_user').delete().match({ id });
    if (error) {
        return console.error(error);
    }
    
    users_list.update(cur => {
        for (const [index, user_j] of cur.entries()) {
            if (user_j.id === id) {
                return [
                    ...cur.slice(0, index),
                    ...cur.slice(index + 1)
                ];
            }
        }
        return cur;
    });
}