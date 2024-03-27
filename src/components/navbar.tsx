import React from 'react'
import { useRouter } from 'next/router';
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { SlBookOpen } from "react-icons/sl";
import { HiSpeakerWave } from "react-icons/hi2";
import { GoHomeFill } from "react-icons/go";
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className='flex justify-center bg-white py-5'>
      <div className='flex items-center space-x-7 ring-1 ring-primary-400 p-3 rounded-md'>
        <Link className={router.pathname == "" ? "active" : ""} href="#">
          <div className='flex text-black items-center space-x-2  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <span className='text-black'>اتصل بنا</span>
            <IoCall />
          </div>
        </Link>
        <Link className={router.pathname == "" ? "active" : ""} href="#">
          <div className='flex items-center space-x-2 text-black  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <IoIosArrowDown />
            <span> حول الشيخ</span>
          </div>
        </Link>
        <Link className={router.pathname == "/articles" ? "active" : ""} href="./articles">
          <div className='flex items-center space-x-2 text-black  hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <span>مقالات-الشيخ</span>
            <SlBookOpen />
          </div>
        </Link>
        <Link className={router.pathname == "/audios" ? "active" : ""} href="./audios">
          <div className='flex items-center space-x-2 text-black hover:bg-gray-100 hover:p-2 hover:rounded-md hover:transition-all ease-in-out duration-300'>
            <span> صوتيات الموقع</span>
            <HiSpeakerWave />
          </div>
        </Link>
        <Link className={router.pathname == "/" ? "active" : ""} href="./">
          <div className={`flex items-center space-x-2 text-black`}>
            <span> الرئيسية</span>
            <GoHomeFill />
          </div>
        </Link>  
      </div>
    </nav>
  )
}




// import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
// import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";


// export default function App() {
//   const icons = {
//     chevron: <ChevronDown fill="currentColor" size={16} />,
//     scale: <Scale className="text-warning" fill="currentColor" size={30} />,
//     lock: <Lock className="text-success" fill="currentColor" size={30} />,
//     activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
//     flash: <Flash className="text-primary" fill="currentColor" size={30} />,
//     server: <Server className="text-success" fill="currentColor" size={30} />,
//     user: <TagUser className="text-danger" fill="currentColor" size={30} />,
//   };

//   return (
//     <Navbar>
//       <NavbarBrand>
        
//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <Dropdown>
//           <NavbarItem>
//             <DropdownTrigger>
//               <Button
//                 disableRipple
//                 className="p-0 bg-transparent data-[hover=true]:bg-transparent"
//                 endContent={icons.chevron}
//                 radius="sm"
//                 variant="light"
//               >
//                 Features
//               </Button>
//             </DropdownTrigger>
//           </NavbarItem>
//           <DropdownMenu
//             aria-label="ACME features"
//             className="w-[340px]"
//             itemClasses={{
//               base: "gap-4",
//             }}
//           >
//             <DropdownItem
//               key="autoscaling"
//               description="ACME scales apps to meet user demand, automagically, based on load."
//               startContent={icons.scale}
//             >
//               Autoscaling
//             </DropdownItem>
//             <DropdownItem
//               key="usage_metrics"
//               description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
//               startContent={icons.activity}
//             >
//               Usage Metrics
//             </DropdownItem>
//             <DropdownItem
//               key="production_ready"
//               description="ACME runs on ACME, join us and others serving requests at web scale."
//               startContent={icons.flash}
//             >
//               Production Ready
//             </DropdownItem>
//             <DropdownItem
//               key="99_uptime"
//               description="Applications stay on the grid with high availability and high uptime guarantees."
//               startContent={icons.server}
//             >
//               +99% Uptime
//             </DropdownItem>
//             <DropdownItem
//               key="supreme_support"
//               description="Overcome any challenge with a supporting team ready to respond."
//               startContent={icons.user}
//             >
//               +Supreme Support
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
