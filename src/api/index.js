   import axios from 'axios';
export async function getWeatherData(endpoint ,  place_id , measurementSystem){

 

const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
   
  place_id ,
    language: 'en',
    units: measurementSystem,
  },
  headers: {
    'x-rapidapi-key': '547ca0c824msh5fac83ca511fd14p129bebjsn8c57a07ee102',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data
} catch (error) {
	throw error; // Re-throw the error to handle it in the context
}
}

export async function searchplaces(text) {

const options = {
  method: 'GET',
  url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
  params: {
    text,
    language: 'en'
  },
  headers: {
    'x-rapidapi-key': '547ca0c824msh5fac83ca511fd14p129bebjsn8c57a07ee102',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
return response.data
} catch (error) {
	console.error(error);
}
}