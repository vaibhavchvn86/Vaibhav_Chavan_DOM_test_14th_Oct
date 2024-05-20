# DOM Test - User Location Details

## 1. Introduction

This project is designed to fetch user location details, including the IP address, and display them on a webpage. Additionally, it utilizes the user's pin code to retrieve a list of nearby post offices and display them on the page. The project also includes the ability to filter post offices by name and branch office. The total marks for this project are 100.

## 2. Project Setup

To set up the project, follow these steps:
- Clone the GitHub repository.
- Open the project in your preferred code editor.
- Ensure you have a working internet connection for API calls.

## 3. HTML Structure

The HTML structure follows the design provided in the Figma design link: [Figma Design](https://www.figma.com/file/TEeaW2ghQCO1LYE4M8EAnd/Untitled-(Copy)?node-id=0%3A1&t=E9q3sWwThzuTXaWJ-0).

## 4. Styling (CSS)

The CSS styles have been implemented to match the design in the Figma link, providing a visually pleasing and user-friendly interface.

## 5. JavaScript

### Getting the User's IP Address

- We use JavaScript to fetch the user's IP address as soon as they land on the website.

### Get Data Button

- JavaScript is used to send a GET request to the 'ipinfo.io' API when the user clicks the "Get Data" button.
- The received information is stored properly for later use.

### Display Information

- JavaScript displays the following information on the page:
  - Latitude
  - Longitude
  - City
  - Region
  - Time Zone

### Show User's Location on Google Maps

- JavaScript uses the latitude and longitude data from the 'ipinfo.io' API to show the user's location on Google Maps.

### Get User's Current Time

- JavaScript retrieves the current time based on the user's Time Zone.

### Fetch Post Offices Using Pin Code

- JavaScript sends a GET request to the 'api.postalpincode.in' API using the Pin Code received from the 'ipinfo.io' API.
- The list of post offices is processed and displayed as per the Figma design.

### Create a Search Box and Filter

- JavaScript creates a search box that allows users to filter post offices by name and branch office.

## 6. API Integration

- We integrate two APIs: 'ipinfo.io' and 'api.postalpincode.in' for location details and post office information, respectively.

## 7. Testing

- To test the project's functionality, open the webpage and click the "Get Data" button. Ensure that IP address retrieval, data display, Google Maps, time zone conversion, and post office retrieval work correctly.

## 8. Deployment

- Deploy the project on a web server or hosting service of your choice.

## 9. Conclusion

- The project has been successfully implemented, and future improvements may include adding more features and enhancing the user interface.

## 10. README File

The README file should contain important project information, including installation instructions, usage guidelines, and any additional notes related to the project. Make sure to include screenshots if necessary.

## 11. Project Live Link -: 

<a href="https://mrrushikesh.github.io/Rushikesh_Ingale_DOM_test_14th_Oct_2023/" alt="Lading">Click Here</a>