// import React from "react";
// import {
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Select,
// } from "@chakra-ui/react";
// import Table from "src/components/table/Table";

// const Header = ({
//   handleSeasonSelect,
//   seasonId,
//   handleTabChange,
//   categories,
// }) => {
//   return (
//     <div>
//       <div className=" bg-white sm:pt-12 border-neutral-200 border-b">
//         <div className="m-auto max-w-7xl px-6">
//           <header className="hidden text-3xl font-bold sm:block">
//             PLAYER STATISTICS - {seasonId + 2021}
//           </header>
//           <div className="mt-6 hidden h-[2px] bg-aff-blue sm:block" />
//           <div className="flex justify-center gap-6 border-b-2 py-2 sm:justify-normal sm:border-0 sm:py-6">
//             <Select
//               borderRadius="sm"
//               width="10rem"
//               defaultValue={6}
//               onChange={handleSeasonSelect}
//             >
//               <option value={4}>2025</option>
//               <option value={5}>2026</option>
//               <option value={6}>2027</option>
//             </Select>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#fcfcfc] pt-6">
//       <div className="m-auto max-w-7xl px-6">
//         <Tabs
//           className="overflow-x-auto  pt-4 sm:pt-0"
//           onChange={handleTabChange}
//         >
//           <TabList>
//             {categories.map((name, index) => {
//               return (
//                 <Tab
//                   _selected={{
//                     borderBottomColor: "#e49740",
//                     color: "#e49740",
//                     borderSpacing: ""
//                   }}
//                   key={index}
//                   className="whitespace-nowrap"
//                 >
//                   {name}
//                 </Tab>
//               );
//             })}
//           </TabList>
//         </Tabs>
        
//       </div>
     
//       </div>
//     </div>
//   );
// };

// export default Header;
