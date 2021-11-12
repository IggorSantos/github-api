async function search(){
  const userSearched = document.getElementById('user').value
  let responseJson = ''
  if(userSearched === ""){
    document.getElementById('resName').innerHTML = ("Digite um nome")
    document.getElementById('resAvatar').src = ("https://via.placeholder.com/150/771796")
    document.getElementById('resBio').innerHTML = ""
  }else {
    const responseUser = await fetch(`https://api.github.com/users/${userSearched}`)
    if(responseUser.ok){
           responseJson = await responseUser.json()
         }
         else{
           document.getElementById('resName').innerHTML = ("Não encontrado")
           document.getElementById('resAvatar').src = ("https://via.placeholder.com/150/771796")
           document.getElementById('resBio').innerHTML = ""
           throw new Error("Não encontrado")
         }
     document.getElementById('resName').innerHTML = responseJson.login
     document.getElementById('resAvatar').src = responseJson.avatar_url
     document.getElementById('resBio').innerHTML = responseJson.bio
  }
}
