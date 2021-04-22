
import { IToken } from '../../src/data-transfer/dto'
export { }

declare global {
    namespace Express {
        interface Request {
            userToken: IToken
        }
    }
}