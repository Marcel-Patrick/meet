# Meet App

## This is my Meet React Application, mainly createt for test-driven development (TDD) technique purposes

### Objective:

---

**To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.**

### Context:

---

Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to be the future of web development. By combining these two concepts, this app will not only work as a normal web application, but it will also reap the benefits of both serverless architecture and PWAs:

- Serverless:<br/>
  No backend maintenance, easy to scale, always available, no cost for idle time.

- PWAs:<br/>
  Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.

For this app, we will be using a TDD approach, where we write tests before writing the actual functionality for this app in code. Writing tests forces us to focus on the requirements of the application before jumping into the code. TDD relies on the repetition of a very short development cycle, allowing us to get immediate feedback and deliver high-quality code.

Last but not least, we will add some graphs to this app, which will make it more visually appealing and allow us to more easily draw conclusions from the data. A picture is worth a thousand words, right? With a number of visualization techniques under the belt, we will be able to display any type of data we want and produce a variety of output formats. This app will allow users to search for a city and get a list of events hosted in that city. For the data visualization component, we will add two charts — one that shows how many events will take place in that city on upcoming days, and another that visualizes the popularity of event genres in the form of a pie chart.

### Features & Requirements:

#### Key Features:

---

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

#### Features, User-Stories & Scenarios:

---

**FEATURE 1: FILTER EVENTS BY CITY**<br/>
**_User-Story:_** _As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city._

SCENARIO 1:<br/>
**When user hasn’t searched for a city, show upcoming events from all cities.**<br/>
**Given** user hasn’t searched for any city<br/>
**When** the user opens the app<br/>
**Then** the user should see a list of all upcoming events

SCENARIO 2:<br/>
**User should see a list of suggestions when they search for a city.**<br/>
**Given** the main page is open<br/>
**When** user starts typing in the city textbox<br/>
**Then** the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3:<br/>
**User can select a city from the suggested list.**<br/>
**Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing<br/>
**When** the user selects a city (e.g., “Berlin, Germany”) from the list<br/>
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

**FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS**<br/>
**_User-Story:_** _As a user, I would like to be able to show/hide event details so that I can see more/less information about an event._

SCENARIO 1:<br/>
**An event element is collapsed by default.**<br/>
**Given** the user is on the main page of the app<br/>
**When** an event is displayed<br/>
**Then** the event details will be collapsed

SCENARIO 2:<br/>
**User can expand an event to see its details.**<br/>
**Given** the user is displayed with a list of events<br/>
**When** the user clicks on an individual event<br/>
**Then** the event details will be displayed

SCENARIO 3:<br/>
**User can collapse an event to hide its details.**<br/>
**Given** The user has clicked on an event to display details<br/>
**When** the user clicks on “close” button<br/>
**Then** the event details will hide

**FEATURE 3: SPECIFY NUMBER OF EVENTS**<br/>
**_User-Story:_** _As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once._

SCENARIO 1:<br/>
**When user hasn’t specified a number, 32 is the default number.**<br/>
**Given** the user is on the main page of the app<br/>
**When** the user hasn’t specified a number of events<br/>
**Then** the default number of displayed events will be 32 at once

SCENARIO 2:<br/>
**User can change the number of events they want to see.**<br/>
**Given** the user is on the main page<br/>
**When** the user set a number of events he or she wants to see in the “Number of events” box<br/>
**Then** this number of events will be displayed

**FEATURE 4: USE THE APP WHEN OFFLINE**<br/>
**_User-Story:_** _As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online._

SCENARIO 1:<br/>
**Show cached data when there’s no internet connection.**<br/>
**Given** the user is offline<br/>
**When** the user wants to use the application<br/>
**Then** the events in the cached data of the previous sessions will be shown

SCENARIO 2:<br/>
**Show error when user changes the settings (city, time range).**<br/>
**Given** the user is offline<br/>
**When** the user wants to change the settings of the application (eg. the city, etc.)<br/>
**Then** an error will be displayed

**FEATURE 5: DATA VISUALIZATION**<br/>
**_User-Story:_** _As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city._

SCENARIO 1:<br/>
**Show a chart with the number of upcoming events in each city.**<br/>
**Given** the user is on the main page<br/>
**When** the user wants to know the location where an upcoming event is taking place<br/>
**Then** a chart will show up the location to the user, where the event will taking place

### Technical Requirements:

---

- The app must be a React application.
- The app must be built using the TDD technique.
- The app must use the Google Calendar API and OAuth2 authentication flow.
- The app must use serverless functions (AWS lambda is preferred) for the authorization
  server instead of using a traditional server.
- The app’s code must be hosted in a Git repository on GitHub.
- The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
  as well as on IE11.
- The app must display well on all screen sizes (including mobile and tablet) widths of
  1920px and 320px.
- The app must pass Lighthouse’s PWA checklist.
- The app must work offline or in slow network conditions with the help of a service
  worker.
- Users may be able to install the app on desktop and add the app to their home screen
  on mobile.
- The app must be deployed on GitHub Pages.
- The API call must use React axios and async/await.
- The app must implement an alert system using an OOP approach to show information to
  the user.
- The app must make use of data visualization (recharts preferred).
- The app must be covered by tests with a coverage rate >= 90%
- The app must be monitored using an online monitoring tool.

### Setup:

---

1. Create React App and Setting up a React project with CRA:

- Start by creating a new project for your app using npm.<br/>
  The npm command would be:<br/>
  npx create-react-app meet --template cra-template-pwa --use-npm
- The “public” folder contains what CRA builds when you run it.<br/>
  The npm command would be:<br/>
  npm run start
- Next, install the dependencies, which you can do all at once using the 'install' command to ensure that all packages are installed.<br/>
  The npm commands would be:<br/>
  cd meet<br/>
  npm install<br/>
  npm run start<br/>
  _After running these commands, you should be able to navigate to your app in the browse_

2. Deploying the App to GitHub Pages

- Add gh-pages to the project’s dev dependencies.<br/>
  The command for npm is:<br/>
  npm install --save-dev gh-pages
- Once the command has been run, check the “package.json” file;<br/>
  it should be listed a new package under “devDependencies”:<br/>
  "devDependencies": {<br/>
  "gh-pages": "^3.1.0"<br/>
  }
- Create a new GitHub repository for the project.<br/>
  Head over to GitHub and create a new repository
- Add the homepage URL to the “package.json” file.<br/>
  Open up your “package.json” file and add this line between the “private” and “dependencies” sections:<br/>
  "homepage": "https://YOUR_USER_NAME.github.io/meet",<br/>
  _Make sure to replace “YOUR_USER_NAME” with your personal GitHub username._
- Add deploy scripts to your “package.json” file.<br/>
  Still in the “package.json” file, add the following two scripts into the section marked “scripts”:<br/>
  "predeploy": "npm run build",<br/>
  "deploy": "gh-pages -d build"<br/>
  _Make sure that all the scripts end with a comma except for the last one._
- Commit all changes and push them to GitHub.<br/>
  Back in the terminal, start by adding your remote URL so you can link the local project to the GitHub repository you just created. Run 'git init' to initialize Git in the project folder just in case it wasn't initialized by default:<br/>
  git init<br/>
  git remote add origin https://github.com/YOUR_USER_NAME/meet.git<br/>
  _Once again, make sure you replace “YOUR_USER_NAME” with your GitHub username and “meet” with the name of your repository if you used a different name._
- Next, add your changes and commit them:<br/>
  git add .<br/>
  git commit -m "First commit"<br/>
  git branch -M main<br/>
- The command to use to push commited changes is:<br/>
  git push --set-upstream origin main<br/>
  _you will be asked to enter your GitHub username and Password_
- The push will fail, because since August 13, 2021 the support for password authentication was removed, so you need to use a personal access token instead
- Head over to GitHub and create a personal access token:<br/>
  follow the steps on: (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- repeat the git push step;<br/>
  _you will be asked to enter your GitHub username and Password. Instead of the Password, enter the new created personal access token!_
- Deploy the project.<br/>
  The final step is to actually deploy your project to the “gh-pages” branch! This can be done via the terminal with the following command:<br/>
  npm run deploy<br/>
  _This will push all changes to a branch named “gh-pages” in the repository. Once this is done, the React app will be live at the URL, specified in the “package.json” file._
