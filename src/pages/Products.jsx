import { useState } from 'react'
import { LayoutGrid, List, MapPin, Plus, QrCode } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Segmented, inr } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { products } from '../data'

const stockBadge = (p) => (p.stock === 0 ? <Badge tone="red">Out of stock</Badge> : p.stock < p.min ? <Badge tone="amber">Low · {p.stock}</Badge> : <Badge tone="green">In stock · {p.stock}</Badge>)

export default function Products() {
  const { openContact } = useContact()
  const [view, setView] = useState('Grid')
  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Catalogue with SKUs, variants, bin locations and barcodes."
        actions={<>
          <Segmented options={['Grid', 'Table']} value={view} onChange={setView} />
          <button onClick={() => openContact('Add Product & Variants')} className="btn-primary"><Plus className="h-4 w-4" /> Add product</button>
        </>}
      />
      {view === 'Grid' ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="card group overflow-hidden animate-fade-up transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative grid h-36 place-items-center bg-gradient-to-br from-brand-50 via-white to-slate-100 text-6xl">
                <span className="transition duration-300 group-hover:scale-110">{p.emoji}</span>
                <button onClick={() => openContact('Barcode / QR Labels')} className="absolute right-3 top-3 rounded-lg bg-white/80 p-1.5 text-slate-500 shadow-sm backdrop-blur hover:text-brand-600"><QrCode className="h-4 w-4" /></button>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-slate-400">{p.sku}</p>
                <p className="mt-0.5 font-semibold text-slate-800">{p.name}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">{inr(p.price)}</span>
                  {stockBadge(p)}
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Bin {p.location}</span>
                  <span>{p.variants} variants</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Card bodyClass="">
          <DataTable
            rows={products}
            columns={[
              { key: 'name', label: 'Product', render: (p) => <div className="flex items-center gap-3"><span className="text-2xl">{p.emoji}</span><div><p className="font-semibold text-slate-800">{p.name}</p><p className="text-xs text-slate-400">{p.sku}</p></div></div> },
              { key: 'category', label: 'Category' },
              { key: 'location', label: 'Bin' },
              { key: 'variants', label: 'Variants' },
              { key: 'stock', label: 'Stock', render: stockBadge },
              { key: 'price', label: 'Price', align: 'right', render: (p) => <span className="font-semibold text-slate-800">{inr(p.price)}</span> },
            ]}
          />
        </Card>
      )}
    </>
  )
}
