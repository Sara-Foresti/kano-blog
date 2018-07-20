I have built this application using Rails, the Ruby framework.
To store the reader’s email, name and message I’ve created a Readers model and saved the instances into a Postgres Data Base. After submitting, you can verify that those data are actually stores locally by running the command ‘rails c’ in the console and then Readers.last would retrieve the last instance.
This is a one page app, therefore, for the sake of the challenge I left the  links  in the navbar empty.
This test It’s been a great chance of practising media queries and now I feel much stronger about this front end technique.
Since I've added validation for the presence of the input field, in case they're missing you'll see an error message in the form.
I've tried my best to combine the display of alerts with with this logic and the AJAXification of the page, but, in the time frame given, I've opted to leave the validations, avoiding the persistance of incorrect or incomplete data in the Data Base.