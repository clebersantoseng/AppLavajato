'use strict'

const Cliente = use('App/Models/Cliente')

class ClienteController {

  async index ({ request, response, view }) {

    const clientes = Cliente.all()
      
      

    return clientes

  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {

    const data =  request.only([
      'name',
      'cpf',
      'tel',
      'whatsapp',
      'address'
    ])

    const cliente = await Cliente.create({ ...data })

    return cliente
  }

  async show ({ params, request, response, view }) {

    const cliente = await Cliente.findOrFail(params.id)

    await cliente.load('servicos')

    return cliente

  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {

    const cliente = await Cliente.findOrFail(params.id)

    const data = request.only([
      'name',
      'cpf',
      'tel',
      'whatsapp',
      'address'
    ])

    cliente.merge(data)

    await cliente.save()

    return cliente

  }

  async destroy ({ params, request, response }) {

    const cliente = await Cliente.findOrFail(params.id)

    await cliente.delete()

  }
}

module.exports = ClienteController
