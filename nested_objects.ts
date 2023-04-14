
/////     >>>>>>>>>>>    Step -05d (Nested objects)                   <<<<<<<<<<<<<<


//// Nested Object  Example-1 With type
// obj-1
// type Author = {
//   firstName: string;
//   lastName: string;
// };

// // obj-2 + obj1 / Nesting
// type Book = {
//   author: Author;
//   name: string;
// };

// //asigining values 
// const myBook : Book = {
//   author: {
//       firstName: "Zia",
//       lastName: "Khan"
//   },
//   name: "My Best Book"
// }
// console.log(myBook)




// /////  Nested Object  Example-2 With type
// // obj-1
// type captian = {
//   name:string;
//   age:number;
// }

// // obj-2 + obj1 / Nesting
// type team = {
//   Captain :captian;
//   teamName:string
// }

// //asigining values 
// let myTeam : team = {
//   Captain :{
//     name:'Abid AALi',
//     age:23

//   },
//   teamName:'Seven Star'
// }
// console.log(myTeam)




// ///  Nested object  Exapmple-3 type 
// // obj-1
// type  principal = {
//   name:string;
//   status:boolean;
// };
// // obj-2 + obj1 / Nesting
// type school = {
//   Principal :principal;
//   schoolName:string;
//   city:string;
//   regCode:number
// };

// //asigining values 
// let mySchool : school = {
//   Principal : {
//     name:'Abid Ali',
//     status:true
//   },
//   schoolName:'The Islamic Educator',
//   city:'Mirpurkhas',
//   regCode:445500
// }
// console.log(mySchool);


///////////// >>>>>     Nested Objects With interface     <<<<<<<<<<<<<<<<  ///


//// Nested Object  Example-1 With interface
// // obj-1
// interface Author  {
//   firstName: string;
//   lastName: string;
// };

// // obj-2 + obj1 / Nesting
// interface Book  {
//   author: Author;
//   name: string;
// };

// //asigining values 
// let myBook : Book  = {
//   author : {
//       firstName: "Zia",
//       lastName: "Khan"
//   },
//   name: "My Best Book"
// }
// console.log(myBook)



/////  Nested Object  Example-2 With interface
// // obj-1
// interface captian  {
//   name:string;
//   age:number;
// }

// // obj-2 + obj1 / Nesting
// interface team  {
//   Captain :captian;
//   teamName:string
// }

// //asigining values 
// let myTeam : team = {
//   Captain :{
//     name:'Abid AALi',
//     age:23

//   },
//   teamName:'Seven Star'
// }
// console.log(myTeam)



///  Nested object  Exapmple-3 interface
// obj-1
// interface  principal  {
//   name:string;
//   status:boolean;
// };
// // obj-2 + obj1 / Nesting
// interface school {
//   Principal :principal;
//   schoolName:string;
//   city:string;
//   regCode:number
// };

// //asigining values 
// let mySchool : school = {
//   Principal : {
//     name:'Abid Ali',
//     status:true
//   },
//   schoolName:'The Islamic Educator',
//   city:'Mirpurkhas',
//   regCode:445500
// }
// console.log(mySchool);
