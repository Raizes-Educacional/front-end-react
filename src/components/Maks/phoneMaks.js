export const phoneMaks = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '($1)$2') 
      .replace(/(\d{5})(\d{4})/, '$1-$2')
  }
  //96938-6808