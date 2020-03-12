const Member = require('../models/member')
const { age, date } = require('../../lib/utils')

module.exports = {
    index(req, res) {

        Member.all(members => {
            return res.render('members/index', { members })
        })

    },
    show(req, res) {
        Member.find(req.params.id, member => {
            if (!member) return res.send('Member Not Found')

            member.birth = date(member.birth).birth

            member.created_at = date(member.created_at).format

            return res.render("members/show", { member })
        })
    },
    create(req, res) {
        return res.render('members/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send(' Please, fill all fields!')
            }
        }

        Member.create(req.body, member => {
            return res.redirect(`/members/${member.id}`)
        })


    },
    edit(req, res) {
        Member.find(req.params.id, member => {
            if (!member) return res.send('Member Not Found')

            member.birth = date(member.birth).iso

            member.created_at = date(member.created_at).format

            return res.render("members/edit", { member })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send(' Please, fill all fields!')
            }
        }

        Member.update(req.body, _ => {
            return res.redirect(`/members/${req.body.id}`)
        })
    },
    delete(req, res) {
        Member.delete(req.body.id, _ => {
            return res.redirect(`/members`)
        })
    },
}