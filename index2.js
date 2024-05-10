document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();

  const Info = localStorage.getItem("Information");
  const obj = JSON.parse(Info);
  const Name = obj.First + " " + obj.Last;

  document.querySelector(".name").textContent = Name;
  document.querySelector(".branch").textContent = obj.Branch;
  document.querySelector(".year").textContent = obj.Year;
  document.querySelector(".address").textContent = obj.Address;
  document.querySelector(".email").textContent = obj.Email;
  document.querySelector(".birth").textContent = obj.Date;
  if (obj.Gender == "Male") {
    document.querySelector(".gender").textContent = "his";
    document.querySelector(".gender1").textContent = "He";
    document.querySelector(".gender2").textContent = "He";
  } else {
    document.querySelector(".gender").textContent = "her";
    document.querySelector(".gender1").textContent = "She";
    document.querySelector(".gender2").textContent = "She";
  }
  document.querySelector(".hobbies").textContent = obj.Hobbies;
});
