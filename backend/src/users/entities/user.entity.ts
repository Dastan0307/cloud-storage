import { FileEnity } from 'src/files/entities/file.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @OneToMany(() => FileEnity, (file) => file.user)
  files: FileEnity[];
}
