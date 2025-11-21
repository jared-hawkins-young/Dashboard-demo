import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b bg-primary text-primary-foreground backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 hover:bg-white/10 text-white hover:text-white" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4 bg-white/20"
        />
        <h1 className="text-base font-semibold text-white">SOPzilla Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
            Help
          </Button>
        </div>
      </div>
    </header>
  )
}
