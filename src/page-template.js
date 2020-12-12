
// We want to add a section of each employee type on the html

const  createEmployee=(employee,title)=>{

const employeeSection= `<div class="col-2 mt-5">
<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${employee.name}
    </div>
    <div class="card-header">
      ${title}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:${employee.id}</li>
      <li class="list-group-item">Email:${employee.email}</li>
      <li class="list-group-item">Phone:${employee.phone}</li>
    </ul>
  </div>
</div>`;
 return employeeSection;
}



module.exports=createEmployee;
