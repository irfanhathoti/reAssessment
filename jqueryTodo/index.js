$(document).ready(function () {
    $('#btn').click(function () {
        const id = Date.now()
        const val = $('#inp')
        $('#parent').append(`<div class='child' id="${id}"> <div class='title'> ${val.val()}</div> <div> <button id='handleRemove' onclick='handleRemove(${id})' > Remove </button> <button id="handleEdit" onClick='handleEdit(${id})'> Edit </button> </div> </div>`)
        val.val('')
    })
    
    $('.clearAll').click(function(){
        $('.child').text('')
    })

    $("#handleEdit").click(function handleEdit(id){
        console.log("hello")
    })

})
const handleRemove = (id) => {
    console.log("hlo")
    $(`#${id}`).remove()
}

const handleEdit = (id) => {
   const a =  $(`#${id}`)
   a.remove()
   const rslt = a.children()[0].innerHTML
   const val = $('#inp').val(rslt)
}
