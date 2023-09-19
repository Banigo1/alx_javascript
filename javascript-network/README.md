## Python - Network

## Concepts

    - Why JavaScript programming is amazing
    - How to manipulate JSON data
    - How to use request and fetch API
    - How to read and write a file using fs module


## Usage

Educational purposes

## Tasks

 ### 0-statuscode.js: A script that display the <statuscode> of a (GET) request.

### 1-starwars_title.js: A script that prints the title of a Star Wars movie where the episode number matches a given integer.


### 2-starwars_count.js: A script that prints the number of movies where the character “Wedge Antilles” is present.


### 3-request_store.js: A script that gets the contents of a webpage and stores it in a file.


### 4-completed_tasks.js: A script that computes the number of tasks completed by user id.

### 5-starwars_characters.js: A script that prints all characters of a Star Wars movie.








0-hbtn_status.py: Python script that fetches https://intranet.hbtn.io/status
1-hbtn_header.py: script that takes in a URL, sends a request to the URL and displays the value of the X-Request-Id variable found in the header of the response.
2-post_email.py: script that takes in a URL and an email, sends a POST request to the passed URL with the email as a parameter, and displays the body of the response (decoded in utf-8).
3-error_code.py:script that takes in a URL, sends a request to the URL and displays the body of the response (decoded in utf-8):
Manages urllib.error.HTTPError exceptions and print: Error code: followed by the HTTP status code, uses the packages urllib and sys.
4-hbtn_status.py: script that fetches https://intranet.hbtn.io/status
Uses the package requests
5-hbtn_header.py: script that takes in a URL, sends a request to the URL and displays the value of the variable X-Request-Id in the response header
Uses the packages requests and sys
The value of this variable is different for each request
6-post_email.py: script that takes in a URL and an email address, sends a POST request to the passed URL with the email as a parameter, and finally displays the body of the response.
The email must be sent in the variable email
Uses the packages requests and sys
7-error_code.py: script that takes in a URL, sends a request to the URL and displays the body of the response.
If the HTTP status code is greater than or equal to 400, print: Error code: followed by the value of the HTTP status code
Uses the packages requests and sys
8-json_api.py: script that takes in a letter and sends a POST request to http://0.0.0.0:5000/search_user with the letter as a parameter. The letter must be sent in the variable q.
If no argument is given, set q=""
If the response body is properly JSON formatted and not empty, display the id and name like this: []
Otherwise: -Display Not a valid JSON is the JSON is invalid -Display No result is the JSON is empty -You must use the package requests and sys
10-my_github.py: script that takes your Github credentials (username and password) and uses the Github API to display your id
Uses Basic Authentication with a personal access token as password to access to your information (only read:user permission is needed)
The first argument will be your username
The second argument will be a password (in your case, a personal access token as password)
Use the package requests and sys