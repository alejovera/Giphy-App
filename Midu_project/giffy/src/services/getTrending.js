const apiKey = 'haBgmq1r8NDYTm7LU5cugxg7v5VbsteZ'


const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  return data
}

export default function getTrending ({limit = 15, keyword = 'morty'} = {}) {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=G&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}