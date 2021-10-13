# Medical-Objects Test Shop

Medical-Objects Test Shop provides an AngularJS and Express NodeJS framework, including a simple app, which is intended for further 
development to assess the front-end skills of potential Medical-Objects employees.

Please clone this repository as a **private** repository under your own GitHub username.

### NodeJS

* Download and install the latest LTS version of NodeJS. Latest version at time of writing is 14.18.0 / 14.18.1
* This app has also been tested with node version 10.13.0
* Check version by typing `node -v` in your terminal

### Install node_modules

* In your terminal type `npm install` (from the project root)
* This will install all the node_modules listed in package.json<br><br>
<i>Note if you get package dependency errors due to the current package versions installed in your dev environment, try to resolve them and note down any issues you had and how you resolved them, or attempted to resolve them.</i>

## Development

If you run the command `npm run app` from the root directory it will start the server and client, monitor the project
files and automatically rebuild when code changes are saved.

The browser will be automatically launched under http://localhost:5000. The server backend will start listening on http://localhost:4000

# Tasks

Complete as many of the following tasks as you can. Skip any tasks which you can't complete in a reasonable amount of time:

1. Add a hover effect when hovering over an image.
2. Display the name of the car and the car price below the image.
3. Add an 'Add to Cart' button under the car price.
4. When a car image is clicked, display a modal containing a larger car image, the car description, the car price and the 'Add to Cart' button.
5. Move the function that talks to the server, **getCars()**, from the controller to the service. All functions that talk to servers should be declared in AngularJS services.
6. When the 'Add to Cart' button is clicked, store the items selected in the cart.
7. Add a button or menu item in the main page header which displays the current contents of the cart.
8. When viewing the cart contents, add the ability to increase/reduce/delete items in the cart, showing the correct resulting total.
9. Add a 'Buy Now' button in the cart and implement a call to the server that saves the cart contents for later use. The items purchased can be stored in a simple JSON file or a database.
10. Add a 'Previous Purchases' button or menu item which calls the server to retrieve the previous purchases made, and display them.
11. In the assets/images folder there is a Medical-Objects logo. Create a page footer and display this logo in the footer.

...and if you want to:

12. Come up with an alternative way of implementing responsive images rather than using media queries.

Add any issues/comments/feedback you have to the readme.md file.

Once done, please add jonny@medicalobjects.com as a collaborator to your cloned private repository, and notify us of the location.

Thank you for your time and enjoy!






