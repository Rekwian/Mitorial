module.exports = {
  dest: 'output',
  files: 'mito/**',
  options: {
    vue: {
      api: 'composition',
      typescript: true,
    },
    vue2: {
      typescript: true,
    },
    vue3: {
      api: 'composition',
      typescript: true,
    },
  },
  targets: ['vue', 'vue2'],
};