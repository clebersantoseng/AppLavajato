'use strict'

const Servico = use('App/Models/Servico')


class ServicoController {
  
  async index ({ request, response, view }) {
    

    const servicos = Servico.all()
    
    return servicos

  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response, params }) {
    const cliente = await cliente.findOrFail(params.id)

    const data = request.only([
      'vehicle',
      'service',
      'price',
    ])

    const servico = await Servico.create({ ...data, clientes_id: cliente })

    return servico
  }

  async show ({ params, request, response, view }) {

    const servico = await Servico.findOrFail(params.id)

    await servico.load('clientes')

    return servico

  }

  async edit ({ params, request, response, view }) {

    const servico = await Servico.findOrFail(params.id)

    const data = request.only([
      'vehicle',
      'service',
      'price',
    ])

    servico.merge(data)

    await servico.save()

    return servico

  }

  async update ({ params, request, response }) {

    const servico = await Servico.findOrFail(params.id)

    const data = request.only([
      'situation'
    ])

    servico.merge(data)

    await servico.save()

    return servico
  }

  async destroy ({ params, request, response }) {

    const servico = await Servico.findOrFail(params.id)

    if (servico.clientes_id !== clientes.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
  
    await servico.delete()
  }
}

module.exports = ServicoController
