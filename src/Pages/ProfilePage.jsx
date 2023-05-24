import React from "react";
import CloseBtn from "../Components/CloseBtn.jsx";

export default function ProfilePage() {
  return (
    <div>
      <CloseBtn link="/"></CloseBtn>
      <section className="flex flex-col items-center justify-around h-[700px]">
    <img src="" alt=""/>
  
    <div>
      <img src="" alt=""/>
      <button className="button_account_page text-xl text-white rounded-2xl border-0 w-64 h-20">Set status</button>
    </div>
    <div>
      <img src="" alt=""/>
      <button className="button_account_page text-xl text-white rounded-2xl border-0 w-64 h-20">My account</button>
    </div>
    <div>
      <img src="" alt=""/>
      <button className="button_account_page text-xl text-white rounded-2xl border-0 w-64 h-20">Confidentiality</button>
    </div>
    <div>
      <img src="" alt=""/>
      <button className="button_account_page text-xl text-white rounded-2xl border-0 w-64 h-20">User profile</button>
    </div>
    <div>
      <img src="" alt=""/>
      <button className="button_account_page text-xl text-white rounded-2xl border-0 w-64 h-20">QR-code scaner</button>
    </div>
    <div>
      <img src="" alt=""/>
      <button className="button_account_page text-xl text-white rounded-2xl border-0 w-64 h-20">Notification</button>
    </div>
  </section>
    </div>
  );
}
