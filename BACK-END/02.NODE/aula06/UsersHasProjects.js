const sequelize = require('./configBanco')
const {DataTypes} = require('sequelize')

//modelos que estão relacionados a esse modelo, e serão referenciados por ele
const Users = require('./UsersModel')
const Projects = require('./ProjectsModel')

const UsersHasProjects = sequelize.define('users_has_projects', {
    users_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    },
    projects_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Projects,
            key: 'id'
        }
    }
})

//um projeto pode ter vários usuários
Projects.hasMany(UsersHasProjects, {
    foreignKey: 'projects_id'
})

//um usuário pode ter vários projetos
Users.hasMany(UsersHasProjects, {
    foreignKey: 'users_id'
})