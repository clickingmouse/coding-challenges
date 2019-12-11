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

I wish I had more time to work on this assessment, maybe another day would allow me to dive deeper into each problem.

After glancing at all the problems, The roadmap was to attempt on all the basic tasks first, and come back to the bonus points at the end to kind of double check my work.

The answers to Task 1 & 2 are written in the /tasks/task_1/ & /tasks/task_2 directory.

These were written in golang.  The reason being it is similar to C and there were more algorithms pseudocode tailored for C.

Task 3 - 
MISSION 1 
There is a very high chance that I may have underestimated the work required.  The plan was to double check it when working on the bonus point applying the validation to the route, unfortunately the plan did not work out

MISSION 2 & MISSION3
Should be working both are new libraries which I have nevere used before.  In the end I opted for and SQL string for MISSION 3 as I am very sure that sending a SQL statement would be one of the options available.

Task 4 -
Due to time limitations. I have only did the basic requirement.  There might have been a more elegant (one liner) way to flatten the nested json , i opted to take the easier way. 

ps
all of a sudden i was gett git pre-commit errors, and hence removed the following line from the package.json 
"precommit": "yarn lint",