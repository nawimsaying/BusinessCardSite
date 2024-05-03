export class Result<T> {
    private data?: T;
    private exception?: T;

    constructor(data?: T, exception?: T) {
        this.data = data;
        this.exception = exception;
    }

    isSuccess(): boolean {
        return this.data !== undefined;
    }

    static error<T>(exception: T): Result<T> {
        return new Result<T>(undefined, exception);
    }

    static success<T>(data: T): Result<T> {
        return new Result<T>(data);
    }

    getData(): T | undefined {
        return this.data;
    }

    getException(): T | undefined {
        return this.exception;
    }
}