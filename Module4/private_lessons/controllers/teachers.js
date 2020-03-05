const fs = require('fs')
const data = require('../data.json')
const {age, date} = require('../utils')

exports.index = (req,res) => {
    return res.render('teachers/teachers', {teachers : data.teachers})
}

exports.show = (req,res) => {
    const {id} = req.params

    const foundTeacher = data.teachers.find( teacher => {
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher Not Found")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        created_at: new Intl.DateTimeFormat("en-US").format(foundTeacher.created_at)
    }
    return res.render('teachers/show', {teacher: teacher})
}

exports.create = (req, res) => {
    return res.render('teachers/create')
}

exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if(req.body[key] == "" ){
            return res.send(' Please, fill all fields!')
        }
    }
    
    let {avatar_url, birth, name, specialty, class_type, educational_level} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        educational_level,
        specialty: specialty.split(','),
        class_type,
        created_at,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send(`Write file error:${err}`)

        return res.redirect("/teachers")
    })

    // return res.send(req.body)
}

exports.edit = (req, res) => {
    const {id} = req.params

    const foundTeacher = data.teachers.find( teacher => {
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher Not Found")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso

    }


    return res.render('teachers/edit', {teacher})
}

exports.put = (req, res) => {
    const {id} = req.body
    let index = 0

    const foundTeacher = data.teachers.find( (teacher, foundIndex) => {
        if (teacher.id == id) {
            index = foundIndex
            return true
        }
    })

    if(!foundTeacher) return res.send("Teacher Not Found")

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send("Write error!")

        return res.redirect(`/teachers/${id}`)
    })
}

exports.delete = (req, res) => {
    const {id} = req.body

    const filteredTeachers = data.teachers.filter( teacher => {
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if(err) return res.send('Delete Error')

        return res.redirect('/teachers')
    })
}