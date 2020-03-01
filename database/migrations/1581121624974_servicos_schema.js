'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicosSchema extends Schema {
  up () {
    this.create('servicos', (table) => {
      table.increments()
      table
        .integer('clientes_id')
        .unsigned()
        .references('id')
        .inTable('clientes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('vehicle').notNullable()
      table.string('service').notNullable()
      table.decimal('price').notNullable()
      table.boolean('situation').defaultTo(false)   
      table.timestamps()
    })
  }

  down () {
    this.drop('servicos')
  }
}

module.exports = ServicosSchema
