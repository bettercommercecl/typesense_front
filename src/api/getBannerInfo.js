import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

console.log('api url:', apiUrl);

async function HomeBannerInfo() {

	try {
		const url = `${apiUrl}.cl/api/showbanner`
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