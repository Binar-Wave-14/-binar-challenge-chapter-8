import axios from 'axios'

const baseUrl = 'http://localhost:3000/players'

const getAllPlayers = async () => {
  const request = await axios.get(baseUrl)
  console.log(request)
  return request.data
}

const exportedObject = {
    getAllPlayers,
}

export default exportedObject