import { Link } from '@tanstack/react-router'
import {
  CalendarCogIcon,
  CircleChevronRightIcon,
  ClapperboardIcon,
  HomeIcon,
  UserIcon,
  Users2Icon,
} from 'lucide-react'
import type { CurrentUser, UserCompetition } from '~/utils/types'

const ACTIVE_LINK_CLASS = 'text-red-700 font-medium'

export default function SidebarLinks({ user }: { user: CurrentUser }) {
  return (
    <div className="flex flex-col gap-4 ">
      {/* Active Competitions */}
      <Link
        to="/login"
        // search={{ filter: '', page: 1, sort: 'a-z', limit: 10 }}
        className={`flex items-center gap-2 p-2 text-md rounded-lg hover:bg-default-100`}
        activeProps={{ className: ACTIVE_LINK_CLASS }}
      >
        <HomeIcon size={18} />
        <span>Home Page</span>
      </Link>
      {/* Admin user cannot see competitions  */}
      {/* TODO: Need to fix this to view few compeitions rather than all */}
    </div>
  )
}
