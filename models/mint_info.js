module.exports = (sequelize, DataTypes)=>{
    
    const Mint_info = sequelize.define('Mint_info', {
        idx:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        country_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        stor_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        country_name:{
            type: DataTypes.STRING(20),
            allowNull: true
        },
        store_name:{
            type: DataTypes.STRING(128),
            allowNull: true
        },
        owner_addr:{
            type: DataTypes.STRING(256),
            allowNull: true
        },
        transactionHash:{
            type: DataTypes.STRING(256),
            allowNull: true
        }

    },{
        tableName: 'mint_info',
        paranoid: false,
    })

    return Mint_info
}