# knowify-ktable
Recruitment exercise done by Arnau Monclus @arnaumonclus during the end of November of 2021. Please, contact me for any doubt!

## Analysis
The objective is to create the markup of a unique web page screen (HTML + CSS + JS). All items given is a couple of mockups of the same view and in the same resolution view (desktop view).
The design of the screen is divided in:
- Header
  - Title
  - Tab / navigation
- Main section:
  - Toolbar:
    - Input + Date picker + Select
    - Paginator
    - Tools button
  - Table / List of items

Following this structure, I can assume there is no footer and the header is not fixed. No scrolls seem to appear (in vertical). Responsive view for smaller devices is not defined, so, I'm free to decide how it will be displayed the different components.
All guidelines given is the inspector of the Abstract web application. I can't import the design project in my local Abstract app and neither open the design edition file in Sketch app. I understand the company police in terms of safety but this means I will spend more time than expected.

## Job done
Since I'm free to decide how to do the job, I have chosen to start with a responsive framework, in this case, Bootstrap 5. Why? Basically because I like this framework (probably the best one, the most known and most widely used) and I feel comfortable with their components but I have never work with the fifth version, so, I wanted to see all the news and features of this specific version comparing with the 4 without feeling a hard effort with an unknown framework. Remember, this is a recruitment exercise, I need to give my best!

Once decided the framework, I chose to take the delivery version, the quickest way. This is just to apply an independent screen, not a large and complex project to be working on for many years (in this case it's fully recommended to install all the framework with all dependences locally).

Home.html is the main file to check the markup of all the content. You will find different components, some of them with new classes for styling and id's for giving logic. Document has passed the w3 validator without any error or warning.

I tried to apply different solutions on the styling of the application, always trying to separate and tidy up the code to prevent from ending up a messy file. Normally all styles should be split in different precompiled files depending on the component but since I'm using a delivery version and it's just for a one-page job, you will find all the style in the main file (styles.scss).

Javascript main.js file is divided in events and functions using the document.ready event as the first one. Even so, it doesn't seem very important because I couldn't add more than 30 lines of code :(

The markup passed the crossbrowser for the most recent and used browsers (Chrome, Firefox and Safari). Please, don't ask for IE support, I don't like to waste my time.

Bonus option is done too. Please check the main.js file where you will find the js logic added and writen in jQuery since it's already loaded for some other dependence and I feel comfortable with this oldie framework. Just to remark that I applied the filter for the visible elements. This shouldn't be a solution for a final version where we should iterate from all items calling a server or from a full data json previously stored in the user browser.

## Structure
I created my own file structure:
### assets
#### css
- bootstrap.min.css (Bootstrap styles dependence)
- bootstrap-datepicker3.min.css (datepicker component dependence)
- bootstrap-select-min.css (select component dependence)
- styles.scss (a precompile version of the styles.)
- styles.css (final compiled and minified styles version)
#### fonts
All font files are placed there with all different formats to get the largest compatibility with the different browsers and OS. I couldn't download the font files from the Abstract design assets, so I had to find the specific fonts from the web and it was not easy! After find them I converted to the different formats.
#### img
All different images used. Most of them got from Núria after sharing my problems for trying to download from Abstract webapp. After checking the received images I saw some of the images were missing and I pick them from an external website (i.e: the chevron left & right). They are not identical but please, don't be so strict with me, I'm a decisive person! :D
#### js
- bootstrap.min.js (Bootstrap javascript dependence)
- bootstrap-datepicker.min.js (Datepicker component javascript dependence)
- bootstrap-select.min.js (Select component javascript dependence)
- jquery-3.6.0.min.js (jQuery dependence for datepicker component)
- jquery-ui.min.js (jQuery UI styles for datepicker component)
- popper.min.js (Mandatory dependence for most of the Bootstrap components)
- main.js (My own code for giving the logic expected)
### root
- .gitignore (no words needed)
- home.html (html markup for the main screen. You will find all the structure there, from 'doctype' until the closing html tag).
- readme.md (just me!)

