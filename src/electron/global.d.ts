// tslint:disable-next-line:no-namespace
declare namespace NodeJS {
    interface Process {
        environment: 'dev' | 'prod';
    }
}
