import {Meteor} from "meteor/meteor";
import {Logger} from 'meteor/ostrio:logger';
import {LoggerFile} from 'meteor/ostrio:loggerfile';
import {LoggerMongo} from "meteor/ostrio:loggermongo";
import {LoggerConsole} from 'meteor/ostrio:loggerconsole';

export const log = new Logger();

new LoggerFile(log).enable();
new LoggerMongo(log).enable();
new LoggerConsole(log).enable();

if (Meteor.isClient) {
    const _globalErrorHandler = window.onerror;
    window.onerror = function(msg, url, line) {
        log.error(msg, {file: url, onLine: line});
        if (_globalErrorHandler)
            _globalErrorHandler.apply(this, arguments);
    }
}

if (Meteor.isServer) {
    const binding = Meteor.bindEnvironment(callback => callback());
    process.on('uncaughtException', function(err) {
        binding(() => {
            log.error('Uncaught server side error', err);
            console.error(err.stack);
            process.exit(7);
        });
    });
    const _meteorDebug = Meteor._debug;
    Meteor._debug = function (message, stack) {
        const err = new Error(message);
        err.stack = stack;
        log.error('Meteor Error:', err);
        return _meteorDebug.apply(this, arguments);
    }
}

export default log;
