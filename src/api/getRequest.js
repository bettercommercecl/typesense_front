import axios from 'axios';

async function TypesenseRequest(query) {
  const typesenseApi = process.env.NEXT_PUBLIC_TYPESENSE_API;

	try {
		const url = `https://typesense.bettercommerce.cl/api/search/search?q=${encodeURIComponent(query)}&collection=products_uf&query_by=title,description,sku,keywords&sort_by=discount_price:desc`
		const response = await axios({
			method: 'get',
			url: url,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})

		return response.data;

	} catch (error) {
		console.log('Fetch error: ', error);
		return null;
	}

}

export default TypesenseRequest