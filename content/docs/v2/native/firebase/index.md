---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "firebase"
title: "Firebase"
header_sub_title: "Class in module "
doc: "Firebase"
docType: "class"
---







<h1 class="api-title">
  
  Firebase
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/firebase/index.ts#L2">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-firebase
$ npm install --save @ionic-native/firebase
</code></pre>
<p>Repo:
  <a href="https://github.com/arnesson/cordova-plugin-firebase">
    https://github.com/arnesson/cordova-plugin-firebase
  </a>
</p>

<!-- description -->

<p>This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { Firebase } from &#39;@ionic-native/firebase&#39;;

constructor(private firebase: Firebase) { }

...

this.firebase.getToken()
  .then(token =&gt; console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error =&gt; console.error(&#39;Error getting token&#39;, error));

this.firebase.onTokenRefresh()
  .subscribe((token: string) =&gt; console.log(`Got a new token ${token}`));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="getToken"></div>
<h3>
  <code>getToken()</code>
  

</h3>
Get the device token


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="onTokenRefresh"></div>
<h3>
  <code>onTokenRefresh()</code>
  

</h3>
Get notified when a token is refreshed


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="onNotificationOpen"></div>
<h3>
  <code>onNotificationOpen()</code>
  

</h3>
Get notified when the user opens a notification


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> 
</div><div id="grantPermission"></div>
<h3>
  <code>grantPermission()</code>
  

</h3>
Grant permission to recieve push notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="hasPermission"></div>
<h3>
  <code>hasPermission()</code>
  

</h3>
Check permission to recieve push notifications


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setBadgeNumber"></div>
<h3>
  <code>setBadgeNumber(badgeNumber)</code>
  

</h3>
Set icon badge number. Set to 0 to clear the badge.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      badgeNumber
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getBadgeNumber"></div>
<h3>
  <code>getBadgeNumber()</code>
  

</h3>
Get icon badge number


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="subscribe"></div>
<h3>
  <code>subscribe(topic)</code>
  

</h3>
Subscribe to a topic
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      topic
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="unsubscribe"></div>
<h3>
  <code>unsubscribe(topic)</code>
  

</h3>
Unsubscribe from a topic
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      topic
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="logEvent"></div>
<h3>
  <code>logEvent(type,&nbsp;data)</code>
  

</h3>
Log an event using Analytics
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      type
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      data
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setScreenName"></div>
<h3>
  <code>setScreenName(name)</code>
  

</h3>
Set the name of the current screen in Analytics
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      name
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Screen name</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setUserId"></div>
<h3>
  <code>setUserId(userId)</code>
  

</h3>
Set a user id for use in Analytics
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      userId
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setUserProperty"></div>
<h3>
  <code>setUserProperty(name,&nbsp;value)</code>
  

</h3>
Set a user property for use in Analytics
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      name
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      value
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="fetch"></div>
<h3>
  <code>fetch(cacheExpirationSeconds)</code>
  

</h3>
Fetch Remote Config parameter values for your app
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      cacheExpirationSeconds
      
    </td>
    <td>
      

    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="activateFetched"></div>
<h3>
  <code>activateFetched()</code>
  

</h3>
Activate the Remote Config fetched config


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getValue"></div>
<h3>
  <code>getValue(key,&nbsp;namespace)</code>
  

</h3>
Retrieve a Remote Config value
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      key
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      namespace
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getByteArray"></div>
<h3>
  <code>getByteArray(key,&nbsp;namespace)</code>
  

</h3>
Retrieve a Remote Config byte array
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      key
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      namespace
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="getInfo"></div>
<h3>
  <code>getInfo()</code>
  

</h3>
Get the current state of the FirebaseRemoteConfig singleton object


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setConfigSettings"></div>
<h3>
  <code>setConfigSettings(settings)</code>
  

</h3>
Change the settings for the FirebaseRemoteConfig object's operations
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      settings
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="setDefaults"></div>
<h3>
  <code>setDefaults(defaults,&nbsp;namespace)</code>
  

</h3>
Set defaults in the Remote Config
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      defaults
      
    </td>
    <td>
      
<code>Object</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  <tr>
    <td>
      namespace
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      
      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

