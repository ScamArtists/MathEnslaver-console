const argv = require('minimist')(process.argv.slice(2), {alias: {h: 'help'}})

if (argv.h) {
  console.log('MathEnslaver-console')
  console.log('This help message is currently in development.')
  process.exit(0)
}
