import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { storeControlORM } from '../store';
 
@Index([ 'authorId' ])
@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id!: number;
 
    @Column()
    authorId!: number;
 
    @Column()
    clickCount!: number;
 
    @Column()
    title!: string;
 
    @Column({ type: 'text' })
    content!: string;
 
    @CreateDateColumn()
    createdDate!: Date;
 
    @UpdateDateColumn()
    updatedDate!: Date;
 
    static store = storeControlORM({
        entity: Document,
        multiIndexField: [ 'authorId' ],
    });
}
 