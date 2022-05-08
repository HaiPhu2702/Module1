class StudentMannager {

    constructor() {
        this._student = [];
    }

    showStudent() {
        let html = ''
        if (this._student.length === 0) {
            html += '<tr>'
            html += '<td colspan="6"> No data</td>'
            html += '</tr>'
        } else {
            for (let i = 0; i < this._student.length; i++) {
                html += '<tr>'
                html += `<td>${i + 1}</td>`
                html += `<td>${this._student[i].getName1()}</td>`
                html += `<td>${this._student[i].getAge()}</td>`
                html += `<td>${this._student[i].getAddress()}</td>`
                html += `<td><button onclick="deleteStudent(${i})">Delete</button></td>`
                html += `<td><button onclick="updateStudent(${i})">Update</button></td>`
                html += '</tr>'
            }
        }
        document.getElementById("list-student").innerHTML = html;
    }

    add(name, age, address) {
        let student = new Student(name, age, address);
        this._student.push(student);
        this.showStudent();
        this.clearInput()
    }

    clearInput() {
        document.getElementById("name").value = ''
        document.getElementById("age").value = ''
        document.getElementById("address").value = ''
    }

    delete(index) {
        this._student.splice(index, 1)
        this.showStudent()
    }
    update(index){
        let Name= prompt("Name");
        let Age= prompt("Age");
        let Address= prompt("Adress");
        let new_update=new Student(Name,Age,Address);
        this._student[index]=new_update;
        this.showStudent();
    }

}