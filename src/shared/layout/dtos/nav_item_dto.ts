export interface NavItem {
  color: string
  label: string
  icon: string
  to?: string
  action?: () => void
}
