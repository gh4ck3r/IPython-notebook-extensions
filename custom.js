// leave at least 2 line with only a star on it below, or doc generation fails
/**
 *
 *
 * Placeholder for custom user javascript
 * mainly to be overridden in profile/static/custom/custom.js
 * This will always be an empty file in IPython
 *
 * User could add any javascript in the `profile/static/custom/custom.js` file
 * (and should create it if it does not exist).
 * It will be executed by the ipython notebook at load time.
 *
 * Same thing with `profile/static/custom/custom.css` to inject custom css into the notebook.
 *
 * Example :
 *
 * Create a custom button in toolbar that execute `%qtconsole` in kernel
 * and hence open a qtconsole attached to the same kernel as the current notebook
 *
 *    $([IPython.events]).on('app_initialized.NotebookApp', function(){
 *        IPython.toolbar.add_buttons_group([
 *            {
 *                 'label'   : 'run qtconsole',
 *                 'icon'    : 'icon-terminal', // select your icon from http://fortawesome.github.io/Font-Awesome/icons
 *                 'callback': function () {
 *                     IPython.notebook.kernel.execute('%qtconsole')
 *                 }
 *            }
 *            // add more button here if needed.
 *            ]);
 *    });
 *
 * Example :
 *
 *  Use `jQuery.getScript(url [, success(script, textStatus, jqXHR)] );`
 *  to load custom script into the notebook.
 *
 *    // to load the metadata ui extension example.
 *    $.getScript('/static/notebook/js/celltoolbarpresets/example.js');
 *    // or
 *    // to load the metadata ui extension to control slideshow mode / reveal js for nbconvert
 *    $.getScript('/static/notebook/js/celltoolbarpresets/slideshow.js');
 *
 *
 * @module IPython
 * @namespace IPython
 * @class customjs
 * @static
 */

// we want strict javascript that fails
// on ambiguous syntax
"using strict";

// do not use notebook loaded  event as it is re-triggerd on
// revert to checkpoint but this allow extesnsion to be loaded
// late enough to work.
//

$([IPython.events]).on('app_initialized.NotebookApp', function(){


    /**  Use path to js file relative to /static/ dir without leading slash, or
     *  js extension.
     *  Link directly to file is js extension.
     *
     *  first argument of require is a **list** that can contains several modules if needed.
     **/

    // require(['custom/noscroll']);
    // require(['custom/clean_start'])
    // require(['custom/toggle_all_line_number'])
    // require(['custom/gist_it']);

    /**
     *  Link to entrypoint if extesnsion is a folder.
     *  to be consistent with commonjs module, the entrypoint is main.js
     *  here youcan also trigger a custom function on load that will do extra
     *  action with the module if needed
     **/
     require(['custom/slidemode/main'],function(slidemode){
    //     // do stuff
     })

    require(["nbextensions/toc"], function (toc) {
      console.log('Table of Contents extension loaded');
      //toc.load_ipython_extension();
      IPython.load_extensions('toc');
      // If you want to load the toc by default, add:
      toc.table_of_contents();
    });

    require(['nbextensions/usability/codefolding/codefolding'], function(cf) {
      IPython.load_extensions('usability/codefolding/codefolding');
    });
});
