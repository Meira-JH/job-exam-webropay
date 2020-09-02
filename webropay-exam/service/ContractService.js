"use strict";

const db = require("../database");

// async function destroyConnection() {
//   if(connection){
//       await connection.destroy();
//       connection = null;
//   }
// }

/**
 * Adds a contract to the Webropay repository
 *
 * body Contract
 * contractId String ID of the contract to be added
 * returns Contract
 **/
exports.addContract = function (body) {
  return new Promise(function (resolve, reject) {
    db.from("contracts")
      .insert({
        description: body.description,
        status: body.status,
      })
      .then(function () {
        resolve();
      });
  });
};

/**
 * Edit contract
 *
 * body Contract Edited contract object
 * contractId String ID of the contract to be edited
 * no response value expected for this operation
 **/
exports.editContract = function (body, contractId) {
  return new Promise(function (resolve, reject) {
    db.from("contracts")
      .where({ id: contractId })
      .update({
        description: body.description,
        status: body.status,
      })
      .then(function () {
        resolve();
      });
  });
};

/**
 * Get a list of all contracts
 *
 * returns List
 **/
exports.getContracts = async function () {
  return await db
    .select("*")
    .from("contracts")
    .orderBy('id')
};
