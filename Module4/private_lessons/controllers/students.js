const fs = require('fs')
const data = require('../data.json')
const {age, date} = require('../utils')

exports.index = (req,res) => {
    return res.render('students/students', {students: data.students})
}

exports.show = (req,res) => {
    const {id} = req.params

    const foundStudent = data.students.find( student => {
        return student.id == id
    })

    if(!foundStudent) return res.send("Student Not Found")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthday,
        age: age(foundStudent.birth),
        created_at: new Intl.DateTimeFormat("en-US").format(foundStudent.created_at)
    }

    return res.render('students/show', {student: student})
}

exports.create = (req, res) => {
    return res.render('students/create')
}

exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if(req.body[key] == "" ){
            return res.send(' Please, fill all fields!')
        }
    }
    
    let {
        avatar_url, 
        birth, 
        name,
        email,
        grade,
        available_workload 
    } = req.body

    birth = Date.parse(birth)

    
    const created_at = Date.now()

    let id = 1

    const lastStudent = data.students[data.students.length -1]

    if(lastStudent) {
        id = lastStudent.id + 1
    }
    

    data.students.push({
        id,
        avatar_url,
        name,
        email,
        birth,
        grade,
        available_workload: Number(available_workload),
        created_at,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send(`Write file error:${err}`)

        return res.redirect("/students")
    })

}

exports.edit =  (req, res) => {
    const {id} = req.params

    const foundStudent = data.students.find( student => {
        return student.id == id
    })

    if(!foundStudent) return res.send("Student Not Found")

    const student = {
        ...foundStudent,
        age: date(foundStudent.birth).iso

    }


    return res.render('students/edit', {student})
}

exports.put = (req, res) => {
    const {id} = req.body
    let index = 0

    const foundStudent = data.students.find( (student, foundIndex) => {
        if (student.id == id) {
            index = foundIndex
            return true
        }
    })

    if(!foundStudent) return res.send("Student Not Found")

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send("Write error!")

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = (req, res) => {
    const {id} = req.body

    const filteredStudents = data.students.filter( student => {
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send('Delete Error')

        return res.redirect('/students')
    })
}