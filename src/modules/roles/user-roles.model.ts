import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {Role} from "./role.model";

@Table({tableName: 'userRoles', timestamps: false})
export class UserRoles extends Model<UserRoles> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, allowNull: false, autoIncrement: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    user_id: number

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    role_id: number
}