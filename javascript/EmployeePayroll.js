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
        if (startDate > now){
            throw "Start Date is a Futute Date!"
        }
        
        else if (difference > 30) {
            throw "Start Date is beyond 30 days!"
        }
        else{ 
            this._startDate = startDate.toLocaleDateString('en-US');
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
   let empDate = Date.parse(empDay+" "+empMonth+" "+empYear)

   //Notes
   let empNotes = document.querySelector('#notes')
   let empNote = empNotes.value;
// Creating Employee Object
   let empPayrollDataObject = new EmployeePayrollData(empNam,empImage,empGender,empDepartment,empSal,empDate,empNote)

   saveToLocalStorage(empPayrollDataObject)
}

function saveToLocalStorage(empPayrollDataObject){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(empPayrollDataObject);
    }
    else{
        employeePayrollList = [empPayrollDataObject]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}



