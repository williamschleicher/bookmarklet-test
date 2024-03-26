javascript:(function() {
    // Replace 'example.com' with the specific website URL where the access token cookie is set
    var targetWebsite = 'g2-qa4.copart.com';
  
    // Check if the current website URL matches the target website
    if (window.location.hostname === targetWebsite) {
      var tokenName = 'access_token';
      var token = document.cookie.split('; ').find(row => row.startsWith(tokenName)).split('=')[1];
      
      // Replace 'localhost:3000' with the actual URL of your localhost dev environment
      var devUrlFirstHalf = 'http://localhost:4200/';
      var devUrlSecondHalf = '&selectedYard=700&lang=en&countryCode=USA';
      
      // Append the access token to the URL
      var newUrl = devUrlFirstHalf + '?access_token=' + token + devUrlSecondHalf;
      
      // Open the new URL in a new tab or window
      window.open(newUrl, '_blank');
    } else {
      alert('Please navigate to the specific website to retrieve the access token.');
    }
  })();
