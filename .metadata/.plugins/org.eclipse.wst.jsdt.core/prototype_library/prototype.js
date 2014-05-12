/**
 * A class that oversees the calling of a particular function periodically.
 * PeriodicalExecuter shields you from multiple parallel executions of the callback function, should it take longer than the given interval to execute.
 * This is especially useful if you use one to interact with the user at given intervals (e.g. use a prompt or confirm call): this will avoid multiple message boxes all waiting to be actioned.
 * @param callback
 */
PeriodicalExecuter = function(callback) { return new PeriodicalExecuter(); };

/**
 * <p>Stops the periodical executer (there will be no further triggers).</p></div>
 * <p>Once a <code>PeriodicalExecuter</code> is created, it constitues an infinite loop, triggering at the given interval until the page unloads.  This method lets you stop it any time you want.</p>
 * <p>While there currently is a <code>registerCallback</code> method that technically re-enables the executer, it is unclear whether it is considered internal (and therefore should not be used as a feature) or not.  In doubt, always instantiate a fresh <code>PeriodicalExecuter</code> when you need to start one.</p>
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var gCallCount = 0;
 * new PeriodicalExecuter(function(pe) {
 *   if (++gCallCount > 3)
 *     pe.stop();
 *   else
 *     alert(gCallCount);
 * }, 1);
 * // Will only alert 1, 2 and 3, then the PE stops.
 * </code></pre></div>
 * 
 */
PeriodicalExecuter.prototype.stop  = function() {};

/**
 * <p>Creates a <a href="/api/hash"><code>Hash</code></a> (which is synonymous to &#8220;map&#8221; or &#8220;associative array&#8221; for our purposes). A convenience wrapper around the <code>Hash</code> constructor, with a safeguard that lets you pass an existing <code>Hash</code> object and get it back untouched (instead of uselessly cloning it).</p></div>
 * <p>The <code>$H</code> function is the shorter way to obtain a hash (prior to 1.5 final, it was the <em>only</em> proper way of getting one).</p></div>
 * 
 * @param array array of objects
 * @return Hash
 */
function $H(array) { return new Hash(); };

/**
 * <p>Creates a new <code>ObjectRange</code> object. This method is a convenience wrapper around the <a href="/api/objectRange"><code>ObjectRange</code></a> constructor, but <code>$R</code> is the preferred alias.</p></div>
 * <p><a href="/api/objectRange"><code>ObjectRange</code></a> instances represent a range of consecutive values, be they numerical, textual, or of another type that semantically supports value ranges. See the type&#8217;s documentation for further details, and to discover how your own objects can support value ranges.</p>
 * <p>The <code>$R</code> function takes exactly the same arguments as the original constructor: the <strong>lower and upper bounds</strong> (value of the same, proper type), and <strong>whether the upper bound is exclusive</strong> or not. By default, the upper bound is inclusive.</p>
 * 
 * @param start
 * @param end
 * @param exclusive = false, argument is optional
 * @return ObjectRange
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(0, 10).include(10)
 * // -> true
 * $A($R(0, 5)).join(', ')
 * // -> '0, 1, 2, 3, 4, 5'
 * $A($R('aa', 'ah')).join(', ')
 * // -> 'aa, ab, ac, ad, ae, af, ag, ah'
 * $R(0, 10, true).include(10)
 * // -> false
 * $R(0, 10, true).each(function(value) {
 *   // invoked 10 times for value = 0 to 9
 * });
 * </code></pre>
 * <p>Note that <code>ObjectRange</code> mixes in the <a href="/api/enumerable"><code>Enumerable</code></a> module: this makes it easy to convert a range to an <code>Array</code> (<code>Enumerable</code> provides the <a href="/api/enumerable/toArray"><code>toArray</code></a> method, which makes the <a href="dollar-a"><code>$A</code></a> conversion straightforward), or to iterate through values. (Note, however, that getting the bounds back will be more efficiently done using the <code>start</code> and <code>end</code> properties than calling the <a href="/api/enumerable/min"><code>min()</code></a> and <a href="/api/enumerable/max"><code>max()</code></a> methods).</p></div>
 * 
 */
function $R(start, end, exclusive) { return new ObjectRange(); };

/**
 * <p>Accepts an arbitrary number of functions and returns the result of the first one that doesn't throw an error.</p></div>
 * <p>This method provides a simple idiom for trying out blocks of code in sequence.  Such a sequence of attempts usually represents a downgrading approach to obtaining a given feature.</p>
 * <p>In this example from Prototype's <a href="/api/ajax"><code>Ajax</code></a> library, we want to get an <code>XMLHttpRequest</code> object. Internet Explorer 6 and earlier, however, does not provide it as a vanilla JavaScript object, and will throw an error if we attempt a simple instantiation.  Also, over time, its proprietary way evolved, changing COM interface names.</p>
 * <p><code>Try.these</code> will try several ways in sequence, from the best (and, theoretically, most widespread) one to the oldest and rarest way, returning the result of the first successful function.</p>
 * <p>If none of the blocks succeeded, <code>Try.these</code> will return <code>undefined</code>, which will cause the <code>getTransport</code> method in the example below to return <code>false</code>, provided as a fallback result value.</p>
 * <pre><code class="javascript">getTransport: function() {
 *   return Try.these(
 *     function() { return new XMLHttpRequest() },
 *     function() { return new ActiveXObject('Msxml2.XMLHTTP') },
 *     function() { return new ActiveXObject('Microsoft.XMLHTTP') }
 *   ) || false;
 * }</code></pre></div>
 * 
 * @param aFunction...
 * @return firstOKResult
 */
Try.prototype.these = function(aFunction) { return new Function(); };

/**
 *
 * <p>Retrieves (and extends) all the elements that have a CSS class name of <code>className</code>.  The optional <code>element</code> parameter specifies a parent element to search under.</p></div>
 * <p class="deprecated">As of Prototype 1.6, <code>document.getElementsByClassName</code> has been deprecated since native implementations return a <code>NodeList</code> rather than an <code>Array</code>. Please use <a href="/api/utility/dollar-dollar"><code>$$</code></a> or <a href="/api/element/select"><code>Element#select</code></a> instead.</p>
 * <p>Note that each returned element has been <a href="/api/element/extend">extended</a>.</p>
 *
 * @param className
 * @parem element, argument is optional
 * @return [HTMLElement...]
 * 
 * <h3>Example</h3>
 * <h4>HTML</h4>
 * <pre><code class="html">
 *   &lt;body&gt;
 *     &lt;div id=&quot;one&quot; class=&quot;foo&quot;&gt;Single class name&lt;/div&gt;
 *     &lt;div id=&quot;two&quot; class=&quot;foo bar thud&quot;&gt;Multiple class names&lt;/div&gt;
 *     &lt;ul id=&quot;list&quot;&gt;
 *       &lt;li id=&quot;item_one&quot; class=&quot;thud&quot;&gt;List item 1&lt;/li&gt;
 *       &lt;li&gt;List item 2&lt;/li&gt;
 *       &lt;li id=&quot;item_two&quot; class=&quot;thud&quot;&gt;List item 3&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/body&gt;
 * </code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">
 *   document.getElementsByClassName('foo');
 *   // -> [HTMLElement, HTMLElement] (div#one, div#two)
 *   document.getElementsByClassName('thud');
 *   // -> [HTMLElement, HTMLElement, HTMLElement] (div#two, li#item_one, li#item_two);
 *   document.getElementsByClassName('thud', $('list'));
 *   // -> [HTMLElement, HTMLElement] (li#item_one, li#item_two)
 * </code></pre></div>
 *         
 *  @deprecated
 * 
 */
Document.prototype.getElementsByClassName  = function(className) { return new Element(); };

/**
 * <p>Splits a string into an <code>Array</code>, treating all whitespace as delimiters. Equivalent to Ruby's <code>%w{foo bar}</code> or Perl's <code>qw(foo bar)</code>.</p></div>
 * <p>This is one of those life-savers for people who just hate commas in literal arrays :-)</p>
 * 
 * @param String
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">$w('apples bananas kiwis')
 * // -> ['apples', 'bananas', 'kiwis']</code></pre>
 * <p>This can slightly shorten code when writing simple iterations:</p>
 * <pre><code class="javascript">$w('apples bananas kiwis').each(function(fruit){
 *   var message = 'I like ' + fruit
 *   // do something with the message
 * })</code></pre>
 * <p>This also becomes sweet when combined with <a href="/api/element"><code>Element</code></a> functions:</p>
 * <pre><code class="javascript">$w('ads navbar funkyLinks').each(Element.hide);</code></pre></div>
 * 
 */
function $W(string) { return new Array(); };

/**
 * <p>Accepts an array-like collection (anything with numeric indices) and returns its equivalent as an actual <code>Array</code> object. This method is a convenience alias of <a href="/api/array/from"><code>Array.from</code></a>, but is the preferred way of casting to an <code>Array</code>.</p></div>
 * <p>The primary use of <code>$A()</code> is to obtain an actual <code>Array</code> object based on anything that could pass as an array (e.g. the <code>NodeList</code> or <code>HTMLCollection</code> objects returned by numerous DOM methods, or the predefined <code>arguments</code> reference within your functions).</p>
 * <p>The reason you would want an actual <code>Array</code> is simple: <a href="/api/array">Prototype extends <code>Array</code></a> to equip it with numerous extra methods, and also mixes in the <a href="/api/enumerable"><code>Enumerable</code></a> module, which brings in another boatload of nifty methods. Therefore, in Prototype, actual <code>Array</code>s trump any other collection type you might otherwise get.</p>
 * <p>The conversion performed is rather simple: <code>null</code>, <code>undefined</code> and <code>false</code> become an empty array; any object featuring an explicit <code>toArray</code> method (as many Prototype objects do) has it invoked; otherwise, we assume the argument "looks like an array" (e.g. features a <code>length</code> property and the <code>[]</code> operator), and iterate over its components in the usual way.</p>
 * <p>When passed an array, <code>$A</code> <em>makes a copy</em> of that array and returns it.</p>
 * 
 * @param iterable
 * @return actualArray
 * 
 * <h3>Examples</h3>
 * <p>The well-known DOM method <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C9094"><code>document.getElementsByTagName()</code></a> doesn't return an <code>Array</code>, but a <code>NodeList</code> object that implements the basic array "interface." Internet Explorer does not allow us to extend <code>Enumerable</code> onto <code>NodeList.prototype</code>, so instead we cast the returned <code>NodeList</code> to an <code>Array</code>:</p>
 * <pre><code class="javascript">
 * var paras = $A(document.getElementsByTagName('p'));
 * paras.each(Element.hide);
 * $(paras.last()).show();
 * </code></pre>
 * <p>Notice we had to use <code>each</code> and <code>Element.hide</code> because <code>$A</code> doesn't perform DOM extensions, since the array could contain anything (not just DOM elements). To use the <code>hide</code> instance method we first must make sure all the target elements are extended:</p>
 * <pre><code class="javascript">
 * $A(document.getElementsByTagName('p')).map(Element.extend).invoke('hide');
 * </code></pre>
 * <p>Want to display your arguments easily? <code>Array</code> features a <code>join</code> method, but the <code>arguments</code> value that exists in all functions <em>does not</em> inherit from <code>Array</code>. So, the tough way, or the easy way?</p>
 * <pre><code class="javascript">
 * // The hard way...
 * function showArgs() {
 *   alert(Array.prototype.join.call(arguments, ', '));
 * }
 * // The easy way...
 * function showArgs() {
 *   alert($A(arguments).join(', '));
 * }
 * </code></pre></div>
 * 
 */
function $A(iterable) { return new Array(); };

/**
 * <p>If provided with a string, returns the element in the document with matching ID; otherwise returns the passed element. Takes in an arbitrary number of arguments. All elements returned by the function are extended with Prototype DOM extensions.</p></div>
 * <p>The <code>$</code> function is the cornerstone of Prototype, its Swiss Army knife.  Not only does it provide a handy alias for <code>document.getElementById</code>, it also lets you pass indifferently IDs (strings) or DOM node references to your functions:</p>
 * <pre><code class="javascript">
 * function foo(element) {
 *     element = $(element);
 *     //  rest of the function...
 * }
 * </code></pre>
 * <p>Code written this way is flexible — you can pass it the ID of the element or the element itself without any type sniffing.</p>
 * <p>Invoking it with only one argument returns the element, while invoking it with multiple arguments returns an array of elements (and this works recursively: if you're twisted, you could pass it an array containing some arrays, and so forth).  As this is dependent on <code>getElementById</code>, <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBId">W3C specs</a> apply: nonexistent IDs will yield <code>null</code> and IDs present multiple times in the DOM will yield erratic results.  <strong>If you're assigning the same ID to multiple elements, you're doing it wrong!</strong></p>
 * <p>The function also <strong>extends every returned element</strong> with <a href="/api/element/extend"><code>Element.extend</code></a> so you can use Prototype's DOM extensions on it. In the following code, the two lines are equivalent.  However, the second one feels significantly more object-oriented:</p>
 * <pre><code class="javascript">
 * // Note quite OOP-like...
 * Element.hide('itemId');
 * // A cleaner feel, thanks to guaranted extension
 * $('itemId').hide();
 * </code></pre>
 * <p>However, when using iterators, leveraging the <code>$</code> function makes for more elegant, more concise, and also more efficient code:</p>
 * <pre><code class="javascript">
 * ['item1', 'item2', 'item3'].each(Element.hide);
 * // The better way:
 * $('item1', 'item2', 'item3').invoke('hide');
 * </code></pre>
 * <p>See <a href="/learn/extensions">How Prototype extends the DOM</a> for more info.</p></div>
 * 
 * @param id | element
 * @return HTMLElement
 */
function $(id) { return new HTMLElement(); };

/**
 * <p>Returns the value of a form control. This is a convenience alias of <a href="/api/form/element/getValue"><code>Form.Element.getValue</code></a>. Refer to it for full details.</p></div>
 * </div>
 * 
 * @param element
 * @return value
 */
function $F(element) { return null; };

/**
 * <p>Takes an arbitrary number of CSS selectors (strings) and returns a document-order array of extended DOM elements that match any of them.</p></div>
 * <p>Sometimes the usual tools from your DOM arsenal -- <code>document.getElementById()</code> encapsulated by <a href="dollar"><code>$()</code></a>, <code>getElementsByTagName()</code> and even Prototype's very own <code>getElementsByClassName()</code> extensions -- just aren't enough to quickly find our elements or collections of elements. If you know the DOM tree structure, you can simply resort to CSS selectors to get the job done.</p>
 * <h3>Examples</h3>
 * <pre><code class="javascript">$$('div');
 * // -> all DIVs in the document.  Same as document.getElementsByTagName('div')!
 * $$('#contents');
 * // -> same as $('contents'), only it returns an array anyway (even though IDs must be unique within a document).
 * $$('li.faux');
 * // -> all LI elements with class 'faux'
 * </code></pre>
 * <p>The <code>$$</code> function searches the entire document.  For selector queries on more specific sections of a document, use <a href="/api/element/methods/getElementsBySelector"><code>Element#getElementsBySelector</code></a>.</p>
 * <h3>Supported CSS syntax</h3>
 * <p>The <code>$$</code> function does not rely on the browser's internal CSS parsing capabilities (otherwise, we'd be in cross-browser trouble...), and therefore offers a consistent set of selectors across all supported browsers.</p>
 * <h4>supported in v1.5.0</h4>
 * <ul>
 * <li>Type selector: tag names, as in <code>div</code>.</li>
 * <li>Descendant selector: the space(s) between other selectors, as in <code>#a li</code>.</li>
 * <li>Attribute selectors: the full CSS 2.1 set of <code>[attr]</code>, <code>[attr=value]</code>, <code>[attr~=value]</code> and <code>[attr|=value]</code>. It also supports <code>[attr!=value]</code>. If the value you're matching against includes a space, be sure to enclose the value in quotation marks (<code>[title="Hello World!"]</code>).</li>
 * <li>Class selector: CSS class names, as in <code>.highlighted</code> or <code>.example.wrong</code>.</li>
 * <li>ID selector: as in <code>#item1</code>.</li>
 * </ul>
 * <h4>supported from v1.5.1</h4>
 * <p>Virtually all of <a href="http://www.w3.org/TR/2001/CR-css3-selectors-20011113/#selectors">CSS3</a> is supported, with the exception of pseudo-elements (like <code>::first-letter</code>) and some pseudo-classes (like <code>:hover</code>).  Some examples of new selectors that can be used in 1.5.1:</p>
 * <ul>
 * <li>Child selector: selects immediate descendants, as in <code>#a &gt; li</code>.</li>
 * <li>Attribute selectors: all attribute operators are supported, including <code>~=</code> (matches part of a space-delimited attribute value, like <code>rel</code> or <code>class</code>); <code>^=</code> (matches the beginning of a value); <code>$=</code> (matches the end of a value); and <code>*=</code> (matches any part of the value).</li>
 * <li>The <code>:not</code> pseudo-class, as in <code>#a *:not(li)</code> (matches all descendants of <code>#a</code> that aren't LIs).</li>
 * <li>All the <code>:nth</code>, <code>:first</code>, and <code>:last</code> pseudo-classes.  Examples include <code>tr:nth-child(even)</code> (all even table rows), <code>li:first-child</code> (the first item in any list), or <code>p:nth-last-of-type(3)</code> (the third-to-last paragraph on the page).</li>
 * <li>The <code>:empty</code> pseudo-class (for selecting elements without children or text content).</li>
 * <li>The <code>:enabled</code>, <code>:disabled</code>, and <code>:checked</code> pseudo-classes (for use with form controls).</li>
 * </ul>
 * 
 * @param cssRule...
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">$$('#contents a[rel]');
 * // -> all links inside the element of ID "contents" with a rel attribute
 * $$('a[href="#"]');
 * // -> all links with a href attribute of value "#" (eyeew!)
 * $$('#navbar a', '#sidebar a');
 * // -> all links within the elements of ID "navbar" or "sidebar"
 * </code></pre>
 * <p><strong>With version 1.5.1 and above</strong> you can do various types of advanced selectors:</p>
 * <pre><code class="javascript">$$('a:not([rel~=nofollow])');
 * // -> all links, excluding those whose rel attribute contains the word "nofollow"
 * $$('table tbody > tr:nth-child(even)');
 * // -> all even rows within all table bodies
 * $$('div:empty');
 * // -> all DIVs without content (i.e., whitespace-only)
 * </code></pre></div>
 * 
 */
function $$(cssRule) { return new Array(); };

/**
 * <p>Determines whether the value is included in the range.</p></div>
 * <p>This assumes the values in the range have a valid strict weak ordering (have valid semantics for the <code>&lt;</code> operator).  While <code>ObjectRange</code> mixes in <a href="/api/enumerable"><code>Enumerable</code></a>, this method overrides the default version of <a href="/api/enumerable/include"><code>include</code></a>, and is way more efficient (it uses a maximum of two comparisons).</p>
 * 
 * @param value
 * @return Boolean
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1, 10).include(5)
 * // -> true
 * $R('a', 'h').include('x')
 * // -> false
 * $R(1, 10).include(10)
 * // -> true
 * $R(1, 10, true).include(10)
 * // -> false
 * </code></pre></div>
 * 
 */
ObjectRange.prototype.include  = function(value) { return false; };

/**
 * <p>Returns the successor of the current <code>Number</code>, as defined by current + 1.  Used to make numbers compatible with <a href="/api/objectRange"><code>ObjectRange</code></a>.</p></div>
 * 
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * (5).succ()
 * // -> 6
 * $A($R(1, 5)).join('')
 * // -> '12345'
 * </code></pre></div>
 * 
 */
Number.prototype.succ  = function() { return 0; };

/**
 * <p>Encapsulates a regular [0..n[ loop, Ruby-style.</p></div>
 * <p>The callback function is invoked with a single argument, ranging from 0 to the number, <strong>exclusive</strong>.</p>
 * 
 * @param iterator
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var s = '';
 * (5).times(function(n) {
 *   s += n;
 * });
 * s
 * // -> '01234'
 * </code></pre></div>
 * 
 */
Number.prototype.times  = function(iterator) { return 0; };

/**
 * <p>Returns the smallest integer greater than or equal to the number.</p></div>
 * <p>An instance-method version of <a href="http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Math:ceil"><code>Math.ceil</code></a>.</p>
 * 
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">Math.ceil(4.1) //-> 5
 * (4.1).ceil()   //-> 5
 * (-4.1).ceil()  //-> -4</code></pre></div>
 * 
 * 
 * @since 1.6.0
 * 
 */
Number.prototype.ceil  = function() { return 0; };

/**
 * <p>Produces a 2-digit hexadecimal representation of the number (which is therefore assumed to be in the [0..255] range).  Useful for composing CSS color strings.</p></div>
 * 
 * @return String
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 128.toColorPart()
 * // -> '70'
 * 10.toColorPart()
 * // -> '0a'
 * '#' + [128, 10, 16].invoke('toColorPart').join('')
 * // -> '#800a10'
 * </code></pre></div>
 * 
 */
Number.prototype.toColorPart  = function() { return ""; };

/**
 * <p>Returns the largest integer less than or equal to the number.</p></div>
 * <p>An instance-method version of <a href="http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Math:floor"><code>Math.floor</code></a>.</p>
 * 
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">Math.floor(4.6) //-> 4
 * (4.6).floor()   //-> 4
 * (-4.1).floor()  //-> -5</code></pre></div>
 * 
 * @since 1.6.0
 * 
 */
Number.prototype.floor  = function() { return 0; };

/**
 * <p>Converts the number into a string padded with <code>0</code>s so that the string&#8217;s length is at least equal to <code>length</code>. Takes an optional <code>radix</code> argument which specifies the base to use for conversion.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * (13).toPaddedString(4);
 * // -> '0013'
 * (13).toPaddedString(2);
 * // -> '13'
 * (13).toPaddedString(1);
 * // -> '13'
 * (13).toPaddedString(4, 16)
 * // -> '000d'
 * (13).toPaddedString(4, 2);
 * // -> '1101'
 * </code></pre></div>
 * 
 * 
 * @since 1.5.1
 * 
 * @param length
 * @param radix, argument is optional
 * @return String
 */
Number.prototype.toPaddedString  = function(length, radix) { return ""; };

/**
 * <p>Returns a JSON string.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * (45).toJSON();
 * //-> '45'
 * </code></pre></div>
 * 
 * 
 * @since 1.5.1
 * 
 * @return String
 */
Number.prototype.toJSON = function() { return ""; };

/**
 * <p>Rounds the number to the nearest integer.</p></div>
 * <p>An instance-method version of <a href="http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Math:round"><code>Math.round</code></a>.</p>
 * 
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">Math.round(4.5) //-> 5
 * (4.5).round()   //-> 5
 * (4.49).round()  //-> 4
 * (-4.5).round()  //-> -4</code></pre></div>
 * 
 * 
 * @since 1.6.0
 * 
 */
Number.prototype.round  = function() { return 0; };

/**
 * <p>Returns the absolute value of the number.</p></div>
 * <p>An instance-method version of <a href="http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Math:abs"><code>Math.abs</code></a>.</p>
 * 
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">Math.abs(-5) //-> 5
 * (-5).abs()   //-> 5
 * (5).abs()    //-> 5</code></pre></div>
 * 
 * 
 * @since 1.6.0
 * 
 */
Number.prototype.abs  = function() { return 0; };

/**
 * <p>A timed observer for a specific form control.</p></div>
 * <p>Form.Element observer implements the <code>getValue()</code> method using <a href="/api/form/element/getValue"><code>Form.Element.getValue()</code></a> on the given element.  See <a href="../timedObserver"><code>Abstract.TimedObserver</code></a> for general documentation on timed observers.</p></div>
 * 
 * @param element
 * @param frequency
 * @param callback
 */
Form.Element.prototype.Observer  = function(element, frequency, callback) { };

/**
 * <p>A timed observer that triggers when any value changes within the form.</p></div>
 * <p>Form observer implements the <code>getValue()</code> method using <a href="/api/form/serialize"><code>Form.serialize()</code></a> on the element from the first argument. See <a href="../timedObserver"><code>Abstract.TimedObserver</code></a> for general documentation on timed observers.</p>
 * 
 * @param element
 * @param frequency
 * @param callback
 * 
 * <h3>Example</h3>
 * <p>In this example an observer is used to change the appearance of the form if any of the values had been changed. It returns to its initial state when the data is submitted (saved).</p>
 * <form id="example" class="example" action="#">
 *   <fieldset>
 *     <legend>Login Preferences</legend>
 *     <p id="msg" class="message">Current settings:</p>
 *     <div>
 *       <label for="greeting">Greeting message</label>
 *       <input id="greeting" type="text" name="greeting" value="Hello world!" />
 *     </div>
 *     <div>
 *       <span class="label">Login options</span>
 *       <ul>
 *         <li><input id="login-visible" type="checkbox" name="login-visible" checked="checked" />
 *           <label for="login-visible">allow others to see my last login date</label></li>
 *         <li><input id="land-recent" type="checkbox" name="land-recent" />
 *           <label for="land-recent">land on recent changes overview instead of the Dashboard</label></li>
 *       </ul>
 *     </div>
 *     <div class="buttonrow"><input type="submit" value="save" /></div>
 *   </fieldset>
 *   <script type="text/javascript">
 *     new Form.Observer('example', 0.3, function(form, value){
 *       $('msg').update('Your preferences have changed. Resubmit to save').style.color = 'red'
 *       form.down().setStyle({ background:'lemonchiffon', borderColor:'red' })
 *     })
 *     $('example').onsubmit = function() {
 *       $('msg').update('Preferences saved!').style.color = 'green'
 *       this.down().setStyle({ background:null, borderColor:null })
 *       return false
 *     }
 *   </script>
 * </form>
 * <p>Here is the complete JavaScript code for the above example:</p>
 * <pre><code class="javascript">
 * new Form.Observer('example', 0.3, function(form, value){
 *   $('msg').update('Your preferences have changed. Resubmit to save').style.color = 'red'
 *   form.down().setStyle({ background:'lemonchiffon', borderColor:'red' })
 * })
 * $('example').onsubmit = function() {
 *   $('msg').update('Preferences saved!').style.color = 'green'
 *   this.down().setStyle({ background:null, borderColor:null })
 *   return false
 * }
 * </code></pre></div>
 * 
 */
Form.prototype.Observer  = function(element, frequency, callback) {};

/**
 * <p>Hides and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="error-message"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('error-message').hide();
 * // -> HTMLElement (and hides div#error-message)
 * </code></pre>
 * <h3>Backwards compatibility change</h3>
 * <p class="deprecated">In previous versions of Prototype, you could pass an arbitrary number of elements to <code>Element.toggle</code>, <code>Element.show</code>, and <code>Element.hide</code>, for consistency, this is <strong>no longer possible</strong> in version 1.5!</p>
 * <p>You can however achieve a similar result by using <a href="/api/enumerable">Enumerables</a>:</p>
 * <pre><code class="javascript">
 * ['content', 'navigation', 'footer'].each(Element.hide);
 * // -> ['content', 'navigation', 'footer'] 
 * // and hides #content, #navigation and #footer.
 * </code></pre>
 * <p>or even better:</p>
 * <pre><code class="javascript">
 * $('content', 'navigation', 'footer').invoke('hide');
 * // -> [HTMLElement, HTMLElement, HTMLElement] (#content, #navigation and #footer)
 * // and hides #content, #navigation and #footer.
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.hide  = function(element) { return new HTMLElement(); };

/**
 * <p>Calculates the cumulative scroll offset of an element in nested scrolling containers.</p></div>
 * <p>Adds the cumulative <code>scrollLeft</code> and <code>scrollTop</code> of an element and all its parents.</p>
 * <p>Used for calculating the scroll offset of an element that is in more than one scroll container (e.g., a draggable in a scrolling container which is itself part of a scrolling document).</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.prototype.cumulativeScrollOffset  = function(element) { return {left: 0, top: 0}; };

/**
 * <p>Removes <code>element</code>&#8217;s CSS <code>className</code> and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit food"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').removeClassName('food');
 * // -> HTMLElement
 * $('mutsu').classNames();
 * // -> ['apple', 'fruit']
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return HTMLElement
 */
Element.prototype.removeClassName  = function(element, className) { return new HTMLElement(); };

/**
 * <p>Scrolls the window so that <code>element</code> appears at the top of the viewport. Returns <code>element</code>.</p></div>
 * <p>This has a similar effect than what would be achieved using <a href="http://www.w3.org/TR/html401/struct/links.html#h-12.2.3">HTML anchors</a> (except the browser&#8217;s history is not modified).</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * $(element).scrollTo();
 * // -> HTMLElement
 * </code></pre></div>
 * 
 */
Element.prototype.scrollTo  = function(element) { return HTMLElement; };

/**
 * <p>Returns <code>element</code>&#8217;s following sibling (or the <em>index&#8217;th</em> one, if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all following siblings are considered. If no following sibling matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.next</code> method is part of Prototype&#8217;s ultimate DOM traversal toolkit (check out <a href="up"><code>Element.up</code></a>, <a href="down"><code>Element.down</code></a> and <a href="previous"><code>Element.previous</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of <code>element</code>&#8217;s <strong>following siblings</strong>. (Note that two elements are considered siblings if they have the same parent, so for example, the <code>head</code> and <code>body</code> elements are siblings&#8212;their parent is the <code>html</code> element.)</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don&#8217;t have to worry about whitespace-only nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>&#8217;s following sibling is returned (this is similar as calling <code>nextSibling</code> except <code>Element.next</code> returns an already <a href="/api/element/extend">extended element</a>).</p>
 * <p>If an index is passed, <code>element</code>&#8217;s corresponding following sibling is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="nextSiblings"><code>Element.nextSiblings</code></a>). Note that the sibling <em>right below</em> <code>element</code> has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.next</code> will return the <code>element</code> first following sibling that matches it.</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.next</code> will collect all of <code>element</code>&#8217;s following siblings matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no following sibling is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3 id="title"&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red" class="yummy"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('list-of-apples').next();
 * // equivalent:
 * $('list-of-apples').next(0);
 * // -> p#sayings
 * $('title').next(1);
 * // -> ul#list-of-apples
 * $('title').next('p');
 * // -> p#sayings
 * $('golden-delicious').next('.yummy');
 * // -> li#mcintosh
 * $('golden-delicious').next('.yummy', 1);
 * // -> li#ida-red
 * $('ida-red').next();
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.prototype.next  = function(element, cssRule, index) { return new HTMLElement(); };

/**
 * <p>Toggles the visibility of <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="welcome-message"&gt;&lt;/div&gt;
 * &lt;div id="error-message" style="display:none;"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('welcome-message').toggle();
 * // -> HTMLElement (and hides div#welcome-message)
 * $('error-message').toggle();
 * // -> HTMLElement (and displays div#error-message)
 * </code></pre>
 * <h3>Notes</h3>
 * <p><code>Element.toggle</code> <em>cannot</em> display elements hidden via CSS stylesheets. Note that this is not a Prototype limitation but a consequence of how the CSS <code>display</code> property works.</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #hidden-by-css {
 *     display: none;
 *   }
 * &lt;/style&gt;
 * [&#8230;]
 * &lt;div id="hidden-by-css"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('hidden-by-css').toggle(); // WONT' WORK!
 * // -> HTMLElement (div#hidden-by-css is still hidden!)
 * </code></pre>
 * <h3>Backwards compatibility change</h3>
 * <p class="deprecated">In previous versions of Prototype, you could pass an arbitrary number of elements to <code>Element.toggle</code>, <code>Element.show</code>, and <code>Element.hide</code>, for consistency, this is <strong>no longer possible</strong> in version 1.5!</p>
 * <p>You can however achieve a similar result by using <a href="/api/enumerable">Enumerables</a>:</p>
 * <pre><code class="javascript">
 * ['error-message', 'welcome-message'].each(Element.toggle);
 * // -> ['error-message', 'welcome-message'] 
 * // and toggles the visibility of div#error-message and div#confirmation-message.
 * </code></pre>
 * <p>or even better:</p>
 * <pre><code class="javascript">
 * $('error-message', 'welcome-message').invoke('toggle');
 * // -> [HTMLElement, HTMLElement] (div#error-message and div#welcome-message)
 * // and toggles the visibility of div#error-message and div#confirmation-message.
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.toggle  = function(element) { return new HTMLElement; };

/**
 * <p>Finds the computed <code>width</code> and <code>height</code> of <code>element</code> and returns them as key/value pairs of an object.</p></div>
 * <p>This method returns correct values on elements whose display is set to <code>none</code> either in an inline style rule or in an CSS stylesheet.</p>
 * <p>In order to avoid calling the method twice, you should consider caching the values returned in a variable as shown below. If you only need <code>element</code>&#8217;s width or height, consider using <a href="getWidth"><code>Element.getWidth</code></a> or <a href="getHeight"><code>Element.getHeight</code></a> instead.</p>
 * <p>Note that all values are returned as <em>numbers only</em>  although they are <em>expressed in pixels</em>.</p>
 * 
 * @param element
 * @return {height: Number
 * @param width: Number}</code></pre>
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * var dimensions = $('rectangle').getDimensions();
 * // -> {width: 200, height: 100}
 * dimensions.width;
 * // -> 200
 * dimensions.height;
 * // -> 100
 * </code></pre></div>
 * 
 */
Element.prototype.getDimensions  = function(element) { return {height: Number, width: Number}; };

/**
 * someElement.adjacent([selectors...]) -> [HTMLElement...]</code></pre>
 * <p>Finds all siblings of the current element that match the given selector(s).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">&lt;ul id=&quot;cities&quot;&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;nyc&quot;&gt;New York&lt;/li&gt;
 *     &lt;li class=&quot;uk&quot; id=&quot;lon&quot;&gt;London&lt;/li&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;chi&quot;&gt;Chicago&lt;/li&gt;
 *     &lt;li class=&quot;jp&quot; id=&quot;tok&quot;&gt;Tokyo&lt;/li&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;la&quot;&gt;Los Angeles&lt;/li&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;aus&quot;&gt;Austin&lt;/li&gt;
 *   &lt;/ul&gt;</code></pre>
 * <pre><code class="javascript">$('nyc').adjacent('li.us');
 * //-> [&lt;li#chi, li#la, li#aus&gt;]
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @param selectors..., argument is optional
 * @return [HTMLElement...]
 */
Element.prototype.adjacent  = function(element, selector) { return new Array(); };

/**
 * <p>Adds a CSS class to <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').addClassName('food')
 * $('mutsu').className
 * // -> 'apple fruit food'
 * $('mutsu').classNames()
 * // -> ['apple', 'fruit', 'food']
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return HTMLElement 
 */
Element.prototype.addClassName  = function(element, className) { return new HTMLElement(); };

/**
 * <p>Sets <code>element</code> back to the state it was <em>before</em> <a href="makePositioned">Element.makePositioned</a> was applied to it. Returns <code>element</code>.</p></div>
 * <p><code>element</code>'s absolutely positioned children will now have their positions set relatively to <code>element</code>'s nearest ancestor with a CSS <code>position</code> of  <code>'absolute'</code>, <code>'relative'</code> or <code>'fixed'</code>.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="html">
 * &lt;p&gt;lorem [&#8230;]&lt;/p&gt;
 * &lt;div id="container"&gt;
 *   &lt;div id="element" style="position: absolute; top: 20px; left: 20px;"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('container').makePositioned();
 * // -> HTMLElement
 * </code></pre>
 * <p><img src="/assets/2007/2/24/makepos_after.png" alt="example" /></p>
 * <p>To return to the orginal layout, use <code>Element.undoPositioned</code>;</p>
 * <pre><code class="javascript">
 * $('container').undoPositioned();
 * // -> HTMLElement
 * </code></pre>
 * <p><img src="/assets/2007/2/24/makepos_before.png" alt="example" /></p></div>
 * 
 */
Element.prototype.undoPositioned  = function(element) { return new HTMLElement(); };

/**
 * writeAttribute(element, attributes) -> HTMLElement</code></pre>
 * <p>Adds, specifies or removes attributes passed as either a hash or a name/value pair.</p></div>
 * </div>
 *     
 * @since 1.6
 * 
 * @param element
 * @param attribute
 * @param value = true, argument is optional
 * @return HTMLElement
 */
Element.prototype.writeAttribute  = function(element, attribute, value) { return new HTMLElement; };

/**
 * addMethods(tagName, methods)</code></pre>
 * <p>Takes a hash of <code>methods</code> and makes them available as methods of <a href="/api/element/extend"><code>extended</code></a> elements and of the <code>Element</code> object. The second usage form is for targeting a specific HTML element.</p></div>
 * <p><code>Element.addMethods</code> makes it possible to mix in <em>your own</em> methods to the <code>Element</code> object, which you can later use as methods of <a href="/api/element/extend"><code>extended</code></a> elements  - those returned by the <a href="/api/utility/dollar"><code>$()</code></a> utility, for example - or as methods of <code>Element</code>.</p>
 * <pre><code class="javascript">
 * $(element).myOwnMethod([args...]);
 * </code></pre>
 * <p>Note that this will also works:</p>
 * <pre><code class="javascript">
 * Element.myOwnMethod(element|id[, args...]);
 * </code></pre>
 * <p>To add new methods, simply feed <code>Element.addMethods</code> with a hash of methods. Note that each method's first argument <em>has to be</em> <code>element</code>. Inside each method, remember to pass <code>element</code> to <a href="/api/utility/dollar"><code>$()</code></a> and to return it to allow for method chaining if appropriate.</p>
 * <p>Here's what your hash should look like:</p>
 * <pre><code class="javascript">
 * var myVeryOwnElementMethods = {
 *   myFirstMethod: function(element[, args...]){
 *     element = $(element);
 *     // do something
 *     return element;
 *   },
 *   mySecondMethod: function(element[, args...]){
 *     element = $(element);
 *     // do something else
 *     return element;
 *   }
 * };
 * </code></pre>
 * <h3>Extending only specific elements (available since v1.5.1)</h3>
 * <p>If you call <code>Element.addMethods</code> with <em>2 arguments</em>, it will use the first argument for the <em>tag name</em> of the HTML element you want your methods to be applied to.</p>
 * <pre><code class="javascript">
 * Element.addMethods('DIV', my_div_methods);
 * // the methods from the given hash are now available on DIV elements
 * </code></pre>
 * <p>You can also pass <em>an array</em> of tag names as the first argument:</p>
 * <pre><code class="javascript">
 * Element.addMethods(['DIV', 'SPAN'], my_div_methods);
 * // DIV and SPAN now share the same extensions
 * </code></pre>
 * <p>Tag names in this first argument are really case-insensitive, but we're writing them in uppercase in these examples to put some weight on them. :)</p>
 * <p>One last warning before you pursue: <code>Element.addMethods</code> has a built in security which prevents you from overriding native element methods or properties (like <code>getAttribute</code> or <code>innerHTML</code> for instance), but nothing prevents you from overriding one of the frameworks' methods. Prototype uses a lot of its methods internally, so watch where you step!</p>
 * 
 * @param [methods])
 * 
 * <h3>Examples</h3>
 * <p>Want clean, semantic markup, but need that extra <code>&lt;div&gt;</code> around your element, why not create an <code>Element.wrap('tagName')</code> method which encloses <code>element</code> in the provided <code>tagName</code> and returns the wrapper?</p>
 * <pre><code class="javascript">
 * Element.addMethods({
 *   wrap: function(element, tagName) {
 *     element = $(element);
 *     var wrapper = document.createElement('tagName');
 *     element.parentNode.replaceChild(wrapper, element);
 *     wrapper.appendChild(element);
 *     return Element.extend(wrapper);
 *   }
 * });
 * </code></pre>
 * <p>which you'll be able to use like this:</p>
 * <pre><code class="html">
 * // Before:
 * &lt;p id="first"&gt;Some content...&lt;/p&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $(element).wrap('div');
 * // -> HTMLElement (div)
 * </code></pre>
 * <pre><code class="html">
 * // After:
 * &lt;div&gt;&lt;p id="first"&gt;Some content...&lt;/p&gt;&lt;/div&gt;
 * </code></pre>
 * <p>As you have thoughtfully decided that your <code>Element.wrap</code> method would return the newly created <code>&lt;div&gt;</code>, ready for prime time thanks to <a href="/api/element/extend"><code>Element.extend</code></a>, you can immediately chain a new method to it:</p>
 * <pre><code class="javascript">
 * $(element).wrap('div').setStyle({backgroundImage: 'url(images/rounded-corner-top-left.png) top left'});
 * </code></pre>
 * <p>Are you using <a href="/api/ajax/updater"><code>Ajax.Updater</code></a> quite a bit around your web application to update DOM elements? Would you want a quick and nifty solution to cut down on the amount of code you are writing ? Try this:</p>
 * <pre><code class="javascript">
 * Element.addMethods({
 *   ajaxUpdate: function(element, url, options){
 *     element = $(element);
 *     element.update('&lt;img src="/images/spinner.gif" alt="loading..." /&gt;');
 *     new Ajax.Updater(element, url, options);
 *     return element;
 *   }
 * });
 * </code></pre>
 * <p>Now, whenever you wish to update the content of an element just do:</p>
 * <pre><code class="javascript">
 * $(element).ajaxUpdate('/new/content');
 * // -> HTMLElement
 * </code></pre>
 * <p>This method will first replace the content of <code>element</code> with one of those nifty Ajax activity indicator. It will then create a new <a href="/api/ajax/updater"><code>Ajax.Updater</code></a>, which in turn will update the content of <code>element</code> with its request result, removing the spinner as it does.</p>
 * <h3>Using <code>Element.addMethods</code> with no argument</h3>
 * <p>There's a last dirty little secret to <code>Element.addMethods</code>. You can can call it <em>without</em> passing it an argument. What happens then? Well, it simply iterates over all of <code>Element.Methods</code>, <code>Element.Methods.Simulated</code>, <code>Form.Methods</code> and <code>Form.Element.Methods</code> and adds them to the relevant DOM elements (Form.Methods only gets added to, well the <code>form</code> element while <code>input</code>, <code>select</code> and <code>textarea</code> elements get extended with <code>Form.Element.Methods</code>).</p>
 * <p>When could that be usefull?</p>
 * <p>Imagine that you wish to add a method that deactivates a <code>submit</code> button and replaces its text with something like "Please wait...". You wouldn't want such a method to be applied to any element, would you? So here is how you would go about doing that:</p>
 * <pre><code class="javascript">
 * Form.Element.Methods.processing = function(element, text) {
 *   element = $(element);
 *   if (element.tagName.toLowerCase() == 'input' && ['button', 'submit'].include(element.type))
 *     element.value = (text === undefined ? 'Please wait...' : text);
 *   return element.disable();
 * };
 * Element.addMethods();
 * </code></pre></div>
 * 
 */
Element.prototype.addMethods  = function(methods) {};

/**
 * <p>Checks whether <code>element</code> has the given CSS <code>className</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit food"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').hasClassName('fruit');
 * // -> true
 * $('mutsu').hasClassName('vegetable');
 * // -> false
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return Boolean
 */
Element.prototype.hasClassName  = function(element, className) { return false; };

/**
 * <p>Modifies <code>element</code>&#8217;s CSS style properties. Styles are passed as a hash of property-value pairs in which the properties are specified in their camelized form.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $(element).setStyle({
 *   backgroundColor: '#900',
 *   fontSize: '12px'
 * });
 * // -> HTMLElement
 * </code></pre>
 * <h3>Notes</h3>
 * <p>The method transparently deals with browser inconsistencies for <code>float</code>&#8212;however, as <code>float</code> is a reserved keyword, you must either escape it or use <code>cssFloat</code> instead&#8212;and <code>opacity</code>&#8212;which accepts values between 0 (fully transparent) and 1 (fully opaque). You can safely use either of the following across all browsers:</p>
 * <pre><code class="javascript">
 * $(element).setStyle({
 *   cssFloat: 'left',
 *   opacity: 0.5
 * });
 * // -> HTMLElement
 * $(element).setStyle({
 *   'float': 'left', // notice how float is surrounded by single quotes
 *   opacity: 0.5
 * });
 * // -> HTMLElement
 * </code></pre>
 * <p>Not all CSS shorthand properties are supported. You may only use the CSS properties described in the <a href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle">Document Object Model (DOM) Level 2 Style Specification</a>.</p></div>
 * 
 * @param element
 * @param styles
 * @return HTMLElement
 */
Element.prototype.setStyle  = function(element, styles) { return new HTMLElement(); };

/**
 * <p>Returns the X/Y coordinates of <code>element</code> relative to the <em>viewport</em>.</p></div>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.prototype.viewportOffset  = function(element) { return {left: 0, top: 0}; };

/**
 * <p>Tests whether <code>element</code> is empty (i.e. contains only whitespace).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="wallet"&gt;     &lt;/div&gt;
 * &lt;div id="cart"&gt;full!&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('wallet').empty();
 * // -> true
 * $('cart').empty();
 * // -> false
 * </code></pre></div>
 * 
 * @param element
 * @return Boolean
 */
Element.prototype.empty  = function(element) { return false; };

/**
 * <p>Returns <code>element</code>'s previous sibling (or the <em>index'th</em> one, if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all previous siblings are considered. If no previous sibling matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.previous</code> method is part of Prototype's ultimate DOM traversal toolkit (check out <a href="up"><code>Element.up</code></a>, <a href="down"><code>Element.down</code></a> and <a href="next"><code>Element.next</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of <code>element</code>'s <strong>previous siblings</strong>. (Note that two elements are considered siblings if they have the same parent, so for example, the <code>head</code> and <code>body</code> elements are siblings&#8212;their parent is the <code>html</code> element.)</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don't have to worry about whitespace-only nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>'s previous sibling is returned (this is similar as calling <code>previousSibling</code> except <code>Element.previous</code> returns an already <a href="/api/element/extend">extended element</a>).</p>
 * <p>If an index is passed, <code>element</code>'s corresponding previous sibling is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="previousSiblings"><code>previousSiblings()</code></a>). Note that the sibling <em>right above</em> <code>element</code> has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.previous</code> will return the <code>element</code> first previous sibling that matches it.</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.previous</code> will collect all of <code>element</code>'s previous siblings matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no previous sibling is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious" class="yummy"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('saying').previous();
 * // equivalent:
 * $('saying').previous(0);
 * // -> ul#list-of-apples
 * $('saying').previous(1);
 * // -> h3
 * $('saying').previous('h3');
 * // -> h3
 * $('ida-red').previous('.yummy');
 * // -> li#mutsu
 * $('ida-red').previous('.yummy', 1);
 * // -> li#golden-delicious
 * $('ida-red').previous(5);
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.prototype.previous  = function(element, cssRule, index) { return new HTMLElement(); };

/**
 * insert(element, content) -> HTMLElement</code></pre>
 * <p>Inserts <code>content</code> before, after, at the top of, or at the bottom of <code>element</code>, as specified by the <code>position</code> property of the second argument. If the second argument is the content itself, <code>insert</code> will append it to <code>element</code>.</p></div>
 * <p><code>insert</code> accepts the following kind of content: text, HTML, DOM element, and any kind of object with a <code>toHTML</code> or <code>toElement</code> method.</p>
 * <p>Note that if the inserted HTML contains any <code>&lt;script&gt;</code> tag, these will be automatically evaluated after the insertion (<code>insert</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a> when inserting HTML). </p></div>
 * 
 * 
 * @since 1.6
 * 
 * @param element
 * @param { position: content }
 * @return HTMLElement
 */
Element.prototype.insert  = function(element, position) { return new HTMLElement(); };

/**
 * <p>Returns the value of <code>element</code>'s <code>attribute</code> or <code>null</code> if <code>attribute</code> has not been specified.</p></div>
 * <p>This method serves two purposes. First it acts as a simple wrapper around <code>getAttribute</code> which isn't a "real" function in Safari and Internet Explorer (it doesn't have <code>.apply</code> or <code>.call</code> for  instance). Secondly, it cleans up the horrible mess Internet Explorer makes when handling attributes.</p>
 * 
 * @param element
 * @param attribute
 * @return String | null
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;a id="tag" href="/tags/prototype" rel="tag" title="view related bookmarks." my_widget="some info."&gt;Prototype&lt;/a&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('tag').readAttribute('href');
 * // -> '/tags/prototype'
 * $('tag').readAttribute('title');
 * // -> 'view related bookmarks.'
 * $('tag').readAttribute('my_widget');
 * // -> 'some info.'
 * </code></pre></div>
 * 
 */
Element.prototype.readAttribute  = function(element, attribute) { return ""; };

/**
 * <p>Recursively collects elements whose relationship is specified by <code>property</code>. <code>property</code> has to be a <em>property</em> (a method won&#8217;t do!) of <code>element</code> that points to a <em>single</em> DOM node. Returns an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>This method is used internally by <a href="ancestors"><code>Element.ancestors</code></a>, <a href="descendants"><code>Element.descendants</code></a>, <a href="nextSiblings"><code>Element.nextSiblings</code></a>, <a href="previousSiblings"><code>Element.previousSiblings</code></a> and <a href="siblings"><code>Element.siblings</code></a> which offer really convenient way to grab elements, so directly accessing <code>Element.recursivelyCollect</code> should seldom be needed. However, if you are after something out of the ordinary, it is the way to go.</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @param property
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious"&gt;&lt;p&gt;Golden Delicious&lt;/p&gt;&lt;/li&gt;
 *       &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').recursivelyCollect('firstChild');
 * // -> [li#apples, ul#list-of-apples, li#golden-delicious, p]
 * </code></pre></div>
 * 
 */
Element.prototype.recursivelyCollect  = function(element, property) { return new Array(); };

/**
 * <p>Collects all of the element&#8217;s <em>immediate</em> descendants (i.e. <em>children</em>) and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p class="deprecated">As of Prototype 1.6, <code>Element#immediateDescendants</code> has been deprecated in favor of <a href="/api/element/childelements"><code>Element#childElements</code></a>.</p>
 * <p>The returned array reflects the children order in the document (e.g., an index of 0 refers to the topmost child of <code>element</code>).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-erectus"&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').immediateDescendants();
 * // -> [div#homo-erectus]
 * $('homo-erectus').immediateDescendants();
 * // -> [div#homo-neanderthalensis, div#homo-sapiens]
 * $('homo-sapiens').immediateDescendants();
 * // -> []
 * </code></pre></div>
 *         
 *  @deprecated
 * 
 */
Element.prototype.immediateDescendants  = function(element) { return new Array(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s ancestors and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>The returned array&#8217;s first element is <code>element</code>&#8217;s direct ancestor (its <code>parentNode</code>), the second one is its grandparent and so on until the <code>html</code> element is reached. <code>html</code> will always be the last member of the array&#8230; unless you are looking for its ancestors obviously. But you wouldn&#8217;t do that, would you ?</p>
 * <p>Note that all of Prototype’s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;html&gt;
 * [&#8230;]
 *   &lt;body&gt;
 *     &lt;div id="father"&gt;
 *       &lt;div id="kid"&gt;
 *       &lt;/div&gt;
 *     &lt;/div&gt;
 *   &lt;/body&gt;
 * &lt;/html&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('kid').ancestors();
 * // -> [div#father, body, html]  // Keep in mind that 
 * // the `body` and `html` elements will also be included!
 * document.getElementsByTagName('html')[0].ancestors();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.prototype.ancestors  = function(element) { return new Array(); };

/**
 * <p>Extends <code>element</code> with <em>all</em> of the methods contained in <a href="/api/element/methods">Element.Methods</a> and <a href="/api/element/methods/simulated">Element.Methods.Simulated</a>. If <code>element</code> is an <code>input</code>, <code>textarea</code> or <code>select</code> tag, it will also be extended with the methods from <a href="/api/form/element">Form.Element.Methods</a>. If it is a <code>form</code> tag, it will also be extended with  <a href="/api/form">Form.Methods</a>.</p></div>
 * <p>This is where the magic happens!</p>
 * <p>By extending an element with Prototype&#8217;s custom methods, we can achieve that syntactic sugar and ease of use we all crave for. For example, you can do the following with an extended element:</p>
 * <pre><code class="javascript">
 * element.update('hello world');
 * </code></pre>
 * <p>And since most methods of <code>Element</code> return the element they are applied to, you can chain methods like so:</p>
 * <pre><code class="javascript">
 * element.update('hello world').addClassName('greeting');
 * </code></pre>
 * <p>Note that all of the elements returned by <code>Element</code> methods are extended (yes even for methods like <a href="/api/element/siblings"><code>Element.siblings</code></a> which return arrays of elements) and Prototype&#8217;s flagship utility methods <a href="/api/utility/dollar"><code>$()</code></a> and <a href="/api/utility/dollar-dollar"><code>$$()</code></a> obviously also return extended elements.</p>
 * <p>If you want to know more about how Prototype extends the DOM, jump to <a href="http://prototypejs.org/learn/extensions">this article</a>.</p></div>
 * 
 * @param element
 */
Element.prototype.extend  = function(element) {};

/**
 * <p>Takes an arbitrary number of CSS selectors (strings) and returns an array of <a href="/api/element/extend">extended</a> descendants of <code>element</code> that match any of them.</p></div>
 * <p>This method is very similar to <a href="/api/utility/dollar-dollar">$$()</a> but can be used within the context of one element, rather than the whole document. The supported CSS syntax is identical, so please refer to the <a href="/api/utility/dollar-dollar"><code>$$()</code> docs</a> for details.</p>
 * 
 * @param element
 * @param selector...
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">&lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3 title="yummy!"&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious" title="yummy!" &gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" title="yummy!"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;</code></pre>
 * <pre><code class="javascript">$('apples').select('[title="yummy!"]');
 * // -> [h3, li#golden-delicious, li#mutsu]
 * $('apples').select( 'p#saying', 'li[title="yummy!"]');
 * // -> [li#golden-delicious, li#mutsu,  p#saying]
 * $('apples').select('[title="disgusting!"]');
 * // -> []</code></pre>
 * <h3>Tip</h3>
 * <p><code>Element#select</code> can be used as a pleasant alternative to the native method <code>getElementsByTagName</code>:</p>
 * <pre><code class="javascript">var nodes  = $A(someUL.getElementsByTagName('li')).map(Element.extend);
 * var nodes2 = someUL.select('li');</code></pre>
 * <p>In the first example, you must explicitly convert the result set to an <code>Array</code> (so that Prototype&#8217;s <a href="/api/enumerable"><code>Enumerable</code></a> methods can be used) and must manually call <a href="/api/element/extend"><code>Element.extend</code></a> on each node (so that custom instance methods can be used on the nodes). <code>Element#select</code> takes care of both concerns on its own.</p>
 * <p>If you&#8217;re using 1.6 or above (and the performance optimizations therein), the speed difference between these two examples is negligible.</p></div>
 * 
 * 
 * @since 1.6
 * 
 */
Element.prototype.select  = function(element, selector) { return new Array(); };

/**
 * <p>Checks if <code>element</code> matches the given CSS <code>selector</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;ul&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').match('ul');
 * // -> true
 * $('mcintosh').match('li#mcintosh.yummy');
 * // -> true
 * $('fruits').match('p');
 * // -> false
 * </code></pre></div>
 * 
 * @param element
 * @param selector
 * @return Boolean
 */
Element.prototype.match  = function(element, selector) { return false; };

/**
 * someElement.wrap(wrapper[, attributes]) -> HTMLElement</code></pre>
 * <p>Wraps an element inside another, then returns the wrapper.</p></div>
 * <p class="notice">Using <code>wrap</code> as an instance method (e.g., <code>$('foo').wrap('p')</code>) causes errors in Internet Explorer when used on <code>textarea</code> elements. The <code>wrap</code> property is reserved on <code>textarea</code>s as a proprietary extension to HTML. As a workaround, use the generic version instead (<code>Element.wrap('foo', 'p')</code>).</p>
 * <p>If the given element exists on the page, <code>Element#wrap</code> will wrap it in place — its position will remain the same.</p>
 * <p>The <code>wrapper</code> argument can be <em>either</em> an existing <code>HTMLElement</code> <em>or</em> a string representing the tag name of an element to be created. The optional <code>attributes</code> argument can contain a list of attribute/value pairs that will be set on the wrapper using <a href="/api/element/writeAttribute"><code>Element#writeAttribute</code></a>.</p>
 * 
 * @param element
 * @param wrapper
 * @param attributes, argument is optional
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">&lt;table id=&quot;data&quot;&gt;
 *   &lt;tr&gt;
 *     &lt;th&gt;Foo&lt;/th&gt;
 *     &lt;th&gt;Bar&lt;/th&gt;
 *   &lt;/tr&gt;
 *   &lt;tr&gt;
 *     &lt;td&gt;1&lt;/td&gt;
 *     &lt;td&gt;2&lt;/td&gt;
 *   &lt;/tr&gt;
 * &lt;/table&gt;</code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">// approach 1:
 * var div = new Element('div', { 'class': 'table-wrapper' });
 * $('data').wrap(div);
 * // approach 2:
 * $('data').wrap('div', { 'class': 'table-wrapper' });
 * // examples are equivalent. both return the DIV.
 * </code></pre>
 * <h4>Resulting HTML</h4>
 * <pre><code class="html">&lt;div class=&quot;table-wrapper&quot;&gt;
 *   &lt;table id=&quot;data&quot;&gt;
 *     &lt;tr&gt;
 *       &lt;th&gt;Foo&lt;/th&gt;
 *       &lt;th&gt;Bar&lt;/th&gt;
 *     &lt;/tr&gt;
 *     &lt;tr&gt;
 *       &lt;td&gt;1&lt;/td&gt;
 *       &lt;td&gt;2&lt;/td&gt;
 *     &lt;/tr&gt;
 *   &lt;/table&gt;
 * &lt;/div&gt;</code></pre></div>
 * 
 * 
 * @since 1.6
 * 
 */
Element.prototype.wrap  = function(element, wrapper, attributes) { return new HTMLElement(); };

/**
 * <p>Fetches all of  <code>element</code>&#8217;s descendants which have a CSS class of <code>className</code> and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p class="deprecated">As of Prototype 1.6, <code>document.getElementsByClassName</code> has been deprecated since native implementations return a <code>NodeList</code> rather than an <code>Array</code>. Please use <a href="/api/utility/dollar-dollar"><code>$$</code></a> or <a href="/api/element/select"><code>Element#select</code></a> instead.</p>
 * <p>The returned array reflects the document order (e.g. an index of 0 refers to the topmost descendant of <code>element</code> with class <code>className</code>).</p>
 * 
 * @param element
 * @param className
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;apples
 *     &lt;ul&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li id="exotic" class="yummy"&gt;exotic fruits
 *     &lt;ul&gt;
 *       &lt;li id="kiwi"&gt;kiwi&lt;/li&gt;
 *       &lt;li id="granadilla"&gt;granadilla&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').getElementsByClassName('yummy');
 * // -> [li#mutsu, li#mcintosh, li#exotic]
 * $('exotic').getElementsByClassName('yummy');
 * // -> []
 * </code></pre></div>
 *         
 *  @deprecated
 * 
 */
Element.prototype.getElementsByClassName  = function(element, className) { return new Array(); };

/**
 * someElement.setOpacity(opacity) -> [HTMLElement...]</code></pre>
 * <p>Sets the visual opacity of an element while working around inconsistencies in various browsers. The <code>opacity</code> argument should be a floating point number, where the value of 0 is fully transparent and 1 is fully opaque.</p></div>
 * <p><a href="/api/element/setStyle"><code>Element.setStyle</code></a> method uses <code>setOpacity</code> internally when needed.</p>
 * 
 * @param element
 * @param opacity
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">var element = $('myelement');
 * // set to 50% transparency
 * element.setOpacity(0.5);
 * // these are equivalent, but allow for setting more than
 * // one CSS property at once:
 * element.setStyle({ opacity: 0.5 });
 * element.setStyle("opacity: 0.5");
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 */
Element.prototype.setOpacity  = function(element, opacity) { return new Array(); };

/**
 * <p>Removes all of <code>element</code>'s text nodes which contain <em>only</em> whitespace. Returns <code>element</code>.</p></div>
 * <p><code>Element.cleanWhitespace</code> removes whitespace-only text nodes. This can be very useful when using standard methods like <code>nextSibling</code>, <code>previousSibling</code>, <code>firstChild</code> or <code>lastChild</code> to walk the DOM.</p>
 * <p>If you only need to access element nodes (and not text nodes), try using <a href="up"><code>Element.up</code></a>, <a href="down"><code>Element.down</code></a>, <a href="next"><code>Element.next</code></a> and <a href="previous"><code>Element.previous</code></a> instead. you won't regret it!</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <p>Consider the following HTML snippet:</p>
 * <pre><code class="html">
 * &lt;ul id="apples"&gt;
 *   &lt;li&gt;Mutsu&lt;/li&gt;
 *   &lt;li&gt;McIntosh&lt;/li&gt;
 *   &lt;li&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <p>Let's grab what we think is the first list item:</p>
 * <pre><code class="javascript">
 * var element = $('apples');
 * element.firstChild.innerHTML;
 * // -> undefined
 * </code></pre>
 * <p>That doesn't seem to work to well. Why is that ? <code>ul#apples</code>'s first child is actually a text node containing only whitespace that sits between <code>&lt;ul id="apples"&gt;</code> and <code>&lt;li&gt;Mutsu&lt;/li&gt;</code>.</p>
 * <p>Let's remove all this useless whitespace:</p>
 * <pre><code class="javascript">
 * element.cleanWhitespace();
 * </code></pre>
 * <p>That's what our DOM looks like now:</p>
 * <pre><code class="html">
 * &lt;UL id="apples"&gt;&lt;LI&gt;Mutsu&lt;/LI&gt;&lt;LI&gt;McIntosh&lt;/LI&gt;&lt;LI&gt;Ida Red&lt;/LI&gt;&lt;/UL&gt;
 * </code></pre>
 * <p>And guess what, <code>firstChild</code> now works as expected!</p>
 * <pre><code class="javascript">
 * element.firstChild.innerHTML;
 * // -> 'Mutsu'
 * </code></pre></div>
 * 
 */
Element.prototype.cleanWhitespace  = function(element) { return new HTMLElement(); };

/**
 * <p>Fires a custom event with the current element as its target.</p></div>
 * <p><code>Element#fire</code> creates a custom event with the given name, then triggers it on the given element. The custom event has all the same properties and methods of native events. Like a native event, it will bubble up through the DOM unless its propagation is explicitly stopped.</p>
 * <p>The optional second argument will be assigned to the <code>memo</code> property of the event object so that it can be read by event handlers.</p>
 * <p>Custom events are dispatched synchronously: <code>Element#fire</code> waits until the event finishes its life cycle, then returns the event itself.</p>
 * <h3>Note</h3>
 * <p><code>Element#fire</code> does not support firing native events. All custom event names <em>must</em> be namespaced (using a colon). This is to avoid custom event names conflicting with non-standard native DOM events such as <code>mousewheel</code> and <code>DOMMouseScroll</code>.</p>
 * 
 * @param eventName
 * @param memo, argument is optional
 * @return Event
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">document.observe("widget:frobbed", function(event) {
 *   console.log("Element with ID (" + event.target.id +
 *    ") frobbed widget #" + event.memo.widgetNumber + ".");
 * });
 * var someNode = $('foo');
 * someNode.fire("widget:frobbed", { widgetNumber: 19 });
 * //-> "Element with ID (foo) frobbed widget #19."</code></pre>
 * <h3>Tip</h3>
 * <p>Events that have been stopped with <code>Event#stop</code> will have a boolean <code>stopped</code> property set to true. Since <code>Element#fire</code> returns the custom event, you can inspect this property to determine whether the event was stopped.</p></div>
 * 
 * @since 1.6.0
 * 
 */
Element.prototype.fire  = function(eventName, memo) { return new Event(); };

/**
 * <p>Returns a new instance of <code>ClassNames</code>, an <code>Enumerable</code> object used to read and write CSS class names of <code>element</code>.</p></div>
 * <p class="deprecated"><code>Element#classNames</code> has been deprecated. Please use <a href="/api/element/addclassname"><code>Element#addClassName</code></a>, <a href="/api/element/removeclassname"><code>Element#removeClassName</code></a> and <a href="/api/element/hasclassname"><code>Element#hasClassName</code></a> instead.<br /><br />If you need to access class names as an array, try <code>$w(element.className)</code>.</p>
 * <p>Practically, this means that you have access to your element's CSS class names as an <code>Enumerable</code> rather than as the string that the native <code>className</code> property gives you (notice the singular form).</p>
 * <p>On top of that, this <code>Enumerable</code> object is extended with a series of methods specifically targeted at dealing with CSS class names: <code>set(className)</code>, <code>add(className)</code> and <code>remove(className)</code>. These are used internally by <a href="addClassName"><code>Element.addClassName</code></a>, <a href="toggleClassName"><code>Element.toggleClassName</code></a> and <a href="removeClassName"><code>Element.removeClassName</code></a>, but&mdash;unless you want to do some pretty wacky stuff&mdash;you usually won't need to use them.</p>
 * 
 * @param element
 * @return Enumerable
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit food"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').classNames().inspect()
 * // -> "#&lt;Enumerable:['apple', 'fruit', 'food']&gt;"
 * // change its class names:
 * $('mutsu').className = 'fruit round'
 * $('mutsu').classNames().inspect()
 * // -> "#&lt;Enumerable:['fruit', 'food']&gt;"
 * </code></pre></div>
 *         
 *  @deprecated
 * 
 */
Element.prototype.classNames  = function(element) { return new Enumerable(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s descendants and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-herectus"&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').descendants();
 * // -> [div#homo-herectus, div#homo-neanderthalensis, div#homo-sapiens]
 * $('homo-sapiens').descendants();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.prototype.descendants  = function(element) { return new Array(); };

/**
 * <p>Returns <code>element</code>&#8217;s first ancestor (or the <em>index&#8217;th</em> ancestor, if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all ancestors are considered. If no ancestor matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.up</code> method is part of Prototype&#8217;s ultimate DOM traversal toolkit (check out <a href="down"><code>Element.down</code></a>, <a href="next"><code>Element.next</code></a> and <a href="previous"><code>Element.previous</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of <code>element</code>&#8217;s <strong>ancestors</strong>.</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don&#8217;t have to worry about whitespace-only nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>&#8217;s first ancestor is returned (this is similar as calling <code>parentNode</code> except <code>Element.up</code> returns an already <a href="/api/element/extend">extended element</a>.</p>
 * <p>If an index is passed, <code>element</code>&#8217;s corresponding ancestor is is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="ancestors"><code>Element.ancestors</code></a>). Note that the first element has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.up</code> will return the first ancestor that matches it.</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.up</code> will collect all the ancestors matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no descendant is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;html&gt;
 *   [&#8230;]
 *   &lt;body&gt;
 *     &lt;ul id="fruits"&gt;
 *       &lt;li id="apples" class="keeps-the-doctor-away"&gt;
 *         &lt;ul&gt;
 *           &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *           &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *           &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *           &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *         &lt;/ul&gt;
 *       &lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/body&gt;
 * &lt;/html&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').up();
 * // equivalent:
 * $('fruits').up(0);
 * // -> body
 * $('mutsu').up(2);
 * // -> ul#fruits
 * $('mutsu').up('li');
 * // -> li#apples
 * $('mutsu').up('.keeps-the-doctor-away');
 * // -> li#apples
 * $('mutsu').up('ul', 1);
 * // -> ul#fruits
 * $('mutsu').up('div');
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.prototype.up  = function(element, cssRule, index) { return new HTMLElement(); };

/**
 * <p>Displays and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="error-message" style="display:none;"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('error-message').show();
 * // -> HTMLElement (and displays div#error-message)
 * </code></pre>
 * <h3>Notes</h3>
 * <p><code>Element.show</code> <em>cannot</em> display elements hidden via CSS stylesheets. Note that this is not a Prototype limitation but a consequence of how the CSS <code>display</code> property works.</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #hidden-by-css {
 *     display: none;
 *   }
 * &lt;/style&gt;
 * [&#8230;]
 * &lt;div id="hidden-by-css"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('hidden-by-css').show(); // DOES NOT WORK!
 * // -> HTMLElement (div#error-message is still hidden!)
 * </code></pre>
 * <h3>Backwards compatibility change</h3>
 * <p class="deprecated">In previous versions of Prototype, you could pass an arbitrary number of elements to <code>Element.toggle</code>, <code>Element.show</code>, and <code>Element.hide</code>, for consistency, this is <strong>no longer possible</strong> in version 1.5!</p>
 * <p>You can however achieve a similar result by using <a href="/api/enumerable">Enumerables</a>:</p>
 * <pre><code class="javascript">
 * ['content', 'navigation', 'footer'].each(Element.show);
 * // -> ['content', 'navigation', 'footer'] 
 * // and displays #content, #navigation and #footer.
 * </code></pre>
 * <p>or even better:</p>
 * <pre><code class="javascript">
 * $('content', 'navigation', 'footer').invoke('show');
 * // -> [HTMLElement, HTMLElement, HTMLElement] (#content, #navigation and #footer)
 * // and displays #content, #navigation and #footer.
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.show  = function(element) { return new HTMLElement(); };

/**
 * <p>Returns a <code>Boolean</code> indicating whether or not <code>element</code> is visible (i.e. whether its inline <code>style</code> property is set to <code>"display: none;"</code>).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="visible"&gt;&lt;/div&gt;
 * &lt;div id="hidden" style="display: none;"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('visible').visible();
 * // -> true
 * $('hidden').visible();
 * // -> false
 * </code></pre>
 * <h3>Notes</h3>
 * <p>Styles applied via a CSS stylesheet are <em>not</em> taken into consideration. Note that this is not a Prototype limitation, it is a CSS limitation.</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #hidden-by-css {
 *     display: none;
 *   }
 * &lt;/style&gt;
 * [&#8230;]
 * &lt;div id="hidden-by-css"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('hidden-by-css').visible();
 * // -> true
 * </code></pre></div>
 * 
 * @param element
 * @return Boolean
 */
Element.prototype.visible  = function(element) { return false; };

/**
 * <p>Returns <code>element</code>&#8217;s closest <em>positioned</em> ancestor. If none is found, the <code>body</code> element is returned.</p></div>
 * <p>The returned element is <code>element</code>&#8217;s <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a>.</p></div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.getOffsetParent  = function(element) { return new HTMLElement(); };

/**
 * <p>Replaces <code>element</code> by the content of the <code>html</code> argument and returns the removed <code>element</code>.</p></div>
 * <p class="notice">Using <code>replace</code> as an instance method (e.g., <code>$('foo').replace('&lt;p&gt;Bar&lt;/p&gt;')</code>) causes errors in Opera 9 when used on <code>input</code> elements. The <code>replace</code> property is reserved on <code>input</code>s as part of <a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2</a>. As a workaround, use the generic version instead (<code>Element.replace('foo', '&lt;p&gt;Bar&lt;/p&gt;')</code>).</p>
 * <p><code>html</code> can be either plain text, an HTML snippet or any JavaScript object which has a <code>toString()</code> method.</p>
 * <p>If it contains any <code>&lt;script&gt;</code> tags, these will be evaluated after <code>element</code> has been replaced (<code>Element.replace()</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a>).</p>
 * <p>Note that if no argument is provided, <code>Element.replace</code> will simply clear <code>element</code> of its content. However, using <a href="remove"><code>Element.remove</code></a> to do so is both faster and more standard compliant.</p>
 * 
 * @param element
 * @param html, argument is optional
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="food"&gt;
 *   &lt;div id="fruits"&gt;
 *     &lt;p id="first"&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <p>Passing an HTML snippet:</p>
 * <pre><code class="javascript">
 * $('first').replace('&lt;ul id="favorite"&gt;&lt;li&gt;kiwi&lt;/li&gt;&lt;li&gt;banana&lt;/li&gt;&lt;li&gt;apple&lt;/li&gt;&lt;/ul&gt;');
 * // -> HTMLElement (p#first)
 * $('fruits').innerHTML;
 * // -> '&lt;ul id="favorite"&gt;&lt;li&gt;kiwi&lt;/li&gt;&lt;li&gt;banana&lt;/li&gt;&lt;li&gt;apple&lt;/li&gt;&lt;/ul&gt;'
 * </code></pre>
 * <p>Again, with a &lt;script&gt; tag thrown in:</p>
 * <pre><code class="javascript">
 * $('favorite').replace('&lt;p id="still-first"&gt;Melon, oranges &lt;em&gt;and&lt;/em&gt; grapes.&lt;/p&gt;&lt;script&gt;alert("removed!")&lt;/script&gt;');
 * // -> HTMLElement (ul#favorite) and prints "removed!" in an alert dialog.
 * $('fruits').innerHTML
 * // -> '&lt;p id="still-first"&gt;Melon, oranges &lt;em&gt;and&lt;/em&gt; grapes.&lt;/p&gt;'
 * </code></pre>
 * <p>With plain text:</p>
 * <pre><code class="javascript">
 * $('still-first').replace('Melon, oranges and grapes.');
 * // -> HTMLElement (p#still-first)
 * $('fruits').innerHTML
 * // -> 'Melon, oranges and grapes.'
 * </code></pre>
 * <p>Finally, relying on the <code>toString()</code> method:</p>
 * <pre><code class="javascript">
 * $('fruits').replace(123);
 * // -> HTMLElement
 * $('food').innerHTML;
 * // -> '123'
 * </code></pre></div>
 * 
 */
Element.prototype.replace  = function(element, html) { return new HTMLElement(); };

/**
 * <p>Toggles <code>element</code>&#8217;s CSS  <code>className</code> and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').hasClassName('fruit');
 * // -> false
 * $('mutsu').toggleClassName('fruit');
 * // -> element
 * $('mutsu').hasClassName('fruit');
 * // -> true
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return HTMLElement
 */
Element.prototype.toggleClassName  = function(element, className) { return new HTMLElement(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s next siblings and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Two elements are siblings if they have the same parent. So for example, the <code>head</code> and <code>body</code> elements are siblings (their parent is the <code>html</code> element). Next siblings are simply the ones which follow <code>element</code> in the document.</p>
 * <p>The returned array reflects the siblings order in the document (e.g. an index of 0 refers to the sibling right below <code>element</code>).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').nextSiblings();
 * // -> [li#mcintosh, li#ida-red]
 * $('ida-red').nextSiblings();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.prototype.nextSiblings  = function(element) { return new Array(); };

/**
 * <p>Returns the given CSS property value of <code>element</code>. <code>property</code> can be specified in either of its CSS or camelized form.</p></div>
 * <p>This method looks up the CSS property of an element whether it was applied inline or in a stylesheet. It works around browser inconsistencies regarding <code>float</code>, <code>opacity</code>, which returns a value between 0 (fully transparent) and 1 (fully opaque), position properties (<code>left</code>, <code>top</code>, <code>right</code> and <code>bottom</code>) and when getting the dimensions (<code>width</code> or <code>height</code>) of hidden elements.</p>
 * 
 * @param element
 * @param property
 * @return String | null
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $(element).getStyle('font-size');
 * // equivalent:
 * $(element).getStyle('fontSize');
 * // -> '12px'
 * </code></pre>
 * <h3>Notes</h3>
 * <p>Internet Explorer returns literal values while other browsers return computed values. Consider the following HTML snippet:</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #test {
 *     font-size: 12px;
 *     margin-left: 1em;
 *   }
 * &lt;/style&gt;
 * &lt;div id="test"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('test').getStyle('margin-left');
 * // -> '1em' in Internet Explorer,
 * // -> '12px' elsewhere.
 * </code></pre>
 * <p>Safari returns <code>null</code> for <em>any</em> non-inline property if the element is hidden (has <code>display</code> set to <code>'none'</code>).</p>
 * <p>Not all CSS shorthand properties are supported. You may only use the CSS properties described in the <a href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle">Document Object Model (DOM) Level 2 Style Specification</a>.</p></div>
 * 
 */
Element.prototype.getStyle  = function(element, property) { return ""; };

/**
 * <p>Collects all of element&#8217;s siblings and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Two elements are siblings if they have the same parent. So for example, the <code>head</code> and <code>body</code> elements are siblings (their parent is the <code>html</code> element).</p>
 * <p>The returned array reflects the siblings order in the document (e.g. an index of 0 refers to <code>element</code>&#8217;s topmost sibling).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').siblings();
 * // -> [li#golden-delicious, li#mcintosh, li#ida-red]
 * </code></pre></div>
 * 
 */
Element.prototype.siblings  = function(element) { return new Array(); };

/**
 * <p>Completely removes <code>element</code> from the document and returns it.</p></div>
 * <p>If you would rather just hide the element and keep it around for further use, try <a href="hide"><code>Element.hide</code></a> instead.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * // Before:
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').remove();
 * // -> HTMLElement (and removes li#mutsu)
 * </code></pre>
 * <pre><code class="html">
 * // After:
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre></div>
 * 
 */
Element.prototype.remove  = function(element) { return new HTMLElement(); };

/**
 * <p>Takes an arbitrary number of CSS selectors (strings) and returns an array of <a href="/api/element/extend">extended</a> children of <code>element</code> that match any of them.</p></div>
 * <p class="deprecated">As of Prototype 1.6, <code>Element#getElementsBySelector</code> has been deprecated in favor of the more concise <a href="/api/element/select"><code>Element#select</code></a>.</p>
 * <p>This method is very similar to <a href="/api/utility/dollar-dollar">$$()</a> but can be used within the context of one element, rather than the whole document. The supported CSS syntax is identical, so please refer to the <a href="/api/utility/dollar-dollar"><code>$$()</code> docs</a> for details.</p>
 * 
 * @param element
 * @param selector...
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">&lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3 title="yummy!"&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious" title="yummy!" &gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" title="yummy!"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;</code></pre>
 * <pre><code class="javascript">$('apples').getElementsBySelector('[title="yummy!"]');
 * // -> [h3, li#golden-delicious, li#mutsu]
 * $('apples').getElementsBySelector( 'p#saying', 'li[title="yummy!"]');
 * // -> [li#golden-delicious, li#mutsu,  p#saying]
 * $('apples').getElementsBySelector('[title="disgusting!"]');
 * // -> []</code></pre>
 * <h3>Tip</h3>
 * <p><code>Element#getElementsBySelector</code> can be used as a pleasant alternative to <code>getElementsByTagName</code>:</p>
 * <pre><code class="javascript">var nodes  = $A(someUL.getElementsByTagName('li')).map(Element.extend);
 * var nodes2 = someUL.getElementsBySelector('li');</code></pre>
 * <p>In the first example, you must explicitly convert the result set to an <code>Array</code> (so that Prototype&#8217;s <a href="/api/enumerable"><code>Enumerable</code></a> methods can be used) and must manually call <a href="/api/element/extend"><code>Element.extend</code></a> on each node (so that custom instance methods can be used on the nodes). <code>Element#getElementsBySelector</code> takes care of both concerns on its own.</p>
 * <p>If you&#8217;re using 1.5.1 or above (and the performance optimizations therein), the speed difference between these two examples is negligible.</p></div>
 *         
 *  @deprecated
 * 
 */
Element.prototype.getElementsBySelector  = function(element, selector) { return new Array(); };

/**
 * <p>Turns <code>element</code> into an absolutely-positioned element <em>without</em> changing its position in the page layout.</p></div>
 * </div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.absolutize  = function(element) { return new HTMLElement(); };

/**
 * <p>Collects all of the element's  children and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>The returned array reflects the children order in the document (e.g., an index of 0 refers to the topmost child of <code>element</code>).</p>
 * <p>Note that all of Prototype's DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-erectus"&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').childElements();
 * // -> [div#homo-erectus]
 * $('homo-erectus').childElements();
 * // -> [div#homo-neanderthalensis, div#homo-sapiens]
 * $('homo-sapiens').childElements();
 * // -> []
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 */
Element.prototype.childElements  = function(element) { return new Array(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s previous siblings and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Two elements are siblings if they have the same parent. So for example, the <code>head</code> and <code>body</code> elements are siblings (their parent is the <code>html</code> element). Previous siblings are simply the ones which precede <code>element</code> in the document.</p>
 * <p>The returned array reflects the siblings <em>inversed</em> order in the document (e.g. an index of 0 refers to the lowest sibling i.e., the one closest to <code>element</code>).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mcintosh').previousSiblings();
 * // -> [li#mutsu, li#golden-delicious]
 * $('golden-delicious').previousSiblings();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.prototype.previousSiblings  = function(element) { return new Array(); };

/**
 * <p>Allows for the easy creation of <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a> by setting <code>element</code>'s CSS position to <code>'relative'</code> if its initial position is either <code>'static'</code> or <code>undefined</code>. Returns <code>element</code>.</p></div>
 * <p>To revert back to <code>element</code>'s original CSS position, use <a href="undoPositioned">Element.undoPositioned</a>.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <p>Consider the following case:</p>
 * <pre><code class="html">
 * &lt;p&gt;lorem [&#8230;]&lt;/p&gt;
 * &lt;div id="container"&gt;
 *   &lt;div id="element" style="position: absolute; top: 20px; left: 20px;"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <p><img src="/assets/2007/2/24/makepos_before_1.png" alt="example" /></p>
 * <p>To position <code>div#element</code> <em>relatively</em> to it's parent element:</p>
 * <pre><code class="javascript">
 * $('container').makePositioned();
 * // -> HTMLElement
 * </code></pre>
 * <p>Which yields the expected layout:</p>
 * <p><img src="/assets/2007/2/24/makepos_after_1.png" alt="example" /></p></div>
 * 
 */
Element.prototype.makePositioned  = function(element) { return new HTMLElement(); };

/**
 * <p>returns <code>element</code>&#8217;s <code>id</code> attribute if it exists, or sets and returns a unique, auto-generated <code>id</code>.</p></div>
 * <h3>Examples</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">
 *   &lt;ul&gt;
 *     &lt;li id=&quot;apple&quot;&gt;apple&lt;/li&gt;
 *     &lt;li&gt;orange&lt;/li&gt;
 *   &lt;/ul&gt;
 * </code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">
 *   $('apple').identify();
 *   // -> 'apple'
 *   $('apple').next().identify();
 *   // -> 'anonymous_element_1'
 * </code></pre>
 * <h4>resulting HTML</h4>
 * <pre><code class="html">
 *   &lt;ul&gt;
 *     &lt;li id=&quot;apple&quot;&gt;apple&lt;/li&gt;
 *     &lt;li id=&quot;anonymous_element_1&quot;&gt;orange&lt;/li&gt;
 *   &lt;/ul&gt;
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return id
 */
Element.prototype.identify  = function(element) { return ""; };

/**
 * <p>Returns the first child that is <em>an element</em>. This is opposed to <code>firstChild</code> DOM <strong>property</strong> which will return any node (whitespace in most usual cases).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-erectus"&gt;&lt;!-- Latin is super --&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').firstDescendant();
 * // -> div#homo-herectus
 * // the DOM property returns any first node
 * $('homo-herectus').firstChild;
 * // -> comment node "Latin is super"
 * // this is what we want!
 * $('homo-herectus').firstDescendant();
 * // -> div#homo-neanderthalensis
 * </code></pre></div>
 * 
 * 
 * @since 1.5.1
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.firstDescendant  = function(element) { return new HTMLElement(); };

/**
 * <p>Returns the offsets of <code>element</code> from the top left corner of the document.</p></div>
 * <p>Adds the cumulative <code>offsetLeft</code> and <code>offsetTop</code> of an element and all its parents.</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.prototype.cumulativeOffset  = function(element) { return {left : 0, top: 0}; };

/**
 * <p>Checks if <code>element</code> is a descendant of <code>ancestor</code>.</p></div>
 * <p>As <code>Element.descendantOf</code> internally applies <code>$()</code> to <code>ancestor</code>, it accepts indifferently an element or an element&#8217;s id as its second argument.</p>
 * 
 * @param element
 * @param ancestor
 * @return Boolean 
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-herectus"&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('homo-sapiens').descendantOf('australopithecus');
 * // -> true
 * $('homo-herectus').descendantOf('homo-sapiens');
 * // -> false
 * </code></pre></div>
 * 
 */
Element.prototype.descendantOf  = function(element, ancestor) { return false; };

/**
 * <p>Returns element&#8217;s first descendant (or the n-th descendant if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all descendants are considered. If no descendant matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.down</code> method is part of Prototype&#8217;s ultimate DOM traversal toolkit (check out <a href="up"><code>Element.up</code></a>, <a href="next"><code>Element.next</code></a> and <a href="previous"><code>Element.previous</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of the element&#8217;s descendants.</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don&#8217;t have to worry about whitespace nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>&#8217;s first descendant is returned (this is similar as calling <code>firstChild</code> except <code>Element.down</code> returns an already <a href="/api/element/extend">extended element</a>.</p>
 * <p>If an index is passed, <code>element</code>&#8217;s corresponding descendant is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="descendants"><code>Element.descendants</code></a>.) Note that the first element has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.down</code> will return the first descendant that matches it. This is a great way to grab the first item in a list for example (just pass in &#8216;li&#8217; as the method&#8217;s first argument).</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.down</code> will collect all the descendants matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no descendant is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;ul&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').down();
 * // equivalent:
 * $('fruits').down(0);
 * // -> li#apple
 * $('fruits').down(3);
 * // -> li#golden-delicious
 * $('apples').down('li');
 * // -> li#golden-delicious
 * $('apples').down('li.yummy');
 * // -> li#mutsu
 * $('fruits').down('.yummy', 1);
 * // -> li#mcintosh
 * $('fruits').down(99);
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.prototype.down  = function(element, cssRule, index) { return new Element(); };

/**
 * <p>Finds and returns the computed width of <code>element</code>.</p></div>
 * <p>This method returns correct values on elements whose display is set to <code>none</code> either in an inline style rule or in an CSS stylesheet.</p>
 * <p>For performance reasons, if you need to query both width <em>and</em> height of <code>element</code>, you should consider using <a href="getDimensions"><code>Element.getDimensions</code></a> instead.</p>
 * <p>Note that the value returned is a <em>number only</em>  although it is <em>expressed in pixels</em>.</p>
 * 
 * @param element
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('rectangle').getWidth();
 * // -> 200
 * </code></pre></div>
 * 
 */
Element.prototype.getWidth  = function(element) { return 0; };

/**
 * <p>Unregisters <code>handler</code> and returns <code>element</code>.</p></div>
 * <p>This is a simple proxy for <a href="/api/event/stopObserving">Event.stopObserving</a>. Please refer to it for further information.</p>
 * 
 * @param element
 * @param eventName
 * @param handler
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * $(element).stopObserving('click', coolAction);
 * // -> HTMLElement (and unregisters the 'coolAction' event handler).
 * </code></pre></div>
 * 
 */
Element.prototype.stopObserving  = function(element, eventName, handler) { return new HTMLElement(); };

/**
 * <p>Turns <code>element</code> into an relatively-positioned element <em>without</em> changing its position in the page layout.</p></div>
 * </div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.relativize  = function(element) { return new HTMLElement(); };

/**
 * <p>Finds and returns the computed height of <code>element</code>.</p></div>
 * <p>This method returns correct values on elements whose display is set to <code>none</code> either in an inline style rule or in an CSS stylesheet.</p>
 * <p>For performance reasons, if you need to query both width <em>and</em> height of <code>element</code>, you should consider using <a href="getDimensions"><code>Element.getDimensions</code></a> instead.</p>
 * <p>Note that the value returned is a <em>number only</em>  although it is <em>expressed in pixels</em>.</p>
 * 
 * @param element
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('rectangle').getHeight();
 * // -> 100
 * </code></pre></div>
 * 
 */
Element.prototype.getHeight  = function(element) { return 0; };

/**
 * <p>Returns the debug-oriented string representation of <code>element</code>.</p></div>
 * <p>For more information on <code>inspect</code> methods, see <a href="/api/object/inspect"><code>Object.inspect</code></a>.</p>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu" class="yummy apple"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *   &lt;li&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('golden-delicious').inspect();
 * // -> '&lt;li id="golden-delicious"&gt;'
 * $('mutsu').inspect();
 * // -> '&lt;li id="mutsu" class="yummy apple"&gt;'
 * $('mutsu').next().inspect();
 * // -> '&lt;li&gt;'
 * </code></pre></div>
 * 
 * @param element
 * @return String
 */
Element.prototype.inspect  = function(element) { return ""; };

/**
 * <p>Simulates the poorly supported CSS <code>clip</code> property by setting <code>element</code>'s overflow value to <code>'hidden'</code>. Returns <code>element</code>.</p></div>
 * <p>To undo clipping, use <a href="undoClipping">Element.undoClipping</a>.</p>
 * <p>The visible area is determined by <code>element</code>'s width and height.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="html">
 * &lt;div id="framer"&gt;
 *   &lt;img src="/assets/2007/1/14/chairs.jpg" alt="example" /&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * // -> HTMLElement
 * </code></pre>
 * <p><a id="clipper" href="#">Click me to try it out.</a></p>
 * <div id="framer">
 *   <img src="/assets/2007/2/24/chairs.jpg" alt="example" />
 * </div>
 * <script type="text/javascript" charset="utf-8">
 * var Example = {};
 * Example.clip = function(){
 *   $('clipper').update('undo clipping!');
 *   $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * };
 * Example.unClip = function(){
 *   $('clipper').update('clip!');
 *   $('framer').undoClipping();
 * };
 * Example.toggleClip = function(event){
 *   if($('clipper').innerHTML == 'undo clipping!') Example.unClip();
 *   else Example.clip();
 *   Event.stop(event);
 * };
 * Event.observe('clipper', 'click', Example.toggleClip);
 * </script></div>
 * 
 */
Element.prototype.makeClipping  = function(element) { return new HTMLElement(); };

/**
 * <p>Sets <code>element</code>&#8217;s CSS <code>overflow</code> property back to the value it had before <a href="makeClipping">Element.makeClipping()</a> was applied. Returns <code>element</code>.</p></div>
 * <h3>Example</h3>
 * <pre><code class="html">
 * &lt;div id="framer"&gt;
 *   &lt;img src="/assets/2007/1/14/chairs.jpg" alt="example" /&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('framer').undoClipping();
 * // -> HTMLElement (and sets the CSS overflow property to its original value).
 * </code></pre>
 * <p><a id="clipper" href="#">Click me to try it out.</a></p>
 * <div id="framer">
 *   <img src="/assets/2007/2/24/chairs_1.jpg" alt="example" />
 * </div>
 * <script type="text/javascript" charset="utf-8">
 * var Example = {};
 * Example.clip = function(){
 *   $('clipper').update('undo clipping!');
 *   $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * };
 * Example.unClip = function(){
 *   $('clipper').update('clip!');
 *   $('framer').undoClipping();
 * };
 * Example.toggleClip = function(event){
 *   if($('clipper').innerHTML == 'clip!') Example.clip();
 *   else Example.unClip();
 *   Event.stop(event);
 * };
 * $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * Event.observe('clipper', 'click', Example.toggleClip);
 * </script></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.prototype.undoClipping  = function(element) { return new HTMLElement(); };

/**
 * <p>Clones the position and/or dimensions of <code>source</code> onto <code>element</code> as defined by the optional argument <code>options</code>. </p></div>
 * <p>Note that <code>target</code> will be positioned exactly like <code>source</code> whether or not it is part of the same <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a>.</p>
 * <h3>Options</h3>
 * <table>
 * <thead>
 *   <tr>
 *     <th>Name</th>
 *     <th>Default</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *   <td><code>setLeft</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>left</code> CSS property onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setTop</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>top</code> CSS property onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setWidth</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>width</code> onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setHeight</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>width</code> onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>offsetLeft</code></td>
 *   <td><code>0</code></td>
 *   <td>Number by which to offset <code>element</code>&#8217;s <code>left</code> CSS property.</td>
 * </tr>
 * <tr>
 *   <td><code>offsetTop</code></td>
 *   <td><code>0</code></td>
 *   <td>Number by which to offset <code>element</code>&#8217;s <code>top</code> CSS property.</td>
 * </tr>
 * </tbody>
 * </table></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @param source
 * @param options, argument is optional
 * @return HTMLElement
 */
Element.prototype.clonePosition  = function(element, source, options) { return new HTMLElement(); };

/**
 * <p>Replaces the content of <code>element</code> with the provided <code>newContent</code> argument and returns <code>element</code>.</p></div>
 * <p><code>newContent</code> can be plain text, an HTML snippet, or any JavaScript object which has a <code>toString()</code> method.</p>
 * <p>If the new content contains any inline <code>&lt;script&gt;</code> tags (script tags containing the code directly, rather than referring to a separate file), <code>update</code> will extract them and evaluate them via <a href="/api/string/evalScripts"><code>String#evalScripts</code></a> <em>after</em> updating the content.  See <code>String#evalScripts</code> for details.</p>
 * <p>If no argument is provided, <code>Element.update</code> will simply clear <code>element</code> of its content.</p>
 * <p>Note that this method allows seamless content update of table related elements in Internet Explorer 6 and beyond.</p>
 * 
 * @param element
 * @param newContent, argument is optional
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="fruits"&gt;carrot, eggplant and cucumber&lt;/div&gt;
 * </code></pre>
 * <p>Passing a regular string:</p>
 * <pre><code class="javascript">
 * $('fruits').update('kiwi, banana and apple');
 * // -> HTMLElement
 * $('fruits').innerHTML
 * // -> 'kiwi, banana and apple'
 * </code></pre>
 * <p>Clearing the element&#8217;s content:</p>
 * <pre><code class="javascript">
 * $('fruits').update();
 * // -> HTMLElement
 * $('fruits').innerHTML;
 * // -> '' (an empty string)
 * </code></pre>
 * <p>And now inserting an HTML snippet:</p>
 * <pre><code class="javascript">
 * $('fruits').update('&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;');
 * // -> HTMLElement
 * $('fruits').innerHTML;
 * // -> '&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;'
 * </code></pre>
 * <p>&#8230; with a &lt;script&gt; tag thrown in:</p>
 * <pre><code class="javascript">
 * $('fruits').update('&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;&lt;script&gt;alert("updated!")&lt;/script&gt;');
 * // -> HTMLElement (and prints "updated!" in an alert dialog).
 * $('fruits').innerHTML;
 * // -> '&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;'
 * </code></pre>
 * <p>Relying on the <code>toString()</code> method:</p>
 * <pre><code class="javascript">
 * $('fruits').update(123);
 * // -> HTMLElement
 * $('fruits').innerHTML;
 * // -> '123'
 * </code></pre>
 * <p>Finally, you can do some pretty funky stuff by defining your own <code>toString()</code> method on your custom objects:</p>
 * <pre><code class="javascript">
 * var Fruit = Class.create();
 * Fruit.prototype = {
 *   initialize: function(fruit){
 *     this.fruit = fruit;
 *   },
 *   toString: function(){
 *     return 'I am a fruit and my name is "' + this.fruit + '".'; 
 *   }
 * }
 * var apple = new Fruit('apple');
 * $('fruits').update(apple);
 * $('fruits').innerHTML;
 * // -> 'I am a fruit and my name is "apple".'
 * </code></pre></div>
 * 
 */
Element.prototype.update  = function(element, newContent) { return new HTMLElement(); };

/**
 * someElement.observe(eventName, handler) -> HTMLElement</code></pre>
 * <p>Registers an event handler on <code>element</code> and returns <code>element</code>.</p></div>
 * <p>This is a simple proxy for <a href="/api/event/observe">Event.observe</a>. Please refer to it for further information.</p>
 * 
 * @param element
 * @param eventName
 * @param handler
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * $(element).observe('click', function(event){
 *   alert(Event.element(event).innerHTML);
 *  });
 * // -> HTMLElement (and will display an alert dialog containing 
 * // element's innerHTML when element is clicked).
 * </code></pre></div>
 * 
 */
Element.prototype.observe  = function(element, eventName, handler) { return new HTMLElement(); };

/**
 * <p>Returns <code>element</code>&#8217;s offset relative to its closest positioned ancestor (the element that would be returned by <a href="/api/api/getoffsetparent">Element#getOffsetParent</a>).</p></div>
 * <p>Calculates the cumulative <code>offsetLeft</code> and <code>offsetTop</code> of an element and all its parents <em>until</em> it reaches an element with a position other than <code>static</code>.</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.prototype.positionedOffset  = function(element) { return {left : 0, top: 0}; };

//Element.Methods


/**
 * <p>Hides and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="error-message"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('error-message').hide();
 * // -> HTMLElement (and hides div#error-message)
 * </code></pre>
 * <h3>Backwards compatibility change</h3>
 * <p class="deprecated">In previous versions of Prototype, you could pass an arbitrary number of elements to <code>Element.toggle</code>, <code>Element.show</code>, and <code>Element.hide</code>, for consistency, this is <strong>no longer possible</strong> in version 1.5!</p>
 * <p>You can however achieve a similar result by using <a href="/api/enumerable">Enumerables</a>:</p>
 * <pre><code class="javascript">
 * ['content', 'navigation', 'footer'].each(Element.hide);
 * // -> ['content', 'navigation', 'footer'] 
 * // and hides #content, #navigation and #footer.
 * </code></pre>
 * <p>or even better:</p>
 * <pre><code class="javascript">
 * $('content', 'navigation', 'footer').invoke('hide');
 * // -> [HTMLElement, HTMLElement, HTMLElement] (#content, #navigation and #footer)
 * // and hides #content, #navigation and #footer.
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.hide  = function(element) { return new HTMLElement(); };

/**
 * <p>Calculates the cumulative scroll offset of an element in nested scrolling containers.</p></div>
 * <p>Adds the cumulative <code>scrollLeft</code> and <code>scrollTop</code> of an element and all its parents.</p>
 * <p>Used for calculating the scroll offset of an element that is in more than one scroll container (e.g., a draggable in a scrolling container which is itself part of a scrolling document).</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.Methods.prototype.cumulativeScrollOffset  = function(element) { return {left: 0, top: 0}; };

/**
 * <p>Removes <code>element</code>&#8217;s CSS <code>className</code> and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit food"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').removeClassName('food');
 * // -> HTMLElement
 * $('mutsu').classNames();
 * // -> ['apple', 'fruit']
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return HTMLElement
 */
Element.Methods.prototype.removeClassName  = function(element, className) { return new HTMLElement(); };

/**
 * <p>Scrolls the window so that <code>element</code> appears at the top of the viewport. Returns <code>element</code>.</p></div>
 * <p>This has a similar effect than what would be achieved using <a href="http://www.w3.org/TR/html401/struct/links.html#h-12.2.3">HTML anchors</a> (except the browser&#8217;s history is not modified).</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * $(element).scrollTo();
 * // -> HTMLElement
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.scrollTo  = function(element) { return HTMLElement; };

/**
 * <p>Returns <code>element</code>&#8217;s following sibling (or the <em>index&#8217;th</em> one, if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all following siblings are considered. If no following sibling matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.next</code> method is part of Prototype&#8217;s ultimate DOM traversal toolkit (check out <a href="up"><code>Element.up</code></a>, <a href="down"><code>Element.down</code></a> and <a href="previous"><code>Element.previous</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of <code>element</code>&#8217;s <strong>following siblings</strong>. (Note that two elements are considered siblings if they have the same parent, so for example, the <code>head</code> and <code>body</code> elements are siblings&#8212;their parent is the <code>html</code> element.)</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don&#8217;t have to worry about whitespace-only nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>&#8217;s following sibling is returned (this is similar as calling <code>nextSibling</code> except <code>Element.next</code> returns an already <a href="/api/element/extend">extended element</a>).</p>
 * <p>If an index is passed, <code>element</code>&#8217;s corresponding following sibling is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="nextSiblings"><code>Element.nextSiblings</code></a>). Note that the sibling <em>right below</em> <code>element</code> has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.next</code> will return the <code>element</code> first following sibling that matches it.</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.next</code> will collect all of <code>element</code>&#8217;s following siblings matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no following sibling is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3 id="title"&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red" class="yummy"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('list-of-apples').next();
 * // equivalent:
 * $('list-of-apples').next(0);
 * // -> p#sayings
 * $('title').next(1);
 * // -> ul#list-of-apples
 * $('title').next('p');
 * // -> p#sayings
 * $('golden-delicious').next('.yummy');
 * // -> li#mcintosh
 * $('golden-delicious').next('.yummy', 1);
 * // -> li#ida-red
 * $('ida-red').next();
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.next  = function(element, cssRule, index) { return new HTMLElement(); };

/**
 * <p>Toggles the visibility of <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="welcome-message"&gt;&lt;/div&gt;
 * &lt;div id="error-message" style="display:none;"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('welcome-message').toggle();
 * // -> HTMLElement (and hides div#welcome-message)
 * $('error-message').toggle();
 * // -> HTMLElement (and displays div#error-message)
 * </code></pre>
 * <h3>Notes</h3>
 * <p><code>Element.toggle</code> <em>cannot</em> display elements hidden via CSS stylesheets. Note that this is not a Prototype limitation but a consequence of how the CSS <code>display</code> property works.</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #hidden-by-css {
 *     display: none;
 *   }
 * &lt;/style&gt;
 * [&#8230;]
 * &lt;div id="hidden-by-css"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('hidden-by-css').toggle(); // WONT' WORK!
 * // -> HTMLElement (div#hidden-by-css is still hidden!)
 * </code></pre>
 * <h3>Backwards compatibility change</h3>
 * <p class="deprecated">In previous versions of Prototype, you could pass an arbitrary number of elements to <code>Element.toggle</code>, <code>Element.show</code>, and <code>Element.hide</code>, for consistency, this is <strong>no longer possible</strong> in version 1.5!</p>
 * <p>You can however achieve a similar result by using <a href="/api/enumerable">Enumerables</a>:</p>
 * <pre><code class="javascript">
 * ['error-message', 'welcome-message'].each(Element.toggle);
 * // -> ['error-message', 'welcome-message'] 
 * // and toggles the visibility of div#error-message and div#confirmation-message.
 * </code></pre>
 * <p>or even better:</p>
 * <pre><code class="javascript">
 * $('error-message', 'welcome-message').invoke('toggle');
 * // -> [HTMLElement, HTMLElement] (div#error-message and div#welcome-message)
 * // and toggles the visibility of div#error-message and div#confirmation-message.
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.toggle  = function(element) { return new HTMLElement; };

/**
 * <p>Finds the computed <code>width</code> and <code>height</code> of <code>element</code> and returns them as key/value pairs of an object.</p></div>
 * <p>This method returns correct values on elements whose display is set to <code>none</code> either in an inline style rule or in an CSS stylesheet.</p>
 * <p>In order to avoid calling the method twice, you should consider caching the values returned in a variable as shown below. If you only need <code>element</code>&#8217;s width or height, consider using <a href="getWidth"><code>Element.getWidth</code></a> or <a href="getHeight"><code>Element.getHeight</code></a> instead.</p>
 * <p>Note that all values are returned as <em>numbers only</em>  although they are <em>expressed in pixels</em>.</p>
 * 
 * @param element
 * @return {height: Number
 * @param width: Number}</code></pre>
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * var dimensions = $('rectangle').getDimensions();
 * // -> {width: 200, height: 100}
 * dimensions.width;
 * // -> 200
 * dimensions.height;
 * // -> 100
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.getDimensions  = function(element) { return {height: Number, width: Number}; };

/**
 * someElement.adjacent([selectors...]) -> [HTMLElement...]</code></pre>
 * <p>Finds all siblings of the current element that match the given selector(s).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">&lt;ul id=&quot;cities&quot;&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;nyc&quot;&gt;New York&lt;/li&gt;
 *     &lt;li class=&quot;uk&quot; id=&quot;lon&quot;&gt;London&lt;/li&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;chi&quot;&gt;Chicago&lt;/li&gt;
 *     &lt;li class=&quot;jp&quot; id=&quot;tok&quot;&gt;Tokyo&lt;/li&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;la&quot;&gt;Los Angeles&lt;/li&gt;
 *     &lt;li class=&quot;us&quot; id=&quot;aus&quot;&gt;Austin&lt;/li&gt;
 *   &lt;/ul&gt;</code></pre>
 * <pre><code class="javascript">$('nyc').adjacent('li.us');
 * //-> [&lt;li#chi, li#la, li#aus&gt;]
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @param selectors..., argument is optional
 * @return [HTMLElement...]
 */
Element.Methods.prototype.adjacent  = function(element, selector) { return new Array(); };

/**
 * <p>Adds a CSS class to <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').addClassName('food')
 * $('mutsu').className
 * // -> 'apple fruit food'
 * $('mutsu').classNames()
 * // -> ['apple', 'fruit', 'food']
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return HTMLElement 
 */
Element.Methods.prototype.addClassName  = function(element, className) { return new HTMLElement(); };

/**
 * <p>Sets <code>element</code> back to the state it was <em>before</em> <a href="makePositioned">Element.makePositioned</a> was applied to it. Returns <code>element</code>.</p></div>
 * <p><code>element</code>'s absolutely positioned children will now have their positions set relatively to <code>element</code>'s nearest ancestor with a CSS <code>position</code> of  <code>'absolute'</code>, <code>'relative'</code> or <code>'fixed'</code>.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="html">
 * &lt;p&gt;lorem [&#8230;]&lt;/p&gt;
 * &lt;div id="container"&gt;
 *   &lt;div id="element" style="position: absolute; top: 20px; left: 20px;"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('container').makePositioned();
 * // -> HTMLElement
 * </code></pre>
 * <p><img src="/assets/2007/2/24/makepos_after.png" alt="example" /></p>
 * <p>To return to the orginal layout, use <code>Element.undoPositioned</code>;</p>
 * <pre><code class="javascript">
 * $('container').undoPositioned();
 * // -> HTMLElement
 * </code></pre>
 * <p><img src="/assets/2007/2/24/makepos_before.png" alt="example" /></p></div>
 * 
 */
Element.Methods.prototype.undoPositioned  = function(element) { return new HTMLElement(); };

/**
 * writeAttribute(element, attributes) -> HTMLElement</code></pre>
 * <p>Adds, specifies or removes attributes passed as either a hash or a name/value pair.</p></div>
 * </div>
 *     
 * @since 1.6
 * 
 * @param element
 * @param attribute
 * @param value = true, argument is optional
 * @return HTMLElement
 */
Element.Methods.prototype.writeAttribute  = function(element, attribute, value) { return new HTMLElement; };

/**
 * <p>Checks whether <code>element</code> has the given CSS <code>className</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit food"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').hasClassName('fruit');
 * // -> true
 * $('mutsu').hasClassName('vegetable');
 * // -> false
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return Boolean
 */
Element.Methods.prototype.hasClassName  = function(element, className) { return false; };

/**
 * <p>Modifies <code>element</code>&#8217;s CSS style properties. Styles are passed as a hash of property-value pairs in which the properties are specified in their camelized form.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $(element).setStyle({
 *   backgroundColor: '#900',
 *   fontSize: '12px'
 * });
 * // -> HTMLElement
 * </code></pre>
 * <h3>Notes</h3>
 * <p>The method transparently deals with browser inconsistencies for <code>float</code>&#8212;however, as <code>float</code> is a reserved keyword, you must either escape it or use <code>cssFloat</code> instead&#8212;and <code>opacity</code>&#8212;which accepts values between 0 (fully transparent) and 1 (fully opaque). You can safely use either of the following across all browsers:</p>
 * <pre><code class="javascript">
 * $(element).setStyle({
 *   cssFloat: 'left',
 *   opacity: 0.5
 * });
 * // -> HTMLElement
 * $(element).setStyle({
 *   'float': 'left', // notice how float is surrounded by single quotes
 *   opacity: 0.5
 * });
 * // -> HTMLElement
 * </code></pre>
 * <p>Not all CSS shorthand properties are supported. You may only use the CSS properties described in the <a href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle">Document Object Model (DOM) Level 2 Style Specification</a>.</p></div>
 * 
 * @param element
 * @param styles
 * @return HTMLElement
 */
Element.Methods.prototype.setStyle  = function(element, styles) { return new HTMLElement(); };

/**
 * <p>Returns the X/Y coordinates of <code>element</code> relative to the <em>viewport</em>.</p></div>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.Methods.prototype.viewportOffset  = function(element) { return {left: 0, top: 0}; };

/**
 * <p>Tests whether <code>element</code> is empty (i.e. contains only whitespace).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="wallet"&gt;     &lt;/div&gt;
 * &lt;div id="cart"&gt;full!&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('wallet').empty();
 * // -> true
 * $('cart').empty();
 * // -> false
 * </code></pre></div>
 * 
 * @param element
 * @return Boolean
 */
Element.Methods.prototype.empty  = function(element) { return false; };

/**
 * <p>Returns <code>element</code>'s previous sibling (or the <em>index'th</em> one, if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all previous siblings are considered. If no previous sibling matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.previous</code> method is part of Prototype's ultimate DOM traversal toolkit (check out <a href="up"><code>Element.up</code></a>, <a href="down"><code>Element.down</code></a> and <a href="next"><code>Element.next</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of <code>element</code>'s <strong>previous siblings</strong>. (Note that two elements are considered siblings if they have the same parent, so for example, the <code>head</code> and <code>body</code> elements are siblings&#8212;their parent is the <code>html</code> element.)</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don't have to worry about whitespace-only nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>'s previous sibling is returned (this is similar as calling <code>previousSibling</code> except <code>Element.previous</code> returns an already <a href="/api/element/extend">extended element</a>).</p>
 * <p>If an index is passed, <code>element</code>'s corresponding previous sibling is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="previousSiblings"><code>previousSiblings()</code></a>). Note that the sibling <em>right above</em> <code>element</code> has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.previous</code> will return the <code>element</code> first previous sibling that matches it.</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.previous</code> will collect all of <code>element</code>'s previous siblings matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no previous sibling is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious" class="yummy"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('saying').previous();
 * // equivalent:
 * $('saying').previous(0);
 * // -> ul#list-of-apples
 * $('saying').previous(1);
 * // -> h3
 * $('saying').previous('h3');
 * // -> h3
 * $('ida-red').previous('.yummy');
 * // -> li#mutsu
 * $('ida-red').previous('.yummy', 1);
 * // -> li#golden-delicious
 * $('ida-red').previous(5);
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.previous  = function(element, cssRule, index) { return new HTMLElement(); };

/**
 * insert(element, content) -> HTMLElement</code></pre>
 * <p>Inserts <code>content</code> before, after, at the top of, or at the bottom of <code>element</code>, as specified by the <code>position</code> property of the second argument. If the second argument is the content itself, <code>insert</code> will append it to <code>element</code>.</p></div>
 * <p><code>insert</code> accepts the following kind of content: text, HTML, DOM element, and any kind of object with a <code>toHTML</code> or <code>toElement</code> method.</p>
 * <p>Note that if the inserted HTML contains any <code>&lt;script&gt;</code> tag, these will be automatically evaluated after the insertion (<code>insert</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a> when inserting HTML). </p></div>
 * 
 * 
 * @since 1.6
 * 
 * @param element
 * @param { position: content }
 * @return HTMLElement
 */
Element.Methods.prototype.insert  = function(element, position) { return new HTMLElement(); };

/**
 * <p>Returns the value of <code>element</code>'s <code>attribute</code> or <code>null</code> if <code>attribute</code> has not been specified.</p></div>
 * <p>This method serves two purposes. First it acts as a simple wrapper around <code>getAttribute</code> which isn't a "real" function in Safari and Internet Explorer (it doesn't have <code>.apply</code> or <code>.call</code> for  instance). Secondly, it cleans up the horrible mess Internet Explorer makes when handling attributes.</p>
 * 
 * @param element
 * @param attribute
 * @return String | null
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;a id="tag" href="/tags/prototype" rel="tag" title="view related bookmarks." my_widget="some info."&gt;Prototype&lt;/a&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('tag').readAttribute('href');
 * // -> '/tags/prototype'
 * $('tag').readAttribute('title');
 * // -> 'view related bookmarks.'
 * $('tag').readAttribute('my_widget');
 * // -> 'some info.'
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.readAttribute  = function(element, attribute) { return ""; };

/**
 * <p>Recursively collects elements whose relationship is specified by <code>property</code>. <code>property</code> has to be a <em>property</em> (a method won&#8217;t do!) of <code>element</code> that points to a <em>single</em> DOM node. Returns an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>This method is used internally by <a href="ancestors"><code>Element.ancestors</code></a>, <a href="descendants"><code>Element.descendants</code></a>, <a href="nextSiblings"><code>Element.nextSiblings</code></a>, <a href="previousSiblings"><code>Element.previousSiblings</code></a> and <a href="siblings"><code>Element.siblings</code></a> which offer really convenient way to grab elements, so directly accessing <code>Element.recursivelyCollect</code> should seldom be needed. However, if you are after something out of the ordinary, it is the way to go.</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @param property
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious"&gt;&lt;p&gt;Golden Delicious&lt;/p&gt;&lt;/li&gt;
 *       &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').recursivelyCollect('firstChild');
 * // -> [li#apples, ul#list-of-apples, li#golden-delicious, p]
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.recursivelyCollect  = function(element, property) { return new Array(); };

/**
 * <p>Collects all of the element&#8217;s <em>immediate</em> descendants (i.e. <em>children</em>) and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p class="deprecated">As of Prototype 1.6, <code>Element#immediateDescendants</code> has been deprecated in favor of <a href="/api/element/childelements"><code>Element#childElements</code></a>.</p>
 * <p>The returned array reflects the children order in the document (e.g., an index of 0 refers to the topmost child of <code>element</code>).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-erectus"&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').immediateDescendants();
 * // -> [div#homo-erectus]
 * $('homo-erectus').immediateDescendants();
 * // -> [div#homo-neanderthalensis, div#homo-sapiens]
 * $('homo-sapiens').immediateDescendants();
 * // -> []
 * </code></pre></div>
 *         
 *  @deprecated
 * 
 */
Element.Methods.prototype.immediateDescendants  = function(element) { return new Array(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s ancestors and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>The returned array&#8217;s first element is <code>element</code>&#8217;s direct ancestor (its <code>parentNode</code>), the second one is its grandparent and so on until the <code>html</code> element is reached. <code>html</code> will always be the last member of the array&#8230; unless you are looking for its ancestors obviously. But you wouldn&#8217;t do that, would you ?</p>
 * <p>Note that all of Prototype’s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;html&gt;
 * [&#8230;]
 *   &lt;body&gt;
 *     &lt;div id="father"&gt;
 *       &lt;div id="kid"&gt;
 *       &lt;/div&gt;
 *     &lt;/div&gt;
 *   &lt;/body&gt;
 * &lt;/html&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('kid').ancestors();
 * // -> [div#father, body, html]  // Keep in mind that 
 * // the `body` and `html` elements will also be included!
 * document.getElementsByTagName('html')[0].ancestors();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.ancestors  = function(element) { return new Array(); };

/**
 * <p>Takes an arbitrary number of CSS selectors (strings) and returns an array of <a href="/api/element/extend">extended</a> descendants of <code>element</code> that match any of them.</p></div>
 * <p>This method is very similar to <a href="/api/utility/dollar-dollar">$$()</a> but can be used within the context of one element, rather than the whole document. The supported CSS syntax is identical, so please refer to the <a href="/api/utility/dollar-dollar"><code>$$()</code> docs</a> for details.</p>
 * 
 * @param element
 * @param selector...
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">&lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3 title="yummy!"&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious" title="yummy!" &gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" title="yummy!"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;</code></pre>
 * <pre><code class="javascript">$('apples').select('[title="yummy!"]');
 * // -> [h3, li#golden-delicious, li#mutsu]
 * $('apples').select( 'p#saying', 'li[title="yummy!"]');
 * // -> [li#golden-delicious, li#mutsu,  p#saying]
 * $('apples').select('[title="disgusting!"]');
 * // -> []</code></pre>
 * <h3>Tip</h3>
 * <p><code>Element#select</code> can be used as a pleasant alternative to the native method <code>getElementsByTagName</code>:</p>
 * <pre><code class="javascript">var nodes  = $A(someUL.getElementsByTagName('li')).map(Element.extend);
 * var nodes2 = someUL.select('li');</code></pre>
 * <p>In the first example, you must explicitly convert the result set to an <code>Array</code> (so that Prototype&#8217;s <a href="/api/enumerable"><code>Enumerable</code></a> methods can be used) and must manually call <a href="/api/element/extend"><code>Element.extend</code></a> on each node (so that custom instance methods can be used on the nodes). <code>Element#select</code> takes care of both concerns on its own.</p>
 * <p>If you&#8217;re using 1.6 or above (and the performance optimizations therein), the speed difference between these two examples is negligible.</p></div>
 * 
 * 
 * @since 1.6
 * 
 */
Element.Methods.prototype.select  = function(element, selector) { return new Array(); };

/**
 * <p>Checks if <code>element</code> matches the given CSS <code>selector</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;ul&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').match('ul');
 * // -> true
 * $('mcintosh').match('li#mcintosh.yummy');
 * // -> true
 * $('fruits').match('p');
 * // -> false
 * </code></pre></div>
 * 
 * @param element
 * @param selector
 * @return Boolean
 */
Element.Methods.prototype.match  = function(element, selector) { return false; };

/**
 * someElement.wrap(wrapper[, attributes]) -> HTMLElement</code></pre>
 * <p>Wraps an element inside another, then returns the wrapper.</p></div>
 * <p class="notice">Using <code>wrap</code> as an instance method (e.g., <code>$('foo').wrap('p')</code>) causes errors in Internet Explorer when used on <code>textarea</code> elements. The <code>wrap</code> property is reserved on <code>textarea</code>s as a proprietary extension to HTML. As a workaround, use the generic version instead (<code>Element.wrap('foo', 'p')</code>).</p>
 * <p>If the given element exists on the page, <code>Element#wrap</code> will wrap it in place — its position will remain the same.</p>
 * <p>The <code>wrapper</code> argument can be <em>either</em> an existing <code>HTMLElement</code> <em>or</em> a string representing the tag name of an element to be created. The optional <code>attributes</code> argument can contain a list of attribute/value pairs that will be set on the wrapper using <a href="/api/element/writeAttribute"><code>Element#writeAttribute</code></a>.</p>
 * 
 * @param element
 * @param wrapper
 * @param attributes, argument is optional
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">&lt;table id=&quot;data&quot;&gt;
 *   &lt;tr&gt;
 *     &lt;th&gt;Foo&lt;/th&gt;
 *     &lt;th&gt;Bar&lt;/th&gt;
 *   &lt;/tr&gt;
 *   &lt;tr&gt;
 *     &lt;td&gt;1&lt;/td&gt;
 *     &lt;td&gt;2&lt;/td&gt;
 *   &lt;/tr&gt;
 * &lt;/table&gt;</code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">// approach 1:
 * var div = new Element('div', { 'class': 'table-wrapper' });
 * $('data').wrap(div);
 * // approach 2:
 * $('data').wrap('div', { 'class': 'table-wrapper' });
 * // examples are equivalent. both return the DIV.
 * </code></pre>
 * <h4>Resulting HTML</h4>
 * <pre><code class="html">&lt;div class=&quot;table-wrapper&quot;&gt;
 *   &lt;table id=&quot;data&quot;&gt;
 *     &lt;tr&gt;
 *       &lt;th&gt;Foo&lt;/th&gt;
 *       &lt;th&gt;Bar&lt;/th&gt;
 *     &lt;/tr&gt;
 *     &lt;tr&gt;
 *       &lt;td&gt;1&lt;/td&gt;
 *       &lt;td&gt;2&lt;/td&gt;
 *     &lt;/tr&gt;
 *   &lt;/table&gt;
 * &lt;/div&gt;</code></pre></div>
 * 
 * 
 * @since 1.6
 * 
 */
Element.Methods.prototype.wrap  = function(element, wrapper, attributes) { return new HTMLElement(); };

/**
 * <p>Fetches all of  <code>element</code>&#8217;s descendants which have a CSS class of <code>className</code> and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p class="deprecated">As of Prototype 1.6, <code>document.getElementsByClassName</code> has been deprecated since native implementations return a <code>NodeList</code> rather than an <code>Array</code>. Please use <a href="/api/utility/dollar-dollar"><code>$$</code></a> or <a href="/api/element/select"><code>Element#select</code></a> instead.</p>
 * <p>The returned array reflects the document order (e.g. an index of 0 refers to the topmost descendant of <code>element</code> with class <code>className</code>).</p>
 * 
 * @param element
 * @param className
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;apples
 *     &lt;ul&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 *   &lt;li id="exotic" class="yummy"&gt;exotic fruits
 *     &lt;ul&gt;
 *       &lt;li id="kiwi"&gt;kiwi&lt;/li&gt;
 *       &lt;li id="granadilla"&gt;granadilla&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').getElementsByClassName('yummy');
 * // -> [li#mutsu, li#mcintosh, li#exotic]
 * $('exotic').getElementsByClassName('yummy');
 * // -> []
 * </code></pre></div>
 *         
 *  @deprecated
 * 
 */
Element.Methods.prototype.getElementsByClassName  = function(element, className) { return new Array(); };

/**
 * someElement.setOpacity(opacity) -> [HTMLElement...]</code></pre>
 * <p>Sets the visual opacity of an element while working around inconsistencies in various browsers. The <code>opacity</code> argument should be a floating point number, where the value of 0 is fully transparent and 1 is fully opaque.</p></div>
 * <p><a href="/api/element/setStyle"><code>Element.setStyle</code></a> method uses <code>setOpacity</code> internally when needed.</p>
 * 
 * @param element
 * @param opacity
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">var element = $('myelement');
 * // set to 50% transparency
 * element.setOpacity(0.5);
 * // these are equivalent, but allow for setting more than
 * // one CSS property at once:
 * element.setStyle({ opacity: 0.5 });
 * element.setStyle("opacity: 0.5");
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 */
Element.Methods.prototype.setOpacity  = function(element, opacity) { return new Array(); };

/**
 * <p>Removes all of <code>element</code>'s text nodes which contain <em>only</em> whitespace. Returns <code>element</code>.</p></div>
 * <p><code>Element.cleanWhitespace</code> removes whitespace-only text nodes. This can be very useful when using standard methods like <code>nextSibling</code>, <code>previousSibling</code>, <code>firstChild</code> or <code>lastChild</code> to walk the DOM.</p>
 * <p>If you only need to access element nodes (and not text nodes), try using <a href="up"><code>Element.up</code></a>, <a href="down"><code>Element.down</code></a>, <a href="next"><code>Element.next</code></a> and <a href="previous"><code>Element.previous</code></a> instead. you won't regret it!</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <p>Consider the following HTML snippet:</p>
 * <pre><code class="html">
 * &lt;ul id="apples"&gt;
 *   &lt;li&gt;Mutsu&lt;/li&gt;
 *   &lt;li&gt;McIntosh&lt;/li&gt;
 *   &lt;li&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <p>Let's grab what we think is the first list item:</p>
 * <pre><code class="javascript">
 * var element = $('apples');
 * element.firstChild.innerHTML;
 * // -> undefined
 * </code></pre>
 * <p>That doesn't seem to work to well. Why is that ? <code>ul#apples</code>'s first child is actually a text node containing only whitespace that sits between <code>&lt;ul id="apples"&gt;</code> and <code>&lt;li&gt;Mutsu&lt;/li&gt;</code>.</p>
 * <p>Let's remove all this useless whitespace:</p>
 * <pre><code class="javascript">
 * element.cleanWhitespace();
 * </code></pre>
 * <p>That's what our DOM looks like now:</p>
 * <pre><code class="html">
 * &lt;UL id="apples"&gt;&lt;LI&gt;Mutsu&lt;/LI&gt;&lt;LI&gt;McIntosh&lt;/LI&gt;&lt;LI&gt;Ida Red&lt;/LI&gt;&lt;/UL&gt;
 * </code></pre>
 * <p>And guess what, <code>firstChild</code> now works as expected!</p>
 * <pre><code class="javascript">
 * element.firstChild.innerHTML;
 * // -> 'Mutsu'
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.cleanWhitespace  = function(element) { return new HTMLElement(); };

/**
 * <p>Fires a custom event with the current element as its target.</p></div>
 * <p><code>Element#fire</code> creates a custom event with the given name, then triggers it on the given element. The custom event has all the same properties and methods of native events. Like a native event, it will bubble up through the DOM unless its propagation is explicitly stopped.</p>
 * <p>The optional second argument will be assigned to the <code>memo</code> property of the event object so that it can be read by event handlers.</p>
 * <p>Custom events are dispatched synchronously: <code>Element#fire</code> waits until the event finishes its life cycle, then returns the event itself.</p>
 * <h3>Note</h3>
 * <p><code>Element#fire</code> does not support firing native events. All custom event names <em>must</em> be namespaced (using a colon). This is to avoid custom event names conflicting with non-standard native DOM events such as <code>mousewheel</code> and <code>DOMMouseScroll</code>.</p>
 * 
 * @param eventName
 * @param memo, argument is optional
 * @return Event
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">document.observe("widget:frobbed", function(event) {
 *   console.log("Element with ID (" + event.target.id +
 *    ") frobbed widget #" + event.memo.widgetNumber + ".");
 * });
 * var someNode = $('foo');
 * someNode.fire("widget:frobbed", { widgetNumber: 19 });
 * //-> "Element with ID (foo) frobbed widget #19."</code></pre>
 * <h3>Tip</h3>
 * <p>Events that have been stopped with <code>Event#stop</code> will have a boolean <code>stopped</code> property set to true. Since <code>Element#fire</code> returns the custom event, you can inspect this property to determine whether the event was stopped.</p></div>
 * 
 * @since 1.6.0
 * 
 */
Element.Methods.prototype.fire  = function(eventName, memo) { return new Event(); };

/**
 * <p>Returns a new instance of <code>ClassNames</code>, an <code>Enumerable</code> object used to read and write CSS class names of <code>element</code>.</p></div>
 * <p class="deprecated"><code>Element#classNames</code> has been deprecated. Please use <a href="/api/element/addclassname"><code>Element#addClassName</code></a>, <a href="/api/element/removeclassname"><code>Element#removeClassName</code></a> and <a href="/api/element/hasclassname"><code>Element#hasClassName</code></a> instead.<br /><br />If you need to access class names as an array, try <code>$w(element.className)</code>.</p>
 * <p>Practically, this means that you have access to your element's CSS class names as an <code>Enumerable</code> rather than as the string that the native <code>className</code> property gives you (notice the singular form).</p>
 * <p>On top of that, this <code>Enumerable</code> object is extended with a series of methods specifically targeted at dealing with CSS class names: <code>set(className)</code>, <code>add(className)</code> and <code>remove(className)</code>. These are used internally by <a href="addClassName"><code>Element.addClassName</code></a>, <a href="toggleClassName"><code>Element.toggleClassName</code></a> and <a href="removeClassName"><code>Element.removeClassName</code></a>, but&mdash;unless you want to do some pretty wacky stuff&mdash;you usually won't need to use them.</p>
 * 
 * @param element
 * @return Enumerable
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple fruit food"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').classNames().inspect()
 * // -> "#&lt;Enumerable:['apple', 'fruit', 'food']&gt;"
 * // change its class names:
 * $('mutsu').className = 'fruit round'
 * $('mutsu').classNames().inspect()
 * // -> "#&lt;Enumerable:['fruit', 'food']&gt;"
 * </code></pre></div>
 *         
 *  @deprecated
 * 
 */
Element.Methods.prototype.classNames  = function(element) { return new Enumerable(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s descendants and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-herectus"&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').descendants();
 * // -> [div#homo-herectus, div#homo-neanderthalensis, div#homo-sapiens]
 * $('homo-sapiens').descendants();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.descendants  = function(element) { return new Array(); };

/**
 * <p>Returns <code>element</code>&#8217;s first ancestor (or the <em>index&#8217;th</em> ancestor, if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all ancestors are considered. If no ancestor matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.up</code> method is part of Prototype&#8217;s ultimate DOM traversal toolkit (check out <a href="down"><code>Element.down</code></a>, <a href="next"><code>Element.next</code></a> and <a href="previous"><code>Element.previous</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of <code>element</code>&#8217;s <strong>ancestors</strong>.</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don&#8217;t have to worry about whitespace-only nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>&#8217;s first ancestor is returned (this is similar as calling <code>parentNode</code> except <code>Element.up</code> returns an already <a href="/api/element/extend">extended element</a>.</p>
 * <p>If an index is passed, <code>element</code>&#8217;s corresponding ancestor is is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="ancestors"><code>Element.ancestors</code></a>). Note that the first element has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.up</code> will return the first ancestor that matches it.</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.up</code> will collect all the ancestors matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no descendant is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;html&gt;
 *   [&#8230;]
 *   &lt;body&gt;
 *     &lt;ul id="fruits"&gt;
 *       &lt;li id="apples" class="keeps-the-doctor-away"&gt;
 *         &lt;ul&gt;
 *           &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *           &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *           &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *           &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *         &lt;/ul&gt;
 *       &lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/body&gt;
 * &lt;/html&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').up();
 * // equivalent:
 * $('fruits').up(0);
 * // -> body
 * $('mutsu').up(2);
 * // -> ul#fruits
 * $('mutsu').up('li');
 * // -> li#apples
 * $('mutsu').up('.keeps-the-doctor-away');
 * // -> li#apples
 * $('mutsu').up('ul', 1);
 * // -> ul#fruits
 * $('mutsu').up('div');
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.up  = function(element, cssRule, index) { return new HTMLElement(); };

/**
 * <p>Displays and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="error-message" style="display:none;"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('error-message').show();
 * // -> HTMLElement (and displays div#error-message)
 * </code></pre>
 * <h3>Notes</h3>
 * <p><code>Element.show</code> <em>cannot</em> display elements hidden via CSS stylesheets. Note that this is not a Prototype limitation but a consequence of how the CSS <code>display</code> property works.</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #hidden-by-css {
 *     display: none;
 *   }
 * &lt;/style&gt;
 * [&#8230;]
 * &lt;div id="hidden-by-css"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('hidden-by-css').show(); // DOES NOT WORK!
 * // -> HTMLElement (div#error-message is still hidden!)
 * </code></pre>
 * <h3>Backwards compatibility change</h3>
 * <p class="deprecated">In previous versions of Prototype, you could pass an arbitrary number of elements to <code>Element.toggle</code>, <code>Element.show</code>, and <code>Element.hide</code>, for consistency, this is <strong>no longer possible</strong> in version 1.5!</p>
 * <p>You can however achieve a similar result by using <a href="/api/enumerable">Enumerables</a>:</p>
 * <pre><code class="javascript">
 * ['content', 'navigation', 'footer'].each(Element.show);
 * // -> ['content', 'navigation', 'footer'] 
 * // and displays #content, #navigation and #footer.
 * </code></pre>
 * <p>or even better:</p>
 * <pre><code class="javascript">
 * $('content', 'navigation', 'footer').invoke('show');
 * // -> [HTMLElement, HTMLElement, HTMLElement] (#content, #navigation and #footer)
 * // and displays #content, #navigation and #footer.
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.show  = function(element) { return new HTMLElement(); };

/**
 * <p>Returns a <code>Boolean</code> indicating whether or not <code>element</code> is visible (i.e. whether its inline <code>style</code> property is set to <code>"display: none;"</code>).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="visible"&gt;&lt;/div&gt;
 * &lt;div id="hidden" style="display: none;"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('visible').visible();
 * // -> true
 * $('hidden').visible();
 * // -> false
 * </code></pre>
 * <h3>Notes</h3>
 * <p>Styles applied via a CSS stylesheet are <em>not</em> taken into consideration. Note that this is not a Prototype limitation, it is a CSS limitation.</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #hidden-by-css {
 *     display: none;
 *   }
 * &lt;/style&gt;
 * [&#8230;]
 * &lt;div id="hidden-by-css"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('hidden-by-css').visible();
 * // -> true
 * </code></pre></div>
 * 
 * @param element
 * @return Boolean
 */
Element.Methods.prototype.visible  = function(element) { return false; };

/**
 * <p>Returns <code>element</code>&#8217;s closest <em>positioned</em> ancestor. If none is found, the <code>body</code> element is returned.</p></div>
 * <p>The returned element is <code>element</code>&#8217;s <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a>.</p></div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.getOffsetParent  = function(element) { return new HTMLElement(); };

/**
 * <p>Replaces <code>element</code> by the content of the <code>html</code> argument and returns the removed <code>element</code>.</p></div>
 * <p class="notice">Using <code>replace</code> as an instance method (e.g., <code>$('foo').replace('&lt;p&gt;Bar&lt;/p&gt;')</code>) causes errors in Opera 9 when used on <code>input</code> elements. The <code>replace</code> property is reserved on <code>input</code>s as part of <a href="http://www.whatwg.org/specs/web-forms/current-work/">Web Forms 2</a>. As a workaround, use the generic version instead (<code>Element.replace('foo', '&lt;p&gt;Bar&lt;/p&gt;')</code>).</p>
 * <p><code>html</code> can be either plain text, an HTML snippet or any JavaScript object which has a <code>toString()</code> method.</p>
 * <p>If it contains any <code>&lt;script&gt;</code> tags, these will be evaluated after <code>element</code> has been replaced (<code>Element.replace()</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a>).</p>
 * <p>Note that if no argument is provided, <code>Element.replace</code> will simply clear <code>element</code> of its content. However, using <a href="remove"><code>Element.remove</code></a> to do so is both faster and more standard compliant.</p>
 * 
 * @param element
 * @param html, argument is optional
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="food"&gt;
 *   &lt;div id="fruits"&gt;
 *     &lt;p id="first"&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <p>Passing an HTML snippet:</p>
 * <pre><code class="javascript">
 * $('first').replace('&lt;ul id="favorite"&gt;&lt;li&gt;kiwi&lt;/li&gt;&lt;li&gt;banana&lt;/li&gt;&lt;li&gt;apple&lt;/li&gt;&lt;/ul&gt;');
 * // -> HTMLElement (p#first)
 * $('fruits').innerHTML;
 * // -> '&lt;ul id="favorite"&gt;&lt;li&gt;kiwi&lt;/li&gt;&lt;li&gt;banana&lt;/li&gt;&lt;li&gt;apple&lt;/li&gt;&lt;/ul&gt;'
 * </code></pre>
 * <p>Again, with a &lt;script&gt; tag thrown in:</p>
 * <pre><code class="javascript">
 * $('favorite').replace('&lt;p id="still-first"&gt;Melon, oranges &lt;em&gt;and&lt;/em&gt; grapes.&lt;/p&gt;&lt;script&gt;alert("removed!")&lt;/script&gt;');
 * // -> HTMLElement (ul#favorite) and prints "removed!" in an alert dialog.
 * $('fruits').innerHTML
 * // -> '&lt;p id="still-first"&gt;Melon, oranges &lt;em&gt;and&lt;/em&gt; grapes.&lt;/p&gt;'
 * </code></pre>
 * <p>With plain text:</p>
 * <pre><code class="javascript">
 * $('still-first').replace('Melon, oranges and grapes.');
 * // -> HTMLElement (p#still-first)
 * $('fruits').innerHTML
 * // -> 'Melon, oranges and grapes.'
 * </code></pre>
 * <p>Finally, relying on the <code>toString()</code> method:</p>
 * <pre><code class="javascript">
 * $('fruits').replace(123);
 * // -> HTMLElement
 * $('food').innerHTML;
 * // -> '123'
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.replace  = function(element, html) { return new HTMLElement(); };

/**
 * <p>Toggles <code>element</code>&#8217;s CSS  <code>className</code> and returns <code>element</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="mutsu" class="apple"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').hasClassName('fruit');
 * // -> false
 * $('mutsu').toggleClassName('fruit');
 * // -> element
 * $('mutsu').hasClassName('fruit');
 * // -> true
 * </code></pre></div>
 * 
 * @param element
 * @param className
 * @return HTMLElement
 */
Element.Methods.prototype.toggleClassName  = function(element, className) { return new HTMLElement(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s next siblings and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Two elements are siblings if they have the same parent. So for example, the <code>head</code> and <code>body</code> elements are siblings (their parent is the <code>html</code> element). Next siblings are simply the ones which follow <code>element</code> in the document.</p>
 * <p>The returned array reflects the siblings order in the document (e.g. an index of 0 refers to the sibling right below <code>element</code>).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').nextSiblings();
 * // -> [li#mcintosh, li#ida-red]
 * $('ida-red').nextSiblings();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.nextSiblings  = function(element) { return new Array(); };

/**
 * <p>Returns the given CSS property value of <code>element</code>. <code>property</code> can be specified in either of its CSS or camelized form.</p></div>
 * <p>This method looks up the CSS property of an element whether it was applied inline or in a stylesheet. It works around browser inconsistencies regarding <code>float</code>, <code>opacity</code>, which returns a value between 0 (fully transparent) and 1 (fully opaque), position properties (<code>left</code>, <code>top</code>, <code>right</code> and <code>bottom</code>) and when getting the dimensions (<code>width</code> or <code>height</code>) of hidden elements.</p>
 * 
 * @param element
 * @param property
 * @return String | null
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $(element).getStyle('font-size');
 * // equivalent:
 * $(element).getStyle('fontSize');
 * // -> '12px'
 * </code></pre>
 * <h3>Notes</h3>
 * <p>Internet Explorer returns literal values while other browsers return computed values. Consider the following HTML snippet:</p>
 * <pre><code class="html">
 * &lt;style&gt;
 *   #test {
 *     font-size: 12px;
 *     margin-left: 1em;
 *   }
 * &lt;/style&gt;
 * &lt;div id="test"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('test').getStyle('margin-left');
 * // -> '1em' in Internet Explorer,
 * // -> '12px' elsewhere.
 * </code></pre>
 * <p>Safari returns <code>null</code> for <em>any</em> non-inline property if the element is hidden (has <code>display</code> set to <code>'none'</code>).</p>
 * <p>Not all CSS shorthand properties are supported. You may only use the CSS properties described in the <a href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-ElementCSSInlineStyle">Document Object Model (DOM) Level 2 Style Specification</a>.</p></div>
 * 
 */
Element.Methods.prototype.getStyle  = function(element, property) { return ""; };

/**
 * <p>Collects all of element&#8217;s siblings and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Two elements are siblings if they have the same parent. So for example, the <code>head</code> and <code>body</code> elements are siblings (their parent is the <code>html</code> element).</p>
 * <p>The returned array reflects the siblings order in the document (e.g. an index of 0 refers to <code>element</code>&#8217;s topmost sibling).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').siblings();
 * // -> [li#golden-delicious, li#mcintosh, li#ida-red]
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.siblings  = function(element) { return new Array(); };

/**
 * <p>Completely removes <code>element</code> from the document and returns it.</p></div>
 * <p>If you would rather just hide the element and keep it around for further use, try <a href="hide"><code>Element.hide</code></a> instead.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * // Before:
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mutsu').remove();
 * // -> HTMLElement (and removes li#mutsu)
 * </code></pre>
 * <pre><code class="html">
 * // After:
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.remove  = function(element) { return new HTMLElement(); };

/**
 * <p>Takes an arbitrary number of CSS selectors (strings) and returns an array of <a href="/api/element/extend">extended</a> children of <code>element</code> that match any of them.</p></div>
 * <p class="deprecated">As of Prototype 1.6, <code>Element#getElementsBySelector</code> has been deprecated in favor of the more concise <a href="/api/element/select"><code>Element#select</code></a>.</p>
 * <p>This method is very similar to <a href="/api/utility/dollar-dollar">$$()</a> but can be used within the context of one element, rather than the whole document. The supported CSS syntax is identical, so please refer to the <a href="/api/utility/dollar-dollar"><code>$$()</code> docs</a> for details.</p>
 * 
 * @param element
 * @param selector...
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">&lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;h3 title="yummy!"&gt;Apples&lt;/h3&gt;
 *     &lt;ul id="list-of-apples"&gt;
 *       &lt;li id="golden-delicious" title="yummy!" &gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" title="yummy!"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *     &lt;p id="saying"&gt;An apple a day keeps the doctor away.&lt;/p&gt;  
 *   &lt;/li&gt;
 * &lt;/ul&gt;</code></pre>
 * <pre><code class="javascript">$('apples').getElementsBySelector('[title="yummy!"]');
 * // -> [h3, li#golden-delicious, li#mutsu]
 * $('apples').getElementsBySelector( 'p#saying', 'li[title="yummy!"]');
 * // -> [li#golden-delicious, li#mutsu,  p#saying]
 * $('apples').getElementsBySelector('[title="disgusting!"]');
 * // -> []</code></pre>
 * <h3>Tip</h3>
 * <p><code>Element#getElementsBySelector</code> can be used as a pleasant alternative to <code>getElementsByTagName</code>:</p>
 * <pre><code class="javascript">var nodes  = $A(someUL.getElementsByTagName('li')).map(Element.extend);
 * var nodes2 = someUL.getElementsBySelector('li');</code></pre>
 * <p>In the first example, you must explicitly convert the result set to an <code>Array</code> (so that Prototype&#8217;s <a href="/api/enumerable"><code>Enumerable</code></a> methods can be used) and must manually call <a href="/api/element/extend"><code>Element.extend</code></a> on each node (so that custom instance methods can be used on the nodes). <code>Element#getElementsBySelector</code> takes care of both concerns on its own.</p>
 * <p>If you&#8217;re using 1.5.1 or above (and the performance optimizations therein), the speed difference between these two examples is negligible.</p></div>
 *         
 *  @deprecated
 * 
 */
Element.Methods.prototype.getElementsBySelector  = function(element, selector) { return new Array(); };

/**
 * <p>Turns <code>element</code> into an absolutely-positioned element <em>without</em> changing its position in the page layout.</p></div>
 * </div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.absolutize  = function(element) { return new HTMLElement(); };

/**
 * <p>Collects all of the element's  children and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>The returned array reflects the children order in the document (e.g., an index of 0 refers to the topmost child of <code>element</code>).</p>
 * <p>Note that all of Prototype's DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-erectus"&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').childElements();
 * // -> [div#homo-erectus]
 * $('homo-erectus').childElements();
 * // -> [div#homo-neanderthalensis, div#homo-sapiens]
 * $('homo-sapiens').childElements();
 * // -> []
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 */
Element.Methods.prototype.childElements  = function(element) { return new Array(); };

/**
 * <p>Collects all of <code>element</code>&#8217;s previous siblings and returns them as an array of <a href="/api/element/extend">extended</a> elements.</p></div>
 * <p>Two elements are siblings if they have the same parent. So for example, the <code>head</code> and <code>body</code> elements are siblings (their parent is the <code>html</code> element). Previous siblings are simply the ones which precede <code>element</code> in the document.</p>
 * <p>The returned array reflects the siblings <em>inversed</em> order in the document (e.g. an index of 0 refers to the lowest sibling i.e., the one closest to <code>element</code>).</p>
 * <p>Note that all of Prototype&#8217;s DOM traversal methods ignore text nodes and return element nodes only.</p>
 * 
 * @param element
 * @return [HTMLElement...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh"&gt;McIntosh&lt;/li&gt;
 *   &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('mcintosh').previousSiblings();
 * // -> [li#mutsu, li#golden-delicious]
 * $('golden-delicious').previousSiblings();
 * // -> []
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.previousSiblings  = function(element) { return new Array(); };

/**
 * <p>Allows for the easy creation of <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a> by setting <code>element</code>'s CSS position to <code>'relative'</code> if its initial position is either <code>'static'</code> or <code>undefined</code>. Returns <code>element</code>.</p></div>
 * <p>To revert back to <code>element</code>'s original CSS position, use <a href="undoPositioned">Element.undoPositioned</a>.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <p>Consider the following case:</p>
 * <pre><code class="html">
 * &lt;p&gt;lorem [&#8230;]&lt;/p&gt;
 * &lt;div id="container"&gt;
 *   &lt;div id="element" style="position: absolute; top: 20px; left: 20px;"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <p><img src="/assets/2007/2/24/makepos_before_1.png" alt="example" /></p>
 * <p>To position <code>div#element</code> <em>relatively</em> to it's parent element:</p>
 * <pre><code class="javascript">
 * $('container').makePositioned();
 * // -> HTMLElement
 * </code></pre>
 * <p>Which yields the expected layout:</p>
 * <p><img src="/assets/2007/2/24/makepos_after_1.png" alt="example" /></p></div>
 * 
 */
Element.Methods.prototype.makePositioned  = function(element) { return new HTMLElement(); };

/**
 * <p>returns <code>element</code>&#8217;s <code>id</code> attribute if it exists, or sets and returns a unique, auto-generated <code>id</code>.</p></div>
 * <h3>Examples</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">
 *   &lt;ul&gt;
 *     &lt;li id=&quot;apple&quot;&gt;apple&lt;/li&gt;
 *     &lt;li&gt;orange&lt;/li&gt;
 *   &lt;/ul&gt;
 * </code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">
 *   $('apple').identify();
 *   // -> 'apple'
 *   $('apple').next().identify();
 *   // -> 'anonymous_element_1'
 * </code></pre>
 * <h4>resulting HTML</h4>
 * <pre><code class="html">
 *   &lt;ul&gt;
 *     &lt;li id=&quot;apple&quot;&gt;apple&lt;/li&gt;
 *     &lt;li id=&quot;anonymous_element_1&quot;&gt;orange&lt;/li&gt;
 *   &lt;/ul&gt;
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return id
 */
Element.Methods.prototype.identify  = function(element) { return ""; };

/**
 * <p>Returns the first child that is <em>an element</em>. This is opposed to <code>firstChild</code> DOM <strong>property</strong> which will return any node (whitespace in most usual cases).</p></div>
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-erectus"&gt;&lt;!-- Latin is super --&gt;
 *     &lt;div id="homo-neanderthalensis"&gt;&lt;/div&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('australopithecus').firstDescendant();
 * // -> div#homo-herectus
 * // the DOM property returns any first node
 * $('homo-herectus').firstChild;
 * // -> comment node "Latin is super"
 * // this is what we want!
 * $('homo-herectus').firstDescendant();
 * // -> div#homo-neanderthalensis
 * </code></pre></div>
 * 
 * 
 * @since 1.5.1
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.firstDescendant  = function(element) { return new HTMLElement(); };

/**
 * <p>Returns the offsets of <code>element</code> from the top left corner of the document.</p></div>
 * <p>Adds the cumulative <code>offsetLeft</code> and <code>offsetTop</code> of an element and all its parents.</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.Methods.prototype.cumulativeOffset  = function(element) { return {left : 0, top: 0}; };

/**
 * <p>Checks if <code>element</code> is a descendant of <code>ancestor</code>.</p></div>
 * <p>As <code>Element.descendantOf</code> internally applies <code>$()</code> to <code>ancestor</code>, it accepts indifferently an element or an element&#8217;s id as its second argument.</p>
 * 
 * @param element
 * @param ancestor
 * @return Boolean 
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="australopithecus"&gt;
 *   &lt;div id="homo-herectus"&gt;
 *     &lt;div id="homo-sapiens"&gt;&lt;/div&gt;
 *   &lt;/div&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('homo-sapiens').descendantOf('australopithecus');
 * // -> true
 * $('homo-herectus').descendantOf('homo-sapiens');
 * // -> false
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.descendantOf  = function(element, ancestor) { return false; };

/**
 * <p>Returns element&#8217;s first descendant (or the n-th descendant if <code>index</code> is specified) that matches <code>cssRule</code>. If no <code>cssRule</code> is provided, all descendants are considered. If no descendant matches these criteria, <code>undefined</code> is returned.</p></div>
 * <p>The <code>Element.down</code> method is part of Prototype&#8217;s ultimate DOM traversal toolkit (check out <a href="up"><code>Element.up</code></a>, <a href="next"><code>Element.next</code></a> and <a href="previous"><code>Element.previous</code></a> for some more Prototypish niceness). It allows precise index-based and/or CSS rule-based selection of any of the element&#8217;s descendants.</p>
 * <p>As it totally ignores text nodes (it only returns elements), you don&#8217;t have to worry about whitespace nodes.</p>
 * <p>And as an added bonus, all elements returned are already <a href="/api/element/extend">extended</a> allowing chaining:</p>
 * <pre><code class="javascript">
 * $(element).down(1).next('li', 2).hide();
 * </code></pre>
 * <p>Walking the DOM has never been that easy!</p>
 * <h3>Arguments</h3>
 * <p>If no argument is passed, <code>element</code>&#8217;s first descendant is returned (this is similar as calling <code>firstChild</code> except <code>Element.down</code> returns an already <a href="/api/element/extend">extended element</a>.</p>
 * <p>If an index is passed, <code>element</code>&#8217;s corresponding descendant is returned. (This is equivalent to selecting an element from the array of elements returned by the method <a href="descendants"><code>Element.descendants</code></a>.) Note that the first element has an index of 0.</p>
 * <p>If <code>cssRule</code> is defined, <code>Element.down</code> will return the first descendant that matches it. This is a great way to grab the first item in a list for example (just pass in &#8216;li&#8217; as the method&#8217;s first argument).</p>
 * <p>If both <code>cssRule</code> and <code>index</code> are defined, <code>Element.down</code> will collect all the descendants matching the given CSS rule and will return the one specified by the index.</p>
 * <p><strong>In all of the above cases, if no descendant is found, <code>undefined</code> will be returned.</strong></p>
 * 
 * @param element
 * @param cssRule, argument is optional
 * @param index = 0, argument is optional
 * @return HTMLElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;ul id="fruits"&gt;
 *   &lt;li id="apples"&gt;
 *     &lt;ul&gt;
 *       &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *       &lt;li id="mutsu" class="yummy"&gt;Mutsu&lt;/li&gt;
 *       &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *       &lt;li id="ida-red"&gt;Ida Red&lt;/li&gt;
 *     &lt;/ul&gt;
 *   &lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('fruits').down();
 * // equivalent:
 * $('fruits').down(0);
 * // -> li#apple
 * $('fruits').down(3);
 * // -> li#golden-delicious
 * $('apples').down('li');
 * // -> li#golden-delicious
 * $('apples').down('li.yummy');
 * // -> li#mutsu
 * $('fruits').down('.yummy', 1);
 * // -> li#mcintosh
 * $('fruits').down(99);
 * // -> undefined
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.down  = function(element, cssRule, index) { return new Element(); };

/**
 * <p>Finds and returns the computed width of <code>element</code>.</p></div>
 * <p>This method returns correct values on elements whose display is set to <code>none</code> either in an inline style rule or in an CSS stylesheet.</p>
 * <p>For performance reasons, if you need to query both width <em>and</em> height of <code>element</code>, you should consider using <a href="getDimensions"><code>Element.getDimensions</code></a> instead.</p>
 * <p>Note that the value returned is a <em>number only</em>  although it is <em>expressed in pixels</em>.</p>
 * 
 * @param element
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('rectangle').getWidth();
 * // -> 200
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.getWidth  = function(element) { return 0; };

/**
 * <p>Unregisters <code>handler</code> and returns <code>element</code>.</p></div>
 * <p>This is a simple proxy for <a href="/api/event/stopObserving">Event.stopObserving</a>. Please refer to it for further information.</p>
 * 
 * @param element
 * @param eventName
 * @param handler
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * $(element).stopObserving('click', coolAction);
 * // -> HTMLElement (and unregisters the 'coolAction' event handler).
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.stopObserving  = function(element, eventName, handler) { return new HTMLElement(); };

/**
 * <p>Turns <code>element</code> into an relatively-positioned element <em>without</em> changing its position in the page layout.</p></div>
 * </div>
 *     
 * @since 1.6
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.relativize  = function(element) { return new HTMLElement(); };

/**
 * <p>Finds and returns the computed height of <code>element</code>.</p></div>
 * <p>This method returns correct values on elements whose display is set to <code>none</code> either in an inline style rule or in an CSS stylesheet.</p>
 * <p>For performance reasons, if you need to query both width <em>and</em> height of <code>element</code>, you should consider using <a href="getDimensions"><code>Element.getDimensions</code></a> instead.</p>
 * <p>Note that the value returned is a <em>number only</em>  although it is <em>expressed in pixels</em>.</p>
 * 
 * @param element
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="rectangle" style="font-size: 10px; width: 20em; height: 10em"&gt;&lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('rectangle').getHeight();
 * // -> 100
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.getHeight  = function(element) { return 0; };

/**
 * <p>Returns the debug-oriented string representation of <code>element</code>.</p></div>
 * <p>For more information on <code>inspect</code> methods, see <a href="/api/object/inspect"><code>Object.inspect</code></a>.</p>
 * <pre><code class="html">
 * &lt;ul&gt;
 *   &lt;li id="golden-delicious"&gt;Golden Delicious&lt;/li&gt;
 *   &lt;li id="mutsu" class="yummy apple"&gt;Mutsu&lt;/li&gt;
 *   &lt;li id="mcintosh" class="yummy"&gt;McIntosh&lt;/li&gt;
 *   &lt;li&lt;/li&gt;
 * &lt;/ul&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('golden-delicious').inspect();
 * // -> '&lt;li id="golden-delicious"&gt;'
 * $('mutsu').inspect();
 * // -> '&lt;li id="mutsu" class="yummy apple"&gt;'
 * $('mutsu').next().inspect();
 * // -> '&lt;li&gt;'
 * </code></pre></div>
 * 
 * @param element
 * @return String
 */
Element.Methods.prototype.inspect  = function(element) { return ""; };

/**
 * <p>Simulates the poorly supported CSS <code>clip</code> property by setting <code>element</code>'s overflow value to <code>'hidden'</code>. Returns <code>element</code>.</p></div>
 * <p>To undo clipping, use <a href="undoClipping">Element.undoClipping</a>.</p>
 * <p>The visible area is determined by <code>element</code>'s width and height.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="html">
 * &lt;div id="framer"&gt;
 *   &lt;img src="/assets/2007/1/14/chairs.jpg" alt="example" /&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * // -> HTMLElement
 * </code></pre>
 * <p><a id="clipper" href="#">Click me to try it out.</a></p>
 * <div id="framer">
 *   <img src="/assets/2007/2/24/chairs.jpg" alt="example" />
 * </div>
 * <script type="text/javascript" charset="utf-8">
 * var Example = {};
 * Example.clip = function(){
 *   $('clipper').update('undo clipping!');
 *   $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * };
 * Example.unClip = function(){
 *   $('clipper').update('clip!');
 *   $('framer').undoClipping();
 * };
 * Example.toggleClip = function(event){
 *   if($('clipper').innerHTML == 'undo clipping!') Example.unClip();
 *   else Example.clip();
 *   Event.stop(event);
 * };
 * Event.observe('clipper', 'click', Example.toggleClip);
 * </script></div>
 * 
 */
Element.Methods.prototype.makeClipping  = function(element) { return new HTMLElement(); };

/**
 * <p>Sets <code>element</code>&#8217;s CSS <code>overflow</code> property back to the value it had before <a href="makeClipping">Element.makeClipping()</a> was applied. Returns <code>element</code>.</p></div>
 * <h3>Example</h3>
 * <pre><code class="html">
 * &lt;div id="framer"&gt;
 *   &lt;img src="/assets/2007/1/14/chairs.jpg" alt="example" /&gt;
 * &lt;/div&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('framer').undoClipping();
 * // -> HTMLElement (and sets the CSS overflow property to its original value).
 * </code></pre>
 * <p><a id="clipper" href="#">Click me to try it out.</a></p>
 * <div id="framer">
 *   <img src="/assets/2007/2/24/chairs_1.jpg" alt="example" />
 * </div>
 * <script type="text/javascript" charset="utf-8">
 * var Example = {};
 * Example.clip = function(){
 *   $('clipper').update('undo clipping!');
 *   $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * };
 * Example.unClip = function(){
 *   $('clipper').update('clip!');
 *   $('framer').undoClipping();
 * };
 * Example.toggleClip = function(event){
 *   if($('clipper').innerHTML == 'clip!') Example.clip();
 *   else Example.unClip();
 *   Event.stop(event);
 * };
 * $('framer').makeClipping().setStyle({width: '100px', height: '100px'});
 * Event.observe('clipper', 'click', Example.toggleClip);
 * </script></div>
 * 
 * @param element
 * @return HTMLElement
 */
Element.Methods.prototype.undoClipping  = function(element) { return new HTMLElement(); };

/**
 * <p>Clones the position and/or dimensions of <code>source</code> onto <code>element</code> as defined by the optional argument <code>options</code>. </p></div>
 * <p>Note that <code>target</code> will be positioned exactly like <code>source</code> whether or not it is part of the same <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a>.</p>
 * <h3>Options</h3>
 * <table>
 * <thead>
 *   <tr>
 *     <th>Name</th>
 *     <th>Default</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *   <td><code>setLeft</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>left</code> CSS property onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setTop</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>top</code> CSS property onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setWidth</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>width</code> onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setHeight</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>width</code> onto <code>element</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>offsetLeft</code></td>
 *   <td><code>0</code></td>
 *   <td>Number by which to offset <code>element</code>&#8217;s <code>left</code> CSS property.</td>
 * </tr>
 * <tr>
 *   <td><code>offsetTop</code></td>
 *   <td><code>0</code></td>
 *   <td>Number by which to offset <code>element</code>&#8217;s <code>top</code> CSS property.</td>
 * </tr>
 * </tbody>
 * </table></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @param source
 * @param options, argument is optional
 * @return HTMLElement
 */
Element.Methods.prototype.clonePosition  = function(element, source, options) { return new HTMLElement(); };

/**
 * <p>Replaces the content of <code>element</code> with the provided <code>newContent</code> argument and returns <code>element</code>.</p></div>
 * <p><code>newContent</code> can be plain text, an HTML snippet, or any JavaScript object which has a <code>toString()</code> method.</p>
 * <p>If the new content contains any inline <code>&lt;script&gt;</code> tags (script tags containing the code directly, rather than referring to a separate file), <code>update</code> will extract them and evaluate them via <a href="/api/string/evalScripts"><code>String#evalScripts</code></a> <em>after</em> updating the content.  See <code>String#evalScripts</code> for details.</p>
 * <p>If no argument is provided, <code>Element.update</code> will simply clear <code>element</code> of its content.</p>
 * <p>Note that this method allows seamless content update of table related elements in Internet Explorer 6 and beyond.</p>
 * 
 * @param element
 * @param newContent, argument is optional
 * @return HTMLElement
 * 
 * <h3>Examples</h3>
 * <pre><code class="html">
 * &lt;div id="fruits"&gt;carrot, eggplant and cucumber&lt;/div&gt;
 * </code></pre>
 * <p>Passing a regular string:</p>
 * <pre><code class="javascript">
 * $('fruits').update('kiwi, banana and apple');
 * // -> HTMLElement
 * $('fruits').innerHTML
 * // -> 'kiwi, banana and apple'
 * </code></pre>
 * <p>Clearing the element&#8217;s content:</p>
 * <pre><code class="javascript">
 * $('fruits').update();
 * // -> HTMLElement
 * $('fruits').innerHTML;
 * // -> '' (an empty string)
 * </code></pre>
 * <p>And now inserting an HTML snippet:</p>
 * <pre><code class="javascript">
 * $('fruits').update('&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;');
 * // -> HTMLElement
 * $('fruits').innerHTML;
 * // -> '&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;'
 * </code></pre>
 * <p>&#8230; with a &lt;script&gt; tag thrown in:</p>
 * <pre><code class="javascript">
 * $('fruits').update('&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;&lt;script&gt;alert("updated!")&lt;/script&gt;');
 * // -> HTMLElement (and prints "updated!" in an alert dialog).
 * $('fruits').innerHTML;
 * // -> '&lt;p&gt;Kiwi, banana &lt;em&gt;and&lt;/em&gt; apple.&lt;/p&gt;'
 * </code></pre>
 * <p>Relying on the <code>toString()</code> method:</p>
 * <pre><code class="javascript">
 * $('fruits').update(123);
 * // -> HTMLElement
 * $('fruits').innerHTML;
 * // -> '123'
 * </code></pre>
 * <p>Finally, you can do some pretty funky stuff by defining your own <code>toString()</code> method on your custom objects:</p>
 * <pre><code class="javascript">
 * var Fruit = Class.create();
 * Fruit.prototype = {
 *   initialize: function(fruit){
 *     this.fruit = fruit;
 *   },
 *   toString: function(){
 *     return 'I am a fruit and my name is "' + this.fruit + '".'; 
 *   }
 * }
 * var apple = new Fruit('apple');
 * $('fruits').update(apple);
 * $('fruits').innerHTML;
 * // -> 'I am a fruit and my name is "apple".'
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.update  = function(element, newContent) { return new HTMLElement(); };

/**
 * someElement.observe(eventName, handler) -> HTMLElement</code></pre>
 * <p>Registers an event handler on <code>element</code> and returns <code>element</code>.</p></div>
 * <p>This is a simple proxy for <a href="/api/event/observe">Event.observe</a>. Please refer to it for further information.</p>
 * 
 * @param element
 * @param eventName
 * @param handler
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * $(element).observe('click', function(event){
 *   alert(Event.element(event).innerHTML);
 *  });
 * // -> HTMLElement (and will display an alert dialog containing 
 * // element's innerHTML when element is clicked).
 * </code></pre></div>
 * 
 */
Element.Methods.prototype.observe  = function(element, eventName, handler) { return new HTMLElement(); };

/**
 * <p>Returns <code>element</code>&#8217;s offset relative to its closest positioned ancestor (the element that would be returned by <a href="/api/api/getoffsetparent">Element#getOffsetParent</a>).</p></div>
 * <p>Calculates the cumulative <code>offsetLeft</code> and <code>offsetTop</code> of an element and all its parents <em>until</em> it reaches an element with a position other than <code>static</code>.</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 * 
 * @since 1.6
 * 
 * @param element
 * @return [Number
 * @param Number] also accessible as { left: Number
 * @param top: Number }</code></pre>
 */
Element.Methods.prototype.positionedOffset  = function(element) { return {left : 0, top: 0}; };

/**
 * <p>Simulates the standard compliant DOM method <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttr"><code>hasAttribute</code></a> for browsers missing it (Internet Explorer 6 and 7).</p></div>
 *
 * @param element
 * @param attribute
 * @return Boolean
 *
 * <h3>Example</h3>
 * <pre><code class="html">
 * &lt;a id="link" href="http://prototypejs.org"&gt;Prototype&lt;/a&gt;
 * </code></pre>
 * <pre><code class="javascript">
 * $('link').hasAttribute('href');
 * // -> true
 * </code></pre></div>
 * 
 */
Element.Methods.Simulated.prototype.hasAttribute  = function(element, attribute) { return false; };

/**
 * <p>Returns <code>true</code> if <code>obj</code> is an instance of the <a href="/api/hash"><code>Hash</code> class</a>, <code>false</code> otherwise.</p></div>
 * 
 * @param obj
 * @return Boolean
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.isHash(new Hash({ }));
 * //-> true
 * Object.isHash($H({ }));
 * //-> true
 * Object.isHash({ });
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 */
Object.prototype.isHash  = function(obj) { return false; };

/**
 * <p>Returns <code>true</code> if <code>obj</code> is of type <code>function</code>, <code>false</code> otherwise.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.isFunction($);
 * //-> true
 * Object.isFunction(123);
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param obj
 * @return Boolean
 */
Object.prototype.isFunction  = function(obj) { return false; };

/**
 * <p>Returns the return value of <code>obj</code>&#8217;s <code>toHTML</code> method if it exists, else runs <code>obj</code> through <code>String.interpret</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var Bookmark = Class.create({
 *   initialize: function(name, url) {
 *     this.name = name;
 *     this.url = url;
 *   },
 *   toHTML: function() {
 *     return '&lt;a href="#{url}"&gt;#{name}&lt;/a&gt;'.interpolate(this);
 *   }
 * });
 * var api = new Bookmark('Prototype API', 'http://prototypejs.org/api');
 * Object.toHTML(api);
 * //-> '&lt;a href="http://prototypejs.org/api"&gt;Prototype API&lt;/a&gt;'
 * Object.toHTML("Hello world!");
 * //-> "Hello world!"
 * Object.toHTML();
 * //-> ""
 * Object.toHTML(null);
 * //-> ""
 * Object.toHTML(undefined);
 * //-> ""
 * Object.toHTML(true);
 * //-> "true"
 * Object.toHTML(false);
 * //-> "false"
 * Object.toHTML(123);
 * //-> "123"
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param obj
 * @return String
 */
Object.prototype.toHTML  = function(obj) { return ""; };

/**
 * <p>Copies all properties from the source to the destination object.  Used by Prototype to simulate inheritance (rather statically) by copying to prototypes.</p></div>
 * <p>Documentation should soon become available that describes how Prototype implements OOP, where you will find further details on how Prototype uses <code>Object.extend</code> and <code>Class.create</code> (something that may well change in version 2.0).  It will be linked from here.</p>
 * <p>Do not mistake this method with its quasi-namesake <a href="/api/element/extend"><code>Element.extend</code></a>, which implements Prototype&#8217;s (much more complex) DOM extension mechanism.</p></div>
 * 
 * @param dest
 * @param src
 * @return alteredDest
 */
Object.prototype.extend  = function(dest, src) { return dest; };

/**
 * <p>Returns <code>true</code> if <code>obj</code> is an array, <code>false</code> otherwise.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.isArray([]);
 * //-> true
 * Object.isArray($w());
 * //-> true
 * Object.isArray({ });
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param obj
 * @return Boolean
 */
Object.prototype.isArray  = function(obj) { return false; };

/**
 * <p>Clones the passed object using shallow copy (copies all the original&#8217;s properties to the result).</p></div>
 * <p>Do note that this is shallow copy, not deep copy.</p>
 * 
 * @param obj
 * @return Object
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var o = { name: 'Prototype', version: 1.5, authors: ['sam', 'contributors'] };
 * var o2 = Object.clone(o);
 * o2.version = '1.5 weird';
 * o2.authors.pop();
 * o.version
 * // -> 1.5
 * o2.version
 * // -> '1.5 weird'
 * o.authors
 * // -> ['sam'] // Ouch!  Shallow copy!
 * </code></pre></div>
 * 
 */
Object.prototype.clone  = function(obj) { return new Object(); };

/**
 * <p>Returns <code>true</code> if <code>obj</code> is a DOM node of type 1, <code>false</code> otherwise.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.isElement(new Element('div'));
 * //-> true
 * Object.isElement(document.createElement('div'));
 * //-> true
 * Object.isElement($('id_of_an_exiting_element'));
 * //-> true
 * Object.isElement(document.createTextNode('foo'));
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param obj
 * @return Boolean
 */
Object.prototype.isElement  = function(obj) { return false; };

/**
 * <p>Treats any object as a <a href="/api/hash"><code>Hash</code></a> and fetches the list of its property names.</p></div>
 * <p>Note that the order of the resulting Array is browser-dependent (it relies on the <code>for&amp;#8230;in</code> loop), and is therefore not guaranteed to follow either declaration or lexicographical order.  Sort the array if you wish to guarantee order.</p>
 * 
 * @param obj
 * @return [String...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.keys()
 * // -> []
 * Object.keys({ name: 'Prototype', version: 1.5 }).sort()
 * // -> ['name', 'version']
 * </code></pre></div>
 * 
 */
Object.prototype.keys  = function(obj) { return new Array(); };

/**
 * <p>Returns <code>true</code> if <code>obj</code> is of type <code>number</code>, <code>false</code> otherwise.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.isNumber(0);
 * //-> true
 * Object.isNumber(1.2);
 * //-> true
 * Object.isNumber("foo");
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param obj
 * @return Boolean
 */
Object.prototype.isNumber  = function(obj) { return false; };

/**
 * <p>Returns <code>true</code> if <code>obj</code> is of type <code>undefined</code>, <code>false</code> otherwise.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.isUndefined();
 * //-> true
 * Object.isUndefined(undefined);
 * //-> true
 * Object.isUndefined(null);
 * //-> false
 * Object.isUndefined(0);
 * //-> false
 * Object.isUndefined("");
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param obj
 * @return Boolean
 */
Object.prototype.isUndefined  = function(obj) { return false; };

/**
 * <p>Returns a JSON string.</p></div>
 * <p>For more information on Prototype&#8217;s JSON encoder, hop to our <a href="/learn/json">tutorial</a>.</p>
 * 
 * @param obj
 * @return String
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * var data = {name: 'Violet', occupation: 'character', age: 25, pets: ['frog', 'rabbit']};
 * Object.toJSON(data);
 * //-> '{"name": "Violet", "occupation": "character", "age": 25, "pets": ["frog","rabbit"]}'
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 */
Object.prototype.toJSON  = function(obj) { return ""; };

/**
 * <p>Returns <code>true</code> if <code>obj</code> is of type <code>string</code>, <code>false</code> otherwise.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.isString("foo");
 * //-> true
 * Object.isString("");
 * //-> true
 * Object.isString(123);
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param obj
 * @return Boolean
 */
Object.prototype.isstring  = function(obj) { return false; };

/**
 * <p>Returns the debug-oriented string representation of the object.</p></div>
 * <ul>
 * <li><code>undefined</code> and <code>null</code> are represented as such.</li>
 * <li>Other types are looked up for a <code>inspect</code> method: if there is one, it is used, otherwise, it reverts to the <code>toString</code> method.</li>
 * </ul>
 * <p>Prototype provides <code>inspect</code> methods for many types, both built-in and library-defined, such as in <a href="/api/string/inspect"><code>String</code></a>, <a href="/api/array/inspect"><code>Array</code></a>, <a href="/api/enumerable/inspect"><code>Enumerable</code></a> and <a href="/api/hash/inspect"><code>Hash</code></a>, which attempt to provide most-useful string representations (from a developer&#8217;s standpoint) for their respective types.</p>
 * 
 * @param obj
 * @return String
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.inspect()
 * // -> 'undefined'
 * Object.inspect(null)
 * // -> 'null'
 * Object.inspect(false)
 * // -> 'false'
 * Object.inspect([1, 2, 3])
 * // -> '[1, 2, 3]'
 * Object.inspect('hello')
 * // -> "'hello'"
 * </code></pre></div>
 * 
 */
Object.prototype.inspect  = function(obj) { return ""; };

/**
 * <p>Treats any object as a <a href="/api/hash"><code>Hash</code></a> and fetches the list of its property values.</p></div>
 * <p>Note that the order of the resulting Array is browser-dependent (it relies on the <code>for&amp;#8230;in</code> loop), and is therefore not guaranteed to follow either declaration or lexicographical order.  Also, remember that while property names are unique, property values have no constraint whatsoever.</p>
 * 
 * @param obj
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Object.values()
 * // -> []
 * Object.values({ name: 'Prototype', version: 1.5 }).sort()
 * // -> [1.5, 'Prototype']
 * </code></pre></div>
 * 
 */
Object.prototype.values  = function(obj) { return new Array(); };

/**
 * <p>Turns an object into its URL-encoded query string representation.</p></div>
 * <p>This is a form of serialization, and is mostly useful to provide complex parameter sets for stuff such as objects in the Ajax namespace (e.g. <a href="/api/ajax/request"><code>Ajax.Request</code></a>).</p>
 * <p>Undefined-value pairs will be serialized as if empty-valued.  Array-valued pairs will get serialized with one name/value pair per array element.  All values get URI-encoded using JavaScript&#8217;s native <code>encodeURIComponent</code> function.</p>
 * <p>The order of pairs in the serialized form is not guaranteed (and mostly irrelevant anyway), except for array-based parts, which are serialized in array order.</p>
 * 
 * @param obj
 * @return String
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">Object.toQueryString({ action: 'ship', order_id: 123, fees: ['f1', 'f2'], 'label': 'a demo' })
 * // -> 'action=ship&order_id=123&fees=f1&fees=f2&label=a%20demo'
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 */
Object.prototype.toQueryString  = function(obj) { return ""; };

/**
 * <p>The cornerstone of <code>Enumerable</code>.  It lets you iterate over all the elements in
 * a generic fashion, then returns the <code>Enumerable</code>, thereby allowing chain-calling.</p></div>
 * <p>Iterations based on <code>each</code> are the core of <a href="/api/enumerable"><code>Enumerable</code></a>.
 * The iterator function you pass will be called with two parameters:</p>
 * <ol>
 * <li>The current element in the iteration.</li>
 * <li>The numerical index, starting at zero, of the current cycle.  This second
 * parameter is unused (and therefore undeclared) most of the time, but can come in
 * handy sometimes.</li>
 * </ol>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * <h3><code>$break</code> and <code>$continue</code></h3>
 * <p class="deprecated">The usage of <code>$continue</code> is deprecated. This feature will not be available in releases after Prototype 1.5 in favor of speed. Instead&mdash;since your blocks are in fact functions&mdash;<strong>simply issue a <code>return</code> statement</strong>. This will skip the rest of the block, jumping to the next iteration.</p>
 * <p>Regular loops can be short-circuited in JavaScript using the <code>break</code> and
 * <code>continue</code> statements.  However, when using iterator functions, your code is
 * outside of the loop scope: the looping code happens behind the scene.</p>
 * <p>In order to provide you with equivalent (albeit less optimal) functionality,
 * Prototype provides two global exception objects, <code>$break</code> and <code>$continue</code>.
 * Throwing these is equivalent to using the corresponding native statement in a
 * vanilla loop.  These exceptions are properly caught internally by the <code>each</code>
 * method.</p>
 * 
 * @param iterator
 * @param context, argument is optional
 * @return Enumerable
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">['one', 'two', 'three'].each(function(s) {
 *   alert(s);
 * });
 * [ 'hello', 'world'].each(function(s, index) {
 *   alert(index + ': ' + s);
 * });
 * // alerts -> '0: hello' then '1: world'
 * // This could be done better with an accumulator using inject, but humor me
 * // here...
 * var result = [];
 * $R(1,10).each(function(n) {
 *   if (0 == n % 2)
 *     throw $continue;
 *   if (n > 6)
 *     throw $break;
 *   result.push(n);
 * });
 * // result -> [1, 3, 5]
 * </code></pre>
 * <h3><code>each</code> vs. <code>_each</code></h3>
 * <p>If you read the <a href="/api/enumerable">main <code>Enumerable</code> page</a>, you may recall that
 * in order for a class to mix in <code>Enumerable</code>, it has to provide the fundamental
 * looping code appropriate to its internal structure.  This basic iteration
 * method must be called <code>_each</code>, and it only receives one argument: the iterator
 * function.  You&#8217;ll find further details on the main page.</p>
 * <p>Basically, <code>Enumerable.each</code> wraps the actual looping code provided by <code>_each</code>
 * with:</p>
 * <ol>
 * <li>Support for break/continue, as described above.</li>
 * <li>Proper maintenance and passing of the value/index arguments.</li>
 * </ol>
 * <h3>Optimized version</h3>
 * <p>There is a very common use-case that will probably be better taken care of by
 * a specialized variant: the method-calling scenario.</p>
 * <p>Say you want to invoke the same method on all elements, possibly with
 * arguments.  You may or may not want to use the result values.  This can be
 * achieved easily with <a href="invoke"><code>invoke</code></a>.</p>
 * <p>This variant usually performs better than <code>each</code>, since it avoids lexical
 * closure costs.  However, it does accumulate the result values in an array,
 * which you might not need.  At any rate, you might want to benchmark both
 * options in your specific use case.</p></div>
 * 
 */
Enumerable.prototype.each  = function(iterator, context) { return new Enumerable(); };

/**
 * <p>Alias for the more generic <a href="/api/enumerable/toArray"><code>toArray</code></a> method.</p></div>
 * </div>
 * 
 * @return Array
 */
Enumerable.prototype.entries  = function() { return new Array(); };

/**
 * <p>Returns the maximum element (or element-based computation), or <code>undefined</code> if the enumeration is empty.  Elements are either compared directly, or by first applying the iterator and comparing returned values.</p></div>
 * <p><strong>Note</strong>: for equivalent elements, the <strong>latest</strong> one is returned.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator = Prototype.K, argument is optional
 * @param context, argument is optional
 * @return maxValue
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1,10).max()
 * // -> 10
 * ['hello', 'world', 'gizmo'].max()
 * // -> 'world'
 * function Person(name, age) {
 *    this.name = name;
 *    this.age = age;
 * }
 * var john = new Person('John', 20);
 * var mark = new Person('Mark', 35);
 * var daisy = new Person('Daisy', 22);
 * [john, mark, daisy].max(function(person) {
 *   return person.age;
 * })
 * // -> 35
 * </code></pre></div>
 * 
 */
Enumerable.prototype.max  = function(iterator, context) { return null; };

/**
 * <p>Groups items in fixed-size chunks, using a specific value to fill up the last chunk if necessary.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * var students = [
 *   { name: 'Sunny', age: 20 },  { name: 'Audrey', age: 21 },
 *   { name: 'Matt', age: 20 },   { name: 'Élodie', age: 26 },
 *   { name: 'Will', age: 21 },   { name: 'David', age: 23 },
 *   { name: 'Julien', age: 22 }, { name: 'Thomas', age: 21 },
 *   { name: 'Serpil', age: 22 }
 * ];
 * students.pluck('name').inGroupsOf(4) {
 * // -> [ ['Sunny', 'Audrey', 'Matt', 'Élodie'],
 * //      ['Will', 'David', 'Julien', 'Thomas'],
 * //      ['Serpil', null, null, null] ]
 * </code></pre>
 * <h3>See also</h3>
 * <p>There is a variant called <a href="/api/enumerable/eachSlice"><code>eachSlice</code></a>, which does not fill up the last group to size.</p></div>
 * 
 * @param size
 * @param filler = null, argument is optional
 * @return [group...]
 */
Enumerable.prototype.inGroupsOf  = function(size, filler) { return new Array(); };

/**
 * <p>Incrementally builds a result value based on the successive results of the
 * iterator.  This can be used for array construction, numerical sums/averages,
 * etc.</p></div>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param accumulator
 * @param iterator
 * @param context, argument is optional
 * @return accumulatedValue
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1,10).inject(0, function(acc, n) { return acc + n; })
 * // -> 55 (sum of 1 to 10)
 * $R(2,5).inject(1, function(acc, n) { return acc * n; })
 * // -> 120 (factorial 5)
 * ['hello', 'world', 'this', 'is', 'nice'].inject([], function(array, value, index) {
 *   if (0 == index % 2)
 *     array.push(value);
 *   return array;
 * })
 * // -> ['hello', 'this', 'nice']
 * // Note how we can use references (see next section):
 * var array1 = [];
 * var array2 = [1, 2, 3].inject(array1, function(array, value) {
 *   array.push(value * value);
 *   return array;
 * });
 * array2
 * // -> [1, 4, 9]
 * array1
 * // -> [1, 4, 9]
 * array2.push(16);
 * array1
 * // -> [1, 4, 9, 16]
 * </code></pre>
 * <h3>Performance considerations</h3>
 * <p>When injecting on arrays, you can leverage JavaScript&#8217;s reference-based
 * scheme to avoid creating ever-larger cloned arrays (as opposed to JavaScript&#8217;s
 * native <code>concat</code> method, which returns a new array, guaranteed).</p></div>
 * 
 */
Enumerable.prototype.inject  = function(acumulator, iterator) { return null; };

/**
 * <p>Groups items in chunks based on a given size, with last chunk being possibly smaller.</p></div>
 * <p>Sometimes, you want to cut collections into chunks. Roughly equal-sized. Maybe you want to put it into multiple columns, or some other stylish layout. Maybe you can only pass so many at a time to a back-end processing layer (aaaah, those hard-coded, arbitrary limits in legacy software&#8230; ). Maybe you just feel like it. Just use <code>eachSlice</code> or its fixed-size variant, <a href="/api/enumerable/inGroupsOf"><code>inGroupsOf</code></a>.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param size
 * @param iterator = Prototype.K, argument is optional
 * @param context, argument is optional
 * @return [slice...]
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * var students = [
 *   { name: 'Sunny', age: 20 },  { name: 'Audrey', age: 21 },
 *   { name: 'Matt', age: 20 },   { name: 'Élodie', age: 26 },
 *   { name: 'Will', age: 21 },   { name: 'David', age: 23 },
 *   { name: 'Julien', age: 22 }, { name: 'Thomas', age: 21 },
 *   { name: 'Serpil', age: 22 }
 * ];
 * students.eachSlice(4, function(toon) {
 *   return toon.pluck('name');
 * })
 * // -> [ ['Sunny', 'Audrey', 'Matt', 'Élodie'],
 * //      ['Will', 'David', 'Julien', 'Thomas'],
 * //      ['Serpil'] ]
 * students.eachSlice(2).first()
 * // -> [{ name: 'Sunny', age: 20 }, { name: 'Audrey', age: 21 }]
 * </code></pre>
 * <h3>See also</h3>
 * <p>A common use-case for <code>eachSlice</code>, which mandates fixed-size groups, thereby requiring padding of the last one if necessary, is available through <a href="/api/enumerable/inGroupsOf"><code>inGroupsOf</code></a>.</p></div>
 * 
 */
Enumerable.prototype.eachSlice  = function(size, iterator, context) { return new Array(); };

/**
 * <p>Returns an <code>Array</code> representation of the enumeration. Aliased as <a href="/api/enumerable/entries"><code>entries</code></a>.</p></div>
 * <p>Note: this makes any object that mixes in <code>Enumerable</code> amenable to the <a href="/api/utility/dollar-a"><code>$A</code></a> utility function.</p>
 * 
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1, 5).toArray()
 * // -> [1, 2, 3, 4, 5]
 * </code></pre>
 * <h3>Performance considerations</h3>
 * <p>Obviously, objects that mix in <code>Enumerable</code> may override the default code, as <a href="/api/array/toArray"><code>Array</code> does</a>.</p></div>
 * 
 */
Enumerable.prototype.toArray  = function() { return new Array(); };

/**
 * <p>Returns the results of applying the iterator to each element.  Aliased as <a href="/api/enumerable/map"><code>map</code></a>.</p></div>
 * <p>This is a sort of Swiss-Army knife for sequences.  You can turn the original
 * values into virtually anything!</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator
 * @param context, argument is optional
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * ['Hitch', "Hiker's", 'Guide', 'To', 'The', 'Galaxy'].collect(function(s) {
 *   return s.charAt(0).toUpperCase();
 * }).join('')
 * // -> 'HHGTTG'
 * $R(1,5).collect(function(n) {
 *   return n * n;
 * })
 * // -> [1, 4, 9, 16, 25]
 * </code></pre>
 * <h3>Optimized versions</h3>
 * <p>There are two very common use-cases that will be much better taken care of by
 * specialized variants.</p>
 * <p>First, the method-calling scenario: you want to invoke the same method on all
 * elements, possibly with arguments, and use the result values.  This can be
 * achieved easily with <a href="invoke"><code>invoke</code></a>.</p>
 * <p>Second, the property-fetching scenario: you want to fetch the same property on
 * all elements, and use those.  This is a breeze with <a href="pluck"><code>pluck</code></a>.</p>
 * <p>Both variants perform much better than <code>collect</code>, since they avoid lexical
 * closure costs.</p></div>
 * 
 */
Enumerable.prototype.collect  = function(iterator, context) { return new Array(); };

/**
 * <p>Determines whether a given object is in the <code>Enumerable</code> or not, based on the <code>==</code> comparison operator.  Aliased as <a href="/api/enumerable/member"><code>member</code></a>.</p></div>
 * <p>Note this is not strict equality (<code>===</code>, comparing both value and type), but
 * equivalence (just value, with implicit conversions).</p>
 * <p>If you need to check whether there is an element matching a given predicate,
 * use <a href="any"><code>any</code></a> instead.</p>
 * 
 * @param object
 * @return Boolean
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1,15).include(10)
 * // -> true
 * ['hello', 'world'].include('HELLO')
 * // -> false
 * [1, 2, '3', '4', '5'].include(3)
 * // -> true (== ignores actual type)
 * </code></pre></div>
 * 
 */
Enumerable.prototype.include  = function(object) { return false; };

/**
 * <p>Alias for the <a href="/api/enumerable/findAll"><code>findAll</code></a> method.</p></div>
 * </div>
 * 
 * @param iterator
 * @return Array
 */
Enumerable.prototype.select  = function(iterator) { return new Array(); };

/**
 * <p>Returns the size of the enumeration.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1, 10).size()
 * // -> 10
 * ['hello', 42, true].size()
 * // -> 3
 * $H().size()
 * // -> 0
 * </code></pre>
 * <h3>Performance considerations</h3>
 * <p>This method exists solely to provide a generic size-getting behavior for all objects enumerable.  The default implementation actually performs the loop, which means it has exact linear complexity.  Most objects that mix in <code>Enumerable</code> will try to optimize this by redefining their own version of <code>size</code>; this is, for instance, the case of <a href="/api/array"><code>Array</code></a>, which <a href="/api/array/size">redefines</a> <code>size</code> to delegate to arrays&#8217; native <code>length</code> property.</p></div>
 * 
 * @return Number
 */
Enumerable.prototype.size  = function() { return 0; };

/**
 * <p>Provides a custom-sorted view of the elements based on the criteria computed, for each element, by the iterator.</p></div>
 * <p>Elements of equivalent criterion value are left in existing order.  Computed criteria must have well-defined strict weak ordering semantics (i.e. the <code>&lt;</code> operator must exist between any two criteria).</p>
 * <p>Note that arrays already feature a native <code>sort</code> method, which relies on <em>natural ordering</em> of the array's elements (i.e. the semantics of the <code>&lt;</code> operator when applied to two such elements).  You should use <code>sortBy</code> only whe natural ordering is nonexistent or otherwise unsatisfactory.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator
 * @param context, argument is optional
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * ['hello', 'world', 'this', 'is', 'nice'].sortBy(function(s) { return s.length; })
 * // -> 'is', 'this', 'nice', 'hello', 'world']
 * ['hello', 'world', 'this', 'is', 'cool'].sortBy(function(s) {
 *   var md = s.match(/[aeiouy]/g);
 *   return null == md ? 0 : md.length;
 * })
 * // -> [ 'world', 'this', 'is', 'hello', 'cool'] (sorted by vowel count)
 * </code></pre></div>
 * 
 */
Enumerable.prototype.sortBy  = function(iterator, context) { return new Array(); };

/**
 * <p>Partitions the elements in two groups: those regarded as <code>true</code>, and those considered <code>false</code>.  By default, regular JavaScript boolean equivalence is used, but an iterator can be provided, that computes a boolean representation of the elements.</p></div>
 * <p>This is a preferred solution to using both <a href="findAll"><code>findAll</code></a>/<code>select</code> and
 * <a href="reject"><code>reject</code></a>: it only loops through the elements once!</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator = Prototype.K, argument is optional
 * @param context, argument is optional
 * @return [TrueArray, FalseArray]</code></pre>
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">['hello', null, 42, false, true, , 17].partition()
 * // -> [['hello', 42, true, 17], [null, false, undefined]]
 * $R(1, 10).partition(function(n) {
 *   return 0 == n % 2;
 * })
 * // -> [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
 * </code></pre></div>
 * 
 */
Enumerable.prototype.partition  = function(iterator, context) { return new Array(); };

/**
 * <p>Returns all the elements that match the filter. If an iterator is provided, it is used to produce the returned value for each selected element.</p></div>
 * <p>This method can filter items by string, regular expression, or any object with a <code>match</code> method. If <code>filter</code> is a string or regular expression, the filter is compared to the string representation of each element and those that match are added to the resulting array. Otherwise, <code>filter</code> is assumed to have a <code>match</code> method, and each item is passed as the first argument to <code>filter.match</code>. Those that return true are added to the resulting array.</p>
 * <p>The optional <code>iterator</code> parameter will transform the result set in a manner similar to <a href="map"><code>map</code></a>.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * <h3>Legacy versions</h3>
 * <p>Prior to Prototype 1.6, the <code>grep</code> method accepted <em>only</em> a string or regular expression as a filter.</p>
 * 
 * @param regex
 * @param iterator = Prototype.K, argument is optional
 * @param context, argument is optional
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * // Get all strings with a repeated letter somewhere
 * ['hello', 'world', 'this', 'is', 'cool'].grep(/(.)\1/)
 * // -> ['hello', 'cool']
 * // Get all numbers ending with 0 or 5
 * $R(1,30).grep(/[05]$/)
 * // -> [5, 10, 15, 20, 25, 30]
 * // Those, minus 1
 * $R(1,30).grep(/[05]$/, function(n) { return n - 1; })
 * // -> [4, 9, 14, 19, 24, 29]
 * // Get all an element's children filtered by CSS selector
 * // (the Selector instance has a "match" method)
 * $('foo').childElements().grep(new Selector("li.active"));
 * </code></pre></div>
 * 
 */
Enumerable.prototype.grep  = function(regex, iterator, context) { return new Array(); };

/**
 * <p>Determines whether at least one element is boolean-equivalent to <code>true</code>,
 * either directly or through computation by the provided iterator.</p></div>
 * <p>The code obviously short-circuits as soon as it finds an element that &#8220;passes&#8221;
 * (that is boolean-equivalent to <code>true</code>).  If no iterator is provided, the
 * elements are used directly.  Otherwise, each element is passed to the
 * iterator, and the result value is used for boolean equivalence.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator = Prototype.K, argument is optional
 * @param context, argument is optional
 * @return Boolean
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * [].any()
 * // -> false (empty arrays have no elements that could be true-equivalent)
 * $R(0, 2).any()
 * // -> true (on the second loop cycle, 1 is true-equivalent)
 * [2, 4, 6, 8, 10].any(function(n) { return 0 == n % 3; })
 * // -> true (the iterator will return true on 6: the array does have 1+ multiple of 3)
 * $H({ opt1: null, opt2: false, opt3: '', opt4: 'pfew!' }).any(function(pair) { return pair.value; })
 * // -> true (thanks to the opt4/'pfew!' pair, whose value is true-equivalent)
 * </code></pre>
 * <h3>See also</h3>
 * <p>If you need to determine whether all elements match a criterion, you
 * would be better off using <a href="all"><code>all</code></a>.</p></div>
 * 
 */
Enumerable.prototype.any  = function(iterator, context) { return false; };

/**
 * <p>Returns all the elements for which the iterator returned <code>true</code>.  Aliased as <a href="/api/enumerable/select"><code>select</code></a>.</p></div>
 * <p>This is a sort of all-purpose version of <a href="grep"><code>grep</code></a> (which is specific to
 * String representations of the values). <code>findAll</code> lets you define your
 * predicate for the elements, providing maximum flexibility.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator
 * @param context, argument is optional
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1, 10).findAll(function(n) { return 0 == n % 2; })
 * // -> [2, 4, 6, 8, 10]
 * [ 'hello', 'world', 'this', 'is', 'nice'].findAll(function(s) {
 *   return s.length >= 5;
 * })
 * // -> ['hello', 'world']
 * </code></pre>
 * <h3>See also</h3>
 * <p>The <a href="reject"><code>reject</code></a> method is the opposite of this one.  If you need to split elements in two groups based upon a predicate, look at <a href="partition"><code>partition</code></a>.</p></div>
 * 
 */
Enumerable.prototype.findAll  = function(iterator, context) { return new Array(); };

/**
 * <p>Determines whether all the elements are boolean-equivalent to <code>true</code>, either
 * directly or through computation by the provided iterator.</p></div>
 * <p>The code obviously short-circuits as soon as it finds an element that &#8220;fails&#8221;
 * (that is boolean-equivalent to <code>false</code>).  If no iterator is provided, the
 * elements are used directly.  Otherwise, each element is passed to the
 * iterator, and the result value is used for boolean equivalence.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator = Prototype.K, argument is optional
 * @param context, argument is optional
 * @return Boolean
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * [].all()
 * // -> true (empty arrays have no elements that could be false-equivalent)
 * $R(1, 5).all()
 * // -> true (all values in [1..5] are true-equivalent)
 * [0, 1, 2].all()
 * // -> false (with only one loop cycle: 0 is false-equivalent)
 * [9, 10, 15].all(function(n) { return n >= 10; })
 * // -> false (the iterator will return false on 9)
 * $H({ name: 'John', age: 29, oops: false }).all(function(pair) { return pair.value; })
 * // -> false (the oops/false pair yields a value of false)
 * </code></pre>
 * <h3>See also</h3>
 * <p>If you need to determine whether at least one element matches a criterion, you
 * would be better off using <a href="any"><code>any</code></a>.</p></div>
 * 
 */
Enumerable.prototype.all  = function(iterator, context) { return false; };

/**
 * <p>Returns the results of applying the iterator to each element. Convenience alias for <a href="/api/enumerable/collect"><code>collect</code></a>.</p></div>
 * </div>
 * 
 * @param iterator
 * @return Array
 */
Enumerable.prototype.map  = function(iterator) { return new Array(); };

/**
 * <p>Invokes the same method, with the same arguments, for all items in a collection.  Returns the results of the method calls.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * ['hello', 'world', 'cool!'].invoke('toUpperCase')
 * // ['HELLO', 'WORLD', 'COOL!']
 * ['hello', 'world', 'cool!'].invoke('substring', 0, 3)
 * // ['hel', 'wor', 'coo']
 * // of course, this works on Prototype extensions
 * $('navBar', 'adsBar', 'footer').invoke('hide')
 * // because Prototype extensions return the element itself,
 * // you can also chain 'invoke' calls:
 * $$('#windows div.close').invoke('addClassName', 'active').invoke('show');
 * </code></pre>
 * <h3>See also</h3>
 * <p>The <a href="pluck"><code>pluck</code></a> method does much the same thing for property fetching.</p></div>
 * 
 * @param methodName
 * @param arg..., argument is optional
 * @return Array
 */
Enumerable.prototype.invoke  = function(methodName, arg1, arg2) { return new Array(); };

/**
 * <p>Returns the minimum element (or element-based computation), or <code>undefined</code> if the enumeration is empty.  Elements are either compared directly, or by first applying the iterator and comparing returned values.</p></div>
 * <p><strong>Note</strong>: for equivalent elements, the <strong>earliest</strong> one is returned.</p>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator = Prototype.K, argument is optional
 * @param context, argument is optional
 * @return minValue
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1,10).min()
 * // -> 1
 * ['hello', 'world', 'gizmo'].min()
 * // -> 'gizmo'
 * function Person(name, age) {
 *    this.name = name;
 *    this.age = age;
 * }
 * var john = new Person('John', 20);
 * var mark = new Person('Mark', 35);
 * var daisy = new Person('Daisy', 22);
 * [john, mark, daisy].min(function(person) {
 *   return person.age;
 * })
 * // -> 20
 * </code></pre></div>
 * 
 */
Enumerable.prototype.min  = function(iterator, context) { return null; };

/**
 * <p>Returns all the elements for which the iterator returned <code>false</code>.</p></div>
 * <p>The optional <code>context</code> parameter is what the iterator function will be bound to. If used, the <code>this</code> keyword inside the iterator will point to the object given by the argument.</p>
 * 
 * @param iterator
 * @param context, argument is optional
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $R(1, 10).reject(function(n) { return 0 == n % 2; })
 * // -> [1, 3, 5, 7, 9]
 * [ 'hello', 'world', 'this', 'is', 'nice'].reject(function(s) {
 *   return s.length >= 5;
 * })
 * // -> ['this', 'is', 'nice']
 * </code></pre>
 * <h3>See also</h3>
 * <p>The <a href="findAll"><code>findAll</code></a> method (and its <a href="select"><code>select</code></a> alias) are the opposites of this one.  If you need to split elements in two groups based upon a predicate, look at <a href="partition"><code>partition</code></a>.</p></div>
 * 
 */
Enumerable.prototype.reject  = function(iterator, context) { return new Array(); };

/**
 * <p>Finds the first element for which the iterator returns <code>true</code>. Aliased by the <a href="/api/enumerable/find"><code>find</code></a> method.</p></div>
 * </div>
 * 
 * @param iterator
 * @param context, argument is optional
 * @return firstElement | undefined
 */
Enumerable.prototype.detect  = function(iterator, context) { return null; };

/**
 * <p>Finds the first element for which the iterator returns <code>true</code>. Convenience alias for <a href="/api/enumerable/detect"><code>detect</code></a>, but constitutes the preferred (more readable) syntax.</p></div>
 * <p>This is the short-circuit version of the full-search <a href="findAll"><code>findAll</code></a>.  It
 * just returns the first element that matches your predicate, or <code>undefined</code> if
 * no element matches.</p>
 * 
 * @param iterator
 * @return firstElement | undefined
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * // An optimal exact prime detection method, slightly compacted.
 * function isPrime(n) {
 *   if (2 > n) return false;
 *   if (0 == n % 2) return (2 == n);
 *   for (var index = 3; n / index > index; index += 2)
 *     if (0 == n % index) return false;
 *   return true;
 * } // isPrime
 * $R(10,15).find(isPrime)
 * // -> 11
 * [ 'hello', 'world', 'this', 'is', 'nice'].find(function(s) {
 *   return s.length <= 3;
 * })
 * // -> 'is'
 * </code></pre></div>
 * 
 */
Enumerable.prototype.find  = function(iterator) { return null; };

/**
 * <p>Zips together (think of the zip on a pair of trousers) 2+ sequences, providing an array of tuples.  Each tuple contains one value per original sequence.  Tuples can be converted to something else by applying the optional iterator on them.</p></div>
 * <p>For those who never encountered a <code>zip</code> function before (i.e. have not worked enough with languages such as Haskell or Ruby ;-)), the exact behavior of this method might be difficult to grasp.  Here are a few examples that should clear it up.</p>
 * 
 * @param Sequence...
 * @param iterator = Prototype.K, argument is optional
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var firstNames = ['Justin', 'Mislav', 'Tobie', 'Christophe'];
 * var lastNames = ['Palmer', 'Marohnić', 'Langel', 'Porteneuve'];
 * firstNames.zip(lastNames)
 * // -> [['Justin', 'Palmer'], ['Mislav', 'Marohnić'], ['Tobie', 'Langel'], ['Christophe', 'Porteneuve']]
 * firstNames.zip(lastNames, function(a) { return a.join(' '); })
 * // -> ['Justin Palmer', 'Mislav Marohnić', 'Tobie Langel', 'Christophe Porteneuve']
 * var cities = ['Memphis', 'Zagreb', 'Montreal', 'Paris'];
 * firstNames.zip(lastNames, cities, function(p) {
 *   return p[0] + ' ' + p[1] + ', ' + p[2];
 * })
 * // -> ['Justin Palmer, Memphis', 'Mislav Marohnić, Zagreb', 'Tobie Langel, Montreal', 'Christophe Porteneuve, Paris']
 * firstNames.zip($R(1, 100), function(a) { return a.reverse().join('. '); })
 * // -> ['1. Justin', '2. Mislav', '3. Tobie', '4. Christophe']
 * </code></pre></div>
 * 
 */
Enumerable.prototype.zip  = function(array, iterator) { return new Array(); };

/**
 * <p>Optimization for a common use-case of <a href="/api/enumerable/collect"><code>collect</code></a>: fetching the same property for all the elements.  Returns the property values.</p></div>
 * <p>Since it avoids the cost of a lexical closure over an anonymous function (like
 * you would do with <a href="collect"><code>collect</code></a>), this performs much better.</p>
 * <p>Perhaps more importantly, it definitely makes for more concise <em>and</em> more
 * readable source code.</p>
 * 
 * @param propertyName
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * ['hello', 'world', 'this', 'is', 'nice'].pluck('length')
 * // -> [5, 5, 4, 2, 4]
 * document.getElementsByClassName('superfluous').pluck('tagName').sort().uniq()
 * // -> sorted list of unique canonical tag names for elements with this
 * // specific CSS class...
 * </code></pre>
 * <h3>See also</h3>
 * <p>The <a href="invoke"><code>invoke</code></a> method does much the same thing for method invoking.</p></div>
 * 
 */
Enumerable.prototype.pluck  = function(propertyName) { return new Array(); };

/**
 * <p>Determines whether a given object is in the <code>Enumerable</code> or not, based on the <code>==</code> comparison operator.  Convenience alias for <a href="/api/enumerable/include"><code>include</code></a>.</p></div>
 * </div>
 * 
 * @param object
 * @return Boolean
 */
Enumerable.prototype.member  = function(object) { return false; };

/**
 * <p><code>K</code> is Prototype&#8217;s very own <a href="http://en.wikipedia.org/wiki/Identity_function">identity function</a>, i.e. it returns its <code>argument</code> untouched.</p></div>
 * <p>This is used throughout the framework, most notably in the <a href="/api/enumerable">Enumerable</a> module as a default value for iterators.</p>
 * 
 * @param argument
 * @return argument
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * Prototype.K('hello world!');
 * // -> 'hello world!'
 * Prototype.K(1.5);
 * // -> 1.5
 * Prototype.K(Prototype.K);
 * // -> Prototype.K
 * </code></pre></div>
 * 
 */
Prototype.prototype.K  = function(argument) { return argument; };

/**
 * <p>The <code>emptyFunction</code> does nothing&#8230; and returns nothing!</p></div>
 * <p>It is used thoughout the framework to provide a fallback function in order to cut down on conditionals. Typically you&#8217;ll find it as a default value for optional callback functions.</p></div>
 * 
 * @param argument..., argument is optional
 */
Prototype.prototype.emptyFunction  = function() { };

/**
 * <p>Returns the position of the first occurrence of the argument within the array.  If the argument doesn&#8217;t exist in the array, returns -1.</p></div>
 * <p class="notice">Prior to version 1.6, Prototype&#8217;s <code>Array#indexOf</code> checked for equivalence (<code>==</code>) instead of identity (<code>===</code>). This was changed in order to be compliant with emerging browser implementations of <code>Array#indexOf</code>.</p>
 * <p>Minor note: this uses a plain old optimized indexing loop, so there&#8217;s no risk of extensions being detected by this method.</p>
 * 
 * @param value
 * @return position
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * [3, 5, 6, 1, 20].indexOf(1)
 * // -> 3
 * [3, 5, 6, 1, 20].indexOf(90)
 * // -> -1
 * // COMPATIBILITY CHANGE:
 * [0, false, 15].indexOf(false)
 * // Prototype 1.5 returns 0 (because 0 == false)
 * // Prototype 1.6 returns 1 (because 0 !== false)
 * </code></pre></div>
 * 
 */
Array.prototype.indexOf  = function(value) { return 0; };

/**
 * <p>Iterates over the array in ascending numerical index order.</p></div>
 * <p>This is actually the <a href="/api/enumerable/each"><code>each</code></a> method from the mixed-in <a href="/api/enumerable"><code>Enumerable</code></a> module.  It is documented here to clearly state the order of iteration.</p></div>
 * 
 * @param iterator
 * @return Array
 */
Array.prototype.each  = function(iterator) { return new Array(); };

/**
 * <p>Returns the last item in the array, or <code>undefined</code> if the array is empty.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">['Ruby', 'Php', 'Python'].last()
 * // -> 'Python'
 * [].last()
 * // -> undefined</code></pre></div>
 * 
 * @return value
 */
Array.prototype.last  = function() { return null; };

/**
 * <p>Clones an existing array or creates a new one from an array-like collection.</p>
 * <p>This is an alias for the <a href="/api/utility/dollar-a">$A()</a> method. Refer to its page for complete description and examples.</p></div>
 * </div>
 * 
 * @param iterable
 * @return actualArray
 */
Array.prototype.from  = function(iterable) { return new Array(); };

/**
 * <p>Returns the first item in the array, or <code>undefined</code> if the array is empty.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">['Ruby', 'Php', 'Python'].first()
 * // -> 'Ruby'
 * [].first()
 * // -> undefined</code></pre></div>
 * 
 * @return value
 */
Array.prototype.first  = function() { return null; };

/**
 * <p>Reduces arrays: one-element arrays are turned into their unique element, while multiple-element arrays are returned untouched.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">[3].reduce();
 * // -> 3
 * [3, 5].reduce();
 * // -> [3, 5]</code></pre></div>
 * 
 * @return Array | singleValue
 */
Array.prototype.reduce  = function() { return new Array(); };

/**
 * <p>Returns a duplicate of the array, leaving the original array intact.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 *   var fruits = ['Apples', 'Oranges'];
 *   var myFavs = fruits.clone();
 *   myFavs.pop();
 *   // fruits -> ['Apples', 'Oranges']
 *   // myFavs -> ['Apples']
 * </code></pre></div>
 * 
 * @return newArray
 */
Array.prototype.clone  = function() { return new Array(); };

/**
 * <p>Returns the size of the array.</p></div>
 * <p>This is just a local optimization of the mixed-in <a href="/api/enumerable/size"><code>size</code></a> method from the <a href="/api/enumerable"><code>Enumerable</code></a> module, which avoids array cloning and uses the array&#8217;s native <code>length</code> property.</p></div>
 * 
 * @return Number
 */
Array.prototype.size  = function() { return 0; };

/**
 * <p>Returns a new version of the array, without any <code>null</code>/<code>undefined</code> values.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">['frank', , 'sue', , 'sally', null].compact()
 * // -> ['frank', 'sue', 'sally']</code></pre></div>
 * 
 * @return newArray
 */
Array.prototype.compact  = function() { return new Array(); };

/**
 * <p>Returns a JSON string.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * ['a', {b: null}].toJSON();
 * //-> '["a", {"b": null}]'
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @return String
 */
Array.prototype.toJSON  = function() { return ""; };

/**
 * <p>Returns a &#8220;flat&#8221; (one-dimensional) version of the array.  Nested arrays are recursively injected &#8220;inline.&#8221;  This can prove very useful when handling the results of a recursive collection algorithm, for instance.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">['frank', ['bob', 'lisa'], ['jill', ['tom', 'sally']]].flatten()
 * // -> ['frank', 'bob', 'lisa', 'jill', 'tom', 'sally']</code></pre></div>
 * 
 * @return newArray
 */
Array.prototype.flatten  = function() { return new Array(); };

/**
 * <p>Produces a new version of the array that does not contain any of the specified values.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">[3, 5, 6, 1, 20].without(3)
 * // -> [5, 6, 1, 20]
 * [3, 5, 6, 1, 20].without(20, 6)
 * // -> [3, 5, 1]</code></pre></div>
 * 
 * @param value...
 * @return newArray
 */
Array.prototype.without  = function(value) { return new Array(); };

/**
 * <p>Returns the debug-oriented string representation of an array.</p></div>
 * <p>For more information on <code>inspect</code> methods, see <a href="/api/object/inspect"><code>Object.inspect</code></a>.</p>
 * 
 * @return String
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * ['Apples', {good: 'yes', bad: 'no'}, 3, 34].inspect()
 * // -> "['Apples', [object Object], 3, 34]"
 * </code></pre>
 * <h3>Note</h3>
 * <p>If you want to simply join the string elements of an array, use the native <code>join</code> method instead:</p>
 * <pre><code class="javascript">
 * ['apples', 'bananas', 'kiwis'].join(', ')
 * // -> 'apples, bananas, kiwis'
 * </code></pre></div>
 * 
 */
Array.prototype.inspect  = function() { return ""; };

/**
 * <p>Clears the array (makes it empty).</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">var guys = ['Sam', 'Justin', 'Andrew', 'Dan'];
 * guys.clear();
 * // -> []
 * guys
 * // -> []</code></pre></div>
 * 
 * @return Array
 */
Array.prototype.clear  = function() { return new Array(); };

/**
 * <p>Produces a duplicate-free version of an array.  If no duplicates are found, the original array is returned.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * ['Sam', 'Justin', 'Andrew', 'Dan', 'Sam'].uniq();
 * // -> ['Sam', 'Justin', 'Andrew', 'Dan']
 * ['Prototype', 'prototype'].uniq();
 * // -> ['Prototype', 'prototype'] because String comparison is case-sensitive
 * </code></pre>
 * <h3>Performance considerations</h3>
 * <p>On large arrays with duplicates, this method has a potentially large performance cost:</p>
 * <ul>
 * <li>Since it does not require the array to be sorted, it has quadratic complexity.</li>
 * <li>Since it relies on JavaScript&#8217;s <code>Array.concat</code>, it will yield a new, intermediary array every time it encounters a new value (a value that wasn&#8217;t already in the result array).</li>
 * </ul>
 * <p>More efficient implementations could be devised.  This page will get updated if such an optimization is committed.</p></div>
 * 
 * @return newArray
 */
Array.prototype.uniq  = function() { return new Array(); };

/**
 * <p>Returns the reversed version of the array.  By default, directly reverses the original. If <code>inline</code> is set to <code>false</code>, uses a clone of the original array.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">var nums = [3, 5, 6, 1, 20];
 * nums.reverse(false)
 * // -> [20, 1, 6, 5, 3]
 * nums
 * // -> [3, 5, 6, 1, 20]
 * nums.reverse()
 * // -> [20, 1, 6, 5, 3]
 * nums
 * // -> [20, 1, 6, 5, 3]</code></pre></div>
 * 
 * @param inline = true, argument is optional
 * @return Array
 */
Array.prototype.reverse  = function(inline) { return new Array(); };

/**
 * <p>This is just a local optimization of the mixed-in <a href="/api/enumerable/toArray"><code>toArray</code></a> from <a href="/api/enumerable"><code>Enumerable</code></a>.</p></div>
 * <p>This version aliases to <a href="clone"><code>clone</code></a>, avoiding the default iterative behavior.</p></div>
 * 
 * @return newArray
 */
Array.prototype.toArray  = function() { return new Array(); };

/**
 * <p>Inserts the <code>html</code> into the page as the last child of <code>element</code>.</p></div>
 * <p class="deprecated">As of Prototype 1.6, the complete <code>Insertion</code> class has been deprecated in favor of <a href="/api/element/insert"><code>Element#insert</code></a>.</p>
 * <p>Note that if the inserted HTML contains any <code>&lt;script&gt;</code> tag, these will be automatically evaluated after the insertion (<code>Insertion.Bottom</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a>). </p>
 * 
 * @param element
 * @param html
 * 
 * <h3>Example</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">
 *   &lt;div id=&quot;modern_major_general&quot;&gt;
 *     &lt;p&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">
 *   new Insertion.Bottom('modern_major_general', "&lt;p&gt;I am the very model of a modern major general.&lt;/p&gt;");
 * </code></pre>
 * <h4>Resulting HTML</h4>
 * <pre><code class="html">
 *   &lt;div id=&quot;modern_major_general&quot;&gt;
 *     &lt;p&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;
 *     &lt;p&gt;I am the very model of a modern major general.&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre></div>
 * @deprecated
 * 
 */
Insertion.prototype.Bottom  = function(element, html) { };

/**
 * <p>Inserts the <code>html</code> into the page as the first child of <code>element</code>.</p></div>
 * <p class="deprecated">As of Prototype 1.6, the complete <code>Insertion</code> class has been deprecated in favor of <a href="/api/element/insert"><code>Element#insert</code></a>.</p>
 * <p>Note that if the inserted HTML contains any <code>&lt;script&gt;</code> tag, these will be automatically evaluated after the insertion (<code>Insertion.Top</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a>). </p>
 * 
 * @param element
 * @param html
 * 
 * <h3>Example</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">
 *   &lt;div id=&quot;modern_major_general&quot;&gt;
 *     &lt;p&gt;I am the very model of a modern major general.&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">
 *   new Insertion.Top('modern_major_general', "&lt;p&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;");
 * </code></pre>
 * <h4>Resulting HTML</h4>
 * <pre><code class="html">
 *   &lt;div id=&quot;modern_major_general&quot;&gt;
 *     &lt;p&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;
 *     &lt;p&gt;I am the very model of a modern major general.&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre></div>
 *         
 * @deprecated 
 * 
 */
Insertion.prototype.Top  = function(element, html) { };

/**
 * <p>Inserts the <code>html</code> into the page as the next sibling of <code>element</code>.</p></div>
 * <p class="deprecated">As of Prototype 1.6, the complete <code>Insertion</code> class has been deprecated in favor of <a href="/api/element/insert"><code>Element#insert</code></a>.</p>
 * <p>Note that if the inserted HTML contains any <code>&lt;script&gt;</code> tag, these will be automatically evaluated after the insertion (<code>Insertion.After</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a>). </p>
 * 
 * @param element
 * @param html
 * 
 * <h3>Example</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">
 *   &lt;div&gt;
 *     &lt;p id="animal_vegetable_mineral"&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">
 *   new Insertion.After('animal_vegetable_mineral', "&lt;p&gt;I am the very model of a modern major general.&lt;/p&gt;");
 * </code></pre>
 * <h4>Resulting HTML</h4>
 * <pre><code class="html">
 *   &lt;div&gt;
 *     &lt;p id="animal_vegetable_mineral"&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;
 *     &lt;p&gt;I am the very model of a modern major general.&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre></div>
 * 
 * @deprecated
 * 
 */
Insertion.prototype.After  = function(element, html) { };

/**
 * <p>Inserts the <code>html</code> into the page as the previous sibling of <code>element</code>.</p></div>
 * <p class="deprecated">As of Prototype 1.6, the complete <code>Insertion</code> class has been deprecated in favor of <a href="/api/element/insert"><code>Element#insert</code></a>.</p>
 * <p>Note that if the inserted HTML contains any <code>&lt;script&gt;</code> tag, these will be automatically evaluated after the insertion (<code>Insertion.Before</code> internally calls <a href="/api/string/evalScripts">String#evalScripts</a>). </p>
 * 
 * @param element
 * @param html
 * 
 * <h3>Example</h3>
 * <h4>Original HTML</h4>
 * <pre><code class="html">
 *   &lt;div&gt;
 *     &lt;p id="modern_major_general"&gt;I am the very model of a modern major general.&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre>
 * <h4>JavaScript</h4>
 * <pre><code class="javascript">
 *   new Insertion.Before('modern_major_general', "&lt;p&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;");
 * </code></pre>
 * <h4>Resulting HTML</h4>
 * <pre><code class="html">
 *   &lt;div&gt;
 *     &lt;p&gt;In short, in all things vegetable, animal, and mineral...&lt;/p&gt;
 *     &lt;p id="modern_major_general"&gt;I am the very model of a modern major general.&lt;/p&gt;
 *   &lt;/div&gt;
 * </code></pre></div>
 *         
 * @deprecated
 * 
 */
Insertion.prototype.Before  = function(element, html) { };

/**
 * <p>Adds methods to an existing class.</p></div>
 * <p><code>Class#addMethods</code> is a method available on classes that have been defined with <a href="/api/class/create"><code>Class.create</code></a>. It can be used to add new instance methods to that class, or overwrite existing methods, after the class has been defined.</p>
 * <p>New methods propagate down the inheritance chain. If the class has subclasses, those subclasses will receive the new methods — even in the context of <code>$super</code> calls. The new methods also propagate to instances of the class and of all its subclasses, even those that have <em>already</em> been instantiated.</p>
 * 
 * @param methods
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var Animal = Class.create({
 *   initialize: function(name, sound) {
 *     this.name  = name;
 *     this.sound = sound;
 *   },
 *   speak: function() {
 *     alert(this.name + " says: " + this.sound + "!");
 *   }
 * });
 * // subclassing Animal
 * var Snake = Class.create(Animal, {
 *   initialize: function($super, name) {
 *     $super(name, 'hissssssssss');
 *   }
 * });
 * var ringneck = new Snake("Ringneck", "hissssssss");
 * ringneck.speak();
 * //-> alerts "Ringneck says: hissssssss!"
 * // adding Snake#speak (with a supercall)
 * Snake.addMethods({
 *   speak: function($super) {
 *     $super();
 *     alert("You should probably run. He looks really mad.");
 *   }
 * });
 * ringneck.speak();
 * //-> alerts "Ringneck says: hissssssss!"
 * //-> alerts "You should probably run. He looks really mad."
 * // redefining Animal#speak
 * Animal.addMethods({
 *   speak: function() {
 *     alert(this.name + 'snarls: ' + this.sound + '!');
 *   }
 * });
 * ringneck.speak();
 * //-> alerts "Ringneck snarls: hissssssss!"
 * //-> alerts "You should probably run. He looks really mad."
 * </code></pre></div>
 * 
 * @since 1.6.0
 * 
 */
Class.prototype.addMethods  = function(methods) { };

/**
 * <p>Creates a class.</p></div>
 * <p><code>Class.create</code> returns a function that, when called, will fire its own <code>initialize</code> method.</p>
 * <p>Since version 1.6, <code>Class.create</code> accepts two kinds of arguments. If the first argument is a <code>Class</code>, it's treated as the new class's superclass, and all its methods are inherited. Otherwise, any arguments passed are treated as objects, and their methods are copied over as instance methods of the new class.</p>
 * <p>If a subclass overrides an instance method declared in a superclass, the subclass's method can still access the original method. To do so, declare the subclass's method as normal, but insert <code>$super</code> as the first argument. This makes <code>$super</code> available as a method for use within the function.</p>
 * <p>To extend a class after it has been defined, use <a href="/api/class/addMethods"><code>Class.addMethods</code></a>.</p>
 * <h3>Special properties</h3>
 * <p>Classes themselves contain several special properties:</p>
 * <ul>
 * <li>The <code>superclass</code> property refers to an class's superclass (or <code>null</code> if there is no superclass).</li>
 * <li>The <code>subclasses</code> property stores an array of all a class's subclasses (or an empty array if it has none).</li>
 * </ul>
 * <p>In addition, an <em>instance</em> of a class contains the native JavaScript <code>constructor</code> property, which refers to the class that created it.</p>
 * 
 * @param superclass, argument is optional
 * @param methods..., argument is optional
 * @return Class
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * var Animal = Class.create({
 *   initialize: function(name, sound) {
 *     this.name  = name;
 *     this.sound = sound;
 *   },
 *   speak: function() {
 *     alert(this.name + " says: " + this.sound + "!");
 *   }
 * });
 * // subclassing Animal
 * var Snake = Class.create(Animal, {
 *   initialize: function($super, name) {
 *     $super(name, 'hissssssssss');
 *   }
 * });
 * var ringneck = new Snake("Ringneck");
 * ringneck.speak();
 * //-> alerts "Ringneck says: hissssssssss!"
 * var rattlesnake = new Snake("Rattler");
 * rattlesnake.speak();
 * //-> alerts "Rattler says: hissssssssss!"
 * // mixing-in Enumerable
 * var AnimalPen = Class.create(Enumerable, {  
 *   initialize: function() {
 *     var args = $A(arguments);
 *     if (!args.all( function(arg) { return arg instanceof Animal }))
 *       throw "Only animals in here!"
 *     this.animals = args;
 *   },
 *   // implement _each to use Enumerable methods
 *   _each: function(iterator) {
 *     return this.animals._each(iterator);
 *   }
 * });
 * var snakePen = new AnimalPen(ringneck, rattlesnake);
 * snakePen.invoke('speak');
 * //-> alerts "Ringneck says: hissssssssss!"
 * //-> alerts "Rattler says: hissssssssss!"
 * </code></pre>
 * <h3>Before 1.6</h3>
 * <p><em>This is legacy documentation that applies to versions of Prototype prior to 1.6.</em></p>
 * <p><code>Class.create()</code> returns a function that, when called, will fire its own <code>initialize</code> method.  This allows for more Ruby-like OOP.  It also lets you more easily subclass by overriding a parent's constructor.</p>
 * <h4>Example:</h4>
 * <pre><code class="javascript">
 * var Animal = Class.create();
 * Animal.prototype = {
 *   initialize: function(name, sound) {
 *     this.name  = name;
 *     this.sound = sound;
 *   },
 *   speak: function() {
 *     alert(name + " says: " + sound + "!");
 *   }
 * };
 * var snake = new Animal("Ringneck", "hissssssssss");
 * snake.speak();
 * // -> alerts "Ringneck says: hissssssssss!"
 * var Dog = Class.create();
 * Dog.prototype = Object.extend(new Animal(), {
 *   initialize: function(name) {
 *     this.name  = name;
 *     this.sound = "woof";
 *   }  
 * });
 * var fido = new Dog("Fido");
 * fido.speak();
 * // -> alerts "Fido says: woof!"
 * </code></pre></div>
 * 
 */
Class.prototype.create  = function(superclass, methods) { return new Class(); };

/**
 * <p>Unregisters all event handlers registered through <a href="/api/event/observe"><code>observe</code></a>.  Automatically wired for you. <strong>Not available since 1.6.</strong></p></div>
 * <div class="deprecated">
 *   Backwards incompatibility notice:<br />
 *   This method is removed in the <b>1.6</b> release. Remove calls to it from any script you currently use.
 * </div>
 * <h3>The sad tale of MSIE, event handlers and memory leaks</h3>
 * <p>There is a significant issue with MSIE, which is that under a variety of conditions, it just will not release event handlers when the page unloads.  These handlers will stay in RAM, filling it up slowly, clogging the browser&#8217;s arteries.  This is known as a memory leak.</p>
 * <p>Of course, manually keeping tabs on all the handlers you register (which you do through <a href="/api/event/observe"><code>observe</code></a>, being such a nice person) is pretty tedious.  And boring.  It would be, in short, the essence of un-cool.</p>
 * <p>Which is why Prototype takes care of it for you.  It keeps tabs, and when <code>unloadCache</code> is called, it unregisters everything and frees references, which is akin to sending a big pink lavender-perfumed invitation to the garbage collector.</p>
 * <h3>You don&#8217;t even need to know this</h3>
 * <p>What&#8217;s even better is, Prototype automatically hooks <code>unloadCache</code> to page unloading, exclusively for MSIE.  So you don&#8217;t have anything to do.  It&#8217;s all taken care of.  We just though you&#8217;d like to know.  Go do something productive, some value-added JavaScript code for instance.  We&#8217;re not here to hinder you with automatable details.</p></div>
 * 
 * @since 1.6
 * 
 */
Event.prototype.unloadCache  = function() { };

/**
 * <p>Returns the absolute vertical position for a mouse event.</p></div>
 * <p><strong>Note</strong>: the position is absolute on the <em>page</em>, not on the <em>viewport</em>: scrolling down increases the returned value for events on the same viewport location.</p></div>
 * 
 * @param event
 * @return Number
 */
Event.prototype.pointerY  = function(event) { return 0; };

/**
 * <p>Stops the event&#8217;s propagation and prevents its default action from being triggered eventually.</p></div>
 * <p>There are two aspects to how your browser handles an event once it fires up:</p>
 * <ul>
 * <li>The browser usually triggers event handlers on the actual element the event occurred on, then on its parent element, and so on and so forth, until the document&#8217;s root element is reached.  This is called <em>event bubbling</em>, and is the most common form of event propagation.  You may very well want to stop this propagation when you just handled an event, and don&#8217;t want it to keep bubbling up (or see no need for it).</li>
 * <li>Once your code got a chance to process the event, the browser handles it as well, if that event has a <em>default behavior</em>.  For instance, clicking on links navigates to them; submitting forms sends them over to the server side; hitting the Return key in a single-line form field submits it; etc.  You may very well want to prevent this default behavior if you do your own handling.</li>
 * </ul>
 * <p>Because stopping one of those aspects means, in 99.9% of the cases, preventing the other one as well, Prototype bundles both in this <code>stop</code> function.  Calling it on
 *  an event object stop propagation <em>and</em> prevents the default behavior.</p>
 * 
 * @param event
 * 
 * <h3>Example</h3>
 * <p>Here&#8217;s a simple code that prevents a form from being sent to the server side if a certain field is empty.</p>
 * <pre><code class="javascript">
 * Event.observe('signinForm', 'submit', function(event) {
 *   var login = $F('login').strip();
 *   if ('' == login) {
 *     Event.stop(event);
 *     // Display the issue one way or another
 *   }
 * });
 * </code></pre></div>
 * 
 */
Event.prototype.stop  = function(event) {};

/**
 * <p>Returns the DOM element on which the event occurred.</p></div>
 * <p>Note that from v1.5.1, the element returned by <code>Event.element</code> is already extended.</p>
 * 
 * @param event
 * @return Element
 * 
 * <h3>Example</h3>
 * <p>Here&#8217;s a simple code that lets you click everywhere on the page and, if you click directly on paragraphs, hides them.</p>
 * <pre><code class="javascript">
 * Event.observe(document.body, 'click', function(event) {
 *   var element = Event.element(event);
 *   if ('P' == element.tagName)
 *     element.hide();
 * });
 * </code></pre>
 * <h3>See also</h3>
 * <p>There is a subtle distinction between this function and <a href="/api/event/findElement"><code>findElement</code></a>.</p>
 * <h3>Note for Prototype 1.5.0</h3>
 * <p>Note that prior to version 1.5.1, if the browser does not support <em>native DOM extensions</em> (see <a href="/learn/extensions">this page</a> for further details), the element returned by <code>Event.element</code> might very well <strong>not be extended</strong>.  If you intend to use methods from <a href="/api/element/methods"><code>Element.Methods</code></a> on it, you need to wrap the call in the <a href="/api/utility/dollar"><code>$()</code></a> function like so:</p>
 * <pre><code class="javascript">
 * Event.observe(document.body, 'click', function(event) {
 *   var element = $(Event.element(event));
 *   // ...  
 * });
 * </code></pre></div>
 * 
 */
Event.prototype.element  = function(event) { return new Element(); };

/**
 * <p>Unregisters one or more event handlers.</p></div>
 * <p>This function unregisters event handlers registered via <a href="/api/event/observe"><code>Event.observe</code></a>. As of v1.6, it takes three forms:</p>
 * <ul>
 * <li><strong>Remove a specific handler:</strong> If you provide all three arguments, the specific handler you list is unregistered. You must provide the <em>exact</em> same arguments you provided to <a href="/api/event/observe"><code>Event.observe</code></a> (see "<em>Why won't it stop observing?</em>" below).</li>
 * <li><strong>Remove all handlers for an event:</strong> If you provide <code>element</code> and <code>eventName</code> but not <code>handler</code>, <strong>all</strong> handlers for that event on that element are unregistered. <em>(New in 1.6)</em></li>
 * <li><strong>Remove all handlers:</strong> If you just provide <code>element</code> and not the other two arguments, <strong>all</strong> handlers for <strong>all</strong> events on that element are removed. <em>(New in 1.6)</em></li>
 * </ul>
 * 
 * @param element
 * @param eventName
 * @param handler
 * 
 * <h3>Examples:</h3>
 * <p>Unregister <code>fooClickHandler</code> from the 'click' event on the element with the ID "foo":</p>
 * <pre><code class="javascript">Event.stopObserving('foo', 'click', fooClickHandler);
 * // or
 * $('foo').stopObserving('click', fooClickHandler);</code></pre>
 * <p>Unregister all 'click' handlers on the element with the ID "foo":</p>
 * <pre><code class="javascript">Event.stopObserving('foo', 'click');
 * // or
 * $('foo').stopObserving('click');</code></pre>
 * <p>Unregister <strong>all</strong> handlers on the element with the ID "foo" (perhaps you're about to remove <code>foo</code> from the DOM):</p>
 * <pre><code class="javascript">Event.stopObserving('foo');
 * // or
 * $('foo').stopObserving();</code></pre>
 * <h3>Why won't it stop observing!?</h3>
 * <p>When you're using the three-argument form to unregister a specific handler, for <code>stopObserving</code> to work you must pass <em>exactly the same arguments</em> as those you did to the corresponding <code>observe</code> call.  Complying with this seems straightforward enough, but there is a common pattern where code is not what it seems to be:</p>
 * <pre><code class="javascript">
 * var obj = {
 *   &#8230;
 *   fx: function(event) {
 *     &#8230;
 *   }
 * };
 * Event.observe(elt, 'click', obj.fx.bindAsEventListener(obj));
 * &#8230;
 * // THIS IS WRONG, DON'T DO IT!
 * Event.stopObserving(elt, 'click', obj.fx.bindAsEventListener(obj)); // Won't work!
 * </code></pre>
 * <p>Here, although it may seem fine at first glance, you must remember that <a href="/api/function/bindAsEventListener"><code>bindAsEventListener</code></a> returns a fresh anonymous function that wraps your method.  This means that every call to it returns a new function.  Therefore, the code above requests stopping on another function than was used when setting up observation.  No match is found, and the original observer is left untroubled.</p>
 * <p>To avoid this, you need to "cache" the bound functions (which is, for instance, what <a href="http://script.aculo.us">script.aculo.us</a> does in many of its classes), like th
 * is:</p>
 * <pre><code class="javascript">
 * var obj = {
 *   &#8230;
 *   fx: function(event) {
 *     &#8230;
 *   },
 * };
 * obj.bfx = obj.fx.bindAsEventListener(obj);
 * Event.observe(elt, 'click', obj.bfx);
 * &#8230;
 * Event.stopObserving(elt, 'click', obj.bfx);
 * </code></pre>
 * <h3>See also</h3>
 * <p>The <a href="/api/event/unloadCache"><code>unloadCache</code></a> function is related and worth a look.</p></div>
 * 
 */
Event.prototype.stopObserving  = function(element, eventName, handler) { };

/**
 * <p>Returns the first DOM element with a given tag name, upwards from the one on which the event occurred.</p></div>
 * <p>Sometimes, you&#8217;re not interested in the actual element that got hit by the event.  Sometimes you&#8217;re interested in its &#8220;closest element,&#8221; (either the original one, or its container, or its container&#8217;s container, etc.), defined by its tag (e.g., <code>&lt;p&gt;</code>).  This is what <code>findElement</code> is for.</p>
 * <p>The provided tag name will be compared in a case-insensitive manner.</p>
 * <p><strong>If no matching element is found, the document itself (<code>HTMLDocument</code> node) is returned.</strong></p>
 * 
 * @param event
 * @param tagName
 * @return Element
 * 
 * <h3>Example</h3>
 * <p>Here&#8217;s a simple code that lets you click everywhere on the page and hides the closest-fitting paragraph around your click (if any).</p>
 * <pre><code class="javascript">
 * Event.observe(document.body, 'click', function(event) {
 *   var elt = Event.findElement(event, 'P');
 *   if (elt != document)
 *     $(elt).hide();
 * });
 * </code></pre>
 * <p>For more complex searches, you&#8217;ll need to get the actual element and use <a href="/api/element/methods/up"><code>up</code></a> on it, which lets you express your request with CSS syntax, and also search farther than the first match (plus, the result is extension-guaranteed):</p>
 * <pre><code class="javascript">
 * Event.observe(document.body, 'click', function(event) {
 *   // First element from event source with 'container' among its CSS classes
 *   var elt = $(Event.element(event)).up('.container');
 *   // Or: second DIV from the event source
 *   // elt = $(Event.element(event)).up('div', 1);
 *   // Or: second DIV with 'holder' among its CSS classes...
 *   // elt = $(Event.element(event)).up('div.holder', 1);
 *   elt.hide();
 * });
 * </code></pre>
 * <h3>See also</h3>
 * <p>If you&#8217;re looking for the element directly hit by the event, just use the <a href="/api/event/element"><code>element</code></a> function.</p></div>
 * 
 */
Event.prototype.findElement  = function(event, tagName) { return new Element(); };

/**
 * <p>Returns the absolute horizontal position for a mouse event.</p></div>
 * <p><strong>Note</strong>: the position is absolute on the <em>page</em>, not on the <em>viewport</em>: scrolling right increases the returned value for events on the same viewport location.</p></div>
 * 
 * @param event
 * @return Number
 */
Event.prototype.pointerX  = function(event) { return 0; };

/**
 * <p>Extends <code>event</code> with all of the methods contained in <code>Event.Methods</code>.</p></div>
 * <p>Note that all events inside handlers that were registered using <a href="/api/event/observe"><code>Event.observe</code></a> or <a href="/api/element/observe"><code>Element#observe</code></a> will be extended automatically.</p>
 * <p>You need only call <code>Event.extend</code> manually if you register a handler a different way (e.g., the <code>onclick</code> attribute). We really can&#8217;t encourage that sort of thing, though.</p></div>
 * 
 * @since 1.6
 * 
 * @param event
 */
Event.prototype.extend  = function(event) { };

/**
 * <p>Determines whether a button-related mouse event was about the &#8220;left&#8221; (primary, actually) button.</p></div>
 * <p><strong>Note</strong>: this is not an absolute left, but &#8220;left for default&#8221; (right-handed).  On systems configured for left-handed users, where the primary button is the right one (from an absolute perspective), this function examines the proper button.</p></div>
 * 
 * @param event
 * @return Boolean
 */
Event.prototype.isLeftClick  = function(event) { return false; };

/**
 * <p>Registers an event handler on a DOM element.</p></div>
 * <p class="notice">
 *   Prior to Prototype 1.6, <code>Event.observe</code> supported a fourth argument (<code>useCapture</code>), a boolean that indicated whether to use the browser&#8217;s capturing phase or its bubbling phase. Since Internet Explorer does not support the capturing phase, we removed this argument from 1.6, lest it give users the false impression that they can use the capturing phase in all browsers.
 * </p>
 * <h3>An important note</h3>
 * <p>First, if you're coming from a background where you'd use HTML event attributes (e.g. <code>&lt;body onload="return myFunction()"&gt;</code>) or DOM Level-0 event properties (e.g. <code>window.onload = myFunction;</code>), you must shed those vile ways :-) and understand what <code>observe</code> does.</p>
 * <p>It does not <em>replace</em> existing handlers for that same element+event pair.  It <em>adds</em> to the <em>list of handlers</em> for that pair.  Using <code>observe</code> will never incapacitate earlier calls.</p>
 * <h3>What are those arguments about?</h3>
 * <ol>
 * <li>The DOM element you want to observe; as always in Prototype, this can be either an actual DOM reference, or the ID string for the element.</li>
 * <li>The standardized event name, as per the DOM level supported by your browser (usually <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html">DOM Level 2 Events</a>, see section 1.6 for event names and details).  This can be as simple as <code>'click'</code>.</li>
 * <li>The handler function.  This can be an anonymous function you create on-the-fly, a vanilla function, a <a href="/api/function/bindAsEventListener">bound event listener</a>, it's up to you.</li>
 * </ol>
 * <h3>The handler function</h3>
 * <p>Four important things about how your handler function is called:</p>
 * <ol>
 * <li>Its first argument is always the event object (on all browsers, including Internet Explorer).</li>
 * <li>(New as of 1.6.0.) The event object is extended with methods like <a href="/api/event/stop"><code>stop</code></a>, so you can write <code>event.stop()</code> rather than <code>Event.stop(event)</code>.</li>
 * <li>(New as of 1.6.0.) Within the handler, <strong><code>this</code></strong> is a reference to the extended element the handler is associated with.</li>
 * <li>(New as of 1.6.0.) The element on which the event actually occurred (the "target") is available from <a href="/api/event/findElement"><code>findElement()</code></a>. (Prior to 1.6.0, you would call <a href="/api/event/element"><code>element()</code></a> method, which still works.)  Note that the target might be a child of the observed element rather than the observed element itself, because of bubbling.</li>
 * </ol>
 * <h3>Which element was that again?</h3>
 * <p>So there's <strong><code>this</code></strong>, set to the element the handler is on, and the "target" from <code>event.findElement()</code>.  What's the difference?  Bubbling.  Consider this HTML:</p>
 * <pre><code class="html">&lt;p id='target'&gt;This event stuff is &lt;strong&gt;cool&lt;/strong&gt;.&lt;/p&gt;
 * </code></pre>
 * <p>That defines a <strong><code>p</code></strong> element containing a <strong><code>strong</code></strong> element, both of which also contain text.</p>
 * <p>Suppose you hook a <code>click</code> handler to that paragraph:</p>
 * <pre><code class="javascript">Event.observe('target', 'click', function(event) {
 *     // ...
 * });
 * </code></pre>
 * <p>Within your handler, <strong><code>this</code></strong> is always the <strong><code>p</code></strong> element.  <strong><code>event.findElement()</code></strong>, though, will be either the <strong><code>p</code></strong> element itself, or (if you click the word "cool") the <strong><code>strong</code></strong> element within it.</p>
 * <p>There's more to <a href="/api/event/findElement"><code>Event#findElement()</code></a> than just returning the element where the event occurred; it can also accept a selector and find the first ancestor matching that selector&nbsp;-- very handy for event delegation.</p>
 * <h3>The requirement people too often forget&#8230;</h3>
 * <p>To register a function as an event handler, the DOM element that you want to observe <strong>must already exist</strong> in the DOM (in other words, it must have appeared in the source, or been dynamically created and inserted, before your handler-registration script line runs).</p>
 * <h3>A simple example</h3>
 * <p>Let us assume the following (X)HTML fragment:</p>
 * <pre><code class="html">&lt;form id="signinForm" method="post" action="/auth/signin"&gt;
 * &#8230;
 * &lt;/form&gt;
 * </code></pre>
 * <p>Here's how to register your function <code>checkForm</code> on form submission:</p>
 * <pre><code class="javascript">Event.observe('signinForm', 'submit', checkForm);
 * </code></pre>
 * <p>Of course, you'd want this line of code to run once the form exists in the DOM; but putting inline scripts in the document is pretty obtrusive, so instead we'll go for a simple approach that waits till the page is fully loaded:</p>
 * <pre><code class="javascript">Event.observe(window, 'load', function() {
 *   Event.observe('signinForm', 'submit', checkForm);
 * });
 * </code></pre>
 * <p>Just a little wrapping&#8230;</p>
 * <p>Note that if your page is heavy, you might want to run this code before the page is fully loaded: just wait until the DOM is loaded, that will be enough.  (Prototype's <a href="/api/document/observe"><code>dom:loaded</code></a> event can help you with that.)</p>
 * <h3>The tricky case of methods that need <strong><code>this</code></strong></h3>
 * <p>Having <strong><code>this</code></strong> reference the observed element is handy, but sometimes you have other things you want to do with it.  Perhaps your handler is a method on an instance of a class, and you want <strong><code>this</code></strong> within the method to refer to the instance.  When you pass a function around (for instance, passing it into <code>observe</code> as the handler), just the function, not its context, is passed around -- it loses its <em>binding</em>.  Later when it's called, <strong><code>this</code></strong> can mean something completely different from what you're expecting.  Consider:</p>
 * <pre><code class="javascript">var IntMinMaxValidator = Class.create({
 *     initialize: function(fieldid, allowBlank, minValue, maxValue) {
 *         this.fieldid = fieldid;
 *         this.allowBlank = allowBlank;
 *         this.minValue = minValue;
 *         this.maxValue = maxValue;
 *         $(fieldid).observe('change', this.validateOnChange); // <== WRONG
 *     },
 *     validateOnChange: function(event) {
 *         var value;
 *         value = $(this.fieldid).getValue();
 *         if (value == '') {
 *             if (!this.allowBlanks) {
 *                 // ...report invalid blank...
 *             }
 *         } else {
 *             value = parseInt(value);
 *             if (isNaN(value) || value < this.minValue || value > this.maxValue) {
 *                 // ...report bad value...
 *             }
 *         }
 *     }
 * });
 * </code></pre>
 * <p>When <code>validateOnChange</code> gets called, <strong><code>this</code></strong> will be the field element, not the instance!  So <code>this.minValue</code>, etc., won't exist.  <em>Now</em> you're in trouble.</p>
 * <p>Or not.</p>
 * <p>Prototype's <a href="/api/function/bind"><code>bind</code></a> function to the rescue.  Using <code>bind()</code>, you can make sure your method gets the right <strong><code>this</code></strong>.  Just change the indicated line above to this:</p>
 * <pre><code class="javascript">$(fieldid).observe('change', this.validateOnChange.bind(this)); // <== RIGHT
 * </code></pre>
 * <p>See the <a href="/api/function/bind"><code>bind</code></a> documentation for details.  See also <a href="/api/function/bindAsEventListener"><code>bindAsEventListener</code></a>, with which you can pass arguments to your event handler without using a closure.</p></div>
 * 
 * @param element
 * @param eventName
 * @param handler
 */
Event.prototype.observe  = function(element, eventName, handler) { };

/**
 * <p>Exctracts the content of any <code>script</code> block present in the string and returns them as an array of strings.</p></div>
 * <p>This method is used internally by <a href="/api/string/evalScripts"><code>String#evalScripts</code></a>. It does <em>not</em> evaluate the scripts (use <a href="/api/string/evalScripts"><code>String#evalScripts</code></a> to do that), but can be usefull if you need to evaluate the scripts at a later date.</p>
 * 
 * @return [script...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'lorem... &lt;script&gt;2 + 2&lt;/script&gt;'.extractScripts();
 * // -> ['2 + 2']
 * '&lt;script&gt;2 + 2&lt;/script&gt;&lt;script&gt;alert("hello world!")&lt;/script&gt;'.extractScripts();
 * // -> ['2 + 2', 'alert("hello world!")']
 * </code></pre>
 * <h3>Notes</h3>
 * <p>To evaluate the scripts later on, you can use the following:</p>
 * <pre><code class="javascript">
 * var myScripts = '&lt;script&gt;2 + 2&lt;/script&gt;&lt;script&gt;alert("hello world!")&lt;/script&gt;'.extractScripts();
 * // -> ['2 + 2', 'alert("hello world!")']
 * var myReturnedValues = myScripts.map(function(script) {
 *   return eval(script);
 * });
 * // -> [4, undefined] (and displays 'hello world!' in the alert dialog)
 * </code></pre></div>
 * 
 */
String.prototype.extractScripts  = function() { return new Array(); };

/**
 * <p>Used internally by <a href="/api/objectrange"><code>ObjectRange</code></a>. Converts the last character of the string to the following character in the Unicode alphabet.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'a'.succ();
 * // -> 'b'
 * 'aaaa'.succ();
 * // -> 'aaab'
 * </code></pre></div>
 * 
 * @return string
 */
String.prototype.succ  = function() { return ""; };

/**
 * <p>Concatenates the string <code>count</code> times.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * "echo ".times(3);
 * //-> "echo echo echo "
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @param count
 * @return string
 */
String.prototype.times  = function(count) { return ""; };

/**
 * <p>Strips comment delimiters around Ajax JSON or JavaScript responses. This security method is called internally.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * '/*-secure-\n{"name": "Violet", "occupation": "character", "age": 25}\n/'.unfilterJSON()
 * // -> '{"name": "Violet", "occupation": "character", "age": 25}'
 * </code></pre></div>
 * 
 * @since 1..5.1
 * 
 * @param filter = Prototype.JSONFilter, argument is optional
 * @return String
 */
String.prototype.unfilterJSON  = function(filter) { return ""; };

/**
 * <p>Checks if the string ends with <code>substring</code>.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * 'slaughter'.endsWith('laughter')
 * // -> true
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @param substring
 * @return Boolean
 */
String.prototype.endsWith  = function(substring) { return false; };

/**
 * <p>Strips tags and converts the entity forms of special HTML characters to their normal form.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">'x &amp;gt; 10'.unescapeHTML()
 * // -> 'x > 10'
 * '&lt;h1&gt;Pride &amp;amp; Prejudice&lt;/h1&gt;'.unescapeHTML()
 * // -> 'Pride & Prejudice'</code></pre></div>
 * 
 * @return string
 */
String.prototype.unescapeHTML  = function() { return ""; };

/**
 * <p>Strips a string of any HTML tag.</p></div>
 * <p>Watch out for <code>&lt;script&gt;</code> tags in your string, as <code>String#stripTags</code> will <em>not</em> remove their content. Use <a href="/api/string/stripScripts"><code>String#stripScripts</code></a> to do so.</p>
 * 
 * @return string
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'a &lt;a href="#"&gt;link&lt;/a&gt;'.stripTags();
 * // -> 'a link'
 * 'a &lt;a href="#"&gt;link&lt;/a&gt;&lt;script&gt;alert("hello world!")&lt;/script&gt;'.stripTags();
 * // -> 'a linkalert("hello world!")'
 * 'a &lt;a href="#"&gt;link&lt;/a&gt;&lt;script&gt;alert("hello world!")&lt;/script&gt;'.stripScripts().stripTags();
 * // -> 'a link'
 * </code></pre></div>
 * 
 */
String.prototype.stripTags  = function() { return ""; };

/**
 * <p>Splits the string character-by-character and returns an array with the result.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">'a'.toArray();
 * // -> ['a']
 * 'hello world!'.toArray();
 * // -> ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']</code></pre></div>
 * 
 * @return [character...]
 */
String.prototype.toArray  = function() { return new Array(); };

/**
 * <p>Converts a string separated by dashes into a camelCase equivalent. For instance, <code>'foo-bar'</code> would be converted to <code>'fooBar'</code>.</p></div>
 * <p>Prototype uses this internally for translating CSS properties into their DOM <code>style</code> property equivalents.</p>
 * 
 * @return string
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">'background-color'.camelize();
 * // -> 'backgroundColor'
 * '-moz-binding'.camelize();
 * // -> 'MozBinding'</code></pre></div>
 * 
 */
String.prototype.camelize  = function() { return ""; };

/**
 * <p>Returns a JSON string.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * 'The "Quoted" chronicles'.toJSON();
 * //-> '"The \"Quoted\" chronicles"'
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @return String
 */
String.prototype.toJSON  = function() { return ""; };

/**
 * <p>Allows iterating over every occurrence of the given pattern (which can be a string or a regular expression). Returns the original string.</p></div>
 * <p>Internally just calls <a href="/api/string/gsub"><code>String#gsub</code></a> passing it <code>pattern</code> and <code>iterator</code> as arguments.</p>
 * 
 * @param pattern
 * @param iterator
 * @return string
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'apple, pear & orange'.scan(/\w+/, alert);
 * // -> 'apple pear orange' (and displays 'apple', 'pear' and 'orange' in three successive alert dialogs)
 * </code></pre>
 * <p>Can be used to populate an array:</p>
 * <pre><code class="javascript">
 * var fruits = [];
 * 'apple, pear & orange'.scan(/\w+/, function(match){ fruits.push(match[0])});
 * fruits.inspect()
 * // -> ['apple', 'pear', 'orange']
 * </code></pre>
 * <p>or even to work on the DOM:</p>
 * <pre><code class="javascript">
 * 'failure-message, success-message & spinner'.scan(/(\w|-)+/, Element.toggle)
 * // -> 'failure-message, success-message & spinner' (and toggles the visibility of each DOM element)
 * </code></pre>
 * <h3>Note</h3>
 * <p>Do <em>not</em> use the <code>"g"</code> flag on the regex as this will create an infinite loop.</p></div>
 * 
 */
String.prototype.scan  = function(pattern, iterator) { return ""; };

/**
 * <p>Checks if the string is empty.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * ''.empty();
 * //-> true
 * '  '.empty();
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @return Boolean
 */
String.prototype.empty  = function() { return false; };

/**
 * <p>Strips a string of anything that looks like an HTML <code>script</code> block.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">'a &lt;a href="#"&gt;link&lt;/a&gt;&lt;script&gt;alert("hello world!")&lt;/script&gt;'.stripScripts();
 * // -> 'a &lt;a href="#"&gt;link&lt;/a&gt;'</code></pre></div>
 * 
 * @return string
 */
String.prototype.stripScripts  = function() { return ""; };

/**
 * <p>Check if the string contains a substring.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * 'Prototype framework'.include('frame');
 * //-> true
 * 'Prototype framework'.include('frameset');
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @param substring
 * @return Boolean
 */
String.prototype.include  = function(substring) { return false; };

/**
 * <p>Check if the string is valid JSON by the use of regular expressions. This security method is called internally.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * "something".isJSON()
 * // -> false
 * "\"something\"".isJSON()
 * // -> true
 * "{ foo: 42 }".isJSON()
 * // -> false
 * "{ \"foo\": 42 }".isJSON()
 * // -> true
 * </code></pre></div>
 * 
 * @since 1.5.1.1
 * 
 * @return boolean
 */
String.prototype.isJSON  = function() { return false; };

/**
 * <p>Capitalizes the first letter of a string and downcases all the others.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">'hello'.capitalize();
 * // -> 'Hello'
 * 'HELLO WORLD!'.capitalize();
 * // -> 'Hello world!'</code></pre></div>
 * 
 * @return string
 */
String.prototype.capitalize  = function() { return ""; };

/**
 * <p>Checks if the string starts with <code>substring</code>.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * 'Prototype JavaScript'.startsWith('Pro');
 * //-> true
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @param substring
 * @return Boolean
 */
String.prototype.startsWith  = function(substring) { return false; };

/**
 * <p>Replaces every instance of the underscore character (<code>"_"</code>) by a dash (<code>"-"</code>).</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * 'border_bottom_width'.dasherize();
 * // -> 'border-bottom-width'
 * </code></pre>
 * <h3>Note</h3>
 * <p>Used in conjunction with <a href="/api/string/underscore"><code>String#underscore</code></a>, <code>String#dasherize</code> converts a DOM style into its CSS equivalent.</p>
 * <pre><code class="javascript">
 * 'borderBottomWidth'.underscore().dasherize();
 * // -> 'border-bottom-width'
 * </code></pre></div>
 * 
 * @return string
 */
String.prototype.dasherize  = function() { return ""; };

/**
 * <p>Evaluates the content of any <code>script</code> block present in the string. Returns an array containing the value returned by each script.</p></div>
 * <p>Only <code>script</code> tags containing inline code are supported; <code>script</code> tags referencing external files are ignored (and leave an <code>undefined</code> in the results array).</p>
 * 
 * @return [returnedValue...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'lorem... &lt;script&gt;2 + 2&lt;/script&gt;'.evalScripts();
 * // -> [4]
 * '&lt;script&gt;2 + 2&lt;/script&gt;&lt;script&gt;alert("hello world!")&lt;/script&gt;'.evalScripts();
 * // -> [4, undefined] (and displays 'hello world!' in the alert dialog)
 * </code></pre></div>
 * 
 */
String.prototype.evalScripts  = function() { return new Array(); };

/**
 * Alias of <a href="/api/string/toQueryParams"><code>toQueryParams</code></a>.
 */
String.prototype.parseQuery  = function() { return null; };

/**
 * <p>Check if the string is 'blank', meaning either empty or containing only whitespace.</p></div>
 * 
 * @return Boolean
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * ''.blank();
 * //-> true
 * '  '.blank();
 * //-> true
 * ' a '.blank();
 * //-> false
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 */
String.prototype.blank  = function() { return false; };

/**
 * <p>Returns the string with <em>every</em> occurence of a given pattern replaced by either a regular string, the returned value of a function or a <a href="/api/template"><code>Template</code> string</a>. The pattern can be a string or a regular expression.</p></div>
 * <p>If its second argument is a string <code>String#gsub</code> works just like the native JavaScript method <code>replace()</code> set to global match.</p>
 * <pre><code class="javascript">
 * var mouseEvents = 'click dblclick mousedown mouseup mouseover mousemove mouseout';
 * mouseEvents.gsub(' ', ', ');
 * // -> 'click, dblclick, mousedown, mouseup, mouseover, mousemove, mouseout'
 * mouseEvents.gsub(/\s+/, ', ');
 * // -> 'click, dblclick, mousedown, mouseup, mouseover, mousemove, mouseout'
 * </code></pre>
 * <p>If you pass it a function, it will be invoked for every occurrence of the pattern with the match of the current pattern as its unique argument. Note that this argument is the returned value of the <code>match()</code> method called on the current pattern. It is in the form of an array where the first element is the entire match and every subsequent one corresponds to a parenthesis group in the regex.</p>
 * <pre><code class="javascript">
 * mouseEvents.gsub(/\w+/, function(match){return 'on' + match[0].capitalize()});
 * // -> 'onClick onDblclick onMousedown onMouseup onMouseover onMousemove onMouseout'
 * var markdown = '![a pear](/img/pear.jpg) ![an orange](/img/orange.jpg)';
 * markdown.gsub(/!\[(.*?)\]\((.*?)\)/, function(match){
 *   return '&lt;img alt="' + match[1] + '" src="' + match[2] + '" /&gt;';
 * });
 * // -> '&lt;img alt="a pear" src="/img/pear.jpg" /&gt; &lt;img alt="an orange" src="/img/orange.jpg" /&gt;'
 * </code></pre>
 * <p>Lastly, you can pass <code>String#gsub</code> a <a href="/api/template"><code>Template</code> string</a> in which you can also access the returned value of the <code>match()</code> method using the ruby inspired notation: <code>#{0}</code> for the first element of the array, <code>#{1}</code> for the second one, and so on.  So our last example could be easily re-written as:</p>
 * <pre><code class="javascript">
 * markdown.gsub(/!\[(.*?)\]\((.*?)\)/, '&lt;img alt="#{1}" src="#{2}" /&gt;');
 * // -> '&lt;img alt="a pear" src="/img/pear.jpg" /&gt; &lt;img alt="an orange" src="/img/orange.jpg" /&gt;'
 * </code></pre>
 * <p>If you need an equivalent to <code>String#gsub</code> but without global match set on, try  <a href="/api/string/sub"><code>String#sub</code></a>.</p>
 * <h3>Note</h3>
 * <p>Do <em>not</em> use the <code>"g"</code> flag on the regex as this will create an infinite loop.</p></div>
 * 
 * @param pattern
 * @param replacement
 * @return string
 */
String.prototype.gsub  = function(pattern, replacement) { return ""; };

/**
 * <p>Truncates a string to the given length and appends a suffix to it (indicating that it is only an excerpt).</p></div>
 * <p>Of course, <code>String#truncate</code>does not modify strings which are shorter than the specified length.</p>
 * <p>If unspecified, the length parameter defaults to 30 and the suffix to <code>"..."</code>.</p>
 * <p>Note that <code>String#truncate</code> takes into consideration the length of the appended suffix so as to make the returned string of exactly the specified length.</p>
 * 
 * @param length = 30, argument is optional
 * @param suffix = '...', argument is optional
 * @return string
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'A random sentence whose length exceeds 30 characters.'.truncate();
 * // -> 'A random sentence whose len...'
 * 'Some random text'.truncate();
 * // -> 'Some random text.'
 * 'Some random text'.truncate(10);
 * // -> 'Some ra...'
 * 'Some random text'.truncate(10, ' [...]');
 * // -> 'Some [...]'
 * </code></pre></div>
 * 
 */
String.prototype.truncate  = function(length, suffix) { return ""; };

/**
 * <p>Returns a string with the <em>first</em> <code>count</code> occurrences of  <code>pattern</code> replaced by either a regular string, the returned value of a function or a <a href="/api/template"><code>Template</code> string</a>. <code>pattern</code> can be a string or a regular expression.</p></div>
 * <p>Unlike  <a href="/api/string/gsub"><code>String#gsub</code></a>, <code>String#sub</code> takes a third optional parameter which specifies the number of occurrences of the pattern which will be replaced. If not specified, it will default to 1.</p>
 * <p>Apart from that, <code>String#sub</code> works just like <a href="/api/string/gsub"><code>String#gsub</code></a>. Please refer to it for a complete explanation.</p>
 * 
 * @param pattern
 * @param replacement
 * @param count = 1, argument is optional
 * @return string
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var fruits = 'apple pear orange';
 *  fruits.sub(' ', ', ');
 * // -> 'apple, pear orange'
 *  fruits.sub(' ', ', ', 1);
 * // -> 'apple, pear orange'
 *  fruits.sub(' ', ', ', 2);
 * // -> 'apple, pear, orange'
 * fruits.sub(/\w+/, function(match){return match[0].capitalize() + ','}, 2);
 * // -> 'Apple, Pear, orange'
 * var markdown = '![a pear](/img/pear.jpg) ![an orange](/img/orange.jpg)';
 * markdown.sub(/!\[(.*?)\]\((.*?)\)/, function(match){
 *   return '&lt;img alt="' + match[1] + '" src="' + match[2] + '" /&gt;';
 * });
 * // -> '&lt;img alt="a pear" src="/img/pear.jpg" /&gt; ![an orange](/img/orange.jpg)'
 * markdown.sub(/!\[(.*?)\]\((.*?)\)/, '&lt;img alt="#{1}" src="#{2}" /&gt;');
 * // -> '&lt;img alt="a pear" src="/img/pear.jpg" /&gt; ![an orange](/img/orange.jpg)'
 * </code></pre>
 * <h3>Note</h3>
 * <p>Do <em>not</em> use the <code>"g"</code> flag on the regex as this will create an infinite loop.</p></div>
 * 
 */
String.prototype.sub  = function(pattern, replacement, count) { return ""; };

/**
 * <p>Treats the string as a Template and fills it with <code>object</code>&#8217;s properties.</p></div>
 * <p>Equivalent to calling <a href="/api/template/evaluate"><code>evaluate</code></a> on a previously-instantiated <a href="/api/template"><code>Template</code></a>.</p>
 * 
 * @param object
 * @param pattern, argument is optional
 * @return string
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * "#{animals} on a #{transport}".interpolate({ animals: "Pigs", transport: "Surfboard" });
 * //-> "Pigs on a Surfboard"
 * </code></pre>
 * <pre><code class="javascript">
 * var syntax = /(^|.|\r|\n)(\&lt;%=\s*(\w+)\s*%\&gt;)/; //matches symbols like '&lt;%= field %&gt;'
 * var html = '&lt;div&gt;Name: &lt;b&gt;&lt;%= name %&gt;&lt;/b&gt;, Age: &lt;b&gt;&lt;%=age%&gt;&lt;/b&gt;&lt;/div&gt;';
 * html.interpolate({ name: 'John Smith', age: 26 }, syntax);
 * // -> &lt;div&gt;Name: &lt;b&gt;John Smith&lt;/b&gt;, Age: &lt;b&gt;26&lt;/b&gt;&lt;/div&gt;
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 */
String.prototype.interpolate  = function(object, pattern) { return ""; };

/**
 * <p>Evaluates the JSON in the string and returns the resulting object. If the optional <code>sanitize</code> parameter is set to <code>true</code>, the string is checked for possible malicious attempts and <code>eval</code> is not called if one is detected.</p></div>
 * <p class="notice">If the JSON string is not well formated or if a malicious attempt is detected a <code>SyntaxError</code> is thrown.</p>
 * 
 * @param sanitize = false, argument is optional
 * @return object
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var person = '{ "name": "Violet", "occupation": "character" }'.evalJSON();
 * person.name;
 * //-> "Violet"
 * person = 'grabUserPassword()'.evalJSON(true);
 * //-> SyntaxError: Badly formed JSON string: 'grabUserPassword()'
 * person = '/*-secure-\n{"name": "Violet", "occupation": "character"}\n/'.evalJSON()
 * person.name;
 * //-> "Violet"
 * </code></pre>
 * <h3>Note</h3>
 * <p>Always set the <code>sanitize</code> parameter to <code>true</code> for data coming from externals sources to prevent XSS attacks.</p>
 * <p>As <code>String#evalJSON</code> internally calls <a href="unfilterJSON"><code>String#unfilterJSON</code></a>, optional security comment delimiters (defined in <code>Prototype.JSONFilter</code>) are automatically removed.</p></div>
 * 
 * @since 1.5.1
 * 
 */
String.prototype.evalJSON  = function(sanitize) { return {}; };

/**
 * <p>Returns a debug-oriented version of the string (i.e. wrapped in single or double quotes, with backslashes and quotes escaped). </p></div>
 * <p>For more information on <code>inspect</code> methods, see <a href="/api/object/inspect"><code>Object.inspect</code></a>.</p>
 * 
 * @param useDoubleQuotes = false, argument is optional
 * @return String
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'I\'m so happy.'.inspect();
 * // -> '\'I\\\'m so happy.\'' (displayed as 'I\'m so happy.' in an alert dialog or the console)
 * 'I\'m so happy.'.inspect(true);
 * // -> '"I'm so happy."'  (displayed as "I'm so happy." in an alert dialog or the console)
 * </code></pre></div>
 * 
 */
String.prototype.inspect  = function(useDoubleQuotes) { return ""; };

/**
 * <p>Converts HTML special characters to their entity equivalents.  </p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">'&lt;div class="article"&gt;This is an article&lt;/div&gt;'.escapeHTML();
 * // -> "&amp;lt;div class="article"&amp;gt;This is an article&amp;lt;/div&amp;gt;"</code></pre></div>
 * 
 * @return string
 */
String.prototype.escapeHTML  = function() { return ""; };

/**
 * <p>Strips all leading and trailing whitespace from a string.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">'    hello world!    '.strip();
 * // -> 'hello world!'</code></pre></div>
 * 
 * @return string
 */
String.prototype.strip  = function() { return ""; };

/**
 * <p>Converts a camelized string into a series of words separated by an underscore (<code>"_"</code>).</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * 'borderBottomWidth'.underscore();
 * // -> 'border_bottom_width'
 * </code></pre>
 * <h3>Note</h3>
 * <p>Used in conjunction with <a href="/api/string/dasherize"><code>String#dasherize</code></a>, <code>String#underscore</code> converts a DOM style into its CSS equivalent.</p>
 * <pre><code class="javascript">
 * 'borderBottomWidth'.underscore().dasherize();
 * // -> 'border-bottom-width'
 * </code></pre></div>
 * 
 * @return string
 */
String.prototype.underscore  = function() { return ""; };

/**
 * <p>Parses a URI-like query string and returns an object composed of parameter/value pairs.</p></div>
 * <p>This method is realy targeted at parsing query strings (hence the default value of <code>"&amp;"</code> for the <code>separator</code> argument).</p>
 * <p>For this reason, it does <em>not</em> consider anything that is either before a question mark (which signals the beginning of a query string) or beyond the hash symbol (<code>"#"</code>), and runs <code>decodeURIComponent()</code> on each parameter/value pair.</p>
 * <p><code>String#toQueryParams</code> also aggregates the values of identical keys into an array of values.</p>
 * <p>Note that parameters which do not have a specified value will be set to <code>undefined</code>.</p>
 * 
 * @param separator = '&', argument is optional
 * @return Object
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * 'section=blog&id=45'.toQueryParams();
 * // -> {section: 'blog', id: '45'}
 * 'section=blog;id=45'.toQueryParams();
 * // -> {section: 'blog', id: '45'}
 * 'http://www.example.com?section=blog&id=45#comments'.toQueryParams();
 * // -> {section: 'blog', id: '45'}
 * 'section=blog&tag=javascript&tag=prototype&tag=doc'.toQueryParams();
 * // -> {section: 'blog', tag: ['javascript', 'prototype', 'doc']}
 * 'tag=ruby%20on%20rails'.toQueryParams();
 * // -> {tag: 'ruby on rails'}
 * 'id=45&raw'.toQueryParams();
 * // -> {id: '45', raw: undefined}
 * </code></pre></div>
 * 
 */
String.prototype.toQueryParams  = function(separator) { return null; };

/**
 * <p>Disables the form as whole. Form controls will be visible but uneditable.</p></div>
 * <p>Disabling the form is done by iterating over form elements and disabling them.</p>
 * <h3>Can I try it?</h3>
 * <p>Sure, here's an example:</p>
 * <form id="disable-example" class="example" action="#" onsubmit="return false">
 *   <fieldset><legend>User info</legend>
 *   <div><label for="username">Username:</label> <input type="text" name="username" id="username" value="Sulien" /></div>
 *   <div><label for="age">Age:</label> <input type="text" name="age" id="age" value="23" size="3" /></div>
 *   <div><label for="hobbies">Your hobbies are:</label>
 *   <select name="hobbies" id="hobbies" multiple="multiple">
 *     <option>coding</option>
 *     <option>swimming</option>
 *     <option>hiking</option>
 *     <option>drawing</option>
 *   </select></div>
 *   <div class="buttonrow"><button onclick="var form = $('disable-example'); form[form.disabled ? 'enable' : 'disable'](); form.disabled = !form.disabled;">Toggle disabled!</button></div>
 *   </fieldset>
 * </form>
 * <p>Code attached to the onclick handler for the button is:</p>
 * <pre><code class="javascript">var form = $('disable-example');
 * // cycle between calling form.disable() and form.enable()
 * form[form.disabled ? 'enable' : 'disable']();
 * form.disabled = !form.disabled;</code></pre>
 * <h3>Note</h3>
 * <p>Keep in mind that <em>disabled elements are skipped</em> by serialize methods! You cannot serialize a disabled form.</p></div>
 * 
 * @param formElement
 * @return HTMLFormElement
 */
Form.prototype.disable  = function(formElement) { return HTMLFormElement(); };

/**
 * <p>Disables a form control, effectively preventing its value to be changed until it is enabled again.</p></div>
 * <p>This method sets the native <code>disabled</code> property of an element to <code>true</code>. You can use this property to check the state of a control.</p>
 * 
 * @param element
 * @return HTMLElement
 * 
 * <h3>Example</h3>
 * <p>See the interactive example in the <a href="../disable">Form.disable()</a> method, which is basically it.</p>
 * <h3>Notes</h3>
 * <p>Disabled form controls are never serialized.</p>
 * <p>Never disable a form control as a security measure without having validation for it server-side. A user with minimal experience of JavaScript can enable these fields on your site easily using any browser. Instead, use disabling as a usability enhancement - with it you can indicate that a specific value should not be changed at the time being.</p></div>
 * 
 */
Form.Element.prototype.disable  = function(element) { return new HTMLElement(); };

/**
 * <p>Selects the current text in a text input.</p></div>
 * <h3>Example</h3>
 * <p>Some search boxes are set up so that they auto-select their content when they receive focus.</p>
 * <pre><code class="javascript">
 * $('searchbox').onfocus = function() {
 *   Form.Element.select(this)
 *   // You can also rely on the native method, but this will NOT return the element!
 *   this.select()
 * }
 * </code></pre>
 * <h3>Focusing + selecting: use <code>activate</code>!</h3>
 * <p>The <a href="/api/form/element/activate"><code>activate</code></a> method is a nifty way to both focus a form field and select its current text, all in one portable JavaScript call.</p></div>
 * 
 * @param element
 * @return HTMLElement
 */
Form.Element.prototype.select  = function(element) { return new HTMLElement(); };

/**
 * <p>Gives keyboard focus to an element.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * Form.Element.focus('searchbox')
 * // Almost equivalent, but does NOT return the form element (uses the native focus() method):
 * $('searchbox').focus()
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Form.Element.prototype.focus  = function(element) { return new HTMLElement(); };

/**
 * <p>Creates an URL-encoded string representation of a form control in the <code>name=value</code> format.</p></div>
 * <p>The result of this method is a string suitable for Ajax requests. However, it serializes only a single element - if you need to serialize the whole form use <a href="../serialize"><code>Form.serialize()</code></a> instead.</p>
 * <h3>Notes</h3>
 * <p>Serializing a disabled control or a one without a name will always result in an empty string.</p>
 * <p>If you simply need an element's value for reasons other than Ajax requests, use <a href="getValue"><code>getValue()</code></a> instead.</p></div>
 * 
 * @param element
 * @return string
 */
Form.Element.prototype.serialize  = function(element) { return ""; };

/**
 * <p>Enables a previously disabled form control.</p></div>
 * <h3>Example</h3>
 * <p>See the interactive example in the <a href="../disable">Form.disable()</a> method, which is basically it.</p></div>
 * 
 * @param element
 * @return HTMLElement
 */
Form.Element.prototype.enable  = function(element) { return new HTMLElement(); };

/**
 * <p>Returns the current value of a form control. A string is returned for most controls; only multiple select boxes return an array of values. The global shortcut for this method is <a href="/api/utility/dollar-f"><code>$F()</code></a>.</p></div>
 * <h3>How to reference form controls by their <em>name</em></h3>
 * <p>This method is consistent with other DOM extensions in that it requires an element <strong>ID</strong> as the string argument, not the name of the form control (as some might think). If you want to reference controls by their names, first find the control the regular JavaScript way and use the node itself instead of an ID as the argument.</p>
 * <p>For example, if you have an input named "company" in a form with an ID "contact":</p>
 * <pre><code class="javascript">var form = $('contact');
 * var input = form['company'];
 * Form.Element.getValue(input);
 * // but, the preferred call is:
 * $(input).getValue(); // we used the $() method so the node gets extended
 * // you can also use the shortcut
 * $F(input);
 * </code></pre>
 * <h3>Note</h3>
 * <p>An error is thrown ("element has no properties") if the <code>element</code> argument is an unknown ID.</p></div>
 * 
 * @param element
 * @return string | array
 */
Form.Element.prototype.getValue  = function(element) { return ""; };

/**
 * <p>Returns true if a text input has contents, false otherwise.</p></div>
 * <h3>Example</h3>
 * <p>This method is very handy in a generic form validation routine. Try to submit the following form first without filling out the information, then again after typing some text in the fields:</p>
 * <form id="example" class="example" action="#">
 *   <fieldset>
 *     <legend>User Details</legend>
 *     <p id="msg" class="message">Please fill out the following fields:</p>
 *     <div>
 *       <label for="username">Username</label>
 *       <input id="username" type="text" name="username" />
 *     </div>
 *     <div>
 *       <label for="email">Email Address</label>
 *       <input id="email" type="text" name="email" />
 *     </div>
 *     <div class="buttonrow"><input type="submit" value="submit" /></div>
 *   </fieldset>
 *   <script type="text/javascript">
 *     $('example').onsubmit = function(){
 *       var valid, msg = $('msg')
 *       // are both fields present?
 *       valid = $(this.username).present() && $(this.email).present()
 *       if (valid) {
 *         // in real world we would return true here to allow the form to be submitted
 *         // return true
 *         msg.update('Passed validation!').style.color = 'green'
 *       } else {
 *         msg.update('Please fill out <em>all</em> the fields.').style.color = 'red'
 *       }
 *       return false
 *     }
 *   </script>
 * </form>
 * <p>Here is the complete JavaScript code for the above example:</p>
 * <pre><code class="javascript">
 * $('example').onsubmit = function(){
 *   var valid, msg = $('msg')
 *   // are both fields present?
 *   valid = $(this.username).present() && $(this.email).present()
 *   if (valid) {
 *     // in real world we would return true here to allow the form to be submitted
 *     // return true
 *     msg.update('Passed validation!').style.color = 'green'
 *   } else {
 *     msg.update('Please fill out <em>all</em> the fields.').style.color = 'red'
 *   }
 *   return false
 * }
 * </code></pre></div>
 * 
 * @param element
 * @return boolean
 */
Form.Element.prototype.present  = function(element) { return false; };

/**
 * <p>Gives focus to a form control and selects its contents if it is a text input.</p></div>
 * <p>This method is just a shortcut for focusing and selecting; therefore, these are equivalent (aside from the fact that the former one will <strong>not</strong> return the field) :</p>
 * <pre><code class="javascript">
 * Form.Element.focus('myelement').select()
 * $('myelement').activate()
 * </code></pre>
 * <p>Guess which call is the nicest? ;)</p></div>
 * 
 * @param element
 * @return HTMLElement
 */
Form.Element.prototype.activate  = function(element) { return new HTMLElement(); };

/**
 * <p>Clears the contents of a text input.</p></div>
 * <h3>Example</h3>
 * <p>This code sets up a text field in a way that it clears its contents the first time it receives focus:</p>
 * <pre><code class="javascript">
 * $('some_field').onfocus = function() {
 *   // if already cleared, do nothing
 *   if (this._cleared) return
 *   // when this code is executed, "this" keyword will in fact be the field itself
 *   this.clear()
 *   this._cleared = true
 * }
 * </code></pre></div>
 * 
 * @param element
 * @return HTMLElement
 */
Form.Element.prototype.clear  = function(element) { return new HTMLElement(); };

/**
 * <p>Gives keyboard focus to the first element of the form.</p></div>
 * <p>Uses <a href="findFirstElement"><code>Form.findFirstElement()</code></a> to get the first element and calls <a href="element/activate"><code>activate()</code></a> on it. This is useful for enhancing usability on your site by bringing focus on page load to forms such as search forms or contact forms where a user is ready to start typing right away.</p></div>
 * 
 * @param formElement
 * @return HTMLFormElement
 */
Form.prototype.focusFirstElement  = function(formElement) { return new HTMLFormElement(); };

/**
 * <p>Serialize form data to a string suitable for Ajax requests (default behavior) or, if optional <code>getHash</code> evaluates to <code>true</code>, an object hash where keys are form control names and values are data.</p></div>
 * <p>Depending of whether or not the optional parameter <code>getHash</code> evaluates to <code>true</code>, the result is either an object of the form <code>{name: "johnny", color: "blue"}</code> or a string of the form <code>"name=johnny&amp;color=blue"</code>, suitable for parameters in an Ajax request. This method mimics the way browsers serialize forms natively so that form data can be sent without refreshing the page.</p>
 * <p class="deprecated">As of Prototype 1.5 the <em>preferred</em> form of passing parameters to an Ajax request is with an <em>object hash</em>. This means you should pass <code>true</code> for the optional argument. The old behavior (serializing to string) is kept for backwards-compatibility.</p>
 * <h3>Interactive example</h3>
 * <p>The following code is all there is to it:</p>
 * <pre><code class="javascript">
 * $('person-example').serialize()
 * // -> 'username=sulien&age=22&hobbies=coding&hobbies=hiking'
 * $('person-example').serialize(true)
 * // -> {username: 'sulien', age: '22', hobbies: ['coding', 'hiking']}</code></pre>
 * <p>Try it for yourself!</p>
 * <form id="person-example" class="example" action="#" onsubmit="alert($(this).serialize()); return false">
 *   <fieldset><legend>User info</legend>
 *   <div><label for="username">Username:</label> <input type="text" name="username" id="username" value="" /></div>
 *   <div><label for="age">Age:</label> <input type="text" name="age" id="age" value="" size="3" /></div>
 *   <div><label for="hobbies">Your hobbies are:</label>
 *   <select name="hobbies" id="hobbies" multiple="multiple">
 *     <option>coding</option>
 *     <option>swimming</option>
 *     <option>hiking</option>
 *     <option>drawing</option>
 *   </select>
 *  </div>
 *   <div class="buttonrow"><input type="submit" value="serialize!" /></div>
 *   </fieldset>
 * </form>
 * <h3>Notes</h3>
 * <p class="notice">Disabled form elements are not serialized (as per W3C HTML recommendation). Also, file inputs are skipped as they cannot be serialized and sent using only JavaScript.</p>
 * <p>Keep in mind that "hobbies" multiple select should really be named "hobbies[]" if we're posting to a PHP or Ruby on Rails backend because we want to send an <em>array</em> of values instead of a single one. This has nothing to do with JavaScript - Prototype doesn't do any magic with the names of your controls, leaving these decisions entirely up to you.</p></div>
 * 
 * @param formElement
 * @param getHash = false, argument is optional
 * @return String | object
 */
Form.prototype.serialize  = function(formElement, getHash) { return ""; };

/**
 * <p>Returns a collection of all INPUT elements in a form. Use optional <code>type</code> and <code>name</code> arguments to restrict the search on these attributes.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">var form = $('myform')
 * form.getInputs()       // -> all INPUT elements
 * form.getInputs('text') // -> only text inputs
 * var buttons = form.getInputs('radio', 'education')
 * // -> only radio buttons of name "education"
 * // now disable these radio buttons:
 * buttons.invoke('disable')</code></pre>
 * <h3>Note</h3>
 * <p>Input elements are returned in the <em>document</em> order, not the <a href="http://www.w3.org/TR/html4/interact/forms.html#h-17.11.1">tabindex order</a>.</p></div>
 * 
 * @param formElement 
 * @param type, argument is optional
 * @param name, argument is optional
 * @return array
 */
Form.prototype.getInputs  = function(formElement, type, name) { return new Array(); };

/**
 * <p>Returns a collection of all form controls within a form</p></div>
 * <h3>Note</h3>
 * <p>OPTION elements are not included in the result; only their parent SELECT control is.</p></div>
 * 
 * @param formElement
 * @return array
 */
Form.prototype.getElements = function(formElement) { return new Array(); };

/**
 * <p>Enables a fully or partially disabled form.</p></div>
 * <p>Enabling the form is done by iterating over form elements and enabling them.</p>
 * 
 * @param formElement
 * @return HTMLFormElement
 * 
 * <h3>Example</h3>
 * <p>See the interactive example in the <a href="./disable">disable()</a> method, which is basically it.</p>
 * <h3>Note</h3>
 * <p>This will enable all form controls regardless of how they were disabled (by scripting or by HTML attributes).</p></div>
 * 
 */
Form.prototype.enable  = function(formElement) { return new HTMLFormElement(); };

/**
 * <p>Finds first non-hidden, non-disabled form control.</p></div>
 * <p>The returned object is either an INPUT, SELECT or TEXTAREA element. This method is used by the <a href="focusFirstElement"><code>focusFirstElement()</code></a> method.</p>
 * <h3>Note</h3>
 * <p>The result of this method is the element that comes first in the <em>document</em> order, not the <a href="http://www.w3.org/TR/html4/interact/forms.html#h-17.11.1">tabindex order</a>.</p></div>
 * 
 * @param formElement
 * @return HTMLElement
 */
Form.prototype.findFirstElement  = function(formElement) { return new HTMLElement(); };

/**
 * <p>Resets a form to its default values.</p></div>
 * <p>Example usage:</p>
 * <pre><code class="javascript">Form.reset('contact')
 * // equivalent:
 * $('contact').reset()
 * // both have the same effect as pressing the reset button</code></pre>
 * <p>This method allows you to programatically reset a form. It is a wrapper for the <code>reset()</code> method native to <code>HTMLFormElement</code>.</p></div>
 * 
 * @param formElement
 * @return HTMLFormElement
 */
Form.prototype.reset  = function(formElement) { return new HTMLFormElement(); };

/**
 * <p>Serialize an array of form elements to a string suitable for Ajax requests (default behavior) or, if optional <code>getHash</code> evaluates to <code>true</code>, an object hash where keys are form control names and values are data..</p></div>
 * <p>The preferred method to serialize a form is <a href="serialize"><code>Form.serialize</code></a>. Refer to it for further information and examples on the <code>getHash</code> parameter. However, with <code>serializeElements</code> you can serialize <em>specific</em> input elements of your choice, allowing you to specify a subset of form elements that you want to serialize data from.</p>
 * 
 * @param elements
 * @param getHash = false, argument is optional
 * @return string
 * 
 * <h3>Example</h3>
 * <p>To serialize all input elements of type "text":</p>
 * <pre><code class="javascript">
 * Form.serializeElements( $('myform').getInputs('text') )
 * // -> serialized data
 * </code></pre></div>
 * 
 */
Form.prototype.serializeElements  = function(elements, getHash) { return ""; };

/**
 * <p>A convenience method for serializing and submitting the form via an Ajax.Request to the URL of the form&#8217;s <code>action</code> attribute. The <code>options</code> parameter is passed to the Ajax.Request instance, allowing to override the HTTP method and to specify additional parameters.</p></div>
 * <p>Options passed to <code>request()</code> are intelligently merged with the underlying <a href="/api/ajax/options"><code>Ajax.Request</code> options</a>:</p>
 * <ul>
 * <li>If the form has a method attribute, its value is used for the <code>Ajax.Request</code> <code>method</code> option.  If a method option is passed to <code>request()</code>, it takes precedence over the form&#8217;s method attribute. If neither is specified, method defaults to &#8220;POST&#8221;. </li>
 * <li>Key-value pairs specified in the <code>parameters</code> option (either as a hash or a query string) will be merged with (and <em>take precedence</em> over) the serialized form parameters.</li>
 * </ul>
 * 
 * @param options, argument is optional
 * @return new Ajax.Request
 * 
 * <h3>Example</h3>
 * <p>Suppose you have this HTML form:</p>
 * <pre><code class="html">&lt;form id=&quot;person-example&quot; method=&quot;POST&quot; action=&quot;/user/info&quot;&gt;
 *   &lt;fieldset&gt;&lt;legend&gt;User info&lt;/legend&gt;
 *   &lt;div&gt;&lt;label for=&quot;username&quot;&gt;Username:&lt;/label&gt;
 *     &lt;input type=&quot;text&quot; name=&quot;username&quot; id=&quot;username&quot; value=&quot;&quot; /&gt;&lt;/div&gt;
 *   &lt;div&gt;&lt;label for=&quot;age&quot;&gt;Age:&lt;/label&gt;
 *     &lt;input type=&quot;text&quot; name=&quot;age&quot; id=&quot;age&quot; value=&quot;&quot; size=&quot;3&quot; /&gt;&lt;/div&gt;
 *   &lt;div&gt;&lt;label for=&quot;hobbies&quot;&gt;Your hobbies are:&lt;/label&gt;
 *   &lt;select name=&quot;hobbies[]&quot; id=&quot;hobbies&quot; multiple=&quot;multiple&quot;&gt;
 *     &lt;option&gt;coding&lt;/option&gt;
 *     &lt;option&gt;swimming&lt;/option&gt;
 *     &lt;option&gt;hiking&lt;/option&gt;
 *     &lt;option&gt;drawing&lt;/option&gt;
 *   &lt;/select&gt;
 *  &lt;/div&gt;
 *   &lt;div class=&quot;buttonrow&quot;&gt;&lt;input type=&quot;submit&quot; value=&quot;serialize!&quot; /&gt;&lt;/div&gt;
 *   &lt;/fieldset&gt;
 * &lt;/form&gt;
 * </code></pre>
 * <p>You can easily post it with Ajax like this:</p>
 * <pre><code class="javascript">
 * $('person-example').request(); //done - it's posted
 * // do the same with a callback:
 * $('person-example').request({
 *   onComplete: function(){ alert('Form data saved!') }
 * })</code></pre>
 * <p>To override the HTTP method and add some parameters, simply use <code>method</code> and <code>parameters</code> in the options. In this example we set the method to GET and set two fixed parameters: <code>interests</code> and <code>hobbies</code>. The latter already exists in the form but this value will take precedence.</p>
 * <pre><code class="javascript">$('person-example').request({
 *   method: 'get',
 *   parameters: { interests:'JavaScript', 'hobbies[]':['programming', 'music'] },
 *   onComplete: function(){ alert('Form data saved!') }
 * })</code></pre></div>
 * 
 * @since 1.5.1
 * 
 */
Form.prototype.request  = function(options) { return new Ajax.Request(); };

/**
 * <p>Reads the argument names as defined in the function definition and returns the values as an array of strings, or an empty array if the function is defined without parameters.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">var fn = function(foo, bar) {
 *   return foo + bar;
 * };
 * fn.argumentNames(); //-> ['foo', 'bar']
 * Prototype.emptyFunction.argumentNames(); //-> []
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @return Array
 */
Function.prototype.argumentNames  = function() { return new Array(); };

/**
 * <p>Takes a function and wraps it in another function that, at call time, pushes <code>this</code> to the original function as the first argument.</p></div>
 * <p>The <code>methodize</code> method transforms the original function that has an explicit first argument to a function that passes <code>this</code> (the current context) as an implicit first argument at call time. It is useful when we want to transform a function that takes an object to a method of that object or its prototype, shortening its signature by one argument.</p>
 * 
 * @return Function
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">// start off with a simple function that does an operation
 * // on the target object:
 * var fn = function(target, foo) {
 *   target.value = foo;
 * };
 * var object = {};
 * // use the original function
 * fn(object, 'bar');
 * object.value //-> 'bar'
 * // if we methodize it and copy over to the object, it becomes
 * // a method of the object and takes 1 argument less:
 * object.fnMethodized = fn.methodize();
 * object.fnMethodized('boom!');
 * object.value //-> 'boom!'
 * </code></pre>
 * <p>Of course, usage shown in the example is rarely useful. It's more useful to copy methodized functions to object prototypes so that new methods are immediately shared among instances. In Prototype library, <code>methodize</code> has important usage in DOM and Event modules; <a href="/api/element/methods"><code>Element.Methods</code></a> and <code>Event.Methods</code> are methodized and placed in their native prototypes so that they are available on DOM nodes and event objects, respectively.</p></div>
 * 
 */
Function.prototype.methodize  = function() { return new Function(); };

/**
 * <p>Partially applies the function, returning a function with one or more arguments already &#8220;filled in.&#8221;</p></div>
 * <p><code>Function#curry</code> works just like <a href="/api/function/bind"><code>Function#bind</code></a> without the initial scope argument.</p>
 * 
 * @param arg
 * @return function
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * String.prototype.splitOnSpaces = String.prototype.split.curry(" ");
 * "foo bar baz thud".splitOnSpaces(); //-> ["foo", "bar", "baz", "thud"]
 * </code></pre></div>
 * 
 * @since 1.6.0
 * 
 */
Function.prototype.curry  = function(arg) { return new Function(); };

/**
 * <p>Returns a function &#8220;wrapped&#8221; around the original function.</p></div>
 * <p><code>Function#wrap</code> distills the essence of <a href="http://en.wikipedia.org/wiki/Aspect-oriented_programming &#8220;Aspect-oriented programming - Wikipedia, the free encyclopedia&#8221;">aspect-oriented programming</a> into a single method, letting you easily build on existing functions by specifying before and after behavior, transforming the return value, or even preventing the original function from being called.</p>
 * 
 * @param wrapperFunction
 * @param arg..., argument is optional
 * @return Function
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * String.prototype.capitalize = String.prototype.capitalize.wrap( 
 *   function(proceed, eachWord) { 
 *     if (eachWord && this.include(" ")) {
 *       // capitalize each word in the string
 *       return this.split(" ").invoke("capitalize").join(" ");
 *     } else {
 *       // proceed using the original function
 *       return proceed(); 
 *     }
 *   }); 
 * "hello world".capitalize()     // "Hello world" 
 * "hello world".capitalize(true) // "Hello World"
 * </code></pre></div>
 * 
 * @since 1.6.0
 * 
 */
Function.prototype.wrap  = function(wrapperFunction, arg) { return new Function(); };

/**
 * <p>Schedules the function to run as soon as the interpreter is idle.</p></div>
 * <p>A &#8220;deferred&#8221; function will not run immediately; rather, it will run as soon as the interpreter&#8217;s call stack is empty.</p>
 * <p>Behaves much like <a href="http://developer.mozilla.org/en/docs/DOM:window.setTimeout"><code>window.setTimeout</code></a> with a delay set to <code>0</code>. Returns an ID that can be used to clear the timeout with <a href="http://developer.mozilla.org/en/docs/DOM:window.clearTimeout"><code>window.clearTimeout</code></a> before it runs.</p>
 * 
 * @param arg...
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * function hideNewElement() {
 *   $('inserted').hide();
 * };
 * function insertThenHide(markup) {
 *   $('container').insert(markup);
 *   // IE needs a moment to add the new markup
 *   // to the DOM tree
 *   hideNewElement.defer();
 * }
 * insertThenHide("&lt;div id='inserted'&gt;Lorem ipsum&lt;/div&gt;");  
 * </code></pre></div>
 * 
 * @since 1.6.0
 * 
 */
Function.prototype.defer  = function(arg) { return 0; };

/**
 * <p>An event-specific variant of <a href="/api/function/bind"><code>bind</code></a> which makes sure the function will recieve the current event object as the first argument when executing.</p></div>
 * <p>If you&#8217;re unclear on what &#8220;binding&#8221; is, check out <code>Function</code>&#8217;s <a href="/api/function">API page</a>.  If you don&#8217;t quite understand what <a href="/api/function/bind"><code>bind()</code></a> does, check out its specific article.</p>
 * <p>When you&#8217;re creating methods that you want to use as event handlers, you need to get the current event somehow, as well as control the <em>context</em> in which the method will run. <code>bindAsEventListener</code> takes care of both, as it binds the handler to the specified context (<code>thisObj</code>) and makes sure the event object gets passed to the handler when the event actually occurs.</p>
 * <p>This method also works around the problem in MSIE when using DOM level 0 style of event handling and the event object <em>isn&#8217;t</em> passed as the first argument, but has to be read from <code>window.event</code> instead. You can forget about that with this method as you don&#8217;t have to do it manually.</p>
 * <p>You typically use this method in conjunction with <a href="/api/event/observe"><code>Event.observe</code></a>, and anywhere you need to pass a method as an event listener.</p>
 * 
 * @param thisObj
 * @param arg..., argument is optional
 * @return Function
 * 
 * <h3>Example</h3>
 * <p>Here is a consolidated example:</p>
 * <pre><code class="javascript">
 * var obj = { name: 'A nice demo' };
 * function handler(e) {
 *   var tag = Event.element(e).tagName.toLowerCase();
 *   var data = $A(arguments);
 *   data.shift();
 *   alert(this.name + '\nClick on a ' + tag + '\nOther args: ' + data.join(', '));
 * }
 * Event.observe(document.body, 'click', handler.bindAsEventListener(obj, 1, 2, 3));
 * // Now any click on the page displays obj.name, the lower-cased tag name
 * // of the clicked element, and "1, 2, 3".
 * </code></pre></div>
 * 
 */
Function.prototype.bindAsEventListener  = function(thisObj, arg) { return new Function(); };

/**
 * <p>Wraps the function in another, locking its execution scope to an object specified by <code>thisObj</code>.</p></div>
 * <p>As discussed on the <a href="/api/function">general <code>Function</code> page</a>, binding can be a pretty tricky thing for a newcomer, but it generally is a very simple concept. It requires the basic understanding of the JavaScript language.</p>
 * <p>In JavaScript, functions are executed in a specific context (often referred to as &#8220;scope&#8221;). <strong>Inside the function the <code>this</code> keyword becomes a reference to that scope.</strong> Since every function is in fact a property of some object&#8212;global functions are properties of the <code>window</code> object&#8212;the execution scope is the object from which the function was called, or (more precisely) the object that holds a reference to the function:</p>
 * <pre><code class="javascript">
 * window.name = "the window object"
 * function scopeTest() {
 *   return this.name
 * }
 * // calling the function in global scope:
 * scopeTest()
 * // -> "the window object"
 * var foo = {
 *   name: "the foo object!",
 *   otherScopeTest: function() { return this.name }
 * }
 * foo.otherScopeTest()
 * // -> "the foo object!"
 * </code></pre>
 * <p>Because of the dynamic nature of the language, we can&#8217;t be sure that, for instance, <code>otherScopeTest()</code> will always be called on our <code>foo</code> object. The reference to it can be copied somewhere else, like on the <code>window</code> object:</p>
 * <pre><code class="javascript">
 * // ... continuing from the last example
 * // note that we aren't calling the function, we're simply referencing it
 * window.test = foo.otherScopeTest
 * // now we are actually calling it:
 * test()
 * // -> "the window object"
 * </code></pre>
 * <p>The last call demonstrates how the same function can behave differently depending on its execution scope.</p>
 * <p>When you begin passing around function references in your code, you often want them to become fixated on a specific scope. Prototype can guarantee that your function will execute with the object you want under the <code>this</code> keyword just by invoking <code>bind</code> on it. You can also save the returned function and use it multiple times if you need so.</p>
 * 
 * @param thisObj
 * @param arg..., argument is optional
 * @return Function
 * 
 * <h3>Examples</h3>
 * <p>The code below is simply proof-of-concept:</p>
 * <pre><code class="javascript">
 * var obj = {
 *   name: 'A nice demo',
 *   fx: function() {
 *     alert(this.name);
 *   }
 * };
 * window.name = 'I am such a beautiful window!';
 * function runFx(f) {
 *   f();
 * }
 * var fx2 = obj.fx.bind(obj);
 * runFx(obj.fx);
 * runFx(fx2);
 * </code></pre>
 * <form style="margin: 1em 0;">
 *   <input type="button" id="btnBindDemo" value="Try it out!"/>
 * </form>
 * <script type="text/javascript">
 * var obj = {
 *   name: 'A nice demo',
 *   fx: function() {
 *     alert(this.name);
 *   }
 * };
 * function runFx(f) {
 *   f();
 * }
 * var fx2 = obj.fx.bind(obj);
 * Event.observe('btnBindDemo', 'click', function() {
 *   var oldName = window.name;
 *   window.name = 'I am such a beautiful window!';
 *   runFx(obj.fx);
 *   runFx(fx2);
 *   window.name = oldName;
 * });
 * </script>
 * <p>Now, what few people realize is, <code>bind</code> can also be used to prepend arguments to the final argument list:</p>
 * <pre><code class="javascript">
 * var obj = {
 *   name: 'A nice demo',
 *   fx: function() {
 *     alert(this.name + '\n' + $A(arguments).join(', '));
 *   }
 * };
 * var fx2 = obj.fx.bind(obj, 1, 2, 3);
 * fx2(4, 5); // Alerts the proper name, then "1, 2, 3, 4, 5"
 * </code></pre>
 * <form style="margin: 1em 0;">
 *   <input type="button" id="btnBindArgsDemo" value="Try it out!"/>
 * </form>
 * <script type="text/javascript">
 * var obj2 = {
 *   name: 'A nice demo',
 *   fx: function() {
 *     alert(this.name + '\n' + $A(arguments).join(', '));
 *   }
 * };
 * var fx3 = obj2.fx.bind(obj2, 1, 2, 3);
 * Event.observe('btnBindArgsDemo', 'click', function() {
 *   var oldName = window.name;
 *   window.name = 'I am such a beautiful window!';
 *   fx3(4, 5);
 *   window.name = oldName;
 * });
 * </script>
 * <h3>Not yet clear enough?</h3>
 * <p>OK, try <a href="http://www.encytemedia.com/blog/articles/2007/7/18/javascript-scope-and-binding">Justin&#8217;s sweet article explaining function binding</a>.</p></div>
 * 
 */
Function.prototype.bind  = function(thisObj, arg) { return new Function(); };

/**
 * <p>Schedules the function to run after the specified amount of time, passing any arguments given.</p></div>
 * <p>Behaves much like <a href="http://developer.mozilla.org/en/docs/DOM:window.setTimeout"><code>window.setTimeout</code></a>. Returns an ID that can be used to clear the timeout with <a href="http://developer.mozilla.org/en/docs/DOM:window.clearTimeout"><code>window.clearTimeout</code></a> before it runs.</p>
 * <p>To schedule a function to run as soon as the interpreter is idle, use <a href="/api/function/defer"><code>Function#defer</code></a>.</p>
 * 
 * @param seconds
 * @param arg..., argument is optional
 * @return Number
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * // before:
 * window.setTimeout(function() {
 *  Element.addClassName('foo', 'bar'); }, 1000);
 * // after:
 * Element.addClassName.delay(1, 'foo', 'bar');
 * // clearing a timeout
 * var id = Element.hide.delay(5, 'foo');
 * window.clearTimeout(id);
 * </code></pre></div>
 * 
 * @since 1.6.0
 * 
 */
Function.prototype.delay  = function(seconds, arg) { return 0; };

/**
 * <p>Converts the date into a JSON string (following the ISO format used by JSON).</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * new Date(1969, 11, 31, 19).toJSON();
 * //-> '"1969-12-31T19:00:00"'
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @return String
 */
Date.prototype.toJSON  = function() { return ""; };

/**
 * <p>Applies the template to the given <code>object</code>&#8217;s data, producing a formatted string with symbols replaced by corresponding <code>object</code>&#8217;s properties.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var hrefTemplate = new Template('/dir/showAll?lang=#{language}&amp;categ=#{category}&amp;lv=#{levels}');
 * var selection = {category: 'books' , language: 'en-US'};
 * hrefTemplate.evaluate(selection);
 * // -> '/dir/showAll?lang=en-US&amp;categ=books&amp;lv='
 * hrefTemplate.evaluate({language: 'jp', levels: 3, created: '10/12/2005'});
 * // -> '/dir/showAll?lang=jp&amp;categ=&amp;lv=3'
 * hrefTemplate.evaluate({});
 * // -> '/dir/showAll?lang=&amp;categ=&amp;lv='
 * hrefTemplate.evaluate(null);
 * // -> error !
 * </code></pre> </div>
 * 
 * @param object
 * @return String
 */
Template.prototype.evaluate  = function(object) { return ""; };

/**
 * <p>This details all core options (shared by all AJAX requesters) and callbacks.</p>
 * <p>All requester object in the <code>Ajax</code> namespace share a common set of <strong>options</strong> and <strong>callbacks</strong>.  Callbacks are called at various points in the life-cycle of a request, and always feature the same list of arguments. They are passed to requesters right along with their other options.</p>
 * <h3>Common options</h3>
 * <table class="data" cellspacing="0" cellpadding="0">
 * <thead>
 *   <tr>
 *     <th>Option</th>
 *     <th>Default</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <th><code>asynchronous</code></th>
 *     <td><code>true</code></td>
 *     <td>Determines whether <code>XMLHttpRequest</code> is used asynchronously or not.  Since synchronous usage is rather unsettling, and usually bad taste, you should avoid changing this.  Seriously.</td>
 *   </tr>
 *   <tr>
 *     <th><code>contentType</code></th>
 *     <td><code>'application/x-www-form-urlencoded'</code></td>
 *     <td>The <code>Content-Type</code> header for your request.  You might want to send XML instead of the regular URL-encoded format, in which case you would have to change this.</td>
 *   </tr>
 *   <tr>
 *     <th><code>encoding</code></th>
 *     <td><code>'UTF-8'</code></td>
 *     <td>The encoding for your request contents.  It is best left as is, but should weird encoding issues arise, you may have to tweak it in accordance with other encoding-related parts of your page code and server side.</td>
 *   </tr>
 *   <tr>
 *     <th><code>method</code></th>
 *     <td><code>'post'</code></td>
 *     <td>The HTTP method to use for the request.  The other widespread possibility is <code>'get'</code>.  As a Ruby On Rails special, Prototype also reacts to other verbs (such as <code>'put'</code> and <code>'delete'</code> by actually using <code>'post'</code> and putting an extra <code>'_method'</code> parameter with the originally requested method in there.</td>
 *   </tr>
 *   <tr>
 *     <th><code>parameters</code></th>
 *     <td><code>''</code></td>
 *     <td>The parameters for the request, which will be encoded into the URL for a <code>'get'</code> method, or into the request body for the other methods.  This can be provided either as a URL-encoded string or as any <a href="/api/hash"><code>Hash</code></a>-compatible object (basically anything), with properties representing parameters.</td>
 *   </tr>
 *   <tr>
 *     <th><code>postBody</code></th>
 *     <td>None</td>
 *     <td>Specific contents for the request body on a <code>'post'</code> method (actual method, after possible conversion as described in the <code>method</code> opt
 * ion above).  If it is not provided, the contents of the <code>parameters</code> option will be used instead.</td>
 *   </tr>
 *   <tr>
 *     <th><code>requestHeaders</code></th>
 *     <td>See text</td>
 *     <td>
 *       <p>Request headers can be passed under two forms:</p>
 *       <ul>
 *         <li>As an <strong>object</strong>, with properties representing headers.</li>
 *         <li>As an <strong>array</strong>, with even-index (0, 2&#8230;) elements being header names, and odd-index (1, 3&#8230;) elements being values.</li>
 *       </ul>
 *       <p>Prototype automatically provides a set of default headers, that this option can override and augment:</p>
 *       <ul>
 *         <li><strong><code>X-Requested-With</code></strong> is set to <code>'XMLHttpRequest'</code>.</li>
 *         <li><strong><code>X-Prototype-Version</code></strong> provides Prototype's current version (e.g. 1.5.0).</li>
 *         <li><strong><code>Accept</code></strong> defaults to <code>'text/javascript, text/html, application/xml, text/xml, *\/*'</code></li>
 *         <li><strong><code>Content-type</code></strong> is built based on the <code>contentType</code> and <code>encoding</code> options.</li>
 *       </ul>
 *     </td>
 *   </tr>
 *   <tr>
 *     <th><code>evalJS</code></th>
 *     <td>true</td>
 *     <td>Automatically evals the content of <code>Ajax.Response#responseText</code> if the content-type returned by the server is one of the following: <code>application/ecmascript</code>,
 * <code>application/javascript</code>,
 * <code>application/x-ecmascript</code>,
 * <code>application/x-javascript</code>,
 * <code>text/ecmascript</code>,
 * <code>text/javascript</code>,
 * <code>text/x-ecmascript</code>, or 
 * <code>text/x-javascript</code> <em>and</em> the request obeys <a href="http://en.wikipedia.org/wiki/Same_origin_policy"><abbr title="Same Origin Policy">SOP</abbr></a>. If you need to force evalutation, pass <code>'force'</code>. To prevent it altogether, pass <code>false</code>.</td>
 *   </tr>
 *   <tr>
 *     <th><code>evalJSON</code></th>
 *     <td>true</td>
 *     <td>Automatically evals the content of <code>Ajax.Response#responseText</code> and populates <code>Ajax.Response#responseJSON</code> with it if the content-type returned by the server is set to <code>application/json</code>. If the request doesn't obey <a href="http://en.wikipedia.org/wiki/Same_origin_policy"><abbr title="Same Origin Policy">SOP</abbr></a>, the content is sanitized before evaluation. If you need to force evalutation, pass <code>'force'</code>. To prevent it altogether, pass <code>false</code>.</td>
 *   </tr>
 *   <tr>
 *     <th><code>sanitizeJSON</code></th>
 *     <td><code>false</code> for local requests, <code>true</code> otherwise.</td>
 *     <td>Sanitizes the content of <code>Ajax.Response#responseText</code> before evaluating it.</td>
 *   </tr>
 * </tbody>
 * </table>
 * <h3>Common callbacks</h3>
 * <p>When used on individual instances, all callbacks (except <code>onException</code>) are invoked with two parameters: the <code>XMLHttpRequest</code> object and the result of evaluating the <code>X-JSON</code> response header, if any (can be <code>null</code>).</p>
 * <p>For another way of describing their chronological order and which callbacks are mutually exclusive, see <a href="/api/ajax/request"><code>Ajax.Request</code></a>.</p>
 * <table class="data" cellspacing="0" cellpadding="0">
 * <thead>
 *   <tr>
 *     <th>Callback</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <th><code>onCreate</code><br /><span style="color:gray;font-size:90%">(v1.5.1)</span></th>
 *     <td>Triggered when the <code>Ajax.Request</code> object is initialized. This is <em>after</em> the parameters and the URL have been processed, but <em>before</em> first using the methods of the XHR object.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onComplete</code></th>
 *     <td>Triggered at the very end of a request's life-cycle, once the request completed, status-specific callbacks were called, and possible automatic behaviors were processed.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onException</code></th>
 *     <td>Triggered whenever an XHR error arises.  Has a custom signature: the first argument is the requester (i.e. an <code>Ajax.Request</code> instance), the second is the exception object.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onFailure</code></th>
 *     <td>Invoked when a request completes and its status code exists but is not in the 2xy family.  This is skipped if a code-specific callback is defined, and happens <em>before</em> <code>onComplete</code>.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onInteractive</code></th>
 *     <td>(Not guaranteed) Triggered whenever the requester receives a part of the response (but not the final part), should it be sent in several packets.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onLoaded</code></th>
 *     <td>(Not guaranteed) Triggered once the underlying XHR object is setup, the connection open, and ready to send its actual request.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onLoading</code></th>
 *     <td>(Not guaranteed) Triggered when the underlying XHR object is being setup, and its connection opened.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onSuccess</code></th>
 *     <td>Invoked when a request completes and its status code is undefined or belongs in the 2xy family.  This is skipped if a code-specific callback is defined, and happens <em>before</em> <code>onComplete</code>.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onUninitialized</code></th>
 *     <td>(Not guaranteed) Invoked when the XHR object was just created.</td>
 *   </tr>
 *   <tr>
 *     <th><code>on</code><em>XYZ</em></th>
 *     <td>With <em>XYZ</em> being an HTTP status code for the response.  Invoked when the response just completed, and the status code is exactly the one we used in t
 * he callback name.  Prevents execution of <code>onSuccess</code> / <code>onFailure</code>.  Happens <em>before</em> <code>onComplete</code>.</td>
 *   </tr>
 * </tbody>
 * </table>
 * <h3>Responder callbacks</h3>
 * <p>When used on responders, all callbacks (except <code>onException</code> and <code>onCreate</code>) are invoked with three parameters: the requester (i.e. the corresponding "instance" of <code>Ajax.Request</code>) object, the <code>XMLHttpRequest</code> object and the result of evaluating the <code>X-JSON</code> response header, if any (can be <code>null</code>).  They also execute in the context of the responder, bound to the <strong><code>this</code></strong> reference.</p>
 * <table class="data" cellspacing="0" cellpadding="0">
 * <thead>
 *   <tr>
 *     <th>Callback</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <th><code>onCreate</code></th>
 *     <td>Triggered whenever a requester object from the <code>Ajax</code> namespace is created, after its parameters where adjusted and its before its XHR connection is opened.  This takes two arguments: the requester object and the underlying XHR object.<td>
 *   </tr>
 *   <tr>
 *     <th><code>onComplete</code></th>
 *     <td>Triggered at the very end of a request's life-cycle, once the request completed, status-specific callbacks were called, and possible automatic behaviors were processed.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onException</code></th>
 *     <td>Triggered whenever an XHR error arises.  Has a custom signature: the first argument is the requester (i.e. an <code>Ajax.Request</code> instance), the second is the exception object.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onInteractive</code></th>
 *     <td>(Not guaranteed) Triggered whenever the requester receives a part of the response (but not the final part), should it be sent in several packets.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onLoaded</code></th>
 *     <td>(Not guaranteed) Triggered once the underlying XHR object is setup, the connection open, and ready to send its actual request.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onLoading</code></th>
 *     <td>(Not guaranteed) Triggered when the underlying XHR object is being setup, and its connection opened.</td>
 *   </tr>
 *   <tr>
 *     <th><code>onUninitialized</code></th>
 *     <td>(Not guaranteed) Invoked when the XHR object was just created.</td>
 *   </tr>
 * </tbody>
 * </table></div>
 * 
 */
Ajax  = function() { return new Ajax(); };

/**
 * <p>Performs an AJAX request and updates a container&#8217;s contents based on the response text.</p></div>
 * <p><code>Ajax.Updater</code> is a specialization of <a href="/api/ajax/request"><code>Ajax.Request</code></a>: everything about the latter is true for the former.  If you&#8217;re unfamiliar with <code>Ajax.Request</code>, go read its documentation before going ahead with this one.</p>
 * <h3>A simple example</h3>
 * <pre><code class="javascript">
 * new Ajax.Updater('items', '/items', {
 *   parameters: { text: $F('text') }
 * });
 * </code></pre>
 * <h3>A note about timing</h3>
 * <p>The <code>onComplete</code> callback will get invoked <strong>after</strong> the update takes place.</p>
 * <h3>Additional options</h3>
 * <p>Since the goal of <code>Ajax.Updater</code> is specifically to update the contents of a DOM element (<code>container</code>) with the response text brought back by the AJAX request, it features a couple of new options, in addition to <a href="/api/ajax/options">the common options set</a>.  These are:</p>
 * <table>
 * <thead>
 *   <tr>
 *     <th>Option</th>
 *     <th>Default</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <th><code>evalScripts</code></th>
 *     <td><code>false</code></td>
 *     <td>This determines whether <code>&lt;script&gt;</code> elements in the response text are evaluated or not.</td>
 *   </tr>
 *   <tr>
 *     <th><code>insertion</code></th>
 *     <td>None</td>
 *     <td>By default, <a href="/api/element/methods/update"><code>Element.update</code></a> is used, which replaces the whole contents of the container with the response text.  You may want to instead insert the response text around existing contents.  Prior to version 1.6.0, you just needed to pass a valid <a href="/api/insertion"><code>Insertion</code></a> object for this, such as <a href="/api/insertion/bottom"><code>Insertion.Bottom</code></a>. As of Prototype 1.6.0, this notation is deprecated. Simply pass either <code>'top'</code>, <code>'bottom'</code>, <code>'before'</code> or <code>'after'</code> as a string instead.</td>
 *   </tr>
 * </tbody>
 * </table>
 * <p>In the following example, we assume that creating a new item through AJAX returns an XHTML fragment representing only the new item, which we need to add within our list container, but at the bottom of its existing contents.  Here it goes:</p>
 * <pre><code class="javascript">
 * new Ajax.Updater('items', '/items', {
 *   parameters: { text: $F('text') },
 *   insertion: Insertion.Bottom
 * });
 * </code></pre>
 * <h3>About <code>evalScripts</code> and defining functions</h3>
 * <p>If you use <code>evalScripts: true</code>, any <code>&lt;script&gt;</code> block will be evaluated.  This <strong>does not</strong> mean it will get included in the page: they won't. Their content will simply be passed to the native <code>eval()</code> function.  There are two consequences to this:</p>
 * <ul>
 * <li>The local scope will be that of Prototype's internal processing function.  Anything in your script declared with <em><code>var</code></em> will be discarded momentarily after evaluation, and at any rate will be invisible to the remainder of the page scripts.</li>
 * <li>If you define functions in there, you need to actually <strong>create</strong> them, otherwise they won't be accessible to the remainder of the page scripts.  That is, the following code won't work:</li>
 * </ul>
 * <pre><code class="javascript">
 * // This kind of script won't work if processed by Ajax.Updater:
 * function coolFunc() {
 *   // Amazing stuff!
 * }
 * </code></pre>
 * <p>You will need to use the following syntax:</p>
 * <pre><code class="javascript">
 * // This kind of script WILL work if processed by Ajax.Updater:
 * coolFunc = function() {
 *   // Amazing stuff!
 * }
 * </code></pre>
 * <p>That&#8217;s a common trickster, biting beginners in the ankle. So watch out!</p>
 * <h3>Single container, or success/failure alternative?</h3>
 * <p>The examples above all assume you&#8217;re going to update the same container whether your request succeeds or fails.  There may very well be times when you don&#8217;t want that.  You may want to update only for successful requests, or update a different container on failed requests.</p>
 * <p>To achieve this, you can pass an object instead of a DOM element for the <code>container</code> parameter.  This object <strong>must</strong> exhibit a <code>success</code> property, whose value is 
 * the container to be updated upon successful requests.  If you also provide it with a <code>failure</code> property, its value will be used as the container for failed requests.</p>
 * <p>In the following code, only successful requests get an update:</p>
 * <pre><code class="javascript">
 * new Ajax.Updater({ success: 'items' }, '/items', {
 *   parameters: { text: $F('text') },
 *   insertion: Insertion.Bottom
 * });
 * </code></pre>
 * <p>The next example assumes failed requests will feature an error message as response text, and will go on to update another element with it, probably a status zone.</p>
 * <pre><code class="javascript">
 * new Ajax.Updater({ success: 'items', failure: 'notice' }, '/items', {
 *   parameters: { text: $F('text') },
 *   insertion: Insertion.Bottom
 * });
 * </code></pre></div>
 * 
 * @param container
 * @param url
 * @param options, argument is optional
 */
Ajax.Updater  = function(container, url, options) { };
new Ajax.Updater();

/**
 * Ajax.Responders.unregister(responder)</code></pre>
 * <p>A repository of global listeners notified about every step of Prototype-based AJAX requests.</p></div>
 * <p>Sometimes, you need to provide generic behaviors over all AJAX operations happening in the page (through <a href="/api/ajax/request"><code>Ajax.Request</code></a>, <a href="/api/ajax/updater"><code>Ajax.Updater</code></a> or <a href="/api/ajax/periodicalUpdater"><code>Ajax.PeriodicalUpdater</code></a>).</p>
 * <p>For instance, you might want to automatically show an indicator when an AJAX request is ongoing, and hide it when none are.  You may well want to factor out exception handling as well, logging those somewhere on the page in a custom fashion.  The possibilities are plenty.</p>
 * <p>To achieve this, Prototype provides <code>Ajax.Responders</code>, which lets you register (and if you wish to, unregister later) <strong>responders</strong>, which are objects with properly-named methods.  These names are the regular callback names, and your responders can implement any set of interest.</p>
 * <p>For instance, Prototype automatically registers a responder that maintains a nifty variable: <code>Ajax.activeRequestCount</code>.  This contains, at any time, the amount of currently active AJAX requests (those created by Prototype, anyway), by monitoring their <code>onCreate</code> and <code>onComplete</code> events.  The code for this is fairly simple:</p>
 * <pre><code class="javascript">
 * Ajax.Responders.register({
 *   onCreate: function() {
 *     Ajax.activeRequestCount++;
 *   },
 *   onComplete: function() {
 *     Ajax.activeRequestCount--;
 *   }
 * });
 * </code></pre>
 * <p><a href="/api/ajax/options">All callbacks</a> in the life-cycle are available; actually, <code>onCreate</code> is only available to responders, as it wouldn&#8217;t make a lot of sense to individual requests: you do know when your code creates them, don&#8217;t you?  It is triggered even before the XHR connection is opened, which makes it happen right before <code>onUninitialized</code>.</p>
 * <h3>Unregister: remember the reference&#8230;</h3>
 * <p>As always, unregistering something requires you to use the very same object you used at registration.  So if you plan on unregistering a responder, be sure to define it first, then pass the reference to <code>register</code>, and finally, when the time comes, to <code>unregister</code>.</p></div>
 * 
 * @param responder)
 */
Ajax.Responders  = { register : function() {} };

/**
 * <p>The object passed as the first argument of all Ajax requests callbacks.</p>
 * <p>This is a wrapper around the native <code>xmlHttpRequest</code> object (or it&#8217;s <code>ActiveX</code> counterpart). It normalizes cross-browser issues while adding support for JSON via the <code>responseJSON</code> and <code>headerJSON</code> properties. </p>
 *     
 * @since 1.6
 * 
 */
Ajax.Response  = function() { };
new Ajax.Response();


/** <code>status</code>
* @return The HTTP status code sent by the server.
*/
Ajax.Response.prototype.status = 0;

/** <code>statusText</code>
* @return The HTTP status text sent by the server.
*/
Ajax.Response.prototype.statusText = "";

/** <code> readyState </code>
* @return The request&#8217;s current state. <code>0</code> corresponds to <code>"Uninitialized"</code>, <code>1</code> to <code>"Loading"</code>, <code>2</code> to <code>"Loaded"</code>, <code>3</code> to <code>"Interactive"</code> and <code>4</code> to <code>"Complete"</code>.
*/
Ajax.Response.prototype.readyState = 0;

/** <code>responseText</code>
* @return The text body of the response.
*/
Ajax.Response.prototype.responseText = "";

/** <code>responseXML</code>
* @return The XML body of the response if the content-type of the request is set to <code>application/xml</code>. <code>null</code> otherwise.
*/
Ajax.Response.prototype.responseXML = new Document();

/** <code>responseJSON</code>
* @return The JSON body of the response if the content-type of the request is set to <code>application/json</code>. <code>null</code> otherwise.
*/
Ajax.Response.prototype.responseJSON = {};

/** <code>headerJSON</code>
* @return Auto-evaluated content of the <code>X-JSON</code> header if present. <code>null</code> otherwise. This is useful to transfer <em>small</em> amounts of data.
*/
Ajax.Response.prototype.headerJSON = new Array();

/** <code>request</code>
* @return The request object itself (an instance of <code>Ajax.Request</code> or <code>Ajax.Updater</code>).
*/
Ajax.Response.prototype.request = {};

/** <code>transport</code>
* @return The native <code>xmlHttpRequest</code> object itself.
*/
Ajax.Response.prototype.transport = new XMLHttpRequest();

/** <code>getHeader(name)</code>
* @return Returns the value of the requested header if present. <code>null</code> otherwise. Does <em>not</em> throw errors on undefined headers like it&#8217;s native counterpart does.
*/
Ajax.Response.prototype.getHeader = function(name) { return ""; };

/**   <code>getAllHeaders()</code>
* @return Returns a string containing all headers separated by a line break. Does <em>not</em> throw errors if no headers are present like it&#8217;s native counterpart does.
*/
Ajax.Response.prototype.getAllHeaders = function() { return ""; };

/**  <code>getResponseHeader(name)</code>
* @return Returns the value of the requested header if present. Throws an error otherwise. This is just a wrapper around the <code>xmlHttpRequest</code> object&#8217;s native method. Prefer it&#8217;s shorter counterpart <code>getHeader</code>.
*/
Ajax.Response.prototype.getResponseHeader = function(name) { return ""; };

/**   <code>getAllResponseHeaders()</code>
* @return Returns a string containing all headers separated by a line break. Throws an error otherwise. This is just a wrapper around the <code>xmlHttpRequest</code> object&#8217;s native method. Prefer it&#8217;s shorter counterpart <code>getAllHeaders</code>.
*/
Ajax.Response.prototype.getAllResponseHeaders = function() { return ""; };


/**
 * <p>Initiates and processes an AJAX request.</p></div>
 * <p>This object is a general-purpose AJAX requester: it handles the life-cycle of the request, handles the boilerplate, and lets you plug in callback functions for your custom needs.</p>
 * <p>In the optional options hash, you usually provide a <code>onComplete</code> and/or <code>onSuccess</code> callback, unless you're in the edge case where you're getting a JavaScript-typed response, that will automatically be <code>eval</code>'d.</p>
 * <p>For a full list of common options and callbacks, see <a href="/api/ajax/options">Ajax Options</a>.</p>
 * <p>The only proper way to create a requester is through the <strong><code>new</code></strong> operator.  As soon as the object is created, it initiates the request, then goes on processing it throughout its life-cyle.</p>
 * <h3>A basic example</h3>
 * <pre><code class="javascript">
 * var url = '/proxy?url=' + encodeURIComponent('http://www.google.com/search?q=Prototype');
 * // notice the use of a proxy to circumvent the Same Origin Policy.
 * new Ajax.Request(url, {
 *   method: 'get',
 *   onSuccess: function(transport) {
 *     var notice = $('notice');
 *     if (transport.responseText.match(/href="http:\/\/prototypejs.org/))
 *       notice.update('Yeah! You are in the Top 10!').setStyle({ background: '#dfd' });
 *     else
 *       notice.update('Damn! You are beyond #10...').setStyle({ background: '#fdd' });
 *   }
 * });
 * </code></pre>
 * <h3>Request life-cycle</h3>
 * <p>Underneath our nice requester objects lies, of course, <code>XMLHttpRequest</code>.  The defined life-cycle is as follows:</p>
 * <ol>
 * <li>Created</li>
 * <li>Initialized</li>
 * <li>Request sent</li>
 * <li>Response being received (can occur many times, as packets come in)</li>
 * <li>Response received, request complete</li>
 * </ol>
 * <p>As you can see in <a href="/api/ajax/options">Ajax options</a>, Prototype's AJAX objects define a whole slew of callbacks, which are triggered in the following order:</p>
 * <ol>
 * <li><code>onCreate</code> (this is actually a callback reserved to <a href="/api/ajax/responders">AJAX global responders</a>)</li>
 * <li><code>onUninitialized</code> (maps on Created)</li>
 * <li><code>onLoading</code> (maps on Initialized)</li>
 * <li><code>onLoaded</code> (maps on Request sent)</li>
 * <li><code>onInteractive</code> (maps on Response being received)</li>
 * <li><code>on</code><em>XYZ</em> (numerical response status code), onSuccess or onFailure (see below)</li>
 * <li><code>onComplete</code></li>
 * </ol>
 * <p>The two last steps both map on <em>Response received</em>, in that order.  If a status-specific callback is defined, it gets invoked.  Otherwise, if <code>onSuccess</code> is defined and the response is deemed a success (see below), it is invoked.  Otherwise, if <code>onFailure</code> is defined and the response is <em>not</em> deemed a sucess, it is invoked.  Only after that potential first callback is <code>onComplete</code> called.</p>
 * <h4>A note on portability</h4>
 * <p>Depending on how your browser implements <code>XMLHttpRequest</code>, one or more callbacks may never be invoked.  In particular, <code>onLoaded</code> and <code>onInteractive</code> are not a 100% safe bet so far.  However, the global <code>onCreate</code>, <code>onUninitialized</code> and the two final steps are very much guaranteed.</p>
 * <h3><code>onSuccess</code> and <code>onFailure</code>, the under-used callbacks</h3>
 * <p>Way too many people use <code>Ajax.Request</code> in a similar manner to raw XHR, defining only an <code>onComplete</code> callback even when they're only interested in "successful" responses, thereby testing it by hand:</p>
 * <pre><code class="javascript">
 * // This is too bad, there's better!
 * new Ajax.Request('/your/url', {
 *   onComplete: function(transport) {
 *     if (200 == transport.status)
 *       // yada yada yada
 *   }
 * });
 * </code></pre>
 * <p>First, as described below, you could use better "success" detection: success is generally defined, HTTP-wise, as either no response status or a "2xy" response status (e.g., 201 is a success, too).  See the example below.</p>
 * <p>Second, you could dispense with status testing altogether!  Prototype adds callbacks specific to success and failure, which we listed above.  Here's what you could do if you're only interested in success, for instance:</p>
 * <pre><code class="javascript">
 * new Ajax.Request('/your/url', {
 *   onSuccess: function(transport) {
 *       // yada yada yada
 *   }
 * });
 * </code></pre>
 * <h3>Automatic JavaScript response evaluation</h3>
 * <p>If an ajax request follows the <a href="http://en.wikipedia.org/wiki/Same_origin_policy (or SOP">Same Origin Policy</a> <em>and</em> it's response has a JavaScript-related content-type, the content of the <code>responseText</code> property will automatically be passed to <code>eval</code> </p>
 * <p>What this means is, you don't even need to provide a callback to leverage pure-JavaScript AJAX responses.  That's pretty cool, wouldn't you say?  The list of JavaScript-related MIME types handled by Prototype is:</p>
 * <ul>
 * <li><code>application/ecmascript</code></li>
 * <li><code>application/javascript</code></li>
 * <li><code>application/x-ecmascript</code></li>
 * <li><code>application/x-javascript</code></li>
 * <li><code>text/ecmascript</code></li>
 * <li><code>text/javascript</code></li>
 * <li><code>text/x-ecmascript</code></li>
 * <li><code>text/x-javascript</code></li>
 * </ul>
 * <p>The MIME type string is examined in a case-insensitive manner.</p>
 * <h3>Methods you may find useful</h3>
 * <p>Instances of the Request object provide several methods that can come in handy in your callback functions, especially once the request completed.</p>
 * <h4>Is the response a successful one?</h4>
 * <p>The <code>success()</code> method examines the XHR's <code>status</code> property, and follows general HTTP guidelines: unknown status is deemed successful, as is the whole 2xy status code family.  It's a generally better way of testing your response than the usual <code>200 == transport.status</code>.</p>
 * <h4>Getting HTTP response headers</h4>
 * <p>While you can obtain response headers from the XHR object, using its <code>getResponseHeader</code> method, this makes for slightly verbose code, and several implementations may raise an exception when the header is not found. To make this easier, you can use the <code>Ajax.Response#getHeader</code> method, which just delegates to the longer version and returns <code>null</code> should an exception occur:</p>
 * <pre><code class="javascript">
 * new Ajax.Request('/your/url', {
 *   onSuccess: function(response) {
 *     // Note how we brace against null values
 *     if ((response.getHeader('Server') || '').match(/Apache/))
 *       ++gApacheCount;
 *     // Remainder of the code
 *   }
 * });
 * </code></pre>
 * <h4>Evaluating JSON headers</h4>
 * <p>Some backends will return JSON not as response text, but in the <code>X-JSON</code> header. In which case, you don't even need to evaluate the returned JSON yourself, as Prototype automatically does so and passes it as the <code>headerJSON</code> property of the <code>Ajax.Response</code> object. Note that if there is no such header or its contents is invalid, this property will be set to <code>null</code>.</p>
 * <pre><code class="javascript">
 * new Ajax.Request('/your/url', {
 *   onSuccess: function(transport) {
 *     transport.headerJSON
 *   }
 * });
 * </code></pre></div>
 * 
 * @param url
 * @param options, argument is optional
 */
Ajax.Request  = function(url, options) {};
new Ajax.Request();

/**
 * <p>Periodically performs an AJAX request and updates a container&#8217;s contents based on the response text.  Offers a mechanism for &#8220;decay,&#8221; which lets it trigger at widening intervals while the response is unchanged.</p></div>
 * <p>This object addresses the common need of periodical update, which is used by all sorts of &#8220;polling&#8221; mechanisms (e.g. in an online chatroom or an online mail client).</p>
 * <p>The basic idea is to run a regular <a href="/api/ajax/updater"><code>Ajax.Updater</code></a> at regular intervals, monitoring changes in the response text if the <code>decay</code> option (see below) is active.</p>
 * <h3>Additional options</h3>
 * <p><code>Ajax.PeriodicalUpdater</code> features all the <a href="/api/ajax/options">common options</a> and callbacks, plus those added by <a href="/api/ajax/updater"><code>Ajax.Updater</code></a>.  It also provides two new options that deal with the original period, and its decay rate (how Rocket Scientist does that make us sound, uh?!).</p>
 * <table>
 * <thead>
 *   <tr>
 *     <th>Option</th>
 *     <th>Default</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <th><code>frequency</code></th>
 *     <td><code>2</code></td>
 *     <td>Okay, this is not a frequency (e.g 0.5Hz), but a period (i.e. a number of seconds).  Don&#8217;t kill me, I didn&#8217;t write this one!  This is the minimum interval at which AJAX requests are made.  You don&#8217;t want to make it too short (otherwise you may very well end up with multiple requests in parallel, if they take longer to process and return), but you technically can provide a number below one, e.g. 0.75 second.</td>
 *   </tr>
 *   <tr>
 *     <th><code>decay</code></th>
 *     <td>1</td>
 *     <td>This controls the rate at which the request interval grows when the response is unchanged.  It is used as a multiplier on the current period (which starts at the original value of the <code>frequency</code> parameter).  Every time a request returns an unchanged response text, the current period is multiplied by the decay.  Therefore, the default value means regular requests (no change of interval).  Values higher than one will yield growing intervals.  Values below one are dangerous: the longer the response text stays the same, the more often you&#8217;ll check, until the interval is so short your browser is left with no other choice than suicide.  Note that, as soon as the response text <em>does</em> change, the current period resets to the original one.</td>
 *   </tr>
 * </tbody>
 * </table>
 * <p>To better understand decay, here is a small sequence of calls from the following example:</p>
 * <pre><code class="javascript">
 * new Ajax.PeriodicalUpdater('items', '/items', {
 *   method: 'get', frequency: 3, decay: 2
 * });
 * </code></pre>
 * <table id="decayTable">
 * <thead>
 *   <tr>
 *     <th>Call#</th>
 *     <th>When?</th>
 *     <th>Decay before</th>
 *     <th>Response changed?</th>
 *     <th>Decay after</th>
 *     <th>Next period</th>
 *     <th>Comments</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <td>1</td>
 *     <td>00:00</td>
 *     <td>2</td>
 *     <td>n/a</td>
 *     <td>1</td>
 *     <td>3</td>
 *     <td>Response is deemed changed, since there is no prior response to compare to!</td>
 *   </tr>
 *   <tr>
 *     <td>2</td>
 *     <td>00:03</td>
 *     <td>1</td>
 *     <td>yes</td>
 *     <td>1</td>
 *     <td>3</td>
 *     <td>Response did change again: we &#8220;reset&#8221; to 1, which was already the decay.</td>
 *   </tr>
 *   <tr>
 *     <td>3</td>
 *     <td>00:06</td>
 *     <td>1</td>
 *     <td>no</td>
 *     <td>2</td>
 *     <td>6</td>
 *     <td>Response didn&#8217;t change: decay augments by the <code>decay</code> option factor: we&#8217;re waiting longer now&#8230;</td>
 *   </tr>
 *   <tr>
 *     <td>4</td>
 *     <td>00:12</td>
 *     <td>2</td>
 *     <td>no</td>
 *     <td>4</td>
 *     <td>12</td>
 *     <td>Still no change, doubling again.</td>
 *   </tr>
 *   <tr>
 *     <td>5</td>
 *     <td>00:24</td>
 *     <td>4</td>
 *     <td>no</td>
 *     <td>8</td>
 *     <td>24</td>
 *     <td>Jesus, is this thing going to change or what?</td>
 *   </tr>
 *   <tr>
 *     <td>6</td>
 *     <td>00:48</td>
 *     <td>8</td>
 *     <td>yes</td>
 *     <td>1</td>
 *     <td>3</td>
 *     <td>Ah, finally!  Resetting decay to 1, and therefore using the original period.</td>
 *   </tr>
 * </tbody>
 * </table>
 * <h3>Disabling and re-enabling a <code>PeriodicalUpdater</code></h3>
 * <p>You can pull the brake on a running <code>PeriodicalUpdater</code> by simply calling its <code>stop</code> method.  If you wish to re-enable it later, just call its <code>start</code> method.  Both
 *  take no argument.</p>
 * <h3>Beware!  Not a specialization!</h3>
 * <p><code>Ajax.PeriodicalUpdater</code> is not a specialization of <a href="/api/ajax/updater"><code>Ajax.Updater</code></a>, despite its name.  When using it, do not expect to be able to use methods normally provided by <a href="/api/ajax/request"><code>Ajax.Request</code></a> and &#8220;inherited&#8221; by <code>Ajax.Updater</code>, such as <code>evalJSON</code> or <code>getHeader</code>.  Also the <code>onComplete</code> callback is hijacked to be used for update management, so if you wish to be notified of every successful request, use <code>onSuccess</code> instead (beware: it will get called <em>before</em> the update is performed).</p></div>
 * 
 * @param container
 * @param url
 * @param options, argument is optional
 */
Ajax.PeriodicalUpdater  = function(container, url, options) { };
new Ajax.PeriodicalUpdater();

/**
 * <p>Iterates over the name/value pairs in the hash.</p></div>
 * <p>This is actually the <a href="/api/enumerable/each"><code>each</code></a> method from the mixed-in <a href="/api/enumerable"><code>Enumerable</code></a> module.  It is documented here to illustrate the structure of the passed first argument, and the order of iteration.</p>
 * <p>Pairs are passed as the first argument of the iterator, in the form of objects with two properties:</p>
 * <ol>
 * <li><code>key</code>, which is the key name as a <code>String</code></li>
 * <li><code>value</code>, which is the corresponding value (and can, possibly, be <code>undefined</code>)</li>
 * </ol>
 * <p class="notice">The order of iteration is browser-dependent, as it relies on the native <code>for ... in</code> loop. Although most modern browsers exhibit <em>ordered</em> behavior, this may not always be the case, so don't count on it in your scripts.</p>
 * <p>It is possible to have function values in a hash, though the iteration skips over Hash and Enumerable methods (naturally). More precisely, it skips the properties found on the object's prototype.</p>
 * 
 * @param iterator
 * @return Hash
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">var h = $H({ version: 1.5, author: 'Sam Stephenson' });
 * h.each(function(pair) {
 *   alert(pair.key + ' = "' + pair.value + '"');
 * });
 * // Alerts, in non-guaranteed order: 'version = "1.5"' and 'author = "Sam Stephenson"'</code></pre></div>
 * 
 */
Hash.prototype.each  = function(iterator) { return new Hash(); };

/**
 * <p>Sets the hash&#8217;s <code>key</code> property to <code>value</code> and returns <code>value</code>.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var h = new Hash({ a: 'apple', b: 'banana', c: 'coconut' });
 * h.set('d', 'orange');
 * // -> 'orange'
 * h.inspect();
 * // -> #&lt;Hash:{'a': 'apple', 'b': 'banana', 'c': 'coconut', 'd': 'orange'}&gt;
 * h.set('a', 'kiwi');
 * // -> 'kiwi'
 * h.inspect();
 * // -> #&lt;Hash:{'a': 'kiwi', 'b': 'banana', 'c': 'coconut', 'd': 'orange'}&gt;
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param key
 * @param value
 * @return value
 */
Hash.prototype.set  = function(key, value) { return null; };

/**
 * <div class="box">1.6 modified</div>
 * <p>Turns a hash into its URL-encoded query string representation.</p></div>
 * <p>This is a form of serialization, and is mostly useful to provide complex parameter sets for stuff such as objects in the Ajax namespace (e.g. <a href="/api/ajax/request"><code>Ajax.Request</code></a>).</p>
 * <p>Undefined-value pairs will be serialized as if empty-valued.  Array-valued pairs will get serialized with one name/value pair per array element.  All values get URI-encoded using JavaScript's native <code>encodeURIComponent</code> function.</p>
 * <p>The order of pairs in the serialized form is not guaranteed (and mostly irrelevant anyway), except for array-based parts, which are serialized in array order.</p>
 * 
 * @return String
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">$H({ action: 'ship', order_id: 123, fees: ['f1', 'f2'], 'label': 'a demo' }).toQueryString()
 * // -> 'action=ship&order_id=123&fees=f1&fees=f2&label=a%20demo'
 * // an empty hash is an empty query string:
 * $H().toQueryString()
 * // -> ''</code></pre>
 * <p class="deprecated">Using <code>Hash.toQueryString(obj)</code> as a <strong>class method</strong> has been deprecated. Use it as an instance method only, or use <a href="/api/object/toquerystring"><code>Object.toQueryString</code></a> instead.</p></div>
 * 
 */
Hash.prototype.toQueryString  = function() { return ""; };

/**
 * <p>Returns a cloned, vanilla object.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var h = new Hash({ a: 'apple', b: 'banana', c: 'coconut' });
 * var obj = h.toObject();
 * Object.inspect(h);
 * // -> #&lt;Hash:{'a': 'kiwi', 'b': 'banana', 'c': 'coconut'}&gt;
 * Object.inspect(obj);
 * // -> [object Object]
 * obj.a = 'orange';
 * h.get('a');
 * // -> 'apple'
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @return Object
 */
Hash.prototype.toObject  = function() { return new Object(); };

/**
 * <p>Returns a clone of hash.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var h = new Hash({ a: 'apple'});
 * var clone = h.clone();
 * h.unset('a');
 * h.inspect();
 * // -> #&lt;Hash:{}&gt;
 * clone.inspect();
 * // -> #&lt;Hash:{'a': 'apple'}&gt;
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @return newHash
 */
Hash.prototype.clone  = function() { return new Hash(); };

/**
 * <p>Provides an Array of keys (that is, property names) for the hash.</p></div>
 * <p>Note: the order of key names is browser-dependent (based on the <code>for</code>&#8230;<code>in</code> loop). Also, this currently skips any property whose value is a function (such as hash methods).</p>
 * 
 * @return [String...]
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $H({ name: 'Prototype', version: 1.5 }).keys().sort()
 * // -> ['name', 'version']
 * $H().keys()
 * // -> []
 * </code></pre></div>
 * 
 */
Hash.prototype.keys  = function() { return new Array(); };

/**
 * remove(key1, key2...) -> Array</code></pre>
 * <p>Removes keys from a hash and returns their values. <em>Not available since v1.6.0</em>.</p></div>
 * <div class="deprecated"><p>This method is not available since Prototype 1.6.0. Use <code>Hash#unset()</code> for removing a value from a Hash instance. For removing multiple values, use a loop:</p>
 * <pre><code>['foo', 'bar'].each(function(key) {
 *   hash.unset(key);
 * });
 * </code></pre>
 * </div>
 * 
 * @param key
 * @return value
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var h = new Hash({ a:'apple', b:'banana', c:'coconut' })
 * h.remove('a', 'c')
 * // -> ['apple', 'coconut']
 * h.values()
 * // -> ['banana']
 * </code></pre></div>
 * 
 * @deprecated
 * 
 */
Hash.prototype.remove  = function(key) { return null; };

/**
 * <p>Deletes the hash&#8217;s <code>key</code> property and returns its value.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var h = new Hash({ a: 'apple', b: 'banana', c: 'coconut' });
 * h.unset('a');
 * // -> 'apple'
 * h.inspect();
 * // -> #&lt;Hash:{'b': 'banana', 'c': 'coconut'}&gt;
 * h.unset('d');
 * // -> undefined
 * h.inspect();
 * // -> #&lt;Hash:{'b': 'banana', 'c': 'coconut'}&gt;
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param key
 * @return value
 */
Hash.prototype.unset  = function(key) { return null; };

/**
 * <p>Returns a JSON string.</p></div>
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * $H({name: 'Violet', occupation: 'character', age: 25 }).toJSON();
 * //-> '{"name": "Violet", "occupation": "character", "age": 25}'
 * </code></pre></div>
 * 
 * @since 1.5.1
 * 
 * @return String
 */
Hash.prototype.toJSON  = function() { return ""; };

/**
 * <div class="box">1.6 modified</div>
 * <p>Merges <code>object</code> to hash and returns the result of that merge.
 * <em>Prior to v1.6.0:</em> This was destructive (object's values were added to hash).
 * <em>Since v1.6.0:</em> This is no longer destructive (hash is cloned before the operation).</p></div>
 * <p>Duplicate keys will cause an overwrite.  This is useful for selectively overwriting values on specific keys (e.g. exerting some level of control over a series of options).</p>
 * <p>The argument can be a <code>Hash</code> or just a vanilla <code>Object</code>.</p>
 * 
 * @param object
 * @return newHash
 * 
 * <h3>Examples</h3>
 * <p>As of 1.6.0 <code>Hash#merge</code> returns a new hash:</p>
 * <pre><code class="javascript">
 * var h = $H({ name: 'Prototype', version: 1.5 });
 * h.merge({ version: 1.6, author: 'Sam' }).inspect();
 * // -> #&lt;Hash:{'name': 'Prototype', 'version': 1.6, 'author': 'Sam'}&gt;
 * h.inspect();
 * // -> #&lt;Hash:{'name': 'Prototype', 'version': 1.5}&gt;
 * </code></pre>
 * <p>Prior to 1.6.0 <code>Hash#merge</code> was destructive:</p>
 * <pre><code class="javascript">
 * var h = $H({ name: 'Prototype', version: 1.5 });
 * h.merge({ version: 1.6, author: 'Sam' }).inspect();
 * // -> #&lt;Hash:{'name': 'Prototype', 'version': 1.6, 'author': 'Sam'}&gt;
 * h.inspect();
 * // -> #&lt;Hash:{'name': 'Prototype', 'version': 1.6, 'author': 'Sam'}&gt;
 * </code></pre>
 * <h3>See also</h3>
 * <p>If you are using 1.6.0 or above and need a <em>destructive</em> merge, try <a href="update"><code>Hash#update</code></a>.</p></div>
 * 
 */
Hash.prototype.merge  = function(object) { return new Hash(); };

/**
 * <p>Returns the debug-oriented string representation of the hash.</p></div>
 * <p>For more information on <code>inspect</code> methods, see <a href="/api/object/inspect"><code>Object.inspect</code></a>.</p>
 * 
 * @return String
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">$H({ name: 'Prototype', version: 1.5 }).inspect()
 * // -> "<#Hash:{name: 'Prototype', version: 1.5}>"</code></pre>
 * <h3>Hashes and ordering</h3>
 * <p><em>Don&#8217;t</em> compare Hash instances by their string representation returned by this method. Although rarely the case, a <em>consistent order</em> of key-value pairs is <em>not guaranteed</em> in JavaScript.</p></div>
 * 
 */
Hash.prototype.inspect  = function() { return ""; };

/**
 * <p>Collect the values of a hash and returns them in an array.</p></div>
 * <p>The order of values is browser implementation-dependent (based on the <code>for</code>&#8230;<code>in</code> loop on keys), so&mdash;although most of the time you will see it as consistent&mdash;it&#8217;s better not to rely on a specific order. Also remember that the hash may contain values such as <code>null</code> or even <code>undefined</code>.</p>
 * 
 * @return Array
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * $H({ name: 'Prototype', version: 1.5 }).values().sort()
 * // -> [1.5, 'Prototype']
 * $H().values()
 * // -> []
 * </code></pre></div>
 * 
 */
Hash.prototype.values  = function() { return new Array(); };

/**
 * <p>Returns the value of the hash&#8217;s <code>key</code> property.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var h = new Hash({ a: 'apple', b: 'banana', c: 'coconut' });
 * h.get('a');
 * // -> 'apple'
 * h.get('d');
 * // -> undefined
 * </code></pre></div>
 * 
 * @since 1.6
 * 
 * @param key
 * @return value
 */
Hash.prototype.get  = function(key) { return null; };

/**
 * <p>Updates hash with the key/value pairs of <code>object</code>. The original hash will be modified.</p></div>
 * <p>Duplicate keys will cause an overwrite of hash&#8217;s keys.  This is useful for selectively overwriting values on specific keys (e.g. exerting some level of control over a series of options).</p>
 * <p>The argument can be a <code>Hash</code> or just a vanilla <code>Object</code>.</p>
 * 
 * @param object
 * @return Hash
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 * var h = $H({ name: 'Prototype', version: 1.5 });
 * h.update({ version: 1.6, author: 'Sam' }).inspect();
 * // -> #&lt;Hash:{'name': 'Prototype', 'version': 1.6, 'author': 'Sam'}&gt;
 * h.inspect();
 * // -> #&lt;Hash:{'name': 'Prototype', 'version': 1.6, 'author': 'Sam'}&gt;
 * </code></pre>
 * <h3>See also</h3>
 * <p>If you need a <em>non-destructive</em> merge, try <a href="merge"><code>Hash#merge</code></a>.</p></div>
 * 
 * @since 1.6
 * 
 */
Hash.prototype.update  = function(object) { return new Hash(); };

/**
 * <p>Returns <code>element</code>&#8217;s closest <em>positioned</em> ancestor. If none is found, the <code>body</code> element is returned.</p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/getOffsetParent"><code>Element#getoffsetparent </code></a></p>
 * <p>The returned element is <code>element</code>&#8217;s <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a>.</p></div>
 *         
 * @deprecated
 * 
 * @param element
 * @return HTMLElement
 */
Position.prototype.offsetParent  = function(element) { return new Element(); };

/**
 * <p>Returns a Number between <code>0</code> and <code>1</code> corresponding to the proportion to which <code>element</code> overlaps the point previously defined by <a href="/api/position/within">Position.within</a>. <code>mode</code> can be set to either <code>vertical</code> or <code>horizontal</code>.</p></div>
 * <p class="deprecated">Deprecated.</p>
 * <p>Imagine a block-level <code>element</code> (i.e., with dimensions) and a point <code>x, y</code> measured in pixels from the top left corner of the page.  Calling <a href="/api/position/within">Position.within</a> will indicate whether that point is within the area occupied by <code>element</code>.</p>
 * <p>Now imagine an element of equal dimensions to <code>element</code> with its top left corner at <code>x, y</code>.  <code>Position.overlap</code> indicates the amount these two boxes overlap in either the horizontal or vertical direction.</p>
 * <p><strong>Note that <a href="/api/position/within">Position.within</a> must be called right before calling this method.</strong></p>
 * 
 * @param mode
 * @param element
 * @return Number
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * var element = $('some_positioned_element');
 * Position.cumulativeOffset(element);
 * // -> [100, 100] (element is 100px from the top and left edges of the page)
 * element.getDimensions();
 * // -> { width: 150, height: 150 }
 * Position.within(element, 175, 145);
 * // -> true
 * Position.overlap('horizontal', element);
 * // -> 0.5 (point is halfway across the element's length)
 * Position.overlap('vertical', element);
 * // -> 0.3 (point is 3/10ths of the way across the element's height)
 * </code></pre></div>
 *
 * @deprecated
 * 
 */
Position.prototype.overlap  = function(mode, element) { return 0; };

/**
 * <p>Calculates document scroll offsets for use with <a href="/api/position/withinIncludingScrolloffsets">Position.withinIncludingScrolloffsets</a>.</p></div>
 * <p class="deprecated">Deprecated.</p></div>
 *         
 * @deprecated
 * 
 */
Position.prototype.prepare  = function() { };

/**
 * <p>Calculates the cumulative scroll offset of an element in nested scrolling containers.</p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/cumulativescrolloffset"><code>Element#cumulativeScrollOffset </code></a></p>
 * <p>Adds the cumulative <code>scrollLeft</code> and <code>scrollTop</code> of an element and all its parents.</p>
 * <p>Used for calculating the scroll offset of an element that is in more than one scroll container (e.g., a draggable in a scrolling container which is itself part of a scrolling document).</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 *         
 * @deprecated
 * 
 * @param element
 * @return [Number
 * @param Number]</code></pre>
 */
Position.prototype.realOffset  = function(element) { return [0, 0]; };

/**
 * <p>Clones the position and/or dimensions of <code>source</code> onto <code>target</code> as defined by the optional argument <code>options</code>. </p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/cloneposition"><code>Element#clonePosition</code></a></p>
 * <p>Note that <code>target</code> will be positioned exactly like <code>source</code> whether or not it is part of the same <a href="http://www.w3.org/TR/CSS21/visudet.html#containing-block-details">CSS containing block</a>.</p>
 * <h3>Options</h3>
 * <table>
 * <thead>
 *   <tr>
 *     <th>Name</th>
 *     <th>Default</th>
 *     <th>Description</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *   <td><code>setLeft</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>left</code> CSS property onto <code>target</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setTop</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>top</code> CSS property onto <code>target</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setWidth</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>width</code> onto <code>target</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>setHeight</code></td>
 *   <td><code>true</code></td>
 *   <td>clones <code>source</code>&#8217;s <code>width</code> onto <code>target</code>.</td>
 * </tr>
 * <tr>
 *   <td><code>offsetLeft</code></td>
 *   <td><code>0</code></td>
 *   <td>Number by which to offset <code>target</code>&#8217;s <code>left</code> CSS property.</td>
 * </tr>
 * <tr>
 *   <td><code>offsetTop</code></td>
 *   <td><code>0</code></td>
 *   <td>Number by which to offset <code>target</code>&#8217;s <code>top</code> CSS property.</td>
 * </tr>
 * </tbody>
 * </table></div>
 *         
 * @deprecated 
 * 
 * @param source
 * @param target
 * @param options, argument is optional
 * @return [Number, Number]
 */
Position.prototype.clone  = function(source, target, options) { return [0, 0]; };

/**
 * <p>Indicates whether the point <code>x, y</code> (measured from the top-left corner of the document) is within the boundaries of <code>element</code>.  Must be called immediately before <a href="/api/position/overlap">Position.overlap</a>.</p></div>
 * <p class="deprecated">Deprecated.</p>
 * <p>This function uses <code>Position.cumulativeOffset</code> to determine <code>element</code>&#8217;s offset from the top of the page, then combines those values with <code>element</code>&#8217;s height and width to identify the offsets of all four corners of the element.  It then compares these coordinates to the <code>x</code> and <code>y</code> arguments, returning <code>true</code> if those coordinates fall within the bounding box of <code>element</code>.</p>
 * 
 * @param element
 * @param x
 * @param y
 * @return Boolean
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">
 * var element = $('some_positioned_element');
 * Position.cumulativeOffset(element);
 * // -> [100, 100]  (item is 100px from the left and top edges of the page)
 * Element.getDimensions(element);
 * // -> { width: 150, height: 150 }
 * Position.within(element, 200, 200);
 * // -> true
 * Position.within(element, 260, 260);
 * // -> false
 * </code></pre></div>
 *
 * @deprecated
 * 
 */
Position.prototype.within  = function(element, x, y) { return false; };

/**
 * <p>Turns <code>element</code> into an absolutely-positioned element <em>without</em> changing its position in the page layout.</p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/absolutize"><code>Element#absolutize</code></a></p></div>
 *         
 * @deprecated
 * 
 * @param element
 */
Position.prototype.absolutize  = function(element) { };

/**
 * <p>Returns the X/Y coordinates of <code>element</code> relative to the <em>viewport</em>.</p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/viewportoffset"><code>Element#viewportOffset</code></a></p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 *         
 * @deprecated
 * 
 * @param element
 * @return [Number
 * @param Number]</code></pre>
 */
Position.prototype.page  = function(element) { return {top: 0, left: 0}; };

/**
 * <p>Indicates whether the point <code>x, y</code> (measured from the top-left corner of the document) is within the boundaries of <code>element</code>.  Used instead of <a href="/api/position/within">Position.within</a> whenever <code>element</code> is a child of a scrolling container. Must be called immediately before <a href="/api/position/overlap">Position.overlap</a> and immediately after <a href="/api/position/prepare">Position.prepare</a>.</p></div>
 * <p class="deprecated">Deprecated.</p>
 * <p>This method handles an edge case of <a href="/api/position/within"><code>Position.within</code></a>: when <code>element</code> is the child of a scrolling container.  (Scriptaculous, for instance, uses it whenever a Draggable&#8217;s container is scrollable.) For performance reasons, this method should not be used unless you need this specific edge case.</p>
 * <p>You <em>must</em> call <a href="/api/position/prepare"><code>Position.prepare</code></a> first, since it calculates offsets that are used by this method.</p></div>
 *         
 * @deprecated
 * 
 * @param element
 * @param x
 * @param y
 * @return Boolean
 */
Position.prototype.withinIncludingScrolloffsets  = function(element, x, y) { return false; };

/**
 * <p>Returns the offsets of <code>element</code> from the top left corner of the document.</p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/cumulativeoffset"><code>Element#cumulativeOffset </code></a></p>
 * <p>Adds the cumulative <code>offsetLeft</code> and <code>offsetTop</code> of an element and all its parents.</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 *         
 * @deprecated
 * 
 * @param element
 * @return [Number
 * @param Number]</code></pre>
 */
Position.prototype.cumulativeOffset  = function(element) { return {left: 0, top: 0}; };

/**
 * <p>Turns <code>element</code> into an relatively-positioned element <em>without</em> changing its position in the page layout.</p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/relativize"><code>Element#relativize</code></a></p></div>
 *         
 * @deprecated
 * 
 * @param element
 */
Position.prototype.relativize  = function(element) { };

/**
 * <p>Calculates the element&#8217;s offset relative to its closest positioned ancestor (i.e., the element that would be returned by <a href="/api/position/offsetParent">Position.offsetParent(element)</a>.</p></div>
 * <p class="deprecated">Deprecated in favor of <a href="/api/element/positionedoffset"><code>Element#positionedOffset </code></a></p>
 * <p>Calculates the cumulative <code>offsetLeft</code> and <code>offsetTop</code> of an element and all its parents <em>until</em> it reaches an element with a position other than <code>static</code>.</p>
 * <p>Note that all values are returned as <em>numbers only</em> although they are <em>expressed in pixels</em>.</p></div>
 *         
 *  @deprecated
 * 
 * @param element
 * @return [Number
 * @param Number]</code></pre>
 */
Position.prototype.positionedOffset  = function(element) { return {left: 0, top: 0}; };

/**
 * <p>Returns the size of the viewport.</p></div>
 * <p>The <em>viewport</em> is the subset of the browser window that a page occupies — the &#8220;usable&#8221; space in a browser window.</p>
 * 
 * @return { width: Number
 * @param height: Number }</code></pre>
 * 
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 *   document.viewport.getDimensions();
 *   //-> { width: 776, height: 580 }
 * </code></pre></div>
 * 
 * @since 1.6.0
 * 
 */
document.viewport.prototype.getDimensions  = function() { return {width: 0, height: 0}; };

/**
 * <p>Returns the viewport&#8217;s horizontal and vertical scroll offsets.</p></div>
 * <h3>Examples</h3>
 * <pre><code class="javascript">
 *  document.viewport.getScrollOffsets();
 *  //-> { left: 0, top: 0 }
 *  window.scrollTo(0, 120);
 *  document.viewport.getScrollOffsets();
 *  //-> { left: 0, top: 120 }
 * </code></pre></div>
 * 
 * @since 1.6.0
 * 
 * @return [Number
 * @param Number] also accessible as { top: Number
 * @param left: Number }</code></pre>
 */
document.viewport.prototype.getscrolloffsets  = function() { return {top: 0, left: 0}; };

/**
 * <p>Returns the width of the viewport.</p></div>
 * <p>Equivalent to calling <code>document.viewport.getDimensions().width</code>.</p></div>
 *     
 * @since 1.6.0
 * 
 * @return Number
 */
document.viewport.prototype.getWidth  = function() { return 0; };

/**
 * <p>Returns the height of the viewport.</p></div>
 * <p>Equivalent to <code>document.viewport.getDimensions().height</code>.</p></div>
 *     
 * @since 1.6.0
 * 
 * @return Number
 */
document.viewport.prototype.getHeight  = function() { return 0; };

/** 
 * Fires a custom event with document as the target.
 * <p>
 * <code>document.fire</code> is the document-wide version of <code>Element#fire</code>.</p>
 * 
 * @param eventName
 * @param memo optional
 * @return Event
 * @since 1.6.0
 * 
 */
Document.prototype.fire = function (eventName, memo) { return new Event(); };

/**
 * <p>Unregisters an event handler from the document.</p></div>
 * <p><code>document.stopObserving</code> is the document-wide version of <a href="http://prototypejs.org/api/element/stopObserving"><code>Element#stopObserving</code></a>.</p></div>
 *     
 * @since 1.6.0
 * 
 * @param eventName
 * @param handler
 * @param useCapture = false, argument is optional
 * @return document
 */
Document.prototype.stopObserving  = function(eventName, handler, useCapture) { return new Document(); };

/**
 * <p>Listens for the given event over the entire document. Can also be used for listening to <code>"dom:loaded"</code> event.</p></div>
 * <p><code>document.observe</code> is the document-wide version of <a href="http://prototypejs.org/api/element/observe"><code>Element#observe</code></a>. Using <code>document.observe</code> is equivalent to <code>Event.observe(document, eventName, handler)</code>.</p>
 * <h3>The <code>"dom:loaded"</code> event</h3>
 * <p>One really useful event generated by Prototype that you might want to observe on the document is <code>"dom:loaded"</code>. On supporting browsers it fires on <code>DOMContentLoaded</code> and on unsupporting browsers it simulates it using smart workarounds. If you used <code>window.onload</code> before you might want to switch to <code>dom:loaded</code> because it will fire immediately after the HTML document is fully loaded, but <em>before</em> images on the page are fully loaded. The <code>load</code> event on <code>window</code> only fires after all page images are loaded, making it unsuitable for some initialization purposes like hiding page elements (so they can be shown later).</p>
 * 
 * @param eventName
 * @param handler
 * @return document
 * 
 * <h3>Example</h3>
 * <pre><code class="javascript">document.observe("dom:loaded", function() {
 *   // initially hide all containers for tab content
 *   $$('div.tabcontent').invoke('hide');
 *  
 * });
 * </code></pre></div>
 * @since 1.6.0
 * 
 */
Document.prototype.observe  = function(eventName, handler) { return new Document(); };

/* EOF */