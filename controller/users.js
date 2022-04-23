const users = require('../data/index')
const sampleUser = require('../data/sampleUser')


const listUsers = (req, res) => {
    res.json(users)
}

const showUser = (req, res) => {
    users.find((user) => {
        if(user.id == req.params.id) {
            return res.json(user)
        }
    })

    users.forEach((user) => {
        if(req.params.id !== user.id) {
            return res.status(400).send("No users found")
        }
    })
}

const createUser = (req, res) => {
    let counter = users.length
    users.push({
        id: ++counter,
        body: sampleUser
    })
    res.json(users[users.length - 1])
}

const updateUser = (req, res) => {
    users.find((user) => {
        if(user.id == req.params.id) {
            user.username = "SonicSpider"
            return res.json(user)
        }
    })

    users.forEach((user) => {
        if(req.params.id !== user.id) {
            return res.status(400).send("No users found")
        }
    })
}

const deleteUser = (req, res) => {
    users.find((user) => {
        if(user.id == req.params.id) {
            let deletedUser = users.splice(req.params.id - 1, 1)
            deletedUser[0].deleted = "Deleted User"
            return res.json(deletedUser)
        }
    })

    users.forEach((user) => {
        if(req.params.id !== user.id) {
            return res.status(400).send("No users found")
        }
    })
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}