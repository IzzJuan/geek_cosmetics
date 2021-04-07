export default{
        database: {
            dialect: process.env.DATABASE_DIALECT || 'mysql',
            url: process.env.DATABASE_URI || 'mysql://admin:adminmaster@database-instance.c3jkemwvwcuj.us-east-2.rds.amazonaws.com:3306/geek-cosmetics',
        }
}