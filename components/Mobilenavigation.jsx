import { AlignJustify } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Logo } from "./Logo"
import { Nav } from "./Nav"

export const Mobilenavigation = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify className='cursor-pointer'/>
        </SheetTrigger>

        <SheetContent>
            <div className="flex flex-col items-center justify-between h-full py-8">
                <div className="flex flex-col items-center gap-y-6">
                    <Logo />
                    <Nav 
                    containerStyles="flex flex-col item-center gap-y-6"
                    linkStyles="text-1xl font-semibold"
                    />
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}
