'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Cliente extends Model {

    servico () {
        return this.hasMany('App/Models/Servico')
      }
}

module.exports = Cliente
