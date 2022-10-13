# Meteor Logging

Simple logging wrapper of the [ostrio:logger](https://github.com/VeliovGroup/Meteor-logger) packages.

## Installation

Add the package to your project:
```shell
meteor add xerdi:logging
```

## Usage

The interface is the same as of the `ostrio:logger`'s interface.
```javascript
import log from 'meteor/xerdi:logging';
// OR
import {log} from 'meteor/xerdi:logging';

function launchMissile(dir) {
    log.info(`Launching missile in direction ${dir}`);
    try {
        // The code
    } catch(err) {
        log.error('Failed to launch missile', err);
    }
}
```
