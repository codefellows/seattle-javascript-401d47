'use strict';

class modelInterface {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      //query to the database
      // this will be a row in a database
      let instance = await this.model.create(json);
      return instance;
    } catch (err) {
      console.error(err);
      return err;
    }

  }

  async readOne(id) {
    try {
      // if you run into type issues 
      // let idNum = parseInt(id);
      let oneInstance = await this.model.findOne({where: { id }});
      return oneInstance;
    } catch(err){
      console.error(err);
      return err;
    }

  }

  async readAll() {
    try {
      let allInstances = await this.model.findAll();
      return allInstances;
    } catch(err){
      console.error(err);
      return err;
    }
  }

  // not required in lab, but COOOOOOL
  async readWithRelations(id, options) {
    try {
      let query = {where: { id }, ...options };
      let result = await this.model.findOne(query);
      return result;
    } catch(err){
      console.error(err);
      return err;
    }
  }

  update(id) {
    try {
      // do the thing
    } catch(err){
      console.error(err);
      return err;
    }
  }

  async delete(id) {
    try {
      let deletedInstance = await this.model.findOne({where: { id }});

      await this.model.destroy({where: { id }});
      return deletedInstance;
    } catch(err){
      console.error(err);
      return err;
    }
  }
}

module.exports = modelInterface;
