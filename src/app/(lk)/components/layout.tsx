import type { PropsWithChildren } from "react"


export default function ComponentsLayout({
    children, } : PropsWithChildren<unknown>) {

  return (
    <div>
        <h1>ComponentsLayout</h1>
        {children}
    </div>
  )
}
