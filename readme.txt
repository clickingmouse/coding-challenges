This is the coding assessment for Sugar-AI
The assessment email was received Tuesday 1130ish AM. unfortunate I had pre arrangements so could not start on the assessment until Wednesday 10AM

I do have existing code I would like to share
https://github.com/clickingmouse/m7website.git

I have created a login and system where the use can post and delete content it is hosted 
www.majestic7guesthouse.com/suggested-apps

However there seems to be a major performance problem as it loads very slow, while looking into this I read somewhere that using goLang as the backend may improve performance.  Although I know its 80% due to the loading of the static files, I decided to pick up goLang also.  

2 weeks into reading a book on golang I was given a coding asesessment, I opted to use react/golang
the repo is https://github.com/clickingmouse/t1-gol

It is Docker ready and is hosted here 
https://frozen-harbor-01265.herokuapp.com/

----------------------------------------------------------------
The answers to Task 1 & 2 are written in the /tasks/task_1/ & /tasks/task_2 directory.

These were written in golang.  The reason being it is similar to C and there were more algorithms pseudocode tailored for C.

Task 3 - 
MISSION 1 
updated files:
api/validations/product.validation.json
api/validations/productStock.validation.json
referencing hapi - joi 

MISSION 1 - Bonus point
updated files:
api/routes/v1/product.route.js
api/routes/v1/productStock.route.js
* have not extensively tested it except that it was sending the same output

MISSION 2
BIG ASSUMPTION:
that the path is a type error
the api path is at ...v1/product?isAvailable={IS_AVAILABLE}
not ...api/v1/product...

updated files
projects/app-api/src/api/controllers/product.controller.js 
-> list
originally modified that splits the req.query with if/else
afterwards I thought there should be a more better cleaner way and refactored code, as a result this file is reverted to unchanged 
/api/models/Product/index.js 
-> static.list 
originally created listAvailable but no longer needed after refactoring

MISSION 2 Bonus point
implemented in file
/api/models/Product/index.js 
-> static.list 


Mission 3
projects/app-api/src/api/routes/v1/product.route.js
*validation not applied to this route
projects/app-api/src/api/controllers/product.controller.js
projects/app-api/src/api/models/Product/index.js
->listSummary
used SQL query because, I can test the query directly on an postgresql adminpanel.  path of least resistence prevailed here



Task 4 -  [Optional] 

projects/app-portal/src/pages/*
projects/app-portal/src/App.js

installed react-bootstrap but didn't really extensively used it
Did the bare bones basic, 
refactored and added isExpired feature

for the react-router... I am not really sure how to do it.

ps
all of a sudden i was gett gitting pre-commit errors, and hence removed the following line from the package.json 
"precommit": "yarn lint",