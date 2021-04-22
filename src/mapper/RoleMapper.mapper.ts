import { IRoleDTO } from "../data-transfer/dto";

class RoleMapper{
    static toDTO(data: any): IRoleDTO{
        let result: IRoleDTO = {
            _id: data._id,
            name: data.name
        }

        return result;
    }
}

export default RoleMapper;