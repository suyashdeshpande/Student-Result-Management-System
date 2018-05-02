
function fetchStudents (done) {
    $.get('/api/students', function (data) {
        done(data)
    })
}

function addStudent (Id, name, physics, chemistry, maths, done) {
    $.post('/api/students', {
        id:Id,
        name: name,
        physics:physics,
        chemistry:chemistry,
        maths:maths
    }, function (data) {
        done(data)
    })
}

function deleteStudent(Id) {
    $.post('/api/students/delete',{
        id:Id
    }
    )

}

function createStudentCard (student) {
    return $(`
<tr>
      
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.physics}</td>
    <td>${student.chemistry}</td>
    <td>${student.maths}</td>
    </tr>





















    /*<div class="col-4 card mx-2 p-4">
        <h4 class="student-name">${student.name}</h4>
        <span>${student.id}</span>

        <div class="row">
            <div class="col m-3 p-3">
                <b>Physics:${student.physics}</b>
                <b>Chemistry:${student.chemistry}</b>
                <b>Maths:${student.maths}</b>
            </div>

        </div>
    </div>*/
`)
}
