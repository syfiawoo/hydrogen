import { useShopQuery } from "@shopify/hydrogen";
import { gql } from "@shopify/hydrogen";

export default function Home() {
  const {data} = useShopQuery({
    query: QUERY
  })
  console.log(data)
  return <h1 className="text-3xl font-bold">{data.shop.name}</h1>;
}

const QUERY = gql`
 query shopName {
   shop {
     name
     description
   }
 }
`
