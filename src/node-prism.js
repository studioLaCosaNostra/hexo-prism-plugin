'use strict';

const fs = require('fs');
const path = require('path');

const Prism = require('prismjs');
const components = require('prismjs/components/index');
components([
  'c',
  'cpp',
  'clike',
  'ruby',
  'markup',
  'javascript',
  'css',
  'typescript'
])

module.exports = Prism;