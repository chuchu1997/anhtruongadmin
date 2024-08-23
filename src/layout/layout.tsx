import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
function Layout() {
  const navItems = [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/",
    },
  ];
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="wrapper h-screen ">
      <div
        className={`sidebar h-full bg-[#212631] ${
          collapse ? "w-0" : "w-[300px]"
        } fixed top-0 left-0 overflow-x-hidden text-white transition-width duration-300 border-r border-[#ccc]`}
      >
        <div className="sidebar-header p-4 h-[80px] border-b border-[#ccc] text-center">SIDEBAR TITLE</div>

        <div className="sidebar-content flex flex-col gap-4 mt-8">
          <Link to="/sdqs">
            <Button className="w-[280px] ml-2 mr-2">Danh sách khách hàng</Button>
          </Link>

          <Link to="/create-product">
            <Button className="w-[280px] ml-2 mr-2">
              Tạo mới sản phẩm <Plus size="16px" className="ml-2"></Plus>
            </Button>
          </Link>

          <Button className="w-[280px] ml-2 mr-2">Các đơn đặt hàng</Button>

          <Button className="w-[280px] ml-2 mr-2">Toàn bộ sản phẩm </Button>
          <Button className="w-[280px] ml-2 mr-2">Các loại sản phẩm </Button>
        </div>
      </div>
      <div className={`right-content  ${collapse ? "ml-0" : "ml-[300px]"}`}>
        <div
          className={`fixed z-50 top-0 ${
            collapse ? "left-0" : "left-[300px]"
          }  right-0 bg-[#212631] flex justify-between p-4 transition-left duration-300 h-[80px]`}
        >
          <div>
            <Menu className="text-white cursor-pointer" onClick={() => setCollapse(!collapse)}></Menu>
          </div>
          <div className="text-white h-[50px] w-[50px] rounded-full cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col border-2 border-[#ccc] mr-2 mt-4">
                <Button
                  onClick={() => {
                    localStorage.removeItem("access_token");
                    window.location.href = "/";
                  }}
                >
                  Đăng Xuất
                </Button>
                {/* <Button>Đăng Xuất</Button> */}
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="mt-[80px] h-screen bg-[#212631]/95 text-white p-4">
          <div className="container mx-auto">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>

    // <div className={`wrapper flex flex-row h-screen max-h-screen`}>
    //   <div
    //     className={`left-side ${
    //       collapse ? "w-0" : "w-2/12"
    //     }  bg-[#202531] border-r border-[#ccccc]/40  overflow-x-hidden overflow-y-auto text-white transition-width duration-200 bg-[#323a49] fixed top-0`}
    //   >
    //     <div className="header-sidebar p-2 h-[80px] overflow-hidden border-b border-[#cccccc] flex flex-row justify-center items-center">LOGO</div>
    //   </div>
    //   <div className={`right-side ${collapse ? "w-full" : "w-10/12"} bg-[#1D222B] transition-width duration-200 `}>
    //     <div className="border-b border-[#ccccc]/40 wrapper bg-[#323a49]  flex flex-row justify-between items-center p-2 h-[80px]">
    //       <div>
    //         <Button
    //           onClick={() => {
    //             setCollapse(!collapse);
    //           }}
    //         >
    //           LEFT
    //         </Button>
    //       </div>
    //       <div>
    //         <Button
    //           onClick={() => {
    //             localStorage.removeItem("access_token");
    //             window.location.href = "/";
    //           }}
    //         >
    //           RIGHT
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="context p-4 h-screen overflow-y-auto ">
    //       <main>
    //         <Outlet />
    //       </main>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Layout;
