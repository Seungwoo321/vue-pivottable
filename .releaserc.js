module.exports = {
 plugins: [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/npm',
  '@semantic-release/git'
 ],
 release: {
  prepare: [
   '@semantic-release/changelog',
   [
    '@semantic-release/git',
    // eslint-disable-next-line no-template-curly-in-string
    { message: 'chore(release): ${nextRelease.version} [skip ci]' }
   ]
  ]
 }
}
