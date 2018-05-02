$(function(){
    let deleteStudentId=$('#deleteStudentId')

    $('#deleteStudentBtn').click(function () {
        console.log("delete btn tapped")
        deleteStudent(

            deleteStudentId.val()
        )
        window.alert("Student deleted")


    })
})