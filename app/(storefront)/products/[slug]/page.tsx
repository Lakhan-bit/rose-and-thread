import Link from 'next/link';
import { notFound } from 'next/navigation';
import { demoProducts } from '@/lib/demoProducts';
import ProductDetail from '@/components/product-detail';
import { Card } from '@/components/ui';

export function generateStaticParams() {
  return demoProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = demoProducts.find((p) => p.slug === slug);

  return {
    title: product?.name || 'Product not found',
    description: product?.description,
    openGraph: {
      title: product?.name,
      description: product?.description,
      images: product ? [product.MainImage, ...product.OtherImages] : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = demoProducts.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = demoProducts
    .filter((x) => x.slug !== product.slug)
    .sort(
      (a, b) =>
        Number(b.fabric === product.fabric) - Number(a.fabric === product.fabric)
    )
    .slice(0, 4);

  return (
    <section className="wrap section pdp-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/products/">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <ProductDetail product={product} />

      <div className="section">
        <span className="eyebrow">MORE LITTLE LOVELIES</span>
        <h2>You might love these, too.</h2>
        <div className="product-grid">
          {related.map((p) => (
            <Card key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}