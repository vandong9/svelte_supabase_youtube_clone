// import { supabase } from '$lib/clients/supabase-client';

// export async function load() {
// 	const { data } = await supabase.from('countries').select();
// 	return {
// 		countries: data ?? []
// 	};
// }

export async function load() {
	const data = {"countries" : [{
		name: "hi"
	}]}

	return {
		countries: data
	}
}

