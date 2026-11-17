// Sample data for the UI demo. The complete project uses live APIs + database.
export const stockTrend = [
  { label: 'Jun', inward: 820, outward: 640 }, { label: 'Jul', inward: 910, outward: 780 },
  { label: 'Aug', inward: 760, outward: 820 }, { label: 'Sep', inward: 1040, outward: 870 },
  { label: 'Oct', inward: 1180, outward: 990 }, { label: 'Nov', inward: 990, outward: 1060 },
]

export const byCategory = [
  { name: 'Electronics', value: 412 }, { name: 'Apparel', value: 318 }, { name: 'Home & Kitchen', value: 276 },
  { name: 'Hardware', value: 164 }, { name: 'Others', value: 114 },
]

export const products = [
  { id: 1, sku: 'EL-BT-SPK', name: 'Bluetooth Speaker', category: 'Electronics', stock: 148, min: 40, price: 1899, emoji: '🔊', variants: 3, location: 'A-02-3' },
  { id: 2, sku: 'EL-PWR-10K', name: 'Power Bank 10000mAh', category: 'Electronics', stock: 22, min: 50, price: 1299, emoji: '🔋', variants: 2, location: 'A-04-1' },
  { id: 3, sku: 'AP-HD-BLK', name: 'Cotton Hoodie', category: 'Apparel', stock: 310, min: 80, price: 999, emoji: '🧥', variants: 12, location: 'C-01-2' },
  { id: 4, sku: 'HK-KTL-15', name: 'Electric Kettle 1.5L', category: 'Home & Kitchen', stock: 64, min: 30, price: 1499, emoji: '🫖', variants: 2, location: 'B-03-4' },
  { id: 5, sku: 'HW-DRL-13', name: 'Cordless Drill 13mm', category: 'Hardware', stock: 9, min: 20, price: 3899, emoji: '🛠️', variants: 1, location: 'D-02-1' },
  { id: 6, sku: 'AP-SNK-WHT', name: 'Canvas Sneakers', category: 'Apparel', stock: 186, min: 60, price: 1599, emoji: '👟', variants: 8, location: 'C-02-5' },
  { id: 7, sku: 'HK-LMP-LED', name: 'LED Desk Lamp', category: 'Home & Kitchen', stock: 41, min: 35, price: 899, emoji: '💡', variants: 3, location: 'B-01-2' },
  { id: 8, sku: 'EL-WTC-S2', name: 'Smart Watch S2', category: 'Electronics', stock: 0, min: 25, price: 4999, emoji: '⌚', variants: 4, location: 'A-01-1' },
]

export const movements = [
  { id: 'MV-5521', type: 'Inward', product: 'Cotton Hoodie', qty: 120, ref: 'PO-1182', by: 'Manish Tiwari', time: 'Today, 10:42' },
  { id: 'MV-5520', type: 'Outward', product: 'Bluetooth Speaker', qty: 36, ref: 'SO-7741', by: 'Pooja Rana', time: 'Today, 10:15' },
  { id: 'MV-5519', type: 'Transfer', product: 'Electric Kettle 1.5L', qty: 20, ref: 'WH Delhi → Noida', by: 'Manish Tiwari', time: 'Today, 09:30' },
  { id: 'MV-5518', type: 'Adjustment', product: 'Power Bank 10000mAh', qty: -3, ref: 'Damaged', by: 'Audit Team', time: 'Yesterday' },
  { id: 'MV-5517', type: 'Outward', product: 'Canvas Sneakers', qty: 54, ref: 'SO-7739', by: 'Pooja Rana', time: 'Yesterday' },
  { id: 'MV-5516', type: 'Inward', product: 'LED Desk Lamp', qty: 60, ref: 'PO-1181', by: 'Manish Tiwari', time: '15 Nov' },
]
