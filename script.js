    function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('luz')

// pegar e substituir a imagem
    const image = document.querySelector("#profile img") 

    if(html.classList.contains('luz')) {

        image.setAttribute('src', './assets/avatar-light.png')

    } else{


        image.setAttribute('src', './assets/avatar.png')

    }

// condicional
    // if(html.classList.contains('luz')) {
    //     html.classList.remove('luz')
    // } else{
    //     html.classList.add('luz')
    // }






    }
