function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

// allow using this test file as a util
test.skip('skip', () => { })

module.exports = flushPromises;
