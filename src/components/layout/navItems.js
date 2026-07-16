import {
  HomeIcon,
  BuildingIcon,
  UsersIcon,
  DocumentIcon,
  BanknotesIcon,
  WrenchIcon,
  CogIcon,
} from '../icons.jsx'

// Single source of truth for the sidebar navigation.
// `end: true` marks a link that should only be "active" on an exact URL match
// (needed for the index "/" route so it isn't active on every page).
export const navItems = [
  { to: '/', label: 'Dashboard', icon: HomeIcon, end: true },
  { to: '/financial', label: 'Financials', icon: BanknotesIcon },
  { to: '/academics', label: 'Academics', icon: DocumentIcon },
  { to: '/accommodation', label: 'Accommodation', icon: BuildingIcon },
  { to: '/settings', label: 'Settings', icon: CogIcon },
]
