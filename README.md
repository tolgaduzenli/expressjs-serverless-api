# Serverless API provided by ExpressJs and AWS Lambda

## What you will find in this project

* AWS Lambda
* ExpressJs
* Serverless API
* Nodejs Routing
* Mongodb connection
* HTTP request Body-parsing

### How to install

* Pull the project from repository
* Create `variables.env` file and set your MongoDB connection in it with the `DB=` prefix
    1. Example: `DB=mongodb://`
* Run 'yarn install'
* To run offline mode on your local, use `serverless offline start --skipCacheInvalidation`
    1. Go to `http://localhost:3000`
* To deploy AWS, use `serverless deploy`
* Ofcourse you need to completed previous steps to deploy AWS. (Create AWS account, User definition by Identity and Access Management, local installation for serverless CLI etc. )
* Please follow the instractions from the official [web page](https://serverless.com/blog/serverless-express-rest-api/) of serverless to gather all those things.

### End point mapping

* Get request to the home `/` return only dummy message
* GET all data `/notes`
* POST request `/notes` with `{"title":"", "description":""}`
* PUT request `/notes/?id=<id>` with `{"title":"", "description":""}`
* DELETE request `/notes/?id=<id>`