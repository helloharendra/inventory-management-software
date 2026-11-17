import { useState } from 'react'
import { ArrowDownToLine, ArrowLeftRight, ArrowUpFromLine, CheckCircle2, SlidersHorizontal } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader } from '../components/ui'
import { movements as initial, products } from '../data'

const types = [
  { key: 'Inward', icon: ArrowDownToLine, tone: 'green' },
  { key: 'Outward', icon: ArrowUpFromLine, tone: 'blue' },
  { key: 'Transfer', icon: ArrowLeftRight, tone: 'violet' },
  { key: 'Adjustment', icon: SlidersHorizontal, tone: 'amber' },
]
const toneOf = Object.fromEntries(types.map((t) => [t.key, t.tone]))

export default function Movements() {
  const [rows, setRows] = useState(initial)
  const [form, setForm] = useState({ type: 'Inward', product: products[0].name, qty: 10, ref: '' })
  const [saved, setSaved] = useState(false)
  const current = products.find((p) => p.name === form.product)
  const sign = form.type === 'Outward' ? -1 : form.type === 'Transfer' ? 0 : 1
  const after = current.stock + sign * Number(form.qty || 0)

  const submit = (e) => {
    e.preventDefault()
    setRows((r) => [{ id: `MV-${5522 + r.length - initial.length}`, ...form, qty: Number(form.qty), by: 'You', time: 'Just now' }, ...r])
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <>
      <PageHeader title="Stock movements" subtitle="Record inward, outward, transfers and adjustments with a full audit trail." />
      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
        <Card title="Record movement" className="h-fit">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {types.map(({ key, icon: Icon }) => (
                <button type="button" key={key} onClick={() => setForm({ ...form, type: key })} className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${form.type === key ? 'bg-brand-50 text-brand-700 ring-2 ring-brand-500' : 'text-slate-500 ring-1 ring-slate-200 hover:ring-slate-300'}`}>
                  <Icon className="h-4 w-4" /> {key}
                </button>
              ))}
            </div>
            <div>
              <label className="label">Product</label>
              <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="input">
                {products.map((p) => <option key={p.id}>{p.name}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className="label">Quantity</label><input type="number" min="1" value={form.qty} onChange={(e) => setForm({ ...form, qty: e.target.value })} className="input" /></div>
              <div><label className="label">Reference</label><input value={form.ref} onChange={(e) => setForm({ ...form, ref: e.target.value })} placeholder="PO / SO no." className="input" /></div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 text-sm">
              <div><p className="text-xs text-slate-400">Current</p><p className="text-lg font-bold text-slate-800">{current.stock}</p></div>
              <span className="text-slate-300">→</span>
              <div className="text-right"><p className="text-xs text-slate-400">After</p><p className={`text-lg font-bold ${after < current.min ? 'text-rose-600' : 'text-emerald-600'}`}>{after}</p></div>
            </div>
            <button className="btn-primary w-full py-3">{saved ? <><CheckCircle2 className="h-4 w-4" /> Recorded</> : 'Save movement'}</button>
          </form>
        </Card>
        <Card title="Movement log" subtitle={`${rows.length} entries`} bodyClass="">
          <DataTable
            rows={rows}
            columns={[
              { key: 'id', label: 'ID', render: (r) => <span className="font-semibold text-slate-800">{r.id}</span> },
              { key: 'type', label: 'Type', render: (r) => <Badge tone={toneOf[r.type]}>{r.type}</Badge> },
              { key: 'product', label: 'Product' },
              { key: 'qty', label: 'Qty', render: (r) => <span className="font-semibold">{r.qty}</span> },
              { key: 'ref', label: 'Reference' },
              { key: 'by', label: 'By' },
              { key: 'time', label: 'When' },
            ]}
          />
        </Card>
      </div>
    </>
  )
}
