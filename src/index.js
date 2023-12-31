document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelector('form')
  list.addEventListener('submit', e => {
    e.preventDefault();
    buildList(e.target.new_task_description.value);
    list.reset()
  })
});

function buildList(task) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteAfterDone)
  btn.textContent = 'Done'
  let newBtn = document.createElement('button')
  newBtn.addEventListener('click', priorityColorSelect)
  newBtn.textContent = 'Priority'
  p.textContent = `${task} `;
  p.appendChild(btn)
  p.appendChild(newBtn)
  document.getElementById('list').appendChild(p)
}

function deleteAfterDone(e) {
  e.target.parentNode.remove();
}

function priorityColorSelect(e) {
  let p = e.target.parentNode

  let select = document.createElement('select');
  select.setAttribute('id', 'colorOptions');
  p.appendChild(select);
  
  const options = [
    {text: 'RED: Highest Priority', value: 'red'},
    {text: 'PINK: Medium Priority', value: 'pink'},
    {text: 'GREEN: Lowest Priority', value: 'green'},
  ];
  
  options.forEach(function(option) {
    let optElement = document.createElement('option');
    optElement.textContent = option.text;
    optElement.value = option.value;
    select.appendChild(optElement);
  });

  select.addEventListener('change', function(e) {
    let colorSelected = e.target.value;
    p.style.color = colorSelected;
  })
}