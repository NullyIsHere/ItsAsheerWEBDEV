    // Function to extract URL parameters
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Define the options and their corresponding redirection URLs
    const options = {
      "fcsiejv": "song/focus.html?auth=iejv",
      // Add more options and URLs here
    };

    // Get the 'shr' parameter from the URL
    const shrParam = getParameterByName('shr');

    // Check if the parameter is a valid option
    if (shrParam && options.hasOwnProperty(shrParam)) {
      const redirectURL = options[shrParam];
      window.location.href = redirectURL;  // Redirect to the specified URL
    } else {
      // Handle invalid or no parameter case
      console.log('Invalid parameter or no parameter specified.');
    }