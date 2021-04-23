export interface IUserDTO {
    name: string;
    username: string;
    _role: string;
}

export interface ILoginDTO {
    username: string;
    password: string;
}

export interface IRoleDTO {
    _id?: string;
    name: string;
}

export interface IToken {
    idUser: string;
    username: string;
    roleName: string;
}

export interface ITokenDTO {
    access_token: string,
    expires_in: number,
    token_type: string
}

export interface IProductDTO {
    title: string,
    description?: string,
    stock: number,
    price: number,
    img?: string,
    _created_by: string,
}

export interface IProductShopDTO {
    _id: string,
    quantity: number
}

export interface IProductDetail {
    _id: string
    title: string,
    description?: string,
    stock: number,
    price: number,
    img?: string,
}