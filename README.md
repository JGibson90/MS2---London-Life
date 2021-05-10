# MS2---London-Life
Second Milestone Project for Code Institute

 ![](assets/images/devices.PNG)

I wanted to design a website with an interactive map at the heart of it. I chose the Google Maps API as it widely used around the world.

[The live project can be viewed here.](https://jgibson90.github.io/MS2---London-Life/)

---

# UX
## User Stories
- User goals 
    - As a user, I want to immediately understand what is offered by the website
    - As a user, I want to be able to seamlessly navigate through the site to easily find
     more information
    - As a user, I want to be able to easily interact with the site and the applications within
    - As a user, I want to be able to sign up to the Newsletter so that I can stay up to date every month

    I made the wireframe using Balsamiq which you can view the wireframe [here.](assets/docs/London-Life-Wireframe.pdf)

## Design Choices
---
When designing this website I looked at existing travel and tourism sites such as [this LA tourism site](https://www.discoverlosangeles.com/) for inspiration. 
I opted for a single scrolling page with a fixed navbar to easily navigate the page.

## Fonts
I chose [Alegreya](https://fonts.google.com/specimen/Alegreya?preview.text_type=custom) for my headings as I wanted something that
would immediately stand out and be noticeable. I chose [Poppins](https://fonts.google.com/specimen/Poppins?preview.text_type=custom#standard-styles)
for my main font as I found that it contrasted well and looks very clean.

## Icons
I used [Font Awesome](https://fontawesome.com/) for social media links in the footer.

## Colours
I chose #36454f for my signup form background, to contrast that I used #f5f5f5 for my form text colour. 
For my navbar and submit button I used #2E5476 as a hover effect colour,
I also used #36454f for the icons using #192e40 as a hover effect colour for the social media icons in the 
footer.

![](assets/images/colours.png)

# Features
- Responsive on all device sizes
- Fixed navbar making navigation intuitive and simple
- Interactive Google Maps API with dropdown menus to plot markers with info windows
- Contact form with EmailJS integration 
- Social media links

## Future Features
- More map interactivity
- Backend Languages to handle the form data

# Technologies used
## Languages used
- [HTML5](https://en.wikipedia.org/wiki/HTML)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Tools, Frameworks and Libraries used
- [Git](https://git-scm.com/) 
    - Git was used for version control, using the Terminal to commit and push to GitHub
- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to add icons to the footer for better UX amd aesthetics 
- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap was used to aid with the responsiveness of the website across multiple devices
- [Google Fonts](https://fonts.google.com/)
    - Google Fonts were used to import the Alegreya and Poppins fonts into the style.css file for headings and the main body respectively
- [Balsamiq](https://balsamiq.com/) 
    - Balsamiq was used to create the wireframes for the project

# Testing
I used the [CSS Validator](https://jigsaw.w3.org/css-validator/) and the [JS Validator](https://esprima.org/demo/validate.htm) which passed with no errors. I also 
used the [HTML Validator](https://validator.w3.org/) which brought up the following errors:
- Section lacks heading. From line 94, column 5; to line 94, column 25

## Testing User Stories from UX 
1. As a user, I want to immediately understand what is offered by the website

    1. Upon entering the website, the user is greeted with a navbar with three dropdown options to go to anywhere on the page 
    2. The user has two options, to either select a link from the navbar or to scroll down, both of which lead to the same location

2. As a user, I want to be able to seamlessly navigate through the site to easily find more information

    1. The site has been designed to be fluid being made up of a single scrolling page. At the top of the page is a fixed navbar so the user can always find their way around the website

3. As a user, I want to be able to easily interact with the site and the applications within

    1. The Google Maps API has 3 seperate dropdown menus to choose from. Each one contains a different set of locations with corresponing markers and info windows which appear on the map with a Drop animation when they are selected
    2. The sign up form has EmailJS integration and will notify the user if the inputs are not entered correctly. It also shows a modal on submitting the form.



### Fixes
- Given that the Map is a section in it's own right I don't feel the need to add a heading as I think it will detract from the flow of the page.

# Bugs
Following on from Testing I also encoutered these bugs, below each one are the
relevant fixes. 
## During development
- Signup form refused to center despite Bootstrap grid and CSS styling
    - Shift + f5 to clear the cache 
- Google Maps markers and info windows not appearing in the map
    - Tutor Support, my mentor and Stack Overflow helped me decipher where I was going wrong


# Deployment

**London Life** was developed on Gitpod, using GitHub to host the repository.
These were the steps taken to successfully deploy the website.
- Open [**GitHub**](https://github.com/) and log in
- Select the **repository**
- Click the **Settings** button from the top menu
- Scroll down to the **GitHub pages** section
- Click the **Source** dropdown menu and select **Main Branch**
- After the page has refreshed the link to the website can now be found 
under the **GitHub pages** section

## Cloning the Website
- Open [**GitHub**](https://github.com/) and log in
- Select the **repository**
- Click the **Code** drop down button next to the green GitPod one
- Select **"Clone with HTTPS"** and copy the link
- Open your **IDE** and the **Terminal**
- Specify a new **path directory** where you want to put the clone
- Type `git clone` and then **paste** the previously copied url from before

# Credits

## Code
- I used [Bootstrap 4](https://getbootstrap.com/) to make the site
responsive on different devices.

- I was provided the fix to add infoWindows to my Markers on Stack Overflow, you can view it [here.](https://stackoverflow.com/questions/66689094/how-can-i-add-info-windows-to-a-marker-event-listener)
 
## Images
- The hero background image came from
[Pexels.](https://www.pexels.com/photo/sunset-river-london-thames-34632/)

## Websites

- I used [ResizeImage](https://resizeimage.net/) to help get the hero image
to display properly.

# Special Thanks
Special thanks to the Slack community, Stack Overflow, Tutor Support and my Mentor for all their advice and guidance on this project.
