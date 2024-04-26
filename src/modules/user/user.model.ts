import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/role.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    username: string;
    password: string;
}

@Table({tableName: 'User'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, allowNull: false, autoIncrement: true})
    id: number

    @Column({type:DataType.STRING, unique: true, allowNull: false})
    email:string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @Column({type: DataType.STRING})
    password: string;

    @BelongsToMany(() => Role, () => UserRoles )
    roles: Role[];

}