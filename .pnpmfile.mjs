/**
 * Typedoc 0.28 doesn't support TypeScript 7 yet, so it gets its own TypeScript 6 while the repo
 * builds with 7.
 */
function readPackage(pkg) {
  if (pkg.name === 'typedoc' && pkg.peerDependencies?.typescript) {
    delete pkg.peerDependencies.typescript
    pkg.dependencies = { ...pkg.dependencies, typescript: '^6.0.3' }
  }
  return pkg
}

export const hooks = { readPackage }
