'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.post('/clientes', 'ClienteController.store')

Route.get('/clientes', 'ClienteController.index')


Route.resource('/clientes', 'ClienteController')
// .apiOnly()
// .middleware('auth')


Route.resource('/servicos', 'ServicoController')
// .apiOnly()
// .middleware('auth')
