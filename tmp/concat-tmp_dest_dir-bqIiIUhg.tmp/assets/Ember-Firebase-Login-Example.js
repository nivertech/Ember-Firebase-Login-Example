eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"Ember-Firebase-Login-Example/adapters/application\", \n  [\"ember-data\",\"Ember-Firebase-Login-Example/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var DS = __dependency1__[\"default\"];\n    var ENV = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = DS.FirebaseAdapter.extend({\n      firebase: new window.Firebase(\'https://\' + ENV.firebase_instance + \'.firebaseio.com\')\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/adapters/application.js");

;eval("define(\"Ember-Firebase-Login-Example/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"Ember-Firebase-Login-Example/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=Ember-Firebase-Login-Example/app.js");

;eval("define(\"Ember-Firebase-Login-Example/controllers/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var ref = new Firebase(\"https://<YOUR FIREBASE HERE>.firebaseio.com\");\n\n    __exports__[\"default\"] = Ember.Controller.extend({\n    	actions: {\n    		logoutUser: function(){\n    			ref.unauth();\n    			localStorage.clear();\n    			console.log(\"Logged Out\");\n    				this.transitionToRoute(\'logout\');\n    		}\n    	}\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/controllers/application.js");

;eval("define(\"Ember-Firebase-Login-Example/initializers/export-application-global\", \n  [\"ember\",\"Ember-Firebase-Login-Example/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=Ember-Firebase-Login-Example/initializers/export-application-global.js");

;eval("define(\"Ember-Firebase-Login-Example/router\", \n  [\"ember\",\"Ember-Firebase-Login-Example/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.route(\'authenticated\');\n      this.route(\'signup\');\n      this.route(\'login\');\n      this.route(\'logout\');\n      this.route(\'email\');\n      this.route(\'create\');\n      this.route(\'secret\');\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=Ember-Firebase-Login-Example/router.js");

;eval("define(\"Ember-Firebase-Login-Example/routes/authenticated\", \n  [\"ember\",\"ember-data\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var DS = __dependency2__[\"default\"];\n\n    var ref = new Firebase(\"https://<YOUR FIREBASE INFO HERE>.firebaseio.com\");\n\n    __exports__[\"default\"] = Ember.Route.extend({\n\n    beforeModel: function(transition){\n      var _this = this;\n      var authData = ref.getAuth();\n      var loginController = _this.controllerFor(\'login\');\n      loginController.set(\'attemptedTransition\', transition);\n\n    if (authData) {\n      // user authenticated with Firebase\n      console.log(\"Valid User\");\n\n    } else {\n\n      _this.transitionTo(\'login\');\n      // user is logged out\n    }\n    }\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/routes/authenticated.js");

;eval("define(\"Ember-Firebase-Login-Example/routes/create\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/routes/create.js");

;eval("define(\"Ember-Firebase-Login-Example/routes/email\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/routes/email.js");

;eval("define(\"Ember-Firebase-Login-Example/routes/login\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/routes/login.js");

;eval("define(\"Ember-Firebase-Login-Example/routes/logout\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/routes/logout.js");

;eval("define(\"Ember-Firebase-Login-Example/routes/secret\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/routes/secret.js");

;eval("define(\"Ember-Firebase-Login-Example/routes/signup\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/routes/signup.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"Log In\");\n      }\n\n      data.buffer.push(\"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"utf-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n    <meta name=\\\"description\\\" content=\\\"\\\">\\n    <meta name=\\\"author\\\" content=\\\"\\\">\\n\\n    <title>Ember Firebase Authentication Example</title>\\n\\n  </head>\\n\\n  <body>\\n\\n    <nav class=\\\"navbar navbar-inverse navbar-fixed-top\\\" role=\\\"navigation\\\">\\n      <div class=\\\"container\\\">\\n        <div class=\\\"navbar-header\\\">\\n          <button type=\\\"button\\\" class=\\\"navbar-toggle collapsed\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbar\\\" aria-expanded=\\\"false\\\" aria-controls=\\\"navbar\\\">\\n            <span class=\\\"sr-only\\\">Toggle navigation</span>\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n            <span class=\\\"icon-bar\\\"></span>\\n          </button>\\n          <a class=\\\"navbar-brand\\\" href=\\\"https://twitter.com/levimoore\\\" target=\\\"blank\\\">@levimoore</a>\\n        </div>\\n        <div id=\\\"navbar\\\" class=\\\"collapse navbar-collapse\\\">\\n          <ul class=\\\"nav navbar-nav\\\">\\n            <li class=\\\"active\\\"><a href=\\\"#\\\">Home</a></li>\\n            <li>\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"login\", options) : helperMissing.call(depth0, \"link-to\", \"login\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</li>\\n            <li><a href=\\\"#\\\" \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"logoutUser\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\">Log Out</a></li>\\n          </ul>\\n        </div><!--/.nav-collapse -->\\n      </div>\\n    </nav>\\n\\n    <div class=\\\"container\\\">\\n\\n      <div class=\\\"starter-template\\\">\\n        <h1>Ember Firebase Authentication Example</h1>\\n        <p class=\\\"lead\\\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\\n      </div>\\n\\n    </div><!-- /.container -->\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/application.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/authenticated\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/authenticated.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/create\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/create.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/email\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/email.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/login\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/login.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/logout\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/logout.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/secret\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/secret.js");

;eval("define(\"Ember-Firebase-Login-Example/templates/signup\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/templates/signup.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/helpers\');\n    test(\'Ember-Firebase-Login-Example/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/helpers/resolver.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/helpers\');\n    test(\'Ember-Firebase-Login-Example/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/helpers/start-app.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests\');\n    test(\'Ember-Firebase-Login-Example/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/test-helper.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/adapters/application-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/adapters\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/adapters/application-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/adapters/application-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/adapters/application-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/controllers/application-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/controllers\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/controllers/application-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/controllers/application-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/controllers/application-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/authenticated-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/routes\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/routes/authenticated-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/routes/authenticated-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/authenticated-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/create-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/routes\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/routes/create-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/routes/create-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/create-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/email-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/routes\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/routes/email-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/routes/email-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/email-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/login-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/routes\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/routes/login-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/routes/login-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/login-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/logout-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/routes\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/routes/logout-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/routes/logout-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/logout-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/secret-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/routes\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/routes/secret-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/routes/secret-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/secret-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/signup-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember-Firebase-Login-Example/tests/unit/routes\');\n    test(\'Ember-Firebase-Login-Example/tests/unit/routes/signup-test.js should pass jshint\', function() { \n      ok(true, \'Ember-Firebase-Login-Example/tests/unit/routes/signup-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/Ember-Firebase-Login-Example/tests/unit/routes/signup-test.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/adapters/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - adapters\');\n    test(\'adapters/application.js should pass jshint\', function() { \n      ok(false, \'adapters/application.js should pass jshint.\\nadapters/application.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nadapters/application.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nadapters/application.js: line 4, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/adapters/application.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(false, \'app.js should pass jshint.\\napp.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 3, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 4, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\napp.js: line 16, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n5 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/app.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/controllers/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/application.js should pass jshint\', function() { \n      ok(false, \'controllers/application.js should pass jshint.\\ncontrollers/application.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\ncontrollers/application.js: line 5, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/controllers/application.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/helpers/resolver\", \n  [\"ember/resolver\",\"Ember-Firebase-Login-Example/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/helpers/resolver.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/helpers/start-app\", \n  [\"ember\",\"Ember-Firebase-Login-Example/app\",\"Ember-Firebase-Login-Example/router\",\"Ember-Firebase-Login-Example/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/helpers/start-app.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(false, \'router.js should pass jshint.\\nrouter.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nrouter.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nrouter.js: line 18, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/router.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/routes/authenticated.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/authenticated.js should pass jshint\', function() { \n      ok(false, \'routes/authenticated.js should pass jshint.\\nroutes/authenticated.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/authenticated.js: line 2, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/authenticated.js: line 6, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n3 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/routes/authenticated.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/routes/create.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/create.js should pass jshint\', function() { \n      ok(false, \'routes/create.js should pass jshint.\\nroutes/create.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/create.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/routes/create.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/routes/email.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/email.js should pass jshint\', function() { \n      ok(false, \'routes/email.js should pass jshint.\\nroutes/email.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/email.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/routes/email.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/routes/login.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/login.js should pass jshint\', function() { \n      ok(false, \'routes/login.js should pass jshint.\\nroutes/login.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/login.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/routes/login.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/routes/logout.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/logout.js should pass jshint\', function() { \n      ok(false, \'routes/logout.js should pass jshint.\\nroutes/logout.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/logout.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/routes/logout.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/routes/secret.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/secret.js should pass jshint\', function() { \n      ok(false, \'routes/secret.js should pass jshint.\\nroutes/secret.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/secret.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/routes/secret.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/routes/signup.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/signup.js should pass jshint\', function() { \n      ok(false, \'routes/signup.js should pass jshint.\\nroutes/signup.js: line 1, col 1, \\\'import\\\' is only available in ES6 (use esnext option).\\nroutes/signup.js: line 3, col 1, \\\'export\\\' is only available in ES6 (use esnext option).\\n\\n2 errors\'); \n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/routes/signup.jshint.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/test-helper\", \n  [\"Ember-Firebase-Login-Example/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/test-helper.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/adapters/application-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'adapter:application\', \'ApplicationAdapter\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'serializer:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var adapter = this.subject();\n      ok(adapter);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/adapters/application-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/controllers/application-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'controller:application\', \'ApplicationController\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var controller = this.subject();\n      ok(controller);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/controllers/application-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/routes/authenticated-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:authenticated\', \'AuthenticatedRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/routes/authenticated-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/routes/create-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:create\', \'CreateRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/routes/create-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/routes/email-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:email\', \'EmailRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/routes/email-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/routes/login-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:login\', \'LoginRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/routes/login-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/routes/logout-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:logout\', \'LogoutRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/routes/logout-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/routes/secret-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:secret\', \'SecretRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/routes/secret-test.js");

;eval("define(\"Ember-Firebase-Login-Example/tests/unit/routes/signup-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:signup\', \'SignupRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=Ember-Firebase-Login-Example/tests/unit/routes/signup-test.js");

/* jshint ignore:start */

define('Ember-Firebase-Login-Example/config/environment', ['ember'], function(Ember) {
  var prefix = 'Ember-Firebase-Login-Example';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("Ember-Firebase-Login-Example/tests/test-helper");
} else {
  require("Ember-Firebase-Login-Example/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */
