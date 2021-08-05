/* eslint-disable prettier/prettier */
/* eslint-disable import/no-mutable-exports */
import path from 'path';
import os from 'os';

let serializePath = '';

if (process.platform === 'win32') {
  serializePath = path.join(os.homedir(), '/AppData/Local/EIS/serialize');
}
if (process.platform === 'linux') {
  serializePath = path.join(os.homedir(), '/EIS/serialize');
}

export default serializePath;
