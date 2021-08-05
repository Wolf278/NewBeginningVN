
export class Promisable {
    constructor() {
        this.refresh();
    }
    refresh() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    async reusable() {
        const result = await this.promise;
        this.refresh();
        return result;
    }
}
