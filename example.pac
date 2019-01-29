function FindProxyForURL(url, host) {
    const sites = [
        'rutracker.org',
        'flibusta.is',
        'flibusta.net',
        'telegram.org',
        'linkedin.com',
        'hdrezka.ag',
        'ivbt.ru',
        'tdesktop.com',
        'duosecurity.com',
        'lnkd.in',
    ];

    if (dnsDomainIs(host, '.onion')) {return 'SOCKS 127.0.0.1:9050';}
    if (dnsDomainIs(host, '.i2p')) {return 'PROXY 127.0.0.1:4444';}

    var exist = function(site) {
        return dnsDomainIs(host, site);
    };
    
    if (sites.some(exist)) {return 'SOCKS 127.0.0.1:9050';}

    return 'DIRECT';
}
