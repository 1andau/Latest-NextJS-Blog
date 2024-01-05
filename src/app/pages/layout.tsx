import type { PropsWithChildren } from "react"

export default function PostLayout({
    children, } : PropsWithChildren<unknown>) {

  return (
    <div>
        {children}
    </div>
  )
}
