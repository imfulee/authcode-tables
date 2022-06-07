import { writable } from 'svelte/store';
import { supabase } from '../supabase.js';

export const authcodes = writable([]);

export const load_authcode = async() => {
    const { data, error } = await supabase.from('authcode_table').select();
    if (error) {
        return console.error(error);
    }
    authcodes.set(data);
}
load_authcode();

export async function add_authcode(product_name, system_num, auth_num, company_name, auth_start_date, auth_end_date, system_name, case_name, remarks) {
    let created_at = null;
    const { data, error } = await supabase.from('authcode_table').insert([{ created_at, product_name, system_num, auth_num, company_name, auth_start_date, auth_end_date, system_name, case_name, remarks }]);

    if (error) {
        return console.error(error);
    }

    return authcodes.update((cur) => [...cur, data[0]]);
}

export async function edit_authcode(id, created_at, product_name, system_num, auth_num, company_name, auth_start_date, auth_end_date, system_name, case_name, remarks) {
    const { error } = await supabase.from('authcode_table').update({
        created_at,
        product_name,
        system_num,
        auth_num,
        company_name,
        auth_start_date,
        auth_end_date,
        system_name,
        case_name, 
        remarks
    }).match({ id });
    if (error) {
        return console.error(error);
    }
    return authcodes.update((cur) => {
        for (let i = 0; i < cur.length; i++) {
            if (cur[i].id === id) {
                return [...cur.slice(0, i), { created_at,
                    product_name, system_num, auth_num, company_name, auth_start_date,
                    auth_end_date, system_name, case_name, remarks, id: id
                }, ...cur.slice(i + 1)];
            } else {
                return cur;
            }
        }
    })
}

export const delete_authcode = async(id) => {
    const { error } = await supabase.from('authcode_table').delete().match({ id });
    if (error) {
        return console.error(error);
    }
    function filtering(codes, cid) {
        return codes.filter(code => code.id !== cid);
    }
    authcodes.update(authcodes => filtering(authcodes, id));
}

