module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        desired_currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_money: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        current_currency: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transaction_location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        exchange_rate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fees: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        total_charges: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transaction: {
            type: DataTypes.BOOLEAN
        }
    })

    Transaction.associate = function(models) {
        Transaction.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Transaction
}


