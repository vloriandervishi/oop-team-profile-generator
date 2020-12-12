
// We want to add a section of each employee type on the html

const  createManager=employee=>{
 
const managerSection= `<div class="col-2 mt-5">
<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${employee.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item">${employee.email}</li>
      <li class="list-group-item">${employee.phone}</li>
    </ul>
  </div>
</div>`;
 return managerSection;
}



module.exports=createManager;
