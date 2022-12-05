``` mermaid

sequenceDiagram
  user->>browser: click 'Submit'
  browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
  server->browser: HTTP Status Code 302 URL Redirect

  note right of server: asks the browser to do a new HTTP GET request to the address defined in the header's Location

  note left of browser: Browser reloads notes page


  browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
  server->>browser:HTML code
  browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
  server->>browser: main.css
  browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
  server->>browser: main.js

  note left of browser: browser starts executing js-code that requests JSON data from server 


  browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
  server-->>browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

  note left of browser: browser executes the event handler that renders notes to display
