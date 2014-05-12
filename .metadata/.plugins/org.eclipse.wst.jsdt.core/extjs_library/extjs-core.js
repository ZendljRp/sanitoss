
/**
 * Generates unique ids. If the element already has an id, it is unchanged
 * @param {Mixed} el (optional) The element to generate an id for
 * @param {String} prefix (optional) Id prefix (defaults "ext-gen")
 * @return {String} The generated Id.
 */
id = "";

/**
 * @constructor
 */
Ext = function() {}; 
/**
 * The version of the framework
 * @type String
 */
Ext.version = "";

/**
 * Copies all the properties of config to obj.
 * @param {Object} obj The receiver of the properties
 * @param {Object} config The source of the properties
 * @param {Object} defaults A different object that will also be applied for default values
 * @return {Object} returns obj
 * @member Ext apply
 */
Ext.apply = function (o,c,defaults){
};

/**
 * URL to a blank file used by Ext when in secure mode for iframe src and onReady src to prevent
 * the IE insecure content warning (<TT>'about:blank'</TT>, except for IE in secure mode, which is <TT>'javascript:""'</TT>).
 * @type String
 */
Ext.SSL_SECURE_URL = "";

/**
 * True if the browser is in strict (standards-compliant) mode, as opposed to quirks mode
 * @type Boolean
 */
Ext.isStrict = false;

/**
 * True if the page is running over SSL
 * @type Boolean
 */
Ext.isSecure = false;

/**
 * True when the document is fully initialized and ready for action
 * @type Boolean
 */
Ext.isReady = false;

/**
 * True to automatically uncache orphaned Ext.Elements periodically (defaults to true)
 * @type Boolean
 */
Ext.enableGarbageCollector = false;

/**
 * True to automatically purge event listeners during garbageCollection (defaults to false).
 * @type Boolean
 */
Ext.enableListenerCollection = false;

/**
 * EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed.
 * Currently not optimized for performance.
 * @type Boolean
 */
Ext.enableNestedListenerRemoval = false;

/**
 * Indicates whether to use native browser parsing for JSON methods.
 * This option is ignored if the browser does not support native JSON methods.
 * <B>Note: Native JSON methods will not work with objects that have functions.
 * Also, property names must be quoted, otherwise the data will not parse.</B> (Defaults to false)
 * @type Boolean
 */
Ext.USE_NATIVE_JSON = false;

/**
 * Copies all the properties of config to obj if they don't already exist.
 * @param {Object} obj The receiver of the properties
 * @param {Object} config The source of the properties
 * @return {Object} returns obj
 */
Ext.applyIf = function (o,c){
};

/**
 * Generates unique ids. If the element already has an id, it is unchanged
 * @param {Mixed} el (optional) The element to generate an id for
 * @param {String} prefix (optional) Id prefix (defaults "ext-gen")
 * @return {String} The generated Id.
 */
Ext.id = function (el,prefix){
};

/**
 * <P>Extends one class to create a subclass and optionally overrides members with the passed literal. This method
 * also adds the function "override()" to the subclass that can be used to override members of the class.</P>
 * For example, to create a subclass of Ext GridPanel:
 * <PRE><CODE>
MyGridPanel = Ext.extend(Ext.grid.GridPanel, {
    constructor: function(config) {

//      Create configuration for this Grid.
        var store = new Ext.data.Store({...});
        var colModel = new Ext.grid.ColumnModel({...});

//      Create a new config object containing our computed properties
//      *plus* whatever was in the config parameter.
        config = Ext.apply({
            store: store,
            colModel: colModel
        }, config);

        MyGridPanel.superclass.constructor.call(this, config);

//      Your postprocessing here
    },

    yourMethod: function() {
        // etc.
    }
});
</CODE></PRE>
 *
 * <P>This function also supports a 3-argument call in which the subclass's constructor is
 * passed as an argument. In this form, the parameters are as follows:</P>
 * <DIV class="mdetail-params"><UL>
 * <LI><CODE>subclass</CODE> : Function <DIV class="sub-desc">The subclass constructor.</DIV></LI>
 * <LI><CODE>superclass</CODE> : Function <DIV class="sub-desc">The constructor of class being extended</DIV></LI>
 * <LI><CODE>overrides</CODE> : Object <DIV class="sub-desc">A literal with members which are copied into the subclass's
 * prototype, and are therefore shared among all instances of the new class.</DIV></LI>
 * </UL></DIV>
 *
 * @param {Function} superclass The constructor of class being extended.
 * @param {Object} overrides <P>A literal with members which are copied into the subclass's
 * prototype, and are therefore shared between all instances of the new class.</P>
 * <P>This may contain a special member named <TT><B>constructor</B></TT>. This is used
 * to define the constructor of the new class, and is returned. If this property is
 * <I>not</I> specified, a constructor is generated and returned which just calls the
 * superclass's constructor passing on its parameters.</P>
 * <P><B>It is essential that you call the superclass constructor in any provided constructor. See example code.</B></P>
 * @return {Function} The subclass constructor from the <CODE>overrides</CODE> parameter, or a generated one if not provided.
 */
Ext.extend = function (sb,sp,overrides){
};

/**
 * Adds a list of functions to the prototype of an existing class, overwriting any existing methods with the same name.
 * Usage:<PRE><CODE>
Ext.override(MyClass, {
    newMethod1: function(){
        // etc.
    },
    newMethod2: function(foo){
        // etc.
    }
});
</CODE></PRE>
 * @param {Object} origclass The class to override
 * @param {Object} overrides The list of functions to add to origClass.  This should be specified as an object literal
 * containing one or more methods.
 * @method override
 */
Ext.override = function (origclass,overrides){
};

/**
 * Creates namespaces to be used for scoping variables and classes so that they are not global.
 * Specifying the last node of a namespace implicitly creates all other nodes. Usage:
 * <PRE><CODE>
Ext.namespace('Company', 'Company.data');
Ext.namespace('Company.data'); // equivalent and preferable to above syntax
Company.Widget = function() { ... }
Company.data.CustomStore = function(config) { ... }
</CODE></PRE>
 * @param {String} namespace1
 * @param {String} namespace2
 * @param {String} etc
 * @return {Object} The namespace object. (If multiple arguments are passed, this will be the last namespace created)
 * @method namespace
 */
Ext.namespace = function (){
};

/**
 * Takes an object and converts it to an encoded URL. e.g. Ext.urlEncode({foo: 1, bar: 2}); would return "foo=1&amp;bar=2".  Optionally, property values can be arrays, instead of keys and the resulting string that's returned will contain a name/value pair for each array value.
 * @param {Object} o
 * @param {String} pre (optional) A prefix to add to the url encoded string
 * @return {String}
 */
Ext.urlEncode = function (o,pre){
};

/**
 * Takes an encoded URL and and converts it to an object. Example: <PRE><CODE>
Ext.urlDecode("foo=1&amp;bar=2"); // returns {foo: "1", bar: "2"}
Ext.urlDecode("foo=1&amp;bar=2&amp;bar=3&amp;bar=4", false); // returns {foo: "1", bar: ["2", "3", "4"]}
</CODE></PRE>
 * @param {String} string
 * @param {Boolean} overwrite (optional) Items of the same name will overwrite previous values instead of creating an an array (Defaults to false).
 * @return {Object} A literal with members
 */
Ext.urlDecode = function (string,overwrite){
};

/**
 * Appends content to the query string of a URL, handling logic for whether to place
 * a question mark or ampersand.
 * @param {String} url The URL to append to.
 * @param {String} s The content to append to the URL.
 * @return (String) The resulting URL
 */
Ext.urlAppend = function (url,s){
};

/**
 * Converts any iterable (numeric indices and a length property) into a true array
 * Don't use this on strings. IE doesn't support "abc"[0] which this implementation depends on.
 * For strings, use this instead: "abc".match(/./g) =&gt; [a,b,c];
 * @param {Iterable} the iterable object to be turned into a true Array.
 * @return (Array) array
 */
Ext.toArray = function (a,i,j){
};


Ext.isIterable = function (v){
};

/**
 * Iterates an array calling the supplied function.
 * @param {Array/NodeList/Mixed} array The array to be iterated. If this
 * argument is not really an array, the supplied function is called once.
 * @param {Function} fn The function to be called with each item. If the
 * supplied function returns false, iteration stops and this method returns
 * the current <CODE>index</CODE>. This function is called with
 * the following arguments:
 * <DIV class="mdetail-params"><UL>
 * <LI><CODE>item</CODE> : <I>Mixed</I>
 * <DIV class="sub-desc">The item at the current <CODE>index</CODE>
 * in the passed <CODE>array</CODE></DIV></LI>
 * <LI><CODE>index</CODE> : <I>Number</I>
 * <DIV class="sub-desc">The current index within the array</DIV></LI>
 * <LI><CODE>allItems</CODE> : <I>Array</I>
 * <DIV class="sub-desc">The <CODE>array</CODE> passed as the first
 * argument to <CODE>Ext.each</CODE>.</DIV></LI>
 * </UL></DIV>
 * @param {Object} scope The scope (<CODE>this</CODE> reference) in which the specified function is executed.
 * Defaults to the <CODE>item</CODE> at the current <CODE>index</CODE>
 * within the passed <CODE>array</CODE>.
 * @return See description for the fn parameter.
 */
Ext.each = function (array,fn,scope){
};

/**
 * Iterates either the elements in an array, or each of the properties in an object.
 * <B>Note</B>: If you are only iterating arrays, it is better to call {@link #each}.
 * @param {Object/Array} object The object or array to be iterated
 * @param {Function} fn The function to be called for each iteration.
 * The iteration will stop if the supplied function returns false, or
 * all array elements / object properties have been covered. The signature
 * varies depending on the type of object being interated:
 * <DIV class="mdetail-params"><UL>
 * <LI>Arrays : <TT>(Object item, Number index, Array allItems)</TT>
 * <DIV class="sub-desc">
 * When iterating an array, the supplied function is called with each item.</DIV></LI>
 * <LI>Objects : <TT>(String key, Object value, Object)</TT>
 * <DIV class="sub-desc">
 * When iterating an object, the supplied function is called with each key-value pair in
 * the object, and the iterated object</DIV></LI>
 * </UL></DIV>
 * @param {Object} scope The scope (<CODE>this</CODE> reference) in which the specified function is executed. Defaults to
 * the <CODE>object</CODE> being iterated.
 */
Ext.iterate = function (obj,fn,scope){
};

/**
 * Return the dom node for the passed String (id), dom node, or Ext.Element.
 * Here are some examples:
 * <PRE><CODE>
// gets dom node based on id
var elDom = Ext.getDom('elId');
// gets dom node based on the dom node
var elDom1 = Ext.getDom(elDom);

// If we don't know if we are working with an
// Ext.Element or a dom node use Ext.getDom
function(el){
    var dom = Ext.getDom(el);
    // do something with the dom node
}
 * </CODE></PRE>
 * <B>Note</B>: the dom node to be found actually needs to exist (be rendered, etc)
 * when this method is called to be successful.
 * @param {Mixed} el
 * @return HTMLElement
 */
Ext.getDom = function (el){
};

/**
 * Returns the current document body as an {@link Ext.Element}.
 * @return Ext.Element The document body
 */
Ext.getBody = function (){
};

/**
 * <P>Removes this element from the document, removes all DOM event listeners, and deletes the cache reference.
 * All DOM event listeners are removed from this element. If {@link Ext#enableNestedListenerRemoval} is
 * <CODE>true</CODE>, then DOM event listeners are also removed from all child nodes. The body node
 * will be ignored if passed in.</P>
 * @param {HTMLElement} node The node to remove
 */
Ext.removeNode = function (n){
};

/**
 * <P>Returns true if the passed value is empty.</P>
 * <P>The value is deemed to be empty if it is</P><DIV class="mdetail-params"><UL>
 * <LI>null</LI>
 * <LI>undefined</LI>
 * <LI>an empty array</LI>
 * <LI>a zero length string (Unless the <TT>allowBlank</TT> parameter is <TT>true</TT>)</LI>
 * </UL></DIV>
 * @param {Mixed} value The value to test
 * @param {Boolean} allowBlank (optional) true to allow empty strings (defaults to false)
 * @return {Boolean}
 */
Ext.isEmpty = function (v,allowBlank){
};

/**
 * Returns true if the passed value is a JavaScript array, otherwise false.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isArray = function (v){
};

/**
 * Returns true if the passed object is a JavaScript date object, otherwise false.
 * @param {Object} object The object to test
 * @return {Boolean}
 */
Ext.isDate = function (v){
};

/**
 * Returns true if the passed value is a JavaScript Object, otherwise false.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isObject = function (v){
};

/**
 * Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isPrimitive = function (v){
};

/**
 * Returns true if the passed value is a JavaScript Function, otherwise false.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isFunction = function (v){
};

/**
 * Returns true if the passed value is a number. Returns false for non-finite numbers.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isNumber = function (v){
};

/**
 * Returns true if the passed value is a string.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isString = function (v){
};

/**
 * Returns true if the passed value is a boolean.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isBoolean = function (v){
};

/**
 * Returns true if the passed value is an HTMLElement
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isElement = function (v){
};

/**
 * Returns true if the passed value is not undefined.
 * @param {Mixed} value The value to test
 * @return {Boolean}
 */
Ext.isDefined = function (v){
};

/**
 * True if the detected browser is Opera.
 * @type Boolean
 */
Ext.isOpera = false;

/**
 * True if the detected browser uses WebKit.
 * @type Boolean
 */
Ext.isWebKit = false;

/**
 * True if the detected browser is Chrome.
 * @type Boolean
 */
Ext.isChrome = false;

/**
 * True if the detected browser is Safari.
 * @type Boolean
 */
Ext.isSafari = false;

/**
 * True if the detected browser is Safari 3.x.
 * @type Boolean
 */
Ext.isSafari3 = false;

/**
 * True if the detected browser is Safari 4.x.
 * @type Boolean
 */
Ext.isSafari4 = false;

/**
 * True if the detected browser is Safari 2.x.
 * @type Boolean
 */
Ext.isSafari2 = false;

/**
 * True if the detected browser is Internet Explorer.
 * @type Boolean
 */
Ext.isIE = false;

/**
 * True if the detected browser is Internet Explorer 6.x.
 * @type Boolean
 */
Ext.isIE6 = false;

/**
 * True if the detected browser is Internet Explorer 7.x.
 * @type Boolean
 */
Ext.isIE7 = false;

/**
 * True if the detected browser is Internet Explorer 8.x.
 * @type Boolean
 */
Ext.isIE8 = false;

/**
 * True if the detected browser uses the Gecko layout engine (e.g. Mozilla, Firefox).
 * @type Boolean
 */
Ext.isGecko = false;

/**
 * True if the detected browser uses a pre-Gecko 1.9 layout engine (e.g. Firefox 2.x).
 * @type Boolean
 */
Ext.isGecko2 = false;

/**
 * True if the detected browser uses a Gecko 1.9+ layout engine (e.g. Firefox 3.x).
 * @type Boolean
 */
Ext.isGecko3 = false;


Ext.isBorderBox = false;

/**
 * True if the detected platform is Linux.
 * @type Boolean
 */
Ext.isLinux = false;

/**
 * True if the detected platform is Windows.
 * @type Boolean
 */
Ext.isWindows = false;

/**
 * True if the detected platform is Mac OS.
 * @type Boolean
 */
Ext.isMac = false;

/**
 * True if the detected platform is Adobe Air.
 * @type Boolean
 */
Ext.isAir = false;

/**
 * Creates namespaces to be used for scoping variables and classes so that they are not global.
 * Specifying the last node of a namespace implicitly creates all other nodes. Usage:
 * <PRE><CODE>
Ext.namespace('Company', 'Company.data');
Ext.namespace('Company.data'); // equivalent and preferable to above syntax
Company.Widget = function() { ... }
Company.data.CustomStore = function(config) { ... }
</CODE></PRE>
 * @param {String} namespace1
 * @param {String} namespace2
 * @param {String} etc
 * @return {Object} The namespace object. (If multiple arguments are passed, this will be the last namespace created)
 * @method ns
 */
Ext.ns = function (){
};

/**
 * @constructor
 */
Ext.util = function() {}; 
/**
 * @class Ext.util.TaskRunner
 * Provides the ability to execute one or more arbitrary tasks in a multithreaded
 * manner.  Generally, you can use the singleton {@link Ext.TaskMgr} instead, but
 * if needed, you can create separate instances of TaskRunner.  Any number of
 * separate tasks can be started at any time and will run independently of each
 * other. Example usage:
 * <PRE><CODE>
// Start a simple clock task that updates a div once per second
var updateClock = function(){
    Ext.fly('clock').update(new Date().format('g:i:s A'));
} 
var task = {
    run: updateClock,
    interval: 1000 //1 second
}
var runner = new Ext.util.TaskRunner();
runner.start(task);

// equivalent using TaskMgr
Ext.TaskMgr.start({
    run: updateClock,
    interval: 1000
});

 * </CODE></PRE>
 * Also see {@link Ext.util.DelayedTask}. 
 * 
 * @constructor
 * @param {Number} interval (optional) The minimum precision in milliseconds supported by this TaskRunner instance
 * (defaults to 10)
 * @constructor
 */
Ext.util.TaskRunner = function() {}; 
/**
 * @class Ext.util.DelayedTask
 * <P> The DelayedTask class provides a convenient way to "buffer" the execution of a method,
 * performing setTimeout where a new timeout cancels the old timeout. When called, the
 * task will wait the specified time period before executing. If durng that time period,
 * the task is called again, the original call will be cancelled. This continues so that
 * the function is only called a single time for each iteration.</P>
 * <P>This method is especially useful for things like detecting whether a user has finished
 * typing in a text field. An example would be performing validation on a keypress. You can
 * use this class to buffer the keypress events for a certain number of milliseconds, and
 * perform only if they stop for that amount of time.  Usage:</P><PRE><CODE>
var task = new Ext.util.DelayedTask(function(){
    alert(Ext.getDom('myInputField').value.length);
});
// Wait 500ms before calling our function. If the user presses another key 
// during that 500ms, it will be cancelled and we'll wait another 500ms.
Ext.get('myInputField').on('keypress', function(){
    task.{@link #delay}(500); 
});
 * </CODE></PRE> 
 * <P>Note that we are using a DelayedTask here to illustrate a point. The configuration
 * option <TT>buffer</TT> for {@link Ext.util.Observable#addListener addListener/on} will
 * also setup a delayed task for you to buffer events.</P> 
 * @constructor The parameters to this constructor serve as defaults and are not required.
 * @param {Function} fn (optional) The default function to call.
 * @param {Object} scope The default scope (The <CODE><B>this</B></CODE> reference) in which the
 * function is called. If not specified, <CODE>this</CODE> will refer to the browser window.
 * @param {Array} args (optional) The default Array of arguments.
 * @constructor
 */
Ext.util.DelayedTask = function() {}; 
/**
 * @constructor
 */
Ext.util.Observable = function() {}; 

Ext.util.Event = function (obj,name){
};

/**
 * @class Ext.util.JSON
 * Modified version of Douglas Crockford"s json.js that doesn"t
 * mess with the Object prototype
 * http://www.json.org/js.html
 * @singleton
 * @constructor
 */
Ext.util.JSON = function() {}; 

Ext.util.JSON.encodeDate = function (o){
};


Ext.util.JSON.encode = function (o){
};


Ext.util.JSON.decode = function (json){
};

/**
 * @constructor
 */
Ext.lib = function() {}; 
/**
 * @constructor
 */
Ext.lib.Dom = function() {}; 

Ext.lib.Dom.isAncestor = function (p,c){
};


Ext.lib.Dom.getViewWidth = function (full){
};


Ext.lib.Dom.getViewHeight = function (full){
};


Ext.lib.Dom.getDocumentHeight = function (){
};


Ext.lib.Dom.getDocumentWidth = function (){
};


Ext.lib.Dom.getViewportHeight = function (){
};


Ext.lib.Dom.getViewportWidth = function (){
};

/**
 * Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The Y position of the element
 */
Ext.lib.Dom.getY = function (el){
};

/**
 * Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The X position of the element
 */
Ext.lib.Dom.getX = function (el){
};


Ext.lib.Dom.getXY = function (el){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Array} pos Contains X &amp; Y [x, y] values for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.lib.Dom.setXY = function (el,xy){
};

/**
 * Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The X position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.lib.Dom.setX = function (el,x){
};

/**
 * Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The Y position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.lib.Dom.setY = function (el,y){
};

/**
 * @constructor
 */
Ext.lib.Event = function() {}; 

Ext.lib.Event.extAdapter = false;


Ext.lib.Event.onAvailable = function (p_id,p_fn,p_obj,p_override){
};


Ext.lib.Event.addListener = function (el,eventName,fn){
};


Ext.lib.Event.removeListener = function (el,eventName,fn){
};

/**
 * Gets the target for the event.
 * @param {String} selector (optional) A simple selector to filter the target or look for an ancestor of the target
 * @param {Number/Mixed} maxDepth (optional) The max depth to
                search as a number or element (defaults to 10 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLelement}
 */
Ext.lib.Event.getTarget = function (ev){
};


Ext.lib.Event.resolveTextNode = function (node){
};

/**
 * Gets the related target.
 * @return {HTMLElement}
 */
Ext.lib.Event.getRelatedTarget = function (ev){
};

/**
 * Gets the x coordinate of the event.
 * @return {Number}
 */
Ext.lib.Event.getPageX = function (ev){
};

/**
 * Gets the y coordinate of the event.
 * @return {Number}
 */
Ext.lib.Event.getPageY = function (ev){
};


Ext.lib.Event.getXY = function (ev){
};

/**
 * Stop the event (preventDefault and stopPropagation)
 */
Ext.lib.Event.stopEvent = function (ev){
};

/**
 * Cancels bubbling of the event.
 */
Ext.lib.Event.stopPropagation = function (ev){
};

/**
 * Prevents the browsers default handling of the event.
 */
Ext.lib.Event.preventDefault = function (ev){
};


Ext.lib.Event.getEvent = function (e){
};

/**
 * Gets the character code for the event.
 * @return {Number}
 */
Ext.lib.Event.getCharCode = function (ev){
};


Ext.lib.Event.getListeners = function (el,eventName){
};


Ext.lib.Event.purgeElement = function (el,recurse,eventName){
};


Ext.lib.Event._load = function (e){
};


Ext.lib.Event._unload = function (e){
};


Ext.lib.Event.on = function (el,eventName,fn){
};


Ext.lib.Event.un = function (el,eventName,fn){
};

/*
* Portions of this file are based on pieces of Yahoo User Interface Library
* Copyright (c) 2007, Yahoo! Inc. All rights reserved.
* YUI licensed under the BSD License:
* http://developer.yahoo.net/yui/license.txt
* @constructor
 */
Ext.lib.Ajax = function() {}; 
/**
 * <P>Sends an HTTP request to a remote server.</P>
 * <P><B>Important:</B> Ajax server requests are asynchronous, and this call will
 * return before the response has been received. Process any returned data
 * in a callback function.</P>
 * <PRE><CODE>
Ext.Ajax.request({
   url: 'ajax_demo/sample.json',
   success: function(response, opts) {
      var obj = Ext.decode(response.responseText);
      console.dir(obj);
   },
   failure: function(response, opts) {
      console.log('server-side failure with status code ' + response.status);
   }
});
 * </CODE></PRE>
 * <P>To execute a callback function in the correct scope, use the <TT>scope</TT> option.</P>
 * @param {Object} options An object which may contain the following properties:<UL>
 * <LI><B>url</B> : String/Function (Optional)<DIV class="sub-desc">The URL to
 * which to send the request, or a function to call which returns a URL string. The scope of the
 * function is specified by the <TT>scope</TT> option. Defaults to the configured
 * <TT>{@link #url}</TT>.</DIV></LI>
 * <LI><B>params</B> : Object/String/Function (Optional)<DIV class="sub-desc">
 * An object containing properties which are used as parameters to the
 * request, a url encoded string or a function to call to get either. The scope of the function
 * is specified by the <TT>scope</TT> option.</DIV></LI>
 * <LI><B>method</B> : String (Optional)<DIV class="sub-desc">The HTTP method to use
 * for the request. Defaults to the configured method, or if no method was configured,
 * "GET" if no parameters are being sent, and "POST" if parameters are being sent.  Note that
 * the method name is case-sensitive and should be all caps.</DIV></LI>
 * <LI><B>callback</B> : Function (Optional)<DIV class="sub-desc">The
 * function to be called upon receipt of the HTTP response. The callback is
 * called regardless of success or failure and is passed the following
 * parameters:<UL>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * <LI><B>success</B> : Boolean<DIV class="sub-desc">True if the request succeeded.</DIV></LI>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.
 * See <A href="http://www.w3.org/TR/XMLHttpRequest/">http://www.w3.org/TR/XMLHttpRequest/</A> for details about
 * accessing elements of the response.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><A id="request-option-success"/><B>success</B> : Function (Optional)<DIV class="sub-desc">The function
 * to be called upon success of the request. The callback is passed the following
 * parameters:<UL>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.</DIV></LI>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><B>failure</B> : Function (Optional)<DIV class="sub-desc">The function
 * to be called upon failure of the request. The callback is passed the
 * following parameters:<UL>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.</DIV></LI>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><B>scope</B> : Object (Optional)<DIV class="sub-desc">The scope in
 * which to execute the callbacks: The "this" object for the callback function. If the <TT>url</TT>, or <TT>params</TT> options were
 * specified as functions from which to draw values, then this also serves as the scope for those function calls.
 * Defaults to the browser window.</DIV></LI>
 * <LI><B>timeout</B> : Number (Optional)<DIV class="sub-desc">The timeout in milliseconds to be used for this request. Defaults to 30 seconds.</DIV></LI>
 * <LI><B>form</B> : Element/HTMLElement/String (Optional)<DIV class="sub-desc">The <TT>&lt;form&gt;</TT>
 * Element or the id of the <TT>&lt;form&gt;</TT> to pull parameters from.</DIV></LI>
 * <LI><A id="request-option-isUpload"/><B>isUpload</B> : Boolean (Optional)<DIV class="sub-desc"><B>Only meaningful when used
 * with the <TT>form</TT> option</B>.
 * <P>True if the form object is a file upload (will be set automatically if the form was
 * configured with <B><TT>enctype</TT></B> "multipart/form-data").</P>
 * <P>File uploads are not performed using normal "Ajax" techniques, that is they are <B>not</B>
 * performed using XMLHttpRequests. Instead the form is submitted in the standard manner with the
 * DOM <TT>&lt;form&gt;</TT> element temporarily modified to have its
 * <A href="http://www.w3.org/TR/REC-html40/present/frames.html#adef-target">target</A> set to refer
 * to a dynamically generated, hidden <TT>&lt;iframe&gt;</TT> which is inserted into the document
 * but removed after the return data has been gathered.</P>
 * <P>The server response is parsed by the browser to create the document for the IFRAME. If the
 * server is using JSON to send the return object, then the
 * <A href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</A> header
 * must be set to "text/html" in order to tell the browser to insert the text unchanged into the document body.</P>
 * <P>The response text is retrieved from the document, and a fake XMLHttpRequest object
 * is created containing a <TT>responseText</TT> property in order to conform to the
 * requirements of event handlers and callbacks.</P>
 * <P>Be aware that file upload packets are sent with the content type <A href="http://www.faqs.org/rfcs/rfc2388.html">multipart/form</A>
 * and some server technologies (notably JEE) may require some custom processing in order to
 * retrieve parameter names and parameter values from the packet content.</P>
 * </DIV></LI>
 * <LI><B>headers</B> : Object (Optional)<DIV class="sub-desc">Request
 * headers to set for the request.</DIV></LI>
 * <LI><B>xmlData</B> : Object (Optional)<DIV class="sub-desc">XML document
 * to use for the post. Note: This will be used instead of params for the post
 * data. Any params will be appended to the URL.</DIV></LI>
 * <LI><B>jsonData</B> : Object/String (Optional)<DIV class="sub-desc">JSON
 * data to use as the post. Note: This will be used instead of params for the post
 * data. Any params will be appended to the URL.</DIV></LI>
 * <LI><B>disableCaching</B> : Boolean (Optional)<DIV class="sub-desc">True
 * to add a unique cache-buster param to GET requests.</DIV></LI>
 * </UL>
 * <P>The options object may also contain any other property which might be needed to perform
 * postprocessing in a callback because it is passed to callback functions.</P>
 * @return {Number} transactionId The id of the server transaction. This may be used
 * to cancel the request.
 */
Ext.lib.Ajax.request = function (method,uri,cb,data,options){
};

/**
 * Serialize the passed form into a url encoded string
 * @param {String/HTMLElement} form
 * @return {String}
 */
Ext.lib.Ajax.serializeForm = function (form){
};


Ext.lib.Ajax.useDefaultHeader = false;


Ext.lib.Ajax.defaultPostHeader = "";


Ext.lib.Ajax.useDefaultXhrHeader = false;


Ext.lib.Ajax.defaultXhrHeader = "";

/**
 * @constructor
 */
Ext.lib.Ajax.poll = function() {}; 
/**
 * @cfg {Number} timeout (Optional) The timeout in milliseconds to be used for requests. (defaults to 30000)
 * @constructor
 */
Ext.lib.Ajax.timeout = function() {}; 

Ext.lib.Ajax.pollInterval = 0;


Ext.lib.Ajax.transactionId = 0;

/**
 * Aborts any outstanding request.
 * @param {Number} transactionId (Optional) defaults to the last transaction
 */
Ext.lib.Ajax.abort = function (o,callback,isTimeout){
};


Ext.lib.Ajax.isCallInProgress = function (o){
};

/**
 * @constructor
 */
Ext.lib.Anim = function() {}; 

Ext.lib.Anim.motion = function (el,args,duration,easing,cb,scope){
};


Ext.lib.Anim.run = function (el,args,duration,easing,cb,scope,type){
};


Ext.lib.Anim.color = function (el,args,duration,easing,cb,scope){
};


Ext.lib.Anim.scroll = function (el,args,duration,easing,cb,scope){
};


Ext.lib.AnimBase = function (el,attributes,duration,method){
};

/**
 * @constructor
 */
Ext.lib.AnimMgr = function() {}; 

Ext.lib.AnimMgr.fps = 0;


Ext.lib.AnimMgr.delay = 0;


Ext.lib.AnimMgr.registerElement = function (tween){
};


Ext.lib.AnimMgr.unRegister = function (tween,index){
};


Ext.lib.AnimMgr.start = function (){
};


Ext.lib.AnimMgr.stop = function (tween){
};


Ext.lib.AnimMgr.run = function (){
};

/**
 * @constructor
 */
Ext.lib.Bezier = function() {}; 

Ext.lib.Bezier.getPosition = function (points,t){
};

/**
 * @constructor
 */
Ext.lib.Easing = function() {}; 

Ext.lib.Easing.easeNone = function (t,b,c,d){
};


Ext.lib.Easing.easeIn = function (t,b,c,d){
};


Ext.lib.Easing.easeOut = function (t,b,c,d){
};


Ext.lib.Easing.easeBoth = function (t,b,c,d){
};


Ext.lib.Easing.easeInStrong = function (t,b,c,d){
};


Ext.lib.Easing.easeOutStrong = function (t,b,c,d){
};


Ext.lib.Easing.easeBothStrong = function (t,b,c,d){
};


Ext.lib.Easing.elasticIn = function (t,b,c,d,a,p){
};


Ext.lib.Easing.elasticOut = function (t,b,c,d,a,p){
};


Ext.lib.Easing.elasticBoth = function (t,b,c,d,a,p){
};


Ext.lib.Easing.backIn = function (t,b,c,d,s){
};


Ext.lib.Easing.backOut = function (t,b,c,d,s){
};


Ext.lib.Easing.backBoth = function (t,b,c,d,s){
};


Ext.lib.Easing.bounceIn = function (t,b,c,d){
};


Ext.lib.Easing.bounceOut = function (t,b,c,d){
};


Ext.lib.Easing.bounceBoth = function (t,b,c,d){
};


Ext.lib.Motion = function (el,attributes,duration,method){
};


Ext.lib.ColorAnim = function (el,attributes,duration,method){
};


Ext.lib.Scroll = function (el,attributes,duration,method){
};

/**
 * @constructor
 */
Ext.data = function() {}; 
/**
 * @class Ext.data.Connection
 * @extends Ext.util.Observable
 * <P>The class encapsulates a connection to the page's originating domain, allowing requests to be made
 * either to a configured URL, or to a URL specified at request time.</P>
 * <P>Requests made by this class are asynchronous, and will return immediately. No data from
 * the server will be available to the statement immediately following the {@link #request} call.
 * To process returned data, use a
 * <A ext:cls="Ext.data.Connection" ext:member="request-option-success" href="#request-option-success">success callback</A>
 * in the request options object,
 * or an {@link #requestcomplete event listener}.</P>
 * <P/><H3>File Uploads</H3><A ext:cls="Ext.data.Connection" ext:member="request-option-isUpload" href="#request-option-isUpload">File uploads</A> are not performed using normal "Ajax" techniques, that
 * is they are <B>not</B> performed using XMLHttpRequests. Instead the form is submitted in the standard
 * manner with the DOM <TT>&lt;form&gt;</TT> element temporarily modified to have its
 * <A href="http://www.w3.org/TR/REC-html40/present/frames.html#adef-target">target</A> set to refer
 * to a dynamically generated, hidden <TT>&lt;iframe&gt;</TT> which is inserted into the document
 * but removed after the return data has been gathered.
 * <P>The server response is parsed by the browser to create the document for the IFRAME. If the
 * server is using JSON to send the return object, then the
 * <A href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</A> header
 * must be set to "text/html" in order to tell the browser to insert the text unchanged into the document body.</P>
 * <P>Characters which are significant to an HTML parser must be sent as HTML entities, so encode
 * "&lt;" as "&amp;lt;", "&amp;" as "&amp;amp;" etc.</P>
 * <P>The response text is retrieved from the document, and a fake XMLHttpRequest object
 * is created containing a <TT>responseText</TT> property in order to conform to the
 * requirements of event handlers and callbacks.</P>
 * <P>Be aware that file upload packets are sent with the content type <A href="http://www.faqs.org/rfcs/rfc2388.html">multipart/form</A>
 * and some server technologies (notably JEE) may require some custom processing in order to
 * retrieve parameter names and parameter values from the packet content.</P>
 * @constructor
 * @param {Object} config a configuration object.
 * @constructor
 */
Ext.data.Connection = function() {}; 
/**
 * @constructor
 */
Ext.elCache = function() {}; 
/**
 * @class Ext.TaskMgr
 * @extends Ext.util.TaskRunner
 * A static {@link Ext.util.TaskRunner} instance that can be used to start and stop arbitrary tasks.  See
 * {@link Ext.util.TaskRunner} for supported methods and task config properties.
 * <PRE><CODE>
// Start a simple clock task that updates a div once per second
var task = {
    run: function(){
        Ext.fly('clock').update(new Date().format('g:i:s A'));
    },
    interval: 1000 //1 second
}
Ext.TaskMgr.start(task);
</CODE></PRE>
 * @singleton
 * @constructor
 */
Ext.TaskMgr = function() {}; 

Ext.TaskMgr.start = function (task){
};


Ext.TaskMgr.stop = function (task){
};


Ext.TaskMgr.stopAll = function (){
};

/**
 * @class Ext.DomHelper
 * <P>The DomHelper class provides a layer of abstraction from DOM and transparently supports creating
 * elements via DOM or using HTML fragments. It also has the ability to create HTML fragment templates
 * from your DOM building code.</P>
 *
 * <P><B><U>DomHelper element specification object</U></B></P>
 * <P>A specification object is used when creating elements. Attributes of this object
 * are assumed to be element attributes, except for 4 special attributes:
 * </P><DIV class="mdetail-params"><UL>
 * <LI><B><TT>tag</TT></B> : <DIV class="sub-desc">The tag name of the element</DIV></LI>
 * <LI><B><TT>children</TT></B> : or <TT>cn</TT><DIV class="sub-desc">An array of the
 * same kind of element definition objects to be created and appended. These can be nested
 * as deep as you want.</DIV></LI>
 * <LI><B><TT>cls</TT></B> : <DIV class="sub-desc">The class attribute of the element.
 * This will end up being either the "class" attribute on a HTML fragment or className
 * for a DOM node, depending on whether DomHelper is using fragments or DOM.</DIV></LI>
 * <LI><B><TT>html</TT></B> : <DIV class="sub-desc">The innerHTML for the element</DIV></LI>
 * </UL></DIV>
 *
 * <P><B><U>Insertion methods</U></B></P>
 * <P>Commonly used insertion methods:
 * </P><DIV class="mdetail-params"><UL>
 * <LI><B><TT>{@link #append}</TT></B> : <DIV class="sub-desc"/></LI>
 * <LI><B><TT>{@link #insertBefore}</TT></B> : <DIV class="sub-desc"/></LI>
 * <LI><B><TT>{@link #insertAfter}</TT></B> : <DIV class="sub-desc"/></LI>
 * <LI><B><TT>{@link #overwrite}</TT></B> : <DIV class="sub-desc"/></LI>
 * <LI><B><TT>{@link #createTemplate}</TT></B> : <DIV class="sub-desc"/></LI>
 * <LI><B><TT>{@link #insertHtml}</TT></B> : <DIV class="sub-desc"/></LI>
 * </UL></DIV>
 *
 * <P><B><U>Example</U></B></P>
 * <P>This is an example, where an unordered list with 3 children items is appended to an existing
 * element with id <TT>'my-div'</TT>:<BR/>
 </P><PRE><CODE>
var dh = Ext.DomHelper; // create shorthand alias
// specification object
var spec = {
    id: 'my-ul',
    tag: 'ul',
    cls: 'my-list',
    // append children after creating
    children: [     // may also specify 'cn' instead of 'children'
        {tag: 'li', id: 'item0', html: 'List Item 0'},
        {tag: 'li', id: 'item1', html: 'List Item 1'},
        {tag: 'li', id: 'item2', html: 'List Item 2'}
    ]
};
var list = dh.append(
    'my-div', // the context element 'my-div' can either be the id or the actual node
    spec      // the specification object
);
 </CODE></PRE>
 * <P>Element creation specification parameters in this class may also be passed as an Array of
 * specification objects. This can be used to insert multiple sibling nodes into an existing
 * container very efficiently. For example, to add more list items to the example above:</P><PRE><CODE>
dh.append('my-ul', [
    {tag: 'li', id: 'item3', html: 'List Item 3'},
    {tag: 'li', id: 'item4', html: 'List Item 4'}
]);
 * </CODE></PRE>
 *
 * <P><B><U>Templating</U></B></P>
 * <P>The real power is in the built-in templating. Instead of creating or appending any elements,
 * <TT>{@link #createTemplate}</TT> returns a Template object which can be used over and over to
 * insert new elements. Revisiting the example above, we could utilize templating this time:
 * </P><PRE><CODE>
// create the node
var list = dh.append('my-div', {tag: 'ul', cls: 'my-list'});
// get template
var tpl = dh.createTemplate({tag: 'li', id: 'item{0}', html: 'List Item {0}'});

for(var i = 0; i &lt; 5, i++){
    tpl.append(list, [i]); // use template to append to the actual node
}
 * </CODE></PRE>
 * <P>An example using a template:</P><PRE><CODE>
var html = '<A class="nav" href="{1}" id="{0}">{2}</A>';

var tpl = new Ext.DomHelper.createTemplate(html);
tpl.append('blog-roll', ['link1', 'http://www.jackslocum.com/', "Jack's Site"]);
tpl.append('blog-roll', ['link2', 'http://www.dustindiaz.com/', "Dustin's Site"]);
 * </CODE></PRE>
 *
 * <P>The same example using named parameters:</P><PRE><CODE>
var html = '<A class="nav" href="{url}" id="{id}">{text}</A>';

var tpl = new Ext.DomHelper.createTemplate(html);
tpl.append('blog-roll', {
    id: 'link1',
    url: 'http://www.jackslocum.com/',
    text: "Jack's Site"
});
tpl.append('blog-roll', {
    id: 'link2',
    url: 'http://www.dustindiaz.com/',
    text: "Dustin's Site"
});
 * </CODE></PRE>
 *
 * <P><B><U>Compiling Templates</U></B></P>
 * <P>Templates are applied using regular expressions. The performance is great, but if
 * you are adding a bunch of DOM elements using the same template, you can increase
 * performance even further by {@link Ext.Template#compile "compiling"} the template.
 * The way "{@link Ext.Template#compile compile()}" works is the template is parsed and
 * broken up at the different variable points and a dynamic function is created and eval'ed.
 * The generated function performs string concatenation of these parts and the passed
 * variables instead of using regular expressions.
 * </P><PRE><CODE>
var html = '<A class="nav" href="{url}" id="{id}">{text}</A>';

var tpl = new Ext.DomHelper.createTemplate(html);
tpl.compile();

//... use template like normal
 * </CODE></PRE>
 *
 * <P><B><U>Performance Boost</U></B></P>
 * <P>DomHelper will transparently create HTML fragments when it can. Using HTML fragments instead
 * of DOM can significantly boost performance.</P>
 * <P>Element creation specification parameters may also be strings. If {@link #useDom} is <TT>false</TT>,
 * then the string is used as innerHTML. If {@link #useDom} is <TT>true</TT>, a string specification
 * results in the creation of a text node. Usage:</P>
 * <PRE><CODE>
Ext.DomHelper.useDom = true; // force it to use DOM; reduces performance
 * </CODE></PRE>
 * @singleton
 * @constructor
 */
Ext.DomHelper = function() {}; 
/**
 * Returns the markup for the passed Element(s) config.
 * @param {Object} o The DOM object spec (and children)
 * @return {String}
 */
Ext.DomHelper.markup = function (o){
};

/**
 * Applies a style specification to an element.
 * @param {String/HTMLElement} el The element to apply styles to
 * @param {String/Object/Function} styles A style specification string e.g. 'width:100px', or object in the form {width:'100px'}, or
 * a function which returns such a specification.
 */
Ext.DomHelper.applyStyles = function (el,styles){
};

/**
 * Inserts an HTML fragment into the DOM.
 * @param {String} where Where to insert the html in relation to el - beforeBegin, afterBegin, beforeEnd, afterEnd.
 * @param {HTMLElement} el The context element
 * @param {String} html The HTML fragment
 * @return {HTMLElement} The new node
 */
Ext.DomHelper.insertHtml = function (where,el,html){
};

/**
 * Creates new DOM element(s) and inserts them before el.
 * @param {Mixed} el The context element
 * @param {Object/String} o The DOM object spec (and children) or raw HTML blob
 * @param {Boolean} returnElement (optional) true to return a Ext.Element
 * @return {HTMLElement/Ext.Element} The new node
 */
Ext.DomHelper.insertBefore = function (el,o,returnElement){
};

/**
 * Creates new DOM element(s) and inserts them after el.
 * @param {Mixed} el The context element
 * @param {Object} o The DOM object spec (and children)
 * @param {Boolean} returnElement (optional) true to return a Ext.Element
 * @return {HTMLElement/Ext.Element} The new node
 */
Ext.DomHelper.insertAfter = function (el,o,returnElement){
};

/**
 * Creates new DOM element(s) and inserts them as the first child of el.
 * @param {Mixed} el The context element
 * @param {Object/String} o The DOM object spec (and children) or raw HTML blob
 * @param {Boolean} returnElement (optional) true to return a Ext.Element
 * @return {HTMLElement/Ext.Element} The new node
 */
Ext.DomHelper.insertFirst = function (el,o,returnElement){
};

/**
 * Creates new DOM element(s) and appends them to el.
 * @param {Mixed} el The context element
 * @param {Object/String} o The DOM object spec (and children) or raw HTML blob
 * @param {Boolean} returnElement (optional) true to return a Ext.Element
 * @return {HTMLElement/Ext.Element} The new node
 */
Ext.DomHelper.append = function (el,o,returnElement){
};

/**
 * Creates new DOM element(s) and overwrites the contents of el with them.
 * @param {Mixed} el The context element
 * @param {Object/String} o The DOM object spec (and children) or raw HTML blob
 * @param {Boolean} returnElement (optional) true to return a Ext.Element
 * @return {HTMLElement/Ext.Element} The new node
 */
Ext.DomHelper.overwrite = function (el,o,returnElement){
};


Ext.DomHelper.createHtml = function (o){
};

/**
 * @class Ext.Template
 * <P>Represents an HTML fragment template. Templates may be {@link #compile precompiled}
 * for greater performance.</P>
 * <P>For example usage {@link #Template see the constructor}.</P>
 * 
 * @constructor
 * An instance of this class may be created by passing to the constructor either
 * a single argument, or multiple arguments:
 * <DIV class="mdetail-params"><UL>
 * <LI><B>single argument</B> : String/Array
 * <DIV class="sub-desc">
 * The single argument may be either a String or an Array:<UL>
 * <LI><TT>String</TT> : </LI><PRE><CODE>
var t = new Ext.Template("&lt;div&gt;Hello {0}.&lt;/div&gt;");
t.{@link #append}('some-element', ['foo']);
 * </CODE></PRE>
 * <LI><TT>Array</TT> : </LI>
 * An Array will be combined with <CODE>join('')</CODE>.
<PRE><CODE>
var t = new Ext.Template([
    '&lt;div name="{id}"&gt;',
        '&lt;span class="{cls}"&gt;{name:trim} {value:ellipsis(10)}&lt;/span&gt;',
    '&lt;/div&gt;',
]);
t.{@link #compile}();
t.{@link #append}('some-element', {id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'});
</CODE></PRE>
 * </UL></DIV></LI>
 * <LI><B>multiple arguments</B> : String, Object, Array, ...
 * <DIV class="sub-desc">
 * Multiple arguments will be combined with <CODE>join('')</CODE>.
 * <PRE><CODE>
var t = new Ext.Template(
    '&lt;div name="{id}"&gt;',
        '&lt;span class="{cls}"&gt;{name} {value}&lt;/span&gt;',
    '&lt;/div&gt;',
    // a configuration object:
    {
        compiled: true,      // {@link #compile} immediately
        disableFormats: true // See Notes below.
    } 
);
 * </CODE></PRE>
 * <P><B>Notes</B>:</P>
 * <DIV class="mdetail-params"><UL>
 * <LI>Formatting and <CODE>disableFormats</CODE> are not applicable for Ext Core.</LI>
 * <LI>For a list of available format functions, see {@link Ext.util.Format}.</LI>
 * <LI><CODE>disableFormats</CODE> reduces <CODE>{@link #apply}</CODE> time
 * when no formatting is required.</LI>
 * </UL></DIV>
 * </DIV></LI>
 * </UL></DIV>
 * @param {Mixed} config
 * @constructor
 */
Ext.Template = function() {}; 
/**
 * @class Ext.DomQuery
Provides high performance selector/xpath processing by compiling queries into reusable functions. New pseudo classes and matchers can be plugged. It works on HTML and XML documents (if a content node is passed in).
<P>
DomQuery supports most of the <A href="http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#selectors">CSS3 selectors spec</A>, along with some custom selectors and basic XPath.</P>

<P>
All selectors, attribute filters and pseudos below can be combined infinitely in any order. For example "div.foo:nth-child(odd)[@foo=bar].bar:first" would be a perfectly valid selector. Node filters are processed in the order in which they appear, which allows you to optimize your queries for your document structure.
</P>
<H4>Element Selectors:</H4>
<UL class="list">
    <LI> <B>*</B> any element</LI>
    <LI> <B>E</B> an element with the tag E</LI>
    <LI> <B>E F</B> All descendent elements of E that have the tag F</LI>
    <LI> <B>E &gt; F</B> or <B>E/F</B> all direct children elements of E that have the tag F</LI>
    <LI> <B>E + F</B> all elements with the tag F that are immediately preceded by an element with the tag E</LI>
    <LI> <B>E ~ F</B> all elements with the tag F that are preceded by a sibling element with the tag E</LI>
</UL>
<H4>Attribute Selectors:</H4>
<P>The use of @ and quotes are optional. For example, div[@foo='bar'] is also a valid attribute selector.</P>
<UL class="list">
    <LI> <B>E[foo]</B> has an attribute "foo"</LI>
    <LI> <B>E[foo=bar]</B> has an attribute "foo" that equals "bar"</LI>
    <LI> <B>E[foo^=bar]</B> has an attribute "foo" that starts with "bar"</LI>
    <LI> <B>E[foo$=bar]</B> has an attribute "foo" that ends with "bar"</LI>
    <LI> <B>E[foo*=bar]</B> has an attribute "foo" that contains the substring "bar"</LI>
    <LI> <B>E[foo%=2]</B> has an attribute "foo" that is evenly divisible by 2</LI>
    <LI> <B>E[foo!=bar]</B> has an attribute "foo" that does not equal "bar"</LI>
</UL>
<H4>Pseudo Classes:</H4>
<UL class="list">
    <LI> <B>E:first-child</B> E is the first child of its parent</LI>
    <LI> <B>E:last-child</B> E is the last child of its parent</LI>
    <LI> <B>E:nth-child(<I>n</I>)</B> E is the <I>n</I>th child of its parent (1 based as per the spec)</LI>
    <LI> <B>E:nth-child(odd)</B> E is an odd child of its parent</LI>
    <LI> <B>E:nth-child(even)</B> E is an even child of its parent</LI>
    <LI> <B>E:only-child</B> E is the only child of its parent</LI>
    <LI> <B>E:checked</B> E is an element that is has a checked attribute that is true (e.g. a radio or checkbox) </LI>
    <LI> <B>E:first</B> the first E in the resultset</LI>
    <LI> <B>E:last</B> the last E in the resultset</LI>
    <LI> <B>E:nth(<I>n</I>)</B> the <I>n</I>th E in the resultset (1 based)</LI>
    <LI> <B>E:odd</B> shortcut for :nth-child(odd)</LI>
    <LI> <B>E:even</B> shortcut for :nth-child(even)</LI>
    <LI> <B>E:contains(foo)</B> E's innerHTML contains the substring "foo"</LI>
    <LI> <B>E:nodeValue(foo)</B> E contains a textNode with a nodeValue that equals "foo"</LI>
    <LI> <B>E:not(S)</B> an E element that does not match simple selector S</LI>
    <LI> <B>E:has(S)</B> an E element that has a descendent that matches simple selector S</LI>
    <LI> <B>E:next(S)</B> an E element whose next sibling matches simple selector S</LI>
    <LI> <B>E:prev(S)</B> an E element whose previous sibling matches simple selector S</LI>
</UL>
<H4>CSS Value Selectors:</H4>
<UL class="list">
    <LI> <B>E{display=none}</B> css value "display" that equals "none"</LI>
    <LI> <B>E{display^=none}</B> css value "display" that starts with "none"</LI>
    <LI> <B>E{display$=none}</B> css value "display" that ends with "none"</LI>
    <LI> <B>E{display*=none}</B> css value "display" that contains the substring "none"</LI>
    <LI> <B>E{display%=2}</B> css value "display" that is evenly divisible by 2</LI>
    <LI> <B>E{display!=none}</B> css value "display" that does not equal "none"</LI>
</UL>
 * @singleton
 * @constructor
 */
Ext.DomQuery = function() {}; 
/**
 * Normalizes currentStyle and computedStyle.
 * @param {String} property The style property whose value is returned.
 * @return {String} The current value of the style property for this element.
 */
Ext.DomQuery.getStyle = function (el,name){
};

/**
 * Compiles a selector/xpath query into a reusable function. The returned function
 * takes one parameter "root" (optional), which is the context node from where the query should start.
 * @param {String} selector The selector/xpath query
 * @param {String} type (optional) Either "select" (the default) or "simple" for a simple selector match
 * @return {Function}
 */
Ext.DomQuery.compile = function (path,type){
};

/**
 * Selects a group of elements.
 * @param {String} selector The selector/xpath query (can be a comma separated list of selectors)
 * @param {Node} root (optional) The start of the query (defaults to document).
 * @return {Array} An Array of DOM elements which match the selector. If there are
 * no matches, and empty Array is returned.
 */
Ext.DomQuery.select = function (path,root,type){
};

/**
 * Selects a single element.
 * @param {String} selector The selector/xpath query
 * @param {Node} root (optional) The start of the query (defaults to document).
 * @return {Element} The DOM element which matched the selector.
 */
Ext.DomQuery.selectNode = function (path,root){
};

/**
 * Selects the value of a node, optionally replacing null with the defaultValue.
 * @param {String} selector The selector/xpath query
 * @param {Node} root (optional) The start of the query (defaults to document).
 * @param {String} defaultValue
 * @return {String}
 */
Ext.DomQuery.selectValue = function (path,root,defaultValue){
};

/**
 * Selects the value of a node, parsing integers and floats. Returns the defaultValue, or 0 if none is specified.
 * @param {String} selector The selector/xpath query
 * @param {Node} root (optional) The start of the query (defaults to document).
 * @param {Number} defaultValue
 * @return {Number}
 */
Ext.DomQuery.selectNumber = function (path,root,defaultValue){
};

/**
 * Returns true if the passed element(s) match the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String/HTMLElement/Array} el An element id, element or array of elements
 * @param {String} selector The simple selector to test
 * @return {Boolean}
 */
Ext.DomQuery.is = function (el,ss){
};

/**
 * Filters an array of elements to only include matches of a simple selector (e.g. div.some-class or span:first-child)
 * @param {Array} el An array of elements to filter
 * @param {String} selector The simple selector to test
 * @param {Boolean} nonMatches If true, it returns the elements that DON'T match
 * the selector instead of the ones that match
 * @return {Array} An Array of DOM elements which match the selector. If there are
 * no matches, and empty Array is returned.
 */
Ext.DomQuery.filter = function (els,ss,nonMatches){
};

/**
 * Collection of matching regular expressions and code snippets.
 * @constructor
 */
Ext.DomQuery.matchers = function() {}; 
/**
 * Collection of operator comparison functions. The default operators are =, !=, ^=, $=, *=, %=, |= and ~=.
 * New operators can be added as long as the match the format <I>c</I>= where <I>c</I> is any character other than space, &gt; &lt;.
 * @constructor
 */
Ext.DomQuery.operators = function() {}; 

Ext.DomQuery.operators['='] = function (a,v){
};


Ext.DomQuery.operators['!='] = function (a,v){
};


Ext.DomQuery.operators['^='] = function (a,v){
};


Ext.DomQuery.operators['$='] = function (a,v){
};


Ext.DomQuery.operators['*='] = function (a,v){
};


Ext.DomQuery.operators['%='] = function (a,v){
};


Ext.DomQuery.operators['|='] = function (a,v){
};


Ext.DomQuery.operators['~='] = function (a,v){
};

/**
 * <P>Object hash of "pseudo class" filter functions which are used when filtering selections. Each function is passed
 * two parameters:</P><DIV class="mdetail-params"><UL>
 * <LI><B>c</B> : Array<DIV class="sub-desc">An Array of DOM elements to filter.</DIV></LI>
 * <LI><B>v</B> : String<DIV class="sub-desc">The argument (if any) supplied in the selector.</DIV></LI>
 * </UL></DIV>
 * <P>A filter function returns an Array of DOM elements which conform to the pseudo class.</P>
 * <P>In addition to the provided pseudo classes listed above such as <CODE>first-child</CODE> and <CODE>nth-child</CODE>,
 * developers may add additional, custom psuedo class filters to select elements according to application-specific requirements.</P>
 * <P>For example, to filter <CODE>&lt;a&gt;</CODE> elements to only return links to <I>external</I> resources:</P>
 * <CODE/><PRE>Ext.DomQuery.pseudos.external = function(c, v){
    var r = [], ri = -1;
    for(var i = 0, ci; ci = c[i]; i++){
//      Include in result set only if it's a link to an external resource
        if(ci.hostname != location.hostname){
            r[++ri] = ci;
        }
    }
    return r;
};</PRE>
 * Then external links could be gathered with the following statement:<CODE/><PRE>var externalLinks = Ext.select("a:external");
</PRE>
 * @constructor
 */
Ext.DomQuery.pseudos = function() {}; 

Ext.DomQuery.pseudos['first-child'] = function (c){
};


Ext.DomQuery.pseudos['last-child'] = function (c){
};


Ext.DomQuery.pseudos['nth-child'] = function (c,a){
};


Ext.DomQuery.pseudos['only-child'] = function (c){
};


Ext.DomQuery.pseudos.empty = function (c){
};

/**
 * Returns true if this element is an ancestor of the passed element
 * @param {HTMLElement/String} el The element to check
 * @return {Boolean} True if this element is an ancestor of el, else false
 */
Ext.DomQuery.pseudos.contains = function (c,v){
};


Ext.DomQuery.pseudos.nodeValue = function (c,v){
};


Ext.DomQuery.pseudos.checked = function (c){
};


Ext.DomQuery.pseudos.not = function (c,ss){
};


Ext.DomQuery.pseudos.any = function (c,selectors){
};


Ext.DomQuery.pseudos.odd = function (c){
};


Ext.DomQuery.pseudos.even = function (c){
};


Ext.DomQuery.pseudos.nth = function (c,a){
};

/**
 * Gets the first child, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The first child or null
 */
Ext.DomQuery.pseudos.first = function (c){
};

/**
 * Gets the last child, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The last child or null
 */
Ext.DomQuery.pseudos.last = function (c){
};


Ext.DomQuery.pseudos.has = function (c,ss){
};

/**
 * Gets the next sibling, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The next sibling or null
 */
Ext.DomQuery.pseudos.next = function (c,ss){
};

/**
 * Gets the previous sibling, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The previous sibling or null
 */
Ext.DomQuery.pseudos.prev = function (c,ss){
};


Ext.query = function (path,root,type){
};

/**
 * @class Ext.EventManager
 * Registers event handlers that want to receive a normalized EventObject instead of the standard browser event and provides
 * several useful events directly.
 * See {@link Ext.EventObject} for more details on normalized event objects.
 * @singleton
 * @constructor
 */
Ext.EventManager = function() {}; 
/**
 * Appends an event handler to an element.  The shorthand version {@link #on} is equivalent.  Typically you will
 * use {@link Ext.Element#addListener} directly on an Element in favor of calling this version.
 * @param {String/HTMLElement} el The html element or id to assign the event handler to.
 * @param {String} eventName The name of the event to listen for.
 * @param {Function} handler The handler function the event invokes. This function is passed
 * the following parameters:<UL>
 * <LI>evt : EventObject<DIV class="sub-desc">The {@link Ext.EventObject EventObject} describing the event.</DIV></LI>
 * <LI>t : Element<DIV class="sub-desc">The {@link Ext.Element Element} which was the target of the event.
 * Note that this may be filtered by using the <TT>delegate</TT> option.</DIV></LI>
 * <LI>o : Object<DIV class="sub-desc">The options object from the addListener call.</DIV></LI>
 * </UL>
 * @param {Object} scope (optional) The scope (<B><CODE>this</CODE></B> reference) in which the handler function is executed. <B>Defaults to the Element</B>.
 * @param {Object} options (optional) An object containing handler configuration properties.
 * This may contain any of the following properties:<UL>
 * <LI>scope : Object<DIV class="sub-desc">The scope (<B><CODE>this</CODE></B> reference) in which the handler function is executed. <B>Defaults to the Element</B>.</DIV></LI>
 * <LI>delegate : String<DIV class="sub-desc">A simple selector to filter the target or look for a descendant of the target</DIV></LI>
 * <LI>stopEvent : Boolean<DIV class="sub-desc">True to stop the event. That is stop propagation, and prevent the default action.</DIV></LI>
 * <LI>preventDefault : Boolean<DIV class="sub-desc">True to prevent the default action</DIV></LI>
 * <LI>stopPropagation : Boolean<DIV class="sub-desc">True to prevent event propagation</DIV></LI>
 * <LI>normalized : Boolean<DIV class="sub-desc">False to pass a browser event to the handler function instead of an Ext.EventObject</DIV></LI>
 * <LI>delay : Number<DIV class="sub-desc">The number of milliseconds to delay the invocation of the handler after te event fires.</DIV></LI>
 * <LI>single : Boolean<DIV class="sub-desc">True to add a handler to handle just the next firing of the event, and then remove itself.</DIV></LI>
 * <LI>buffer : Number<DIV class="sub-desc">Causes the handler to be scheduled to run in an {@link Ext.util.DelayedTask} delayed
 * by the specified number of milliseconds. If the event fires again within that time, the original
 * handler is <EM>not</EM> invoked, but the new handler is scheduled in its place.</DIV></LI>
 * <LI>target : Element<DIV class="sub-desc">Only call the handler if the event was fired on the target Element, <I>not</I> if the event was bubbled up from a child node.</DIV></LI>
 * </UL><BR/>
 * <P>See {@link Ext.Element#addListener} for examples of how to use these options.</P>
 */
Ext.EventManager.addListener = function (element,eventName,fn,scope,options){
};

/**
 * Removes an event handler from an element.  The shorthand version {@link #un} is equivalent.  Typically
 * you will use {@link Ext.Element#removeListener} directly on an Element in favor of calling this version.
 * @param {String/HTMLElement} el The id or html element from which to remove the listener.
 * @param {String} eventName The name of the event.
 * @param {Function} fn The handler function to remove. <B>This must be a reference to the function passed into the {@link #addListener} call.</B>
 * @param {Object} scope If a scope (<B><CODE>this</CODE></B> reference) was specified when the listener was added,
 * then this must refer to the same object.
 */
Ext.EventManager.removeListener = function (el,eventName,fn,scope){
};

/**
 * Removes all event handers from an element.  Typically you will use {@link Ext.Element#removeAllListeners}
 * directly on an Element in favor of calling this version.
 * @param {String/HTMLElement} el The id or html element from which to remove all event handlers.
 */
Ext.EventManager.removeAll = function (el){
};


Ext.EventManager.getListeners = function (el,eventName){
};


Ext.EventManager.purgeElement = function (el,recurse,eventName){
};


Ext.EventManager._unload = function (){
};

/**
 * Adds a listener to be notified when the document is ready (before onload and before images are loaded). Can be
 * accessed shorthanded as Ext.onReady().
 * @param {Function} fn The method the event invokes.
 * @param {Object} scope (optional) The scope (<CODE>this</CODE> reference) in which the handler function executes. Defaults to the browser window.
 * @param {boolean} options (optional) Options object as passed to {@link Ext.Element#addListener}. It is recommended that the options
 * <CODE>{single: true}</CODE> be used so that the handler is removed on first invocation.
 */
Ext.EventManager.onDocumentReady = function (fn,scope,options){
};


Ext.EventManager.on = function (element,eventName,fn,scope,options){
};


Ext.EventManager.un = function (el,eventName,fn,scope){
};

/**
 * @constructor
 */
Ext.EventManager.stoppedMouseDownEvent = function() {}; 
/**
 * @constructor
 */
Ext.EventManager.stoppedMouseDownEvent.listeners = function() {}; 

Ext.EventManager.stoppedMouseDownEvent.addListener = function (fn,scope,options){
};


Ext.EventManager.stoppedMouseDownEvent.createListener = function (fn,scope,o){
};


Ext.EventManager.stoppedMouseDownEvent.findListener = function (fn,scope){
};


Ext.EventManager.stoppedMouseDownEvent.isListening = function (fn,scope){
};


Ext.EventManager.stoppedMouseDownEvent.removeListener = function (fn,scope){
};


Ext.EventManager.stoppedMouseDownEvent.clearListeners = function (){
};


Ext.EventManager.stoppedMouseDownEvent.fire = function (){
};

/**
 * Adds a listener to be notified when the document is ready (before onload and before images are loaded). Shorthand of {@link Ext.EventManager#onDocumentReady}.
 * @param {Function} fn The method the event invokes.
 * @param {Object} scope (optional) The scope (<CODE>this</CODE> reference) in which the handler function executes. Defaults to the browser window.
 * @param {boolean} options (optional) Options object as passed to {@link Ext.Element#addListener}. It is recommended that the options
 * <CODE>{single: true}</CODE> be used so that the handler is removed on first invocation.
 * @member Ext
 * @method onReady
 */
Ext.onReady = function (fn,scope,options){
};


Ext.EventObjectImpl = function (e){
};

/**
 * @class Ext.EventObject
 * Just as {@link Ext.Element} wraps around a native DOM node, Ext.EventObject
 * wraps the browser's native event-object normalizing cross-browser differences,
 * such as which mouse button is clicked, keys pressed, mechanisms to stop
 * event-propagation along with a method to prevent default actions from taking place.
 * <P>For example:</P>
 * <PRE><CODE>
function handleClick(e, t){ // e is not a standard event object, it is a Ext.EventObject
    e.preventDefault();
    var target = e.getTarget(); // same as t (the target HTMLElement)
    ...
}
var myDiv = {@link Ext#get Ext.get}("myDiv");  // get reference to an {@link Ext.Element}
myDiv.on(         // 'on' is shorthand for addListener
    "click",      // perform an action on click of myDiv
    handleClick   // reference to the action handler
);
// other methods to do the same:
Ext.EventManager.on("myDiv", 'click', handleClick);
Ext.EventManager.addListener("myDiv", 'click', handleClick);
 </CODE></PRE>
 * @singleton
 * @constructor
 */
Ext.EventObject = function() {}; 
/** @private */
Ext.EventObject.setEvent = function (e){
};

/**
 * Stop the event (preventDefault and stopPropagation)
 */
Ext.EventObject.stopEvent = function (){
};

/**
 * Prevents the browsers default handling of the event.
 */
Ext.EventObject.preventDefault = function (){
};

/**
 * Cancels bubbling of the event.
 */
Ext.EventObject.stopPropagation = function (){
};

/**
 * Gets the character code for the event.
 * @return {Number}
 */
Ext.EventObject.getCharCode = function (){
};

/**
 * Returns a normalized keyCode for the event.
 * @return {Number} The key code
 */
Ext.EventObject.getKey = function (){
};


Ext.EventObject.normalizeKey = function (k){
};

/**
 * Gets the x coordinate of the event.
 * @return {Number}
 */
Ext.EventObject.getPageX = function (){
};

/**
 * Gets the y coordinate of the event.
 * @return {Number}
 */
Ext.EventObject.getPageY = function (){
};

/**
 * Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Array} The XY position of the element
 */
Ext.EventObject.getXY = function (){
};

/**
 * Gets the target for the event.
 * @param {String} selector (optional) A simple selector to filter the target or look for an ancestor of the target
 * @param {Number/Mixed} maxDepth (optional) The max depth to
                search as a number or element (defaults to 10 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLelement}
 */
Ext.EventObject.getTarget = function (selector,maxDepth,returnEl){
};

/**
 * Gets the related target.
 * @return {HTMLElement}
 */
Ext.EventObject.getRelatedTarget = function (){
};

/**
 * Normalizes mouse wheel delta across browsers
 * @return {Number} The delta
 */
Ext.EventObject.getWheelDelta = function (){
};

/**
 * Returns true if the target of this event is a child of el.  Unless the allowEl parameter is set, it will return false if if the target is el.
 * Example usage:<PRE><CODE>
        // Handle click on any child of an element
        Ext.getBody().on('click', function(e){
            if(e.within('some-el')){
                alert('Clicked on a child of some-el!');
            }
        });

        // Handle click directly on an element, ignoring clicks on child nodes
        Ext.getBody().on('click', function(e,t){
            if((t.id == 'some-el') &amp;&amp; !e.within(t, true)){
                alert('Clicked directly on some-el!');
            }
        });
        </CODE></PRE>
 * @param {Mixed} el The id, DOM element or Ext.Element to check
 * @param {Boolean} related (optional) true to test if the related target is within el instead of the target
 * @param {Boolean} allowEl {optional} true to also check if the passed element is the target or related target
 * @return {Boolean}
 */
Ext.EventObject.within = function (el,related,allowEl){
};

/**
 * @constructor
 */
Ext.Element = function() {}; 
/**
 * Retrieves Ext.Element objects.
 * <P><B>This method does not retrieve {@link Ext.Component Component}s.</B> This method
 * retrieves Ext.Element objects which encapsulate DOM elements. To retrieve a Component by
 * its ID, use {@link Ext.ComponentMgr#get}.</P>
 * <P>Uses simple caching to consistently return the same object. Automatically fixes if an
 * object was recreated with the same id via AJAX or DOM.</P>
 * Shorthand of {@link Ext.Element#get}
 * @param {Mixed} el The id of the node, a DOM Node or an existing Element.
 * @return {Element} The Element object (or null if no matching element was found)
 * @member Ext
 * @method get
 */
Ext.get = function (el){
};

/**
 * <P>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference to this element -
 * the dom node can be overwritten by other code. Shorthand of {@link Ext.Element#fly}</P>
 * <P>Use this to make one-time references to DOM elements which are not going to be accessed again either by
 * application code, or by Ext's classes. If accessing an element which will be processed regularly, then {@link Ext#get}
 * will be more appropriate to take advantage of the caching provided by the Ext.Element class.</P>
 * @param {String/HTMLElement} el The dom node or id
 * @param {String} named (optional) Allows for creation of named reusable flyweights to prevent conflicts
 * (e.g. internally Ext uses "_global")
 * @return {Element} The shared Element object (or null if no matching element was found)
 * @member Ext
 * @method fly
 */
Ext.fly = function (el,named){
};


Ext.enableFx = false;

/**
 * @class Ext.Fx
 * <P>A class to provide basic animation and visual effects support.  <B>Note:</B> This class is automatically applied
 * to the {@link Ext.Element} interface when included, so all effects calls should be performed via {@link Ext.Element}.
 * Conversely, since the effects are not actually defined in {@link Ext.Element}, Ext.Fx <B>must</B> be
 * {@link Ext#enableFx included} in order for the Element effects to work.</P><BR/>
 * 
 * <P><B><U>Method Chaining</U></B></P>
 * <P>It is important to note that although the Fx methods and many non-Fx Element methods support "method chaining" in that
 * they return the Element object itself as the method return value, it is not always possible to mix the two in a single
 * method chain.  The Fx methods use an internal effects queue so that each effect can be properly timed and sequenced.
 * Non-Fx methods, on the other hand, have no such internal queueing and will always execute immediately.  For this reason,
 * while it may be possible to mix certain Fx and non-Fx method calls in a single chain, it may not always provide the
 * expected results and should be done with care.  Also see <TT>{@link #callback}</TT>.</P><BR/>
 *
 * <P><B><U>Anchor Options for Motion Effects</U></B></P>
 * <P>Motion effects support 8-way anchoring, meaning that you can choose one of 8 different anchor points on the Element
 * that will serve as either the start or end point of the animation.  Following are all of the supported anchor positions:</P>
<PRE>Value  Description
-----  -----------------------------
tl     The top left corner
t      The center of the top edge
tr     The top right corner
l      The center of the left edge
r      The center of the right edge
bl     The bottom left corner
b      The center of the bottom edge
br     The bottom right corner
</PRE>
 * <B>Note</B>: some Fx methods accept specific custom config parameters.  The options shown in the Config Options
 * section below are common options that can be passed to any Fx method unless otherwise noted.
 * 
 * @cfg {Function} callback A function called when the effect is finished.  Note that effects are queued internally by the
 * Fx class, so a callback is not required to specify another effect -- effects can simply be chained together
 * and called in sequence (see note for <B><U>Method Chaining</U></B> above), for example:<PRE><CODE>
 * el.slideIn().highlight();
 * </CODE></PRE>
 * The callback is intended for any additional code that should run once a particular effect has completed. The Element
 * being operated upon is passed as the first parameter.
 * 
 * @cfg {Object} scope The scope (<CODE>this</CODE> reference) in which the <TT>{@link #callback}</TT> function is executed. Defaults to the browser window.
 * 
 * @cfg {String} easing A valid Ext.lib.Easing value for the effect:<DIV class="mdetail-params"><UL>
 * <LI><B><TT>backBoth</TT></B></LI>
 * <LI><B><TT>backIn</TT></B></LI>
 * <LI><B><TT>backOut</TT></B></LI>
 * <LI><B><TT>bounceBoth</TT></B></LI>
 * <LI><B><TT>bounceIn</TT></B></LI>
 * <LI><B><TT>bounceOut</TT></B></LI>
 * <LI><B><TT>easeBoth</TT></B></LI>
 * <LI><B><TT>easeBothStrong</TT></B></LI>
 * <LI><B><TT>easeIn</TT></B></LI>
 * <LI><B><TT>easeInStrong</TT></B></LI>
 * <LI><B><TT>easeNone</TT></B></LI>
 * <LI><B><TT>easeOut</TT></B></LI>
 * <LI><B><TT>easeOutStrong</TT></B></LI>
 * <LI><B><TT>elasticBoth</TT></B></LI>
 * <LI><B><TT>elasticIn</TT></B></LI>
 * <LI><B><TT>elasticOut</TT></B></LI>
 * </UL></DIV>
 *
 * @cfg {String} afterCls A css class to apply after the effect
 * @cfg {Number} duration The length of time (in seconds) that the effect should last
 * 
 * @cfg {Number} endOpacity Only applicable for {@link #fadeIn} or {@link #fadeOut}, a number between
 * <TT>0</TT> and <TT>1</TT> inclusive to configure the ending opacity value.
 *  
 * @cfg {Boolean} remove Whether the Element should be removed from the DOM and destroyed after the effect finishes
 * @cfg {Boolean} useDisplay Whether to use the <I>display</I> CSS property instead of <I>visibility</I> when hiding Elements (only applies to 
 * effects that end with the element being visually hidden, ignored otherwise)
 * @cfg {String/Object/Function} afterStyle A style specification string, e.g. <TT>"width:100px"</TT>, or an object
 * in the form <TT>{width:"100px"}</TT>, or a function which returns such a specification that will be applied to the
 * Element after the effect finishes.
 * @cfg {Boolean} block Whether the effect should block other effects from queueing while it runs
 * @cfg {Boolean} concurrent Whether to allow subsequently-queued effects to run at the same time as the current effect, or to ensure that they run in sequence
 * @cfg {Boolean} stopFx Whether preceding effects should be stopped and removed before running current effect (only applies to non blocking effects)
 * @constructor
 */
Ext.Fx = function() {}; 

Ext.Fx.switchStatements = function (key,fn,argHash){
};

/**
 * Slides the element into view.  An anchor point can be optionally passed to set the point of
 * origin for the slide effect.  This function automatically handles wrapping the element with
 * a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element in from the top
el.slideIn();

// custom: slide the element in from the right with a 2-second duration
el.slideIn('r', { duration: 2 });

// common config options shown with default values
el.slideIn('t', {
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.slideIn = function (anchor,o){
};

/**
 * Slides the element out of view.  An anchor point can be optionally passed to set the end point
 * for the slide effect.  When the effect is completed, the element will be hidden (visibility = 
 * 'hidden') but block elements will still take up space in the document.  The element must be removed
 * from the DOM using the 'remove' config option if desired.  This function automatically handles 
 * wrapping the element with a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element out to the top
el.slideOut();

// custom: slide the element out to the right with a 2-second duration
el.slideOut('r', { duration: 2 });

// common config options shown with default values
el.slideOut('t', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.slideOut = function (anchor,o){
};

/**
 * Fades the element out while slowly expanding it in all directions.  When the effect is completed, the 
 * element will be hidden (visibility = 'hidden') but block elements will still take up space in the document. 
 * The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.puff();

// common config options shown with default values
el.puff({
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.puff = function (o){
};

/**
 * Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).
 * When the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still 
 * take up space in the document. The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.switchOff();

// all config options shown with default values
el.switchOff({
    easing: 'easeIn',
    duration: .3,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.switchOff = function (o){
};

/**
 * Highlights the Element by setting a color (applies to the background-color by default, but can be
 * changed using the "attr" config option) and then fading back to the original color. If no original
 * color is available, you should provide the "endColor" config option which will be cleared after the animation.
 * Usage:
<PRE><CODE>
// default: highlight background to yellow
el.highlight();

// custom: highlight foreground text to blue for 2 seconds
el.highlight("0000ff", { attr: 'color', duration: 2 });

// common config options shown with default values
el.highlight("ffff9c", {
    attr: "background-color", //can be any valid CSS property (attribute) that supports a color value
    endColor: (current color) or "ffffff",
    easing: 'easeIn',
    duration: 1
});
</CODE></PRE>
 * @param {String} color (optional) The highlight color. Should be a 6 char hex color without the leading # (defaults to yellow: 'ffff9c')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.highlight = function (color,o){
};

/**
 * Shows a ripple of exploding, attenuating borders to draw attention to an Element.
 * Usage:
<PRE><CODE>
// default: a single light blue ripple
el.frame();

// custom: 3 red ripples lasting 3 seconds total
el.frame("ff0000", 3, { duration: 3 });

// common config options shown with default values
el.frame("C3DAF9", 1, {
    duration: 1 //duration of each individual ripple.
    // Note: Easing is not configurable and will be ignored if included
});
</CODE></PRE>
 * @param {String} color (optional) The color of the border.  Should be a 6 char hex color without the leading # (defaults to light blue: 'C3DAF9').
 * @param {Number} count (optional) The number of ripples to display (defaults to 1)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.frame = function (color,count,o){
};

/**
 * Creates a pause before any subsequent queued effects begin.  If there are
 * no effects queued after the pause it will have no effect.
 * Usage:
<PRE><CODE>
el.pause(1);
</CODE></PRE>
 * @param {Number} seconds The length of time to pause (in seconds)
 * @return {Ext.Element} The Element
 */
Ext.Fx.pause = function (seconds){
};

/**
 * Fade an element in (from transparent to opaque).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.
 * Usage:
<PRE><CODE>
// default: fade in from opacity 0 to 100%
el.fadeIn();

// custom: fade in from opacity 0 to 75% over 2 seconds
el.fadeIn({ endOpacity: .75, duration: 2});

// common config options shown with default values
el.fadeIn({
    endOpacity: 1, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.fadeIn = function (o){
};

/**
 * Fade an element out (from opaque to transparent).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.  Note that IE may require
 * <TT>{@link #useDisplay}:true</TT> in order to redisplay correctly.
 * Usage:
<PRE><CODE>
// default: fade out from the element's current opacity to 0
el.fadeOut();

// custom: fade out from the element's current opacity to 25% over 2 seconds
el.fadeOut({ endOpacity: .25, duration: 2});

// common config options shown with default values
el.fadeOut({
    endOpacity: 0, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.fadeOut = function (o){
};

/**
 * Animates the transition of an element's dimensions from a starting height/width
 * to an ending height/width.  This method is a convenience implementation of {@link shift}.
 * Usage:
<PRE><CODE>
// change height and width to 100x100 pixels
el.scale(100, 100);

// common config options shown with default values.  The height and width will default to
// the element's existing values if passed as null.
el.scale(
    [element's width],
    [element's height], {
        easing: 'easeOut',
        duration: .35
    }
);
</CODE></PRE>
 * @param {Number} width  The new width (pass undefined to keep the original width)
 * @param {Number} height  The new height (pass undefined to keep the original height)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.scale = function (w,h,o){
};

/**
 * Animates the transition of any combination of an element's dimensions, xy position and/or opacity.
 * Any of these properties not specified in the config object will not be changed.  This effect 
 * requires that at least one new dimension, position or opacity setting must be passed in on
 * the config object in order for the function to have any effect.
 * Usage:
<PRE><CODE>
// slide the element horizontally to x position 200 while changing the height and opacity
el.shift({ x: 200, height: 50, opacity: .8 });

// common config options shown with default values.
el.shift({
    width: [element's width],
    height: [element's height],
    x: [element's x position],
    y: [element's y position],
    opacity: [element's opacity],
    easing: 'easeOut',
    duration: .35
});
</CODE></PRE>
 * @param {Object} options  Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.shift = function (o){
};

/**
 * Slides the element while fading it out of view.  An anchor point can be optionally passed to set the 
 * ending point of the effect.
 * Usage:
 *<PRE><CODE>
// default: slide the element downward while fading out
el.ghost();

// custom: slide the element out to the right with a 2-second duration
el.ghost('r', { duration: 2 });

// common config options shown with default values
el.ghost('b', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to bottom: 'b')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Fx.ghost = function (anchor,o){
};

/**
 * Ensures that all effects queued after syncFx is called on the element are
 * run concurrently.  This is the opposite of {@link #sequenceFx}.
 * @return {Ext.Element} The Element
 */
Ext.Fx.syncFx = function (){
};

/**
 * Ensures that all effects queued after sequenceFx is called on the element are
 * run in sequence.  This is the opposite of {@link #syncFx}.
 * @return {Ext.Element} The Element
 */
Ext.Fx.sequenceFx = function (){
};

/* @private */
Ext.Fx.nextFx = function (){
};

/**
 * Returns true if the element has any effects actively running or queued, else returns false.
 * @return {Boolean} True if element has active effects, else false
 */
Ext.Fx.hasActiveFx = function (){
};

/**
 * Stops any running effects and clears the element's internal effects queue if it contains
 * any additional effects that haven't started yet.
 * @return {Ext.Element} The Element
 */
Ext.Fx.stopFx = function (finish){
};

/* @private */
Ext.Fx.beforeFx = function (o){
};

/**
 * Returns true if the element is currently blocking so that no other effect can be queued
 * until this effect is finished, else returns false if blocking is not set.  This is commonly
 * used to ensure that an effect initiated by a user action runs to completion prior to the
 * same effect being restarted (e.g., firing only one effect even if the user clicks several times).
 * @return {Boolean} True if blocking, else false
 */
Ext.Fx.hasFxBlock = function (){
};

/* @private */
Ext.Fx.queueFx = function (o,fn){
};

/* @private */
Ext.Fx.fxWrap = function (pos,o,vis){
};

/* @private */
Ext.Fx.fxUnwrap = function (wrap,pos,o){
};

/* @private */
Ext.Fx.getFxRestore = function (){
};

/* @private */
Ext.Fx.afterFx = function (o){
};

/* @private */
Ext.Fx.fxanim = function (args,opt,animType,defaultDur,defaultEase,cb){
};


Ext.Fx.resize = function (w,h,o){
};

/**
 * @class Ext.CompositeElementLite
 * <P>This class encapsulates a <I>collection</I> of DOM elements, providing methods to filter
 * members, or to perform collective actions upon the whole set.</P>
 * <P>Although they are not listed, this class supports all of the methods of {@link Ext.Element} and
 * {@link Ext.Fx}. The methods from these classes will be performed on all the elements in this collection.</P>
 * Example:<PRE><CODE>
var els = Ext.select("#some-el div.some-class");
// or select directly from an existing element
var el = Ext.get('some-el');
el.select('div.some-class');

els.setWidth(100); // all elements become 100 width
els.hide(true); // all elements fade out and hide
// or
els.setWidth(100).hide(true);
</CODE>
 * @constructor
 */
Ext.CompositeElementLite = function() {}; 

Ext.select = function (selector,root){
};

/**
 * @class Ext.Ajax
 * @extends Ext.data.Connection
 * <P>The global Ajax request class that provides a simple way to make Ajax requests
 * with maximum flexibility.</P>
 * <P>Since Ext.Ajax is a singleton, you can set common properties/events for it once
 * and override them at the request function level only if necessary.</P>
 * <P>Common <B>Properties</B> you may want to set are:</P><DIV class="mdetail-params"><UL>
 * <LI><B><TT>{@link #method}</TT></B><P class="sub-desc"/></LI>
 * <LI><B><TT>{@link #extraParams}</TT></B><P class="sub-desc"/></LI>
 * <LI><B><TT>{@link #url}</TT></B><P class="sub-desc"/></LI>
 * </UL></DIV>
 * <PRE><CODE>
// Default headers to pass in every request
Ext.Ajax.defaultHeaders = {
    'Powered-By': 'Ext'
};
 * </CODE></PRE>
 * 
 * <P>Common <B>Events</B> you may want to set are:</P><DIV class="mdetail-params"><UL>
 * <LI><B><TT>{@link Ext.data.Connection#beforerequest beforerequest}</TT></B><P class="sub-desc"/></LI>
 * <LI><B><TT>{@link Ext.data.Connection#requestcomplete requestcomplete}</TT></B><P class="sub-desc"/></LI>
 * <LI><B><TT>{@link Ext.data.Connection#requestexception requestexception}</TT></B><P class="sub-desc"/></LI>
 * </UL></DIV>
 * <PRE><CODE>
// Example: show a spinner during all Ajax requests
Ext.Ajax.on('beforerequest', this.showSpinner, this);
Ext.Ajax.on('requestcomplete', this.hideSpinner, this);
Ext.Ajax.on('requestexception', this.hideSpinner, this);
 * </CODE></PRE>
 * 
 * <P>An example request:</P>
 * <PRE><CODE>
// Basic request
Ext.Ajax.{@link Ext.data.Connection#request request}({
   url: 'foo.php',
   success: someFn,
   failure: otherFn,
   headers: {
       'my-header': 'foo'
   },
   params: { foo: 'bar' }
});

// Simple ajax form submission
Ext.Ajax.{@link Ext.data.Connection#request request}({
    form: 'some-form',
    params: 'foo=bar'
});
 * </CODE></PRE>
 * 
 * @singleton
 * @constructor
 */
Ext.Ajax = function() {}; 

Ext.Ajax.autoAbort = false;

/**
 * Serialize the passed form into a url encoded string
 * @param {String/HTMLElement} form
 * @return {String}
 */
Ext.Ajax.serializeForm = function (form){
};

/**
 * @constructor
 */
Ext.Ajax.events = function() {}; 

Ext.Ajax.events.requestexception = false;


Ext.Ajax.events.requestcomplete = false;


Ext.Ajax.events.beforerequest = false;


Ext.Ajax.constructor = function (config){
};


Ext.Ajax.supr = function (){
};


Ext.Ajax.superclass = function (){
};

/**
 * Adds a list of functions to the prototype of an existing class, overwriting any existing methods with the same name.
 * Usage:<PRE><CODE>
Ext.override(MyClass, {
    newMethod1: function(){
        // etc.
    },
    newMethod2: function(foo){
        // etc.
    }
});
</CODE></PRE>
 * @param {Object} origclass The class to override
 * @param {Object} overrides The list of functions to add to origClass.  This should be specified as an object literal
 * containing one or more methods.
 * @method override
 */
Ext.Ajax.override = function (o){
};

/**
 * @cfg {Number} timeout (Optional) The timeout in milliseconds to be used for requests. (defaults to 30000)
 */
Ext.Ajax.timeout = 0;

/**
 * @cfg {Boolean} disableCaching (Optional) True to add a unique cache-buster param to GET requests. (defaults to true)
 * @type Boolean
 */
Ext.Ajax.disableCaching = false;

/**
 * @cfg {String} disableCachingParam (Optional) Change the parameter which is sent went disabling caching
 * through a cache buster. Defaults to '_dc'
 * @type String
 */
Ext.Ajax.disableCachingParam = "";

/**
 * <P>Sends an HTTP request to a remote server.</P>
 * <P><B>Important:</B> Ajax server requests are asynchronous, and this call will
 * return before the response has been received. Process any returned data
 * in a callback function.</P>
 * <PRE><CODE>
Ext.Ajax.request({
   url: 'ajax_demo/sample.json',
   success: function(response, opts) {
      var obj = Ext.decode(response.responseText);
      console.dir(obj);
   },
   failure: function(response, opts) {
      console.log('server-side failure with status code ' + response.status);
   }
});
 * </CODE></PRE>
 * <P>To execute a callback function in the correct scope, use the <TT>scope</TT> option.</P>
 * @param {Object} options An object which may contain the following properties:<UL>
 * <LI><B>url</B> : String/Function (Optional)<DIV class="sub-desc">The URL to
 * which to send the request, or a function to call which returns a URL string. The scope of the
 * function is specified by the <TT>scope</TT> option. Defaults to the configured
 * <TT>{@link #url}</TT>.</DIV></LI>
 * <LI><B>params</B> : Object/String/Function (Optional)<DIV class="sub-desc">
 * An object containing properties which are used as parameters to the
 * request, a url encoded string or a function to call to get either. The scope of the function
 * is specified by the <TT>scope</TT> option.</DIV></LI>
 * <LI><B>method</B> : String (Optional)<DIV class="sub-desc">The HTTP method to use
 * for the request. Defaults to the configured method, or if no method was configured,
 * "GET" if no parameters are being sent, and "POST" if parameters are being sent.  Note that
 * the method name is case-sensitive and should be all caps.</DIV></LI>
 * <LI><B>callback</B> : Function (Optional)<DIV class="sub-desc">The
 * function to be called upon receipt of the HTTP response. The callback is
 * called regardless of success or failure and is passed the following
 * parameters:<UL>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * <LI><B>success</B> : Boolean<DIV class="sub-desc">True if the request succeeded.</DIV></LI>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.
 * See <A href="http://www.w3.org/TR/XMLHttpRequest/">http://www.w3.org/TR/XMLHttpRequest/</A> for details about
 * accessing elements of the response.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><A id="request-option-success"/><B>success</B> : Function (Optional)<DIV class="sub-desc">The function
 * to be called upon success of the request. The callback is passed the following
 * parameters:<UL>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.</DIV></LI>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><B>failure</B> : Function (Optional)<DIV class="sub-desc">The function
 * to be called upon failure of the request. The callback is passed the
 * following parameters:<UL>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.</DIV></LI>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><B>scope</B> : Object (Optional)<DIV class="sub-desc">The scope in
 * which to execute the callbacks: The "this" object for the callback function. If the <TT>url</TT>, or <TT>params</TT> options were
 * specified as functions from which to draw values, then this also serves as the scope for those function calls.
 * Defaults to the browser window.</DIV></LI>
 * <LI><B>timeout</B> : Number (Optional)<DIV class="sub-desc">The timeout in milliseconds to be used for this request. Defaults to 30 seconds.</DIV></LI>
 * <LI><B>form</B> : Element/HTMLElement/String (Optional)<DIV class="sub-desc">The <TT>&lt;form&gt;</TT>
 * Element or the id of the <TT>&lt;form&gt;</TT> to pull parameters from.</DIV></LI>
 * <LI><A id="request-option-isUpload"/><B>isUpload</B> : Boolean (Optional)<DIV class="sub-desc"><B>Only meaningful when used
 * with the <TT>form</TT> option</B>.
 * <P>True if the form object is a file upload (will be set automatically if the form was
 * configured with <B><TT>enctype</TT></B> "multipart/form-data").</P>
 * <P>File uploads are not performed using normal "Ajax" techniques, that is they are <B>not</B>
 * performed using XMLHttpRequests. Instead the form is submitted in the standard manner with the
 * DOM <TT>&lt;form&gt;</TT> element temporarily modified to have its
 * <A href="http://www.w3.org/TR/REC-html40/present/frames.html#adef-target">target</A> set to refer
 * to a dynamically generated, hidden <TT>&lt;iframe&gt;</TT> which is inserted into the document
 * but removed after the return data has been gathered.</P>
 * <P>The server response is parsed by the browser to create the document for the IFRAME. If the
 * server is using JSON to send the return object, then the
 * <A href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</A> header
 * must be set to "text/html" in order to tell the browser to insert the text unchanged into the document body.</P>
 * <P>The response text is retrieved from the document, and a fake XMLHttpRequest object
 * is created containing a <TT>responseText</TT> property in order to conform to the
 * requirements of event handlers and callbacks.</P>
 * <P>Be aware that file upload packets are sent with the content type <A href="http://www.faqs.org/rfcs/rfc2388.html">multipart/form</A>
 * and some server technologies (notably JEE) may require some custom processing in order to
 * retrieve parameter names and parameter values from the packet content.</P>
 * </DIV></LI>
 * <LI><B>headers</B> : Object (Optional)<DIV class="sub-desc">Request
 * headers to set for the request.</DIV></LI>
 * <LI><B>xmlData</B> : Object (Optional)<DIV class="sub-desc">XML document
 * to use for the post. Note: This will be used instead of params for the post
 * data. Any params will be appended to the URL.</DIV></LI>
 * <LI><B>jsonData</B> : Object/String (Optional)<DIV class="sub-desc">JSON
 * data to use as the post. Note: This will be used instead of params for the post
 * data. Any params will be appended to the URL.</DIV></LI>
 * <LI><B>disableCaching</B> : Boolean (Optional)<DIV class="sub-desc">True
 * to add a unique cache-buster param to GET requests.</DIV></LI>
 * </UL>
 * <P>The options object may also contain any other property which might be needed to perform
 * postprocessing in a callback because it is passed to callback functions.</P>
 * @return {Number} transactionId The id of the server transaction. This may be used
 * to cancel the request.
 */
Ext.Ajax.request = function (o){
};

/**
 * Determine whether this object has a request outstanding.
 * @param {Number} transactionId (Optional) defaults to the last transaction
 * @return {Boolean} True if there is an outstanding request.
 */
Ext.Ajax.isLoading = function (transId){
};

/**
 * Aborts any outstanding request.
 * @param {Number} transactionId (Optional) defaults to the last transaction
 */
Ext.Ajax.abort = function (transId){
};


Ext.Ajax.handleResponse = function (response){
};


Ext.Ajax.handleFailure = function (response,e){
};


Ext.Ajax.doFormUpload = function (o,ps,url){
};

/**
 * @constructor
 */
Ext.Ajax.filterOptRe = function() {}; 
/**
 * <P>Fires the specified event with the passed parameters (minus the event name).</P>
 * <P>An event may be set to bubble up an Observable parent hierarchy (See {@link Ext.Component#getBubbleTarget})
 * by calling {@link #enableBubble}.</P>
 * @param {String} eventName The name of the event to fire.
 * @param {Object...} args Variable number of parameters are passed to handlers.
 * @return {Boolean} returns false if any of the handlers return false otherwise it returns true.
 */
Ext.Ajax.fireEvent = function (){
};

/**
 * Appends an event handler to this object.
 * @param {String}   eventName The name of the event to listen for.
 * @param {Function} handler The method the event invokes.
 * @param {Object}   scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to the object which fired the event.</B>
 * @param {Object}   options (optional) An object containing handler configuration.
 * properties. This may contain any of the following properties:<UL>
 * <LI><B>scope</B> : Object<DIV class="sub-desc">The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to the object which fired the event.</B></DIV></LI>
 * <LI><B>delay</B> : Number<DIV class="sub-desc">The number of milliseconds to delay the invocation of the handler after the event fires.</DIV></LI>
 * <LI><B>single</B> : Boolean<DIV class="sub-desc">True to add a handler to handle just the next firing of the event, and then remove itself.</DIV></LI>
 * <LI><B>buffer</B> : Number<DIV class="sub-desc">Causes the handler to be scheduled to run in an {@link Ext.util.DelayedTask} delayed
 * by the specified number of milliseconds. If the event fires again within that time, the original
 * handler is <EM>not</EM> invoked, but the new handler is scheduled in its place.</DIV></LI>
 * <LI><B>target</B> : Observable<DIV class="sub-desc">Only call the handler if the event was fired on the target Observable, <I>not</I>
 * if the event was bubbled up from a child Observable.</DIV></LI>
 * </UL><BR/>
 * <P>
 * <B>Combining Options</B><BR/>
 * Using the options argument, it is possible to combine different types of listeners:<BR/>
 * <BR/>
 * A delayed, one-time listener.
 * </P><PRE><CODE>
myDataView.on('click', this.onClick, this, {
single: true,
delay: 100
});</CODE></PRE>
 * <P>
 * <B>Attaching multiple handlers in 1 call</B><BR/>
 * The method also allows for a single argument to be passed which is a config object containing properties
 * which specify multiple handlers.
 * </P><P>
 * </P><PRE><CODE>
myGridPanel.on({
'click' : {
    fn: this.onClick,
    scope: this,
    delay: 100
},
'mouseover' : {
    fn: this.onMouseOver,
    scope: this
},
'mouseout' : {
    fn: this.onMouseOut,
    scope: this
}
});</CODE></PRE>
 * <P>
 * Or a shorthand syntax:<BR/>
 * </P><PRE><CODE>
myGridPanel.on({
'click' : this.onClick,
'mouseover' : this.onMouseOver,
'mouseout' : this.onMouseOut,
 scope: this
});</CODE></PRE>
 */
Ext.Ajax.addListener = function (eventName,fn,scope,o){
};

/**
 * Removes an event handler from this element.  The shorthand version {@link #un} is equivalent.
 * <B>Note</B>: if a <I>scope</I> was explicitly specified when {@link #addListener adding} the
 * listener, the same scope must be specified here.
 * Example:
 * <PRE><CODE>
el.removeListener('click', this.handlerFn);
// or
el.un('click', this.handlerFn);
</CODE></PRE>
 * @param {String} eventName The name of the event from which to remove the handler.
 * @param {Function} fn The handler function to remove. <B>This must be a reference to the function passed into the {@link #addListener} call.</B>
 * @param {Object} scope If a scope (<B><CODE>this</CODE></B> reference) was specified when the listener was added,
 * then this must refer to the same object.
 * @return {Ext.Element} this
 */
Ext.Ajax.removeListener = function (eventName,fn,scope){
};

/**
 * Removes all listeners for this object
 */
Ext.Ajax.purgeListeners = function (){
};

/**
 * Adds the specified events to the list of events which this Observable may fire.
 * @param {Object|String} o Either an object with event names as properties with a value of <CODE>true</CODE>
 * or the first event name string if multiple event names are being passed as separate parameters.
 * @param {string} Optional. Event name if multiple event names are being passed as separate parameters.
 * Usage:<PRE><CODE>
this.addEvents('storeloaded', 'storecleared');
</CODE></PRE>
 */
Ext.Ajax.addEvents = function (o){
};

/**
 * Checks to see if this object has any listeners for a specified event
 * @param {String} eventName The name of the event to check for
 * @return {Boolean} True if the event is being listened for, else false
 */
Ext.Ajax.hasListener = function (eventName){
};

/**
 * Suspend the firing of all events. (see {@link #resumeEvents})
 * @param {Boolean} queueSuspended Pass as true to queue up suspended events to be fired
 * after the {@link #resumeEvents} call instead of discarding all suspended events;
 */
Ext.Ajax.suspendEvents = function (queueSuspended){
};

/**
 * Resume firing events. (see {@link #suspendEvents})
 * If events were suspended using the <TT><B>queueSuspended</B></TT> parameter, then all
 * events fired during event suspension will be sent to any listeners now.
 */
Ext.Ajax.resumeEvents = function (){
};


Ext.Ajax.on = function (eventName,fn,scope,o){
};


Ext.Ajax.un = function (eventName,fn,scope){
};

/**
 * Shorthand for {@link Ext.util.JSON#encode}
 * @param {Mixed} o The variable to encode
 * @return {String} The JSON string
 * @member Ext
 * @method encode
 */
Ext.encode = function (o){
};

/**
 * Shorthand for {@link Ext.util.JSON#decode}
 * @param {String} json The JSON string
 * @param {Boolean} safe (optional) Whether to return null or throw an exception if the JSON is invalid.
 * @return {Object} The resulting object
 * @member Ext
 * @method decode
 */
Ext.decode = function (json){
};


a = "";

/**
 * Removes the specified object from the array.  If the object is not found nothing happens.
 * @param {Object} o The object to remove
 * @return {Array} this array
 */
Array.prototype.remove = function (o){
};

/**
 * Creates an interceptor function. The passed function is called before the original one. If it returns false,
 * the original one is not called. The resulting function returns the results of the original function.
 * The passed function is called with the parameters of the original function. Example usage:
 * <PRE><CODE>
var sayHi = function(name){
    alert('Hi, ' + name);
}

sayHi('Fred'); // alerts "Hi, Fred"

// create a new function that validates input without
// directly modifying the original function:
var sayHiToFriend = sayHi.createInterceptor(function(name){
    return name == 'Brian';
});

sayHiToFriend('Fred');  // no alert
sayHiToFriend('Brian'); // alerts "Hi, Brian"
</CODE></PRE>
 * @param {Function} fcn The function to call before the original
 * @param {Object} scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the passed function is executed.
 * <B>If omitted, defaults to the scope in which the original function is called or the browser window.</B>
 * @return {Function} The new function
 */
Function.prototype.createInterceptor = function (fcn,scope){
};

/**
 * Creates a callback that passes arguments[0], arguments[1], arguments[2], ...
 * Call directly on any function. Example: <CODE>myFunction.createCallback(arg1, arg2)</CODE>
 * Will create a function that is bound to those 2 args. <B>If a specific scope is required in the
 * callback, use {@link #createDelegate} instead.</B> The function returned by createCallback always
 * executes in the window scope.
 * <P>This method is required when you want to pass arguments to a callback function.  If no arguments
 * are needed, you can simply pass a reference to the function as a callback (e.g., callback: myFn).
 * However, if you tried to pass a function with arguments (e.g., callback: myFn(arg1, arg2)) the function
 * would simply execute immediately when the code is parsed. Example usage:
 * </P><PRE><CODE>
var sayHi = function(name){
    alert('Hi, ' + name);
}

// clicking the button alerts "Hi, Fred"
new Ext.Button({
    text: 'Say Hi',
    renderTo: Ext.getBody(),
    handler: sayHi.createCallback('Fred')
});
</CODE></PRE>
 * @return {Function} The new function
 */
Function.prototype.createCallback = function (){
};

/**
 * Creates a delegate (callback) that sets the scope to obj.
 * Call directly on any function. Example: <CODE>this.myFunction.createDelegate(this, [arg1, arg2])</CODE>
 * Will create a function that is automatically scoped to obj so that the <TT>this</TT> variable inside the
 * callback points to obj. Example usage:
 * <PRE><CODE>
var sayHi = function(name){
    // Note this use of "this.text" here.  This function expects to
    // execute within a scope that contains a text property.  In this
    // example, the "this" variable is pointing to the btn object that
    // was passed in createDelegate below.
    alert('Hi, ' + name + '. You clicked the "' + this.text + '" button.');
}

var btn = new Ext.Button({
    text: 'Say Hi',
    renderTo: Ext.getBody()
});

// This callback will execute in the scope of the
// button instance. Clicking the button alerts
// "Hi, Fred. You clicked the "Say Hi" button."
btn.on('click', sayHi.createDelegate(btn, ['Fred']));
</CODE></PRE>
 * @param {Object} scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the function is executed.
 * <B>If omitted, defaults to the browser window.</B>
 * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
 * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
 * if a number the args are inserted at the specified position
 * @return {Function} The new function
 */
Function.prototype.createDelegate = function (obj,args,appendArgs){
};

/**
 * Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:
 * <PRE><CODE>
var sayHi = function(name){
    alert('Hi, ' + name);
}

// executes immediately:
sayHi('Fred');

// executes after 2 seconds:
sayHi.defer(2000, this, ['Fred']);

// this syntax is sometimes useful for deferring
// execution of an anonymous function:
(function(){
    alert('Anonymous');
}).defer(100);
</CODE></PRE>
 * @param {Number} millis The number of milliseconds for the setTimeout call (if less than or equal to 0 the function is executed immediately)
 * @param {Object} scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the function is executed.
 * <B>If omitted, defaults to the browser window.</B>
 * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
 * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
 * if a number the args are inserted at the specified position
 * @return {Number} The timeout id that can be used with clearTimeout
 */
Function.prototype.defer = function (millis,obj,args,appendArgs){
};

/**
 * @constructor
 */
Ext.data.Connection.events = function() {}; 

Ext.data.Connection.events.requestexception = false;


Ext.data.Connection.events.requestcomplete = false;


Ext.data.Connection.events.beforerequest = false;


Ext.data.Connection.constructor = function (config){
};


Ext.data.Connection.supr = function (){
};


Ext.data.Connection.superclass = function (){
};

/**
 * Adds a list of functions to the prototype of an existing class, overwriting any existing methods with the same name.
 * Usage:<PRE><CODE>
Ext.override(MyClass, {
    newMethod1: function(){
        // etc.
    },
    newMethod2: function(foo){
        // etc.
    }
});
</CODE></PRE>
 * @param {Object} origclass The class to override
 * @param {Object} overrides The list of functions to add to origClass.  This should be specified as an object literal
 * containing one or more methods.
 * @method override
 */
Ext.data.Connection.override = function (o){
};

/**
 * @cfg {Number} timeout (Optional) The timeout in milliseconds to be used for requests. (defaults to 30000)
 */
Ext.data.Connection.timeout = 0;


Ext.data.Connection.autoAbort = false;

/**
 * @cfg {Boolean} disableCaching (Optional) True to add a unique cache-buster param to GET requests. (defaults to true)
 * @type Boolean
 */
Ext.data.Connection.disableCaching = false;

/**
 * @cfg {String} disableCachingParam (Optional) Change the parameter which is sent went disabling caching
 * through a cache buster. Defaults to '_dc'
 * @type String
 */
Ext.data.Connection.disableCachingParam = "";

/**
 * <P>Sends an HTTP request to a remote server.</P>
 * <P><B>Important:</B> Ajax server requests are asynchronous, and this call will
 * return before the response has been received. Process any returned data
 * in a callback function.</P>
 * <PRE><CODE>
Ext.Ajax.request({
   url: 'ajax_demo/sample.json',
   success: function(response, opts) {
      var obj = Ext.decode(response.responseText);
      console.dir(obj);
   },
   failure: function(response, opts) {
      console.log('server-side failure with status code ' + response.status);
   }
});
 * </CODE></PRE>
 * <P>To execute a callback function in the correct scope, use the <TT>scope</TT> option.</P>
 * @param {Object} options An object which may contain the following properties:<UL>
 * <LI><B>url</B> : String/Function (Optional)<DIV class="sub-desc">The URL to
 * which to send the request, or a function to call which returns a URL string. The scope of the
 * function is specified by the <TT>scope</TT> option. Defaults to the configured
 * <TT>{@link #url}</TT>.</DIV></LI>
 * <LI><B>params</B> : Object/String/Function (Optional)<DIV class="sub-desc">
 * An object containing properties which are used as parameters to the
 * request, a url encoded string or a function to call to get either. The scope of the function
 * is specified by the <TT>scope</TT> option.</DIV></LI>
 * <LI><B>method</B> : String (Optional)<DIV class="sub-desc">The HTTP method to use
 * for the request. Defaults to the configured method, or if no method was configured,
 * "GET" if no parameters are being sent, and "POST" if parameters are being sent.  Note that
 * the method name is case-sensitive and should be all caps.</DIV></LI>
 * <LI><B>callback</B> : Function (Optional)<DIV class="sub-desc">The
 * function to be called upon receipt of the HTTP response. The callback is
 * called regardless of success or failure and is passed the following
 * parameters:<UL>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * <LI><B>success</B> : Boolean<DIV class="sub-desc">True if the request succeeded.</DIV></LI>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.
 * See <A href="http://www.w3.org/TR/XMLHttpRequest/">http://www.w3.org/TR/XMLHttpRequest/</A> for details about
 * accessing elements of the response.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><A id="request-option-success"/><B>success</B> : Function (Optional)<DIV class="sub-desc">The function
 * to be called upon success of the request. The callback is passed the following
 * parameters:<UL>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.</DIV></LI>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><B>failure</B> : Function (Optional)<DIV class="sub-desc">The function
 * to be called upon failure of the request. The callback is passed the
 * following parameters:<UL>
 * <LI><B>response</B> : Object<DIV class="sub-desc">The XMLHttpRequest object containing the response data.</DIV></LI>
 * <LI><B>options</B> : Object<DIV class="sub-desc">The parameter to the request call.</DIV></LI>
 * </UL></DIV></LI>
 * <LI><B>scope</B> : Object (Optional)<DIV class="sub-desc">The scope in
 * which to execute the callbacks: The "this" object for the callback function. If the <TT>url</TT>, or <TT>params</TT> options were
 * specified as functions from which to draw values, then this also serves as the scope for those function calls.
 * Defaults to the browser window.</DIV></LI>
 * <LI><B>timeout</B> : Number (Optional)<DIV class="sub-desc">The timeout in milliseconds to be used for this request. Defaults to 30 seconds.</DIV></LI>
 * <LI><B>form</B> : Element/HTMLElement/String (Optional)<DIV class="sub-desc">The <TT>&lt;form&gt;</TT>
 * Element or the id of the <TT>&lt;form&gt;</TT> to pull parameters from.</DIV></LI>
 * <LI><A id="request-option-isUpload"/><B>isUpload</B> : Boolean (Optional)<DIV class="sub-desc"><B>Only meaningful when used
 * with the <TT>form</TT> option</B>.
 * <P>True if the form object is a file upload (will be set automatically if the form was
 * configured with <B><TT>enctype</TT></B> "multipart/form-data").</P>
 * <P>File uploads are not performed using normal "Ajax" techniques, that is they are <B>not</B>
 * performed using XMLHttpRequests. Instead the form is submitted in the standard manner with the
 * DOM <TT>&lt;form&gt;</TT> element temporarily modified to have its
 * <A href="http://www.w3.org/TR/REC-html40/present/frames.html#adef-target">target</A> set to refer
 * to a dynamically generated, hidden <TT>&lt;iframe&gt;</TT> which is inserted into the document
 * but removed after the return data has been gathered.</P>
 * <P>The server response is parsed by the browser to create the document for the IFRAME. If the
 * server is using JSON to send the return object, then the
 * <A href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</A> header
 * must be set to "text/html" in order to tell the browser to insert the text unchanged into the document body.</P>
 * <P>The response text is retrieved from the document, and a fake XMLHttpRequest object
 * is created containing a <TT>responseText</TT> property in order to conform to the
 * requirements of event handlers and callbacks.</P>
 * <P>Be aware that file upload packets are sent with the content type <A href="http://www.faqs.org/rfcs/rfc2388.html">multipart/form</A>
 * and some server technologies (notably JEE) may require some custom processing in order to
 * retrieve parameter names and parameter values from the packet content.</P>
 * </DIV></LI>
 * <LI><B>headers</B> : Object (Optional)<DIV class="sub-desc">Request
 * headers to set for the request.</DIV></LI>
 * <LI><B>xmlData</B> : Object (Optional)<DIV class="sub-desc">XML document
 * to use for the post. Note: This will be used instead of params for the post
 * data. Any params will be appended to the URL.</DIV></LI>
 * <LI><B>jsonData</B> : Object/String (Optional)<DIV class="sub-desc">JSON
 * data to use as the post. Note: This will be used instead of params for the post
 * data. Any params will be appended to the URL.</DIV></LI>
 * <LI><B>disableCaching</B> : Boolean (Optional)<DIV class="sub-desc">True
 * to add a unique cache-buster param to GET requests.</DIV></LI>
 * </UL>
 * <P>The options object may also contain any other property which might be needed to perform
 * postprocessing in a callback because it is passed to callback functions.</P>
 * @return {Number} transactionId The id of the server transaction. This may be used
 * to cancel the request.
 */
Ext.data.Connection.request = function (o){
};

/**
 * Determine whether this object has a request outstanding.
 * @param {Number} transactionId (Optional) defaults to the last transaction
 * @return {Boolean} True if there is an outstanding request.
 */
Ext.data.Connection.isLoading = function (transId){
};

/**
 * Aborts any outstanding request.
 * @param {Number} transactionId (Optional) defaults to the last transaction
 */
Ext.data.Connection.abort = function (transId){
};


Ext.data.Connection.handleResponse = function (response){
};


Ext.data.Connection.handleFailure = function (response,e){
};


Ext.data.Connection.doFormUpload = function (o,ps,url){
};

/**
 * @constructor
 */
Ext.data.Connection.filterOptRe = function() {}; 
/**
 * <P>Fires the specified event with the passed parameters (minus the event name).</P>
 * <P>An event may be set to bubble up an Observable parent hierarchy (See {@link Ext.Component#getBubbleTarget})
 * by calling {@link #enableBubble}.</P>
 * @param {String} eventName The name of the event to fire.
 * @param {Object...} args Variable number of parameters are passed to handlers.
 * @return {Boolean} returns false if any of the handlers return false otherwise it returns true.
 */
Ext.data.Connection.fireEvent = function (){
};

/**
 * Appends an event handler to this object.
 * @param {String}   eventName The name of the event to listen for.
 * @param {Function} handler The method the event invokes.
 * @param {Object}   scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to the object which fired the event.</B>
 * @param {Object}   options (optional) An object containing handler configuration.
 * properties. This may contain any of the following properties:<UL>
 * <LI><B>scope</B> : Object<DIV class="sub-desc">The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to the object which fired the event.</B></DIV></LI>
 * <LI><B>delay</B> : Number<DIV class="sub-desc">The number of milliseconds to delay the invocation of the handler after the event fires.</DIV></LI>
 * <LI><B>single</B> : Boolean<DIV class="sub-desc">True to add a handler to handle just the next firing of the event, and then remove itself.</DIV></LI>
 * <LI><B>buffer</B> : Number<DIV class="sub-desc">Causes the handler to be scheduled to run in an {@link Ext.util.DelayedTask} delayed
 * by the specified number of milliseconds. If the event fires again within that time, the original
 * handler is <EM>not</EM> invoked, but the new handler is scheduled in its place.</DIV></LI>
 * <LI><B>target</B> : Observable<DIV class="sub-desc">Only call the handler if the event was fired on the target Observable, <I>not</I>
 * if the event was bubbled up from a child Observable.</DIV></LI>
 * </UL><BR/>
 * <P>
 * <B>Combining Options</B><BR/>
 * Using the options argument, it is possible to combine different types of listeners:<BR/>
 * <BR/>
 * A delayed, one-time listener.
 * </P><PRE><CODE>
myDataView.on('click', this.onClick, this, {
single: true,
delay: 100
});</CODE></PRE>
 * <P>
 * <B>Attaching multiple handlers in 1 call</B><BR/>
 * The method also allows for a single argument to be passed which is a config object containing properties
 * which specify multiple handlers.
 * </P><P>
 * </P><PRE><CODE>
myGridPanel.on({
'click' : {
    fn: this.onClick,
    scope: this,
    delay: 100
},
'mouseover' : {
    fn: this.onMouseOver,
    scope: this
},
'mouseout' : {
    fn: this.onMouseOut,
    scope: this
}
});</CODE></PRE>
 * <P>
 * Or a shorthand syntax:<BR/>
 * </P><PRE><CODE>
myGridPanel.on({
'click' : this.onClick,
'mouseover' : this.onMouseOver,
'mouseout' : this.onMouseOut,
 scope: this
});</CODE></PRE>
 */
Ext.data.Connection.addListener = function (eventName,fn,scope,o){
};

/**
 * Removes an event handler from this element.  The shorthand version {@link #un} is equivalent.
 * <B>Note</B>: if a <I>scope</I> was explicitly specified when {@link #addListener adding} the
 * listener, the same scope must be specified here.
 * Example:
 * <PRE><CODE>
el.removeListener('click', this.handlerFn);
// or
el.un('click', this.handlerFn);
</CODE></PRE>
 * @param {String} eventName The name of the event from which to remove the handler.
 * @param {Function} fn The handler function to remove. <B>This must be a reference to the function passed into the {@link #addListener} call.</B>
 * @param {Object} scope If a scope (<B><CODE>this</CODE></B> reference) was specified when the listener was added,
 * then this must refer to the same object.
 * @return {Ext.Element} this
 */
Ext.data.Connection.removeListener = function (eventName,fn,scope){
};

/**
 * Removes all listeners for this object
 */
Ext.data.Connection.purgeListeners = function (){
};

/**
 * Adds the specified events to the list of events which this Observable may fire.
 * @param {Object|String} o Either an object with event names as properties with a value of <CODE>true</CODE>
 * or the first event name string if multiple event names are being passed as separate parameters.
 * @param {string} Optional. Event name if multiple event names are being passed as separate parameters.
 * Usage:<PRE><CODE>
this.addEvents('storeloaded', 'storecleared');
</CODE></PRE>
 */
Ext.data.Connection.addEvents = function (o){
};

/**
 * Checks to see if this object has any listeners for a specified event
 * @param {String} eventName The name of the event to check for
 * @return {Boolean} True if the event is being listened for, else false
 */
Ext.data.Connection.hasListener = function (eventName){
};

/**
 * Suspend the firing of all events. (see {@link #resumeEvents})
 * @param {Boolean} queueSuspended Pass as true to queue up suspended events to be fired
 * after the {@link #resumeEvents} call instead of discarding all suspended events;
 */
Ext.data.Connection.suspendEvents = function (queueSuspended){
};

/**
 * Resume firing events. (see {@link #suspendEvents})
 * If events were suspended using the <TT><B>queueSuspended</B></TT> parameter, then all
 * events fired during event suspension will be sent to any listeners now.
 */
Ext.data.Connection.resumeEvents = function (){
};


Ext.data.Connection.on = function (eventName,fn,scope,o){
};


Ext.data.Connection.un = function (eventName,fn,scope){
};


Ext.util.DelayedTask.delay = function (delay,newFn,newScope,newArgs){
};


Ext.util.DelayedTask.cancel = function (){
};

/**
 * @constructor
 */
Ext.util.Observable.events = function() {}; 
/**
 * @constructor
 */
Ext.util.Observable.filterOptRe = function() {}; 
/**
 * <P>Fires the specified event with the passed parameters (minus the event name).</P>
 * <P>An event may be set to bubble up an Observable parent hierarchy (See {@link Ext.Component#getBubbleTarget})
 * by calling {@link #enableBubble}.</P>
 * @param {String} eventName The name of the event to fire.
 * @param {Object...} args Variable number of parameters are passed to handlers.
 * @return {Boolean} returns false if any of the handlers return false otherwise it returns true.
 */
Ext.util.Observable.fireEvent = function (){
};

/**
 * Appends an event handler to this object.
 * @param {String}   eventName The name of the event to listen for.
 * @param {Function} handler The method the event invokes.
 * @param {Object}   scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to the object which fired the event.</B>
 * @param {Object}   options (optional) An object containing handler configuration.
 * properties. This may contain any of the following properties:<UL>
 * <LI><B>scope</B> : Object<DIV class="sub-desc">The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to the object which fired the event.</B></DIV></LI>
 * <LI><B>delay</B> : Number<DIV class="sub-desc">The number of milliseconds to delay the invocation of the handler after the event fires.</DIV></LI>
 * <LI><B>single</B> : Boolean<DIV class="sub-desc">True to add a handler to handle just the next firing of the event, and then remove itself.</DIV></LI>
 * <LI><B>buffer</B> : Number<DIV class="sub-desc">Causes the handler to be scheduled to run in an {@link Ext.util.DelayedTask} delayed
 * by the specified number of milliseconds. If the event fires again within that time, the original
 * handler is <EM>not</EM> invoked, but the new handler is scheduled in its place.</DIV></LI>
 * <LI><B>target</B> : Observable<DIV class="sub-desc">Only call the handler if the event was fired on the target Observable, <I>not</I>
 * if the event was bubbled up from a child Observable.</DIV></LI>
 * </UL><BR/>
 * <P>
 * <B>Combining Options</B><BR/>
 * Using the options argument, it is possible to combine different types of listeners:<BR/>
 * <BR/>
 * A delayed, one-time listener.
 * </P><PRE><CODE>
myDataView.on('click', this.onClick, this, {
single: true,
delay: 100
});</CODE></PRE>
 * <P>
 * <B>Attaching multiple handlers in 1 call</B><BR/>
 * The method also allows for a single argument to be passed which is a config object containing properties
 * which specify multiple handlers.
 * </P><P>
 * </P><PRE><CODE>
myGridPanel.on({
'click' : {
    fn: this.onClick,
    scope: this,
    delay: 100
},
'mouseover' : {
    fn: this.onMouseOver,
    scope: this
},
'mouseout' : {
    fn: this.onMouseOut,
    scope: this
}
});</CODE></PRE>
 * <P>
 * Or a shorthand syntax:<BR/>
 * </P><PRE><CODE>
myGridPanel.on({
'click' : this.onClick,
'mouseover' : this.onMouseOver,
'mouseout' : this.onMouseOut,
 scope: this
});</CODE></PRE>
 */
Ext.util.Observable.addListener = function (eventName,fn,scope,o){
};

/**
 * Removes an event handler from this element.  The shorthand version {@link #un} is equivalent.
 * <B>Note</B>: if a <I>scope</I> was explicitly specified when {@link #addListener adding} the
 * listener, the same scope must be specified here.
 * Example:
 * <PRE><CODE>
el.removeListener('click', this.handlerFn);
// or
el.un('click', this.handlerFn);
</CODE></PRE>
 * @param {String} eventName The name of the event from which to remove the handler.
 * @param {Function} fn The handler function to remove. <B>This must be a reference to the function passed into the {@link #addListener} call.</B>
 * @param {Object} scope If a scope (<B><CODE>this</CODE></B> reference) was specified when the listener was added,
 * then this must refer to the same object.
 * @return {Ext.Element} this
 */
Ext.util.Observable.removeListener = function (eventName,fn,scope){
};

/**
 * Removes all listeners for this object
 */
Ext.util.Observable.purgeListeners = function (){
};

/**
 * Adds the specified events to the list of events which this Observable may fire.
 * @param {Object|String} o Either an object with event names as properties with a value of <CODE>true</CODE>
 * or the first event name string if multiple event names are being passed as separate parameters.
 * @param {string} Optional. Event name if multiple event names are being passed as separate parameters.
 * Usage:<PRE><CODE>
this.addEvents('storeloaded', 'storecleared');
</CODE></PRE>
 */
Ext.util.Observable.addEvents = function (o){
};

/**
 * Checks to see if this object has any listeners for a specified event
 * @param {String} eventName The name of the event to check for
 * @return {Boolean} True if the event is being listened for, else false
 */
Ext.util.Observable.hasListener = function (eventName){
};

/**
 * Suspend the firing of all events. (see {@link #resumeEvents})
 * @param {Boolean} queueSuspended Pass as true to queue up suspended events to be fired
 * after the {@link #resumeEvents} call instead of discarding all suspended events;
 */
Ext.util.Observable.suspendEvents = function (queueSuspended){
};

/**
 * Resume firing events. (see {@link #suspendEvents})
 * If events were suspended using the <TT><B>queueSuspended</B></TT> parameter, then all
 * events fired during event suspension will be sent to any listeners now.
 */
Ext.util.Observable.resumeEvents = function (){
};


Ext.util.Observable.on = function (eventName,fn,scope,o){
};


Ext.util.Observable.un = function (eventName,fn,scope){
};


Ext.util.Observable.constructor = function (){
};


Ext.util.TaskRunner.start = function (task){
};


Ext.util.TaskRunner.stop = function (task){
};


Ext.util.TaskRunner.stopAll = function (){
};

/**
 * @constructor
 */
Ext.CompositeElementLite.elements = function() {}; 
/**
 * @constructor
 */
Ext.CompositeElementLite.el = function() {}; 

Ext.CompositeElementLite.el.isFlyweight = false;

/**
 * Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function)
 * @param {Object} o The object with the attributes
 * @param {Boolean} useSet (optional) false to override the default setAttribute to use expandos.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.set = function (o,useSet){
};

/**
 * The default unit to append to CSS values where a unit isn't provided (defaults to px).
 * @type String
 */
Ext.CompositeElementLite.el.defaultUnit = "";

/**
 * Returns true if this element matches the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @return {Boolean} True if this element matches the selector, else false
 */
Ext.CompositeElementLite.el.is = function (simpleSelector){
};

/**
 * Tries to focus the element. Any exceptions are caught and ignored.
 * @param {Number} defer (optional) Milliseconds to defer the focus
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.focus = function (defer,dom){
};

/**
 * Tries to blur the element. Any exceptions are caught and ignored.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.blur = function (){
};

/**
 * Returns the value of the "value" attribute
 * @param {Boolean} asNumber true to parse the value as a number
 * @return {String/Number}
 */
Ext.CompositeElementLite.el.getValue = function (asNumber){
};

/**
 * Appends an event handler to this element.  The shorthand version {@link #on} is equivalent.
 * @param {String} eventName The name of event to handle.
 * @param {Function} fn The handler function the event invokes. This function is passed
 * the following parameters:<UL>
 * <LI><B>evt</B> : EventObject<DIV class="sub-desc">The {@link Ext.EventObject EventObject} describing the event.</DIV></LI>
 * <LI><B>el</B> : HtmlElement<DIV class="sub-desc">The DOM element which was the target of the event.
 * Note that this may be filtered by using the <TT>delegate</TT> option.</DIV></LI>
 * <LI><B>o</B> : Object<DIV class="sub-desc">The options object from the addListener call.</DIV></LI>
 * </UL>
 * @param {Object} scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to this Element.</B>.
 * @param {Object} options (optional) An object containing handler configuration properties.
 * This may contain any of the following properties:<UL>
 * <LI><B>scope</B> Object : <DIV class="sub-desc">The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to this Element.</B></DIV></LI>
 * <LI><B>delegate</B> String: <DIV class="sub-desc">A simple selector to filter the target or look for a descendant of the target. See below for additional details.</DIV></LI>
 * <LI><B>stopEvent</B> Boolean: <DIV class="sub-desc">True to stop the event. That is stop propagation, and prevent the default action.</DIV></LI>
 * <LI><B>preventDefault</B> Boolean: <DIV class="sub-desc">True to prevent the default action</DIV></LI>
 * <LI><B>stopPropagation</B> Boolean: <DIV class="sub-desc">True to prevent event propagation</DIV></LI>
 * <LI><B>normalized</B> Boolean: <DIV class="sub-desc">False to pass a browser event to the handler function instead of an Ext.EventObject</DIV></LI>
 * <LI><B>target</B> Ext.Element: <DIV class="sub-desc">Only call the handler if the event was fired on the target Element, <I>not</I> if the event was bubbled up from a child node.</DIV></LI>
 * <LI><B>delay</B> Number: <DIV class="sub-desc">The number of milliseconds to delay the invocation of the handler after the event fires.</DIV></LI>
 * <LI><B>single</B> Boolean: <DIV class="sub-desc">True to add a handler to handle just the next firing of the event, and then remove itself.</DIV></LI>
 * <LI><B>buffer</B> Number: <DIV class="sub-desc">Causes the handler to be scheduled to run in an {@link Ext.util.DelayedTask} delayed
 * by the specified number of milliseconds. If the event fires again within that time, the original
 * handler is <EM>not</EM> invoked, but the new handler is scheduled in its place.</DIV></LI>
 * </UL><BR/>
 * <P>
 * <B>Combining Options</B><BR/>
 * In the following examples, the shorthand form {@link #on} is used rather than the more verbose
 * addListener.  The two are equivalent.  Using the options argument, it is possible to combine different
 * types of listeners:<BR/>
 * <BR/>
 * A delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the
 * options object. The options object is available as the third parameter in the handler function.</P><DIV style="margin: 5px 20px 20px;">
 * Code:<PRE><CODE>
el.on('click', this.onClick, this, {
    single: true,
    delay: 100,
    stopEvent : true,
    forumId: 4
});</CODE></PRE>
 * <P>
 * <B>Attaching multiple handlers in 1 call</B><BR/>
 * The method also allows for a single argument to be passed which is a config object containing properties
 * which specify multiple handlers.</P>
 * <P>
 * Code:</P><PRE><CODE>
el.on({
    'click' : {
        fn: this.onClick,
        scope: this,
        delay: 100
    },
    'mouseover' : {
        fn: this.onMouseOver,
        scope: this
    },
    'mouseout' : {
        fn: this.onMouseOut,
        scope: this
    }
});</CODE></PRE>
 * <P>
 * Or a shorthand syntax:<BR/>
 * Code:</P><PRE><CODE>
el.on({
    'click' : this.onClick,
    'mouseover' : this.onMouseOver,
    'mouseout' : this.onMouseOut,
    scope: this
});
 * </CODE></PRE>
 * <P><B>delegate</B></P>
 * <P>This is a configuration option that you can pass along when registering a handler for
 * an event to assist with event delegation. Event delegation is a technique that is used to
 * reduce memory consumption and prevent exposure to memory-leaks. By registering an event
 * for a container element as opposed to each element within a container. By setting this
 * configuration option to a simple selector, the target element will be filtered to look for
 * a descendant of the target.
 * For example:</P><PRE><CODE>
// using this markup:
&lt;div id='elId'&gt;
    &lt;p id='p1'&gt;paragraph one&lt;/p&gt;
    &lt;p id='p2' class='clickable'&gt;paragraph two&lt;/p&gt;
    &lt;p id='p3'&gt;paragraph three&lt;/p&gt;
&lt;/div&gt;
// utilize event delegation to registering just one handler on the container element:
el = Ext.get('elId');
el.on(
    'click',
    function(e,t) {
        // handle click
        console.info(t.id); // 'p2'
    },
    this,
    {
        // filter the target element to be a descendant with the class 'clickable'
        delegate: '.clickable'
    }
);
 * </CODE></PRE>
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.addListener = function (eventName,fn,scope,options){
};

/**
 * Removes an event handler from this element.  The shorthand version {@link #un} is equivalent.
 * <B>Note</B>: if a <I>scope</I> was explicitly specified when {@link #addListener adding} the
 * listener, the same scope must be specified here.
 * Example:
 * <PRE><CODE>
el.removeListener('click', this.handlerFn);
// or
el.un('click', this.handlerFn);
</CODE></PRE>
 * @param {String} eventName The name of the event from which to remove the handler.
 * @param {Function} fn The handler function to remove. <B>This must be a reference to the function passed into the {@link #addListener} call.</B>
 * @param {Object} scope If a scope (<B><CODE>this</CODE></B> reference) was specified when the listener was added,
 * then this must refer to the same object.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.removeListener = function (eventName,fn,scope){
};

/**
 * Removes all previous added listeners from this element
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.removeAllListeners = function (){
};

/**
 * Recursively removes all previous added listeners from this element and its children
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.purgeAllListeners = function (){
};

/**
 * @private Test if size has a unit, otherwise appends the default
 */
Ext.CompositeElementLite.el.addUnits = function (size){
};

/**
 * <P>Updates the <A href="http://developer.mozilla.org/en/DOM/element.innerHTML">innerHTML</A> of this Element
 * from a specified URL. Note that this is subject to the <A href="http://en.wikipedia.org/wiki/Same_origin_policy">Same Origin Policy</A></P>
 * <P>Updating innerHTML of an element will <B>not</B> execute embedded <TT>&lt;script&gt;</TT> elements. This is a browser restriction.</P>
 * @param {Mixed} options. Either a sring containing the URL from which to load the HTML, or an {@link Ext.Ajax#request} options object specifying
 * exactly how to request the HTML.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.load = function (url,params,cb){
};

/**
 * Tests various css rules/browsers to determine if this element uses a border box
 * @return {Boolean}
 */
Ext.CompositeElementLite.el.isBorderBox = function (){
};

/**
 * <P>Removes this element's dom reference.  Note that event and cache removal is handled at {@link Ext#removeNode}</P>
 */
Ext.CompositeElementLite.el.remove = function (){
};

/**
 * Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.
 * @param {Function} overFn The function to call when the mouse enters the Element.
 * @param {Function} outFn The function to call when the mouse leaves the Element.
 * @param {Object} scope (optional) The scope (<CODE>this</CODE> reference) in which the functions are executed. Defaults to the Element's DOM element.
 * @param {Object} options (optional) Options for the listener. See {@link Ext.util.Observable#addListener the <TT>options</TT> parameter}.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.hover = function (overFn,outFn,scope,options){
};

/**
 * Returns true if this element is an ancestor of the passed element
 * @param {HTMLElement/String} el The element to check
 * @return {Boolean} True if this element is an ancestor of el, else false
 */
Ext.CompositeElementLite.el.contains = function (el){
};

/**
 * Returns the value of a namespaced attribute from the element's underlying DOM node.
 * @param {String} namespace The namespace in which to look for the attribute
 * @param {String} name The attribute name
 * @return {String} The attribute value
 * @deprecated
 */
Ext.CompositeElementLite.el.getAttributeNS = function (ns,name){
};

/**
 * Returns the value of an attribute from the element's underlying DOM node.
 * @param {String} name The attribute name
 * @param {String} namespace (optional) The namespace in which to look for the attribute
 * @return {String} The attribute value
 */
Ext.CompositeElementLite.el.getAttribute = function (name,ns){
};

/**
 * Update the innerHTML of this element
 * @param {String} html The new HTML
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.update = function (html){
};


Ext.CompositeElementLite.el.on = function (eventName,fn,scope,options){
};


Ext.CompositeElementLite.el.un = function (eventName,fn,scope){
};


Ext.CompositeElementLite.el.autoBoxAdjust = false;

/**
 * Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to search as a number or element (defaults to 50 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLElement} The matching DOM node (or null if no match was found)
 */
Ext.CompositeElementLite.el.findParent = function (simpleSelector,maxDepth,returnEl){
};

/**
 * Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to
	            search as a number or element (defaults to 10 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLElement} The matching DOM node (or null if no match was found)
 */
Ext.CompositeElementLite.el.findParentNode = function (simpleSelector,maxDepth,returnEl){
};

/**
 * Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first-child).
 * This is a shortcut for findParentNode() that always returns an Ext.Element.
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to
	            search as a number or element (defaults to 10 || document.body)
 * @return {Ext.Element} The matching DOM node (or null if no match was found)
 */
Ext.CompositeElementLite.el.up = function (simpleSelector,maxDepth){
};

/**
 * Creates a {@link Ext.CompositeElement} for child nodes based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @return {CompositeElement/CompositeElementLite} The composite element
 */
Ext.CompositeElementLite.el.select = function (selector){
};

/**
 * Selects child nodes based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @return {Array} An array of the matched nodes
 */
Ext.CompositeElementLite.el.query = function (selector){
};

/**
 * Selects a single child at any depth below this element based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @param {Boolean} returnDom (optional) True to return the DOM node instead of Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The child Ext.Element (or DOM node if returnDom = true)
 */
Ext.CompositeElementLite.el.child = function (selector,returnDom){
};

/**
 * Selects a single *direct* child based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @param {Boolean} returnDom (optional) True to return the DOM node instead of Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The child Ext.Element (or DOM node if returnDom = true)
 */
Ext.CompositeElementLite.el.down = function (selector,returnDom){
};

/**
 * Gets the parent node for this element, optionally chaining up trying to match a selector
 * @param {String} selector (optional) Find a parent node that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The parent node or null
 */
Ext.CompositeElementLite.el.parent = function (selector,returnDom){
};

/**
 * Gets the next sibling, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The next sibling or null
 */
Ext.CompositeElementLite.el.next = function (selector,returnDom){
};

/**
 * Gets the previous sibling, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The previous sibling or null
 */
Ext.CompositeElementLite.el.prev = function (selector,returnDom){
};

/**
 * Gets the first child, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The first child or null
 */
Ext.CompositeElementLite.el.first = function (selector,returnDom){
};

/**
 * Gets the last child, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The last child or null
 */
Ext.CompositeElementLite.el.last = function (selector,returnDom){
};


Ext.CompositeElementLite.el.matchNode = function (dir,start,selector,returnDom){
};

/**
 * Appends the passed element(s) to this element
 * @param {String/HTMLElement/Array/Element/CompositeElement} el
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.appendChild = function (el){
};

/**
 * Appends this element to the passed element
 * @param {Mixed} el The new parent element
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.appendTo = function (el){
};

/**
 * Inserts this element before the passed element in the DOM
 * @param {Mixed} el The element before which this element will be inserted
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.insertBefore = function (el){
};

/**
 * Inserts this element after the passed element in the DOM
 * @param {Mixed} el The element to insert after
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.insertAfter = function (el){
};

/**
 * Inserts (or creates) an element (or DomHelper config) as the first child of this element
 * @param {Mixed/Object} el The id or element to insert or a DomHelper config to create and insert
 * @return {Ext.Element} The new child
 */
Ext.CompositeElementLite.el.insertFirst = function (el,returnDom){
};

/**
 * Replaces the passed element with this element
 * @param {Mixed} el The element to replace
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.replace = function (el){
};

/**
 * Replaces this element with the passed element
 * @param {Mixed/Object} el The new element or a DomHelper config of an element to create
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.replaceWith = function (el){
};

/**
 * Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child element.
 * @param {Object} config DomHelper element config object.  If no tag is specified (e.g., {tag:'input'}) then a div will be
 * automatically generated with the specified attributes.
 * @param {HTMLElement} insertBefore (optional) a child element of this element
 * @param {Boolean} returnDom (optional) true to return the dom node instead of creating an Element
 * @return {Ext.Element} The new child element
 */
Ext.CompositeElementLite.el.createChild = function (config,insertBefore,returnDom){
};

/**
 * Creates and wraps this element with another element
 * @param {Object} config (optional) DomHelper element config object for the wrapper element or null for an empty div
 * @param {Boolean} returnDom (optional) True to return the raw DOM element instead of Ext.Element
 * @return {HTMLElement/Element} The newly created wrapper element
 */
Ext.CompositeElementLite.el.wrap = function (config,returnDom){
};

/**
 * Inserts an html fragment into this element
 * @param {String} where Where to insert the html in relation to this element - beforeBegin, afterBegin, beforeEnd, afterEnd.
 * @param {String} html The HTML fragment
 * @param {Boolean} returnEl (optional) True to return an Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The inserted node (or nearest related if more than 1 inserted)
 */
Ext.CompositeElementLite.el.insertHtml = function (where,html,returnEl){
};


Ext.CompositeElementLite.el.adjustWidth = function (width){
};


Ext.CompositeElementLite.el.adjustHeight = function (height){
};

/**
 * Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.
 * @param {String/Array} className The CSS class to add, or an array of classes
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.addClass = function (className){
};

/**
 * Adds one or more CSS classes to this element and removes the same class(es) from all siblings.
 * @param {String/Array} className The CSS class to add, or an array of classes
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.radioClass = function (className){
};

/**
 * Removes one or more CSS classes from the element.
 * @param {String/Array} className The CSS class to remove, or an array of classes
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.removeClass = function (className){
};

/**
 * Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).
 * @param {String} className The CSS class to toggle
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.toggleClass = function (className){
};

/**
 * Checks if the specified CSS class exists on this element's DOM node.
 * @param {String} className The CSS class to check for
 * @return {Boolean} True if the class exists, else false
 */
Ext.CompositeElementLite.el.hasClass = function (className){
};

/**
 * Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.
 * @param {String} oldClassName The CSS class to replace
 * @param {String} newClassName The replacement CSS class
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.replaceClass = function (oldClassName,newClassName){
};


Ext.CompositeElementLite.el.isStyle = function (style,val){
};

/**
 * Normalizes currentStyle and computedStyle.
 * @param {String} property The style property whose value is returned.
 * @return {String} The current value of the style property for this element.
 */
Ext.CompositeElementLite.el.getStyle = function (prop){
};

/**
 * Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values
 * are convert to standard 6 digit hex color.
 * @param {String} attr The css attribute
 * @param {String} defaultValue The default value to use when a valid color isn't found
 * @param {String} prefix (optional) defaults to #. Use an empty string when working with
 * color anims.
 */
Ext.CompositeElementLite.el.getColor = function (attr,defaultValue,prefix){
};

/**
 * Wrapper for setting style properties, also takes single object parameter of multiple styles.
 * @param {String/Object} property The style property to be set, or an object of multiple styles.
 * @param {String} value (optional) The value to apply to the given property, or null if an object was passed.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setStyle = function (prop,value){
};

/**
 * Set the opacity of the element
 * @param {Float} opacity The new opacity. 0 = transparent, .5 = 50% visibile, 1 = fully visible, etc
 * @param {Boolean/Object} animate (optional) a standard Element animation config object or <TT>true</TT> for
 * the default animation (<TT>{duration: .35, easing: 'easeIn'}</TT>)
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setOpacity = function (opacity,animate){
};

/**
 * Clears any opacity settings from this element. Required in some cases for IE.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.clearOpacity = function (){
};

/**
 * Returns the offset height of the element
 * @param {Boolean} contentHeight (optional) true to get the height minus borders and padding
 * @return {Number} The element's height
 */
Ext.CompositeElementLite.el.getHeight = function (contentHeight){
};

/**
 * Returns the offset width of the element
 * @param {Boolean} contentWidth (optional) true to get the width minus borders and padding
 * @return {Number} The element's width
 */
Ext.CompositeElementLite.el.getWidth = function (contentWidth){
};

/**
 * Set the width of this Element.
 * @param {Mixed} width The new width. This may be one of:<DIV class="mdetail-params"><UL>
 * <LI>A Number specifying the new width in this Element's {@link #defaultUnit}s (by default, pixels).</LI>
 * <LI>A String used to set the CSS width style. Animation may <B>not</B> be used.
 * </LI></UL></DIV>
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setWidth = function (width,animate){
};

/**
 * Set the height of this Element.
 * <PRE><CODE>
// change the height to 200px and animate with default configuration
Ext.fly('elementId').setHeight(200, true);

// change the height to 150px and animate with a custom configuration
Ext.fly('elId').setHeight(150, {
    duration : .5, // animation will have a duration of .5 seconds
    // will change the content to "finished"
    callback: function(){ this.{@link #update}("finished"); }
});
 * </CODE></PRE>
 * @param {Mixed} height The new height. This may be one of:<DIV class="mdetail-params"><UL>
 * <LI>A Number specifying the new height in this Element's {@link #defaultUnit}s (by default, pixels.)</LI>
 * <LI>A String used to set the CSS height style. Animation may <B>not</B> be used.</LI>
 * </UL></DIV>
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setHeight = function (height,animate){
};

/**
 * Gets the width of the border(s) for the specified side(s)
 * @param {String} side Can be t, l, r, b or any combination of those to add multiple values. For example,
 * passing <TT>'lr'</TT> would get the border <B><U>l</U></B>eft width + the border <B><U>r</U></B>ight width.
 * @return {Number} The width of the sides passed added together
 */
Ext.CompositeElementLite.el.getBorderWidth = function (side){
};

/**
 * Gets the width of the padding(s) for the specified side(s)
 * @param {String} side Can be t, l, r, b or any combination of those to add multiple values. For example,
 * passing <TT>'lr'</TT> would get the padding <B><U>l</U></B>eft + the padding <B><U>r</U></B>ight.
 * @return {Number} The padding of the sides passed added together
 */
Ext.CompositeElementLite.el.getPadding = function (side){
};

/**
 *  Store the current overflow setting and clip overflow on the element - use <TT>{@link #unclip}</TT> to remove
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.clip = function (){
};

/**
 *  Return clipping (overflow) to original clipping before <TT>{@link #clip}</TT> was called
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.unclip = function (){
};


Ext.CompositeElementLite.el.addStyles = function (sides,styles){
};

/**
 * @constructor
 */
Ext.CompositeElementLite.el.margins = function() {}; 

Ext.CompositeElementLite.el.margins.l = "";


Ext.CompositeElementLite.el.margins.r = "";


Ext.CompositeElementLite.el.margins.t = "";


Ext.CompositeElementLite.el.margins.b = "";

/**
 * Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The X position of the element
 */
Ext.CompositeElementLite.el.getX = function (){
};

/**
 * Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The Y position of the element
 */
Ext.CompositeElementLite.el.getY = function (){
};

/**
 * Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Array} The XY position of the element
 */
Ext.CompositeElementLite.el.getXY = function (){
};

/**
 * Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have display:none to have page coordinates.
 * @param {Mixed} element The element to get the offsets from.
 * @return {Array} The XY page offsets (e.g. [100, -200])
 */
Ext.CompositeElementLite.el.getOffsetsTo = function (el){
};

/**
 * Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The X position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setX = function (x,animate){
};

/**
 * Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The Y position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setY = function (y,animate){
};

/**
 * Sets the element's left position directly using CSS style (instead of {@link #setX}).
 * @param {String} left The left CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setLeft = function (left){
};

/**
 * Sets the element's top position directly using CSS style (instead of {@link #setY}).
 * @param {String} top The top CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setTop = function (top){
};

/**
 * Sets the element's CSS right style.
 * @param {String} right The right CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setRight = function (right){
};

/**
 * Sets the element's CSS bottom style.
 * @param {String} bottom The bottom CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setBottom = function (bottom){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Array} pos Contains X &amp; Y [x, y] values for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setXY = function (pos,animate){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} x X value for new position (coordinates are page-based)
 * @param {Number} y Y value for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setLocation = function (x,y,animate){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} x X value for new position (coordinates are page-based)
 * @param {Number} y Y value for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.moveTo = function (x,y,animate){
};

/**
 * Gets the left X coordinate
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.el.getLeft = function (local){
};

/**
 * Gets the right X coordinate of the element (element X position + element width)
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.el.getRight = function (local){
};

/**
 * Gets the top Y coordinate
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.el.getTop = function (local){
};

/**
 * Gets the bottom Y coordinate of the element (element Y position + element height)
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.el.getBottom = function (local){
};

/**
 * Initializes positioning on this element. If a desired position is not passed, it will make the
 * the element positioned relative IF it is not already positioned.
 * @param {String} pos (optional) Positioning to use "relative", "absolute" or "fixed"
 * @param {Number} zIndex (optional) The zIndex to apply
 * @param {Number} x (optional) Set the page X position
 * @param {Number} y (optional) Set the page Y position
 */
Ext.CompositeElementLite.el.position = function (pos,zIndex,x,y){
};

/**
 * Clear positioning back to the default when the document was loaded
 * @param {String} value (optional) The value to use for the left,right,top,bottom, defaults to '' (empty string). You could use 'auto'.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.clearPositioning = function (value){
};

/**
 * Gets an object with all CSS positioning properties. Useful along with setPostioning to get
 * snapshot before performing an update and then restoring the element.
 * @return {Object}
 */
Ext.CompositeElementLite.el.getPositioning = function (){
};

/**
 * Set positioning with an object returned by getPositioning().
 * @param {Object} posCfg
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setPositioning = function (pc){
};

/**
 * Translates the passed page coordinates into left/top css values for this element
 * @param {Number/Array} x The page x or an array containing [x, y]
 * @param {Number} y (optional) The page y, required if x is not an array
 * @return {Object} An object with left and top properties. e.g. {left: (value), top: (value)}
 */
Ext.CompositeElementLite.el.translatePoints = function (x,y){
};


Ext.CompositeElementLite.el.animTest = function (args,animate,i){
};

/**
 * Returns true if this element is scrollable.
 * @return {Boolean}
 */
Ext.CompositeElementLite.el.isScrollable = function (){
};

/**
 * Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it will try to do it. For auto bounds checking, use scroll().
 * @param {String} side Either "left" for scrollLeft values or "top" for scrollTop values.
 * @param {Number} value The new scroll value.
 * @return {Element} this
 */
Ext.CompositeElementLite.el.scrollTo = function (side,value){
};

/**
 * Returns the current scroll position of the element.
 * @return {Object} An object containing the scroll position in the format {left: (scrollLeft), top: (scrollTop)}
 */
Ext.CompositeElementLite.el.getScroll = function (){
};

/**
 * The element's default display mode  (defaults to "")
 * @type String
 */
Ext.CompositeElementLite.el.originalDisplay = "";


Ext.CompositeElementLite.el.visibilityMode = 0;

/**
 * Sets the element's visibility mode. When setVisible() is called it
 * will use this to determine whether to set the visibility or the display property.
 * @param {Number} visMode Ext.Element.VISIBILITY or Ext.Element.DISPLAY
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setVisibilityMode = function (visMode){
};

/**
 * Perform custom animation on this element.
 * <DIV><UL class="mdetail-params">
 * <LI><U>Animation Properties</U></LI>
 * 
 * <P>The Animation Control Object enables gradual transitions for any member of an
 * element's style object that takes a numeric value including but not limited to
 * these properties:</P><DIV><UL class="mdetail-params">
 * <LI><TT>bottom, top, left, right</TT></LI>
 * <LI><TT>height, width</TT></LI>
 * <LI><TT>margin, padding</TT></LI>
 * <LI><TT>borderWidth</TT></LI>
 * <LI><TT>opacity</TT></LI>
 * <LI><TT>fontSize</TT></LI>
 * <LI><TT>lineHeight</TT></LI>
 * </UL></DIV>
 * 
 * 
 * <LI><U>Animation Property Attributes</U></LI>
 * 
 * <P>Each Animation Property is a config object with optional properties:</P>
 * <DIV><UL class="mdetail-params">
 * <LI><TT>by</TT>*  : relative change - start at current value, change by this value</LI>
 * <LI><TT>from</TT> : ignore current value, start from this value</LI>
 * <LI><TT>to</TT>*  : start at current value, go to this value</LI>
 * <LI><TT>unit</TT> : any allowable unit specification</LI>
 * <P>* do not specify both <TT>to</TT> and <TT>by</TT> for an animation property</P>
 * </UL></DIV>
 * 
 * <LI><U>Animation Types</U></LI>
 * 
 * <P>The supported animation types:</P><DIV><UL class="mdetail-params">
 * <LI><TT>'run'</TT> : Default
 * <PRE><CODE>
var el = Ext.get('complexEl');
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'run'      // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE>
 * </LI>
 * <LI><TT>'color'</TT>
 * <P>Animates transition of background, text, or border colors.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        color: { to: '#06e' },
        backgroundColor: { to: '#e06' }
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'color'    // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * 
 * <LI><TT>'motion'</TT>
 * <P>Animates the motion of an element to/from specific points using optional bezier
 * way points during transit.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
        points: {
            to: [50, 100],  // go to this point
            control: [      // optional bezier way points
                [ 600, 800],
                [-100, 200]
            ]
        }
    },
    3000,      // animation duration (milliseconds!)
    null,      // callback
    'easeOut', // easing method
    'motion'   // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * <LI><TT>'scroll'</TT>
 * <P>Animate horizontal or vertical scrolling of an overflowing page element.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        scroll: {to: [400, 300]}
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'scroll'   // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * </UL></DIV>
 * 
 * </UL></DIV>
 * 
 * @param {Object} args The animation control args
 * @param {Float} duration (optional) How long the animation lasts in seconds (defaults to <TT>.35</TT>)
 * @param {Function} onComplete (optional) Function to call when animation completes
 * @param {String} easing (optional) {@link Ext.Fx#easing} method to use (defaults to <TT>'easeOut'</TT>)
 * @param {String} animType (optional) <TT>'run'</TT> is the default. Can also be <TT>'color'</TT>,
 * <TT>'motion'</TT>, or <TT>'scroll'</TT>
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.animate = function (args,duration,onComplete,easing,animType){
};

/*
 * @private Internal animation call
 */
Ext.CompositeElementLite.el.anim = function (args,opt,animType,defaultDur,defaultEase,cb){
};


Ext.CompositeElementLite.el.preanim = function (a,i){
};

/**
 * Checks whether the element is currently visible using both visibility and display properties.         
 * @return {Boolean} True if the element is currently visible, else false
 */
Ext.CompositeElementLite.el.isVisible = function (){
};

/**
 * Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use
 * the display property to hide the element, otherwise it uses visibility. The default is to hide and show using the visibility property.
 * @param {Boolean} visible Whether the element is visible
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setVisible = function (visible,animate){
};

/**
 * Toggles the element's visibility or display, depending on visibility mode.
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.toggle = function (animate){
};

/**
 * Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.
 * @param {Mixed} value Boolean value to display the element using its default display, or a string to set the display directly.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.setDisplayed = function (value){
};


Ext.CompositeElementLite.el.fixDisplay = function (){
};

/**
 * Hide this element - Uses display mode to determine whether to use "display" or "visibility". See {@link #setVisible}.
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.hide = function (animate){
};

/**
 * Show this element - Uses display mode to determine whether to use "display" or "visibility". See {@link #setVisible}.
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.el.show = function (animate){
};


Ext.CompositeElementLite.el.switchStatements = function (key,fn,argHash){
};

/**
 * Slides the element into view.  An anchor point can be optionally passed to set the point of
 * origin for the slide effect.  This function automatically handles wrapping the element with
 * a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element in from the top
el.slideIn();

// custom: slide the element in from the right with a 2-second duration
el.slideIn('r', { duration: 2 });

// common config options shown with default values
el.slideIn('t', {
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.slideIn = function (anchor,o){
};

/**
 * Slides the element out of view.  An anchor point can be optionally passed to set the end point
 * for the slide effect.  When the effect is completed, the element will be hidden (visibility = 
 * 'hidden') but block elements will still take up space in the document.  The element must be removed
 * from the DOM using the 'remove' config option if desired.  This function automatically handles 
 * wrapping the element with a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element out to the top
el.slideOut();

// custom: slide the element out to the right with a 2-second duration
el.slideOut('r', { duration: 2 });

// common config options shown with default values
el.slideOut('t', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.slideOut = function (anchor,o){
};

/**
 * Fades the element out while slowly expanding it in all directions.  When the effect is completed, the 
 * element will be hidden (visibility = 'hidden') but block elements will still take up space in the document. 
 * The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.puff();

// common config options shown with default values
el.puff({
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.puff = function (o){
};

/**
 * Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).
 * When the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still 
 * take up space in the document. The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.switchOff();

// all config options shown with default values
el.switchOff({
    easing: 'easeIn',
    duration: .3,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.switchOff = function (o){
};

/**
 * Highlights the Element by setting a color (applies to the background-color by default, but can be
 * changed using the "attr" config option) and then fading back to the original color. If no original
 * color is available, you should provide the "endColor" config option which will be cleared after the animation.
 * Usage:
<PRE><CODE>
// default: highlight background to yellow
el.highlight();

// custom: highlight foreground text to blue for 2 seconds
el.highlight("0000ff", { attr: 'color', duration: 2 });

// common config options shown with default values
el.highlight("ffff9c", {
    attr: "background-color", //can be any valid CSS property (attribute) that supports a color value
    endColor: (current color) or "ffffff",
    easing: 'easeIn',
    duration: 1
});
</CODE></PRE>
 * @param {String} color (optional) The highlight color. Should be a 6 char hex color without the leading # (defaults to yellow: 'ffff9c')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.highlight = function (color,o){
};

/**
 * Shows a ripple of exploding, attenuating borders to draw attention to an Element.
 * Usage:
<PRE><CODE>
// default: a single light blue ripple
el.frame();

// custom: 3 red ripples lasting 3 seconds total
el.frame("ff0000", 3, { duration: 3 });

// common config options shown with default values
el.frame("C3DAF9", 1, {
    duration: 1 //duration of each individual ripple.
    // Note: Easing is not configurable and will be ignored if included
});
</CODE></PRE>
 * @param {String} color (optional) The color of the border.  Should be a 6 char hex color without the leading # (defaults to light blue: 'C3DAF9').
 * @param {Number} count (optional) The number of ripples to display (defaults to 1)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.frame = function (color,count,o){
};

/**
 * Creates a pause before any subsequent queued effects begin.  If there are
 * no effects queued after the pause it will have no effect.
 * Usage:
<PRE><CODE>
el.pause(1);
</CODE></PRE>
 * @param {Number} seconds The length of time to pause (in seconds)
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.pause = function (seconds){
};

/**
 * Fade an element in (from transparent to opaque).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.
 * Usage:
<PRE><CODE>
// default: fade in from opacity 0 to 100%
el.fadeIn();

// custom: fade in from opacity 0 to 75% over 2 seconds
el.fadeIn({ endOpacity: .75, duration: 2});

// common config options shown with default values
el.fadeIn({
    endOpacity: 1, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.fadeIn = function (o){
};

/**
 * Fade an element out (from opaque to transparent).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.  Note that IE may require
 * <TT>{@link #useDisplay}:true</TT> in order to redisplay correctly.
 * Usage:
<PRE><CODE>
// default: fade out from the element's current opacity to 0
el.fadeOut();

// custom: fade out from the element's current opacity to 25% over 2 seconds
el.fadeOut({ endOpacity: .25, duration: 2});

// common config options shown with default values
el.fadeOut({
    endOpacity: 0, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.fadeOut = function (o){
};

/**
 * Animates the transition of an element's dimensions from a starting height/width
 * to an ending height/width.  This method is a convenience implementation of {@link shift}.
 * Usage:
<PRE><CODE>
// change height and width to 100x100 pixels
el.scale(100, 100);

// common config options shown with default values.  The height and width will default to
// the element's existing values if passed as null.
el.scale(
    [element's width],
    [element's height], {
        easing: 'easeOut',
        duration: .35
    }
);
</CODE></PRE>
 * @param {Number} width  The new width (pass undefined to keep the original width)
 * @param {Number} height  The new height (pass undefined to keep the original height)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.scale = function (w,h,o){
};

/**
 * Animates the transition of any combination of an element's dimensions, xy position and/or opacity.
 * Any of these properties not specified in the config object will not be changed.  This effect 
 * requires that at least one new dimension, position or opacity setting must be passed in on
 * the config object in order for the function to have any effect.
 * Usage:
<PRE><CODE>
// slide the element horizontally to x position 200 while changing the height and opacity
el.shift({ x: 200, height: 50, opacity: .8 });

// common config options shown with default values.
el.shift({
    width: [element's width],
    height: [element's height],
    x: [element's x position],
    y: [element's y position],
    opacity: [element's opacity],
    easing: 'easeOut',
    duration: .35
});
</CODE></PRE>
 * @param {Object} options  Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.shift = function (o){
};

/**
 * Slides the element while fading it out of view.  An anchor point can be optionally passed to set the 
 * ending point of the effect.
 * Usage:
 *<PRE><CODE>
// default: slide the element downward while fading out
el.ghost();

// custom: slide the element out to the right with a 2-second duration
el.ghost('r', { duration: 2 });

// common config options shown with default values
el.ghost('b', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to bottom: 'b')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.ghost = function (anchor,o){
};

/**
 * Ensures that all effects queued after syncFx is called on the element are
 * run concurrently.  This is the opposite of {@link #sequenceFx}.
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.syncFx = function (){
};

/**
 * Ensures that all effects queued after sequenceFx is called on the element are
 * run in sequence.  This is the opposite of {@link #syncFx}.
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.sequenceFx = function (){
};

/* @private */
Ext.CompositeElementLite.el.nextFx = function (){
};

/**
 * Returns true if the element has any effects actively running or queued, else returns false.
 * @return {Boolean} True if element has active effects, else false
 */
Ext.CompositeElementLite.el.hasActiveFx = function (){
};

/**
 * Stops any running effects and clears the element's internal effects queue if it contains
 * any additional effects that haven't started yet.
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.el.stopFx = function (finish){
};

/* @private */
Ext.CompositeElementLite.el.beforeFx = function (o){
};

/**
 * Returns true if the element is currently blocking so that no other effect can be queued
 * until this effect is finished, else returns false if blocking is not set.  This is commonly
 * used to ensure that an effect initiated by a user action runs to completion prior to the
 * same effect being restarted (e.g., firing only one effect even if the user clicks several times).
 * @return {Boolean} True if blocking, else false
 */
Ext.CompositeElementLite.el.hasFxBlock = function (){
};

/* @private */
Ext.CompositeElementLite.el.queueFx = function (o,fn){
};

/* @private */
Ext.CompositeElementLite.el.fxWrap = function (pos,o,vis){
};

/* @private */
Ext.CompositeElementLite.el.fxUnwrap = function (wrap,pos,o){
};

/* @private */
Ext.CompositeElementLite.el.getFxRestore = function (){
};

/* @private */
Ext.CompositeElementLite.el.afterFx = function (o){
};

/* @private */
Ext.CompositeElementLite.el.fxanim = function (args,opt,animType,defaultDur,defaultEase,cb){
};


Ext.CompositeElementLite.el.resize = function (w,h,o){
};


Ext.CompositeElementLite.isComposite = false;


Ext.CompositeElementLite.getElement = function (el){
};


Ext.CompositeElementLite.transformElement = function (el){
};

/**
 * Returns the number of elements in this Composite.
 * @return Number
 */
Ext.CompositeElementLite.getCount = function (){
};

/**
 * Adds elements to this Composite object.
 * @param {Mixed} els Either an Array of DOM elements to add, or another Composite object who's elements should be added.
 * @return {CompositeElement} This Composite object.
 */
Ext.CompositeElementLite.add = function (els,root){
};


Ext.CompositeElementLite.invoke = function (fn,args){
};

/**
 * Returns a flyweight Element of the dom element object at the specified index
 * @param {Number} index
 * @return {Ext.Element}
 */
Ext.CompositeElementLite.item = function (index){
};


Ext.CompositeElementLite.addListener = function (eventName,handler,scope,opt){
};

/**
 * <P>Calls the passed function for each element in this composite.</P>
 * @param {Function} fn The function to call. The function is passed the following parameters:<UL>
 * <LI><B>el</B> : Element<DIV class="sub-desc">The current Element in the iteration.
 * <B>This is the flyweight (shared) Ext.Element instance, so if you require a
 * a reference to the dom node, use el.dom.</B></DIV></LI>
 * <LI><B>c</B> : Composite<DIV class="sub-desc">This Composite object.</DIV></LI>
 * <LI><B>idx</B> : Number<DIV class="sub-desc">The zero-based index in the iteration.</DIV></LI>
 * </UL>
 * @param {Object} scope (optional) The scope (<I>this</I> reference) in which the function is executed. (defaults to the Element)
 * @return {CompositeElement} this
 */
Ext.CompositeElementLite.each = function (fn,scope){
};

/**
 * Clears this Composite and adds the elements passed.
 * @param {Mixed} els Either an array of DOM elements, or another Composite from which to fill this Composite.
 * @return {CompositeElement} this
 */
Ext.CompositeElementLite.fill = function (els){
};

/**
 * Filters this composite to only elements that match the passed selector.
 * @param {String/Function} selector A string CSS selector or a comparison function.
 * The comparison function will be called with the following arguments:<UL>
 * <LI><CODE>el</CODE> : Ext.Element<DIV class="sub-desc">The current DOM element.</DIV></LI>
 * <LI><CODE>index</CODE> : Number<DIV class="sub-desc">The current index within the collection.</DIV></LI>
 * </UL>
 * @return {CompositeElement} this
 */
Ext.CompositeElementLite.filter = function (selector){
};

/**
 * Find the index of the passed element within the composite collection.
 * @param el {Mixed} The id of an element, or an Ext.Element, or an HtmlElement to find within the composite collection.
 * @return Number The index of the passed Ext.Element in the composite collection, or -1 if not found.
 */
Ext.CompositeElementLite.indexOf = function (el){
};

/**
 * Replaces the specified element with the passed element.
 * @param {Mixed} el The id of an element, the Element itself, the index of the element in this composite
 * to replace.
 * @param {Mixed} replacement The id of an element or the Element itself.
 * @param {Boolean} domReplace (Optional) True to remove and replace the element in the document too.
 * @return {CompositeElement} this
 */
Ext.CompositeElementLite.replaceElement = function (el,replacement,domReplace){
};

/**
 * Removes all elements.
 */
Ext.CompositeElementLite.clear = function (){
};


Ext.CompositeElementLite.on = function (eventName,handler,scope,opt){
};


Ext.CompositeElementLite.set = function (){
};


Ext.CompositeElementLite.is = function (){
};

/**
 * Tries to focus the element. Any exceptions are caught and ignored.
 * @param {Number} defer (optional) Milliseconds to defer the focus
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.focus = function (){
};

/**
 * Tries to blur the element. Any exceptions are caught and ignored.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.blur = function (){
};

/**
 * Returns the value of the "value" attribute
 * @param {Boolean} asNumber true to parse the value as a number
 * @return {String/Number}
 */
Ext.CompositeElementLite.getValue = function (){
};


Ext.CompositeElementLite.removeListener = function (){
};

/**
 * Removes all previous added listeners from this element
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.removeAllListeners = function (){
};

/**
 * Recursively removes all previous added listeners from this element and its children
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.purgeAllListeners = function (){
};

/**
 * @private Test if size has a unit, otherwise appends the default
 */
Ext.CompositeElementLite.addUnits = function (){
};

/**
 * <P>Updates the <A href="http://developer.mozilla.org/en/DOM/element.innerHTML">innerHTML</A> of this Element
 * from a specified URL. Note that this is subject to the <A href="http://en.wikipedia.org/wiki/Same_origin_policy">Same Origin Policy</A></P>
 * <P>Updating innerHTML of an element will <B>not</B> execute embedded <TT>&lt;script&gt;</TT> elements. This is a browser restriction.</P>
 * @param {Mixed} options. Either a sring containing the URL from which to load the HTML, or an {@link Ext.Ajax#request} options object specifying
 * exactly how to request the HTML.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.load = function (){
};

/**
 * Tests various css rules/browsers to determine if this element uses a border box
 * @return {Boolean}
 */
Ext.CompositeElementLite.isBorderBox = function (){
};

/**
 * <P>Removes this element's dom reference.  Note that event and cache removal is handled at {@link Ext#removeNode}</P>
 */
Ext.CompositeElementLite.remove = function (){
};

/**
 * Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.
 * @param {Function} overFn The function to call when the mouse enters the Element.
 * @param {Function} outFn The function to call when the mouse leaves the Element.
 * @param {Object} scope (optional) The scope (<CODE>this</CODE> reference) in which the functions are executed. Defaults to the Element's DOM element.
 * @param {Object} options (optional) Options for the listener. See {@link Ext.util.Observable#addListener the <TT>options</TT> parameter}.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.hover = function (){
};

/**
 * Returns true if this element is an ancestor of the passed element
 * @param {HTMLElement/String} el The element to check
 * @return {Boolean} True if this element is an ancestor of el, else false
 */
Ext.CompositeElementLite.contains = function (){
};

/**
 * Returns the value of a namespaced attribute from the element's underlying DOM node.
 * @param {String} namespace The namespace in which to look for the attribute
 * @param {String} name The attribute name
 * @return {String} The attribute value
 * @deprecated
 */
Ext.CompositeElementLite.getAttributeNS = function (){
};

/**
 * Returns the value of an attribute from the element's underlying DOM node.
 * @param {String} name The attribute name
 * @param {String} namespace (optional) The namespace in which to look for the attribute
 * @return {String} The attribute value
 */
Ext.CompositeElementLite.getAttribute = function (){
};

/**
 * Update the innerHTML of this element
 * @param {String} html The new HTML
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.update = function (){
};


Ext.CompositeElementLite.un = function (){
};

/**
 * Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to search as a number or element (defaults to 50 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLElement} The matching DOM node (or null if no match was found)
 */
Ext.CompositeElementLite.findParent = function (){
};

/**
 * Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to
	            search as a number or element (defaults to 10 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLElement} The matching DOM node (or null if no match was found)
 */
Ext.CompositeElementLite.findParentNode = function (){
};

/**
 * Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first-child).
 * This is a shortcut for findParentNode() that always returns an Ext.Element.
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to
	            search as a number or element (defaults to 10 || document.body)
 * @return {Ext.Element} The matching DOM node (or null if no match was found)
 */
Ext.CompositeElementLite.up = function (){
};


Ext.CompositeElementLite.select = function (){
};

/**
 * Selects child nodes based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @return {Array} An array of the matched nodes
 */
Ext.CompositeElementLite.query = function (){
};

/**
 * Selects a single child at any depth below this element based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @param {Boolean} returnDom (optional) True to return the DOM node instead of Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The child Ext.Element (or DOM node if returnDom = true)
 */
Ext.CompositeElementLite.child = function (){
};

/**
 * Selects a single *direct* child based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @param {Boolean} returnDom (optional) True to return the DOM node instead of Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The child Ext.Element (or DOM node if returnDom = true)
 */
Ext.CompositeElementLite.down = function (){
};

/**
 * Gets the parent node for this element, optionally chaining up trying to match a selector
 * @param {String} selector (optional) Find a parent node that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The parent node or null
 */
Ext.CompositeElementLite.parent = function (){
};

/**
 * Gets the next sibling, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The next sibling or null
 */
Ext.CompositeElementLite.next = function (){
};

/**
 * Gets the previous sibling, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The previous sibling or null
 */
Ext.CompositeElementLite.prev = function (){
};

/**
 * Gets the first child, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The first child or null
 */
Ext.CompositeElementLite.first = function (){
};

/**
 * Gets the last child, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The last child or null
 */
Ext.CompositeElementLite.last = function (){
};


Ext.CompositeElementLite.matchNode = function (){
};

/**
 * Appends the passed element(s) to this element
 * @param {String/HTMLElement/Array/Element/CompositeElement} el
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.appendChild = function (){
};

/**
 * Appends this element to the passed element
 * @param {Mixed} el The new parent element
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.appendTo = function (){
};


Ext.CompositeElementLite.insertBefore = function (){
};


Ext.CompositeElementLite.insertAfter = function (){
};


Ext.CompositeElementLite.insertFirst = function (){
};

/**
 * Replaces the passed element with this element
 * @param {Mixed} el The element to replace
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.replace = function (){
};

/**
 * Replaces this element with the passed element
 * @param {Mixed/Object} el The new element or a DomHelper config of an element to create
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.replaceWith = function (){
};

/**
 * Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child element.
 * @param {Object} config DomHelper element config object.  If no tag is specified (e.g., {tag:'input'}) then a div will be
 * automatically generated with the specified attributes.
 * @param {HTMLElement} insertBefore (optional) a child element of this element
 * @param {Boolean} returnDom (optional) true to return the dom node instead of creating an Element
 * @return {Ext.Element} The new child element
 */
Ext.CompositeElementLite.createChild = function (){
};

/**
 * Creates and wraps this element with another element
 * @param {Object} config (optional) DomHelper element config object for the wrapper element or null for an empty div
 * @param {Boolean} returnDom (optional) True to return the raw DOM element instead of Ext.Element
 * @return {HTMLElement/Element} The newly created wrapper element
 */
Ext.CompositeElementLite.wrap = function (){
};


Ext.CompositeElementLite.insertHtml = function (){
};


Ext.CompositeElementLite.adjustWidth = function (){
};


Ext.CompositeElementLite.adjustHeight = function (){
};

/**
 * Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.
 * @param {String/Array} className The CSS class to add, or an array of classes
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.addClass = function (){
};

/**
 * Adds one or more CSS classes to this element and removes the same class(es) from all siblings.
 * @param {String/Array} className The CSS class to add, or an array of classes
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.radioClass = function (){
};

/**
 * Removes one or more CSS classes from the element.
 * @param {String/Array} className The CSS class to remove, or an array of classes
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.removeClass = function (){
};

/**
 * Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).
 * @param {String} className The CSS class to toggle
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.toggleClass = function (){
};

/**
 * Checks if the specified CSS class exists on this element's DOM node.
 * @param {String} className The CSS class to check for
 * @return {Boolean} True if the class exists, else false
 */
Ext.CompositeElementLite.hasClass = function (){
};

/**
 * Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.
 * @param {String} oldClassName The CSS class to replace
 * @param {String} newClassName The replacement CSS class
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.replaceClass = function (){
};


Ext.CompositeElementLite.isStyle = function (){
};

/**
 * Normalizes currentStyle and computedStyle.
 * @param {String} property The style property whose value is returned.
 * @return {String} The current value of the style property for this element.
 */
Ext.CompositeElementLite.getStyle = function (){
};

/**
 * Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values
 * are convert to standard 6 digit hex color.
 * @param {String} attr The css attribute
 * @param {String} defaultValue The default value to use when a valid color isn't found
 * @param {String} prefix (optional) defaults to #. Use an empty string when working with
 * color anims.
 */
Ext.CompositeElementLite.getColor = function (){
};

/**
 * Wrapper for setting style properties, also takes single object parameter of multiple styles.
 * @param {String/Object} property The style property to be set, or an object of multiple styles.
 * @param {String} value (optional) The value to apply to the given property, or null if an object was passed.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setStyle = function (){
};

/**
 * Set the opacity of the element
 * @param {Float} opacity The new opacity. 0 = transparent, .5 = 50% visibile, 1 = fully visible, etc
 * @param {Boolean/Object} animate (optional) a standard Element animation config object or <TT>true</TT> for
 * the default animation (<TT>{duration: .35, easing: 'easeIn'}</TT>)
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setOpacity = function (){
};

/**
 * Clears any opacity settings from this element. Required in some cases for IE.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.clearOpacity = function (){
};

/**
 * Returns the offset height of the element
 * @param {Boolean} contentHeight (optional) true to get the height minus borders and padding
 * @return {Number} The element's height
 */
Ext.CompositeElementLite.getHeight = function (){
};

/**
 * Returns the offset width of the element
 * @param {Boolean} contentWidth (optional) true to get the width minus borders and padding
 * @return {Number} The element's width
 */
Ext.CompositeElementLite.getWidth = function (){
};

/**
 * Set the width of this Element.
 * @param {Mixed} width The new width. This may be one of:<DIV class="mdetail-params"><UL>
 * <LI>A Number specifying the new width in this Element's {@link #defaultUnit}s (by default, pixels).</LI>
 * <LI>A String used to set the CSS width style. Animation may <B>not</B> be used.
 * </LI></UL></DIV>
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setWidth = function (){
};

/**
 * Set the height of this Element.
 * <PRE><CODE>
// change the height to 200px and animate with default configuration
Ext.fly('elementId').setHeight(200, true);

// change the height to 150px and animate with a custom configuration
Ext.fly('elId').setHeight(150, {
    duration : .5, // animation will have a duration of .5 seconds
    // will change the content to "finished"
    callback: function(){ this.{@link #update}("finished"); }
});
 * </CODE></PRE>
 * @param {Mixed} height The new height. This may be one of:<DIV class="mdetail-params"><UL>
 * <LI>A Number specifying the new height in this Element's {@link #defaultUnit}s (by default, pixels.)</LI>
 * <LI>A String used to set the CSS height style. Animation may <B>not</B> be used.</LI>
 * </UL></DIV>
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setHeight = function (){
};

/**
 * Gets the width of the border(s) for the specified side(s)
 * @param {String} side Can be t, l, r, b or any combination of those to add multiple values. For example,
 * passing <TT>'lr'</TT> would get the border <B><U>l</U></B>eft width + the border <B><U>r</U></B>ight width.
 * @return {Number} The width of the sides passed added together
 */
Ext.CompositeElementLite.getBorderWidth = function (){
};

/**
 * Gets the width of the padding(s) for the specified side(s)
 * @param {String} side Can be t, l, r, b or any combination of those to add multiple values. For example,
 * passing <TT>'lr'</TT> would get the padding <B><U>l</U></B>eft + the padding <B><U>r</U></B>ight.
 * @return {Number} The padding of the sides passed added together
 */
Ext.CompositeElementLite.getPadding = function (){
};

/**
 *  Store the current overflow setting and clip overflow on the element - use <TT>{@link #unclip}</TT> to remove
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.clip = function (){
};

/**
 *  Return clipping (overflow) to original clipping before <TT>{@link #clip}</TT> was called
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.unclip = function (){
};


Ext.CompositeElementLite.addStyles = function (){
};

/**
 * Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The X position of the element
 */
Ext.CompositeElementLite.getX = function (){
};

/**
 * Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The Y position of the element
 */
Ext.CompositeElementLite.getY = function (){
};

/**
 * Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Array} The XY position of the element
 */
Ext.CompositeElementLite.getXY = function (){
};

/**
 * Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have display:none to have page coordinates.
 * @param {Mixed} element The element to get the offsets from.
 * @return {Array} The XY page offsets (e.g. [100, -200])
 */
Ext.CompositeElementLite.getOffsetsTo = function (){
};

/**
 * Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The X position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setX = function (){
};

/**
 * Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The Y position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setY = function (){
};

/**
 * Sets the element's left position directly using CSS style (instead of {@link #setX}).
 * @param {String} left The left CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setLeft = function (){
};

/**
 * Sets the element's top position directly using CSS style (instead of {@link #setY}).
 * @param {String} top The top CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setTop = function (){
};

/**
 * Sets the element's CSS right style.
 * @param {String} right The right CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setRight = function (){
};

/**
 * Sets the element's CSS bottom style.
 * @param {String} bottom The bottom CSS property value
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setBottom = function (){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Array} pos Contains X &amp; Y [x, y] values for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setXY = function (){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} x X value for new position (coordinates are page-based)
 * @param {Number} y Y value for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setLocation = function (){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} x X value for new position (coordinates are page-based)
 * @param {Number} y Y value for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.moveTo = function (){
};

/**
 * Gets the left X coordinate
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.getLeft = function (){
};

/**
 * Gets the right X coordinate of the element (element X position + element width)
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.getRight = function (){
};

/**
 * Gets the top Y coordinate
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.getTop = function (){
};

/**
 * Gets the bottom Y coordinate of the element (element Y position + element height)
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.CompositeElementLite.getBottom = function (){
};

/**
 * Initializes positioning on this element. If a desired position is not passed, it will make the
 * the element positioned relative IF it is not already positioned.
 * @param {String} pos (optional) Positioning to use "relative", "absolute" or "fixed"
 * @param {Number} zIndex (optional) The zIndex to apply
 * @param {Number} x (optional) Set the page X position
 * @param {Number} y (optional) Set the page Y position
 */
Ext.CompositeElementLite.position = function (){
};

/**
 * Clear positioning back to the default when the document was loaded
 * @param {String} value (optional) The value to use for the left,right,top,bottom, defaults to '' (empty string). You could use 'auto'.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.clearPositioning = function (){
};

/**
 * Gets an object with all CSS positioning properties. Useful along with setPostioning to get
 * snapshot before performing an update and then restoring the element.
 * @return {Object}
 */
Ext.CompositeElementLite.getPositioning = function (){
};

/**
 * Set positioning with an object returned by getPositioning().
 * @param {Object} posCfg
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setPositioning = function (){
};

/**
 * Translates the passed page coordinates into left/top css values for this element
 * @param {Number/Array} x The page x or an array containing [x, y]
 * @param {Number} y (optional) The page y, required if x is not an array
 * @return {Object} An object with left and top properties. e.g. {left: (value), top: (value)}
 */
Ext.CompositeElementLite.translatePoints = function (){
};


Ext.CompositeElementLite.animTest = function (){
};

/**
 * Returns true if this element is scrollable.
 * @return {Boolean}
 */
Ext.CompositeElementLite.isScrollable = function (){
};

/**
 * Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it will try to do it. For auto bounds checking, use scroll().
 * @param {String} side Either "left" for scrollLeft values or "top" for scrollTop values.
 * @param {Number} value The new scroll value.
 * @return {Element} this
 */
Ext.CompositeElementLite.scrollTo = function (){
};

/**
 * Returns the current scroll position of the element.
 * @return {Object} An object containing the scroll position in the format {left: (scrollLeft), top: (scrollTop)}
 */
Ext.CompositeElementLite.getScroll = function (){
};

/**
 * Sets the element's visibility mode. When setVisible() is called it
 * will use this to determine whether to set the visibility or the display property.
 * @param {Number} visMode Ext.Element.VISIBILITY or Ext.Element.DISPLAY
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setVisibilityMode = function (){
};

/**
 * Perform custom animation on this element.
 * <DIV><UL class="mdetail-params">
 * <LI><U>Animation Properties</U></LI>
 * 
 * <P>The Animation Control Object enables gradual transitions for any member of an
 * element's style object that takes a numeric value including but not limited to
 * these properties:</P><DIV><UL class="mdetail-params">
 * <LI><TT>bottom, top, left, right</TT></LI>
 * <LI><TT>height, width</TT></LI>
 * <LI><TT>margin, padding</TT></LI>
 * <LI><TT>borderWidth</TT></LI>
 * <LI><TT>opacity</TT></LI>
 * <LI><TT>fontSize</TT></LI>
 * <LI><TT>lineHeight</TT></LI>
 * </UL></DIV>
 * 
 * 
 * <LI><U>Animation Property Attributes</U></LI>
 * 
 * <P>Each Animation Property is a config object with optional properties:</P>
 * <DIV><UL class="mdetail-params">
 * <LI><TT>by</TT>*  : relative change - start at current value, change by this value</LI>
 * <LI><TT>from</TT> : ignore current value, start from this value</LI>
 * <LI><TT>to</TT>*  : start at current value, go to this value</LI>
 * <LI><TT>unit</TT> : any allowable unit specification</LI>
 * <P>* do not specify both <TT>to</TT> and <TT>by</TT> for an animation property</P>
 * </UL></DIV>
 * 
 * <LI><U>Animation Types</U></LI>
 * 
 * <P>The supported animation types:</P><DIV><UL class="mdetail-params">
 * <LI><TT>'run'</TT> : Default
 * <PRE><CODE>
var el = Ext.get('complexEl');
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'run'      // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE>
 * </LI>
 * <LI><TT>'color'</TT>
 * <P>Animates transition of background, text, or border colors.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        color: { to: '#06e' },
        backgroundColor: { to: '#e06' }
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'color'    // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * 
 * <LI><TT>'motion'</TT>
 * <P>Animates the motion of an element to/from specific points using optional bezier
 * way points during transit.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
        points: {
            to: [50, 100],  // go to this point
            control: [      // optional bezier way points
                [ 600, 800],
                [-100, 200]
            ]
        }
    },
    3000,      // animation duration (milliseconds!)
    null,      // callback
    'easeOut', // easing method
    'motion'   // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * <LI><TT>'scroll'</TT>
 * <P>Animate horizontal or vertical scrolling of an overflowing page element.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        scroll: {to: [400, 300]}
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'scroll'   // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * </UL></DIV>
 * 
 * </UL></DIV>
 * 
 * @param {Object} args The animation control args
 * @param {Float} duration (optional) How long the animation lasts in seconds (defaults to <TT>.35</TT>)
 * @param {Function} onComplete (optional) Function to call when animation completes
 * @param {String} easing (optional) {@link Ext.Fx#easing} method to use (defaults to <TT>'easeOut'</TT>)
 * @param {String} animType (optional) <TT>'run'</TT> is the default. Can also be <TT>'color'</TT>,
 * <TT>'motion'</TT>, or <TT>'scroll'</TT>
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.animate = function (){
};

/*
 * @private Internal animation call
 */
Ext.CompositeElementLite.anim = function (){
};


Ext.CompositeElementLite.preanim = function (){
};

/**
 * Checks whether the element is currently visible using both visibility and display properties.         
 * @return {Boolean} True if the element is currently visible, else false
 */
Ext.CompositeElementLite.isVisible = function (){
};

/**
 * Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use
 * the display property to hide the element, otherwise it uses visibility. The default is to hide and show using the visibility property.
 * @param {Boolean} visible Whether the element is visible
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setVisible = function (){
};

/**
 * Toggles the element's visibility or display, depending on visibility mode.
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.toggle = function (){
};

/**
 * Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.
 * @param {Mixed} value Boolean value to display the element using its default display, or a string to set the display directly.
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.setDisplayed = function (){
};


Ext.CompositeElementLite.fixDisplay = function (){
};

/**
 * Hide this element - Uses display mode to determine whether to use "display" or "visibility". See {@link #setVisible}.
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.hide = function (){
};

/**
 * Show this element - Uses display mode to determine whether to use "display" or "visibility". See {@link #setVisible}.
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.CompositeElementLite.show = function (){
};


Ext.CompositeElementLite.switchStatements = function (){
};

/**
 * Slides the element into view.  An anchor point can be optionally passed to set the point of
 * origin for the slide effect.  This function automatically handles wrapping the element with
 * a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element in from the top
el.slideIn();

// custom: slide the element in from the right with a 2-second duration
el.slideIn('r', { duration: 2 });

// common config options shown with default values
el.slideIn('t', {
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.slideIn = function (){
};

/**
 * Slides the element out of view.  An anchor point can be optionally passed to set the end point
 * for the slide effect.  When the effect is completed, the element will be hidden (visibility = 
 * 'hidden') but block elements will still take up space in the document.  The element must be removed
 * from the DOM using the 'remove' config option if desired.  This function automatically handles 
 * wrapping the element with a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element out to the top
el.slideOut();

// custom: slide the element out to the right with a 2-second duration
el.slideOut('r', { duration: 2 });

// common config options shown with default values
el.slideOut('t', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.slideOut = function (){
};

/**
 * Fades the element out while slowly expanding it in all directions.  When the effect is completed, the 
 * element will be hidden (visibility = 'hidden') but block elements will still take up space in the document. 
 * The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.puff();

// common config options shown with default values
el.puff({
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.puff = function (){
};

/**
 * Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).
 * When the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still 
 * take up space in the document. The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.switchOff();

// all config options shown with default values
el.switchOff({
    easing: 'easeIn',
    duration: .3,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.switchOff = function (){
};

/**
 * Highlights the Element by setting a color (applies to the background-color by default, but can be
 * changed using the "attr" config option) and then fading back to the original color. If no original
 * color is available, you should provide the "endColor" config option which will be cleared after the animation.
 * Usage:
<PRE><CODE>
// default: highlight background to yellow
el.highlight();

// custom: highlight foreground text to blue for 2 seconds
el.highlight("0000ff", { attr: 'color', duration: 2 });

// common config options shown with default values
el.highlight("ffff9c", {
    attr: "background-color", //can be any valid CSS property (attribute) that supports a color value
    endColor: (current color) or "ffffff",
    easing: 'easeIn',
    duration: 1
});
</CODE></PRE>
 * @param {String} color (optional) The highlight color. Should be a 6 char hex color without the leading # (defaults to yellow: 'ffff9c')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.highlight = function (){
};

/**
 * Shows a ripple of exploding, attenuating borders to draw attention to an Element.
 * Usage:
<PRE><CODE>
// default: a single light blue ripple
el.frame();

// custom: 3 red ripples lasting 3 seconds total
el.frame("ff0000", 3, { duration: 3 });

// common config options shown with default values
el.frame("C3DAF9", 1, {
    duration: 1 //duration of each individual ripple.
    // Note: Easing is not configurable and will be ignored if included
});
</CODE></PRE>
 * @param {String} color (optional) The color of the border.  Should be a 6 char hex color without the leading # (defaults to light blue: 'C3DAF9').
 * @param {Number} count (optional) The number of ripples to display (defaults to 1)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.frame = function (){
};

/**
 * Creates a pause before any subsequent queued effects begin.  If there are
 * no effects queued after the pause it will have no effect.
 * Usage:
<PRE><CODE>
el.pause(1);
</CODE></PRE>
 * @param {Number} seconds The length of time to pause (in seconds)
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.pause = function (){
};

/**
 * Fade an element in (from transparent to opaque).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.
 * Usage:
<PRE><CODE>
// default: fade in from opacity 0 to 100%
el.fadeIn();

// custom: fade in from opacity 0 to 75% over 2 seconds
el.fadeIn({ endOpacity: .75, duration: 2});

// common config options shown with default values
el.fadeIn({
    endOpacity: 1, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.fadeIn = function (){
};

/**
 * Fade an element out (from opaque to transparent).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.  Note that IE may require
 * <TT>{@link #useDisplay}:true</TT> in order to redisplay correctly.
 * Usage:
<PRE><CODE>
// default: fade out from the element's current opacity to 0
el.fadeOut();

// custom: fade out from the element's current opacity to 25% over 2 seconds
el.fadeOut({ endOpacity: .25, duration: 2});

// common config options shown with default values
el.fadeOut({
    endOpacity: 0, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.fadeOut = function (){
};

/**
 * Animates the transition of an element's dimensions from a starting height/width
 * to an ending height/width.  This method is a convenience implementation of {@link shift}.
 * Usage:
<PRE><CODE>
// change height and width to 100x100 pixels
el.scale(100, 100);

// common config options shown with default values.  The height and width will default to
// the element's existing values if passed as null.
el.scale(
    [element's width],
    [element's height], {
        easing: 'easeOut',
        duration: .35
    }
);
</CODE></PRE>
 * @param {Number} width  The new width (pass undefined to keep the original width)
 * @param {Number} height  The new height (pass undefined to keep the original height)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.scale = function (){
};

/**
 * Animates the transition of any combination of an element's dimensions, xy position and/or opacity.
 * Any of these properties not specified in the config object will not be changed.  This effect 
 * requires that at least one new dimension, position or opacity setting must be passed in on
 * the config object in order for the function to have any effect.
 * Usage:
<PRE><CODE>
// slide the element horizontally to x position 200 while changing the height and opacity
el.shift({ x: 200, height: 50, opacity: .8 });

// common config options shown with default values.
el.shift({
    width: [element's width],
    height: [element's height],
    x: [element's x position],
    y: [element's y position],
    opacity: [element's opacity],
    easing: 'easeOut',
    duration: .35
});
</CODE></PRE>
 * @param {Object} options  Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.shift = function (){
};

/**
 * Slides the element while fading it out of view.  An anchor point can be optionally passed to set the 
 * ending point of the effect.
 * Usage:
 *<PRE><CODE>
// default: slide the element downward while fading out
el.ghost();

// custom: slide the element out to the right with a 2-second duration
el.ghost('r', { duration: 2 });

// common config options shown with default values
el.ghost('b', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to bottom: 'b')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.ghost = function (){
};

/**
 * Ensures that all effects queued after syncFx is called on the element are
 * run concurrently.  This is the opposite of {@link #sequenceFx}.
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.syncFx = function (){
};

/**
 * Ensures that all effects queued after sequenceFx is called on the element are
 * run in sequence.  This is the opposite of {@link #syncFx}.
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.sequenceFx = function (){
};

/* @private */
Ext.CompositeElementLite.nextFx = function (){
};

/**
 * Returns true if the element has any effects actively running or queued, else returns false.
 * @return {Boolean} True if element has active effects, else false
 */
Ext.CompositeElementLite.hasActiveFx = function (){
};

/**
 * Stops any running effects and clears the element's internal effects queue if it contains
 * any additional effects that haven't started yet.
 * @return {Ext.Element} The Element
 */
Ext.CompositeElementLite.stopFx = function (){
};

/* @private */
Ext.CompositeElementLite.beforeFx = function (){
};

/**
 * Returns true if the element is currently blocking so that no other effect can be queued
 * until this effect is finished, else returns false if blocking is not set.  This is commonly
 * used to ensure that an effect initiated by a user action runs to completion prior to the
 * same effect being restarted (e.g., firing only one effect even if the user clicks several times).
 * @return {Boolean} True if blocking, else false
 */
Ext.CompositeElementLite.hasFxBlock = function (){
};

/* @private */
Ext.CompositeElementLite.queueFx = function (){
};

/* @private */
Ext.CompositeElementLite.fxWrap = function (){
};

/* @private */
Ext.CompositeElementLite.fxUnwrap = function (){
};

/* @private */
Ext.CompositeElementLite.getFxRestore = function (){
};

/* @private */
Ext.CompositeElementLite.afterFx = function (){
};

/* @private */
Ext.CompositeElementLite.fxanim = function (){
};


Ext.CompositeElementLite.resize = function (){
};

/**
 * Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function)
 * @param {Object} o The object with the attributes
 * @param {Boolean} useSet (optional) false to override the default setAttribute to use expandos.
 * @return {Ext.Element} this
 */
Ext.Element.set = function (o,useSet){
};

/**
 * The default unit to append to CSS values where a unit isn't provided (defaults to px).
 * @type String
 */
Ext.Element.defaultUnit = "";

/**
 * Returns true if this element matches the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @return {Boolean} True if this element matches the selector, else false
 */
Ext.Element.is = function (simpleSelector){
};

/**
 * Tries to focus the element. Any exceptions are caught and ignored.
 * @param {Number} defer (optional) Milliseconds to defer the focus
 * @return {Ext.Element} this
 */
Ext.Element.focus = function (defer,dom){
};

/**
 * Tries to blur the element. Any exceptions are caught and ignored.
 * @return {Ext.Element} this
 */
Ext.Element.blur = function (){
};

/**
 * Returns the value of the "value" attribute
 * @param {Boolean} asNumber true to parse the value as a number
 * @return {String/Number}
 */
Ext.Element.getValue = function (asNumber){
};

/**
 * Appends an event handler to this element.  The shorthand version {@link #on} is equivalent.
 * @param {String} eventName The name of event to handle.
 * @param {Function} fn The handler function the event invokes. This function is passed
 * the following parameters:<UL>
 * <LI><B>evt</B> : EventObject<DIV class="sub-desc">The {@link Ext.EventObject EventObject} describing the event.</DIV></LI>
 * <LI><B>el</B> : HtmlElement<DIV class="sub-desc">The DOM element which was the target of the event.
 * Note that this may be filtered by using the <TT>delegate</TT> option.</DIV></LI>
 * <LI><B>o</B> : Object<DIV class="sub-desc">The options object from the addListener call.</DIV></LI>
 * </UL>
 * @param {Object} scope (optional) The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to this Element.</B>.
 * @param {Object} options (optional) An object containing handler configuration properties.
 * This may contain any of the following properties:<UL>
 * <LI><B>scope</B> Object : <DIV class="sub-desc">The scope (<CODE><B>this</B></CODE> reference) in which the handler function is executed.
 * <B>If omitted, defaults to this Element.</B></DIV></LI>
 * <LI><B>delegate</B> String: <DIV class="sub-desc">A simple selector to filter the target or look for a descendant of the target. See below for additional details.</DIV></LI>
 * <LI><B>stopEvent</B> Boolean: <DIV class="sub-desc">True to stop the event. That is stop propagation, and prevent the default action.</DIV></LI>
 * <LI><B>preventDefault</B> Boolean: <DIV class="sub-desc">True to prevent the default action</DIV></LI>
 * <LI><B>stopPropagation</B> Boolean: <DIV class="sub-desc">True to prevent event propagation</DIV></LI>
 * <LI><B>normalized</B> Boolean: <DIV class="sub-desc">False to pass a browser event to the handler function instead of an Ext.EventObject</DIV></LI>
 * <LI><B>target</B> Ext.Element: <DIV class="sub-desc">Only call the handler if the event was fired on the target Element, <I>not</I> if the event was bubbled up from a child node.</DIV></LI>
 * <LI><B>delay</B> Number: <DIV class="sub-desc">The number of milliseconds to delay the invocation of the handler after the event fires.</DIV></LI>
 * <LI><B>single</B> Boolean: <DIV class="sub-desc">True to add a handler to handle just the next firing of the event, and then remove itself.</DIV></LI>
 * <LI><B>buffer</B> Number: <DIV class="sub-desc">Causes the handler to be scheduled to run in an {@link Ext.util.DelayedTask} delayed
 * by the specified number of milliseconds. If the event fires again within that time, the original
 * handler is <EM>not</EM> invoked, but the new handler is scheduled in its place.</DIV></LI>
 * </UL><BR/>
 * <P>
 * <B>Combining Options</B><BR/>
 * In the following examples, the shorthand form {@link #on} is used rather than the more verbose
 * addListener.  The two are equivalent.  Using the options argument, it is possible to combine different
 * types of listeners:<BR/>
 * <BR/>
 * A delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the
 * options object. The options object is available as the third parameter in the handler function.</P><DIV style="margin: 5px 20px 20px;">
 * Code:<PRE><CODE>
el.on('click', this.onClick, this, {
    single: true,
    delay: 100,
    stopEvent : true,
    forumId: 4
});</CODE></PRE>
 * <P>
 * <B>Attaching multiple handlers in 1 call</B><BR/>
 * The method also allows for a single argument to be passed which is a config object containing properties
 * which specify multiple handlers.</P>
 * <P>
 * Code:</P><PRE><CODE>
el.on({
    'click' : {
        fn: this.onClick,
        scope: this,
        delay: 100
    },
    'mouseover' : {
        fn: this.onMouseOver,
        scope: this
    },
    'mouseout' : {
        fn: this.onMouseOut,
        scope: this
    }
});</CODE></PRE>
 * <P>
 * Or a shorthand syntax:<BR/>
 * Code:</P><PRE><CODE>
el.on({
    'click' : this.onClick,
    'mouseover' : this.onMouseOver,
    'mouseout' : this.onMouseOut,
    scope: this
});
 * </CODE></PRE>
 * <P><B>delegate</B></P>
 * <P>This is a configuration option that you can pass along when registering a handler for
 * an event to assist with event delegation. Event delegation is a technique that is used to
 * reduce memory consumption and prevent exposure to memory-leaks. By registering an event
 * for a container element as opposed to each element within a container. By setting this
 * configuration option to a simple selector, the target element will be filtered to look for
 * a descendant of the target.
 * For example:</P><PRE><CODE>
// using this markup:
&lt;div id='elId'&gt;
    &lt;p id='p1'&gt;paragraph one&lt;/p&gt;
    &lt;p id='p2' class='clickable'&gt;paragraph two&lt;/p&gt;
    &lt;p id='p3'&gt;paragraph three&lt;/p&gt;
&lt;/div&gt;
// utilize event delegation to registering just one handler on the container element:
el = Ext.get('elId');
el.on(
    'click',
    function(e,t) {
        // handle click
        console.info(t.id); // 'p2'
    },
    this,
    {
        // filter the target element to be a descendant with the class 'clickable'
        delegate: '.clickable'
    }
);
 * </CODE></PRE>
 * @return {Ext.Element} this
 */
Ext.Element.addListener = function (eventName,fn,scope,options){
};

/**
 * Removes an event handler from this element.  The shorthand version {@link #un} is equivalent.
 * <B>Note</B>: if a <I>scope</I> was explicitly specified when {@link #addListener adding} the
 * listener, the same scope must be specified here.
 * Example:
 * <PRE><CODE>
el.removeListener('click', this.handlerFn);
// or
el.un('click', this.handlerFn);
</CODE></PRE>
 * @param {String} eventName The name of the event from which to remove the handler.
 * @param {Function} fn The handler function to remove. <B>This must be a reference to the function passed into the {@link #addListener} call.</B>
 * @param {Object} scope If a scope (<B><CODE>this</CODE></B> reference) was specified when the listener was added,
 * then this must refer to the same object.
 * @return {Ext.Element} this
 */
Ext.Element.removeListener = function (eventName,fn,scope){
};

/**
 * Removes all previous added listeners from this element
 * @return {Ext.Element} this
 */
Ext.Element.removeAllListeners = function (){
};

/**
 * Recursively removes all previous added listeners from this element and its children
 * @return {Ext.Element} this
 */
Ext.Element.purgeAllListeners = function (){
};

/**
 * @private Test if size has a unit, otherwise appends the default
 */
Ext.Element.addUnits = function (size){
};

/**
 * <P>Updates the <A href="http://developer.mozilla.org/en/DOM/element.innerHTML">innerHTML</A> of this Element
 * from a specified URL. Note that this is subject to the <A href="http://en.wikipedia.org/wiki/Same_origin_policy">Same Origin Policy</A></P>
 * <P>Updating innerHTML of an element will <B>not</B> execute embedded <TT>&lt;script&gt;</TT> elements. This is a browser restriction.</P>
 * @param {Mixed} options. Either a sring containing the URL from which to load the HTML, or an {@link Ext.Ajax#request} options object specifying
 * exactly how to request the HTML.
 * @return {Ext.Element} this
 */
Ext.Element.load = function (url,params,cb){
};

/**
 * Tests various css rules/browsers to determine if this element uses a border box
 * @return {Boolean}
 */
Ext.Element.isBorderBox = function (){
};

/**
 * <P>Removes this element's dom reference.  Note that event and cache removal is handled at {@link Ext#removeNode}</P>
 */
Ext.Element.remove = function (){
};

/**
 * Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.
 * @param {Function} overFn The function to call when the mouse enters the Element.
 * @param {Function} outFn The function to call when the mouse leaves the Element.
 * @param {Object} scope (optional) The scope (<CODE>this</CODE> reference) in which the functions are executed. Defaults to the Element's DOM element.
 * @param {Object} options (optional) Options for the listener. See {@link Ext.util.Observable#addListener the <TT>options</TT> parameter}.
 * @return {Ext.Element} this
 */
Ext.Element.hover = function (overFn,outFn,scope,options){
};

/**
 * Returns true if this element is an ancestor of the passed element
 * @param {HTMLElement/String} el The element to check
 * @return {Boolean} True if this element is an ancestor of el, else false
 */
Ext.Element.contains = function (el){
};

/**
 * Returns the value of a namespaced attribute from the element's underlying DOM node.
 * @param {String} namespace The namespace in which to look for the attribute
 * @param {String} name The attribute name
 * @return {String} The attribute value
 * @deprecated
 */
Ext.Element.getAttributeNS = function (ns,name){
};

/**
 * Returns the value of an attribute from the element's underlying DOM node.
 * @param {String} name The attribute name
 * @param {String} namespace (optional) The namespace in which to look for the attribute
 * @return {String} The attribute value
 */
Ext.Element.getAttribute = function (name,ns){
};

/**
 * Update the innerHTML of this element
 * @param {String} html The new HTML
 * @return {Ext.Element} this
 */
Ext.Element.update = function (html){
};


Ext.Element.on = function (eventName,fn,scope,options){
};


Ext.Element.un = function (eventName,fn,scope){
};


Ext.Element.autoBoxAdjust = false;

/**
 * Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to search as a number or element (defaults to 50 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLElement} The matching DOM node (or null if no match was found)
 */
Ext.Element.findParent = function (simpleSelector,maxDepth,returnEl){
};

/**
 * Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to
	            search as a number or element (defaults to 10 || document.body)
 * @param {Boolean} returnEl (optional) True to return a Ext.Element object instead of DOM node
 * @return {HTMLElement} The matching DOM node (or null if no match was found)
 */
Ext.Element.findParentNode = function (simpleSelector,maxDepth,returnEl){
};

/**
 * Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first-child).
 * This is a shortcut for findParentNode() that always returns an Ext.Element.
 * @param {String} selector The simple selector to test
 * @param {Number/Mixed} maxDepth (optional) The max depth to
	            search as a number or element (defaults to 10 || document.body)
 * @return {Ext.Element} The matching DOM node (or null if no match was found)
 */
Ext.Element.up = function (simpleSelector,maxDepth){
};

/**
 * Creates a {@link Ext.CompositeElement} for child nodes based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @return {CompositeElement/CompositeElementLite} The composite element
 */
Ext.Element.select = function (selector){
};

/**
 * Selects child nodes based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @return {Array} An array of the matched nodes
 */
Ext.Element.query = function (selector){
};

/**
 * Selects a single child at any depth below this element based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @param {Boolean} returnDom (optional) True to return the DOM node instead of Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The child Ext.Element (or DOM node if returnDom = true)
 */
Ext.Element.child = function (selector,returnDom){
};

/**
 * Selects a single *direct* child based on the passed CSS selector (the selector should not contain an id).
 * @param {String} selector The CSS selector
 * @param {Boolean} returnDom (optional) True to return the DOM node instead of Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The child Ext.Element (or DOM node if returnDom = true)
 */
Ext.Element.down = function (selector,returnDom){
};

/**
 * Gets the parent node for this element, optionally chaining up trying to match a selector
 * @param {String} selector (optional) Find a parent node that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The parent node or null
 */
Ext.Element.parent = function (selector,returnDom){
};

/**
 * Gets the next sibling, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The next sibling or null
 */
Ext.Element.next = function (selector,returnDom){
};

/**
 * Gets the previous sibling, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The previous sibling or null
 */
Ext.Element.prev = function (selector,returnDom){
};

/**
 * Gets the first child, skipping text nodes
 * @param {String} selector (optional) Find the next sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The first child or null
 */
Ext.Element.first = function (selector,returnDom){
};

/**
 * Gets the last child, skipping text nodes
 * @param {String} selector (optional) Find the previous sibling that matches the passed simple selector
 * @param {Boolean} returnDom (optional) True to return a raw dom node instead of an Ext.Element
 * @return {Ext.Element/HTMLElement} The last child or null
 */
Ext.Element.last = function (selector,returnDom){
};


Ext.Element.matchNode = function (dir,start,selector,returnDom){
};

/**
 * Appends the passed element(s) to this element
 * @param {String/HTMLElement/Array/Element/CompositeElement} el
 * @return {Ext.Element} this
 */
Ext.Element.appendChild = function (el){
};

/**
 * Appends this element to the passed element
 * @param {Mixed} el The new parent element
 * @return {Ext.Element} this
 */
Ext.Element.appendTo = function (el){
};

/**
 * Inserts this element before the passed element in the DOM
 * @param {Mixed} el The element before which this element will be inserted
 * @return {Ext.Element} this
 */
Ext.Element.insertBefore = function (el){
};

/**
 * Inserts this element after the passed element in the DOM
 * @param {Mixed} el The element to insert after
 * @return {Ext.Element} this
 */
Ext.Element.insertAfter = function (el){
};

/**
 * Inserts (or creates) an element (or DomHelper config) as the first child of this element
 * @param {Mixed/Object} el The id or element to insert or a DomHelper config to create and insert
 * @return {Ext.Element} The new child
 */
Ext.Element.insertFirst = function (el,returnDom){
};

/**
 * Replaces the passed element with this element
 * @param {Mixed} el The element to replace
 * @return {Ext.Element} this
 */
Ext.Element.replace = function (el){
};

/**
 * Replaces this element with the passed element
 * @param {Mixed/Object} el The new element or a DomHelper config of an element to create
 * @return {Ext.Element} this
 */
Ext.Element.replaceWith = function (el){
};

/**
 * Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child element.
 * @param {Object} config DomHelper element config object.  If no tag is specified (e.g., {tag:'input'}) then a div will be
 * automatically generated with the specified attributes.
 * @param {HTMLElement} insertBefore (optional) a child element of this element
 * @param {Boolean} returnDom (optional) true to return the dom node instead of creating an Element
 * @return {Ext.Element} The new child element
 */
Ext.Element.createChild = function (config,insertBefore,returnDom){
};

/**
 * Creates and wraps this element with another element
 * @param {Object} config (optional) DomHelper element config object for the wrapper element or null for an empty div
 * @param {Boolean} returnDom (optional) True to return the raw DOM element instead of Ext.Element
 * @return {HTMLElement/Element} The newly created wrapper element
 */
Ext.Element.wrap = function (config,returnDom){
};

/**
 * Inserts an html fragment into this element
 * @param {String} where Where to insert the html in relation to this element - beforeBegin, afterBegin, beforeEnd, afterEnd.
 * @param {String} html The HTML fragment
 * @param {Boolean} returnEl (optional) True to return an Ext.Element (defaults to false)
 * @return {HTMLElement/Ext.Element} The inserted node (or nearest related if more than 1 inserted)
 */
Ext.Element.insertHtml = function (where,html,returnEl){
};


Ext.Element.adjustWidth = function (width){
};


Ext.Element.adjustHeight = function (height){
};

/**
 * Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.
 * @param {String/Array} className The CSS class to add, or an array of classes
 * @return {Ext.Element} this
 */
Ext.Element.addClass = function (className){
};

/**
 * Adds one or more CSS classes to this element and removes the same class(es) from all siblings.
 * @param {String/Array} className The CSS class to add, or an array of classes
 * @return {Ext.Element} this
 */
Ext.Element.radioClass = function (className){
};

/**
 * Removes one or more CSS classes from the element.
 * @param {String/Array} className The CSS class to remove, or an array of classes
 * @return {Ext.Element} this
 */
Ext.Element.removeClass = function (className){
};

/**
 * Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).
 * @param {String} className The CSS class to toggle
 * @return {Ext.Element} this
 */
Ext.Element.toggleClass = function (className){
};

/**
 * Checks if the specified CSS class exists on this element's DOM node.
 * @param {String} className The CSS class to check for
 * @return {Boolean} True if the class exists, else false
 */
Ext.Element.hasClass = function (className){
};

/**
 * Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.
 * @param {String} oldClassName The CSS class to replace
 * @param {String} newClassName The replacement CSS class
 * @return {Ext.Element} this
 */
Ext.Element.replaceClass = function (oldClassName,newClassName){
};


Ext.Element.isStyle = function (style,val){
};

/**
 * Normalizes currentStyle and computedStyle.
 * @param {String} property The style property whose value is returned.
 * @return {String} The current value of the style property for this element.
 */
Ext.Element.getStyle = function (prop){
};

/**
 * Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values
 * are convert to standard 6 digit hex color.
 * @param {String} attr The css attribute
 * @param {String} defaultValue The default value to use when a valid color isn't found
 * @param {String} prefix (optional) defaults to #. Use an empty string when working with
 * color anims.
 */
Ext.Element.getColor = function (attr,defaultValue,prefix){
};

/**
 * Wrapper for setting style properties, also takes single object parameter of multiple styles.
 * @param {String/Object} property The style property to be set, or an object of multiple styles.
 * @param {String} value (optional) The value to apply to the given property, or null if an object was passed.
 * @return {Ext.Element} this
 */
Ext.Element.setStyle = function (prop,value){
};

/**
 * Set the opacity of the element
 * @param {Float} opacity The new opacity. 0 = transparent, .5 = 50% visibile, 1 = fully visible, etc
 * @param {Boolean/Object} animate (optional) a standard Element animation config object or <TT>true</TT> for
 * the default animation (<TT>{duration: .35, easing: 'easeIn'}</TT>)
 * @return {Ext.Element} this
 */
Ext.Element.setOpacity = function (opacity,animate){
};

/**
 * Clears any opacity settings from this element. Required in some cases for IE.
 * @return {Ext.Element} this
 */
Ext.Element.clearOpacity = function (){
};

/**
 * Returns the offset height of the element
 * @param {Boolean} contentHeight (optional) true to get the height minus borders and padding
 * @return {Number} The element's height
 */
Ext.Element.getHeight = function (contentHeight){
};

/**
 * Returns the offset width of the element
 * @param {Boolean} contentWidth (optional) true to get the width minus borders and padding
 * @return {Number} The element's width
 */
Ext.Element.getWidth = function (contentWidth){
};

/**
 * Set the width of this Element.
 * @param {Mixed} width The new width. This may be one of:<DIV class="mdetail-params"><UL>
 * <LI>A Number specifying the new width in this Element's {@link #defaultUnit}s (by default, pixels).</LI>
 * <LI>A String used to set the CSS width style. Animation may <B>not</B> be used.
 * </LI></UL></DIV>
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.setWidth = function (width,animate){
};

/**
 * Set the height of this Element.
 * <PRE><CODE>
// change the height to 200px and animate with default configuration
Ext.fly('elementId').setHeight(200, true);

// change the height to 150px and animate with a custom configuration
Ext.fly('elId').setHeight(150, {
    duration : .5, // animation will have a duration of .5 seconds
    // will change the content to "finished"
    callback: function(){ this.{@link #update}("finished"); }
});
 * </CODE></PRE>
 * @param {Mixed} height The new height. This may be one of:<DIV class="mdetail-params"><UL>
 * <LI>A Number specifying the new height in this Element's {@link #defaultUnit}s (by default, pixels.)</LI>
 * <LI>A String used to set the CSS height style. Animation may <B>not</B> be used.</LI>
 * </UL></DIV>
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.setHeight = function (height,animate){
};

/**
 * Gets the width of the border(s) for the specified side(s)
 * @param {String} side Can be t, l, r, b or any combination of those to add multiple values. For example,
 * passing <TT>'lr'</TT> would get the border <B><U>l</U></B>eft width + the border <B><U>r</U></B>ight width.
 * @return {Number} The width of the sides passed added together
 */
Ext.Element.getBorderWidth = function (side){
};

/**
 * Gets the width of the padding(s) for the specified side(s)
 * @param {String} side Can be t, l, r, b or any combination of those to add multiple values. For example,
 * passing <TT>'lr'</TT> would get the padding <B><U>l</U></B>eft + the padding <B><U>r</U></B>ight.
 * @return {Number} The padding of the sides passed added together
 */
Ext.Element.getPadding = function (side){
};

/**
 *  Store the current overflow setting and clip overflow on the element - use <TT>{@link #unclip}</TT> to remove
 * @return {Ext.Element} this
 */
Ext.Element.clip = function (){
};

/**
 *  Return clipping (overflow) to original clipping before <TT>{@link #clip}</TT> was called
 * @return {Ext.Element} this
 */
Ext.Element.unclip = function (){
};


Ext.Element.addStyles = function (sides,styles){
};

/**
 * @constructor
 */
Ext.Element.margins = function() {}; 

Ext.Element.margins.l = "";


Ext.Element.margins.r = "";


Ext.Element.margins.t = "";


Ext.Element.margins.b = "";

/**
 * Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The X position of the element
 */
Ext.Element.getX = function (){
};

/**
 * Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Number} The Y position of the element
 */
Ext.Element.getY = function (){
};

/**
 * Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @return {Array} The XY position of the element
 */
Ext.Element.getXY = function (){
};

/**
 * Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have display:none to have page coordinates.
 * @param {Mixed} element The element to get the offsets from.
 * @return {Array} The XY page offsets (e.g. [100, -200])
 */
Ext.Element.getOffsetsTo = function (el){
};

/**
 * Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The X position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.setX = function (x,animate){
};

/**
 * Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} The Y position of the element
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.setY = function (y,animate){
};

/**
 * Sets the element's left position directly using CSS style (instead of {@link #setX}).
 * @param {String} left The left CSS property value
 * @return {Ext.Element} this
 */
Ext.Element.setLeft = function (left){
};

/**
 * Sets the element's top position directly using CSS style (instead of {@link #setY}).
 * @param {String} top The top CSS property value
 * @return {Ext.Element} this
 */
Ext.Element.setTop = function (top){
};

/**
 * Sets the element's CSS right style.
 * @param {String} right The right CSS property value
 * @return {Ext.Element} this
 */
Ext.Element.setRight = function (right){
};

/**
 * Sets the element's CSS bottom style.
 * @param {String} bottom The bottom CSS property value
 * @return {Ext.Element} this
 */
Ext.Element.setBottom = function (bottom){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Array} pos Contains X &amp; Y [x, y] values for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.setXY = function (pos,animate){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} x X value for new position (coordinates are page-based)
 * @param {Number} y Y value for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.setLocation = function (x,y,animate){
};

/**
 * Sets the position of the element in page coordinates, regardless of how the element is positioned.
 * The element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).
 * @param {Number} x X value for new position (coordinates are page-based)
 * @param {Number} y Y value for new position (coordinates are page-based)
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.moveTo = function (x,y,animate){
};

/**
 * Gets the left X coordinate
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.Element.getLeft = function (local){
};

/**
 * Gets the right X coordinate of the element (element X position + element width)
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.Element.getRight = function (local){
};

/**
 * Gets the top Y coordinate
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.Element.getTop = function (local){
};

/**
 * Gets the bottom Y coordinate of the element (element Y position + element height)
 * @param {Boolean} local True to get the local css position instead of page coordinate
 * @return {Number}
 */
Ext.Element.getBottom = function (local){
};

/**
 * Initializes positioning on this element. If a desired position is not passed, it will make the
 * the element positioned relative IF it is not already positioned.
 * @param {String} pos (optional) Positioning to use "relative", "absolute" or "fixed"
 * @param {Number} zIndex (optional) The zIndex to apply
 * @param {Number} x (optional) Set the page X position
 * @param {Number} y (optional) Set the page Y position
 */
Ext.Element.position = function (pos,zIndex,x,y){
};

/**
 * Clear positioning back to the default when the document was loaded
 * @param {String} value (optional) The value to use for the left,right,top,bottom, defaults to '' (empty string). You could use 'auto'.
 * @return {Ext.Element} this
 */
Ext.Element.clearPositioning = function (value){
};

/**
 * Gets an object with all CSS positioning properties. Useful along with setPostioning to get
 * snapshot before performing an update and then restoring the element.
 * @return {Object}
 */
Ext.Element.getPositioning = function (){
};

/**
 * Set positioning with an object returned by getPositioning().
 * @param {Object} posCfg
 * @return {Ext.Element} this
 */
Ext.Element.setPositioning = function (pc){
};

/**
 * Translates the passed page coordinates into left/top css values for this element
 * @param {Number/Array} x The page x or an array containing [x, y]
 * @param {Number} y (optional) The page y, required if x is not an array
 * @return {Object} An object with left and top properties. e.g. {left: (value), top: (value)}
 */
Ext.Element.translatePoints = function (x,y){
};


Ext.Element.animTest = function (args,animate,i){
};

/**
 * Returns true if this element is scrollable.
 * @return {Boolean}
 */
Ext.Element.isScrollable = function (){
};

/**
 * Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it will try to do it. For auto bounds checking, use scroll().
 * @param {String} side Either "left" for scrollLeft values or "top" for scrollTop values.
 * @param {Number} value The new scroll value.
 * @return {Element} this
 */
Ext.Element.scrollTo = function (side,value){
};

/**
 * Returns the current scroll position of the element.
 * @return {Object} An object containing the scroll position in the format {left: (scrollLeft), top: (scrollTop)}
 */
Ext.Element.getScroll = function (){
};

/**
 * The element's default display mode  (defaults to "")
 * @type String
 */
Ext.Element.originalDisplay = "";


Ext.Element.visibilityMode = 0;

/**
 * Sets the element's visibility mode. When setVisible() is called it
 * will use this to determine whether to set the visibility or the display property.
 * @param {Number} visMode Ext.Element.VISIBILITY or Ext.Element.DISPLAY
 * @return {Ext.Element} this
 */
Ext.Element.setVisibilityMode = function (visMode){
};

/**
 * Perform custom animation on this element.
 * <DIV><UL class="mdetail-params">
 * <LI><U>Animation Properties</U></LI>
 * 
 * <P>The Animation Control Object enables gradual transitions for any member of an
 * element's style object that takes a numeric value including but not limited to
 * these properties:</P><DIV><UL class="mdetail-params">
 * <LI><TT>bottom, top, left, right</TT></LI>
 * <LI><TT>height, width</TT></LI>
 * <LI><TT>margin, padding</TT></LI>
 * <LI><TT>borderWidth</TT></LI>
 * <LI><TT>opacity</TT></LI>
 * <LI><TT>fontSize</TT></LI>
 * <LI><TT>lineHeight</TT></LI>
 * </UL></DIV>
 * 
 * 
 * <LI><U>Animation Property Attributes</U></LI>
 * 
 * <P>Each Animation Property is a config object with optional properties:</P>
 * <DIV><UL class="mdetail-params">
 * <LI><TT>by</TT>*  : relative change - start at current value, change by this value</LI>
 * <LI><TT>from</TT> : ignore current value, start from this value</LI>
 * <LI><TT>to</TT>*  : start at current value, go to this value</LI>
 * <LI><TT>unit</TT> : any allowable unit specification</LI>
 * <P>* do not specify both <TT>to</TT> and <TT>by</TT> for an animation property</P>
 * </UL></DIV>
 * 
 * <LI><U>Animation Types</U></LI>
 * 
 * <P>The supported animation types:</P><DIV><UL class="mdetail-params">
 * <LI><TT>'run'</TT> : Default
 * <PRE><CODE>
var el = Ext.get('complexEl');
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'run'      // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE>
 * </LI>
 * <LI><TT>'color'</TT>
 * <P>Animates transition of background, text, or border colors.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        color: { to: '#06e' },
        backgroundColor: { to: '#e06' }
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'color'    // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * 
 * <LI><TT>'motion'</TT>
 * <P>Animates the motion of an element to/from specific points using optional bezier
 * way points during transit.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        borderWidth: {to: 3, from: 0},
        opacity: {to: .3, from: 1},
        height: {to: 50, from: el.getHeight()},
        width: {to: 300, from: el.getWidth()},
        top  : {by: - 100, unit: 'px'},
        points: {
            to: [50, 100],  // go to this point
            control: [      // optional bezier way points
                [ 600, 800],
                [-100, 200]
            ]
        }
    },
    3000,      // animation duration (milliseconds!)
    null,      // callback
    'easeOut', // easing method
    'motion'   // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * <LI><TT>'scroll'</TT>
 * <P>Animate horizontal or vertical scrolling of an overflowing page element.</P>
 * <PRE><CODE>
el.animate(
    // animation control object
    {
        scroll: {to: [400, 300]}
    },
    0.35,      // animation duration
    null,      // callback
    'easeOut', // easing method
    'scroll'   // animation type ('run','color','motion','scroll')    
);
 * </CODE></PRE> 
 * </LI>
 * </UL></DIV>
 * 
 * </UL></DIV>
 * 
 * @param {Object} args The animation control args
 * @param {Float} duration (optional) How long the animation lasts in seconds (defaults to <TT>.35</TT>)
 * @param {Function} onComplete (optional) Function to call when animation completes
 * @param {String} easing (optional) {@link Ext.Fx#easing} method to use (defaults to <TT>'easeOut'</TT>)
 * @param {String} animType (optional) <TT>'run'</TT> is the default. Can also be <TT>'color'</TT>,
 * <TT>'motion'</TT>, or <TT>'scroll'</TT>
 * @return {Ext.Element} this
 */
Ext.Element.animate = function (args,duration,onComplete,easing,animType){
};

/*
 * @private Internal animation call
 */
Ext.Element.anim = function (args,opt,animType,defaultDur,defaultEase,cb){
};


Ext.Element.preanim = function (a,i){
};

/**
 * Checks whether the element is currently visible using both visibility and display properties.         
 * @return {Boolean} True if the element is currently visible, else false
 */
Ext.Element.isVisible = function (){
};

/**
 * Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use
 * the display property to hide the element, otherwise it uses visibility. The default is to hide and show using the visibility property.
 * @param {Boolean} visible Whether the element is visible
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.setVisible = function (visible,animate){
};

/**
 * Toggles the element's visibility or display, depending on visibility mode.
 * @param {Boolean/Object} animate (optional) True for the default animation, or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.toggle = function (animate){
};

/**
 * Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.
 * @param {Mixed} value Boolean value to display the element using its default display, or a string to set the display directly.
 * @return {Ext.Element} this
 */
Ext.Element.setDisplayed = function (value){
};


Ext.Element.fixDisplay = function (){
};

/**
 * Hide this element - Uses display mode to determine whether to use "display" or "visibility". See {@link #setVisible}.
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.hide = function (animate){
};

/**
 * Show this element - Uses display mode to determine whether to use "display" or "visibility". See {@link #setVisible}.
 * @param {Boolean/Object} animate (optional) true for the default animation or a standard Element animation config object
 * @return {Ext.Element} this
 */
Ext.Element.show = function (animate){
};


Ext.Element.switchStatements = function (key,fn,argHash){
};

/**
 * Slides the element into view.  An anchor point can be optionally passed to set the point of
 * origin for the slide effect.  This function automatically handles wrapping the element with
 * a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element in from the top
el.slideIn();

// custom: slide the element in from the right with a 2-second duration
el.slideIn('r', { duration: 2 });

// common config options shown with default values
el.slideIn('t', {
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.slideIn = function (anchor,o){
};

/**
 * Slides the element out of view.  An anchor point can be optionally passed to set the end point
 * for the slide effect.  When the effect is completed, the element will be hidden (visibility = 
 * 'hidden') but block elements will still take up space in the document.  The element must be removed
 * from the DOM using the 'remove' config option if desired.  This function automatically handles 
 * wrapping the element with a fixed-size container if needed.  See the Fx class overview for valid anchor point options.
 * Usage:
 *<PRE><CODE>
// default: slide the element out to the top
el.slideOut();

// custom: slide the element out to the right with a 2-second duration
el.slideOut('r', { duration: 2 });

// common config options shown with default values
el.slideOut('t', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to top: 't')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.slideOut = function (anchor,o){
};

/**
 * Fades the element out while slowly expanding it in all directions.  When the effect is completed, the 
 * element will be hidden (visibility = 'hidden') but block elements will still take up space in the document. 
 * The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.puff();

// common config options shown with default values
el.puff({
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.puff = function (o){
};

/**
 * Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).
 * When the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still 
 * take up space in the document. The element must be removed from the DOM using the 'remove' config option if desired.
 * Usage:
 *<PRE><CODE>
// default
el.switchOff();

// all config options shown with default values
el.switchOff({
    easing: 'easeIn',
    duration: .3,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.switchOff = function (o){
};

/**
 * Highlights the Element by setting a color (applies to the background-color by default, but can be
 * changed using the "attr" config option) and then fading back to the original color. If no original
 * color is available, you should provide the "endColor" config option which will be cleared after the animation.
 * Usage:
<PRE><CODE>
// default: highlight background to yellow
el.highlight();

// custom: highlight foreground text to blue for 2 seconds
el.highlight("0000ff", { attr: 'color', duration: 2 });

// common config options shown with default values
el.highlight("ffff9c", {
    attr: "background-color", //can be any valid CSS property (attribute) that supports a color value
    endColor: (current color) or "ffffff",
    easing: 'easeIn',
    duration: 1
});
</CODE></PRE>
 * @param {String} color (optional) The highlight color. Should be a 6 char hex color without the leading # (defaults to yellow: 'ffff9c')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.highlight = function (color,o){
};

/**
 * Shows a ripple of exploding, attenuating borders to draw attention to an Element.
 * Usage:
<PRE><CODE>
// default: a single light blue ripple
el.frame();

// custom: 3 red ripples lasting 3 seconds total
el.frame("ff0000", 3, { duration: 3 });

// common config options shown with default values
el.frame("C3DAF9", 1, {
    duration: 1 //duration of each individual ripple.
    // Note: Easing is not configurable and will be ignored if included
});
</CODE></PRE>
 * @param {String} color (optional) The color of the border.  Should be a 6 char hex color without the leading # (defaults to light blue: 'C3DAF9').
 * @param {Number} count (optional) The number of ripples to display (defaults to 1)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.frame = function (color,count,o){
};

/**
 * Creates a pause before any subsequent queued effects begin.  If there are
 * no effects queued after the pause it will have no effect.
 * Usage:
<PRE><CODE>
el.pause(1);
</CODE></PRE>
 * @param {Number} seconds The length of time to pause (in seconds)
 * @return {Ext.Element} The Element
 */
Ext.Element.pause = function (seconds){
};

/**
 * Fade an element in (from transparent to opaque).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.
 * Usage:
<PRE><CODE>
// default: fade in from opacity 0 to 100%
el.fadeIn();

// custom: fade in from opacity 0 to 75% over 2 seconds
el.fadeIn({ endOpacity: .75, duration: 2});

// common config options shown with default values
el.fadeIn({
    endOpacity: 1, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.fadeIn = function (o){
};

/**
 * Fade an element out (from opaque to transparent).  The ending opacity can be specified
 * using the <TT>{@link #endOpacity}</TT> config option.  Note that IE may require
 * <TT>{@link #useDisplay}:true</TT> in order to redisplay correctly.
 * Usage:
<PRE><CODE>
// default: fade out from the element's current opacity to 0
el.fadeOut();

// custom: fade out from the element's current opacity to 25% over 2 seconds
el.fadeOut({ endOpacity: .25, duration: 2});

// common config options shown with default values
el.fadeOut({
    endOpacity: 0, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.fadeOut = function (o){
};

/**
 * Animates the transition of an element's dimensions from a starting height/width
 * to an ending height/width.  This method is a convenience implementation of {@link shift}.
 * Usage:
<PRE><CODE>
// change height and width to 100x100 pixels
el.scale(100, 100);

// common config options shown with default values.  The height and width will default to
// the element's existing values if passed as null.
el.scale(
    [element's width],
    [element's height], {
        easing: 'easeOut',
        duration: .35
    }
);
</CODE></PRE>
 * @param {Number} width  The new width (pass undefined to keep the original width)
 * @param {Number} height  The new height (pass undefined to keep the original height)
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.scale = function (w,h,o){
};

/**
 * Animates the transition of any combination of an element's dimensions, xy position and/or opacity.
 * Any of these properties not specified in the config object will not be changed.  This effect 
 * requires that at least one new dimension, position or opacity setting must be passed in on
 * the config object in order for the function to have any effect.
 * Usage:
<PRE><CODE>
// slide the element horizontally to x position 200 while changing the height and opacity
el.shift({ x: 200, height: 50, opacity: .8 });

// common config options shown with default values.
el.shift({
    width: [element's width],
    height: [element's height],
    x: [element's x position],
    y: [element's y position],
    opacity: [element's opacity],
    easing: 'easeOut',
    duration: .35
});
</CODE></PRE>
 * @param {Object} options  Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.shift = function (o){
};

/**
 * Slides the element while fading it out of view.  An anchor point can be optionally passed to set the 
 * ending point of the effect.
 * Usage:
 *<PRE><CODE>
// default: slide the element downward while fading out
el.ghost();

// custom: slide the element out to the right with a 2-second duration
el.ghost('r', { duration: 2 });

// common config options shown with default values
el.ghost('b', {
    easing: 'easeOut',
    duration: .5,
    remove: false,
    useDisplay: false
});
</CODE></PRE>
 * @param {String} anchor (optional) One of the valid Fx anchor positions (defaults to bottom: 'b')
 * @param {Object} options (optional) Object literal with any of the Fx config options
 * @return {Ext.Element} The Element
 */
Ext.Element.ghost = function (anchor,o){
};

/**
 * Ensures that all effects queued after syncFx is called on the element are
 * run concurrently.  This is the opposite of {@link #sequenceFx}.
 * @return {Ext.Element} The Element
 */
Ext.Element.syncFx = function (){
};

/**
 * Ensures that all effects queued after sequenceFx is called on the element are
 * run in sequence.  This is the opposite of {@link #syncFx}.
 * @return {Ext.Element} The Element
 */
Ext.Element.sequenceFx = function (){
};

/* @private */
Ext.Element.nextFx = function (){
};

/**
 * Returns true if the element has any effects actively running or queued, else returns false.
 * @return {Boolean} True if element has active effects, else false
 */
Ext.Element.hasActiveFx = function (){
};

/**
 * Stops any running effects and clears the element's internal effects queue if it contains
 * any additional effects that haven't started yet.
 * @return {Ext.Element} The Element
 */
Ext.Element.stopFx = function (finish){
};

/* @private */
Ext.Element.beforeFx = function (o){
};

/**
 * Returns true if the element is currently blocking so that no other effect can be queued
 * until this effect is finished, else returns false if blocking is not set.  This is commonly
 * used to ensure that an effect initiated by a user action runs to completion prior to the
 * same effect being restarted (e.g., firing only one effect even if the user clicks several times).
 * @return {Boolean} True if blocking, else false
 */
Ext.Element.hasFxBlock = function (){
};

/* @private */
Ext.Element.queueFx = function (o,fn){
};

/* @private */
Ext.Element.fxWrap = function (pos,o,vis){
};

/* @private */
Ext.Element.fxUnwrap = function (wrap,pos,o){
};

/* @private */
Ext.Element.getFxRestore = function (){
};

/* @private */
Ext.Element.afterFx = function (o){
};

/* @private */
Ext.Element.fxanim = function (args,opt,animType,defaultDur,defaultEase,cb){
};


Ext.Element.resize = function (w,h,o){
};

/**
 * @cfg {RegExp} re The regular expression used to match template variables.
 * Defaults to:<PRE><CODE>
 * re : /\{([\w-]+)\}/g                                     // for Ext Core
 * re : /\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g      // for Ext JS
 * </CODE></PRE>
 * @constructor
 */
Ext.Template.re = function() {}; 
/**
 * Returns an HTML fragment of this template with the specified <CODE>values</CODE> applied.
 * @param {Object/Array} values
 * The template values. Can be an array if the params are numeric (i.e. <CODE>{0}</CODE>)
 * or an object (i.e. <CODE>{foo: 'bar'}</CODE>).
 * @return {String} The HTML fragment
 */
Ext.Template.applyTemplate = function (values){
};

/**
 * Sets the HTML used as the template and optionally compiles it.
 * @param {String} html
 * @param {Boolean} compile (optional) True to compile the template (defaults to undefined)
 * @return {Ext.Template} this
 */
Ext.Template.set = function (html,compile){
};

/**
 * Compiles the template into an internal function, eliminating the RegEx overhead.
 * @return {Ext.Template} this
 */
Ext.Template.compile = function (){
};

/**
 * Applies the supplied values to the template and inserts the new node(s) as the first child of el.
 * @param {Mixed} el The context element
 * @param {Object/Array} values The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})
 * @param {Boolean} returnElement (optional) true to return a Ext.Element (defaults to undefined)
 * @return {HTMLElement/Ext.Element} The new node or Element
 */
Ext.Template.insertFirst = function (el,values,returnElement){
};

/**
 * Applies the supplied values to the template and inserts the new node(s) before el.
 * @param {Mixed} el The context element
 * @param {Object/Array} values The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})
 * @param {Boolean} returnElement (optional) true to return a Ext.Element (defaults to undefined)
 * @return {HTMLElement/Ext.Element} The new node or Element
 */
Ext.Template.insertBefore = function (el,values,returnElement){
};

/**
 * Applies the supplied values to the template and inserts the new node(s) after el.
 * @param {Mixed} el The context element
 * @param {Object/Array} values The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})
 * @param {Boolean} returnElement (optional) true to return a Ext.Element (defaults to undefined)
 * @return {HTMLElement/Ext.Element} The new node or Element
 */
Ext.Template.insertAfter = function (el,values,returnElement){
};

/**
 * Applies the supplied <CODE>values</CODE> to the template and appends
 * the new node(s) to the specified <CODE>el</CODE>.
 * <P>For example usage {@link #Template see the constructor}.</P>
 * @param {Mixed} el The context element
 * @param {Object/Array} values
 * The template values. Can be an array if the params are numeric (i.e. <CODE>{0}</CODE>)
 * or an object (i.e. <CODE>{foo: 'bar'}</CODE>).
 * @param {Boolean} returnElement (optional) true to return an Ext.Element (defaults to undefined)
 * @return {HTMLElement/Ext.Element} The new node or Element
 */
Ext.Template.append = function (el,values,returnElement){
};


Ext.Template.doInsert = function (where,el,values,returnEl){
};

/**
 * Applies the supplied values to the template and overwrites the content of el with the new node(s).
 * @param {Mixed} el The context element
 * @param {Object/Array} values The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})
 * @param {Boolean} returnElement (optional) true to return a Ext.Element (defaults to undefined)
 * @return {HTMLElement/Ext.Element} The new node or Element
 */
Ext.Template.overwrite = function (el,values,returnElement){
};


Ext.Template.apply = function (values){
};
