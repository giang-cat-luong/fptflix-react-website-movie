import React from 'react'
import { Icon, Collapsible, CollapsibleItem } from 'react-materialize'
export default function About() {
    return (
        <Collapsible
  accordion
  popout
>
  <CollapsibleItem
    expanded={false}
    header="Who we are."
    icon={<Icon>diversity_3</Icon>}
    node="div"
  >
    We are a team dedicated to providing the latest movies quickly with hundreds of new movies every day.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Our service."
    icon={<Icon>design_services</Icon>}
    node="div"
  >
    We provide users with movies at an extremely fast speed, giving users the best experience, watching movies without lag, watching full hd feel high like in a movie theater.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Our contact"
    icon={<Icon>perm_phone_msg</Icon>}
    node="div"
  >
    Location: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000<br/>
    Phone: 0981890260<br/>
    Email: FPTflix@gmail.com
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Our criteria"
    icon={<Icon>share</Icon>}
    node="div"
  >
    Fast, Feel hight & Full hd uncensored
  </CollapsibleItem>
</Collapsible>
    )
}
