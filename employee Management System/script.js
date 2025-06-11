(async function () {
  const data = await fetch("./data.json");
  const res = await data.json();
  //   console.log(res);
  let employee = res;
  let selectedEmployeeId = employee[0].id;
  let selectedEmployee = employee[0];

  const employeeList = document.querySelector(".list__of__employee");
  const employeeInfo = document.querySelector(".employee__info");


  const modalOverlay = document.getElementById("employeeModalOverlay");
  const addBtn = document.querySelector("header button");
  const closeBtn = document.getElementById("closeModal");

  addBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("hidden");
    modalOverlay.classList.add("flex");
  });

  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.add("hidden");
    modalOverlay.classList.remove("flex");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.add("hidden");
      modalOverlay.classList.remove("flex");
    }
  });

  // Add Employee Logic here

  //Select Employee Logic here
  employeeList.addEventListener("click", (e) => {
    // Ignore clicks on the delete button
    if (e.target.classList.contains("delete__btn")) return;

    const clickedLi = e.target.closest("li");
    if (!clickedLi) return;

    const clickedId = parseInt(clickedLi.id);

    if (selectedEmployeeId !== clickedId) {
      selectedEmployeeId = clickedId;
      renderEmployees(); // re-render to update the selected style
      renderSingleEmployee();
    }
  });

  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employee.forEach((emp) => {
      const listOfEmployee = document.createElement("li");
      listOfEmployee.classList.add(
        "rounded-xl",
        "bg-gray-300",
        "px-3",
        "py-2",
        "flex",
        "items-center",
        "justify-between"
      );
      if (parseInt(selectedEmployeeId) === emp.id) {
        listOfEmployee.classList.add("font-bold", "text-[18px]");
        selectedEmployee = emp;
      }
      listOfEmployee.setAttribute("id", emp.id);
      listOfEmployee.innerHTML = `
  <div>${emp.firstName} ${emp.lastName}</div>
  <button class="text-red-600 font-bold hover:text-red-800 delete__btn" data-id="${emp.id}">X</button>
`;
      employeeList.append(listOfEmployee);
    });
  };

  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `
    <div class="bg-white shadow-lg rounded-xl p-6 w-full flex gap-6">
      <img src="${selectedEmployee.imageUrl}" alt="${selectedEmployee.firstName}" class="w-32 h-32 rounded-full object-cover border-2 border-gray-300" />
      <div class="space-y-2">
        <h2 class="text-2xl font-bold text-gray-800">${selectedEmployee.firstName} ${selectedEmployee.lastName}</h2>
        <p class="text-gray-600"><strong>Email:</strong> ${selectedEmployee.email}</p>
        <p class="text-gray-600"><strong>Phone:</strong> ${selectedEmployee.contactNumber}</p>
        <p class="text-gray-600"><strong>Age:</strong> ${selectedEmployee.age}</p>
        <p class="text-gray-600"><strong>DOB:</strong> ${selectedEmployee.dob}</p>
        <p class="text-gray-600"><strong>Salary:</strong> $${selectedEmployee.salary}</p>
        <p class="text-gray-600"><strong>Address:</strong> ${selectedEmployee.address}</p>
      </div>
    </div>
  `;
  };
  if(selectedEmployee){
    renderSingleEmployee();
  }
  renderEmployees();
})();
