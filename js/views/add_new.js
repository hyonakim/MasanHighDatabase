export default function (form) {
  return `
    <form class='formtemplate'>
      <label>Student Name<input type="studentName"></label>
      <label>Age<input type='age'></label><label>GPA<input type='gpa'></label>
      <label>Special Skill<input type='specialSkill'></label>
      <label>Weapon<input type='weapon'></label>
    </form>
  `;
}