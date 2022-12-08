const getSubmitBtn = document.getElementById('btn')
const getParentElem = document.querySelector('.parent')


getSubmitBtn.addEventListener('click', () => {
    const id = Date.now()
    const getInpValue = document.getElementById('inp')

    const createNewElem = document.createElement('div')
    createNewElem.setAttribute('id', id)
    createNewElem.setAttribute('class', 'child')

    createNewElem.innerHTML = `
    <div class='title'> ${getInpValue.value} </div>
    <div> 
        <button  onclick="handleRemove(${id})" ><i class="fa-solid fa-xmark"></i></button>
        <button onclick="handleEdit(${id})"> edit </button>
    </div>
    `
    getParentElem.appendChild(createNewElem)
    getInpValue.value = ''


})

const handleRemove = (id) => {
    const remveElem = document.getElementById(id)
    remveElem.remove()
}

const handleEdit = (id) => {
    const getInpValue = document.getElementById('inp')
    const editElem = document.getElementById(id)
    editElem.remove()
    const editText = editElem.children[0]
    getInpValue.value = editText.innerHTML
}


// clear all item 

const clearAllItem = document.getElementById('clearAll')

clearAllItem.addEventListener('click', () => {
    const removeAll = document.querySelector('.parent')
    removeAll.innerHTML = ''
})
