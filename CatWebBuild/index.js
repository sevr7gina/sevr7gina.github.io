function ShowAds() {
	vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
	.then(data => console.log(data.result))
	.catch(error => console.log(error));
	
	//vkBridge.send("VKWebAppShowWallPostBox", {
	//"message": "Hello!",
	//"attachments": "https://vk.com/app7781392"  
	//});
	
	vkBridge.send("VKWebAppShowInviteBox", {})
         .then(data => console.log(data.success))
        .catch(error => console.log(error));
	}	