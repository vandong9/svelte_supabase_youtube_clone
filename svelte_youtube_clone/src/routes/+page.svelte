<script lang="ts">
	let data = {
		countries: [
			{
				name: 'hi'
			}
		]
	};
	let { countries } = data;
	$: ({ countries } = data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<ul>
	{#each countries as country}
		<li>{country.name}</li>
	{/each}
</ul>

<style lang="postcss">
</style>
