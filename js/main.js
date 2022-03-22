const ativo = document.querySelector('.navigation-menu')
const menu = document.querySelector('.header-align')

menu.addEventListener('click', function () {
  ativo.classList.toggle('active')
})
//======= ----api---- ========== //

async function getContent() {
  try {
    const response = await fetch('http://localhost:3110/')
    //console.log(response)

    const data = await response.json()
    //console.log(data)
    show(data)
  } catch (error) {
    console.log('algo deu errado')
  }
}
getContent()

const meuGit = 'Veja meus respositórios no GitHub'

function show(data) {
  let output = ''
  output += `<img src="${data.avatar_url}">`
  output += `<h3>${data.name}</h3>`
  output += `<p>${data.bio}</p>`

  output += `<p>${meuGit}</p>`

  output += `<button><a href="${data.html_url}" target="blank">Clique aqui</a></button>`

  document.querySelector('#sobre .github').innerHTML = output
}
