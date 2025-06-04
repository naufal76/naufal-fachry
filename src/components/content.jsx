
import { useState } from "react";
import Profile from "./profile";
import Design from "./design";
import Photography from "./photography";


const Content = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap mx-10 bg-bla">
        <div className="w-full">
          {/* Tombol Tab */}
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row justify-center gap-4">
            <li className="text-center">
              <button
                className={"text-xl font-medium px-5 py-3 shadow-lg rounded block leading-normal" +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </button>
            </li>
            <li className="text-center">
              <button
                className={"text-xl font-medium px-5 py-3 shadow-lg rounded block leading-normal" +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Design
              </button>
            </li>
            <li className="text-center">
              <button
                className={"text-xl font-medium px-5 py-3 shadow-lg rounded block leading-normal" +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Photography
              </button>
            </li>
            
          </ul>

          {/* Konten Tab */}
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                 <div className={openTab === 1 ? "block" : "hidden"}>
                  <Profile />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                  <Design />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"}>
                  <Photography />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return <Content color="gray" />;
}