[![Build Status](https://travis-ci.org/Kirill-Vorobyev/nat-vuln-data.svg?branch=master)](https://travis-ci.org/Kirill-Vorobyev/nat-vuln-data)

# National Vulnerability Database Display Tool

## About:
Display tool for the NVD Dataset

Express server with rest api endpoints for data retrieval and file serving.

React front end for displaying retrieved data.

#### Demo:
https://nat-vuln-data.herokuapp.com/

- Dataset currently available: **2017**
- Keyword search returns all matching results from dataset
- Scroll to the bottom to load more entires from the dataset into the ist.
- Clicking on a list entry searches the entire dataset for that CVE and returns all results.

## To set up and run:
This project requires node.js to be installed on the system.
https://nodejs.org/en/

- Open a terminal window in the root directory and execute the following commands
```
npm install
```
*This will install all the dependencies, will take some time.*

```
npm start
```
*This will launch the express server.*

- Once you see:
```
Listening on port 5000
```
**You're good to go**

#### Visit http://localhost:5000/ in a browser to view the app
*Up-to-date google chrome or firefox recommended*
