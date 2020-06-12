/*! -*- coding: utf-8 -*- */
'use strict';

/**
 * basic process.exit wrapper
 *
 * @param {Object} options - paramètre avec .code
 * @return {void}
 */
module.exports = function (options = {code: 1}) {
    process.exit(options.code);
};