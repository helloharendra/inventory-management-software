import { AlertTriangle, Boxes, IndianRupee, PackageX, RefreshCcw, ScanBarcode } from 'lucide-react'
import { Badge, Card, Hero, HeroStat, Progress, StatCard } from '../components/ui'
import { BarsChart, DonutChart } from '../components/Charts'
import { useContact } from '../components/ContactModal'
import { byCategory, movements, products, stockTrend } from '../data'

const typeTone = { Inward: 'green', Outward: 'blue', Transfer: 'violet', Adjustment: 'amber' }

function Qty({ m }) {
  const delta = m.type === 'Outward' ? -m.qty : m.type === 'Transfer' ? 0 : m.qty
  const cls = delta < 0 ? 'text-rose-600' : delta > 0 ? 'text-emerald-600' : 'text-violet-600'
  const text = delta === 0 ? `⇄${m.qty}` : `${delta > 0 ? '+' : '−'}${Math.abs(delta)}`
  return <span className={`w-12 text-right font-bold ${cls}`}>{text}</span>
}

export default function Dashboard() {
  const { openContact } = useContact()
  const low = products.filter((p) => p.stock < p.min)
  return (
    <>
      <Hero
        eyebrow="Inventory health"
        title="Every unit, every warehouse, in real time."
        subtitle="Track stock levels, movements and reorder points across all your locations."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Stock accuracy" value="99.2%" /><HeroStat label="Turnover ratio" value="6.4x" /></div>}
      >
        <button onClick={() => openContact('Barcode Scanning')} className="btn bg-white text-brand-700 hover:bg-brand-50"><ScanBarcode className="h-4 w-4" /> Scan item</button>
      </Hero>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Stock value" value="₹1.84 Cr" delta="5.6%" icon={IndianRupee} />
        <StatCard label="Active SKUs" value="1,284" delta="2.1%" icon={Boxes} tone="sky" />
        <StatCard label="Low stock" value={low.length} icon={AlertTriangle} tone="amber" hint="Below minimum level" />
        <StatCard label="Out of stock" value="1" delta="-50%" icon={PackageX} tone="rose" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Inward vs outward" subtitle="Units per month" className="xl:col-span-2">
          <BarsChart data={stockTrend} series={[{ key: 'inward', name: 'Inward' }, { key: 'outward', name: 'Outward' }]} />
        </Card>
        <Card title="Stock by category">
          <DonutChart data={byCategory} centerValue="1,284" centerLabel="SKUs" />
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Reorder suggestions" action={<button onClick={() => openContact('Auto Purchase Orders')} className="text-sm font-semibold text-brand-600">Create POs</button>}>
          <div className="space-y-4">
            {low.map((p) => (
              <div key={p.id} className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-2xl">{p.emoji}</span>
                <div className="flex-1">
                  <div className="flex justify-between text-sm"><span className="font-semibold text-slate-800">{p.name}</span><span className="text-slate-500">{p.stock} / {p.min}</span></div>
                  <div className="mt-2"><Progress value={(p.stock / p.min) * 100} tone="red" /></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Latest movements" action={<RefreshCcw className="h-4 w-4 text-slate-400" />}>
          <ul className="divide-y divide-slate-100">
            {movements.slice(0, 5).map((m) => (
              <li key={m.id} className="flex items-center justify-between py-3 text-sm">
                <div><p className="font-semibold text-slate-800">{m.product}</p><p className="text-xs text-slate-400">{m.ref} · {m.time}</p></div>
                <div className="flex items-center gap-3"><Badge tone={typeTone[m.type]}>{m.type}</Badge><Qty m={m} /></div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  )
}
