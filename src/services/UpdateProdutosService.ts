import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

type ProdutosUpdateRequest = {
    id: string;
    name: string;
    price: number,
    description: string;
};

export class UpdateProdutosService {
    async execute({id, name, price, description }: ProdutosUpdateRequest) {
        const repo = getRepository(Produtos);

        const produtos = await repo.findOne(id);

        if(!produtos) {
            return new Error("Produto nao existe");
        }

        produtos.name = name ? name : produtos.name;
        produtos.price = price ? price : produtos.price;
        produtos.description = description ? description : produtos.description;

        await repo.save(produtos);

        return produtos;
    }
}
