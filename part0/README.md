# Part 0

Diagrams created with https://www.websequencediagrams.com using the following code:

### 0.4-new-note.png
```
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server:
A new note is saved on the server
end note


server-->browser: 302 FOUND (Redirect to /exampleapp/notes)
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code (new version)
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

### 0.5-spa.png (Single Page Application)
```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

### 0.6-spa-new-note.png
```
note over browser:
When hitting save-button: 
- A note-object is created
- it is added to the locally stored notes-array
- the redraw-method is called
- the sendToServer-method is called (POST)
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server:
A new note is saved on the server
end note

server-->browser: 201 CREATED
```