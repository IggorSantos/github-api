async function search(){
  const userSearched = document.getElementById('user').value
  if(userSearched === ""){
    document.getElementById('resName').innerHTML = ("Digite um nome")
    document.getElementById('resAvatar').src = ("https://via.placeholder.com/150/771796")
    document.getElementById('resBio').innerHTML = ""
  }else {
    const responseUser = await fetch(`https://api.github.com/users/${userSearched}`)
       .then((respostaDoServer) => {
         if(respostaDoServer.ok){
           return respostaDoServer.json()
         }
         else{
           document.getElementById('resName').innerHTML = ("Não encontrado")
           document.getElementById('resAvatar').src = ("https://via.placeholder.com/150/771796")
           document.getElementById('resBio').innerHTML = ""
           throw new Error("Não encontrado")
         }
       })
       .then((respostaEmObjeto) => respostaEmObjeto)
     document.getElementById('resName').innerHTML = responseUser.login
     document.getElementById('resAvatar').src = responseUser.avatar_url
     document.getElementById('resBio').innerHTML = responseUser.bio
  }
}
