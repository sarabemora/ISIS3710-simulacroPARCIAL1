import React from 'react';

const mockUserData = {
  username: "username",
  fullName: "Firstname Lastname",
  description: "Proin at iaculis arcu. Proin id mi id dolor aliquet facilisis",
  url: "http://www.website.com",
  posts: 870,
  followers: 496,
  following: 112
};

function UserProfile() {
  return (
<div classname="d-flex align-items-center justify-content-center mb-4">
 <img alt="Profile picture of the user" classname="rounded-circle profile-img mr-3" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-3pqY3Jxd22FQF7AvyidKz5EW.png?st=2024-09-27T00%3A41%3A10Z&amp;se=2024-09-27T02%3A41%3A10Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-26T23%3A16%3A52Z&amp;ske=2024-09-27T23%3A16%3A52Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=05yK2Os6YOtwPla1aVlB8lyIiD50ObaKmED4x8rZTKw%3D" width="100"/>
 <div>
  <h1 classname="h4 font-weight-bold">
   {mockUserData.username}
  </h1>
  <p classname="text-muted mb-1">
   <span classname="font-weight-bold">
    {mockUserData.fullName}
   </span>
   {mockUserData.description}
  </p>
  <a classname="text-primary" href="{mockUserData.url}">
   {mockUserData.url}
  </a>
 </div>
</div>
);
}

export default UserProfile;
