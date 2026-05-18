import {
  Menu,
  X,
  Search,
  Mail,
  Phone,
  User,
  Gift,
  Calendar,
  Contact,
  Play,
} from "lucide-react"

type IconProps = React.HTMLAttributes<SVGElement> & {
  size?: number
}

export const Icons = {
  menu: (props: IconProps) => <Menu {...props} />,
  close: (props: IconProps) => <X {...props} />,
  search: (props: IconProps) => <Search {...props} />,
  mail: (props: IconProps) => <Mail {...props} />,
  phone: (props: IconProps) => <Phone {...props} />,
  user: (props: IconProps) => <User {...props} />,
  gift: (props: IconProps) => <Gift {...props} />,
  calendar: (props: IconProps) => <Calendar {...props} />,
  contact: (props: IconProps) => <Contact {...props} />,
  play: (props: IconProps) => <Play {...props} />,
}
