import axios from 'axios';
import { execSync } from 'child_process';

let github_token = '';
let github_url = 'https://api.github.com/repos/szchason/bricksjs/dispatches';

try {
  github_token = execSync('npm config get github_token');
} catch (e) {
  throw new Error(e);
}

if (!github_token) {
  throw Error('缺少github_token');
}

const raw = JSON.stringify({
  event_type: 'deploy',
});

const config = {
  method: 'post',
  url: github_url,
  headers: {
    Accept: 'application/vnd.github.everest-preview+json',
    'Content-Type': 'application/json',
    Authorization: 'Basic OmdocF9sMWhrUVcySUdFVTdOaGh5NEtQQVJhNnBKNjhZTlQxUThvQVM=',
  },
  data: raw,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
