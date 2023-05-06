import { inline } from './14-esm-module-types-inline.js'
import defaultInline from './14-esm-module-types-inline.js' // only 1 per file
import exportDefault, { group, a, b, c, d } from './14-esm-module-types-not-inline.js'
//import exportDefault from './14-esm-module-types-not-inline.js'

inline()
defaultInline()

group()
exportDefault()