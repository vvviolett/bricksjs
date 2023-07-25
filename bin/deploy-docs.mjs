// eslint-disable-next-line import/no-unresolved
import fetch from 'node-fetch';
import { execSync } from 'child_process';

let github_token = '';
let github_url = 'https://api.github.com/repos/szchason/bricksjs/dispatches';

try {
  github_token = execSync('npm config get github_token');
} catch (e) {
  throw new Error(e);
}

if (!github_token) {
  throw Error('缺少远程构建token');
}

fetch(github_url, {
  method: 'post',
  body: JSON.stringify({
    event_type: 'deploy',
    client_payload: {},
  }),
  headers: {
    Authorization: github_token,
    Accept: 'application/vnd.github.everest-preview+json',
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err, '<---err');
  });
