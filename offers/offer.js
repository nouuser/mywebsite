// document.addEventListener("DOMContentLoaded", function () {
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   const calendar = document.querySelector(".calendar");
//   const monthElement = calendar.querySelector(".month");
//   const yearElement = calendar.querySelector(".year");
//   const daysElement = calendar.querySelector(".days");

//   let currentDate = new Date();

//   function renderCalendar(date) {
//     const month = date.getMonth();
//     const year = date.getFullYear();

//     monthElement.textContent = monthNames[month];
//     yearElement.textContent = year;

//     daysElement.innerHTML = "";

//     const firstDayOfMonth = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     for (let i = 0; i < firstDayOfMonth; i++) {
//       daysElement.innerHTML += `<div></div>`;
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//       const dayElement = document.createElement("div");
//       dayElement.textContent = i;
//       if (
//         i === date.getDate() &&
//         year === new Date().getFullYear() &&
//         month === new Date().getMonth()
//       ) {
//         dayElement.classList.add("today");
//       }
//       daysElement.appendChild(dayElement);
//     }
//   }

//   document.querySelector(".prev").addEventListener("click", function () {
//     currentDate.setMonth(currentDate.getMonth() - 1);
//     renderCalendar(currentDate);
//   });

//   document.querySelector(".next").addEventListener("click", function () {
//     currentDate.setMonth(currentDate.getMonth() + 1);
//     renderCalendar(currentDate);
//   });

//   renderCalendar(currentDate);
// });
