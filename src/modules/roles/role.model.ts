import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {UserRoles} from "./user-roles.model";
import {User} from "../user/user.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'Role', timestamps: false})
export class Role extends Model<Role, RoleCreationAttrs> {
    @Column({type: DataType.INTEGER, primaryKey: true, unique: true, autoIncrement: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @Column({type: DataType.STRING})
    description: string;

    @BelongsToMany(() => User, () => UserRoles )
    users: User[];
}