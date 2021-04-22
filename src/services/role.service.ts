import { IRoleDTO } from '../data-transfer/dto';
import roleMapper from '../mapper/RoleMapper.mapper';
import roleRepository from '../repositories/role.repository'

class RoleService {
    async Create(role: IRoleDTO){
        roleRepository.create({ ...role });
    }

    async GetAll(): Promise<IRoleDTO[]>{
        let result = await roleRepository.getAll();

        return result.map(item => roleMapper.toDTO(item));
    }
}

export default new RoleService();