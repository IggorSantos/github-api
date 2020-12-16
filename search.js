async function search(){
  const userSearched = document.getElementById('user').value
  const responseUser = await fetch(`https://api.github.com/users/${userSearched}`)
     .then((respostaDoServer) => {
       if(respostaDoServer.ok){
         return respostaDoServer.json()
       }
       else{
         document.getElementById('resName').innerHTML = ("Não encontrado")
         throw new Error("Não encontrado")
       }
     })
     .then((respostaEmObjeto) => respostaEmObjeto)
   document.getElementById('resName').innerHTML = responseUser.login
   document.getElementById('resAvatar').src = responseUser.avatar_url
   document.getElementById('resBio').innerHTML = responseUser.bio

}
