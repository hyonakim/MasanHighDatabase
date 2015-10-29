export default function (form) {
  return `
    <form class='formtemplate'>
      <div><input type="firstName" placeholder='First Name' id='firstname'></div>
      <div><input type="lastName" placeholder='Last Name' id='lastname'></div>
      <div><input type='age' placeholder='Age' id='age'></div>
      <div><input type="gradelevel" placeholder='Grade Level' id='gradelevel'></div>
      <div><input type='gpa' placeholder='GPA' id='gpa'></div>
      <div><input type='specialSkill' placeholder='Special Skill' id='skill'></div>
      <div><input type='weapon' placeholder='Weapon of Choice' id='weapon'></div>
    </form>
    <button class='createStudent'>Add Student</button>
  `;
}