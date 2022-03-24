const ativo = document.querySelector('.navigation-menu')
const menu = document.querySelector('.header-align')

menu.addEventListener('click', function () {
  ativo.classList.toggle('active')
})
//======= ----menu ativo---- ========== //

const li = document.querySelectorAll('.link')
const sec = document.querySelectorAll('section')

function menuAtivo() {
  let len = sec.length
  while (--len && window.scrollY + 10 < sec[len].offsetTop) {}
  li.forEach(ltx => ltx.classList.remove('ativo'))
  li[len].classList.add('ativo')
}
menuAtivo()
window.addEventListener('scroll', menuAtivo)

//======= ----api---- ========== //

async function getContent() {
  try {
    const response = await fetch(
      'https://api.github.com/users/WellingtonOkabayashi'
    )
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
  output += `<h2 class="title" >Meu GitHub</h2>`
  output += `<img src="${data.avatar_url}">`
  output += `<h3>${data.name}</h3>`
  output += `<p>${data.bio}</p>`
  output += `<p>${meuGit}</p>`

  output += `<button><a href="${data.html_url}" target="blank">Clique aqui</a></button>`

  document.querySelector('#sobre .github').innerHTML = output
}
