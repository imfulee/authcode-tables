import { createClient } from '@supabase/supabase-js';

const supabase_url = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabase_anonkey = import.meta.env.VITE_PUBLIC_SUPABASE_ANONKEY;

export const supabase = createClient(supabase_url, supabase_anonkey);