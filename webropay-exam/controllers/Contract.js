'use strict';

var utils = require('../utils/writer.js');
var Contract = require('../service/ContractService');

module.exports.addContract = function addContract (req, res, next, body, contractId) {
  Contract.addContract(body, contractId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editContract = function editContract (req, res, next, body, contractId) {
  Contract.editContract(body, contractId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContracts = function getContracts (req, res, next) {
  Contract.getContracts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
