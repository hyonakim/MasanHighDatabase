export default function (form) {
  return `
    <form class='formtemplate'>
      <input type="firstName" placeholder='First Name' id='firstname' class='input'>
      <input type="lastName" placeholder='Last Name' id='lastname' class='input'>
      <input type='age' placeholder='Age' id='age' class='input'>
      <input type="gradelevel" placeholder='Grade Level' id='gradelevel' class='input'>
      <input type='gpa' placeholder='GPA' id='gpa' class='input'></div>
      <input type='specialSkill' placeholder='Special Skill' id='skill' class='input'>
      <input type='weapon' placeholder='Weapon of Choice' id='weapon' class='input'>
      <div><button class='createStudent' data-to='people'>Add Student</button></div>
    </form>
    
  `;
}