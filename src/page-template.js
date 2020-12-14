// We want to add a section of each employee type on the html

const addEngineer = (employee) => {
  const engineerSection = `
  
  
  <div class="card mx-3 shadow p-3 mb-5 bg-light rounded alert alert-warning" style="width: 18rem;">
      <div class="card-header text-center">
        ${employee.name}
      </div>
      <div class="card-header text-center">
        ${employee.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item list-group-item-warning">Id: ${employee.id}</li>
        <li class="list-group-item list-group-item-warning">Email:<a href="www.${employee.name}@gmail.com">${employee.email}</a></li>
        <li class="list-group-item list-group-item-warning">Github:<a href="www.github.com">${employee.github}</a></li>
      </ul>
    </div>
  
  
  `;
  return engineerSection;
};
const addIntern = (employee) => {
  const internSection = `
         
  
<div class="card mx-3 shadow p-3 mb-5 bg-light rounded alert alert-success" style="width: 18rem;">
 <div class="card-header text-center">
   ${employee.name}
 </div>
 <div class="card-header text-center">
   ${employee.getRole()}
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item list-group-item-success">Id:  ${employee.id}</li>
   <li class="list-group-item list-group-item-success">Email:<a href="www.${employee.name}@gmail.com"">${employee.email}</a></li>
   <li class="list-group-item list-group-item-success">School: ${employee.school}</li>
 </ul>
</div>

`;
  return internSection;
};
const addManager = (employee) => {
  const managerSection = `

  
  <div class="card mx-3 shadow p-3 mb-5 bg-light rounded alert alert-info" style="width: 18rem;">
      <div class="card-header text-center">
        ${employee.name}
      </div>
      <div class="card-header text-center">
        ${employee.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item list-group-item-info">Id: ${employee.id}</li>
        <li class="list-group-item list-group-item-info">Email: <a href="www.${employee.name}@gmail.com"">${employee.email}</a></li>
        <li class="list-group-item list-group-item-info">Phone: ${employee.officeNumber}</li>
      </ul>
      </div>
    
  `;
  return managerSection;
};

module.exports = { addIntern, addEngineer, addManager };
