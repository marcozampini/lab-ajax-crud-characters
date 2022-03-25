class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
  }

  async getFullList() {
    try {
      const response = await axios({
        method: 'get',
        url: '/characters',
        baseURL: this.BASE_URL,
        params: {},
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getOneRegister(characterId) {
    try {
      const response = await axios({
        method: 'get',
        url: `/characters/${characterId}`,
        baseURL: this.BASE_URL,
        params: {},
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async createOneRegister(data) {
    try {
      const response = await axios({
        method: 'post',
        url: `/characters/`,
        baseURL: this.BASE_URL,
        data: data,
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async updateOneRegister(data) {
    try {
      const response = await axios({
        method: 'post',
        url: `/characters/${data.id}`,
        baseURL: this.BASE_URL,
        data: data,
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async deleteOneRegister(characterId) {
    try {
      const response = await axios({
        method: 'delete',
        url: `/characters/${characterId}`,
        baseURL: this.BASE_URL,
        params: {},
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
