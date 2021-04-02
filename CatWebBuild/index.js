function ShowAds() {
	vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
	.then(data => console.log(data.result))
	.catch(error => console.log(error));
	
	
	  VK.init(function() {
      // API initialization succeeded
      // Your code here
	  VK.callMethod('showSettingsBox', 256);
	  
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.60');
	}	