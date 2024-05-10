document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn").addEventListener("click", function (event) {
    event.preventDefault();

    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("dob").value;
    const gender = document.querySelector('input[type="radio"]:checked');
    var genderValue = "";
    if (gender !== null) {
      genderValue = gender.value;
    }
    const year = document.getElementById("studyYear").value;
    const branch = document.querySelector("#branch").value;

    const hobbies = [];
    const hobbyValues = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    hobbyValues.forEach((hobby) => {
      hobbies.push(hobby.value);
    });

    const obj = {
      First: fname,
      Last: lname,
      Address: address,
      Email: email,
      Date: date,
      Gender: genderValue,
      Year: year,
      Branch: branch,
      Hobbies: hobbies,
    };

    const Info = JSON.stringify(obj);

    localStorage.setItem("Information", Info);
    // console.log(localStorage.getItem("Information"));
  });
});
