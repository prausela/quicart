import { ShopTile } from "./tile";
import { TILE_TYPE } from "./tileType";

export class ShelfTile extends ShopTile {
    constructor(row, column, name, products) {
        super(TILE_TYPE.SHELF, row, column);
        this.name = name;
        this.products = products;
    }
}