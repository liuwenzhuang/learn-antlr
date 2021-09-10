/**
 * @fileoverview
 * generate code files from grammar file for specified directory
 */

const process = require('process')
const path = require('path')
const fsPromise = require('fs/promises')
const { spawn } = require('child_process')

const argv = process.argv

/**
 * 根据 g4 文件生成 ANTLR 的文件
 * @param {*} argv
 */
async function generateANTLRCode(argv) {
  if (argv.length < 3) {
    console.error('usage: yarn generate [path | directoryName] [antlr4Options]')
    process.exit(1)
  }

  let topPath = argv[2].trim()

  const fullPath = path.join(__dirname, '..', topPath)
  const files = await fsPromise.readdir(fullPath)
  const firstG4File = files.find((file) => file.endsWith('.g4'))

  const ANTLRDirPath = path.join(fullPath, './ANTLR')
  try {
    await fsPromise.lstat(ANTLRDirPath)
    await fsPromise.rm(ANTLRDirPath, {
      recursive: true,
      force: true,
    })
  } catch (err) {
    // ignore err
  }

  const antlr4ts = spawn(
    path.resolve('C:\\Program Files\\nodejs\\npx.cmd'),
    ['antlr4ts', ...argv.slice(3), firstG4File, '-o', './ANTLR'],
    {
      cwd: fullPath,
    }
  )

  antlr4ts.stderr.on('data', (buf) => console.error(buf.toString()))
  antlr4ts.stdout.on('data', (buf) => console.log(buf.toString()))
}

generateANTLRCode(argv)
