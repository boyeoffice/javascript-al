// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string. For example:

function domainName(url){
  const domain = new URL(url).hostname.split('.')[0];
  return domain;
}

function domainName2(url){
  // create a regular expression to match the domain name
  var regex = /^(?:https?:\/\/)?(?:w{3}\.)?([^\.]+)/;
  // use the regex to extract the domain name from the URL
  var match = url.match(regex);
  // return the matched domain name, or an empty string if no match was found
  return match ? match[1] : '';
}




function domainName3(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};



console.log(domainName2('https://google.com'));