import { FloatingNav } from "./component/FloatingNav";

import { OrbitingCirclesDemo } from "./component/OrbitingCirclesDemo";

import { StickyScrollRevealDemo } from "./component/StickyScrollRevealDemo";


function App() {
  const navItems = [
    {
      name: "Home",
      link: "/",

    },
    {
      name: "Products v",
      link: "/products",

    },
    {
      name: "Resource v",
      link: "/resource",
      
    },
    {
      name: "Pricing",
      link: "/pricing",
      
    },
  ];

  return (
    <div className="relative w-full h-screen">
    <FloatingNav className="mx-6 rounded-lg" navItems={navItems} />
    <OrbitingCirclesDemo/>
    <StickyScrollRevealDemo/>
  </div>
  );
  
}

export default App
