let studentMannager=new StudentMannager();
studentMannager.showStudent()
function save(){
  let Name= document.getElementById("name").value;
  let Age= document.getElementById("age").value;
  let Address= document.getElementById("address").value;

    studentMannager.add(Name,Age,Address);

}

function deleteStudent(index){
  studentMannager.delete(index);
}
function updateStudent(index){
  studentMannager.update(index)
}