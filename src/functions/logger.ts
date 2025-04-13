import ck from 'chalk';

function success(msg: string) {
    return console.log(ck.greenBright(`✓ ${msg}`));
};

function error(msg: string) {
    return console.log(ck.redBright(`✘ ${msg}`));
};

export const logger = {
    success,
    error
}