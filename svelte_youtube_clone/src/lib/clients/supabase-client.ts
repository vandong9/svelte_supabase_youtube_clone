import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const supabase: SupabaseClient = createClient(
	'https://dqcmpwpikkedrhdfijal.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxY21wd3Bpa2tlZHJoZGZpamFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwMDM4MjUsImV4cCI6MTk5MTU3OTgyNX0.ZZJ0D5DEENWjZ87jgAVA9UI_q-8LsSAvZ875ltZ2Tl8'
);
