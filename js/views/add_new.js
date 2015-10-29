export default function (form) {
  return `
    <form class='formtemplate'>
      <div><input type="firstName" placeholder='First Name' id='firstname' class='input'></div>
      <div><input type="lastName" placeholder='Last Name' id='lastname' class='input'></div>
      <div><input type='age' placeholder='Age' id='age' class='input'></div>
      <div><input type="gradelevel" placeholder='Grade Level' id='gradelevel' class='input'></div>
      <div><input type='gpa' placeholder='GPA' id='gpa' class='input'></div>
      <div><input type='specialSkill' placeholder='Special Skill' id='skill' class='input'></div>
      <div><input type='weapon' placeholder='Weapon of Choice' id='weapon' class='input'></div>
      <button class='createStudent'>Add Student</button>
    </form>
    
  `;
}