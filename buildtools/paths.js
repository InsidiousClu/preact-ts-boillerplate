const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../');
const SRC_ROOT = path.resolve(PROJECT_ROOT, 'src');

const ENTRY = path.resolve(SRC_ROOT, 'index.tsx');
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, 'public');
const OUT_DIR = path.resolve(PROJECT_ROOT, 'dist');

module.exports = {
  PROJECT_ROOT,
  SRC_ROOT,
  ENTRY,
  PUBLIC_DIR,
  OUT_DIR,
};
