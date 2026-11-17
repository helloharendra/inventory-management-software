import {
  ArrowLeftRight, BarChart3, Boxes, ClipboardList, LayoutDashboard, PackageSearch, ScanBarcode, Settings, Truck, Warehouse,
} from 'lucide-react'

export const app = {
  name: 'StockPilot',
  tagline: 'Inventory Management',
  logo: Boxes,
  user: { name: 'Manish Tiwari', role: 'Warehouse Manager' },
  searchPlaceholder: 'Search SKU, product, batch…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Inventory',
    items: [
      { label: 'Overview', to: '/', icon: LayoutDashboard },
      { label: 'Products', to: '/products', icon: PackageSearch },
      { label: 'Stock Movements', to: '/movements', icon: ArrowLeftRight },
    ],
  },
  {
    title: 'Operations',
    items: [
      { label: 'Purchase Orders', icon: ClipboardList },
      { label: 'Suppliers', icon: Truck },
      { label: 'Warehouses & Bins', icon: Warehouse },
      { label: 'Barcode Labels', icon: ScanBarcode },
    ],
  },
  {
    title: 'Insights',
    items: [
      { label: 'Stock Reports', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
