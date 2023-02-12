import { supabase } from '$lib/database/supabaseClient';

export async function load() {
	const { data } = await supabase.from('countries').select();
	return {
		countries: data ?? []
	};
}
