import { UserEntity } from 'src/users/entities/user.entity'
import { Column, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('files')
export class FileEnity {
	@PrimaryGeneratedColumn()
    id: number;

	@Column()
	fullname: string; 

	@Column() 
	originalName: string; 

	@Column() 
    size: number;

	@Column()
	mimetype: string;

	@ManyToMany(() => UserEntity, (user) => user.files)
	user: UserEntity;

	@DeleteDateColumn()
	deleteAt?: Date;
}
