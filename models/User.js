module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataType.STRING, 
            allowNull: false, 
        },

        email: {
            type: DataType.STRING, 
            allowNull: false, 
        },

        password: {
            type: DataType.STRING, 
            allowNull: false, 
        },

    })
    return Users
}

