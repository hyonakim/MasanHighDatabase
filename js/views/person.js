export default function(data) {
	return `
    <div class='student'>
      <div class='backBtn' data-to='people'>
        <i class="fa fa-arrow-circle-left fa-3x"></i>
      </div>
      <img src='${data.Photo}' class='profilePic'>
      <h3>Name: ${data.FirstName} ${data.LastName} <span>Age: ${data.Age}</span></h3>
      <p>Skill: ${data.SpecialSkill} <span>Weapon: ${data.Weapon}</p>
    </div>
    `;
}

