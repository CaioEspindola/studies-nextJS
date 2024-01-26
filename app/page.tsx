import Produto from "./components/Produto"
import ProdutoLoading from "./components/ProdutoLoading"
import Review from "./components/Review"
import ReviewLoading from "./components/ReviewLoading"

import { Suspense } from "react";


export default async function Home() {
  return (
    <>
    <Suspense fallback={<ProdutoLoading />}>
      <Produto />
    </Suspense>
      <br />
    <Suspense fallback={<ReviewLoading/>}>
     <Review />
    </Suspense>
    </>
  );
}
