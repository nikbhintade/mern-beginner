# TODO MERN APP

 > This is project is created by following a youtube video so this is not me writing this thing but just copying someone by following the video.

 ## what I want to achieve?

 I just want to learn how authentication with JWT works in MERN stack. As till now I have been working with frontend for very basic application, I have never dealt with authentication. This video tutorial is for clearing my basics of authentication and JWT for both frontnend and backend.

 One more thing, in this video series brad will use react for frontend but I will be changing that and instead I will be using [Qwik](https://qwik.builder.io/). I wanted to try Qwik for last few weeks but I didn't get a chance so here I am going to use that.

 Update: I am just going to create frontend with react for now. As I have to create project based on this for the NEAR metabuild hackathon. Afterward I can create frontend using Qwik

 ---

 ## Installation

 To install dependencies run following command in terminal:

 ```bash
 yarn
 # or 
 npm install
 ```

---
## Deployment 

Currently this API is deployed on [render](render.com).

**Link :** [https://mern-auth.onrender.com](https://mern-auth.onrender.com)

***Notes:***

There was issue with inital deployment due to not setting environment variables and not having health endpoint.

First one is just thing that I completely forgot.

Second one, I think is specific to render. So for some context, render need an endpoint that returns 200. This may have caused a `in-progress` status till build fails. After adding that endpoint deployment happened successfully.

------
## Notes

Following error occurs when server is sending response more than once. Just note so in user controller I was calling `res.json()` twice and that's why this error was poping up. 
```
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
```

Resource where I found why that was happening [LINK](https://bobbyhadz.com/blog/javascript-error-cannot-set-headers-after-they-are-sent-to-client)

