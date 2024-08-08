import { faker } from "@faker-js/faker";
import { Product } from "models/product";
import { Factory } from "rosie";

export const ProductFactory = new Factory<Product>()
  .attr("id", faker.number.int({ min: 10, max: 100 }))
  .attr("name", faker.commerce.productName())
  .attr("description", faker.commerce.productDescription())
  .attr("stock", faker.number.int({ min: 10, max: 100 }))
  .attr("price", +faker.commerce.price());
