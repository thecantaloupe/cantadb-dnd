# Project 2 - DNDdB 
A simple web application to create and manage dnd character sheets

*Created by Zachary Gomez*

----

Project adapted a built character sheet from the following the better understand pure css styling. I attempted to copy the styling trends into other parts of the project 

https://www.reddit.com/r/DnD/comments/fvxsgj/5e_html_character_sheet_for_5e_with_basic/


## Technologies Explored

CSS | HTML5 | JavaScript | Jquery | EJS | MongoDB | Express | 

----

## Highlights

- DnDdb
    - Two types of Users - User and Admin. Admin will be able to see all characters as well as pull characters and monsters from a database or prebuilt
    - Uses induces to create, edit, show, and save character sheets to a user
    - Login page with navbar as well as middleware to manage what sessions can see based on login role


## Main Features

----

- Schema with over 60 items 
    1. Character sheet creates mongoose entry based on schema which is then loaded based on id to various ejs pages
    2. Csv converting script was made to parse 10000 entry list of skills
- Hidden related artists with a dropdown that filters how many related artists are shown.

## Wireframe

---
![Wireframe erd](/images/erd.png)
![Wireframe front](/images/front.png)
![Wireframe index](/images/index.png)
![Wireframe show](/images/show.png)

## Getting Started

----
[Click Here](https://cantadb-dnd.herokuapp.com/) to see the app

[Github](https://github.com/thecantaloupe/cantadb-dnd) 