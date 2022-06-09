module.exports = {
  extends: ["@commitlint/config-angular"],
  rules: {
    "scope-case": [0],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      ["build", "chore", "docs", "feat", "fix", "perf", "refactor", "test"],
    ],
  },
}
