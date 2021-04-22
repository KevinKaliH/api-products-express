export default class RespDTO {
    constructor(public isOk?: boolean, public message?: string, public status?: number, public data?: any){
        this.isOk = isOk || false;
        this.status = status || 0;
        this.message = message || '';
        this.data = data || null;
    }
}
