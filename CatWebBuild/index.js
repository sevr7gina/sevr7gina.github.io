function ShowAds() {
	vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
	.then(data => console.log(data.result))
	.catch(error => console.log(error));
	
	//vkBridge.send("VKWebAppShowWallPostBox", {"message": "Hello!"});
	
	vkBridge.send("VKWebAppShowWallPostBox", {
  "message": "Hello!",
  "attachments": "photo275324683_457240214","https://vk.com/app7781392"
});
	}	