import { Entity, Column, PrimaryColumn  } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("produtos")
export class Produtos {
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    price: number;
    
    @Column()
    description: string;

    @Column({nullable: true})
    imagepath: string;


    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}