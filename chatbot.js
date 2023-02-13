function talk(){
    var know = {
    "What all features I get from this website?" : "Farmers can sell their produced items and can also purchase products from the website.  ",
    "Delivery time of the product?" : "It will take maximum 3 weeks and minimum2 weeks for the delivery of the product.",
    
    "Cash on delivery available?" : "Yes, cash on delivery is available.",
    "how to sell products in this website" : href= "https://youtu.be/tBePmYNg9bQ ",
    "how to purchase in this website" : href="https://youtu.be/bENMxcdkBoU ",
    "Customer care number" : "12345678910"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }