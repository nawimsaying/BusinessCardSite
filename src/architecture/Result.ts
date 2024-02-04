export class Result<T> {
    private data?: T;
    private exception?: string;

    constructor(data?: T, exception?: string) {
        this.data = data;
        this.exception = exception;
    }

    isSuccess(): boolean {
        return this.data !== undefined;
    }

    static error<T>(exception: string): Result<T> {
        return new Result<T>(undefined, exception);
    }

    static success<T>(data: T): Result<T> {
        return new Result<T>(data);
    }

    getData(): T | undefined {
        return this.data;
    }

    getException(): string | undefined {
        return this.exception;
    }
}