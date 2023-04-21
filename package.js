Package.describe({
    name: 'xerdi:logging',
    version: '0.0.4',
    summary: 'Bundle of the ostrio logger packages',
    git: 'https://github.com/Xerdi/meteor-logging.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.11.0');
    api.use([
        'meteor',
        'ecmascript',
        'ostrio:logger@2.1.1',
        'ostrio:loggerfile@2.1.0',
        'ostrio:loggermongo@2.1.0',
        'ostrio:loggerconsole@2.1.0'
    ]);
    api.mainModule('index.js');
});
