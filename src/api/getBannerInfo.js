import axios from 'axios';

async function HomeBannerInfo(apiUrl) {

	try {
		const url = `${apiUrl}/showbanner`
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
	}

}

export default HomeBannerInfo