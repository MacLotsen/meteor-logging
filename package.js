Package.describe({
    name: 'xerdi:logging',
    version: '0.0.2',
    summary: 'Bundle of the ostrio logger packages',
    git: 'https://github.com/MacLotsen/meteor-logging.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'ecmascript@0.16.2',
        'meteor',
        'ostrio:logger@2.1.1',
        'ostrio:loggerfile@2.1.0',
        'ostrio:loggermongo@2.1.0',
        'ostrio:loggerconsole@2.1.0'
    ]);
    api.mainModule('index.js');
});
