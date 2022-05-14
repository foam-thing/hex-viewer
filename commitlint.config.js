/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('[skip:commitlint]')],
  rules: {
    'type-case': [2, 'always', 'pascal-case'],
    'type-enum': [
      2,
      'always',
      [
        // MAJOR <major>.minor.patch
        'Major',
        'Breaking',
        // MINOR major.<minor>.patch
        'Minor',
        'Feat',
        'Feature',
        'New',
        'Update',
        // PATCH major.minor.<patch>
        'Patch',
        'Fix',
        'Build',
        'Maint',
        'Maintenance',
        // NO-OP
        'Chore',
        'Docs',
      ],
    ],
  },
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
