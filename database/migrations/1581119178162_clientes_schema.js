'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientesSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('cpf').notNullable()
      table.string('tel').notNullable()
      table.string('whatsapp').notNullable()
      table.string('address').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClientesSchema
