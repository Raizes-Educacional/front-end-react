export const cepMask = value => {
    return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
  }