$(function () {
    let studentId = $('#studentId')
    let studentName = $('#studentName')
    let physics = $('#physics')
    let chemistry = $('#chemistry')
    let maths = $('#maths')

    
    $('#btnStudentAdd').click(function () {
console.log("add btn clicked")
        addStudent(
            studentId.val(),
            studentName.val(),
            physics.val(),
            chemistry.val(),
            maths.val(),
            function (addedStudent) {
                window.alert("Added " + addedStudent.name + " to Database")
            }
        )


    })
})