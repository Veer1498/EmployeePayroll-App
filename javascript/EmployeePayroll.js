class EmployeePayrollData{
    // getter and setter method 

    constructor (...param){
        this._name = param[0]
        this._profilePicture = param[1]
        this._gender = param[2]
        this._department = param[3]
        this._salary = param[4]
        this._startDate = param[5]
        this._notes = param[6]
    }
    get name() {
        return this._name;
    }
    set name(name) {
            this._name = name;
    }
    get profilePic() {
        return this._profilePicture;
    }
    set profilePic(profilePicture) {
        this.profilePicture = profilePicture;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get notes() {
        return this._note;
    }
    set notes(notes) {
        this._notes = notes;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let now = new Date();
        let difference = Math.round(now - startDate);
        if (startDate > now && difference > 30){
            throw "Start Date is Not in Range!"
        }
        
        else{ 
            this._startDate = startDate
        }
    }
    get notes(){
        return this._notes
    }
    set notes(notes){
        this._notes = notes
    }
    
    toString() {
        // if(this._startDate != empDate){
        //     empDate = "undefined"
        // }
        // else{
        //     empDate = this._startDate.toLocalDateString("en-US",{
        //         year:'numeric',month:'long',day:'numeric'
        //     });
        // }
        return "name='" + this.name +
            ", profilePic=" + this.profilePic+", gender=" + this.gender + ",\n department=" + this.department +
            ",salary=" + this.salary + ", startDate=" + this.startDate + ",note=" + this.notes;
    }
}

function save(){

    //name
   let empName = document.querySelector("#name");
   empNam = empName.value

    //profile pic
   let empProfile = document.querySelectorAll('input[name="profile"]')
    let empImage;
   for(let image of empProfile){
        if(image.checked){
            empImage = image.value;
            break;
        }
   }
   //gender
   let empGenders = document.querySelectorAll('input[name="gender"]')
   let empGender;
   for(let gender of empGenders){
    if(gender.checked){
        empGender = gender.value;
        break;
    }
   }
    
   //Dept
   let empDept = document.querySelectorAll('input[name="department"]')
   let empDepartment = [];
   for(let dept of empDept){
    if(dept.checked){
        empDepartment.push(dept.value);
    }
   }

   //Salary
   let empSalary = document.querySelector('input[name="salary"]')
   let empSal = empSalary.value;


   //Start Date   

   let empStartDay = document.querySelector("#date #day option:checked")
   let empDay = empStartDay.value;
   let empStartMonth = document.querySelector("#month option:checked")
   let empMonth = empStartMonth.value;
   let empStartYear = document.querySelector("#year option:checked")
   let empYear = empStartYear.value;
   let empDate = (empDay+" "+empMonth+" "+empYear)

   //Notes
   let empNotes = document.querySelector('#notes')
   let empNote = empNotes.value;

// Creating Employee Object
   let empPayrollDataObject = new EmployeePayrollData(empNam,empImage,empGender,empDepartment,empSal,empDate,empNote)
//    console.log("Data Object")
//    console.log(empPayrollDataObject)
try{
    saveToLocalStorage(empPayrollDataObject)

}
catch(e){
    console.log(e)
}
   ShowLocalStorage();
}
//UC - 3 Day 44
function saveToLocalStorage(empPayrollDataObject){
    let employeePayrollList = [];
    // employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    employeePayrollList.push(empPayrollDataObject);
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))

}

function ShowLocalStorage(){
    let empList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    alert(empList.toString());
}

window.addEventListener('DOMContentLoaded',(event)=>{
    // alert("Calling")
    createInnerHtml();
});

//Template Literals
const createInnerHtml=() =>{
    const headerHTML ="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHTML = `${headerHTML}
        <tr>
            <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
            <td>Veerendra</td>
            <td>Male</td>
            <td><div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
            </td>
            <td>25000</td>
            <td>20 Sep 2022</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                src="../assets/icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit"
                src="../assets/icons/create-black-18dp.svg"> 
            </td>
        </tr>
        `;
    document.querySelector('#display').innerHTML = innerHTML;
}



