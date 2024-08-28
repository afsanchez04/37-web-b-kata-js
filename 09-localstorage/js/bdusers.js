let usuarios = [
    {nombre: 'mali', saldo: '500', pass: '123'},
    {nombre: 'gera', saldo: '300', pass: '456'},
    {nombre: 'maui', saldo: '600', pass: '789'}
]

localStorage.setItem('usuarios',JSON.stringify(usuarios) )