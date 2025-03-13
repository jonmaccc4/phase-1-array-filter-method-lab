// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
 
  const drivers = ["Bobby", "Sammy", "bobby", "Sarah"];
  console.log(findMatching(drivers, "bobby")); 


  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  

  const driver = ["Bobby", "Sammy", "bobby", "Sarah", "Bo"];
  console.log(fuzzyMatch(drivers, "Bo")); 
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  