function validandoSenha(senha) {
 
 if(!(senha.length >= 8)||!(senha.length <= 16)) {
  return false
 }

 if(!senha.match(/\d/)) { 
  return false
 }

 if(!senha.match(/[a-z]/)){
  return false
 }

 if(!senha.match(/[A-Z]/)){
  return false
 }

 if(!senha.match(/[\W_]/)){
  return false
 }

 return true
}

 module.exports =  { validandoSenha }
