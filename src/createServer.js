/* eslint-disable no-console */
'use strict';

const http = require('node:http');
const { parse } = require('querystring');

function createServer() {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');

    let [parts, query] = req.url.split('?');

    parts = parts.split('/').filter(Boolean);
    query = query ? parse(query) : {};

    const response = {
      parts,
      query,
    };

    res.end(JSON.stringify(response));
  });

  return server;
}

module.exports = { createServer };
