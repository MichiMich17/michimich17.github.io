const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/michimich17/wallet-app.git',
  user: {
    name: 'MichiMich17',
    email: 'you@example.com' // указать любой
  },
  dotfiles: true
}, (err) => {
  if (err) {
    console.error('❌ Deployment failed:', err);
  } else {
    console.log('✅ Deployed successfully!');
  }
});