---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "bluetooth-serial"
title: "Bluetooth Serial"
header_sub_title: "Class in module "
doc: "Bluetooth Serial"
docType: "class"
---







<h1 class="api-title">
  
  Bluetooth Serial
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/bluetooth-serial/index.ts#L2">
  Improve this doc
</a>



<!-- decorators -->





<pre><code>$ ionic plugin add cordova-plugin-bluetooth-serial
$ npm install --save @ionic-native/bluetooth-serial
</code></pre>
<p>Repo:
  <a href="https://github.com/don/BluetoothSerial">
    https://github.com/don/BluetoothSerial
  </a>
</p>

<!-- description -->

<p>This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li><li>Windows Phone</li><li>Browser</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { BluetoothSerial } from &#39;@ionic-native/bluetooth-serial&#39;;

constructor(private bluetoothSerial: BluetoothSerial) { }


// Write a string
this.bluetoothSerial.write(&quot;hello world&quot;).then(success, failure);

// Array of int or bytes
this.bluetoothSerial.write([186, 220, 222]).then(success, failure);

// Typed Array
var data = new Uint8Array(4);
data[0] = 0x41;
data[1] = 0x42;
data[2] = 0x43;
data[3] = 0x44;
this.bluetoothSerial.write(data).then(success, failure);

// Array Buffer
this.bluetoothSerial.write(data.buffer).then(success, failure);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="connect"></div>
<h3>
  <code>connect(macAddress_or_uuid)</code>
  

</h3>
Connect to a Bluetooth device
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
      macAddress_or_uuid
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Identifier of the remote device</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Subscribe to connect, unsubscribe to disconnect.
</div><div id="connectInsecure"></div>
<h3>
  <code>connectInsecure(macAddress)</code>
  

</h3>
Connect insecurely to a Bluetooth device
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
      macAddress
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Identifier of the remote device</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Subscribe to connect, unsubscribe to disconnect.
</div><div id="disconnect"></div>
<h3>
  <code>disconnect()</code>
  

</h3>
Disconnect from the connected device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> 
</div><div id="write"></div>
<h3>
  <code>write(data)</code>
  

</h3>
Writes data to the serial port
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
      data
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      <p>ArrayBuffer of data</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise when data has been written
</div><div id="available"></div>
<h3>
  <code>available()</code>
  

</h3>
Gets the number of bytes of data available


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise that contains the available bytes
</div><div id="read"></div>
<h3>
  <code>read()</code>
  

</h3>
Reads data from the buffer


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise with data from the buffer
</div><div id="readUntil"></div>
<h3>
  <code>readUntil(delimiter)</code>
  

</h3>
Reads data from the buffer until it reaches a delimiter
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
      delimiter
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>string that you want to search until</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="subscribe"></div>
<h3>
  <code>subscribe(delimiter)</code>
  

</h3>
Subscribe to be notified when data is received
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
      delimiter
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>the string you want to watch for</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> returns an observable.
</div><div id="subscribeRawData"></div>
<h3>
  <code>subscribeRawData()</code>
  

</h3>
Subscribe to be notified when data is received


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> returns an observable
</div><div id="clear"></div>
<h3>
  <code>clear()</code>
  

</h3>
Clears data in buffer


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise when completed
</div><div id="list"></div>
<h3>
  <code>list()</code>
  

</h3>
Lists bonded devices


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="isEnabled"></div>
<h3>
  <code>isEnabled()</code>
  

</h3>
Reports if bluetooth is enabled


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="isConnected"></div>
<h3>
  <code>isConnected()</code>
  

</h3>
Reports the connection status


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="readRSSI"></div>
<h3>
  <code>readRSSI()</code>
  

</h3>
Reads the RSSI from the connected peripheral


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="showBluetoothSettings"></div>
<h3>
  <code>showBluetoothSettings()</code>
  

</h3>
Show the Bluetooth settings on the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="enable"></div>
<h3>
  <code>enable()</code>
  

</h3>
Enable Bluetooth on the device


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="discoverUnpaired"></div>
<h3>
  <code>discoverUnpaired()</code>
  

</h3>
Discover unpaired devices


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> returns a promise
</div><div id="setDeviceDiscoveredListener"></div>
<h3>
  <code>setDeviceDiscoveredListener()</code>
  

</h3>
Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;any&gt;</code> Returns an observable
</div><div id="setName"></div>
<h3>
  <code>setName(newName)</code>
  

</h3>
Sets the human readable device name that is broadcasted to other devices
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
      newName
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>Desired name of device</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="setDiscoverable"></div>
<h3>
  <code>setDiscoverable(discoverableDuration)</code>
  

</h3>
Makes the device discoverable by other devices
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
      discoverableDuration
      
    </td>
    <td>
      
<code>number</code>
    </td>
    <td>
      <p>Desired number of seconds device should be discoverable for</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>





<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

