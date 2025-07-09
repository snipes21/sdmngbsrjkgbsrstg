// 🔇 Suppress typical log output only (DO NOT override stdout.write)
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
            botsPerShard: 200,
            categories: [
                '67c2fd571906bd75e5239684',
                '67c20cf835edd489d48652f8',
                '67c235dd35edd489d4865758',
                '67c303231906bd75e52396a0',
                '67c5a3792304e29c074f501b',
                '67c705f68b5b08c624583716',
                '67d2dbf745b0784baf8cd89a'
            ],
            logLevel: 'NONE'
        });
    }

    async function restartFNLB() {
        // console.log suppressed above — this won't show anything
        await fnlb.stop();
        await startFNLB();
    }

    await startFNLB();
    setInterval(restartFNLB, 3600000);
})();
