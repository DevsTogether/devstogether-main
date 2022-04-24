import exceptionsContants from './exceptions.json';

export function getException(name, options) {
    console.log(exceptionsContants);
    const exception =
        exceptionsContants[name] || exceptionsContants['unrecognized-error'];

    if (options?.originalExcep) {
        Object.defineProperty(
            exception,
            'originalExcep',
            options.originalExcep
        );
    }

    return exception;
}
