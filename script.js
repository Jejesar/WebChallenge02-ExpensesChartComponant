const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const div = document.querySelectorAll(".charts")[0];
const totalText = document.querySelectorAll("#month-total")[0];

let days = "";
let max = Math.max(...data.map((d) => d.amount));
let total = 0;

data.forEach((day) => {
  total += day.amount;
  if (day.amount === max) {
    days += `
      <div class="day">
          <div class="day-value max" data-height=${day.amount} style="height: ${
      day.amount * 3
    }px"></div>
          <span class="day-name">${day.day}</span>
      </div>
      `;
  } else {
    days += `
      <div class="day">
          <div class="day-value" data-height=${day.amount} style="height: ${
      day.amount * 3
    }px"></div>
          <span class="day-name">${day.day}</span>
      </div>
      `;
  }
});

div.innerHTML = days;
totalText.innerHTML = "$" + total;
