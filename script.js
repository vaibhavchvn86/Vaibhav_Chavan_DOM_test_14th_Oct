function showData(){
    let display = document.getElementById('display');

    display.innerHTML = `

    <!--Menu Container-->
    <div id="menuContainer">

        <div>
            <div class="menuBox1">
                <span class="menuName">Latitude : </span><span class="menuResult" id="latitude"></span>
            </div>
            <div class="menuBox2">
                <span class="menuName">Longitude : </span><span class="menuResult" id="longitude"></span>
            </div>
        </div>

        <div>
            <div class="menuBox1">
                <span class="menuName">City : </span><span class="menuResult" id="city"></span>
            </div>
            <div class="menuBox2">
                <span class="menuName">Region : </span><span class="menuResult" id="region"></span>
            </div>
        </div>

        <div>
            <div class="menuBox1">
                <span class="menuName">Organisation : </span><span class="menuResult" id="org"></span>
            </div>
            <div class="menuBox2">
                <span class="menuName">Country : </span><span class="menuResult" id="hostname"></span>
            </div>
        </div>

    </div>

    <!--Map Container-->
    <div id="mapContainer">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59715.17325534242!2d76.98432440054789!3d20.702169492555452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd73192c32a5df1%3A0xcfa72a91e826b253!2sAkola%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697168262955!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

     

    </div>

    <!--Date & Time Container-->

    <div id="dateContainer">
        <div class="dateBox">
            <span class="dateName">Time Zone : </span>
            <span class="dateResult" id="timezone"></span>
        </div>

        <div class="dateBox">
            <span class="dateName">Date & Time : </span>
            <span class="dateResult" id="datetime"></span>
        </div>

        <div class="dateBox">
            <span class="dateName">Pincode : </span>
            <span class="dateResult" id="pincode"></span>
        </div>

        <div class="dateBox">
            <span class="dateName" >Message : </span>
            <span class="dateResult" id="msg"></span>
        </div>

    </div>

    <!--Filter Container-->
    <div id="filterContainer">
        <div>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            <input type="text" id="searchBox" placeholder="Filter"/>
        </div>
    </div>



    <!--Post Office Address Container-->

    <div id="addressContainer">


    </div>
    
    `

    //Targeting Elements -: 


    let latitude = document.getElementById('latitude');
    let longitude = document.getElementById('longitude');
    let region = document.getElementById('region');
    let city = document.getElementById('city');
    let org = document.getElementById('org');
    let hostname = document.getElementById('hostname');
    // let map = document.getElementById('mapContainer');
    let timezone = document.getElementById('timezone');
    let pincode = document.getElementById('pincode'); 
    let datetime = document.getElementById('datetime');
    let msg = document.getElementById('msg');
    let container = document.getElementById('addressContainer');

    // Navigator Geolocation code -: 
    
    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition)
    }else{
            latitude.innerHTML = `Not Supported`
            longitude.innerHTML = `Not Supported`
    }

    // showPosition Getting Latitude and logitude.  

    function showPosition(data){
        // console.log(data);
        // let latcoord = data.coords.latitude
        // let lngcoord = data.coords.longitude
        
        latitude.innerHTML = `${data.coords.latitude}`
        longitude.innerHTML = `${data.coords.longitude}`

    }

    // Code For getting User IP Address -: 

    // const urlip = `https://api6.ipify.org/?format=json`; // Getting IPV6 address url 
    const urlip = `https://api.ipify.org?format=json`;      // Getting IPV4 address url 

    fetch(urlip,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        let userip = data.ip;
        // console.log(userip);

        // const  geourl = `http://api.ipstack.com/${userip}?access_key=12c18230b8191f1863f30603c8a51129`; //Old Url

        const geourl =  `https://ipinfo.io/${userip}?token=ea170526cb93b3`; //New Url 

        fetch(geourl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            city.innerHTML = `${data.city}`
            region.innerHTML = `${data.region}`
            org.innerHTML = `${data.org}`
            hostname.innerHTML = `${data.country}`

            const userpin = data.postal;
            pincode.innerHTML = `${userpin}`
            timezone.innerHTML = `${data.timezone}`

            let dateObj = new Date().toLocaleString('en-US', { timeZone: data.timezone });
            datetime.innerHTML = `${dateObj}`;

            
            const pinUrl = `https://api.postalpincode.in/pincode/${userpin}`;
            // const pinUrl = `https://api.postalpincode.in/pincode/444006`;
            
                fetch(pinUrl,{method:'GET'})
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    msg.innerHTML = `${data[0].Message}`;

                    data[0].PostOffice.forEach((data) => {
                        // console.log(data);
                        
                        const postOfficeDiv = document.createElement("div");   

                        postOfficeDiv.innerHTML = `

                            <div class="addressBox1">
                                <span class="addressName">Name : </span><span class="addressResult" id="itemName">${data.Name}</span>
                            </div>
                
                            <div class="addressBox2">
                                <span class="addressName">Branch Type : </span><span class="addressResult" id="branchName">${data.BranchType}</span>
                            </div>
                
                            <div class="addressBox2">
                                <span class="addressName">Delivery Status : </span><span class="addressResult">${data.DeliveryStatus}</span>
                            </div>
                
                            <div class="addressBox2">
                                <span class="addressName">District : </span><span class="addressResult">${data.District}</span>
                            </div>
                
                            <div class="addressBox2">
                                <span class="addressName">Division : </span><span class="addressResult">${data.Division}</span>
                            </div>
                        
                        `

                        container.appendChild(postOfficeDiv);

                    })
                   
                })


        })

    })

}



 