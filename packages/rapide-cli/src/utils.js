import fs from 'node:fs'
import path from 'node:path'

export const formatTargetDir = (targetDir) =>
  targetDir?.trim().replace(/\/+$/g, '')

export const isEmpty = (path) => {
  const files = fs.readdirSync(path)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

export const isValidPackageName = (projectName) => {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
    projectName
  )
}

export const toValidPackageName = (projectName) => {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z\d\-~]+/g, '-')
}

export const emptyDir = (dir) => {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    if (file === '.git') {
      continue
    }
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}

export const pkgFromUserAgent = (userAgent) => {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  }
}

export const copyDir = (dir, dest) => {
  fs.mkdirSync(dest, { recursive: true })
  for (const file of fs.readdirSync(dir)) {
    const srcFile = path.resolve(dir, file)
    const destFile = path.resolve(dest, file)
    copy(srcFile, destFile)
  }
}

export const copy = (src, dest) => {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

export const editFile = (file, callback) => {
  const content = fs.readFileSync(file, 'utf-8')
  fs.writeFileSync(file, callback(content), 'utf-8')
}
