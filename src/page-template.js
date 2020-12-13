// We want to add a section of each employee type on the html

const addEngineer = (employee) => {
  const engineerSection = `
  
  <div class="col-2 mt-5">
  <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${employee.name}
      </div>
      <div class="card-header">
        ${employee.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id:${employee.id}</li>
        <li class="list-group-item">Email:${employee.email}</li>
        <li class="list-group-item">Github:${employee.github}</li>
      </ul>
    </div>
  </div>
  </div>
  `;
  return engineerSection;
};
const addIntern = (employee) => {
  const internSection = `
         
  <div class="col-2 mt-5">
<div class="card" style="width: 18rem;">
 <div class="card-header">
   ${employee.name}
 </div>
 <div class="card-header">
   ${employee.getRole()}
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item">Id:${employee.id}</li>
   <li class="list-group-item">Email:${employee.email}</li>
   <li class="list-group-item">School:${employee.school}</li>
 </ul>
</div>
</div>
`;
  return internSection;
};
const addManager = (employee) => {
  const managerSection = `

  <div class="col-2 mt-5">
  <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${employee.name}
      </div>
      <div class="card-header">
        ${employee.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id:${employee.id}</li>
        <li class="list-group-item">Email:${employee.email}</li>
        <li class="list-group-item">Phone:${employee.officeNumber}</li>
      </ul>
    </div>
  `;
  return managerSection;
};

module.exports = { addIntern, addEngineer, addManager };
