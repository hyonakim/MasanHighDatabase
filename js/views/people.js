function processData(data) {
	return data.map((item) => {
    return `
      <div class='person-list-item' data-person-id='${item.objectId}'>
        <span>${item.FirstName} ${item.LastName}</span>
      </div>
    `;
	}).join('');
}

export default function(data) {
  return `
    <div class='people-list'>
      <h1>Students</h1>
      <div>${processData(data)}</div>
    </div>
    `;
}