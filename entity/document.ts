import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { storeControl } from '../store';

export interface IDocumentRedis {
    id: number;
    authorId: number;
    content: string;
    title: string;
    clickCount: number;
    createdDate: string;
    updatedDate: string;
}

@Index([ 'authorId' ])
@Entity()
export class Document {

    public static store = storeControl<IDocumentRedis, Document>({
        entity: Document,
        indexField: [ 'title' ],
        multiIndexField: [ 'authorId' ],
        convert: o => {
            o.id = Number(o.id);
            o.authorId = Number(o.authorId);
            o.clickCount = Number(o.clickCount);
            return o;
        },
    });

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public authorId!: number;

    @Column({ default: 0 })
    public clickCount!: number;

    @Column()
    public title!: string;

    @Column({ type: 'text' })
    public content!: string;

    @CreateDateColumn()
    public createdDate!: Date;

    @UpdateDateColumn()
    public updatedDate!: Date;
}
