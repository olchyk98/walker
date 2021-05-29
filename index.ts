import {
  any,
  curry,
  filter,
  flatten,
  includes,
  isEmpty,
  map,
} from 'ramda'
import path from 'path'
import fs from 'fs-extra'

const isFilteredFile = curry((filters: string[], file: string): boolean => {
  return any((f) => includes(f, file), filters)
})

function filterFiles (files: string[], filters: string[]) {
  if(isEmpty(filters)) return files
  return filter(isFilteredFile(filters), files)
}

async function getFiles (dirPath: string): Promise<string[]> {
  // Folder may contain any kinds of entities.
  // For example, links, folders or files.
  const entities: string[] = await fs.readdir(dirPath)

  const files: (string | string[])[] = await Promise.all(
    map(async (e) => {
      const entityPath: string = path.resolve(dirPath, e)
      const entityStats: fs.Stats = await fs.stat(entityPath)

      return entityStats.isDirectory()
        ? getFiles(entityPath) // Resolves a nested folder.
        : entityPath // Returns a file.
    }, entities)
  )

  // Because this algorithm is recursive, it may
  // produce nested arrays that need to be
  // flattened before the export.
  return flatten(files)
}

async function walk (path: string, matches: string[] = [], doResolve = false): Promise<Array<string | NodeModule>> {
  const files = await getFiles(path)
  const filteredFiles = filterFiles(files, matches)

  return doResolve
    ? map(require, filteredFiles)
    : filteredFiles
}

export default walk
