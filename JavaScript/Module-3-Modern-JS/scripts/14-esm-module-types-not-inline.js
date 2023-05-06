function group() {
    console.log('Export named non-inline (grouped)')
}

function a () {}
function b () {}
function c () {}
function d () {}

function exportDefault() {
    console.log('Export default not-inline')
}

export { group, a, b, c, d }

export default exportDefault