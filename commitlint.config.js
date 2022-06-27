/* eslint-disable no-undef */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 主要目的是修改项目构建系统(例如 gulp，webpack，rollup 的配置等)的提交
        'chore', // 其他修改, 比如构建流程, 依赖管理
        'ci', // 主要目的是修改项目继续集成流程(如Travis，Jenkins，GitLab CI，Circle等)
        'docs', // 文档更新
        'feat', // 新功能
        'fix', // 修复 bug
        'perf', // 性能优化
        'refactor', // 重构代码(既没有新增功能，也没有修复bug)
        'revert', // 回滚某个更早之前的提交
        'style', // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
        'test', // 测试
      ],
    ],
    'subject-case': [0],
  },
};
