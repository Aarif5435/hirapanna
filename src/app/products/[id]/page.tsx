import Image from "next/image";
import necklace from "../../../../public/product-necklaces.webp";
import { AddToCart } from "@/components/addtoCart";
import { jewellryData } from "@/utils/db";
import { notFound } from "next/navigation";
import { RelatedProduct } from "@/components/relatedProducts";

export async function generateStaticParams() {
  return jewellryData
    .flatMap((category) => category.products)
    .map((product) => ({ id: product.id.toString() }));
}

export default async function productDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = parseInt(id);

  const product = jewellryData
    .flatMap((category) => category.products)
    .find((item) => item.id === productId);

  const relatedProduct = jewellryData.find(
    (category) => category.category === product?.category
  );

  const fourProducts = relatedProduct?.products?.slice(0, 4);

  if (!product) return notFound();

  return (
    <>
      <section>
        <div className="flex gap-10 p-20">
          <Image
            src={product?.img || necklace}
            alt="necklace"
            className="w-1/2 p-10 object-cover"
          />
          <div className="p-10">
            <span className="text-[#051F34] underline tracking-wider font-medium">
              {product?.category}
            </span>
            <h1 className="text-[#051F34] pt-10 text-6xl font-semibold font-serif">
              {product?.name}
            </h1>
            <p className="text-[#051F34] text-4xl font-serif pt-5">
              ${product?.price}
            </p>
            <div className="pt-10 flex gap-10">
              <AddToCart />
              <button className="p-2 px-8 tracking-widest bg-white font-semibold text-xs relative flex items-center before:content-[''] before:w-[12px] hover:before:w-[20px] hover:bg-[#090909f8] hover:text-white hover:before:bg-white before:h-[1px] before:bg-black before:absolute hover:before:left-1 before:left-4 before:top-1/2 before:-translate-y-1/2 before:transition-all before:duration-300">
                ADD TO CART
              </button>
            </div>
            <div className="pt-10">
              <span className="text-[#051F34] text-xs font-semibold tracking-wider">
                DESCRIPTION
              </span>
              <p className="text-[#5E6368] text-lg pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus exercitationem accusantium aliquam veritatis, illum
                nisi? Magni quaerat ducimus blanditiis, est, dolor quas
                assumenda nisi iusto sed neque non repellendus sunt? Facilis
                impedit labore dolore culpa eos nulla beatae alias nisi
                nesciunt, voluptatum at nostrum. Sit doloremque fugit, totam
                beatae eius voluptate necessitatibus cumque voluptas ea nobis
              </p>
            </div>
          </div>
        </div>
        <div className="p-20">
          <h2 className="font-serif font-medium pb-10 text-5xl">
            RELATED <br /> PRODUCTS
          </h2>
          <RelatedProduct fourProducts={fourProducts}/>
        </div>
      </section>
    </>
  );
}
