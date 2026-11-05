'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { demoProducts } from '@/lib/demoProducts';
import { Card } from './ui';

const FABRIC_OPTIONS = [
  'All',
  ...Array.from(new Set(demoProducts.map((p) => p.fabric))),
];

const PACK_OPTIONS = [
  'All',
  ...Array.from(
    new Set(demoProducts.flatMap((p) => p.packSize.map((ps) => ps.label)))
  ),
];

const FILTERS: { key: string; label: string; options: string[] }[] = [
  { key: 'fabric', label: 'Fabric', options: FABRIC_OPTIONS },
  { key: 'pack', label: 'Pack size', options: PACK_OPTIONS },
];

function capitalise(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function Shop() {
  const params = useSearchParams();
  const router = useRouter();

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value === 'All') next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.push(qs ? `/products/?${qs}` : '/products/', { scroll: false });
  };

  const clear = () => router.push('/products/', { scroll: false });

  const fabricFilter = params.get('fabric');
  const packFilter = params.get('pack');
  const hasFilters = params.toString() !== '';

  const filtered = demoProducts.filter(
    (product) =>
      (!fabricFilter || product.fabric === fabricFilter) &&
      (!packFilter || product.packSize.some((ps) => ps.label === packFilter))
  );

  return (
    <>
      <div className="filters">
        {FILTERS.map(({ key, label, options }) => (
          <fieldset key={key}>
            <legend>{label}</legend>
            <div className="filter-options">
              {options.map((option) => {
                const isActive = (params.get(key) || 'All') === option;
                return (
                  <button
                    key={option}
                    aria-pressed={isActive}
                    className={isActive ? 'selected' : ''}
                    onClick={() => set(key, option)}
                  >
                    {option === 'All' ? 'All' : capitalise(option)}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="results">
        <span aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </span>
        {hasFilters && (
          <button className="text-link" onClick={clear}>
            Clear filters
          </button>
        )}
        <span>Handmade. Always.</span>
      </div>

      {filtered.length ? (
        <div className="product-grid shop-grid">
          {filtered.map((p) => (
            <Card product={p} key={p.slug} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No scrunchies match just yet.</h2>
          <p>Try another fabric or pack size — your favourite is waiting.</p>
          <button className="button" onClick={clear}>
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}