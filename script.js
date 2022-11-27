//1) For the given JSON iterate over all for loops
var Students = [{
    "Name" : "Yoga", 
    "Req_Num" : "1234",
    "EMail": "yoga123@gmail.com",
  "Gender": "Female"

},
{
    "Name" : "Maaya", 
    "Req_Num" : "4321",
    "EMail": "Maaya123@gmail.com",
  "Gender": "Male"
}];
// for loop
console.log("This is for Loop")
for(var i = 0; i < Students.length; i++) {
    console.log(Students[i])
}
//for in
console.log("This is for in Loop")
for(let key in Students) 
{
    console.log(Students[key]);
}
//for of
console.log("This is for of Loop")
for(let key of Students) 
{   
    console.log(key);
}

//2) Resume
let MyResume={
    "Personal Details":{
        "Name":"Yogadharsni S",
        "Age": 21,
        "D.O.B": 06-06-2001,   
        "Nationality" :"Indian",
        "Languages Known":"Tamil,English",
        "Career Objective":"To work in a competitive environment where I can enhance my knowledge and put my learnt skills towards the growth of the organization."   
    },
    "Qualifications":[{
        "Degree":"Bca",
        "Percentage":"85%",
        "College":"Bishop Heber College",
        "studyType": "fulltime",
        "Year of Passout":2021
    },
    { "Degree":"Mca",
    "Percentage":"85%",
    "College":"Bharathidasan University",
    "studyType": "Partime",
    "Year of Passout":2023
    }],
    "Extracurricular activities":{ 
        "Hobbies":"Playing Shuttle,Baking,Painting,Volunteering",
        "Activities":"Participated in rallies,Student Council"
    } ,
    "Certificate": "PYTHON Certification (Udemy)",
    "Area of Interest":[
        {
            "Computer Languages":"C,C++,JavaSrcipt,Python"
        }],

    "Work":{
         "Company":"Infosys",
         "Year of Experience": 1,
         "Role":"Technical Consultant",
         "Project Name":"GE Appliances"
    },
"Declaration":"I hereby declare that all the details furnished above are true and correct to the best of my knowledge."
}
console.log(MyResume)