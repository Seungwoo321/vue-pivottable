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
    { message: 'chore(release): ${nextRelease.version} [skip ci]' }
   ]
  ]
 }
}
