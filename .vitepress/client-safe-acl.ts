import { pathToFileURL } from 'node:url';

/** Read ACLs safe to ship in the client bundle. `settings` is get-settings, not `editSettings`. */
export const CLIENT_SAFE_ACLS = new Set(['search', 'listIndexes', 'settings']);

export function isClientSafeSearchAcl(acl: unknown): boolean {
  return (
    Array.isArray(acl) &&
    acl.includes('search') &&
    acl.every((entry) => typeof entry === 'string' && CLIENT_SAFE_ACLS.has(entry))
  );
}

function selfCheck() {
  const cases: Array<[unknown, boolean]> = [
    [['search'], true],
    [['search', 'listIndexes', 'settings'], true],
    [['settings', 'listIndexes', 'search'], true],
    [['listIndexes', 'settings'], false],
    [['search', 'addObject'], false],
    [['search', 'deleteObject'], false],
    [['search', 'deleteIndex'], false],
    [['search', 'editSettings'], false],
    [['search', 'browse'], false],
    [['search', 'seeUnretrievableAttributes'], false],
    [[], false],
    [null, false],
    ['search', false],
  ];

  for (const [acl, expected] of cases) {
    if (isClientSafeSearchAcl(acl) !== expected) {
      throw new Error(`client-safe ACL check failed for ${JSON.stringify(acl)}`);
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  selfCheck();
  console.log('client-safe ACL checks passed');
}
