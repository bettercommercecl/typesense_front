import axios from 'axios';

async function TypesenseRequest({query,typesenseCollection}) {
  // Base URL definida en `.env` (ej: https://typesense.bettercommerce.cl/api/search)
  const typesenseApi = process.env.NEXT_PUBLIC_TYPESENSE_API?.replace(/\/$/, '');

	try {
		if (!typesenseApi) {
			console.error('Missing NEXT_PUBLIC_TYPESENSE_API in environment');
			return null;
		}

		const url = `${typesenseApi}/search/search2?q=${encodeURIComponent(query)}&collection=${typesenseCollection}&query_by=title,description,sku,keywords&sort_by=_text_match:desc,discount_price:desc`
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