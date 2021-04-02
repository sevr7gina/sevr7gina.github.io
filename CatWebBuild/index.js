function ShowAds() {
	vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
	.then(data => console.log(data.result))
	.catch(error => console.log(error));
	
	
	  VK.init(function() {
      // API initialization succeeded
      // Your code here
	  //VK.callMethod('showSettingsBox', 256);
	  admanInit({
      user_id: user_id,
      app_id: 7781392,
      type: 'preloader'         // 'preloader' or 'rewarded' (default - 'preloader')
      // params: {preview: 1}   // to verify the correct operation of advertising
    }, onAdsReady, onNoAds);
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.60');
	}	