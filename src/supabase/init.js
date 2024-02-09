import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sffjhevuvfdobfclxaup.supabase.co';
const supabaseKey  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZmpoZXZ1dmZkb2JmY2x4YXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDE1ODQsImV4cCI6MjAyMjg3NzU4NH0.a_ysJh9Z_w85htPTQrxHDg9p-NmMMJaZEMtpeKKai6A';

export const supabase = createClient(supabaseUrl, supabaseKey )