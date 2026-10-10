// Konfigurasi Supabase untuk GitHub Pages (Client-side)
const SUPABASE_URL = 'https://trvszihtgbhkrftycbro.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ak-ShPKYQnMl0uOrbS7pBA_qUpSKDNz';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
