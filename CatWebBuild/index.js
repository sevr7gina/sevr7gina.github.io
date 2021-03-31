function ShowAds() {
	vkBridge.send("VKWebAppShowNativeAds", {ad_format:"preloader"})
	.then(data => console.log(data.result))
	.catch(error => console.log(error));
	}	