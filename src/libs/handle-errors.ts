import chalk from 'chalk'

function handleError(error: any) {
  console.log(chalk`
  {red ${String(error)}}
`)
  process.exit(1)
}

process.on('uncaughtException', handleError)
process.on('unhandledRejection', handleError)
