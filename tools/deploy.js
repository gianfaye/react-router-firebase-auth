import push from 'git-push';

const remote = {
  name: 'production',
  url: 'http://github.com/gianfaye/react-router-firebase-auth',
  branch: 'gh-pages'
};

export default async () => {
  await require('./build')();
  await new Promise(resolve => push('./build', remote, resolve));
});