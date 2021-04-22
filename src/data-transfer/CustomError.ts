
export default class CustomError extends Error{

    public status: number;
    public message: string;
    public isOk: boolean

    constructor(data: ICustomError){
        super(data.message);

        this.status = data.status ?? 400;
        this.message = data.message ?? "";
        this.isOk = data.isOk ?? false;

        // this.status = status ?? 400;
        // this.error = error ?? null;
        // this.isOk = isOk ?? false;
    }
}

interface ICustomError{
    status?: number;
    message: string;
    isOk?: boolean;
}