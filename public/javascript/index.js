const charactersAPI = new APIHandler('http://localhost:8000')

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', async function (event) {
      const charactersList = await charactersAPI.getFullList()
      console.log('list', charactersList)
    })

  document
    .getElementById('fetch-one')
    .addEventListener('click', async function (event) {
      const characterId = this.previousElementSibling.value
      const character = await charactersAPI.getOneRegister(characterId)
      console.log('character', character)
    })

  document
    .getElementById('delete-one')
    .addEventListener('click', async function (event) {
      const characterId = this.previousElementSibling.value
      const character = await charactersAPI.deleteOneRegister(characterId)
      console.log('character', character)
    })

  document
    .getElementById('edit-character-form')
    .addEventListener('submit', async function (event) {
      event.preventDefault()
      const form = this
      const data = Object.fromEntries(new FormData(form).entries())
      await charactersAPI.createOneRegister(data)
      console.log('character data', data)
    })

  document
    .getElementById('new-character-form')
    .addEventListener('submit', async function (event) {
      event.preventDefault()
      const form = this
      const data = Object.fromEntries(new FormData(form).entries())
      await charactersAPI.createOneRegister(data)
      console.log('character data', data)
    })
})
