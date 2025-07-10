
console.log = () => {};
console.error = () => {};
console.warn = () => {};

(async () => {
    const FNLB = await import('fnlb');
    const fnlb = new FNLB.default();

    async function startFNLB() {
        await fnlb.start({
            apiToken: 'FNLB_Z8IF5--M5T5Q5GlIXDb1qnUBDq6WP1oo0C2tPyPYdj7XcJja4v0bcNzbk68.ZNEB8PklBkyoNngMRmw_UQ',
            numberOfShards: 1,
            botsPerShard: 30,
            categories: [
                '67c5afb82304e29c074f5077'
            ],
            logLevel: 'NONE'
        });
    }

    async function restartFNLB() {
    
        await fnlb.stop();
        await startFNLB();
    }

    await startFNLB();
    setInterval(restartFNLB, 3600000);
})();
