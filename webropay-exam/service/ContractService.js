"use strict";

const db = require("../database");

/**
 * Adds a contract to the Webropay repository
 *
 * body Contract
 * contractId String ID of the contract to be added
 * returns Contract
 **/
exports.addContract = async function (body) {
  return await db
      .insert({
        description: body.description,
        status: body.status,
      })
      .into("contracts")
};

/**
 * Edit contract
 *
 * body Contract Edited contract object
 * contractId String ID of the contract to be edited
 * no response value expected for this operation
 **/
exports.editContract = async function (body, contractId) {
  return await db.from("contracts")
      .where({ id: contractId })
      .update({
        description: body.description,
        status: body.status,
      })
      .then(function () {
        resolve();
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