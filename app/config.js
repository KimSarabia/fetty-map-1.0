// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "fetty-user-map-ec2",
        url: "mongodb://<dbuser>:<dbpassword>@ds053148.mongolab.com:53148/FettyMapApp",
        port: 27017
    },

    local:
    {
        name: "fetty-user-map-local",
        url: "mongodb://localhost/FettyMapApp",
        port: 27017
    },

    localtest:
    {
        name: "fetty-user-map-local",
        url: "mongodb://localhost/FettyMapAppTest",
        port: 27017
    }

};
