import { createClient } from '@supabase/supabase-js';

const url: string = process.env.SUPABASE_URL ?? "";
const anonPublicKey: string = process.env.SUPABASE_ANON_PUBLIC_KEY ?? "";

export default createClient(url, anonPublicKey);