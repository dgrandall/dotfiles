var sendBackground=LPPlatform.requestFrameworkInitializer(function(n){window.postMessage(n,window.location.origin)});window.addEventListener("message",function(n){n.origin===window.location.origin&&sendBackground(n.data)});