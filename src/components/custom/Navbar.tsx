import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <div className="flex justify-between p-4">
      <h1 className="font-mono font-extrabold text-lg text-cyan-400">DRCS</h1>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-orange-600 transition-colors duration-200">Contribute</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-2 w-48 bg-white shadow-md rounded-md">
                <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Join Us</NavigationMenuLink></li>
                <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Donate</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-orange-600 transition-colors duration-200">Stories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-2 w-48 bg-white shadow-md rounded-md">
                <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">FY24-25</NavigationMenuLink></li>
                <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">FY23-24</NavigationMenuLink></li>
                <li><NavigationMenuLink className="block p-2 hover:bg-gray-100">Historical</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-orange-600 transition-colors duration-200">About us</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-orange-600 transition-colors duration-200">Contact us</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}