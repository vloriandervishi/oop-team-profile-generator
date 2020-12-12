
// We want to add a section of each employee type on the html

const  createManager=employee=>{
 
const addSection= `<div class="row">
<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${employee.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item">${employee.email}</li>
      <li class="list-group-item">${employee.github}</li>
    </ul>
  </div>
</div>`;
 return addSection;
}



module.exports=createManager;
