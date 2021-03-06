---
layout: "v2_fluid/docs_base"
version: "3.1.0"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "email-composer"
title: "Email Composer"
header_sub_title: "Class in module "
doc: "Email Composer"
docType: "class"
---







<h1 class="api-title">
  
  Email Composer
  

  

  <span class="beta" title="beta">&beta;</span></h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/email-composer/index.ts#L23">
  Improve this doc
</a>



<!-- decorators -->




<p class="beta-notice">
  This plugin is still in beta stage and may not work as expected. Please
  submit any issues to the <a target="_blank"
  href="https://github.com/hypery2k/cordova-email-plugin/issues">plugin repo</a>.
</p>


<pre><code>$ ionic plugin add cordova-plugin-email
$ npm install --save @ionic-native/email-composer
</code></pre>
<p>Repo:
  <a href="https://github.com/hypery2k/cordova-email-plugin">
    https://github.com/hypery2k/cordova-email-plugin
  </a>
</p>

<!-- description -->

<p>Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the <a href="https://github.com/hypery2k/cordova-email-plugin">Email Composer plugin docs</a>.</p>
<p>DISCLAIMER: This plugin is experiencing issues with the latest versions of Cordova. Use at your own risk. Functionality is not guaranteed. Please stay tuned for a more stable version.
A good alternative to this plugin is the social sharing plugin.</p>


<!-- @platforms tag -->
<h2>Supported platforms</h2>

<ul>
  <li>Android</li><li>iOS</li>
</ul>

<!-- @platforms tag end -->


<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code class="lang-typescript">import { EmailComposer } from &#39;@ionic-native/email-composer&#39;;

constructor(private emailComposer: EmailComposer) { }

...


this.emailComposer.isAvailable().then((available: boolean) =&gt;{
 if(available) {
   //Now we know we can send
 }
});

let email = {
  to: &#39;max@mustermann.de&#39;,
  cc: &#39;erika@mustermann.de&#39;,
  bcc: [&#39;john@doe.com&#39;, &#39;jane@doe.com&#39;],
  attachments: [
    &#39;file://img/logo.png&#39;,
    &#39;res://icon.png&#39;,
    &#39;base64:icon.png//iVBORw0KGgoAAAANSUhEUg...&#39;,
    &#39;file://README.pdf&#39;
  ],
  subject: &#39;Cordova Icons&#39;,
  body: &#39;How are you? Nice greetings from Leipzig&#39;,
  isHtml: true
};

// Send a text message using default options
this.emailComposer.open(email);
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="isAvailable"></div>
<h3>
  <code>isAvailable(app)</code>
  

</h3>
Verifies if sending emails is supported on the device.

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
      app
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>An optional app id or uri scheme.</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Resolves if available, rejects if not available
</div><div id="addAlias"></div>
<h3>
  <code>addAlias(alias,&nbsp;packageName)</code>
  

</h3>
Adds a new mail app alias.

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
      alias
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The alias name</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      packageName
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>The package name</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div id="open"></div>
<h3>
  <code>open(options,&nbsp;scope)</code>
  

</h3>
Displays the email composer pre-filled with data.

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
      options
      
    </td>
    <td>
      
<code>EmailComposerOptions</code>
    </td>
    <td>
      <p>Email</p>

      
      
    </td>
  </tr>
  
  <tr>
    <td>
      scope
      
    </td>
    <td>
      
<code>any</code>
    </td>
    <td>
      <p>An optional scope for the promise</p>

      
      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;any&gt;</code> Resolves promise when the EmailComposer has been opened
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!--<h2><a class="anchor" name="interfaces" href="#interfaces"></a>Interfaces</h2>-->


<h2><a class="anchor" name="EmailComposerOptions" href="#EmailComposerOptions"></a>EmailComposerOptions</h2>


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
      app
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      to
    </td>
    <td>
      <code>string | Array&lt;string&gt;</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      cc
    </td>
    <td>
      <code>string | Array&lt;string&gt;</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      bcc
    </td>
    <td>
      <code>string | Array&lt;string&gt;</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      attachments
    </td>
    <td>
      <code>Array&lt;any&gt;</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      subject
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      body
    </td>
    <td>
      <code>string</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  <tr>
    <td>
      isHtml
    </td>
    <td>
      <code>boolean</code>
    </td>
    <td>
      
      <strong class="tag">Optional</strong>
    </td>
  </tr>
  
  </tbody>
</table>





<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

