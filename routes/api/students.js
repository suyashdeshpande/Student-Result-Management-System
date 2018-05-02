const Student = require('../../db').Student
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all students
    Student.findAll()
        .then((students) => {
            res.status(200).send(students)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve students"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
  /*  if (isNaN(req.body.id)) {
        return res.status(403).send({
            error: "Id is not valid number"
        })
    }*/
    // Add a new students
    Student.create({
        id:parseInt(req.body.id) ,
        name: req.body.name,
        physics: parseInt(req.body.physics),
        chemistry: parseInt(req.body.chemistry),
        maths: parseInt(req.body.maths)
    }).then((student) => {
        res.status(201).send(student)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding student"
        })
    })
})

route.post('/delete',(req,res)=>{

    Student.destroy({
        where:{
            id:req.body.id
        }
    }).then(function (rowDeleted) {

        if (rowDeleted == 1) {
            console.log("deleteion successful")

        }
    },function(err){
        console.log(err)

    })
})

exports = module.exports = route