import React from "react";
import { SiAbstract } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 rounded-b-lg m-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 px-3">
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold">Abstract</h4>
          <p className="hover:underline cursor-pointer">Branches</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold">Resources</h4>
          <p className="hover:underline cursor-pointer">Blog</p>
          <p className="hover:underline cursor-pointer">Help Center</p>
          <p className="hover:underline cursor-pointer">Release Notes</p>
          <p className="hover:underline cursor-pointer">Status</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold">Community</h4>
          <p className="hover:underline cursor-pointer">Twitter</p>
          <p className="hover:underline cursor-pointer">LinkedIn</p>
          <p className="hover:underline cursor-pointer">Facebook</p>
          <p className="hover:underline cursor-pointer">Dribbble</p>
          <p className="hover:underline cursor-pointer">Podcast</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold">Company</h4>
          <p className="hover:underline cursor-pointer">About Us</p>
          <p className="hover:underline cursor-pointer ">Careers</p>
          <p className="hover:underline cursor-pointer ">Legal</p>
          <div className="space-y-2">
            <p className="hover:underline cursor-pointer font-bold">Contact Us</p>
            <p className="hover:underline cursor-pointer">info@abstract.com</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h4 className=""></h4>
          <p className=""></p>
          <p className=""></p>
          <p className="text-3xl"><SiAbstract className='mr-2'/></p>
          <p  className="text-white text-lg">© Copyright 2022</p>
          <p className="text-white text-lg"> Abstract  Studio Design, Inc.</p>
          <p className="text-white text-lg">All Right reserved</p>
        </div>

       

       
      </div>
      
    </footer>
  );
}

export default Footer;
