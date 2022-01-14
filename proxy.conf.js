const PROXY_CONFIG = [
    {
        context: [
            'ticker',
            'tobtc'
        ],
        target: "https://blockchain.info",
        secure: false
    }
]

module.exports = PROXY_CONFIG;