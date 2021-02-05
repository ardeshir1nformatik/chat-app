const users = []

const addUser = ({ id, username, room }) => {
// clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

// validate data
    if (!username || !room) {
         return {
             error: 'Username and room are required'
         }
    }

// check for existing user
    const existingUser = users.find((user) => user.room === room && user.username === username)

    // validate username

    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // store user

    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    //return users.filter((user) => user.id !== id)
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}



// addUser({
//     id:'10',
//     username: 'ardy',
//     room: 'ffm'
// })
// addUser({
//     id:'11',
//     username: 'jess',
//     room: 'ny'
// })
// addUser({
//     id:'12',
//     username: 'jake',
//     room: 'ffm'
// })

// addUser({
//     id:'13',
//     username: 'jimm',
//     room: 'ny'
// })

// console.log(users)

// // removeUser('12445')

// // console.log(users)

// // console.log(getUser('19'))
//  console.log(getUsersInRoom('dc'))
// // console.log(removeUser('11'))
// // console.log(users)
