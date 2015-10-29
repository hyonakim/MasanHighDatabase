function processData(data) {
	return data.map((item) => {
    return `
      <div class='person-list-item' data-person-id='${item.objectId}'>
        <img src='${item.Photo}' width='40px' height='40px'><span>${item.FirstName} ${item.LastName}</span>
      </div>
    `;
	}).join('');
}

export default function(data) {
  return `
    <div class='people-list'>
      <h2>Student Database - Masan High</h2>
      <div>${processData(data)}</div>
      <div class='addStudent'><i class="fa fa-plus-circle fa-4x"></i></div>
    </div>
    `;
}