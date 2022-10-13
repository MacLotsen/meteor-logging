Package.describe({
    name: 'xerdi:logging',
    version: '0.0.1',
    summary: 'Bundle of the ostrio logger packages',
    git: 'https://github.com/MacLotsen/meteor-logging.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'ecmascript',
        'meteor',
        'ostrio:logger',
        'ostrio:loggerfile',
        'ostrio:loggermongo',
        'ostrio:loggerconsole'
    ]);
    api.mainModule('index.js');
});
