import {
  Button,
  ButtonIcon,
  Input,
  Pagination,
  Select,
  Switch,
  Text,
  Upload,
} from "components/atoms";
import { FormInput, Modal } from "components/molecules";
import Table, { ColumnDefinitionType } from "components/molecules/Table";

async function getProducts() {
  const products = await fetch(`https://dummyjson.com/products?limit=5`);
  return products.json();
}

interface Cat {
  name: string;
  age: number;
  gender: string;
  color: string;
  activityLevel?: string; // optional, same as string | undefined
  favoriteFood?: string; // optional, same as string | undefined
}

const columns: ColumnDefinitionType<Cat, keyof Cat>[] = [
  {
    key: "name",
    title: "Name",
    width: 150,
  },
  {
    key: "age",
    title: "Age",
    width: 150,
  },
  {
    key: "gender",
    title: "Gender",
    width: 150,
  },
];

const data: Cat[] = [
  {
    name: "Mittens",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "hight",
    favoriteFood: "milk",
  },
  {
    name: "Mons",
    color: "grey",
    age: 2,
    gender: "male",
    favoriteFood: "old socks",
    activityLevel: "medium",
  },
  {
    name: "Luna",
    color: "black",
    age: 2,
    gender: "female",
    activityLevel: "medium",
    favoriteFood: "fish",
  },
  {
    name: "Bella",
    color: "grey",
    age: 1,
    gender: "female",
    activityLevel: "high",
    favoriteFood: "mice",
  },
  {
    name: "Oliver",
    color: "orange",
    age: 1,
    gender: "male",
    activityLevel: "low",
    favoriteFood: "fish",
  },
];

export default async function () {
  const { products } = await getProducts();

  console.log(products);
  return (
    <div>
      <Button type="secondary" />
      <ButtonIcon type="secondary" />
      <Input placeholder="Placehodler" />
      <Text>Text</Text>
      <Switch />
      <br />
      <FormInput inputType="input" />
      <FormInput inputType="switch" />
      <FormInput>
        <Select
          options={[{ id: 1, label: "Opt 1", value: "Opt 1" }]}
          width={167}
        />
      </FormInput>
      <Upload />
      <Modal>
        <div>as</div>
      </Modal>
      <Table
        header={columns}
        data={data}
        total={1000}
        pageSize={10}
        current={1}
      />
      <ul>
        {products.map((prod: any) => {
          return (
            <li className="text-red-200" key={prod.id}>
              {prod.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
