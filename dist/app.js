!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function n(e,n){for(var t=e.split(".");t.length;)n=n[t.shift()];return n}function t(n){if(Object.keys)Object.keys(e).forEach(n);else for(var t in e)f.call(e,t)&&n(t)}function r(n){t(function(t){if(-1==a.call(l,t)){try{var r=e[t]}catch(o){l.push(t)}n(t,r)}})}var o,i=$__System,f=Object.prototype.hasOwnProperty,a=Array.prototype.indexOf||function(e){for(var n=0,t=this.length;t>n;n++)if(this[n]===e)return n;return-1},l=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(t,i,f){var a=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var l;if(f){l={};for(var u in f)l[u]=e[u],e[u]=f[u]}return i||(o={},r(function(e,n){o[e]=n})),function(){var t;if(i)t=n(i,e);else{var f,u,s={};r(function(e,n){o[e]!==n&&"undefined"!=typeof n&&(s[e]=n,"undefined"!=typeof f?u||f===n||(u=!0):f=n)}),t=u?s:f}if(l)for(var c in l)e[c]=l[c];return e.define=a,t}}}))}("undefined"!=typeof self?self:global);
!function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
$__System.registerDynamic("2", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.debounce", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.paging", "ui.bootstrap.pager", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]);
    angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html", "uib/template/accordion/accordion.html", "uib/template/alert/alert.html", "uib/template/carousel/carousel.html", "uib/template/carousel/slide.html", "uib/template/datepicker/datepicker.html", "uib/template/datepicker/day.html", "uib/template/datepicker/month.html", "uib/template/datepicker/popup.html", "uib/template/datepicker/year.html", "uib/template/modal/backdrop.html", "uib/template/modal/window.html", "uib/template/pager/pager.html", "uib/template/pagination/pagination.html", "uib/template/tooltip/tooltip-html-popup.html", "uib/template/tooltip/tooltip-popup.html", "uib/template/tooltip/tooltip-template-popup.html", "uib/template/popover/popover-html.html", "uib/template/popover/popover-template.html", "uib/template/popover/popover.html", "uib/template/progressbar/bar.html", "uib/template/progressbar/progress.html", "uib/template/progressbar/progressbar.html", "uib/template/rating/rating.html", "uib/template/tabs/tab.html", "uib/template/tabs/tabset.html", "uib/template/timepicker/timepicker.html", "uib/template/typeahead/typeahead-match.html", "uib/template/typeahead/typeahead-popup.html"]);
    angular.module('ui.bootstrap.collapse', []).directive('uibCollapse', ['$animate', '$q', '$parse', '$injector', function($animate, $q, $parse, $injector) {
      var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
      return {link: function(scope, element, attrs) {
          var expandingExpr = $parse(attrs.expanding),
              expandedExpr = $parse(attrs.expanded),
              collapsingExpr = $parse(attrs.collapsing),
              collapsedExpr = $parse(attrs.collapsed);
          if (!scope.$eval(attrs.uibCollapse)) {
            element.addClass('in').addClass('collapse').attr('aria-expanded', true).attr('aria-hidden', false).css({height: 'auto'});
          }
          function expand() {
            if (element.hasClass('collapse') && element.hasClass('in')) {
              return;
            }
            $q.resolve(expandingExpr(scope)).then(function() {
              element.removeClass('collapse').addClass('collapsing').attr('aria-expanded', true).attr('aria-hidden', false);
              if ($animateCss) {
                $animateCss(element, {
                  addClass: 'in',
                  easing: 'ease',
                  to: {height: element[0].scrollHeight + 'px'}
                }).start()['finally'](expandDone);
              } else {
                $animate.addClass(element, 'in', {to: {height: element[0].scrollHeight + 'px'}}).then(expandDone);
              }
            });
          }
          function expandDone() {
            element.removeClass('collapsing').addClass('collapse').css({height: 'auto'});
            expandedExpr(scope);
          }
          function collapse() {
            if (!element.hasClass('collapse') && !element.hasClass('in')) {
              return collapseDone();
            }
            $q.resolve(collapsingExpr(scope)).then(function() {
              element.css({height: element[0].scrollHeight + 'px'}).removeClass('collapse').addClass('collapsing').attr('aria-expanded', false).attr('aria-hidden', true);
              if ($animateCss) {
                $animateCss(element, {
                  removeClass: 'in',
                  to: {height: '0'}
                }).start()['finally'](collapseDone);
              } else {
                $animate.removeClass(element, 'in', {to: {height: '0'}}).then(collapseDone);
              }
            });
          }
          function collapseDone() {
            element.css({height: '0'});
            element.removeClass('collapsing').addClass('collapse');
            collapsedExpr(scope);
          }
          scope.$watch(attrs.uibCollapse, function(shouldCollapse) {
            if (shouldCollapse) {
              collapse();
            } else {
              expand();
            }
          });
        }};
    }]);
    angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('uibAccordionConfig', {closeOthers: true}).controller('UibAccordionController', ['$scope', '$attrs', 'uibAccordionConfig', function($scope, $attrs, accordionConfig) {
      this.groups = [];
      this.closeOthers = function(openGroup) {
        var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
        if (closeOthers) {
          angular.forEach(this.groups, function(group) {
            if (group !== openGroup) {
              group.isOpen = false;
            }
          });
        }
      };
      this.addGroup = function(groupScope) {
        var that = this;
        this.groups.push(groupScope);
        groupScope.$on('$destroy', function(event) {
          that.removeGroup(groupScope);
        });
      };
      this.removeGroup = function(group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
          this.groups.splice(index, 1);
        }
      };
    }]).directive('uibAccordion', function() {
      return {
        controller: 'UibAccordionController',
        controllerAs: 'accordion',
        transclude: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/accordion/accordion.html';
        }
      };
    }).directive('uibAccordionGroup', function() {
      return {
        require: '^uibAccordion',
        transclude: true,
        replace: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/accordion/accordion-group.html';
        },
        scope: {
          heading: '@',
          isOpen: '=?',
          isDisabled: '=?'
        },
        controller: function() {
          this.setHeading = function(element) {
            this.heading = element;
          };
        },
        link: function(scope, element, attrs, accordionCtrl) {
          accordionCtrl.addGroup(scope);
          scope.openClass = attrs.openClass || 'panel-open';
          scope.panelClass = attrs.panelClass || 'panel-default';
          scope.$watch('isOpen', function(value) {
            element.toggleClass(scope.openClass, !!value);
            if (value) {
              accordionCtrl.closeOthers(scope);
            }
          });
          scope.toggleOpen = function($event) {
            if (!scope.isDisabled) {
              if (!$event || $event.which === 32) {
                scope.isOpen = !scope.isOpen;
              }
            }
          };
        }
      };
    }).directive('uibAccordionHeading', function() {
      return {
        transclude: true,
        template: '',
        replace: true,
        require: '^uibAccordionGroup',
        link: function(scope, element, attrs, accordionGroupCtrl, transclude) {
          accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
        }
      };
    }).directive('uibAccordionTransclude', function() {
      return {
        require: '^uibAccordionGroup',
        link: function(scope, element, attrs, controller) {
          scope.$watch(function() {
            return controller[attrs.uibAccordionTransclude];
          }, function(heading) {
            if (heading) {
              element.find('span').html('');
              element.find('span').append(heading);
            }
          });
        }
      };
    });
    angular.module('ui.bootstrap.alert', []).controller('UibAlertController', ['$scope', '$attrs', '$interpolate', '$timeout', function($scope, $attrs, $interpolate, $timeout) {
      $scope.closeable = !!$attrs.close;
      var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ? $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;
      if (dismissOnTimeout) {
        $timeout(function() {
          $scope.close();
        }, parseInt(dismissOnTimeout, 10));
      }
    }]).directive('uibAlert', function() {
      return {
        controller: 'UibAlertController',
        controllerAs: 'alert',
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/alert/alert.html';
        },
        transclude: true,
        replace: true,
        scope: {
          type: '@',
          close: '&'
        }
      };
    });
    angular.module('ui.bootstrap.buttons', []).constant('uibButtonConfig', {
      activeClass: 'active',
      toggleEvent: 'click'
    }).controller('UibButtonsController', ['uibButtonConfig', function(buttonConfig) {
      this.activeClass = buttonConfig.activeClass || 'active';
      this.toggleEvent = buttonConfig.toggleEvent || 'click';
    }]).directive('uibBtnRadio', ['$parse', function($parse) {
      return {
        require: ['uibBtnRadio', 'ngModel'],
        controller: 'UibButtonsController',
        controllerAs: 'buttons',
        link: function(scope, element, attrs, ctrls) {
          var buttonsCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          var uncheckableExpr = $parse(attrs.uibUncheckable);
          element.find('input').css({display: 'none'});
          ngModelCtrl.$render = function() {
            element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)));
          };
          element.on(buttonsCtrl.toggleEvent, function() {
            if (attrs.disabled) {
              return;
            }
            var isActive = element.hasClass(buttonsCtrl.activeClass);
            if (!isActive || angular.isDefined(attrs.uncheckable)) {
              scope.$apply(function() {
                ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio));
                ngModelCtrl.$render();
              });
            }
          });
          if (attrs.uibUncheckable) {
            scope.$watch(uncheckableExpr, function(uncheckable) {
              attrs.$set('uncheckable', uncheckable ? '' : null);
            });
          }
        }
      };
    }]).directive('uibBtnCheckbox', function() {
      return {
        require: ['uibBtnCheckbox', 'ngModel'],
        controller: 'UibButtonsController',
        controllerAs: 'button',
        link: function(scope, element, attrs, ctrls) {
          var buttonsCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          element.find('input').css({display: 'none'});
          function getTrueValue() {
            return getCheckboxValue(attrs.btnCheckboxTrue, true);
          }
          function getFalseValue() {
            return getCheckboxValue(attrs.btnCheckboxFalse, false);
          }
          function getCheckboxValue(attribute, defaultValue) {
            return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue;
          }
          ngModelCtrl.$render = function() {
            element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
          };
          element.on(buttonsCtrl.toggleEvent, function() {
            if (attrs.disabled) {
              return;
            }
            scope.$apply(function() {
              ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
              ngModelCtrl.$render();
            });
          });
        }
      };
    });
    angular.module('ui.bootstrap.carousel', []).controller('UibCarouselController', ['$scope', '$element', '$interval', '$timeout', '$animate', function($scope, $element, $interval, $timeout, $animate) {
      var self = this,
          slides = self.slides = $scope.slides = [],
          SLIDE_DIRECTION = 'uib-slideDirection',
          currentIndex = -1,
          currentInterval,
          isPlaying,
          bufferedTransitions = [];
      self.currentSlide = null;
      var destroyed = false;
      self.addSlide = function(slide, element) {
        slide.$element = element;
        slides.push(slide);
        if (slides.length === 1 || slide.active) {
          if ($scope.$currentTransition) {
            $scope.$currentTransition = null;
          }
          self.select(slides[slides.length - 1]);
          if (slides.length === 1) {
            $scope.play();
          }
        } else {
          slide.active = false;
        }
      };
      self.getCurrentIndex = function() {
        if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
          return +self.currentSlide.index;
        }
        return currentIndex;
      };
      self.next = $scope.next = function() {
        var newIndex = (self.getCurrentIndex() + 1) % slides.length;
        if (newIndex === 0 && $scope.noWrap()) {
          $scope.pause();
          return;
        }
        return self.select(getSlideByIndex(newIndex), 'next');
      };
      self.prev = $scope.prev = function() {
        var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;
        if ($scope.noWrap() && newIndex === slides.length - 1) {
          $scope.pause();
          return;
        }
        return self.select(getSlideByIndex(newIndex), 'prev');
      };
      self.removeSlide = function(slide) {
        if (angular.isDefined(slide.index)) {
          slides.sort(function(a, b) {
            return +a.index > +b.index;
          });
        }
        var bufferedIndex = bufferedTransitions.indexOf(slide);
        if (bufferedIndex !== -1) {
          bufferedTransitions.splice(bufferedIndex, 1);
        }
        var index = slides.indexOf(slide);
        slides.splice(index, 1);
        $timeout(function() {
          if (slides.length > 0 && slide.active) {
            if (index >= slides.length) {
              self.select(slides[index - 1]);
            } else {
              self.select(slides[index]);
            }
          } else if (currentIndex > index) {
            currentIndex--;
          }
        });
        if (slides.length === 0) {
          self.currentSlide = null;
          clearBufferedTransitions();
        }
      };
      self.select = $scope.select = function(nextSlide, direction) {
        var nextIndex = $scope.indexOfSlide(nextSlide);
        if (direction === undefined) {
          direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
        }
        if (nextSlide && nextSlide !== self.currentSlide && !$scope.$currentTransition) {
          goNext(nextSlide, nextIndex, direction);
        } else if (nextSlide && nextSlide !== self.currentSlide && $scope.$currentTransition) {
          bufferedTransitions.push(nextSlide);
          nextSlide.active = false;
        }
      };
      $scope.indexOfSlide = function(slide) {
        return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
      };
      $scope.isActive = function(slide) {
        return self.currentSlide === slide;
      };
      $scope.pause = function() {
        if (!$scope.noPause) {
          isPlaying = false;
          resetTimer();
        }
      };
      $scope.play = function() {
        if (!isPlaying) {
          isPlaying = true;
          restartTimer();
        }
      };
      $scope.$on('$destroy', function() {
        destroyed = true;
        resetTimer();
      });
      $scope.$watch('noTransition', function(noTransition) {
        $animate.enabled($element, !noTransition);
      });
      $scope.$watch('interval', restartTimer);
      $scope.$watchCollection('slides', resetTransition);
      function clearBufferedTransitions() {
        while (bufferedTransitions.length) {
          bufferedTransitions.shift();
        }
      }
      function getSlideByIndex(index) {
        if (angular.isUndefined(slides[index].index)) {
          return slides[index];
        }
        for (var i = 0,
            l = slides.length; i < l; ++i) {
          if (slides[i].index === index) {
            return slides[i];
          }
        }
      }
      function goNext(slide, index, direction) {
        if (destroyed) {
          return;
        }
        angular.extend(slide, {
          direction: direction,
          active: true
        });
        angular.extend(self.currentSlide || {}, {
          direction: direction,
          active: false
        });
        if ($animate.enabled($element) && !$scope.$currentTransition && slide.$element && self.slides.length > 1) {
          slide.$element.data(SLIDE_DIRECTION, slide.direction);
          if (self.currentSlide && self.currentSlide.$element) {
            self.currentSlide.$element.data(SLIDE_DIRECTION, slide.direction);
          }
          $scope.$currentTransition = true;
          $animate.on('addClass', slide.$element, function(element, phase) {
            if (phase === 'close') {
              $scope.$currentTransition = null;
              $animate.off('addClass', element);
              if (bufferedTransitions.length) {
                var nextSlide = bufferedTransitions.pop();
                var nextIndex = $scope.indexOfSlide(nextSlide);
                var nextDirection = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
                clearBufferedTransitions();
                goNext(nextSlide, nextIndex, nextDirection);
              }
            }
          });
        }
        self.currentSlide = slide;
        currentIndex = index;
        restartTimer();
      }
      function resetTimer() {
        if (currentInterval) {
          $interval.cancel(currentInterval);
          currentInterval = null;
        }
      }
      function resetTransition(slides) {
        if (!slides.length) {
          $scope.$currentTransition = null;
          clearBufferedTransitions();
        }
      }
      function restartTimer() {
        resetTimer();
        var interval = +$scope.interval;
        if (!isNaN(interval) && interval > 0) {
          currentInterval = $interval(timerFn, interval);
        }
      }
      function timerFn() {
        var interval = +$scope.interval;
        if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
          $scope.next();
        } else {
          $scope.pause();
        }
      }
    }]).directive('uibCarousel', function() {
      return {
        transclude: true,
        replace: true,
        controller: 'UibCarouselController',
        controllerAs: 'carousel',
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/carousel/carousel.html';
        },
        scope: {
          interval: '=',
          noTransition: '=',
          noPause: '=',
          noWrap: '&'
        }
      };
    }).directive('uibSlide', function() {
      return {
        require: '^uibCarousel',
        transclude: true,
        replace: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/carousel/slide.html';
        },
        scope: {
          active: '=?',
          actual: '=?',
          index: '=?'
        },
        link: function(scope, element, attrs, carouselCtrl) {
          carouselCtrl.addSlide(scope, element);
          scope.$on('$destroy', function() {
            carouselCtrl.removeSlide(scope);
          });
          scope.$watch('active', function(active) {
            if (active) {
              carouselCtrl.select(scope);
            }
          });
        }
      };
    }).animation('.item', ['$animateCss', function($animateCss) {
      var SLIDE_DIRECTION = 'uib-slideDirection';
      function removeClass(element, className, callback) {
        element.removeClass(className);
        if (callback) {
          callback();
        }
      }
      return {
        beforeAddClass: function(element, className, done) {
          if (className === 'active') {
            var stopped = false;
            var direction = element.data(SLIDE_DIRECTION);
            var directionClass = direction === 'next' ? 'left' : 'right';
            var removeClassFn = removeClass.bind(this, element, directionClass + ' ' + direction, done);
            element.addClass(direction);
            $animateCss(element, {addClass: directionClass}).start().done(removeClassFn);
            return function() {
              stopped = true;
            };
          }
          done();
        },
        beforeRemoveClass: function(element, className, done) {
          if (className === 'active') {
            var stopped = false;
            var direction = element.data(SLIDE_DIRECTION);
            var directionClass = direction === 'next' ? 'left' : 'right';
            var removeClassFn = removeClass.bind(this, element, directionClass, done);
            $animateCss(element, {addClass: directionClass}).start().done(removeClassFn);
            return function() {
              stopped = true;
            };
          }
          done();
        }
      };
    }]);
    angular.module('ui.bootstrap.dateparser', []).service('uibDateParser', ['$log', '$locale', 'orderByFilter', function($log, $locale, orderByFilter) {
      var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
      var localeId;
      var formatCodeToRegex;
      this.init = function() {
        localeId = $locale.id;
        this.parsers = {};
        formatCodeToRegex = [{
          key: 'yyyy',
          regex: '\\d{4}',
          apply: function(value) {
            this.year = +value;
          }
        }, {
          key: 'yy',
          regex: '\\d{2}',
          apply: function(value) {
            this.year = +value + 2000;
          }
        }, {
          key: 'y',
          regex: '\\d{1,4}',
          apply: function(value) {
            this.year = +value;
          }
        }, {
          key: 'M!',
          regex: '0?[1-9]|1[0-2]',
          apply: function(value) {
            this.month = value - 1;
          }
        }, {
          key: 'MMMM',
          regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
          apply: function(value) {
            this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value);
          }
        }, {
          key: 'MMM',
          regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
          apply: function(value) {
            this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value);
          }
        }, {
          key: 'MM',
          regex: '0[1-9]|1[0-2]',
          apply: function(value) {
            this.month = value - 1;
          }
        }, {
          key: 'M',
          regex: '[1-9]|1[0-2]',
          apply: function(value) {
            this.month = value - 1;
          }
        }, {
          key: 'd!',
          regex: '[0-2]?[0-9]{1}|3[0-1]{1}',
          apply: function(value) {
            this.date = +value;
          }
        }, {
          key: 'dd',
          regex: '[0-2][0-9]{1}|3[0-1]{1}',
          apply: function(value) {
            this.date = +value;
          }
        }, {
          key: 'd',
          regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
          apply: function(value) {
            this.date = +value;
          }
        }, {
          key: 'EEEE',
          regex: $locale.DATETIME_FORMATS.DAY.join('|')
        }, {
          key: 'EEE',
          regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
        }, {
          key: 'HH',
          regex: '(?:0|1)[0-9]|2[0-3]',
          apply: function(value) {
            this.hours = +value;
          }
        }, {
          key: 'hh',
          regex: '0[0-9]|1[0-2]',
          apply: function(value) {
            this.hours = +value;
          }
        }, {
          key: 'H',
          regex: '1?[0-9]|2[0-3]',
          apply: function(value) {
            this.hours = +value;
          }
        }, {
          key: 'h',
          regex: '[0-9]|1[0-2]',
          apply: function(value) {
            this.hours = +value;
          }
        }, {
          key: 'mm',
          regex: '[0-5][0-9]',
          apply: function(value) {
            this.minutes = +value;
          }
        }, {
          key: 'm',
          regex: '[0-9]|[1-5][0-9]',
          apply: function(value) {
            this.minutes = +value;
          }
        }, {
          key: 'sss',
          regex: '[0-9][0-9][0-9]',
          apply: function(value) {
            this.milliseconds = +value;
          }
        }, {
          key: 'ss',
          regex: '[0-5][0-9]',
          apply: function(value) {
            this.seconds = +value;
          }
        }, {
          key: 's',
          regex: '[0-9]|[1-5][0-9]',
          apply: function(value) {
            this.seconds = +value;
          }
        }, {
          key: 'a',
          regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
          apply: function(value) {
            if (this.hours === 12) {
              this.hours = 0;
            }
            if (value === 'PM') {
              this.hours += 12;
            }
          }
        }, {
          key: 'Z',
          regex: '[+-]\\d{4}',
          apply: function(value) {
            var matches = value.match(/([+-])(\d{2})(\d{2})/),
                sign = matches[1],
                hours = matches[2],
                minutes = matches[3];
            this.hours += toInt(sign + hours);
            this.minutes += toInt(sign + minutes);
          }
        }, {
          key: 'ww',
          regex: '[0-4][0-9]|5[0-3]'
        }, {
          key: 'w',
          regex: '[0-9]|[1-4][0-9]|5[0-3]'
        }, {
          key: 'GGGG',
          regex: $locale.DATETIME_FORMATS.ERANAMES.join('|').replace(/\s/g, '\\s')
        }, {
          key: 'GGG',
          regex: $locale.DATETIME_FORMATS.ERAS.join('|')
        }, {
          key: 'GG',
          regex: $locale.DATETIME_FORMATS.ERAS.join('|')
        }, {
          key: 'G',
          regex: $locale.DATETIME_FORMATS.ERAS.join('|')
        }];
      };
      this.init();
      function createParser(format) {
        var map = [],
            regex = format.split('');
        var quoteIndex = format.indexOf('\'');
        if (quoteIndex > -1) {
          var inLiteral = false;
          format = format.split('');
          for (var i = quoteIndex; i < format.length; i++) {
            if (inLiteral) {
              if (format[i] === '\'') {
                if (i + 1 < format.length && format[i + 1] === '\'') {
                  format[i + 1] = '$';
                  regex[i + 1] = '';
                } else {
                  regex[i] = '';
                  inLiteral = false;
                }
              }
              format[i] = '$';
            } else {
              if (format[i] === '\'') {
                format[i] = '$';
                regex[i] = '';
                inLiteral = true;
              }
            }
          }
          format = format.join('');
        }
        angular.forEach(formatCodeToRegex, function(data) {
          var index = format.indexOf(data.key);
          if (index > -1) {
            format = format.split('');
            regex[index] = '(' + data.regex + ')';
            format[index] = '$';
            for (var i = index + 1,
                n = index + data.key.length; i < n; i++) {
              regex[i] = '';
              format[i] = '$';
            }
            format = format.join('');
            map.push({
              index: index,
              apply: data.apply,
              matcher: data.regex
            });
          }
        });
        return {
          regex: new RegExp('^' + regex.join('') + '$'),
          map: orderByFilter(map, 'index')
        };
      }
      this.parse = function(input, format, baseDate) {
        if (!angular.isString(input) || !format) {
          return input;
        }
        format = $locale.DATETIME_FORMATS[format] || format;
        format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');
        if ($locale.id !== localeId) {
          this.init();
        }
        if (!this.parsers[format]) {
          this.parsers[format] = createParser(format);
        }
        var parser = this.parsers[format],
            regex = parser.regex,
            map = parser.map,
            results = input.match(regex),
            tzOffset = false;
        if (results && results.length) {
          var fields,
              dt;
          if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
            fields = {
              year: baseDate.getFullYear(),
              month: baseDate.getMonth(),
              date: baseDate.getDate(),
              hours: baseDate.getHours(),
              minutes: baseDate.getMinutes(),
              seconds: baseDate.getSeconds(),
              milliseconds: baseDate.getMilliseconds()
            };
          } else {
            if (baseDate) {
              $log.warn('dateparser:', 'baseDate is not a valid date');
            }
            fields = {
              year: 1900,
              month: 0,
              date: 1,
              hours: 0,
              minutes: 0,
              seconds: 0,
              milliseconds: 0
            };
          }
          for (var i = 1,
              n = results.length; i < n; i++) {
            var mapper = map[i - 1];
            if (mapper.matcher === 'Z') {
              tzOffset = true;
            }
            if (mapper.apply) {
              mapper.apply.call(fields, results[i]);
            }
          }
          var datesetter = tzOffset ? Date.prototype.setUTCFullYear : Date.prototype.setFullYear;
          var timesetter = tzOffset ? Date.prototype.setUTCHours : Date.prototype.setHours;
          if (isValid(fields.year, fields.month, fields.date)) {
            if (angular.isDate(baseDate) && !isNaN(baseDate.getTime()) && !tzOffset) {
              dt = new Date(baseDate);
              datesetter.call(dt, fields.year, fields.month, fields.date);
              timesetter.call(dt, fields.hours, fields.minutes, fields.seconds, fields.milliseconds);
            } else {
              dt = new Date(0);
              datesetter.call(dt, fields.year, fields.month, fields.date);
              timesetter.call(dt, fields.hours || 0, fields.minutes || 0, fields.seconds || 0, fields.milliseconds || 0);
            }
          }
          return dt;
        }
      };
      function isValid(year, month, date) {
        if (date < 1) {
          return false;
        }
        if (month === 1 && date > 28) {
          return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
        }
        if (month === 3 || month === 5 || month === 8 || month === 10) {
          return date < 31;
        }
        return true;
      }
      function toInt(str) {
        return parseInt(str, 10);
      }
      this.toTimezone = toTimezone;
      this.fromTimezone = fromTimezone;
      this.timezoneToOffset = timezoneToOffset;
      this.addDateMinutes = addDateMinutes;
      this.convertTimezoneToLocal = convertTimezoneToLocal;
      function toTimezone(date, timezone) {
        return date && timezone ? convertTimezoneToLocal(date, timezone) : date;
      }
      function fromTimezone(date, timezone) {
        return date && timezone ? convertTimezoneToLocal(date, timezone, true) : date;
      }
      function timezoneToOffset(timezone, fallback) {
        var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
      }
      function addDateMinutes(date, minutes) {
        date = new Date(date.getTime());
        date.setMinutes(date.getMinutes() + minutes);
        return date;
      }
      function convertTimezoneToLocal(date, timezone, reverse) {
        reverse = reverse ? -1 : 1;
        var timezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
        return addDateMinutes(date, reverse * (timezoneOffset - date.getTimezoneOffset()));
      }
    }]);
    angular.module('ui.bootstrap.isClass', []).directive('uibIsClass', ['$animate', function($animate) {
      var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
      var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
      var dataPerTracked = {};
      return {
        restrict: 'A',
        compile: function(tElement, tAttrs) {
          var linkedScopes = [];
          var instances = [];
          var expToData = {};
          var lastActivated = null;
          var onExpMatches = tAttrs.uibIsClass.match(ON_REGEXP);
          var onExp = onExpMatches[2];
          var expsStr = onExpMatches[1];
          var exps = expsStr.split(',');
          return linkFn;
          function linkFn(scope, element, attrs) {
            linkedScopes.push(scope);
            instances.push({
              scope: scope,
              element: element
            });
            exps.forEach(function(exp, k) {
              addForExp(exp, scope);
            });
            scope.$on('$destroy', removeScope);
          }
          function addForExp(exp, scope) {
            var matches = exp.match(IS_REGEXP);
            var clazz = scope.$eval(matches[1]);
            var compareWithExp = matches[2];
            var data = expToData[exp];
            if (!data) {
              var watchFn = function(compareWithVal) {
                var newActivated = null;
                instances.some(function(instance) {
                  var thisVal = instance.scope.$eval(onExp);
                  if (thisVal === compareWithVal) {
                    newActivated = instance;
                    return true;
                  }
                });
                if (data.lastActivated !== newActivated) {
                  if (data.lastActivated) {
                    $animate.removeClass(data.lastActivated.element, clazz);
                  }
                  if (newActivated) {
                    $animate.addClass(newActivated.element, clazz);
                  }
                  data.lastActivated = newActivated;
                }
              };
              expToData[exp] = data = {
                lastActivated: null,
                scope: scope,
                watchFn: watchFn,
                compareWithExp: compareWithExp,
                watcher: scope.$watch(compareWithExp, watchFn)
              };
            }
            data.watchFn(scope.$eval(compareWithExp));
          }
          function removeScope(e) {
            var removedScope = e.targetScope;
            var index = linkedScopes.indexOf(removedScope);
            linkedScopes.splice(index, 1);
            instances.splice(index, 1);
            if (linkedScopes.length) {
              var newWatchScope = linkedScopes[0];
              angular.forEach(expToData, function(data) {
                if (data.scope === removedScope) {
                  data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
                  data.scope = newWatchScope;
                }
              });
            } else {
              expToData = {};
            }
          }
        }
      };
    }]);
    angular.module('ui.bootstrap.position', []).factory('$uibPosition', ['$document', '$window', function($document, $window) {
      var SCROLLBAR_WIDTH;
      var OVERFLOW_REGEX = {
        normal: /(auto|scroll)/,
        hidden: /(auto|scroll|hidden)/
      };
      var PLACEMENT_REGEX = {
        auto: /\s?auto?\s?/i,
        primary: /^(top|bottom|left|right)$/,
        secondary: /^(top|bottom|left|right|center)$/,
        vertical: /^(top|bottom)$/
      };
      return {
        getRawNode: function(elem) {
          return elem[0] || elem;
        },
        parseStyle: function(value) {
          value = parseFloat(value);
          return isFinite(value) ? value : 0;
        },
        offsetParent: function(elem) {
          elem = this.getRawNode(elem);
          var offsetParent = elem.offsetParent || $document[0].documentElement;
          function isStaticPositioned(el) {
            return ($window.getComputedStyle(el).position || 'static') === 'static';
          }
          while (offsetParent && offsetParent !== $document[0].documentElement && isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || $document[0].documentElement;
        },
        scrollbarWidth: function() {
          if (angular.isUndefined(SCROLLBAR_WIDTH)) {
            var scrollElem = angular.element('<div style="position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;"></div>');
            $document.find('body').append(scrollElem);
            SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth;
            SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0;
            scrollElem.remove();
          }
          return SCROLLBAR_WIDTH;
        },
        scrollParent: function(elem, includeHidden) {
          elem = this.getRawNode(elem);
          var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal;
          var documentEl = $document[0].documentElement;
          var elemStyle = $window.getComputedStyle(elem);
          var excludeStatic = elemStyle.position === 'absolute';
          var scrollParent = elem.parentElement || documentEl;
          if (scrollParent === documentEl || elemStyle.position === 'fixed') {
            return documentEl;
          }
          while (scrollParent.parentElement && scrollParent !== documentEl) {
            var spStyle = $window.getComputedStyle(scrollParent);
            if (excludeStatic && spStyle.position !== 'static') {
              excludeStatic = false;
            }
            if (!excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) {
              break;
            }
            scrollParent = scrollParent.parentElement;
          }
          return scrollParent;
        },
        position: function(elem, includeMagins) {
          elem = this.getRawNode(elem);
          var elemOffset = this.offset(elem);
          if (includeMagins) {
            var elemStyle = $window.getComputedStyle(elem);
            elemOffset.top -= this.parseStyle(elemStyle.marginTop);
            elemOffset.left -= this.parseStyle(elemStyle.marginLeft);
          }
          var parent = this.offsetParent(elem);
          var parentOffset = {
            top: 0,
            left: 0
          };
          if (parent !== $document[0].documentElement) {
            parentOffset = this.offset(parent);
            parentOffset.top += parent.clientTop - parent.scrollTop;
            parentOffset.left += parent.clientLeft - parent.scrollLeft;
          }
          return {
            width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
            height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
            top: Math.round(elemOffset.top - parentOffset.top),
            left: Math.round(elemOffset.left - parentOffset.left)
          };
        },
        offset: function(elem) {
          elem = this.getRawNode(elem);
          var elemBCR = elem.getBoundingClientRect();
          return {
            width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
            height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
            top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
            left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
          };
        },
        viewportOffset: function(elem, useDocument, includePadding) {
          elem = this.getRawNode(elem);
          includePadding = includePadding !== false ? true : false;
          var elemBCR = elem.getBoundingClientRect();
          var offsetBCR = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          };
          var offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem);
          var offsetParentBCR = offsetParent.getBoundingClientRect();
          offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop;
          offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft;
          if (offsetParent === $document[0].documentElement) {
            offsetBCR.top += $window.pageYOffset;
            offsetBCR.left += $window.pageXOffset;
          }
          offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight;
          offsetBCR.right = offsetBCR.left + offsetParent.clientWidth;
          if (includePadding) {
            var offsetParentStyle = $window.getComputedStyle(offsetParent);
            offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop);
            offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom);
            offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft);
            offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight);
          }
          return {
            top: Math.round(elemBCR.top - offsetBCR.top),
            bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
            left: Math.round(elemBCR.left - offsetBCR.left),
            right: Math.round(offsetBCR.right - elemBCR.right)
          };
        },
        parsePlacement: function(placement) {
          var autoPlace = PLACEMENT_REGEX.auto.test(placement);
          if (autoPlace) {
            placement = placement.replace(PLACEMENT_REGEX.auto, '');
          }
          placement = placement.split('-');
          placement[0] = placement[0] || 'top';
          if (!PLACEMENT_REGEX.primary.test(placement[0])) {
            placement[0] = 'top';
          }
          placement[1] = placement[1] || 'center';
          if (!PLACEMENT_REGEX.secondary.test(placement[1])) {
            placement[1] = 'center';
          }
          if (autoPlace) {
            placement[2] = true;
          } else {
            placement[2] = false;
          }
          return placement;
        },
        positionElements: function(hostElem, targetElem, placement, appendToBody) {
          hostElem = this.getRawNode(hostElem);
          targetElem = this.getRawNode(targetElem);
          var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop('offsetWidth');
          var targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop('offsetHeight');
          placement = this.parsePlacement(placement);
          var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem);
          var targetElemPos = {
            top: 0,
            left: 0,
            placement: ''
          };
          if (placement[2]) {
            var viewportOffset = this.viewportOffset(hostElem);
            var targetElemStyle = $window.getComputedStyle(targetElem);
            var adjustedSize = {
              width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
              height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
            };
            placement[0] = placement[0] === 'top' && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? 'bottom' : placement[0] === 'bottom' && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? 'top' : placement[0] === 'left' && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? 'right' : placement[0] === 'right' && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? 'left' : placement[0];
            placement[1] = placement[1] === 'top' && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? 'bottom' : placement[1] === 'bottom' && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? 'top' : placement[1] === 'left' && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? 'right' : placement[1] === 'right' && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? 'left' : placement[1];
            if (placement[1] === 'center') {
              if (PLACEMENT_REGEX.vertical.test(placement[0])) {
                var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
                if (viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right) {
                  placement[1] = 'left';
                } else if (viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left) {
                  placement[1] = 'right';
                }
              } else {
                var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
                if (viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom) {
                  placement[1] = 'top';
                } else if (viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top) {
                  placement[1] = 'bottom';
                }
              }
            }
          }
          switch (placement[0]) {
            case 'top':
              targetElemPos.top = hostElemPos.top - targetHeight;
              break;
            case 'bottom':
              targetElemPos.top = hostElemPos.top + hostElemPos.height;
              break;
            case 'left':
              targetElemPos.left = hostElemPos.left - targetWidth;
              break;
            case 'right':
              targetElemPos.left = hostElemPos.left + hostElemPos.width;
              break;
          }
          switch (placement[1]) {
            case 'top':
              targetElemPos.top = hostElemPos.top;
              break;
            case 'bottom':
              targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
              break;
            case 'left':
              targetElemPos.left = hostElemPos.left;
              break;
            case 'right':
              targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
              break;
            case 'center':
              if (PLACEMENT_REGEX.vertical.test(placement[0])) {
                targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2;
              } else {
                targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2;
              }
              break;
          }
          targetElemPos.top = Math.round(targetElemPos.top);
          targetElemPos.left = Math.round(targetElemPos.left);
          targetElemPos.placement = placement[1] === 'center' ? placement[0] : placement[0] + '-' + placement[1];
          return targetElemPos;
        },
        positionArrow: function(elem, placement) {
          elem = this.getRawNode(elem);
          var innerElem = elem.querySelector('.tooltip-inner, .popover-inner');
          if (!innerElem) {
            return;
          }
          var isTooltip = angular.element(innerElem).hasClass('tooltip-inner');
          var arrowElem = isTooltip ? elem.querySelector('.tooltip-arrow') : elem.querySelector('.arrow');
          if (!arrowElem) {
            return;
          }
          placement = this.parsePlacement(placement);
          if (placement[1] === 'center') {
            angular.element(arrowElem).css({
              top: '',
              bottom: '',
              right: '',
              left: '',
              margin: ''
            });
            return;
          }
          var borderProp = 'border-' + placement[0] + '-width';
          var borderWidth = $window.getComputedStyle(arrowElem)[borderProp];
          var borderRadiusProp = 'border-';
          if (PLACEMENT_REGEX.vertical.test(placement[0])) {
            borderRadiusProp += placement[0] + '-' + placement[1];
          } else {
            borderRadiusProp += placement[1] + '-' + placement[0];
          }
          borderRadiusProp += '-radius';
          var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];
          var arrowCss = {
            top: 'auto',
            bottom: 'auto',
            left: 'auto',
            right: 'auto',
            margin: 0
          };
          switch (placement[0]) {
            case 'top':
              arrowCss.bottom = isTooltip ? '0' : '-' + borderWidth;
              break;
            case 'bottom':
              arrowCss.top = isTooltip ? '0' : '-' + borderWidth;
              break;
            case 'left':
              arrowCss.right = isTooltip ? '0' : '-' + borderWidth;
              break;
            case 'right':
              arrowCss.left = isTooltip ? '0' : '-' + borderWidth;
              break;
          }
          arrowCss[placement[1]] = borderRadius;
          angular.element(arrowElem).css(arrowCss);
        }
      };
    }]);
    angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass', 'ui.bootstrap.position']).value('$datepickerSuppressError', false).constant('uibDatepickerConfig', {
      datepickerMode: 'day',
      formatDay: 'dd',
      formatMonth: 'MMMM',
      formatYear: 'yyyy',
      formatDayHeader: 'EEE',
      formatDayTitle: 'MMMM yyyy',
      formatMonthTitle: 'yyyy',
      maxDate: null,
      maxMode: 'year',
      minDate: null,
      minMode: 'day',
      ngModelOptions: {},
      shortcutPropagation: false,
      showWeeks: true,
      yearColumns: 5,
      yearRows: 4
    }).controller('UibDatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibDatepickerConfig', '$datepickerSuppressError', 'uibDateParser', function($scope, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerSuppressError, dateParser) {
      var self = this,
          ngModelCtrl = {$setViewValue: angular.noop},
          ngModelOptions = {},
          watchListeners = [];
      this.modes = ['day', 'month', 'year'];
      angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle'], function(key) {
        self[key] = angular.isDefined($attrs[key]) ? $interpolate($attrs[key])($scope.$parent) : datepickerConfig[key];
      });
      angular.forEach(['showWeeks', 'yearRows', 'yearColumns', 'shortcutPropagation'], function(key) {
        self[key] = angular.isDefined($attrs[key]) ? $scope.$parent.$eval($attrs[key]) : datepickerConfig[key];
      });
      if (angular.isDefined($attrs.startingDay)) {
        self.startingDay = $scope.$parent.$eval($attrs.startingDay);
      } else if (angular.isNumber(datepickerConfig.startingDay)) {
        self.startingDay = datepickerConfig.startingDay;
      } else {
        self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
      }
      angular.forEach(['minDate', 'maxDate'], function(key) {
        if ($attrs[key]) {
          watchListeners.push($scope.$parent.$watch($attrs[key], function(value) {
            self[key] = value ? angular.isDate(value) ? dateParser.fromTimezone(new Date(value), ngModelOptions.timezone) : new Date(dateFilter(value, 'medium')) : null;
            self.refreshView();
          }));
        } else {
          self[key] = datepickerConfig[key] ? dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) : null;
        }
      });
      angular.forEach(['minMode', 'maxMode'], function(key) {
        if ($attrs[key]) {
          watchListeners.push($scope.$parent.$watch($attrs[key], function(value) {
            self[key] = $scope[key] = angular.isDefined(value) ? value : $attrs[key];
            if (key === 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key]) || key === 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key])) {
              $scope.datepickerMode = self[key];
            }
          }));
        } else {
          self[key] = $scope[key] = datepickerConfig[key] || null;
        }
      });
      $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
      $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
      if (angular.isDefined($attrs.initDate)) {
        this.activeDate = dateParser.fromTimezone($scope.$parent.$eval($attrs.initDate), ngModelOptions.timezone) || new Date();
        watchListeners.push($scope.$parent.$watch($attrs.initDate, function(initDate) {
          if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
            self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
            self.refreshView();
          }
        }));
      } else {
        this.activeDate = new Date();
      }
      $scope.disabled = angular.isDefined($attrs.disabled) || false;
      if (angular.isDefined($attrs.ngDisabled)) {
        watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
          $scope.disabled = disabled;
          self.refreshView();
        }));
      }
      $scope.isActive = function(dateObject) {
        if (self.compare(dateObject.date, self.activeDate) === 0) {
          $scope.activeDateId = dateObject.uid;
          return true;
        }
        return false;
      };
      this.init = function(ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_;
        ngModelOptions = ngModelCtrl_.$options || datepickerConfig.ngModelOptions;
        if (ngModelCtrl.$modelValue) {
          this.activeDate = ngModelCtrl.$modelValue;
        }
        ngModelCtrl.$render = function() {
          self.render();
        };
      };
      this.render = function() {
        if (ngModelCtrl.$viewValue) {
          var date = new Date(ngModelCtrl.$viewValue),
              isValid = !isNaN(date);
          if (isValid) {
            this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
          } else if (!$datepickerSuppressError) {
            $log.error('Datepicker directive: "ng-model" value must be a Date object');
          }
        }
        this.refreshView();
      };
      this.refreshView = function() {
        if (this.element) {
          $scope.selectedDt = null;
          this._refreshView();
          if ($scope.activeDt) {
            $scope.activeDateId = $scope.activeDt.uid;
          }
          var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
          date = dateParser.fromTimezone(date, ngModelOptions.timezone);
          ngModelCtrl.$setValidity('dateDisabled', !date || this.element && !this.isDisabled(date));
        }
      };
      this.createDateObject = function(date, format) {
        var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
        model = dateParser.fromTimezone(model, ngModelOptions.timezone);
        var dt = {
          date: date,
          label: dateFilter(date, format.replace(/d!/, 'dd')).replace(/M!/, 'MM'),
          selected: model && this.compare(date, model) === 0,
          disabled: this.isDisabled(date),
          current: this.compare(date, new Date()) === 0,
          customClass: this.customClass(date) || null
        };
        if (model && this.compare(date, model) === 0) {
          $scope.selectedDt = dt;
        }
        if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
          $scope.activeDt = dt;
        }
        return dt;
      };
      this.isDisabled = function(date) {
        return $scope.disabled || this.minDate && this.compare(date, this.minDate) < 0 || this.maxDate && this.compare(date, this.maxDate) > 0 || $attrs.dateDisabled && $scope.dateDisabled({
          date: date,
          mode: $scope.datepickerMode
        });
      };
      this.customClass = function(date) {
        return $scope.customClass({
          date: date,
          mode: $scope.datepickerMode
        });
      };
      this.split = function(arr, size) {
        var arrays = [];
        while (arr.length > 0) {
          arrays.push(arr.splice(0, size));
        }
        return arrays;
      };
      $scope.select = function(date) {
        if ($scope.datepickerMode === self.minMode) {
          var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
          dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
          dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
          ngModelCtrl.$setViewValue(dt);
          ngModelCtrl.$render();
        } else {
          self.activeDate = date;
          $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
        }
      };
      $scope.move = function(direction) {
        var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
            month = self.activeDate.getMonth() + direction * (self.step.months || 0);
        self.activeDate.setFullYear(year, month, 1);
        self.refreshView();
      };
      $scope.toggleMode = function(direction) {
        direction = direction || 1;
        if ($scope.datepickerMode === self.maxMode && direction === 1 || $scope.datepickerMode === self.minMode && direction === -1) {
          return;
        }
        $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
      };
      $scope.keys = {
        13: 'enter',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
      };
      var focusElement = function() {
        self.element[0].focus();
      };
      $scope.$on('uib:datepicker.focus', focusElement);
      $scope.keydown = function(evt) {
        var key = $scope.keys[evt.which];
        if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
          return;
        }
        evt.preventDefault();
        if (!self.shortcutPropagation) {
          evt.stopPropagation();
        }
        if (key === 'enter' || key === 'space') {
          if (self.isDisabled(self.activeDate)) {
            return;
          }
          $scope.select(self.activeDate);
        } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
          $scope.toggleMode(key === 'up' ? 1 : -1);
        } else {
          self.handleKeyDown(key, evt);
          self.refreshView();
        }
      };
      $scope.$on("$destroy", function() {
        while (watchListeners.length) {
          watchListeners.shift()();
        }
      });
    }]).controller('UibDaypickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      this.step = {months: 1};
      this.element = $element;
      function getDaysInMonth(year, month) {
        return month === 1 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
      }
      this.init = function(ctrl) {
        angular.extend(ctrl, this);
        scope.showWeeks = ctrl.showWeeks;
        ctrl.refreshView();
      };
      this.getDates = function(startDate, n) {
        var dates = new Array(n),
            current = new Date(startDate),
            i = 0,
            date;
        while (i < n) {
          date = new Date(current);
          dates[i++] = date;
          current.setDate(current.getDate() + 1);
        }
        return dates;
      };
      this._refreshView = function() {
        var year = this.activeDate.getFullYear(),
            month = this.activeDate.getMonth(),
            firstDayOfMonth = new Date(this.activeDate);
        firstDayOfMonth.setFullYear(year, month, 1);
        var difference = this.startingDay - firstDayOfMonth.getDay(),
            numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference,
            firstDate = new Date(firstDayOfMonth);
        if (numDisplayedFromPreviousMonth > 0) {
          firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        var days = this.getDates(firstDate, 42);
        for (var i = 0; i < 42; i++) {
          days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
            secondary: days[i].getMonth() !== month,
            uid: scope.uniqueId + '-' + i
          });
        }
        scope.labels = new Array(7);
        for (var j = 0; j < 7; j++) {
          scope.labels[j] = {
            abbr: dateFilter(days[j].date, this.formatDayHeader),
            full: dateFilter(days[j].date, 'EEEE')
          };
        }
        scope.title = dateFilter(this.activeDate, this.formatDayTitle);
        scope.rows = this.split(days, 7);
        if (scope.showWeeks) {
          scope.weekNumbers = [];
          var thursdayIndex = (4 + 7 - this.startingDay) % 7,
              numWeeks = scope.rows.length;
          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
            scope.weekNumbers.push(getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
          }
        }
      };
      this.compare = function(date1, date2) {
        var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
        var _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        _date1.setFullYear(date1.getFullYear());
        _date2.setFullYear(date2.getFullYear());
        return _date1 - _date2;
      };
      function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      }
      this.handleKeyDown = function(key, evt) {
        var date = this.activeDate.getDate();
        if (key === 'left') {
          date = date - 1;
        } else if (key === 'up') {
          date = date - 7;
        } else if (key === 'right') {
          date = date + 1;
        } else if (key === 'down') {
          date = date + 7;
        } else if (key === 'pageup' || key === 'pagedown') {
          var month = this.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
          this.activeDate.setMonth(month, 1);
          date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date);
        } else if (key === 'home') {
          date = 1;
        } else if (key === 'end') {
          date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth());
        }
        this.activeDate.setDate(date);
      };
    }]).controller('UibMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
      this.step = {years: 1};
      this.element = $element;
      this.init = function(ctrl) {
        angular.extend(ctrl, this);
        ctrl.refreshView();
      };
      this._refreshView = function() {
        var months = new Array(12),
            year = this.activeDate.getFullYear(),
            date;
        for (var i = 0; i < 12; i++) {
          date = new Date(this.activeDate);
          date.setFullYear(year, i, 1);
          months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {uid: scope.uniqueId + '-' + i});
        }
        scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
        scope.rows = this.split(months, 3);
      };
      this.compare = function(date1, date2) {
        var _date1 = new Date(date1.getFullYear(), date1.getMonth());
        var _date2 = new Date(date2.getFullYear(), date2.getMonth());
        _date1.setFullYear(date1.getFullYear());
        _date2.setFullYear(date2.getFullYear());
        return _date1 - _date2;
      };
      this.handleKeyDown = function(key, evt) {
        var date = this.activeDate.getMonth();
        if (key === 'left') {
          date = date - 1;
        } else if (key === 'up') {
          date = date - 3;
        } else if (key === 'right') {
          date = date + 1;
        } else if (key === 'down') {
          date = date + 3;
        } else if (key === 'pageup' || key === 'pagedown') {
          var year = this.activeDate.getFullYear() + (key === 'pageup' ? -1 : 1);
          this.activeDate.setFullYear(year);
        } else if (key === 'home') {
          date = 0;
        } else if (key === 'end') {
          date = 11;
        }
        this.activeDate.setMonth(date);
      };
    }]).controller('UibYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
      var columns,
          range;
      this.element = $element;
      function getStartingYear(year) {
        return parseInt((year - 1) / range, 10) * range + 1;
      }
      this.yearpickerInit = function() {
        columns = this.yearColumns;
        range = this.yearRows * columns;
        this.step = {years: range};
      };
      this._refreshView = function() {
        var years = new Array(range),
            date;
        for (var i = 0,
            start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
          date = new Date(this.activeDate);
          date.setFullYear(start + i, 0, 1);
          years[i] = angular.extend(this.createDateObject(date, this.formatYear), {uid: scope.uniqueId + '-' + i});
        }
        scope.title = [years[0].label, years[range - 1].label].join(' - ');
        scope.rows = this.split(years, columns);
        scope.columns = columns;
      };
      this.compare = function(date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
      };
      this.handleKeyDown = function(key, evt) {
        var date = this.activeDate.getFullYear();
        if (key === 'left') {
          date = date - 1;
        } else if (key === 'up') {
          date = date - columns;
        } else if (key === 'right') {
          date = date + 1;
        } else if (key === 'down') {
          date = date + columns;
        } else if (key === 'pageup' || key === 'pagedown') {
          date += (key === 'pageup' ? -1 : 1) * range;
        } else if (key === 'home') {
          date = getStartingYear(this.activeDate.getFullYear());
        } else if (key === 'end') {
          date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
        }
        this.activeDate.setFullYear(date);
      };
    }]).directive('uibDatepicker', function() {
      return {
        replace: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/datepicker/datepicker.html';
        },
        scope: {
          datepickerMode: '=?',
          dateDisabled: '&',
          customClass: '&',
          shortcutPropagation: '&?'
        },
        require: ['uibDatepicker', '^ngModel'],
        controller: 'UibDatepickerController',
        controllerAs: 'datepicker',
        link: function(scope, element, attrs, ctrls) {
          var datepickerCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          datepickerCtrl.init(ngModelCtrl);
        }
      };
    }).directive('uibDaypicker', function() {
      return {
        replace: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/datepicker/day.html';
        },
        require: ['^uibDatepicker', 'uibDaypicker'],
        controller: 'UibDaypickerController',
        link: function(scope, element, attrs, ctrls) {
          var datepickerCtrl = ctrls[0],
              daypickerCtrl = ctrls[1];
          daypickerCtrl.init(datepickerCtrl);
        }
      };
    }).directive('uibMonthpicker', function() {
      return {
        replace: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/datepicker/month.html';
        },
        require: ['^uibDatepicker', 'uibMonthpicker'],
        controller: 'UibMonthpickerController',
        link: function(scope, element, attrs, ctrls) {
          var datepickerCtrl = ctrls[0],
              monthpickerCtrl = ctrls[1];
          monthpickerCtrl.init(datepickerCtrl);
        }
      };
    }).directive('uibYearpicker', function() {
      return {
        replace: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/datepicker/year.html';
        },
        require: ['^uibDatepicker', 'uibYearpicker'],
        controller: 'UibYearpickerController',
        link: function(scope, element, attrs, ctrls) {
          var ctrl = ctrls[0];
          angular.extend(ctrl, ctrls[1]);
          ctrl.yearpickerInit();
          ctrl.refreshView();
        }
      };
    }).constant('uibDatepickerPopupConfig', {
      altInputFormats: [],
      appendToBody: false,
      clearText: 'Clear',
      closeOnDateSelection: true,
      closeText: 'Done',
      currentText: 'Today',
      datepickerPopup: 'yyyy-MM-dd',
      datepickerPopupTemplateUrl: 'uib/template/datepicker/popup.html',
      datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
      html5Types: {
        date: 'yyyy-MM-dd',
        'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
        'month': 'yyyy-MM'
      },
      onOpenFocus: true,
      showButtonBar: true
    }).controller('UibDatepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatepickerPopupConfig', '$timeout', 'uibDatepickerConfig', function(scope, element, attrs, $compile, $parse, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig) {
      var cache = {},
          isHtml5DateInput = false;
      var dateFormat,
          closeOnDateSelection,
          appendToBody,
          onOpenFocus,
          datepickerPopupTemplateUrl,
          datepickerTemplateUrl,
          popupEl,
          datepickerEl,
          ngModel,
          ngModelOptions,
          $popup,
          altInputFormats,
          watchListeners = [];
      scope.watchData = {};
      this.init = function(_ngModel_) {
        ngModel = _ngModel_;
        ngModelOptions = _ngModel_.$options || datepickerConfig.ngModelOptions;
        closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection;
        appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
        onOpenFocus = angular.isDefined(attrs.onOpenFocus) ? scope.$parent.$eval(attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
        datepickerPopupTemplateUrl = angular.isDefined(attrs.datepickerPopupTemplateUrl) ? attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl;
        datepickerTemplateUrl = angular.isDefined(attrs.datepickerTemplateUrl) ? attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl;
        altInputFormats = angular.isDefined(attrs.altInputFormats) ? scope.$parent.$eval(attrs.altInputFormats) : datepickerPopupConfig.altInputFormats;
        scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
        if (datepickerPopupConfig.html5Types[attrs.type]) {
          dateFormat = datepickerPopupConfig.html5Types[attrs.type];
          isHtml5DateInput = true;
        } else {
          dateFormat = attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
          attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
            if (newDateFormat !== dateFormat) {
              dateFormat = newDateFormat;
              ngModel.$modelValue = null;
              if (!dateFormat) {
                throw new Error('uibDatepickerPopup must have a date format specified.');
              }
            }
          });
        }
        if (!dateFormat) {
          throw new Error('uibDatepickerPopup must have a date format specified.');
        }
        if (isHtml5DateInput && attrs.uibDatepickerPopup) {
          throw new Error('HTML5 date input types do not support custom formats.');
        }
        popupEl = angular.element('<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>');
        scope.ngModelOptions = angular.copy(ngModelOptions);
        scope.ngModelOptions.timezone = null;
        popupEl.attr({
          'ng-model': 'date',
          'ng-model-options': 'ngModelOptions',
          'ng-change': 'dateSelection(date)',
          'template-url': datepickerPopupTemplateUrl
        });
        datepickerEl = angular.element(popupEl.children()[0]);
        datepickerEl.attr('template-url', datepickerTemplateUrl);
        if (isHtml5DateInput) {
          if (attrs.type === 'month') {
            datepickerEl.attr('datepicker-mode', '"month"');
            datepickerEl.attr('min-mode', 'month');
          }
        }
        if (scope.datepickerOptions) {
          angular.forEach(scope.datepickerOptions, function(value, option) {
            if (['minDate', 'maxDate', 'minMode', 'maxMode', 'initDate', 'datepickerMode'].indexOf(option) === -1) {
              datepickerEl.attr(cameltoDash(option), value);
            } else {
              datepickerEl.attr(cameltoDash(option), 'datepickerOptions.' + option);
            }
          });
        }
        angular.forEach(['minMode', 'maxMode', 'datepickerMode', 'shortcutPropagation'], function(key) {
          if (attrs[key]) {
            var getAttribute = $parse(attrs[key]);
            var propConfig = {get: function() {
                return getAttribute(scope.$parent);
              }};
            datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
            if (key === 'datepickerMode') {
              var setAttribute = getAttribute.assign;
              propConfig.set = function(v) {
                setAttribute(scope.$parent, v);
              };
            }
            Object.defineProperty(scope.watchData, key, propConfig);
          }
        });
        angular.forEach(['minDate', 'maxDate', 'initDate'], function(key) {
          if (attrs[key]) {
            var getAttribute = $parse(attrs[key]);
            watchListeners.push(scope.$parent.$watch(getAttribute, function(value) {
              if (key === 'minDate' || key === 'maxDate') {
                if (value === null) {
                  cache[key] = null;
                } else if (angular.isDate(value)) {
                  cache[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
                } else {
                  cache[key] = new Date(dateFilter(value, 'medium'));
                }
                scope.watchData[key] = value === null ? null : cache[key];
              } else {
                scope.watchData[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
              }
            }));
            datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
          }
        });
        if (attrs.dateDisabled) {
          datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
        }
        angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle', 'showWeeks', 'startingDay', 'yearRows', 'yearColumns'], function(key) {
          if (angular.isDefined(attrs[key])) {
            datepickerEl.attr(cameltoDash(key), attrs[key]);
          }
        });
        if (attrs.customClass) {
          datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
        }
        if (!isHtml5DateInput) {
          ngModel.$$parserName = 'date';
          ngModel.$validators.date = validator;
          ngModel.$parsers.unshift(parseDate);
          ngModel.$formatters.push(function(value) {
            if (ngModel.$isEmpty(value)) {
              scope.date = value;
              return value;
            }
            scope.date = dateParser.fromTimezone(value, ngModelOptions.timezone);
            dateFormat = dateFormat.replace(/M!/, 'MM').replace(/d!/, 'dd');
            return dateFilter(scope.date, dateFormat);
          });
        } else {
          ngModel.$formatters.push(function(value) {
            scope.date = dateParser.fromTimezone(value, ngModelOptions.timezone);
            return value;
          });
        }
        ngModel.$viewChangeListeners.push(function() {
          scope.date = parseDateString(ngModel.$viewValue);
        });
        element.on('keydown', inputKeydownBind);
        $popup = $compile(popupEl)(scope);
        popupEl.remove();
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
        scope.$on('$destroy', function() {
          if (scope.isOpen === true) {
            if (!$rootScope.$$phase) {
              scope.$apply(function() {
                scope.isOpen = false;
              });
            }
          }
          $popup.remove();
          element.off('keydown', inputKeydownBind);
          $document.off('click', documentClickBind);
          while (watchListeners.length) {
            watchListeners.shift()();
          }
        });
      };
      scope.getText = function(key) {
        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
      };
      scope.isDisabled = function(date) {
        if (date === 'today') {
          date = new Date();
        }
        return scope.watchData.minDate && scope.compare(date, cache.minDate) < 0 || scope.watchData.maxDate && scope.compare(date, cache.maxDate) > 0;
      };
      scope.compare = function(date1, date2) {
        return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
      };
      scope.dateSelection = function(dt) {
        if (angular.isDefined(dt)) {
          scope.date = dt;
        }
        var date = scope.date ? dateFilter(scope.date, dateFormat) : null;
        element.val(date);
        ngModel.$setViewValue(date);
        if (closeOnDateSelection) {
          scope.isOpen = false;
          element[0].focus();
        }
      };
      scope.keydown = function(evt) {
        if (evt.which === 27) {
          evt.stopPropagation();
          scope.isOpen = false;
          element[0].focus();
        }
      };
      scope.select = function(date) {
        if (date === 'today') {
          var today = new Date();
          if (angular.isDate(scope.date)) {
            date = new Date(scope.date);
            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
          } else {
            date = new Date(today.setHours(0, 0, 0, 0));
          }
        }
        scope.dateSelection(date);
      };
      scope.close = function() {
        scope.isOpen = false;
        element[0].focus();
      };
      scope.disabled = angular.isDefined(attrs.disabled) || false;
      if (attrs.ngDisabled) {
        watchListeners.push(scope.$parent.$watch($parse(attrs.ngDisabled), function(disabled) {
          scope.disabled = disabled;
        }));
      }
      scope.$watch('isOpen', function(value) {
        if (value) {
          if (!scope.disabled) {
            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
            scope.position.top = scope.position.top + element.prop('offsetHeight');
            $timeout(function() {
              if (onOpenFocus) {
                scope.$broadcast('uib:datepicker.focus');
              }
              $document.on('click', documentClickBind);
            }, 0, false);
          } else {
            scope.isOpen = false;
          }
        } else {
          $document.off('click', documentClickBind);
        }
      });
      function cameltoDash(string) {
        return string.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        });
      }
      function parseDateString(viewValue) {
        var date = dateParser.parse(viewValue, dateFormat, scope.date);
        if (isNaN(date)) {
          for (var i = 0; i < altInputFormats.length; i++) {
            date = dateParser.parse(viewValue, altInputFormats[i], scope.date);
            if (!isNaN(date)) {
              return date;
            }
          }
        }
        return date;
      }
      function parseDate(viewValue) {
        if (angular.isNumber(viewValue)) {
          viewValue = new Date(viewValue);
        }
        if (!viewValue) {
          return null;
        }
        if (angular.isDate(viewValue) && !isNaN(viewValue)) {
          return viewValue;
        }
        if (angular.isString(viewValue)) {
          var date = parseDateString(viewValue);
          if (!isNaN(date)) {
            return dateParser.toTimezone(date, ngModelOptions.timezone);
          }
        }
        return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
      }
      function validator(modelValue, viewValue) {
        var value = modelValue || viewValue;
        if (!attrs.ngRequired && !value) {
          return true;
        }
        if (angular.isNumber(value)) {
          value = new Date(value);
        }
        if (!value) {
          return true;
        }
        if (angular.isDate(value) && !isNaN(value)) {
          return true;
        }
        if (angular.isString(value)) {
          return !isNaN(parseDateString(viewValue));
        }
        return false;
      }
      function documentClickBind(event) {
        if (!scope.isOpen && scope.disabled) {
          return;
        }
        var popup = $popup[0];
        var dpContainsTarget = element[0].contains(event.target);
        var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
        if (scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
          scope.$apply(function() {
            scope.isOpen = false;
          });
        }
      }
      function inputKeydownBind(evt) {
        if (evt.which === 27 && scope.isOpen) {
          evt.preventDefault();
          evt.stopPropagation();
          scope.$apply(function() {
            scope.isOpen = false;
          });
          element[0].focus();
        } else if (evt.which === 40 && !scope.isOpen) {
          evt.preventDefault();
          evt.stopPropagation();
          scope.$apply(function() {
            scope.isOpen = true;
          });
        }
      }
    }]).directive('uibDatepickerPopup', function() {
      return {
        require: ['ngModel', 'uibDatepickerPopup'],
        controller: 'UibDatepickerPopupController',
        scope: {
          datepickerOptions: '=?',
          isOpen: '=?',
          currentText: '@',
          clearText: '@',
          closeText: '@',
          dateDisabled: '&',
          customClass: '&'
        },
        link: function(scope, element, attrs, ctrls) {
          var ngModel = ctrls[0],
              ctrl = ctrls[1];
          ctrl.init(ngModel);
        }
      };
    }).directive('uibDatepickerPopupWrap', function() {
      return {
        replace: true,
        transclude: true,
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/datepicker/popup.html';
        }
      };
    });
    angular.module('ui.bootstrap.debounce', []).factory('$$debounce', ['$timeout', function($timeout) {
      return function(callback, debounceTime) {
        var timeoutPromise;
        return function() {
          var self = this;
          var args = Array.prototype.slice.call(arguments);
          if (timeoutPromise) {
            $timeout.cancel(timeoutPromise);
          }
          timeoutPromise = $timeout(function() {
            callback.apply(self, args);
          }, debounceTime);
        };
      };
    }]);
    angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position']).constant('uibDropdownConfig', {
      appendToOpenClass: 'uib-dropdown-open',
      openClass: 'open'
    }).service('uibDropdownService', ['$document', '$rootScope', function($document, $rootScope) {
      var openScope = null;
      this.open = function(dropdownScope) {
        if (!openScope) {
          $document.on('click', closeDropdown);
          $document.on('keydown', keybindFilter);
        }
        if (openScope && openScope !== dropdownScope) {
          openScope.isOpen = false;
        }
        openScope = dropdownScope;
      };
      this.close = function(dropdownScope) {
        if (openScope === dropdownScope) {
          openScope = null;
          $document.off('click', closeDropdown);
          $document.off('keydown', keybindFilter);
        }
      };
      var closeDropdown = function(evt) {
        if (!openScope) {
          return;
        }
        if (evt && openScope.getAutoClose() === 'disabled') {
          return;
        }
        if (evt && evt.which === 3) {
          return;
        }
        var toggleElement = openScope.getToggleElement();
        if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
          return;
        }
        var dropdownElement = openScope.getDropdownElement();
        if (evt && openScope.getAutoClose() === 'outsideClick' && dropdownElement && dropdownElement[0].contains(evt.target)) {
          return;
        }
        openScope.isOpen = false;
        if (!$rootScope.$$phase) {
          openScope.$apply();
        }
      };
      var keybindFilter = function(evt) {
        if (evt.which === 27) {
          openScope.focusToggleElement();
          closeDropdown();
        } else if (openScope.isKeynavEnabled() && [38, 40].indexOf(evt.which) !== -1 && openScope.isOpen) {
          evt.preventDefault();
          evt.stopPropagation();
          openScope.focusDropdownEntry(evt.which);
        }
      };
    }]).controller('UibDropdownController', ['$scope', '$element', '$attrs', '$parse', 'uibDropdownConfig', 'uibDropdownService', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
      var self = this,
          scope = $scope.$new(),
          templateScope,
          appendToOpenClass = dropdownConfig.appendToOpenClass,
          openClass = dropdownConfig.openClass,
          getIsOpen,
          setIsOpen = angular.noop,
          toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
          appendToBody = false,
          appendTo = null,
          keynavEnabled = false,
          selectedOption = null,
          body = $document.find('body');
      $element.addClass('dropdown');
      this.init = function() {
        if ($attrs.isOpen) {
          getIsOpen = $parse($attrs.isOpen);
          setIsOpen = getIsOpen.assign;
          $scope.$watch(getIsOpen, function(value) {
            scope.isOpen = !!value;
          });
        }
        if (angular.isDefined($attrs.dropdownAppendTo)) {
          var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
          if (appendToEl) {
            appendTo = angular.element(appendToEl);
          }
        }
        appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
        keynavEnabled = angular.isDefined($attrs.keyboardNav);
        if (appendToBody && !appendTo) {
          appendTo = body;
        }
        if (appendTo && self.dropdownMenu) {
          appendTo.append(self.dropdownMenu);
          $element.on('$destroy', function handleDestroyEvent() {
            self.dropdownMenu.remove();
          });
        }
      };
      this.toggle = function(open) {
        return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
      };
      this.isOpen = function() {
        return scope.isOpen;
      };
      scope.getToggleElement = function() {
        return self.toggleElement;
      };
      scope.getAutoClose = function() {
        return $attrs.autoClose || 'always';
      };
      scope.getElement = function() {
        return $element;
      };
      scope.isKeynavEnabled = function() {
        return keynavEnabled;
      };
      scope.focusDropdownEntry = function(keyCode) {
        var elems = self.dropdownMenu ? angular.element(self.dropdownMenu).find('a') : $element.find('ul').eq(0).find('a');
        switch (keyCode) {
          case 40:
            {
              if (!angular.isNumber(self.selectedOption)) {
                self.selectedOption = 0;
              } else {
                self.selectedOption = self.selectedOption === elems.length - 1 ? self.selectedOption : self.selectedOption + 1;
              }
              break;
            }
          case 38:
            {
              if (!angular.isNumber(self.selectedOption)) {
                self.selectedOption = elems.length - 1;
              } else {
                self.selectedOption = self.selectedOption === 0 ? 0 : self.selectedOption - 1;
              }
              break;
            }
        }
        elems[self.selectedOption].focus();
      };
      scope.getDropdownElement = function() {
        return self.dropdownMenu;
      };
      scope.focusToggleElement = function() {
        if (self.toggleElement) {
          self.toggleElement[0].focus();
        }
      };
      scope.$watch('isOpen', function(isOpen, wasOpen) {
        if (appendTo && self.dropdownMenu) {
          var pos = $position.positionElements($element, self.dropdownMenu, 'bottom-left', true),
              css,
              rightalign;
          css = {
            top: pos.top + 'px',
            display: isOpen ? 'block' : 'none'
          };
          rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
          if (!rightalign) {
            css.left = pos.left + 'px';
            css.right = 'auto';
          } else {
            css.left = 'auto';
            css.right = window.innerWidth - (pos.left + $element.prop('offsetWidth')) + 'px';
          }
          if (!appendToBody) {
            var appendOffset = $position.offset(appendTo);
            css.top = pos.top - appendOffset.top + 'px';
            if (!rightalign) {
              css.left = pos.left - appendOffset.left + 'px';
            } else {
              css.right = window.innerWidth - (pos.left - appendOffset.left + $element.prop('offsetWidth')) + 'px';
            }
          }
          self.dropdownMenu.css(css);
        }
        var openContainer = appendTo ? appendTo : $element;
        $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, appendTo ? appendToOpenClass : openClass).then(function() {
          if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
            toggleInvoker($scope, {open: !!isOpen});
          }
        });
        if (isOpen) {
          if (self.dropdownMenuTemplateUrl) {
            $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
              templateScope = scope.$new();
              $compile(tplContent.trim())(templateScope, function(dropdownElement) {
                var newEl = dropdownElement;
                self.dropdownMenu.replaceWith(newEl);
                self.dropdownMenu = newEl;
              });
            });
          }
          scope.focusToggleElement();
          uibDropdownService.open(scope);
        } else {
          if (self.dropdownMenuTemplateUrl) {
            if (templateScope) {
              templateScope.$destroy();
            }
            var newEl = angular.element('<ul class="dropdown-menu"></ul>');
            self.dropdownMenu.replaceWith(newEl);
            self.dropdownMenu = newEl;
          }
          uibDropdownService.close(scope);
          self.selectedOption = null;
        }
        if (angular.isFunction(setIsOpen)) {
          setIsOpen($scope, isOpen);
        }
      });
      $scope.$on('$locationChangeSuccess', function() {
        if (scope.getAutoClose() !== 'disabled') {
          scope.isOpen = false;
        }
      });
    }]).directive('uibDropdown', function() {
      return {
        controller: 'UibDropdownController',
        link: function(scope, element, attrs, dropdownCtrl) {
          dropdownCtrl.init();
        }
      };
    }).directive('uibDropdownMenu', function() {
      return {
        restrict: 'A',
        require: '?^uibDropdown',
        link: function(scope, element, attrs, dropdownCtrl) {
          if (!dropdownCtrl || angular.isDefined(attrs.dropdownNested)) {
            return;
          }
          element.addClass('dropdown-menu');
          var tplUrl = attrs.templateUrl;
          if (tplUrl) {
            dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
          }
          if (!dropdownCtrl.dropdownMenu) {
            dropdownCtrl.dropdownMenu = element;
          }
        }
      };
    }).directive('uibDropdownToggle', function() {
      return {
        require: '?^uibDropdown',
        link: function(scope, element, attrs, dropdownCtrl) {
          if (!dropdownCtrl) {
            return;
          }
          element.addClass('dropdown-toggle');
          dropdownCtrl.toggleElement = element;
          var toggleDropdown = function(event) {
            event.preventDefault();
            if (!element.hasClass('disabled') && !attrs.disabled) {
              scope.$apply(function() {
                dropdownCtrl.toggle();
              });
            }
          };
          element.bind('click', toggleDropdown);
          element.attr({
            'aria-haspopup': true,
            'aria-expanded': false
          });
          scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
            element.attr('aria-expanded', !!isOpen);
          });
          scope.$on('$destroy', function() {
            element.unbind('click', toggleDropdown);
          });
        }
      };
    });
    angular.module('ui.bootstrap.stackedMap', []).factory('$$stackedMap', function() {
      return {createNew: function() {
          var stack = [];
          return {
            add: function(key, value) {
              stack.push({
                key: key,
                value: value
              });
            },
            get: function(key) {
              for (var i = 0; i < stack.length; i++) {
                if (key === stack[i].key) {
                  return stack[i];
                }
              }
            },
            keys: function() {
              var keys = [];
              for (var i = 0; i < stack.length; i++) {
                keys.push(stack[i].key);
              }
              return keys;
            },
            top: function() {
              return stack[stack.length - 1];
            },
            remove: function(key) {
              var idx = -1;
              for (var i = 0; i < stack.length; i++) {
                if (key === stack[i].key) {
                  idx = i;
                  break;
                }
              }
              return stack.splice(idx, 1)[0];
            },
            removeTop: function() {
              return stack.splice(stack.length - 1, 1)[0];
            },
            length: function() {
              return stack.length;
            }
          };
        }};
    });
    angular.module('ui.bootstrap.modal', ['ui.bootstrap.stackedMap']).factory('$$multiMap', function() {
      return {createNew: function() {
          var map = {};
          return {
            entries: function() {
              return Object.keys(map).map(function(key) {
                return {
                  key: key,
                  value: map[key]
                };
              });
            },
            get: function(key) {
              return map[key];
            },
            hasKey: function(key) {
              return !!map[key];
            },
            keys: function() {
              return Object.keys(map);
            },
            put: function(key, value) {
              if (!map[key]) {
                map[key] = [];
              }
              map[key].push(value);
            },
            remove: function(key, value) {
              var values = map[key];
              if (!values) {
                return;
              }
              var idx = values.indexOf(value);
              if (idx !== -1) {
                values.splice(idx, 1);
              }
              if (!values.length) {
                delete map[key];
              }
            }
          };
        }};
    }).provider('$uibResolve', function() {
      var resolve = this;
      this.resolver = null;
      this.setResolver = function(resolver) {
        this.resolver = resolver;
      };
      this.$get = ['$injector', '$q', function($injector, $q) {
        var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
        return {resolve: function(invocables, locals, parent, self) {
            if (resolver) {
              return resolver.resolve(invocables, locals, parent, self);
            }
            var promises = [];
            angular.forEach(invocables, function(value) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promises.push($q.resolve($injector.invoke(value)));
              } else if (angular.isString(value)) {
                promises.push($q.resolve($injector.get(value)));
              } else {
                promises.push($q.resolve(value));
              }
            });
            return $q.all(promises).then(function(resolves) {
              var resolveObj = {};
              var resolveIter = 0;
              angular.forEach(invocables, function(value, key) {
                resolveObj[key] = resolves[resolveIter++];
              });
              return resolveObj;
            });
          }};
      }];
    }).directive('uibModalBackdrop', ['$animateCss', '$injector', '$uibModalStack', function($animateCss, $injector, $modalStack) {
      return {
        replace: true,
        templateUrl: 'uib/template/modal/backdrop.html',
        compile: function(tElement, tAttrs) {
          tElement.addClass(tAttrs.backdropClass);
          return linkFn;
        }
      };
      function linkFn(scope, element, attrs) {
        if (attrs.modalInClass) {
          $animateCss(element, {addClass: attrs.modalInClass}).start();
          scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
            var done = setIsAsync();
            if (scope.modalOptions.animation) {
              $animateCss(element, {removeClass: attrs.modalInClass}).start().then(done);
            } else {
              done();
            }
          });
        }
      }
    }]).directive('uibModalWindow', ['$uibModalStack', '$q', '$animate', '$animateCss', '$document', function($modalStack, $q, $animate, $animateCss, $document) {
      return {
        scope: {index: '@'},
        replace: true,
        transclude: true,
        templateUrl: function(tElement, tAttrs) {
          return tAttrs.templateUrl || 'uib/template/modal/window.html';
        },
        link: function(scope, element, attrs) {
          element.addClass(attrs.windowClass || '');
          element.addClass(attrs.windowTopClass || '');
          scope.size = attrs.size;
          scope.close = function(evt) {
            var modal = $modalStack.getTop();
            if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && evt.target === evt.currentTarget) {
              evt.preventDefault();
              evt.stopPropagation();
              $modalStack.dismiss(modal.key, 'backdrop click');
            }
          };
          element.on('click', scope.close);
          scope.$isRendered = true;
          var modalRenderDeferObj = $q.defer();
          attrs.$observe('modalRender', function(value) {
            if (value === 'true') {
              modalRenderDeferObj.resolve();
            }
          });
          modalRenderDeferObj.promise.then(function() {
            var animationPromise = null;
            if (attrs.modalInClass) {
              animationPromise = $animateCss(element, {addClass: attrs.modalInClass}).start();
              scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
                var done = setIsAsync();
                if ($animateCss) {
                  $animateCss(element, {removeClass: attrs.modalInClass}).start().then(done);
                } else {
                  $animate.removeClass(element, attrs.modalInClass).then(done);
                }
              });
            }
            $q.when(animationPromise).then(function() {
              if (!($document[0].activeElement && element[0].contains($document[0].activeElement))) {
                var inputWithAutofocus = element[0].querySelector('[autofocus]');
                if (inputWithAutofocus) {
                  inputWithAutofocus.focus();
                } else {
                  element[0].focus();
                }
              }
            });
            var modal = $modalStack.getTop();
            if (modal) {
              $modalStack.modalRendered(modal.key);
            }
          });
        }
      };
    }]).directive('uibModalAnimationClass', function() {
      return {compile: function(tElement, tAttrs) {
          if (tAttrs.modalAnimation) {
            tElement.addClass(tAttrs.uibModalAnimationClass);
          }
        }};
    }).directive('uibModalTransclude', function() {
      return {link: function(scope, element, attrs, controller, transclude) {
          transclude(scope.$parent, function(clone) {
            element.empty();
            element.append(clone);
          });
        }};
    }).factory('$uibModalStack', ['$animate', '$animateCss', '$document', '$compile', '$rootScope', '$q', '$$multiMap', '$$stackedMap', function($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap) {
      var OPENED_MODAL_CLASS = 'modal-open';
      var backdropDomEl,
          backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var openedClasses = $$multiMap.createNew();
      var $modalStack = {NOW_CLOSING_EVENT: 'modal.stack.now-closing'};
      var focusableElementList;
      var focusIndex = 0;
      var tababbleSelector = 'a[href], area[href], input:not([disabled]), ' + 'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' + 'iframe, object, embed, *[tabindex], *[contenteditable=true]';
      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }
        return topBackdropIndex;
      }
      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });
      function removeModalWindow(modalInstance, elementToReceiveFocus) {
        var modalWindow = openedWindows.get(modalInstance).value;
        var appendToElement = modalWindow.appendTo;
        openedWindows.remove(modalInstance);
        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
          openedClasses.remove(modalBodyClass, modalInstance);
          appendToElement.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
          toggleTopWindowClass(true);
        }, modalWindow.closedDeferred);
        checkRemoveBackdrop();
        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
          elementToReceiveFocus.focus();
        } else if (appendToElement.focus) {
          appendToElement.focus();
        }
      }
      function toggleTopWindowClass(toggleSwitch) {
        var modalWindow;
        if (openedWindows.length() > 0) {
          modalWindow = openedWindows.top().value;
          modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || '', toggleSwitch);
        }
      }
      function checkRemoveBackdrop() {
        if (backdropDomEl && backdropIndex() === -1) {
          var backdropScopeRef = backdropScope;
          removeAfterAnimate(backdropDomEl, backdropScope, function() {
            backdropScopeRef = null;
          });
          backdropDomEl = undefined;
          backdropScope = undefined;
        }
      }
      function removeAfterAnimate(domEl, scope, done, closedDeferred) {
        var asyncDeferred;
        var asyncPromise = null;
        var setIsAsync = function() {
          if (!asyncDeferred) {
            asyncDeferred = $q.defer();
            asyncPromise = asyncDeferred.promise;
          }
          return function asyncDone() {
            asyncDeferred.resolve();
          };
        };
        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);
        return $q.when(asyncPromise).then(afterAnimating);
        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;
          $animateCss(domEl, {event: 'leave'}).start().then(function() {
            domEl.remove();
            if (closedDeferred) {
              closedDeferred.resolve();
            }
          });
          scope.$destroy();
          if (done) {
            done();
          }
        }
      }
      $document.on('keydown', keydownListener);
      $rootScope.$on('$destroy', function() {
        $document.off('keydown', keydownListener);
      });
      function keydownListener(evt) {
        if (evt.isDefaultPrevented()) {
          return evt;
        }
        var modal = openedWindows.top();
        if (modal) {
          switch (evt.which) {
            case 27:
              {
                if (modal.value.keyboard) {
                  evt.preventDefault();
                  $rootScope.$apply(function() {
                    $modalStack.dismiss(modal.key, 'escape key press');
                  });
                }
                break;
              }
            case 9:
              {
                $modalStack.loadFocusElementList(modal);
                var focusChanged = false;
                if (evt.shiftKey) {
                  if ($modalStack.isFocusInFirstItem(evt)) {
                    focusChanged = $modalStack.focusLastFocusableElement();
                  }
                } else {
                  if ($modalStack.isFocusInLastItem(evt)) {
                    focusChanged = $modalStack.focusFirstFocusableElement();
                  }
                }
                if (focusChanged) {
                  evt.preventDefault();
                  evt.stopPropagation();
                }
                break;
              }
          }
        }
      }
      $modalStack.open = function(modalInstance, modal) {
        var modalOpener = $document[0].activeElement,
            modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;
        toggleTopWindowClass(false);
        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          closedDeferred: modal.closedDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard,
          openedClass: modal.openedClass,
          windowTopClass: modal.windowTopClass,
          animation: modal.animation,
          appendTo: modal.appendTo
        });
        openedClasses.put(modalBodyClass, modalInstance);
        var appendToElement = modal.appendTo,
            currBackdropIndex = backdropIndex();
        if (!appendToElement.length) {
          throw new Error('appendTo element not found. Make sure that the element passed is in DOM.');
        }
        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.modalOptions = modal;
          backdropScope.index = currBackdropIndex;
          backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>');
          backdropDomEl.attr('backdrop-class', modal.backdropClass);
          if (modal.animation) {
            backdropDomEl.attr('modal-animation', 'true');
          }
          $compile(backdropDomEl)(backdropScope);
          $animate.enter(backdropDomEl, appendToElement);
        }
        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
        angularDomEl.attr({
          'template-url': modal.windowTemplateUrl,
          'window-class': modal.windowClass,
          'window-top-class': modal.windowTopClass,
          'size': modal.size,
          'index': openedWindows.length() - 1,
          'animate': 'animate'
        }).html(modal.content);
        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }
        $animate.enter($compile(angularDomEl)(modal.scope), appendToElement).then(function() {
          $animate.addClass(appendToElement, modalBodyClass);
        });
        openedWindows.top().value.modalDomEl = angularDomEl;
        openedWindows.top().value.modalOpener = modalOpener;
        $modalStack.clearFocusListCache();
      };
      function broadcastClosing(modalWindow, resultOrReason, closing) {
        return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }
      $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };
      $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
          return true;
        }
        return !modalWindow;
      };
      $modalStack.dismissAll = function(reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };
      $modalStack.getTop = function() {
        return openedWindows.top();
      };
      $modalStack.modalRendered = function(modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };
      $modalStack.focusFirstFocusableElement = function() {
        if (focusableElementList.length > 0) {
          focusableElementList[0].focus();
          return true;
        }
        return false;
      };
      $modalStack.focusLastFocusableElement = function() {
        if (focusableElementList.length > 0) {
          focusableElementList[focusableElementList.length - 1].focus();
          return true;
        }
        return false;
      };
      $modalStack.isFocusInFirstItem = function(evt) {
        if (focusableElementList.length > 0) {
          return (evt.target || evt.srcElement) === focusableElementList[0];
        }
        return false;
      };
      $modalStack.isFocusInLastItem = function(evt) {
        if (focusableElementList.length > 0) {
          return (evt.target || evt.srcElement) === focusableElementList[focusableElementList.length - 1];
        }
        return false;
      };
      $modalStack.clearFocusListCache = function() {
        focusableElementList = [];
        focusIndex = 0;
      };
      $modalStack.loadFocusElementList = function(modalWindow) {
        if (focusableElementList === undefined || !focusableElementList.length) {
          if (modalWindow) {
            var modalDomE1 = modalWindow.value.modalDomEl;
            if (modalDomE1 && modalDomE1.length) {
              focusableElementList = modalDomE1[0].querySelectorAll(tababbleSelector);
            }
          }
        }
      };
      return $modalStack;
    }]).provider('$uibModal', function() {
      var $modalProvider = {
        options: {
          animation: true,
          backdrop: true,
          keyboard: true
        },
        $get: ['$rootScope', '$q', '$document', '$templateRequest', '$controller', '$uibResolve', '$uibModalStack', function($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
          var $modal = {};
          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) : $templateRequest(angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl);
          }
          var promiseChain = null;
          $modal.getPromiseChain = function() {
            return promiseChain;
          };
          $modal.open = function(modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalClosedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              closed: modalClosedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function(result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function(reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            modalOptions.appendTo = modalOptions.appendTo || $document.find('body').eq(0);
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }
            var templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
            function resolveWithTemplate() {
              return templateAndResolvePromise;
            }
            var samePromise;
            samePromise = promiseChain = $q.all([promiseChain]).then(resolveWithTemplate, resolveWithTemplate).then(function resolveSuccess(tplAndVars) {
              var providedScope = modalOptions.scope || $rootScope;
              var modalScope = providedScope.$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;
              modalScope.$on('$destroy', function() {
                if (!modalScope.$$uibDestructionScheduled) {
                  modalScope.$dismiss('$uibUnscheduledDestruction');
                }
              });
              var ctrlInstance,
                  ctrlLocals = {};
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$uibModalInstance = modalInstance;
                angular.forEach(tplAndVars[1], function(value, key) {
                  ctrlLocals[key] = value;
                });
                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
                if (modalOptions.controllerAs) {
                  if (modalOptions.bindToController) {
                    ctrlInstance.$close = modalScope.$close;
                    ctrlInstance.$dismiss = modalScope.$dismiss;
                    angular.extend(ctrlInstance, providedScope);
                  }
                  modalScope[modalOptions.controllerAs] = ctrlInstance;
                }
              }
              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                renderDeferred: modalRenderDeferred,
                closedDeferred: modalClosedDeferred,
                content: tplAndVars[0],
                animation: modalOptions.animation,
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                backdropClass: modalOptions.backdropClass,
                windowTopClass: modalOptions.windowTopClass,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size,
                openedClass: modalOptions.openedClass,
                appendTo: modalOptions.appendTo
              });
              modalOpenedDeferred.resolve(true);
            }, function resolveError(reason) {
              modalOpenedDeferred.reject(reason);
              modalResultDeferred.reject(reason);
            })['finally'](function() {
              if (promiseChain === samePromise) {
                promiseChain = null;
              }
            });
            return modalInstance;
          };
          return $modal;
        }]
      };
      return $modalProvider;
    });
    angular.module('ui.bootstrap.paging', []).factory('uibPaging', ['$parse', function($parse) {
      return {create: function(ctrl, $scope, $attrs) {
          ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
          ctrl.ngModelCtrl = {$setViewValue: angular.noop};
          ctrl._watchers = [];
          ctrl.init = function(ngModelCtrl, config) {
            ctrl.ngModelCtrl = ngModelCtrl;
            ctrl.config = config;
            ngModelCtrl.$render = function() {
              ctrl.render();
            };
            if ($attrs.itemsPerPage) {
              ctrl._watchers.push($scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
                ctrl.itemsPerPage = parseInt(value, 10);
                $scope.totalPages = ctrl.calculateTotalPages();
                ctrl.updatePage();
              }));
            } else {
              ctrl.itemsPerPage = config.itemsPerPage;
            }
            $scope.$watch('totalItems', function(newTotal, oldTotal) {
              if (angular.isDefined(newTotal) || newTotal !== oldTotal) {
                $scope.totalPages = ctrl.calculateTotalPages();
                ctrl.updatePage();
              }
            });
          };
          ctrl.calculateTotalPages = function() {
            var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
            return Math.max(totalPages || 0, 1);
          };
          ctrl.render = function() {
            $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1;
          };
          $scope.selectPage = function(page, evt) {
            if (evt) {
              evt.preventDefault();
            }
            var clickAllowed = !$scope.ngDisabled || !evt;
            if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
              if (evt && evt.target) {
                evt.target.blur();
              }
              ctrl.ngModelCtrl.$setViewValue(page);
              ctrl.ngModelCtrl.$render();
            }
          };
          $scope.getText = function(key) {
            return $scope[key + 'Text'] || ctrl.config[key + 'Text'];
          };
          $scope.noPrevious = function() {
            return $scope.page === 1;
          };
          $scope.noNext = function() {
            return $scope.page === $scope.totalPages;
          };
          ctrl.updatePage = function() {
            ctrl.setNumPages($scope.$parent, $scope.totalPages);
            if ($scope.page > $scope.totalPages) {
              $scope.selectPage($scope.totalPages);
            } else {
              ctrl.ngModelCtrl.$render();
            }
          };
          $scope.$on('$destroy', function() {
            while (ctrl._watchers.length) {
              ctrl._watchers.shift()();
            }
          });
        }};
    }]);
    angular.module('ui.bootstrap.pager', ['ui.bootstrap.paging']).controller('UibPagerController', ['$scope', '$attrs', 'uibPaging', 'uibPagerConfig', function($scope, $attrs, uibPaging, uibPagerConfig) {
      $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align;
      uibPaging.create(this, $scope, $attrs);
    }]).constant('uibPagerConfig', {
      itemsPerPage: 10,
      previousText: '« Previous',
      nextText: 'Next »',
      align: true
    }).directive('uibPager', ['uibPagerConfig', function(uibPagerConfig) {
      return {
        scope: {
          totalItems: '=',
          previousText: '@',
          nextText: '@',
          ngDisabled: '='
        },
        require: ['uibPager', '?ngModel'],
        controller: 'UibPagerController',
        controllerAs: 'pager',
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/pager/pager.html';
        },
        replace: true,
        link: function(scope, element, attrs, ctrls) {
          var paginationCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (!ngModelCtrl) {
            return;
          }
          paginationCtrl.init(ngModelCtrl, uibPagerConfig);
        }
      };
    }]);
    angular.module('ui.bootstrap.pagination', ['ui.bootstrap.paging']).controller('UibPaginationController', ['$scope', '$attrs', '$parse', 'uibPaging', 'uibPaginationConfig', function($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
      var ctrl = this;
      var maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
          rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
          forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
          boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers;
      $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks;
      $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks;
      uibPaging.create(this, $scope, $attrs);
      if ($attrs.maxSize) {
        ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          ctrl.render();
        }));
      }
      function makePage(number, text, isActive) {
        return {
          number: number,
          text: text,
          active: isActive
        };
      }
      function getPages(currentPage, totalPages) {
        var pages = [];
        var startPage = 1,
            endPage = totalPages;
        var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;
        if (isMaxSized) {
          if (rotate) {
            startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
            endPage = startPage + maxSize - 1;
            if (endPage > totalPages) {
              endPage = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, number === currentPage);
          pages.push(page);
        }
        if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
          if (startPage > 1) {
            if (!boundaryLinkNumbers || startPage > 3) {
              var previousPageSet = makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }
            if (boundaryLinkNumbers) {
              if (startPage === 3) {
                var secondPageLink = makePage(2, '2', false);
                pages.unshift(secondPageLink);
              }
              var firstPageLink = makePage(1, '1', false);
              pages.unshift(firstPageLink);
            }
          }
          if (endPage < totalPages) {
            if (!boundaryLinkNumbers || endPage < totalPages - 2) {
              var nextPageSet = makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
            if (boundaryLinkNumbers) {
              if (endPage === totalPages - 2) {
                var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
                pages.push(secondToLastPageLink);
              }
              var lastPageLink = makePage(totalPages, totalPages, false);
              pages.push(lastPageLink);
            }
          }
        }
        return pages;
      }
      var originalRender = this.render;
      this.render = function() {
        originalRender();
        if ($scope.page > 0 && $scope.page <= $scope.totalPages) {
          $scope.pages = getPages($scope.page, $scope.totalPages);
        }
      };
    }]).constant('uibPaginationConfig', {
      itemsPerPage: 10,
      boundaryLinks: false,
      boundaryLinkNumbers: false,
      directionLinks: true,
      firstText: 'First',
      previousText: 'Previous',
      nextText: 'Next',
      lastText: 'Last',
      rotate: true,
      forceEllipses: false
    }).directive('uibPagination', ['$parse', 'uibPaginationConfig', function($parse, uibPaginationConfig) {
      return {
        scope: {
          totalItems: '=',
          firstText: '@',
          previousText: '@',
          nextText: '@',
          lastText: '@',
          ngDisabled: '='
        },
        require: ['uibPagination', '?ngModel'],
        controller: 'UibPaginationController',
        controllerAs: 'pagination',
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || 'uib/template/pagination/pagination.html';
        },
        replace: true,
        link: function(scope, element, attrs, ctrls) {
          var paginationCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (!ngModelCtrl) {
            return;
          }
          paginationCtrl.init(ngModelCtrl, uibPaginationConfig);
        }
      };
    }]);
    angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.stackedMap']).provider('$uibTooltip', function() {
      var defaultOptions = {
        placement: 'top',
        placementClassPrefix: '',
        animation: true,
        popupDelay: 0,
        popupCloseDelay: 0,
        useContentExp: false
      };
      var triggerMap = {
        'mouseenter': 'mouseleave',
        'click': 'click',
        'outsideClick': 'outsideClick',
        'focus': 'blur',
        'none': ''
      };
      var globalOptions = {};
      this.options = function(value) {
        angular.extend(globalOptions, value);
      };
      this.setTriggers = function setTriggers(triggers) {
        angular.extend(triggerMap, triggers);
      };
      function snake_case(name) {
        var regexp = /[A-Z]/g;
        var separator = '-';
        return name.replace(regexp, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }
      this.$get = ['$window', '$compile', '$timeout', '$document', '$uibPosition', '$interpolate', '$rootScope', '$parse', '$$stackedMap', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
        var openedTooltips = $$stackedMap.createNew();
        $document.on('keypress', keypressListener);
        $rootScope.$on('$destroy', function() {
          $document.off('keypress', keypressListener);
        });
        function keypressListener(e) {
          if (e.which === 27) {
            var last = openedTooltips.top();
            if (last) {
              last.value.close();
              openedTooltips.removeTop();
              last = null;
            }
          }
        }
        return function $tooltip(ttType, prefix, defaultTriggerShow, options) {
          options = angular.extend({}, defaultOptions, globalOptions, options);
          function getTriggers(trigger) {
            var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
            var hide = show.map(function(trigger) {
              return triggerMap[trigger] || trigger;
            });
            return {
              show: show,
              hide: hide
            };
          }
          var directiveName = snake_case(ttType);
          var startSym = $interpolate.startSymbol();
          var endSym = $interpolate.endSymbol();
          var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'title' + endSym + '" ' + (options.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + startSym + 'content' + endSym + '" ') + 'placement="' + startSym + 'placement' + endSym + '" ' + 'popup-class="' + startSym + 'popupClass' + endSym + '" ' + 'animation="animation" ' + 'is-open="isOpen"' + 'origin-scope="origScope" ' + 'style="visibility: hidden; display: block; top: -9999px; left: -9999px;"' + '>' + '</div>';
          return {compile: function(tElem, tAttrs) {
              var tooltipLinker = $compile(template);
              return function link(scope, element, attrs, tooltipCtrl) {
                var tooltip;
                var tooltipLinkedScope;
                var transitionTimeout;
                var showTimeout;
                var hideTimeout;
                var positionTimeout;
                var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
                var triggers = getTriggers(undefined);
                var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
                var ttScope = scope.$new(true);
                var repositionScheduled = false;
                var isOpenParse = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
                var contentParse = options.useContentExp ? $parse(attrs[ttType]) : false;
                var observers = [];
                var positionTooltip = function() {
                  if (!tooltip || !tooltip.html()) {
                    return;
                  }
                  if (!positionTimeout) {
                    positionTimeout = $timeout(function() {
                      tooltip.css({
                        top: 0,
                        left: 0
                      });
                      var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                      tooltip.css({
                        top: ttPosition.top + 'px',
                        left: ttPosition.left + 'px',
                        visibility: 'visible'
                      });
                      if (options.placementClassPrefix) {
                        tooltip.removeClass('top bottom left right');
                      }
                      tooltip.removeClass(options.placementClassPrefix + 'top ' + options.placementClassPrefix + 'top-left ' + options.placementClassPrefix + 'top-right ' + options.placementClassPrefix + 'bottom ' + options.placementClassPrefix + 'bottom-left ' + options.placementClassPrefix + 'bottom-right ' + options.placementClassPrefix + 'left ' + options.placementClassPrefix + 'left-top ' + options.placementClassPrefix + 'left-bottom ' + options.placementClassPrefix + 'right ' + options.placementClassPrefix + 'right-top ' + options.placementClassPrefix + 'right-bottom');
                      var placement = ttPosition.placement.split('-');
                      tooltip.addClass(placement[0] + ' ' + options.placementClassPrefix + ttPosition.placement);
                      $position.positionArrow(tooltip, ttPosition.placement);
                      positionTimeout = null;
                    }, 0, false);
                  }
                };
                ttScope.origScope = scope;
                ttScope.isOpen = false;
                openedTooltips.add(ttScope, {close: hide});
                function toggleTooltipBind() {
                  if (!ttScope.isOpen) {
                    showTooltipBind();
                  } else {
                    hideTooltipBind();
                  }
                }
                function showTooltipBind() {
                  if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                    return;
                  }
                  cancelHide();
                  prepareTooltip();
                  if (ttScope.popupDelay) {
                    if (!showTimeout) {
                      showTimeout = $timeout(show, ttScope.popupDelay, false);
                    }
                  } else {
                    show();
                  }
                }
                function hideTooltipBind() {
                  cancelShow();
                  if (ttScope.popupCloseDelay) {
                    if (!hideTimeout) {
                      hideTimeout = $timeout(hide, ttScope.popupCloseDelay, false);
                    }
                  } else {
                    hide();
                  }
                }
                function show() {
                  cancelShow();
                  cancelHide();
                  if (!ttScope.content) {
                    return angular.noop;
                  }
                  createTooltip();
                  ttScope.$evalAsync(function() {
                    ttScope.isOpen = true;
                    assignIsOpen(true);
                    positionTooltip();
                  });
                }
                function cancelShow() {
                  if (showTimeout) {
                    $timeout.cancel(showTimeout);
                    showTimeout = null;
                  }
                  if (positionTimeout) {
                    $timeout.cancel(positionTimeout);
                    positionTimeout = null;
                  }
                }
                function hide() {
                  if (!ttScope) {
                    return;
                  }
                  ttScope.$evalAsync(function() {
                    if (ttScope) {
                      ttScope.isOpen = false;
                      assignIsOpen(false);
                      if (ttScope.animation) {
                        if (!transitionTimeout) {
                          transitionTimeout = $timeout(removeTooltip, 150, false);
                        }
                      } else {
                        removeTooltip();
                      }
                    }
                  });
                }
                function cancelHide() {
                  if (hideTimeout) {
                    $timeout.cancel(hideTimeout);
                    hideTimeout = null;
                  }
                  if (transitionTimeout) {
                    $timeout.cancel(transitionTimeout);
                    transitionTimeout = null;
                  }
                }
                function createTooltip() {
                  if (tooltip) {
                    return;
                  }
                  tooltipLinkedScope = ttScope.$new();
                  tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
                    if (appendToBody) {
                      $document.find('body').append(tooltip);
                    } else {
                      element.after(tooltip);
                    }
                  });
                  prepObservers();
                }
                function removeTooltip() {
                  cancelShow();
                  cancelHide();
                  unregisterObservers();
                  if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                  }
                  if (tooltipLinkedScope) {
                    tooltipLinkedScope.$destroy();
                    tooltipLinkedScope = null;
                  }
                }
                function prepareTooltip() {
                  ttScope.title = attrs[prefix + 'Title'];
                  if (contentParse) {
                    ttScope.content = contentParse(scope);
                  } else {
                    ttScope.content = attrs[ttType];
                  }
                  ttScope.popupClass = attrs[prefix + 'Class'];
                  ttScope.placement = angular.isDefined(attrs[prefix + 'Placement']) ? attrs[prefix + 'Placement'] : options.placement;
                  var delay = parseInt(attrs[prefix + 'PopupDelay'], 10);
                  var closeDelay = parseInt(attrs[prefix + 'PopupCloseDelay'], 10);
                  ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
                  ttScope.popupCloseDelay = !isNaN(closeDelay) ? closeDelay : options.popupCloseDelay;
                }
                function assignIsOpen(isOpen) {
                  if (isOpenParse && angular.isFunction(isOpenParse.assign)) {
                    isOpenParse.assign(scope, isOpen);
                  }
                }
                ttScope.contentExp = function() {
                  return ttScope.content;
                };
                attrs.$observe('disabled', function(val) {
                  if (val) {
                    cancelShow();
                  }
                  if (val && ttScope.isOpen) {
                    hide();
                  }
                });
                if (isOpenParse) {
                  scope.$watch(isOpenParse, function(val) {
                    if (ttScope && !val === ttScope.isOpen) {
                      toggleTooltipBind();
                    }
                  });
                }
                function prepObservers() {
                  observers.length = 0;
                  if (contentParse) {
                    observers.push(scope.$watch(contentParse, function(val) {
                      ttScope.content = val;
                      if (!val && ttScope.isOpen) {
                        hide();
                      }
                    }));
                    observers.push(tooltipLinkedScope.$watch(function() {
                      if (!repositionScheduled) {
                        repositionScheduled = true;
                        tooltipLinkedScope.$$postDigest(function() {
                          repositionScheduled = false;
                          if (ttScope && ttScope.isOpen) {
                            positionTooltip();
                          }
                        });
                      }
                    }));
                  } else {
                    observers.push(attrs.$observe(ttType, function(val) {
                      ttScope.content = val;
                      if (!val && ttScope.isOpen) {
                        hide();
                      } else {
                        positionTooltip();
                      }
                    }));
                  }
                  observers.push(attrs.$observe(prefix + 'Title', function(val) {
                    ttScope.title = val;
                    if (ttScope.isOpen) {
                      positionTooltip();
                    }
                  }));
                  observers.push(attrs.$observe(prefix + 'Placement', function(val) {
                    ttScope.placement = val ? val : options.placement;
                    if (ttScope.isOpen) {
                      positionTooltip();
                    }
                  }));
                }
                function unregisterObservers() {
                  if (observers.length) {
                    angular.forEach(observers, function(observer) {
                      observer();
                    });
                    observers.length = 0;
                  }
                }
                function bodyHideTooltipBind(e) {
                  if (!ttScope || !ttScope.isOpen || !tooltip) {
                    return;
                  }
                  if (!element[0].contains(e.target) && !tooltip[0].contains(e.target)) {
                    hideTooltipBind();
                  }
                }
                var unregisterTriggers = function() {
                  triggers.show.forEach(function(trigger) {
                    if (trigger === 'outsideClick') {
                      element.off('click', toggleTooltipBind);
                    } else {
                      element.off(trigger, showTooltipBind);
                      element.off(trigger, toggleTooltipBind);
                    }
                  });
                  triggers.hide.forEach(function(trigger) {
                    if (trigger === 'outsideClick') {
                      $document.off('click', bodyHideTooltipBind);
                    } else {
                      element.off(trigger, hideTooltipBind);
                    }
                  });
                };
                function prepTriggers() {
                  var val = attrs[prefix + 'Trigger'];
                  unregisterTriggers();
                  triggers = getTriggers(val);
                  if (triggers.show !== 'none') {
                    triggers.show.forEach(function(trigger, idx) {
                      if (trigger === 'outsideClick') {
                        element.on('click', toggleTooltipBind);
                        $document.on('click', bodyHideTooltipBind);
                      } else if (trigger === triggers.hide[idx]) {
                        element.on(trigger, toggleTooltipBind);
                      } else if (trigger) {
                        element.on(trigger, showTooltipBind);
                        element.on(triggers.hide[idx], hideTooltipBind);
                      }
                      element.on('keypress', function(e) {
                        if (e.which === 27) {
                          hideTooltipBind();
                        }
                      });
                    });
                  }
                }
                prepTriggers();
                var animation = scope.$eval(attrs[prefix + 'Animation']);
                ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
                var appendToBodyVal;
                var appendKey = prefix + 'AppendToBody';
                if (appendKey in attrs && attrs[appendKey] === undefined) {
                  appendToBodyVal = true;
                } else {
                  appendToBodyVal = scope.$eval(attrs[appendKey]);
                }
                appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
                if (appendToBody) {
                  scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                    if (ttScope.isOpen) {
                      hide();
                    }
                  });
                }
                scope.$on('$destroy', function onDestroyTooltip() {
                  unregisterTriggers();
                  removeTooltip();
                  openedTooltips.remove(ttScope);
                  ttScope = null;
                });
              };
            }};
        };
      }];
    }).directive('uibTooltipTemplateTransclude', ['$animate', '$sce', '$compile', '$templateRequest', function($animate, $sce, $compile, $templateRequest) {
      return {link: function(scope, elem, attrs) {
          var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);
          var changeCounter = 0,
              currentScope,
              previousElement,
              currentElement;
          var cleanupLastIncludeContent = function() {
            if (previousElement) {
              previousElement.remove();
              previousElement = null;
            }
            if (currentScope) {
              currentScope.$destroy();
              currentScope = null;
            }
            if (currentElement) {
              $animate.leave(currentElement).then(function() {
                previousElement = null;
              });
              previousElement = currentElement;
              currentElement = null;
            }
          };
          scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function(src) {
            var thisChangeId = ++changeCounter;
            if (src) {
              $templateRequest(src, true).then(function(response) {
                if (thisChangeId !== changeCounter) {
                  return;
                }
                var newScope = origScope.$new();
                var template = response;
                var clone = $compile(template)(newScope, function(clone) {
                  cleanupLastIncludeContent();
                  $animate.enter(clone, elem);
                });
                currentScope = newScope;
                currentElement = clone;
                currentScope.$emit('$includeContentLoaded', src);
              }, function() {
                if (thisChangeId === changeCounter) {
                  cleanupLastIncludeContent();
                  scope.$emit('$includeContentError', src);
                }
              });
              scope.$emit('$includeContentRequested', src);
            } else {
              cleanupLastIncludeContent();
            }
          });
          scope.$on('$destroy', cleanupLastIncludeContent);
        }};
    }]).directive('uibTooltipClasses', ['$uibPosition', function($uibPosition) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          if (scope.placement) {
            var position = $uibPosition.parsePlacement(scope.placement);
            element.addClass(position[0]);
          } else {
            element.addClass('top');
          }
          if (scope.popupClass) {
            element.addClass(scope.popupClass);
          }
          if (scope.animation()) {
            element.addClass(attrs.tooltipAnimationClass);
          }
        }
      };
    }]).directive('uibTooltipPopup', function() {
      return {
        replace: true,
        scope: {
          content: '@',
          placement: '@',
          popupClass: '@',
          animation: '&',
          isOpen: '&'
        },
        templateUrl: 'uib/template/tooltip/tooltip-popup.html'
      };
    }).directive('uibTooltip', ['$uibTooltip', function($uibTooltip) {
      return $uibTooltip('uibTooltip', 'tooltip', 'mouseenter');
    }]).directive('uibTooltipTemplatePopup', function() {
      return {
        replace: true,
        scope: {
          contentExp: '&',
          placement: '@',
          popupClass: '@',
          animation: '&',
          isOpen: '&',
          originScope: '&'
        },
        templateUrl: 'uib/template/tooltip/tooltip-template-popup.html'
      };
    }).directive('uibTooltipTemplate', ['$uibTooltip', function($uibTooltip) {
      return $uibTooltip('uibTooltipTemplate', 'tooltip', 'mouseenter', {useContentExp: true});
    }]).directive('uibTooltipHtmlPopup', function() {
      return {
        replace: true,
        scope: {
          contentExp: '&',
          placement: '@',
          popupClass: '@',
          animation: '&',
          isOpen: '&'
        },
        templateUrl: 'uib/template/tooltip/tooltip-html-popup.html'
      };
    }).directive('uibTooltipHtml', ['$uibTooltip', function($uibTooltip) {
      return $uibTooltip('uibTooltipHtml', 'tooltip', 'mouseenter', {useContentExp: true});
    }]);
    angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('uibPopoverTemplatePopup', function() {
      return {
        replace: true,
        scope: {
          title: '@',
          contentExp: '&',
          placement: '@',
          popupClass: '@',
          animation: '&',
          isOpen: '&',
          originScope: '&'
        },
        templateUrl: 'uib/template/popover/popover-template.html'
      };
    }).directive('uibPopoverTemplate', ['$uibTooltip', function($uibTooltip) {
      return $uibTooltip('uibPopoverTemplate', 'popover', 'click', {useContentExp: true});
    }]).directive('uibPopoverHtmlPopup', function() {
      return {
        replace: true,
        scope: {
          contentExp: '&',
          title: '@',
          placement: '@',
          popupClass: '@',
          animation: '&',
          isOpen: '&'
        },
        templateUrl: 'uib/template/popover/popover-html.html'
      };
    }).directive('uibPopoverHtml', ['$uibTooltip', function($uibTooltip) {
      return $uibTooltip('uibPopoverHtml', 'popover', 'click', {useContentExp: true});
    }]).directive('uibPopoverPopup', function() {
      return {
        replace: true,
        scope: {
          title: '@',
          content: '@',
          placement: '@',
          popupClass: '@',
          animation: '&',
          isOpen: '&'
        },
        templateUrl: 'uib/template/popover/popover.html'
      };
    }).directive('uibPopover', ['$uibTooltip', function($uibTooltip) {
      return $uibTooltip('uibPopover', 'popover', 'click');
    }]);
    angular.module('ui.bootstrap.progressbar', []).constant('uibProgressConfig', {
      animate: true,
      max: 100
    }).controller('UibProgressController', ['$scope', '$attrs', 'uibProgressConfig', function($scope, $attrs, progressConfig) {
      var self = this,
          animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
      this.bars = [];
      $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;
      this.addBar = function(bar, element, attrs) {
        if (!animate) {
          element.css({'transition': 'none'});
        }
        this.bars.push(bar);
        bar.max = $scope.max;
        bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : 'progressbar';
        bar.$watch('value', function(value) {
          bar.recalculatePercentage();
        });
        bar.recalculatePercentage = function() {
          var totalPercentage = self.bars.reduce(function(total, bar) {
            bar.percent = +(100 * bar.value / bar.max).toFixed(2);
            return total + bar.percent;
          }, 0);
          if (totalPercentage > 100) {
            bar.percent -= totalPercentage - 100;
          }
        };
        bar.$on('$destroy', function() {
          element = null;
          self.removeBar(bar);
        });
      };
      this.removeBar = function(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
        this.bars.forEach(function(bar) {
          bar.recalculatePercentage();
        });
      };
      $scope.$watch('max', function(max) {
        self.bars.forEach(function(bar) {
          bar.max = $scope.max;
          bar.recalculatePercentage();
        });
      });
    }]).directive('uibProgress', function() {
      return {
        replace: true,
        transclude: true,
        controller: 'UibProgressController',
        require: 'uibProgress',
        scope: {max: '=?'},
        templateUrl: 'uib/template/progressbar/progress.html'
      };
    }).directive('uibBar', function() {
      return {
        replace: true,
        transclude: true,
        require: '^uibProgress',
        scope: {
          value: '=',
          type: '@'
        },
        templateUrl: 'uib/template/progressbar/bar.html',
        link: function(scope, element, attrs, progressCtrl) {
          progressCtrl.addBar(scope, element, attrs);
        }
      };
    }).directive('uibProgressbar', function() {
      return {
        replace: true,
        transclude: true,
        controller: 'UibProgressController',
        scope: {
          value: '=',
          max: '=?',
          type: '@'
        },
        templateUrl: 'uib/template/progressbar/progressbar.html',
        link: function(scope, element, attrs, progressCtrl) {
          progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title});
        }
      };
    });
    angular.module('ui.bootstrap.rating', []).constant('uibRatingConfig', {
      max: 5,
      stateOn: null,
      stateOff: null,
      titles: ['one', 'two', 'three', 'four', 'five']
    }).controller('UibRatingController', ['$scope', '$attrs', 'uibRatingConfig', function($scope, $attrs, ratingConfig) {
      var ngModelCtrl = {$setViewValue: angular.noop};
      this.init = function(ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_;
        ngModelCtrl.$render = this.render;
        ngModelCtrl.$formatters.push(function(value) {
          if (angular.isNumber(value) && value << 0 !== value) {
            value = Math.round(value);
          }
          return value;
        });
        this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
        this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
        var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
        this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ? tmpTitles : ratingConfig.titles;
        var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
        $scope.range = this.buildTemplateObjects(ratingStates);
      };
      this.buildTemplateObjects = function(states) {
        for (var i = 0,
            n = states.length; i < n; i++) {
          states[i] = angular.extend({index: i}, {
            stateOn: this.stateOn,
            stateOff: this.stateOff,
            title: this.getTitle(i)
          }, states[i]);
        }
        return states;
      };
      this.getTitle = function(index) {
        if (index >= this.titles.length) {
          return index + 1;
        }
        return this.titles[index];
      };
      $scope.rate = function(value) {
        if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
          ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue === value ? 0 : value);
          ngModelCtrl.$render();
        }
      };
      $scope.enter = function(value) {
        if (!$scope.readonly) {
          $scope.value = value;
        }
        $scope.onHover({value: value});
      };
      $scope.reset = function() {
        $scope.value = ngModelCtrl.$viewValue;
        $scope.onLeave();
      };
      $scope.onKeydown = function(evt) {
        if (/(37|38|39|40)/.test(evt.which)) {
          evt.preventDefault();
          evt.stopPropagation();
          $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
        }
      };
      this.render = function() {
        $scope.value = ngModelCtrl.$viewValue;
      };
    }]).directive('uibRating', function() {
      return {
        require: ['uibRating', 'ngModel'],
        scope: {
          readonly: '=?',
          onHover: '&',
          onLeave: '&'
        },
        controller: 'UibRatingController',
        templateUrl: 'uib/template/rating/rating.html',
        replace: true,
        link: function(scope, element, attrs, ctrls) {
          var ratingCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          ratingCtrl.init(ngModelCtrl);
        }
      };
    });
    angular.module('ui.bootstrap.tabs', []).controller('UibTabsetController', ['$scope', function($scope) {
      var ctrl = this,
          tabs = ctrl.tabs = $scope.tabs = [];
      ctrl.select = function(selectedTab) {
        angular.forEach(tabs, function(tab) {
          if (tab.active && tab !== selectedTab) {
            tab.active = false;
            tab.onDeselect();
            selectedTab.selectCalled = false;
          }
        });
        selectedTab.active = true;
        if (!selectedTab.selectCalled) {
          selectedTab.onSelect();
          selectedTab.selectCalled = true;
        }
      };
      ctrl.addTab = function addTab(tab) {
        tabs.push(tab);
        if (tabs.length === 1 && tab.active !== false) {
          tab.active = true;
        } else if (tab.active) {
          ctrl.select(tab);
        } else {
          tab.active = false;
        }
      };
      ctrl.removeTab = function removeTab(tab) {
        var index = tabs.indexOf(tab);
        if (tab.active && tabs.length > 1 && !destroyed) {
          var newActiveIndex = index === tabs.length - 1 ? index - 1 : index + 1;
          ctrl.select(tabs[newActiveIndex]);
        }
        tabs.splice(index, 1);
      };
      var destroyed;
      $scope.$on('$destroy', function() {
        destroyed = true;
      });
    }]).directive('uibTabset', function() {
      return {
        transclude: true,
        replace: true,
        scope: {type: '@'},
        controller: 'UibTabsetController',
        templateUrl: 'uib/template/tabs/tabset.html',
        link: function(scope, element, attrs) {
          scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
          scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
        }
      };
    }).directive('uibTab', ['$parse', function($parse) {
      return {
        require: '^uibTabset',
        replace: true,
        templateUrl: 'uib/template/tabs/tab.html',
        transclude: true,
        scope: {
          active: '=?',
          heading: '@',
          onSelect: '&select',
          onDeselect: '&deselect'
        },
        controller: function() {},
        controllerAs: 'tab',
        link: function(scope, elm, attrs, tabsetCtrl, transclude) {
          scope.$watch('active', function(active) {
            if (active) {
              tabsetCtrl.select(scope);
            }
          });
          scope.disabled = false;
          if (attrs.disable) {
            scope.$parent.$watch($parse(attrs.disable), function(value) {
              scope.disabled = !!value;
            });
          }
          scope.select = function() {
            if (!scope.disabled) {
              scope.active = true;
            }
          };
          tabsetCtrl.addTab(scope);
          scope.$on('$destroy', function() {
            tabsetCtrl.removeTab(scope);
          });
          scope.$transcludeFn = transclude;
        }
      };
    }]).directive('uibTabHeadingTransclude', function() {
      return {
        restrict: 'A',
        require: '^uibTab',
        link: function(scope, elm) {
          scope.$watch('headingElement', function updateHeadingElement(heading) {
            if (heading) {
              elm.html('');
              elm.append(heading);
            }
          });
        }
      };
    }).directive('uibTabContentTransclude', function() {
      return {
        restrict: 'A',
        require: '^uibTabset',
        link: function(scope, elm, attrs) {
          var tab = scope.$eval(attrs.uibTabContentTransclude);
          tab.$transcludeFn(tab.$parent, function(contents) {
            angular.forEach(contents, function(node) {
              if (isTabHeading(node)) {
                tab.headingElement = node;
              } else {
                elm.append(node);
              }
            });
          });
        }
      };
      function isTabHeading(node) {
        return node.tagName && (node.hasAttribute('uib-tab-heading') || node.hasAttribute('data-uib-tab-heading') || node.hasAttribute('x-uib-tab-heading') || node.tagName.toLowerCase() === 'uib-tab-heading' || node.tagName.toLowerCase() === 'data-uib-tab-heading' || node.tagName.toLowerCase() === 'x-uib-tab-heading');
      }
    });
    angular.module('ui.bootstrap.timepicker', []).constant('uibTimepickerConfig', {
      hourStep: 1,
      minuteStep: 1,
      secondStep: 1,
      showMeridian: true,
      showSeconds: false,
      meridians: null,
      readonlyInput: false,
      mousewheel: true,
      arrowkeys: true,
      showSpinners: true,
      templateUrl: 'uib/template/timepicker/timepicker.html'
    }).controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
      var selected = new Date(),
          watchers = [],
          ngModelCtrl = {$setViewValue: angular.noop},
          meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
      $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
      $element.removeAttr('tabindex');
      this.init = function(ngModelCtrl_, inputs) {
        ngModelCtrl = ngModelCtrl_;
        ngModelCtrl.$render = this.render;
        ngModelCtrl.$formatters.unshift(function(modelValue) {
          return modelValue ? new Date(modelValue) : null;
        });
        var hoursInputEl = inputs.eq(0),
            minutesInputEl = inputs.eq(1),
            secondsInputEl = inputs.eq(2);
        var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
        if (mousewheel) {
          this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
        }
        var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
        if (arrowkeys) {
          this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
        }
        $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
        this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
      };
      var hourStep = timepickerConfig.hourStep;
      if ($attrs.hourStep) {
        watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
          hourStep = +value;
        }));
      }
      var minuteStep = timepickerConfig.minuteStep;
      if ($attrs.minuteStep) {
        watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
          minuteStep = +value;
        }));
      }
      var min;
      watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
        var dt = new Date(value);
        min = isNaN(dt) ? undefined : dt;
      }));
      var max;
      watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
        var dt = new Date(value);
        max = isNaN(dt) ? undefined : dt;
      }));
      var disabled = false;
      if ($attrs.ngDisabled) {
        watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
          disabled = value;
        }));
      }
      $scope.noIncrementHours = function() {
        var incrementedSelected = addMinutes(selected, hourStep * 60);
        return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min;
      };
      $scope.noDecrementHours = function() {
        var decrementedSelected = addMinutes(selected, -hourStep * 60);
        return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max;
      };
      $scope.noIncrementMinutes = function() {
        var incrementedSelected = addMinutes(selected, minuteStep);
        return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min;
      };
      $scope.noDecrementMinutes = function() {
        var decrementedSelected = addMinutes(selected, -minuteStep);
        return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max;
      };
      $scope.noIncrementSeconds = function() {
        var incrementedSelected = addSeconds(selected, secondStep);
        return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min;
      };
      $scope.noDecrementSeconds = function() {
        var decrementedSelected = addSeconds(selected, -secondStep);
        return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max;
      };
      $scope.noToggleMeridian = function() {
        if (selected.getHours() < 12) {
          return disabled || addMinutes(selected, 12 * 60) > max;
        }
        return disabled || addMinutes(selected, -12 * 60) < min;
      };
      var secondStep = timepickerConfig.secondStep;
      if ($attrs.secondStep) {
        watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
          secondStep = +value;
        }));
      }
      $scope.showSeconds = timepickerConfig.showSeconds;
      if ($attrs.showSeconds) {
        watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
          $scope.showSeconds = !!value;
        }));
      }
      $scope.showMeridian = timepickerConfig.showMeridian;
      if ($attrs.showMeridian) {
        watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
          $scope.showMeridian = !!value;
          if (ngModelCtrl.$error.time) {
            var hours = getHoursFromTemplate(),
                minutes = getMinutesFromTemplate();
            if (angular.isDefined(hours) && angular.isDefined(minutes)) {
              selected.setHours(hours);
              refresh();
            }
          } else {
            updateTemplate();
          }
        }));
      }
      function getHoursFromTemplate() {
        var hours = +$scope.hours;
        var valid = $scope.showMeridian ? hours > 0 && hours < 13 : hours >= 0 && hours < 24;
        if (!valid) {
          return undefined;
        }
        if ($scope.showMeridian) {
          if (hours === 12) {
            hours = 0;
          }
          if ($scope.meridian === meridians[1]) {
            hours = hours + 12;
          }
        }
        return hours;
      }
      function getMinutesFromTemplate() {
        var minutes = +$scope.minutes;
        return minutes >= 0 && minutes < 60 ? minutes : undefined;
      }
      function getSecondsFromTemplate() {
        var seconds = +$scope.seconds;
        return seconds >= 0 && seconds < 60 ? seconds : undefined;
      }
      function pad(value) {
        if (value === null) {
          return '';
        }
        return angular.isDefined(value) && value.toString().length < 2 ? '0' + value : value.toString();
      }
      this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
        var isScrollingUp = function(e) {
          if (e.originalEvent) {
            e = e.originalEvent;
          }
          var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
          return e.detail || delta > 0;
        };
        hoursInputEl.bind('mousewheel wheel', function(e) {
          if (!disabled) {
            $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
          }
          e.preventDefault();
        });
        minutesInputEl.bind('mousewheel wheel', function(e) {
          if (!disabled) {
            $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
          }
          e.preventDefault();
        });
        secondsInputEl.bind('mousewheel wheel', function(e) {
          if (!disabled) {
            $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
          }
          e.preventDefault();
        });
      };
      this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
        hoursInputEl.bind('keydown', function(e) {
          if (!disabled) {
            if (e.which === 38) {
              e.preventDefault();
              $scope.incrementHours();
              $scope.$apply();
            } else if (e.which === 40) {
              e.preventDefault();
              $scope.decrementHours();
              $scope.$apply();
            }
          }
        });
        minutesInputEl.bind('keydown', function(e) {
          if (!disabled) {
            if (e.which === 38) {
              e.preventDefault();
              $scope.incrementMinutes();
              $scope.$apply();
            } else if (e.which === 40) {
              e.preventDefault();
              $scope.decrementMinutes();
              $scope.$apply();
            }
          }
        });
        secondsInputEl.bind('keydown', function(e) {
          if (!disabled) {
            if (e.which === 38) {
              e.preventDefault();
              $scope.incrementSeconds();
              $scope.$apply();
            } else if (e.which === 40) {
              e.preventDefault();
              $scope.decrementSeconds();
              $scope.$apply();
            }
          }
        });
      };
      this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
        if ($scope.readonlyInput) {
          $scope.updateHours = angular.noop;
          $scope.updateMinutes = angular.noop;
          $scope.updateSeconds = angular.noop;
          return;
        }
        var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
          ngModelCtrl.$setViewValue(null);
          ngModelCtrl.$setValidity('time', false);
          if (angular.isDefined(invalidHours)) {
            $scope.invalidHours = invalidHours;
          }
          if (angular.isDefined(invalidMinutes)) {
            $scope.invalidMinutes = invalidMinutes;
          }
          if (angular.isDefined(invalidSeconds)) {
            $scope.invalidSeconds = invalidSeconds;
          }
        };
        $scope.updateHours = function() {
          var hours = getHoursFromTemplate(),
              minutes = getMinutesFromTemplate();
          ngModelCtrl.$setDirty();
          if (angular.isDefined(hours) && angular.isDefined(minutes)) {
            selected.setHours(hours);
            selected.setMinutes(minutes);
            if (selected < min || selected > max) {
              invalidate(true);
            } else {
              refresh('h');
            }
          } else {
            invalidate(true);
          }
        };
        hoursInputEl.bind('blur', function(e) {
          ngModelCtrl.$setTouched();
          if ($scope.hours === null || $scope.hours === '') {
            invalidate(true);
          } else if (!$scope.invalidHours && $scope.hours < 10) {
            $scope.$apply(function() {
              $scope.hours = pad($scope.hours);
            });
          }
        });
        $scope.updateMinutes = function() {
          var minutes = getMinutesFromTemplate(),
              hours = getHoursFromTemplate();
          ngModelCtrl.$setDirty();
          if (angular.isDefined(minutes) && angular.isDefined(hours)) {
            selected.setHours(hours);
            selected.setMinutes(minutes);
            if (selected < min || selected > max) {
              invalidate(undefined, true);
            } else {
              refresh('m');
            }
          } else {
            invalidate(undefined, true);
          }
        };
        minutesInputEl.bind('blur', function(e) {
          ngModelCtrl.$setTouched();
          if ($scope.minutes === null) {
            invalidate(undefined, true);
          } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
            $scope.$apply(function() {
              $scope.minutes = pad($scope.minutes);
            });
          }
        });
        $scope.updateSeconds = function() {
          var seconds = getSecondsFromTemplate();
          ngModelCtrl.$setDirty();
          if (angular.isDefined(seconds)) {
            selected.setSeconds(seconds);
            refresh('s');
          } else {
            invalidate(undefined, undefined, true);
          }
        };
        secondsInputEl.bind('blur', function(e) {
          if (!$scope.invalidSeconds && $scope.seconds < 10) {
            $scope.$apply(function() {
              $scope.seconds = pad($scope.seconds);
            });
          }
        });
      };
      this.render = function() {
        var date = ngModelCtrl.$viewValue;
        if (isNaN(date)) {
          ngModelCtrl.$setValidity('time', false);
          $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        } else {
          if (date) {
            selected = date;
          }
          if (selected < min || selected > max) {
            ngModelCtrl.$setValidity('time', false);
            $scope.invalidHours = true;
            $scope.invalidMinutes = true;
          } else {
            makeValid();
          }
          updateTemplate();
        }
      };
      function refresh(keyboardChange) {
        makeValid();
        ngModelCtrl.$setViewValue(new Date(selected));
        updateTemplate(keyboardChange);
      }
      function makeValid() {
        ngModelCtrl.$setValidity('time', true);
        $scope.invalidHours = false;
        $scope.invalidMinutes = false;
        $scope.invalidSeconds = false;
      }
      function updateTemplate(keyboardChange) {
        if (!ngModelCtrl.$modelValue) {
          $scope.hours = null;
          $scope.minutes = null;
          $scope.seconds = null;
          $scope.meridian = meridians[0];
        } else {
          var hours = selected.getHours(),
              minutes = selected.getMinutes(),
              seconds = selected.getSeconds();
          if ($scope.showMeridian) {
            hours = hours === 0 || hours === 12 ? 12 : hours % 12;
          }
          $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
          if (keyboardChange !== 'm') {
            $scope.minutes = pad(minutes);
          }
          $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
          if (keyboardChange !== 's') {
            $scope.seconds = pad(seconds);
          }
          $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
        }
      }
      function addSecondsToSelected(seconds) {
        selected = addSeconds(selected, seconds);
        refresh();
      }
      function addMinutes(selected, minutes) {
        return addSeconds(selected, minutes * 60);
      }
      function addSeconds(date, seconds) {
        var dt = new Date(date.getTime() + seconds * 1000);
        var newDate = new Date(date);
        newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
        return newDate;
      }
      $scope.showSpinners = angular.isDefined($attrs.showSpinners) ? $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;
      $scope.incrementHours = function() {
        if (!$scope.noIncrementHours()) {
          addSecondsToSelected(hourStep * 60 * 60);
        }
      };
      $scope.decrementHours = function() {
        if (!$scope.noDecrementHours()) {
          addSecondsToSelected(-hourStep * 60 * 60);
        }
      };
      $scope.incrementMinutes = function() {
        if (!$scope.noIncrementMinutes()) {
          addSecondsToSelected(minuteStep * 60);
        }
      };
      $scope.decrementMinutes = function() {
        if (!$scope.noDecrementMinutes()) {
          addSecondsToSelected(-minuteStep * 60);
        }
      };
      $scope.incrementSeconds = function() {
        if (!$scope.noIncrementSeconds()) {
          addSecondsToSelected(secondStep);
        }
      };
      $scope.decrementSeconds = function() {
        if (!$scope.noDecrementSeconds()) {
          addSecondsToSelected(-secondStep);
        }
      };
      $scope.toggleMeridian = function() {
        var minutes = getMinutesFromTemplate(),
            hours = getHoursFromTemplate();
        if (!$scope.noToggleMeridian()) {
          if (angular.isDefined(minutes) && angular.isDefined(hours)) {
            addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
          } else {
            $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
          }
        }
      };
      $scope.blur = function() {
        ngModelCtrl.$setTouched();
      };
      $scope.$on('$destroy', function() {
        while (watchers.length) {
          watchers.shift()();
        }
      });
    }]).directive('uibTimepicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
      return {
        require: ['uibTimepicker', '?^ngModel'],
        controller: 'UibTimepickerController',
        controllerAs: 'timepicker',
        replace: true,
        scope: {},
        templateUrl: function(element, attrs) {
          return attrs.templateUrl || uibTimepickerConfig.templateUrl;
        },
        link: function(scope, element, attrs, ctrls) {
          var timepickerCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (ngModelCtrl) {
            timepickerCtrl.init(ngModelCtrl, element.find('input'));
          }
        }
      };
    }]);
    angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.debounce', 'ui.bootstrap.position']).factory('uibTypeaheadParser', ['$parse', function($parse) {
      var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
      return {parse: function(input) {
          var match = input.match(TYPEAHEAD_REGEXP);
          if (!match) {
            throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' + ' but got "' + input + '".');
          }
          return {
            itemName: match[3],
            source: $parse(match[4]),
            viewMapper: $parse(match[2] || match[1]),
            modelMapper: $parse(match[1])
          };
        }};
    }]).controller('UibTypeaheadController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$$debounce', '$uibPosition', 'uibTypeaheadParser', function(originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
      var HOT_KEYS = [9, 13, 27, 38, 40];
      var eventDebounceTime = 200;
      var modelCtrl,
          ngModelOptions;
      var minLength = originalScope.$eval(attrs.typeaheadMinLength);
      if (!minLength && minLength !== 0) {
        minLength = 1;
      }
      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
      originalScope.$watch(attrs.typeaheadEditable, function(newVal) {
        isEditable = newVal !== false;
      });
      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
      var onSelectCallback = $parse(attrs.typeaheadOnSelect);
      var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;
      var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;
      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
      var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
      var appendTo = attrs.typeaheadAppendTo ? originalScope.$eval(attrs.typeaheadAppendTo) : null;
      var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;
      var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;
      var isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop;
      var showHint = originalScope.$eval(attrs.typeaheadShowHint) || false;
      var parsedModel = $parse(attrs.ngModel);
      var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
      var $setModelValue = function(scope, newValue) {
        if (angular.isFunction(parsedModel(originalScope)) && ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
          return invokeModelSetter(scope, {$$$p: newValue});
        }
        return parsedModel.assign(scope, newValue);
      };
      var parserResult = typeaheadParser.parse(attrs.uibTypeahead);
      var hasFocus;
      var selected;
      var scope = originalScope.$new();
      var offDestroy = originalScope.$on('$destroy', function() {
        scope.$destroy();
      });
      scope.$on('$destroy', offDestroy);
      var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      element.attr({
        'aria-autocomplete': 'list',
        'aria-expanded': false,
        'aria-owns': popupId
      });
      var inputsContainer,
          hintInputElem;
      if (showHint) {
        inputsContainer = angular.element('<div></div>');
        inputsContainer.css('position', 'relative');
        element.after(inputsContainer);
        hintInputElem = element.clone();
        hintInputElem.attr('placeholder', '');
        hintInputElem.val('');
        hintInputElem.css({
          'position': 'absolute',
          'top': '0px',
          'left': '0px',
          'border-color': 'transparent',
          'box-shadow': 'none',
          'opacity': 1,
          'background': 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)',
          'color': '#999'
        });
        element.css({
          'position': 'relative',
          'vertical-align': 'top',
          'background-color': 'transparent'
        });
        inputsContainer.append(hintInputElem);
        hintInputElem.after(element);
      }
      var popUpEl = angular.element('<div uib-typeahead-popup></div>');
      popUpEl.attr({
        id: popupId,
        matches: 'matches',
        active: 'activeIdx',
        select: 'select(activeIdx, evt)',
        'move-in-progress': 'moveInProgress',
        query: 'query',
        position: 'position',
        'assign-is-open': 'assignIsOpen(isOpen)',
        debounce: 'debounceUpdate'
      });
      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
      }
      if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
        popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
      }
      var resetHint = function() {
        if (showHint) {
          hintInputElem.val('');
        }
      };
      var resetMatches = function() {
        scope.matches = [];
        scope.activeIdx = -1;
        element.attr('aria-expanded', false);
        resetHint();
      };
      var getMatchId = function(index) {
        return popupId + '-option-' + index;
      };
      scope.$watch('activeIdx', function(index) {
        if (index < 0) {
          element.removeAttr('aria-activedescendant');
        } else {
          element.attr('aria-activedescendant', getMatchId(index));
        }
      });
      var inputIsExactMatch = function(inputValue, index) {
        if (scope.matches.length > index && inputValue) {
          return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
        }
        return false;
      };
      var getMatchesAsync = function(inputValue, evt) {
        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, true);
        isNoResultsSetter(originalScope, false);
        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
          var onCurrentRequest = inputValue === modelCtrl.$viewValue;
          if (onCurrentRequest && hasFocus) {
            if (matches && matches.length > 0) {
              scope.activeIdx = focusFirst ? 0 : -1;
              isNoResultsSetter(originalScope, false);
              scope.matches.length = 0;
              for (var i = 0; i < matches.length; i++) {
                locals[parserResult.itemName] = matches[i];
                scope.matches.push({
                  id: getMatchId(i),
                  label: parserResult.viewMapper(scope, locals),
                  model: matches[i]
                });
              }
              scope.query = inputValue;
              recalculatePosition();
              element.attr('aria-expanded', true);
              if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
                if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                  $$debounce(function() {
                    scope.select(0, evt);
                  }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
                } else {
                  scope.select(0, evt);
                }
              }
              if (showHint) {
                var firstLabel = scope.matches[0].label;
                if (inputValue.length > 0 && firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()) {
                  hintInputElem.val(inputValue + firstLabel.slice(inputValue.length));
                } else {
                  hintInputElem.val('');
                }
              }
            } else {
              resetMatches();
              isNoResultsSetter(originalScope, true);
            }
          }
          if (onCurrentRequest) {
            isLoadingSetter(originalScope, false);
          }
        }, function() {
          resetMatches();
          isLoadingSetter(originalScope, false);
          isNoResultsSetter(originalScope, true);
        });
      };
      if (appendToBody) {
        angular.element($window).on('resize', fireRecalculating);
        $document.find('body').on('scroll', fireRecalculating);
      }
      var debouncedRecalculate = $$debounce(function() {
        if (scope.matches.length) {
          recalculatePosition();
        }
        scope.moveInProgress = false;
      }, eventDebounceTime);
      scope.moveInProgress = false;
      function fireRecalculating() {
        if (!scope.moveInProgress) {
          scope.moveInProgress = true;
          scope.$digest();
        }
        debouncedRecalculate();
      }
      function recalculatePosition() {
        scope.position = appendToBody ? $position.offset(element) : $position.position(element);
        scope.position.top += element.prop('offsetHeight');
      }
      scope.query = undefined;
      var timeoutPromise;
      var scheduleSearchWithTimeout = function(inputValue) {
        timeoutPromise = $timeout(function() {
          getMatchesAsync(inputValue);
        }, waitTime);
      };
      var cancelPreviousTimeout = function() {
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }
      };
      resetMatches();
      scope.assignIsOpen = function(isOpen) {
        isOpenSetter(originalScope, isOpen);
      };
      scope.select = function(activeIdx, evt) {
        var locals = {};
        var model,
            item;
        selected = true;
        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
        model = parserResult.modelMapper(originalScope, locals);
        $setModelValue(originalScope, model);
        modelCtrl.$setValidity('editable', true);
        modelCtrl.$setValidity('parse', true);
        onSelectCallback(originalScope, {
          $item: item,
          $model: model,
          $label: parserResult.viewMapper(originalScope, locals),
          $event: evt
        });
        resetMatches();
        if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
          $timeout(function() {
            element[0].focus();
          }, 0, false);
        }
      };
      element.on('keydown', function(evt) {
        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
          return;
        }
        if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13)) {
          resetMatches();
          scope.$digest();
          return;
        }
        evt.preventDefault();
        var target;
        switch (evt.which) {
          case 9:
          case 13:
            scope.$apply(function() {
              if (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate)) {
                $$debounce(function() {
                  scope.select(scope.activeIdx, evt);
                }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate['default']);
              } else {
                scope.select(scope.activeIdx, evt);
              }
            });
            break;
          case 27:
            evt.stopPropagation();
            resetMatches();
            scope.$digest();
            break;
          case 38:
            scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
            scope.$digest();
            target = popUpEl.find('li')[scope.activeIdx];
            target.parentNode.scrollTop = target.offsetTop;
            break;
          case 40:
            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
            scope.$digest();
            target = popUpEl.find('li')[scope.activeIdx];
            target.parentNode.scrollTop = target.offsetTop;
            break;
        }
      });
      element.bind('focus', function(evt) {
        hasFocus = true;
        if (minLength === 0 && !modelCtrl.$viewValue) {
          $timeout(function() {
            getMatchesAsync(modelCtrl.$viewValue, evt);
          }, 0);
        }
      });
      element.bind('blur', function(evt) {
        if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
          selected = true;
          scope.$apply(function() {
            if (angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur)) {
              $$debounce(function() {
                scope.select(scope.activeIdx, evt);
              }, scope.debounceUpdate.blur);
            } else {
              scope.select(scope.activeIdx, evt);
            }
          });
        }
        if (!isEditable && modelCtrl.$error.editable) {
          modelCtrl.$viewValue = '';
          element.val('');
        }
        hasFocus = false;
        selected = false;
      });
      var dismissClickHandler = function(evt) {
        if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
          resetMatches();
          if (!$rootScope.$$phase) {
            scope.$digest();
          }
        }
      };
      $document.on('click', dismissClickHandler);
      originalScope.$on('$destroy', function() {
        $document.off('click', dismissClickHandler);
        if (appendToBody || appendTo) {
          $popup.remove();
        }
        if (appendToBody) {
          angular.element($window).off('resize', fireRecalculating);
          $document.find('body').off('scroll', fireRecalculating);
        }
        popUpEl.remove();
        if (showHint) {
          inputsContainer.remove();
        }
      });
      var $popup = $compile(popUpEl)(scope);
      if (appendToBody) {
        $document.find('body').append($popup);
      } else if (appendTo) {
        angular.element(appendTo).eq(0).append($popup);
      } else {
        element.after($popup);
      }
      this.init = function(_modelCtrl, _ngModelOptions) {
        modelCtrl = _modelCtrl;
        ngModelOptions = _ngModelOptions;
        scope.debounceUpdate = modelCtrl.$options && $parse(modelCtrl.$options.debounce)(originalScope);
        modelCtrl.$parsers.unshift(function(inputValue) {
          hasFocus = true;
          if (minLength === 0 || inputValue && inputValue.length >= minLength) {
            if (waitTime > 0) {
              cancelPreviousTimeout();
              scheduleSearchWithTimeout(inputValue);
            } else {
              getMatchesAsync(inputValue);
            }
          } else {
            isLoadingSetter(originalScope, false);
            cancelPreviousTimeout();
            resetMatches();
          }
          if (isEditable) {
            return inputValue;
          }
          if (!inputValue) {
            modelCtrl.$setValidity('editable', true);
            return null;
          }
          modelCtrl.$setValidity('editable', false);
          return undefined;
        });
        modelCtrl.$formatters.push(function(modelValue) {
          var candidateViewValue,
              emptyViewValue;
          var locals = {};
          if (!isEditable) {
            modelCtrl.$setValidity('editable', true);
          }
          if (inputFormatter) {
            locals.$model = modelValue;
            return inputFormatter(originalScope, locals);
          }
          locals[parserResult.itemName] = modelValue;
          candidateViewValue = parserResult.viewMapper(originalScope, locals);
          locals[parserResult.itemName] = undefined;
          emptyViewValue = parserResult.viewMapper(originalScope, locals);
          return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
        });
      };
    }]).directive('uibTypeahead', function() {
      return {
        controller: 'UibTypeaheadController',
        require: ['ngModel', '^?ngModelOptions', 'uibTypeahead'],
        link: function(originalScope, element, attrs, ctrls) {
          ctrls[2].init(ctrls[0], ctrls[1]);
        }
      };
    }).directive('uibTypeaheadPopup', ['$$debounce', function($$debounce) {
      return {
        scope: {
          matches: '=',
          query: '=',
          active: '=',
          position: '&',
          moveInProgress: '=',
          select: '&',
          assignIsOpen: '&',
          debounce: '&'
        },
        replace: true,
        templateUrl: function(element, attrs) {
          return attrs.popupTemplateUrl || 'uib/template/typeahead/typeahead-popup.html';
        },
        link: function(scope, element, attrs) {
          scope.templateUrl = attrs.templateUrl;
          scope.isOpen = function() {
            var isDropdownOpen = scope.matches.length > 0;
            scope.assignIsOpen({isOpen: isDropdownOpen});
            return isDropdownOpen;
          };
          scope.isActive = function(matchIdx) {
            return scope.active === matchIdx;
          };
          scope.selectActive = function(matchIdx) {
            scope.active = matchIdx;
          };
          scope.selectMatch = function(activeIdx, evt) {
            var debounce = scope.debounce();
            if (angular.isNumber(debounce) || angular.isObject(debounce)) {
              $$debounce(function() {
                scope.select({
                  activeIdx: activeIdx,
                  evt: evt
                });
              }, angular.isNumber(debounce) ? debounce : debounce['default']);
            } else {
              scope.select({
                activeIdx: activeIdx,
                evt: evt
              });
            }
          };
        }
      };
    }]).directive('uibTypeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
      return {
        scope: {
          index: '=',
          match: '=',
          query: '='
        },
        link: function(scope, element, attrs) {
          var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'uib/template/typeahead/typeahead-match.html';
          $templateRequest(tplUrl).then(function(tplContent) {
            var tplEl = angular.element(tplContent.trim());
            element.replaceWith(tplEl);
            $compile(tplEl)(scope);
          });
        }
      };
    }]).filter('uibTypeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
      var isSanitizePresent;
      isSanitizePresent = $injector.has('$sanitize');
      function escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
      }
      function containsHtml(matchItem) {
        return /<.*>/g.test(matchItem);
      }
      return function(matchItem, query) {
        if (!isSanitizePresent && containsHtml(matchItem)) {
          $log.warn('Unsafe use of typeahead please use ngSanitize');
        }
        matchItem = query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
        if (!isSanitizePresent) {
          matchItem = $sce.trustAsHtml(matchItem);
        }
        return matchItem;
      };
    }]);
    angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/accordion/accordion-group.html", "<div class=\"panel\" ng-class=\"panelClass || 'panel-default'\">\n" + "  <div class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" + "    <h4 class=\"panel-title\">\n" + "      <a href tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" + "    </h4>\n" + "  </div>\n" + "  <div class=\"panel-collapse collapse\" uib-collapse=\"!isOpen\">\n" + "	  <div class=\"panel-body\" ng-transclude></div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/accordion/accordion.html", "<div class=\"panel-group\" ng-transclude></div>");
    }]);
    angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/alert/alert.html", "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" + "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close({$event: $event})\">\n" + "        <span aria-hidden=\"true\">&times;</span>\n" + "        <span class=\"sr-only\">Close</span>\n" + "    </button>\n" + "    <div ng-transclude></div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/carousel/carousel.html", "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" + "  <div class=\"carousel-inner\" ng-transclude></div>\n" + "  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\">\n" + "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n" + "    <span class=\"sr-only\">previous</span>\n" + "  </a>\n" + "  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\">\n" + "    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n" + "    <span class=\"sr-only\">next</span>\n" + "  </a>\n" + "  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" + "    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n" + "      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n" + "    </li>\n" + "  </ol>\n" + "</div>");
    }]);
    angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/carousel/slide.html", "<div ng-class=\"{\n" + "    'active': active\n" + "  }\" class=\"item text-center\" ng-transclude></div>\n" + "");
    }]);
    angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/datepicker/datepicker.html", "<div class=\"uib-datepicker\" ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" + "  <uib-daypicker ng-switch-when=\"day\" tabindex=\"0\"></uib-daypicker>\n" + "  <uib-monthpicker ng-switch-when=\"month\" tabindex=\"0\"></uib-monthpicker>\n" + "  <uib-yearpicker ng-switch-when=\"year\" tabindex=\"0\"></uib-yearpicker>\n" + "</div>");
    }]);
    angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/datepicker/day.html", "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "    <tr>\n" + "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" + "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" + "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" + "        id=\"{{::dt.uid}}\"\n" + "        ng-class=\"::dt.customClass\">\n" + "        <button type=\"button\" class=\"btn btn-default btn-sm\"\n" + "          uib-is-class=\"\n" + "            'btn-info' for selectedDt,\n" + "            'active' for activeDt\n" + "            on dt\"\n" + "          ng-click=\"select(dt.date)\"\n" + "          ng-disabled=\"::dt.disabled\"\n" + "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/datepicker/month.html", "<table class=\"uib-monthpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" + "        id=\"{{::dt.uid}}\"\n" + "        ng-class=\"::dt.customClass\">\n" + "        <button type=\"button\" class=\"btn btn-default\"\n" + "          uib-is-class=\"\n" + "            'btn-info' for selectedDt,\n" + "            'active' for activeDt\n" + "            on dt\"\n" + "          ng-click=\"select(dt.date)\"\n" + "          ng-disabled=\"::dt.disabled\"\n" + "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("uib/template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/datepicker/popup.html", "<div>\n" + "  <ul class=\"uib-datepicker-popup dropdown-menu\" dropdown-nested ng-if=\"isOpen\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" + "    <li ng-transclude></li>\n" + "    <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" + "    <span class=\"btn-group pull-left\">\n" + "      <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today')\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" + "      <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" + "    </span>\n" + "      <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close()\">{{ getText('close') }}</button>\n" + "    </li>\n" + "  </ul>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/datepicker/year.html", "<table class=\"uib-yearpicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" + "        id=\"{{::dt.uid}}\"\n" + "        ng-class=\"::dt.customClass\">\n" + "        <button type=\"button\" class=\"btn btn-default\"\n" + "          uib-is-class=\"\n" + "            'btn-info' for selectedDt,\n" + "            'active' for activeDt\n" + "            on dt\"\n" + "          ng-click=\"select(dt.date)\"\n" + "          ng-disabled=\"::dt.disabled\"\n" + "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("uib/template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/modal/backdrop.html", "<div class=\"modal-backdrop\"\n" + "     uib-modal-animation-class=\"fade\"\n" + "     modal-in-class=\"in\"\n" + "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" + "></div>\n" + "");
    }]);
    angular.module("uib/template/modal/window.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/modal/window.html", "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" + "    uib-modal-animation-class=\"fade\"\n" + "    modal-in-class=\"in\"\n" + "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" + "    <div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/pager/pager.html", "<ul class=\"pager\">\n" + "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" + "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" + "</ul>\n" + "");
    }]);
    angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/pagination/pagination.html", "<ul class=\"pagination\">\n" + "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" + "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" + "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" + "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" + "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" + "</ul>\n" + "");
    }]);
    angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/tooltip/tooltip-html-popup.html", "<div class=\"tooltip\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/tooltip/tooltip-popup.html", "<div class=\"tooltip\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/tooltip/tooltip-template-popup.html", "<div class=\"tooltip\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\"\n" + "    uib-tooltip-template-transclude=\"contentExp()\"\n" + "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/popover/popover-html.html", "<div class=\"popover\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" + "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/popover/popover-template.html", "<div class=\"popover\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" + "      <div class=\"popover-content\"\n" + "        uib-tooltip-template-transclude=\"contentExp()\"\n" + "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/popover/popover.html", "<div class=\"popover\"\n" + "  tooltip-animation-class=\"fade\"\n" + "  uib-tooltip-classes\n" + "  ng-class=\"{ in: isOpen() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" + "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/progressbar/bar.html", "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" + "");
    }]);
    angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/progressbar/progress.html", "<div class=\"progress\" ng-transclude aria-labelledby=\"{{::title}}\"></div>");
    }]);
    angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/progressbar/progressbar.html", "<div class=\"progress\">\n" + "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" aria-labelledby=\"{{::title}}\" ng-transclude></div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/rating/rating.html", "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" + "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" + "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\" aria-valuetext=\"{{r.title}}\"></i>\n" + "</span>\n" + "");
    }]);
    angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/tabs/tab.html", "<li ng-class=\"{active: active, disabled: disabled}\" class=\"uib-tab\">\n" + "  <a href ng-click=\"select()\" uib-tab-heading-transclude>{{heading}}</a>\n" + "</li>\n" + "");
    }]);
    angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/tabs/tabset.html", "<div>\n" + "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" + "  <div class=\"tab-content\">\n" + "    <div class=\"tab-pane\" \n" + "         ng-repeat=\"tab in tabs\" \n" + "         ng-class=\"{active: tab.active}\"\n" + "         uib-tab-content-transclude=\"tab\">\n" + "    </div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/timepicker/timepicker.html", "<table class=\"uib-timepicker\">\n" + "  <tbody>\n" + "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" + "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "      <td>&nbsp;</td>\n" + "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" + "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "      <td ng-show=\"showMeridian\"></td>\n" + "    </tr>\n" + "    <tr>\n" + "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" + "        <input style=\"width:50px;\" type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" + "      </td>\n" + "      <td class=\"uib-separator\">:</td>\n" + "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" + "        <input style=\"width:50px;\" type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" + "      </td>\n" + "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" + "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" + "        <input style=\"width:50px;\" type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" + "      </td>\n" + "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" + "    </tr>\n" + "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" + "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "      <td>&nbsp;</td>\n" + "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" + "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"{{::tabindex}}\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "      <td ng-show=\"showMeridian\"></td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/typeahead/typeahead-match.html", "<a href\n" + "   tabindex=\"-1\"\n" + "   ng-bind-html=\"match.label | uibTypeaheadHighlight:query\"\n" + "   ng-attr-title=\"{{match.label}}\"></a>\n" + "");
    }]);
    angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("uib/template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" + "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index, $event)\" role=\"option\" id=\"{{::match.id}}\">\n" + "        <div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" + "    </li>\n" + "</ul>\n" + "");
    }]);
    angular.module('ui.bootstrap.carousel').run(function() {
      !angular.$$csp().noInlineStyle && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
    });
    angular.module('ui.bootstrap.datepicker').run(function() {
      !angular.$$csp().noInlineStyle && angular.element(document).find('head').prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-datepicker-popup.dropdown-menu{display:block;}.uib-button-bar{padding:10px 9px 2px;}</style>');
    });
    angular.module('ui.bootstrap.timepicker').run(function() {
      !angular.$$csp().noInlineStyle && angular.element(document).find('head').prepend('<style type="text/css">.uib-time input{width:50px;}</style>');
    });
    angular.module('ui.bootstrap.typeahead').run(function() {
      !angular.$$csp().noInlineStyle && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>');
    });
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  $__require('2');
  module.exports = 'ui.bootstrap';
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("4", ["3"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('3');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<nav class=\"navbar\">\r\n\t<div class=\"logo\">\r\n\t\t<h1><a ui-sref=\"home\">{{ vm.name }}</a></h1>\r\n\t</div>\r\n\t<div class=\"nav-links\">\r\n\t\t<span><a ui-sref=\"about\">about</a></span>\r\n\t</div>\r\n</nav>";
  global.define = __define;
  return module.exports;
});

$__System.register('6', ['7'], function (_export) {
	var _classCallCheck, NavbarController;

	return {
		setters: [function (_) {
			_classCallCheck = _['default'];
		}],
		execute: function () {
			'use strict';

			NavbarController = function NavbarController() {
				_classCallCheck(this, NavbarController);

				this.name = 'navbar';
			};

			_export('default', NavbarController);
		}
	};
});

$__System.register("8", [], function() { return { setters: [], execute: function() {} } });

$__System.register('9', ['5', '6', '8'], function (_export) {
	'use strict';

	var template, controller, navbarComponent;
	return {
		setters: [function (_) {
			template = _['default'];
		}, function (_2) {
			controller = _2['default'];
		}, function (_3) {}],
		execute: function () {
			navbarComponent = function navbarComponent() {
				return {
					template: template,
					controller: controller,
					restrict: 'E',
					controllerAs: 'vm',
					scope: {},
					bindToController: true
				};
			};

			_export('default', navbarComponent);
		}
	};
});

$__System.register('a', ['9', 'b', 'c'], function (_export) {
	'use strict';

	var navbarComponent, angular, navbarModule;
	return {
		setters: [function (_) {
			navbarComponent = _['default'];
		}, function (_b) {
			angular = _b['default'];
		}, function (_c) {}],
		execute: function () {
			navbarModule = angular.module('navbar', ['ui.router']).directive('navbar', navbarComponent);

			_export('default', navbarModule);
		}
	};
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<section class=\"hero\">\r\n\t<h1>This is NG6 starter with jspm</h1>\r\n\t<h3>You can find me inside {{ vm.name }}.html</h3>\r\n</section>\r\n";
  global.define = __define;
  return module.exports;
});

$__System.register('e', ['7'], function (_export) {
	var _classCallCheck, HeroController;

	return {
		setters: [function (_) {
			_classCallCheck = _['default'];
		}],
		execute: function () {
			'use strict';

			HeroController = function HeroController() {
				_classCallCheck(this, HeroController);

				this.name = 'hero';
			};

			_export('default', HeroController);
		}
	};
});

$__System.register("f", [], function() { return { setters: [], execute: function() {} } });

$__System.register('10', ['d', 'e', 'f'], function (_export) {
	'use strict';

	var template, controller, heroComponent;
	return {
		setters: [function (_d) {
			template = _d['default'];
		}, function (_e) {
			controller = _e['default'];
		}, function (_f) {}],
		execute: function () {
			heroComponent = function heroComponent() {
				return {
					template: template,
					controller: controller,
					restrict: 'E',
					controllerAs: 'vm',
					scope: {},
					bindToController: true
				};
			};

			_export('default', heroComponent);
		}
	};
});

$__System.register('11', ['10', 'b', 'c'], function (_export) {
	'use strict';

	var heroComponent, angular, heroModule;
	return {
		setters: [function (_) {
			heroComponent = _['default'];
		}, function (_b) {
			angular = _b['default'];
		}, function (_c) {}],
		execute: function () {
			heroModule = angular.module('hero', ['ui.router']).directive('hero', heroComponent);

			_export('default', heroModule);
		}
	};
});

$__System.register("12", [], function (_export) {
	"use strict";

	var UserFactory;
	return {
		setters: [],
		execute: function () {
			UserFactory = function UserFactory() {
				var user = {};

				var getUser = function getUser() {
					return user;
				};

				var isSignedIn = function isSignedIn() {
					return user.isSignedIn;
				};

				return { getUser: getUser, isSignedIn: isSignedIn };
			};

			_export("default", UserFactory);
		}
	};
});

$__System.register('13', ['12', 'b'], function (_export) {
	'use strict';

	var UserFactory, angular, userModule;
	return {
		setters: [function (_) {
			UserFactory = _['default'];
		}, function (_b) {
			angular = _b['default'];
		}],
		execute: function () {
			userModule = angular.module('user', []).factory('User', UserFactory);

			_export('default', userModule);
		}
	};
});

$__System.register('14', ['11', '13', 'b', 'a'], function (_export) {
	'use strict';

	var Hero, User, angular, Navbar, commonModule;
	return {
		setters: [function (_) {
			Hero = _['default'];
		}, function (_2) {
			User = _2['default'];
		}, function (_b) {
			angular = _b['default'];
		}, function (_a) {
			Navbar = _a['default'];
		}],
		execute: function () {
			commonModule = angular.module('app.common', [Navbar.name, Hero.name, User.name]);

			_export('default', commonModule);
		}
	};
});

$__System.register('15', ['7'], function (_export) {
	var _classCallCheck, HomeController;

	return {
		setters: [function (_) {
			_classCallCheck = _['default'];
		}],
		execute: function () {
			'use strict';

			HomeController = function HomeController() {
				_classCallCheck(this, HomeController);

				this.name = 'home';
			};

			_export('default', HomeController);
		}
	};
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<!--if you'd like to have the navbar and or header on every page, move it up a level to app.html!-->\r\n<navbar></navbar>\r\n<header>\r\n\t<hero></hero>\r\n</header>\r\n<main>\r\n\t<div>\r\n\t\t<h1>you can find me in {{ vm.name }}.html</h1>\r\n\t</div>\r\n</main>\r\n";
  global.define = __define;
  return module.exports;
});

$__System.register("17", [], function() { return { setters: [], execute: function() {} } });

$__System.register('18', ['15', '16', '17'], function (_export) {
	'use strict';

	var controller, template, homeComponent;
	return {
		setters: [function (_) {
			controller = _['default'];
		}, function (_2) {
			template = _2['default'];
		}, function (_3) {}],
		execute: function () {
			homeComponent = function homeComponent() {
				return {
					template: template,
					controller: controller,
					restrict: 'E',
					controllerAs: 'vm',
					scope: {},
					bindToController: true
				};
			};

			_export('default', homeComponent);
		}
	};
});

$__System.register('19', ['18', 'b', 'c'], function (_export) {
	'use strict';

	var homeComponent, angular, homeModule;
	return {
		setters: [function (_) {
			homeComponent = _['default'];
		}, function (_b) {
			angular = _b['default'];
		}, function (_c) {}],
		execute: function () {
			homeModule = angular.module('home', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider.state('home', {
					url: '/',
					template: '<home></home>'
				});
			}).directive('home', homeComponent);

			_export('default', homeModule);
		}
	};
});

$__System.registerDynamic("1a", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal(__module.id, "angular", null);
  (function() {
    "format global";
    "exports angular";
    (function(window, document, undefined) {
      'use strict';
      function minErr(module, ErrorConstructor) {
        ErrorConstructor = ErrorConstructor || Error;
        return function() {
          var SKIP_INDEXES = 2;
          var templateArgs = arguments,
              code = templateArgs[0],
              message = '[' + (module ? module + ':' : '') + code + '] ',
              template = templateArgs[1],
              paramPrefix,
              i;
          message += template.replace(/\{\d+\}/g, function(match) {
            var index = +match.slice(1, -1),
                shiftedIndex = index + SKIP_INDEXES;
            if (shiftedIndex < templateArgs.length) {
              return toDebugString(templateArgs[shiftedIndex]);
            }
            return match;
          });
          message += '\nhttp://errors.angularjs.org/1.4.0/' + (module ? module + '/' : '') + code;
          for (i = SKIP_INDEXES, paramPrefix = '?'; i < templateArgs.length; i++, paramPrefix = '&') {
            message += paramPrefix + 'p' + (i - SKIP_INDEXES) + '=' + encodeURIComponent(toDebugString(templateArgs[i]));
          }
          return new ErrorConstructor(message);
        };
      }
      var REGEX_STRING_REGEXP = /^\/(.+)\/([a-z]*)$/;
      var VALIDITY_STATE_PROPERTY = 'validity';
      var lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
      };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
      };
      var manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
          return String.fromCharCode(ch.charCodeAt(0) | 32);
        }) : s;
      };
      var manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
          return String.fromCharCode(ch.charCodeAt(0) & ~32);
        }) : s;
      };
      if ('i' !== 'I'.toLowerCase()) {
        lowercase = manualLowercase;
        uppercase = manualUppercase;
      }
      var msie,
          jqLite,
          jQuery,
          slice = [].slice,
          splice = [].splice,
          push = [].push,
          toString = Object.prototype.toString,
          getPrototypeOf = Object.getPrototypeOf,
          ngMinErr = minErr('ng'),
          angular = window.angular || (window.angular = {}),
          angularModule,
          uid = 0;
      msie = document.documentMode;
      function isArrayLike(obj) {
        if (obj == null || isWindow(obj)) {
          return false;
        }
        var length = "length" in Object(obj) && obj.length;
        if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
          return true;
        }
        return isString(obj) || isArray(obj) || length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj;
      }
      function forEach(obj, iterator, context) {
        var key,
            length;
        if (obj) {
          if (isFunction(obj)) {
            for (key in obj) {
              if (key != 'prototype' && key != 'length' && key != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else if (isArray(obj) || isArrayLike(obj)) {
            var isPrimitive = typeof obj !== 'object';
            for (key = 0, length = obj.length; key < length; key++) {
              if (isPrimitive || key in obj) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else if (obj.forEach && obj.forEach !== forEach) {
            obj.forEach(iterator, context, obj);
          } else if (isBlankObject(obj)) {
            for (key in obj) {
              iterator.call(context, obj[key], key, obj);
            }
          } else if (typeof obj.hasOwnProperty === 'function') {
            for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          } else {
            for (key in obj) {
              if (hasOwnProperty.call(obj, key)) {
                iterator.call(context, obj[key], key, obj);
              }
            }
          }
        }
        return obj;
      }
      function forEachSorted(obj, iterator, context) {
        var keys = Object.keys(obj).sort();
        for (var i = 0; i < keys.length; i++) {
          iterator.call(context, obj[keys[i]], keys[i]);
        }
        return keys;
      }
      function reverseParams(iteratorFn) {
        return function(value, key) {
          iteratorFn(key, value);
        };
      }
      function nextUid() {
        return ++uid;
      }
      function setHashKey(obj, h) {
        if (h) {
          obj.$$hashKey = h;
        } else {
          delete obj.$$hashKey;
        }
      }
      function baseExtend(dst, objs, deep) {
        var h = dst.$$hashKey;
        for (var i = 0,
            ii = objs.length; i < ii; ++i) {
          var obj = objs[i];
          if (!isObject(obj) && !isFunction(obj))
            continue;
          var keys = Object.keys(obj);
          for (var j = 0,
              jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];
            if (deep && isObject(src)) {
              if (!isObject(dst[key]))
                dst[key] = isArray(src) ? [] : {};
              baseExtend(dst[key], [src], true);
            } else {
              dst[key] = src;
            }
          }
        }
        setHashKey(dst, h);
        return dst;
      }
      function extend(dst) {
        return baseExtend(dst, slice.call(arguments, 1), false);
      }
      function merge(dst) {
        return baseExtend(dst, slice.call(arguments, 1), true);
      }
      function toInt(str) {
        return parseInt(str, 10);
      }
      function inherit(parent, extra) {
        return extend(Object.create(parent), extra);
      }
      function noop() {}
      noop.$inject = [];
      function identity($) {
        return $;
      }
      identity.$inject = [];
      function valueFn(value) {
        return function() {
          return value;
        };
      }
      function isUndefined(value) {
        return typeof value === 'undefined';
      }
      function isDefined(value) {
        return typeof value !== 'undefined';
      }
      function isObject(value) {
        return value !== null && typeof value === 'object';
      }
      function isBlankObject(value) {
        return value !== null && typeof value === 'object' && !getPrototypeOf(value);
      }
      function isString(value) {
        return typeof value === 'string';
      }
      function isNumber(value) {
        return typeof value === 'number';
      }
      function isDate(value) {
        return toString.call(value) === '[object Date]';
      }
      var isArray = Array.isArray;
      function isFunction(value) {
        return typeof value === 'function';
      }
      function isRegExp(value) {
        return toString.call(value) === '[object RegExp]';
      }
      function isWindow(obj) {
        return obj && obj.window === obj;
      }
      function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
      }
      function isFile(obj) {
        return toString.call(obj) === '[object File]';
      }
      function isFormData(obj) {
        return toString.call(obj) === '[object FormData]';
      }
      function isBlob(obj) {
        return toString.call(obj) === '[object Blob]';
      }
      function isBoolean(value) {
        return typeof value === 'boolean';
      }
      function isPromiseLike(obj) {
        return obj && isFunction(obj.then);
      }
      var TYPED_ARRAY_REGEXP = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/;
      function isTypedArray(value) {
        return TYPED_ARRAY_REGEXP.test(toString.call(value));
      }
      var trim = function(value) {
        return isString(value) ? value.trim() : value;
      };
      var escapeForRegexp = function(s) {
        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
      };
      function isElement(node) {
        return !!(node && (node.nodeName || (node.prop && node.attr && node.find)));
      }
      function makeMap(str) {
        var obj = {},
            items = str.split(","),
            i;
        for (i = 0; i < items.length; i++) {
          obj[items[i]] = true;
        }
        return obj;
      }
      function nodeName_(element) {
        return lowercase(element.nodeName || (element[0] && element[0].nodeName));
      }
      function includes(array, obj) {
        return Array.prototype.indexOf.call(array, obj) != -1;
      }
      function arrayRemove(array, value) {
        var index = array.indexOf(value);
        if (index >= 0) {
          array.splice(index, 1);
        }
        return index;
      }
      function copy(source, destination, stackSource, stackDest) {
        if (isWindow(source) || isScope(source)) {
          throw ngMinErr('cpws', "Can't copy! Making copies of Window or Scope instances is not supported.");
        }
        if (isTypedArray(destination)) {
          throw ngMinErr('cpta', "Can't copy! TypedArray destination cannot be mutated.");
        }
        if (!destination) {
          destination = source;
          if (source) {
            if (isArray(source)) {
              destination = copy(source, [], stackSource, stackDest);
            } else if (isTypedArray(source)) {
              destination = new source.constructor(source);
            } else if (isDate(source)) {
              destination = new Date(source.getTime());
            } else if (isRegExp(source)) {
              destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
              destination.lastIndex = source.lastIndex;
            } else if (isObject(source)) {
              var emptyObject = Object.create(getPrototypeOf(source));
              destination = copy(source, emptyObject, stackSource, stackDest);
            }
          }
        } else {
          if (source === destination)
            throw ngMinErr('cpi', "Can't copy! Source and destination are identical.");
          stackSource = stackSource || [];
          stackDest = stackDest || [];
          if (isObject(source)) {
            var index = stackSource.indexOf(source);
            if (index !== -1)
              return stackDest[index];
            stackSource.push(source);
            stackDest.push(destination);
          }
          var result,
              key;
          if (isArray(source)) {
            destination.length = 0;
            for (var i = 0; i < source.length; i++) {
              result = copy(source[i], null, stackSource, stackDest);
              if (isObject(source[i])) {
                stackSource.push(source[i]);
                stackDest.push(result);
              }
              destination.push(result);
            }
          } else {
            var h = destination.$$hashKey;
            if (isArray(destination)) {
              destination.length = 0;
            } else {
              forEach(destination, function(value, key) {
                delete destination[key];
              });
            }
            if (isBlankObject(source)) {
              for (key in source) {
                putValue(key, source[key], destination, stackSource, stackDest);
              }
            } else if (source && typeof source.hasOwnProperty === 'function') {
              for (key in source) {
                if (source.hasOwnProperty(key)) {
                  putValue(key, source[key], destination, stackSource, stackDest);
                }
              }
            } else {
              for (key in source) {
                if (hasOwnProperty.call(source, key)) {
                  putValue(key, source[key], destination, stackSource, stackDest);
                }
              }
            }
            setHashKey(destination, h);
          }
        }
        return destination;
        function putValue(key, val, destination, stackSource, stackDest) {
          var result = copy(val, null, stackSource, stackDest);
          if (isObject(val)) {
            stackSource.push(val);
            stackDest.push(result);
          }
          destination[key] = result;
        }
      }
      function shallowCopy(src, dst) {
        if (isArray(src)) {
          dst = dst || [];
          for (var i = 0,
              ii = src.length; i < ii; i++) {
            dst[i] = src[i];
          }
        } else if (isObject(src)) {
          dst = dst || {};
          for (var key in src) {
            if (!(key.charAt(0) === '$' && key.charAt(1) === '$')) {
              dst[key] = src[key];
            }
          }
        }
        return dst || src;
      }
      function equals(o1, o2) {
        if (o1 === o2)
          return true;
        if (o1 === null || o2 === null)
          return false;
        if (o1 !== o1 && o2 !== o2)
          return true;
        var t1 = typeof o1,
            t2 = typeof o2,
            length,
            key,
            keySet;
        if (t1 == t2) {
          if (t1 == 'object') {
            if (isArray(o1)) {
              if (!isArray(o2))
                return false;
              if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                  if (!equals(o1[key], o2[key]))
                    return false;
                }
                return true;
              }
            } else if (isDate(o1)) {
              if (!isDate(o2))
                return false;
              return equals(o1.getTime(), o2.getTime());
            } else if (isRegExp(o1)) {
              return isRegExp(o2) ? o1.toString() == o2.toString() : false;
            } else {
              if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2) || isDate(o2) || isRegExp(o2))
                return false;
              keySet = createMap();
              for (key in o1) {
                if (key.charAt(0) === '$' || isFunction(o1[key]))
                  continue;
                if (!equals(o1[key], o2[key]))
                  return false;
                keySet[key] = true;
              }
              for (key in o2) {
                if (!(key in keySet) && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key]))
                  return false;
              }
              return true;
            }
          }
        }
        return false;
      }
      var csp = function() {
        if (isDefined(csp.isActive_))
          return csp.isActive_;
        var active = !!(document.querySelector('[ng-csp]') || document.querySelector('[data-ng-csp]'));
        if (!active) {
          try {
            new Function('');
          } catch (e) {
            active = true;
          }
        }
        return (csp.isActive_ = active);
      };
      var jq = function() {
        if (isDefined(jq.name_))
          return jq.name_;
        var el;
        var i,
            ii = ngAttrPrefixes.length,
            prefix,
            name;
        for (i = 0; i < ii; ++i) {
          prefix = ngAttrPrefixes[i];
          if (el = document.querySelector('[' + prefix.replace(':', '\\:') + 'jq]')) {
            name = el.getAttribute(prefix + 'jq');
            break;
          }
        }
        return (jq.name_ = name);
      };
      function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
      }
      function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
      }
      function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        if (isFunction(fn) && !(fn instanceof RegExp)) {
          return curryArgs.length ? function() {
            return arguments.length ? fn.apply(self, concat(curryArgs, arguments, 0)) : fn.apply(self, curryArgs);
          } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
          };
        } else {
          return fn;
        }
      }
      function toJsonReplacer(key, value) {
        var val = value;
        if (typeof key === 'string' && key.charAt(0) === '$' && key.charAt(1) === '$') {
          val = undefined;
        } else if (isWindow(value)) {
          val = '$WINDOW';
        } else if (value && document === value) {
          val = '$DOCUMENT';
        } else if (isScope(value)) {
          val = '$SCOPE';
        }
        return val;
      }
      function toJson(obj, pretty) {
        if (typeof obj === 'undefined')
          return undefined;
        if (!isNumber(pretty)) {
          pretty = pretty ? 2 : null;
        }
        return JSON.stringify(obj, toJsonReplacer, pretty);
      }
      function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
      }
      function timezoneToOffset(timezone, fallback) {
        var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
      }
      function addDateMinutes(date, minutes) {
        date = new Date(date.getTime());
        date.setMinutes(date.getMinutes() + minutes);
        return date;
      }
      function convertTimezoneToLocal(date, timezone, reverse) {
        reverse = reverse ? -1 : 1;
        var timezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
        return addDateMinutes(date, reverse * (timezoneOffset - date.getTimezoneOffset()));
      }
      function startingTag(element) {
        element = jqLite(element).clone();
        try {
          element.empty();
        } catch (e) {}
        var elemHtml = jqLite('<div>').append(element).html();
        try {
          return element[0].nodeType === NODE_TYPE_TEXT ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
            return '<' + lowercase(nodeName);
          });
        } catch (e) {
          return lowercase(elemHtml);
        }
      }
      function tryDecodeURIComponent(value) {
        try {
          return decodeURIComponent(value);
        } catch (e) {}
      }
      function parseKeyValue(keyValue) {
        var obj = {},
            key_value,
            key;
        forEach((keyValue || "").split('&'), function(keyValue) {
          if (keyValue) {
            key_value = keyValue.replace(/\+/g, '%20').split('=');
            key = tryDecodeURIComponent(key_value[0]);
            if (isDefined(key)) {
              var val = isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
              if (!hasOwnProperty.call(obj, key)) {
                obj[key] = val;
              } else if (isArray(obj[key])) {
                obj[key].push(val);
              } else {
                obj[key] = [obj[key], val];
              }
            }
          }
        });
        return obj;
      }
      function toKeyValue(obj) {
        var parts = [];
        forEach(obj, function(value, key) {
          if (isArray(value)) {
            forEach(value, function(arrayValue) {
              parts.push(encodeUriQuery(key, true) + (arrayValue === true ? '' : '=' + encodeUriQuery(arrayValue, true)));
            });
          } else {
            parts.push(encodeUriQuery(key, true) + (value === true ? '' : '=' + encodeUriQuery(value, true)));
          }
        });
        return parts.length ? parts.join('&') : '';
      }
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
      }
      var ngAttrPrefixes = ['ng-', 'data-ng-', 'ng:', 'x-ng-'];
      function getNgAttribute(element, ngAttr) {
        var attr,
            i,
            ii = ngAttrPrefixes.length;
        for (i = 0; i < ii; ++i) {
          attr = ngAttrPrefixes[i] + ngAttr;
          if (isString(attr = element.getAttribute(attr))) {
            return attr;
          }
        }
        return null;
      }
      function angularInit(element, bootstrap) {
        var appElement,
            module,
            config = {};
        forEach(ngAttrPrefixes, function(prefix) {
          var name = prefix + 'app';
          if (!appElement && element.hasAttribute && element.hasAttribute(name)) {
            appElement = element;
            module = element.getAttribute(name);
          }
        });
        forEach(ngAttrPrefixes, function(prefix) {
          var name = prefix + 'app';
          var candidate;
          if (!appElement && (candidate = element.querySelector('[' + name.replace(':', '\\:') + ']'))) {
            appElement = candidate;
            module = candidate.getAttribute(name);
          }
        });
        if (appElement) {
          config.strictDi = getNgAttribute(appElement, "strict-di") !== null;
          bootstrap(appElement, module ? [module] : [], config);
        }
      }
      function bootstrap(element, modules, config) {
        if (!isObject(config))
          config = {};
        var defaultConfig = {strictDi: false};
        config = extend(defaultConfig, config);
        var doBootstrap = function() {
          element = jqLite(element);
          if (element.injector()) {
            var tag = (element[0] === document) ? 'document' : startingTag(element);
            throw ngMinErr('btstrpd', "App Already Bootstrapped with this Element '{0}'", tag.replace(/</, '&lt;').replace(/>/, '&gt;'));
          }
          modules = modules || [];
          modules.unshift(['$provide', function($provide) {
            $provide.value('$rootElement', element);
          }]);
          if (config.debugInfoEnabled) {
            modules.push(['$compileProvider', function($compileProvider) {
              $compileProvider.debugInfoEnabled(true);
            }]);
          }
          modules.unshift('ng');
          var injector = createInjector(modules, config.strictDi);
          injector.invoke(['$rootScope', '$rootElement', '$compile', '$injector', function bootstrapApply(scope, element, compile, injector) {
            scope.$apply(function() {
              element.data('$injector', injector);
              compile(element)(scope);
            });
          }]);
          return injector;
        };
        var NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/;
        var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        if (window && NG_ENABLE_DEBUG_INFO.test(window.name)) {
          config.debugInfoEnabled = true;
          window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, '');
        }
        if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
          return doBootstrap();
        }
        window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
        angular.resumeBootstrap = function(extraModules) {
          forEach(extraModules, function(module) {
            modules.push(module);
          });
          return doBootstrap();
        };
        if (isFunction(angular.resumeDeferredBootstrap)) {
          angular.resumeDeferredBootstrap();
        }
      }
      function reloadWithDebugInfo() {
        window.name = 'NG_ENABLE_DEBUG_INFO!' + window.name;
        window.location.reload();
      }
      function getTestability(rootElement) {
        var injector = angular.element(rootElement).injector();
        if (!injector) {
          throw ngMinErr('test', 'no injector found for element argument to getTestability');
        }
        return injector.get('$$testability');
      }
      var SNAKE_CASE_REGEXP = /[A-Z]/g;
      function snake_case(name, separator) {
        separator = separator || '_';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }
      var bindJQueryFired = false;
      var skipDestroyOnNextJQueryCleanData;
      function bindJQuery() {
        var originalCleanData;
        if (bindJQueryFired) {
          return;
        }
        var jqName = jq();
        jQuery = window.jQuery;
        if (isDefined(jqName)) {
          jQuery = jqName === null ? undefined : window[jqName];
        }
        if (jQuery && jQuery.fn.on) {
          jqLite = jQuery;
          extend(jQuery.fn, {
            scope: JQLitePrototype.scope,
            isolateScope: JQLitePrototype.isolateScope,
            controller: JQLitePrototype.controller,
            injector: JQLitePrototype.injector,
            inheritedData: JQLitePrototype.inheritedData
          });
          originalCleanData = jQuery.cleanData;
          jQuery.cleanData = function(elems) {
            var events;
            if (!skipDestroyOnNextJQueryCleanData) {
              for (var i = 0,
                  elem; (elem = elems[i]) != null; i++) {
                events = jQuery._data(elem, "events");
                if (events && events.$destroy) {
                  jQuery(elem).triggerHandler('$destroy');
                }
              }
            } else {
              skipDestroyOnNextJQueryCleanData = false;
            }
            originalCleanData(elems);
          };
        } else {
          jqLite = JQLite;
        }
        angular.element = jqLite;
        bindJQueryFired = true;
      }
      function assertArg(arg, name, reason) {
        if (!arg) {
          throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
        }
        return arg;
      }
      function assertArgFn(arg, name, acceptArrayAnnotation) {
        if (acceptArrayAnnotation && isArray(arg)) {
          arg = arg[arg.length - 1];
        }
        assertArg(isFunction(arg), name, 'not a function, got ' + (arg && typeof arg === 'object' ? arg.constructor.name || 'Object' : typeof arg));
        return arg;
      }
      function assertNotHasOwnProperty(name, context) {
        if (name === 'hasOwnProperty') {
          throw ngMinErr('badname', "hasOwnProperty is not a valid {0} name", context);
        }
      }
      function getter(obj, path, bindFnToScope) {
        if (!path)
          return obj;
        var keys = path.split('.');
        var key;
        var lastInstance = obj;
        var len = keys.length;
        for (var i = 0; i < len; i++) {
          key = keys[i];
          if (obj) {
            obj = (lastInstance = obj)[key];
          }
        }
        if (!bindFnToScope && isFunction(obj)) {
          return bind(lastInstance, obj);
        }
        return obj;
      }
      function getBlockNodes(nodes) {
        var node = nodes[0];
        var endNode = nodes[nodes.length - 1];
        var blockNodes = [node];
        do {
          node = node.nextSibling;
          if (!node)
            break;
          blockNodes.push(node);
        } while (node !== endNode);
        return jqLite(blockNodes);
      }
      function createMap() {
        return Object.create(null);
      }
      var NODE_TYPE_ELEMENT = 1;
      var NODE_TYPE_ATTRIBUTE = 2;
      var NODE_TYPE_TEXT = 3;
      var NODE_TYPE_COMMENT = 8;
      var NODE_TYPE_DOCUMENT = 9;
      var NODE_TYPE_DOCUMENT_FRAGMENT = 11;
      function setupModuleLoader(window) {
        var $injectorMinErr = minErr('$injector');
        var ngMinErr = minErr('ng');
        function ensure(obj, name, factory) {
          return obj[name] || (obj[name] = factory());
        }
        var angular = ensure(window, 'angular', Object);
        angular.$$minErr = angular.$$minErr || minErr;
        return ensure(angular, 'module', function() {
          var modules = {};
          return function module(name, requires, configFn) {
            var assertNotHasOwnProperty = function(name, context) {
              if (name === 'hasOwnProperty') {
                throw ngMinErr('badname', 'hasOwnProperty is not a valid {0} name', context);
              }
            };
            assertNotHasOwnProperty(name, 'module');
            if (requires && modules.hasOwnProperty(name)) {
              modules[name] = null;
            }
            return ensure(modules, name, function() {
              if (!requires) {
                throw $injectorMinErr('nomod', "Module '{0}' is not available! You either misspelled " + "the module name or forgot to load it. If registering a module ensure that you " + "specify the dependencies as the second argument.", name);
              }
              var invokeQueue = [];
              var configBlocks = [];
              var runBlocks = [];
              var config = invokeLater('$injector', 'invoke', 'push', configBlocks);
              var moduleInstance = {
                _invokeQueue: invokeQueue,
                _configBlocks: configBlocks,
                _runBlocks: runBlocks,
                requires: requires,
                name: name,
                provider: invokeLater('$provide', 'provider'),
                factory: invokeLater('$provide', 'factory'),
                service: invokeLater('$provide', 'service'),
                value: invokeLater('$provide', 'value'),
                constant: invokeLater('$provide', 'constant', 'unshift'),
                decorator: invokeLater('$provide', 'decorator'),
                animation: invokeLater('$animateProvider', 'register'),
                filter: invokeLater('$filterProvider', 'register'),
                controller: invokeLater('$controllerProvider', 'register'),
                directive: invokeLater('$compileProvider', 'directive'),
                config: config,
                run: function(block) {
                  runBlocks.push(block);
                  return this;
                }
              };
              if (configFn) {
                config(configFn);
              }
              return moduleInstance;
              function invokeLater(provider, method, insertMethod, queue) {
                if (!queue)
                  queue = invokeQueue;
                return function() {
                  queue[insertMethod || 'push']([provider, method, arguments]);
                  return moduleInstance;
                };
              }
            });
          };
        });
      }
      function serializeObject(obj) {
        var seen = [];
        return JSON.stringify(obj, function(key, val) {
          val = toJsonReplacer(key, val);
          if (isObject(val)) {
            if (seen.indexOf(val) >= 0)
              return '<<already seen>>';
            seen.push(val);
          }
          return val;
        });
      }
      function toDebugString(obj) {
        if (typeof obj === 'function') {
          return obj.toString().replace(/ \{[\s\S]*$/, '');
        } else if (typeof obj === 'undefined') {
          return 'undefined';
        } else if (typeof obj !== 'string') {
          return serializeObject(obj);
        }
        return obj;
      }
      var version = {
        full: '1.4.0',
        major: 1,
        minor: 4,
        dot: 0,
        codeName: 'jaracimrman-existence'
      };
      function publishExternalAPI(angular) {
        extend(angular, {
          'bootstrap': bootstrap,
          'copy': copy,
          'extend': extend,
          'merge': merge,
          'equals': equals,
          'element': jqLite,
          'forEach': forEach,
          'injector': createInjector,
          'noop': noop,
          'bind': bind,
          'toJson': toJson,
          'fromJson': fromJson,
          'identity': identity,
          'isUndefined': isUndefined,
          'isDefined': isDefined,
          'isString': isString,
          'isFunction': isFunction,
          'isObject': isObject,
          'isNumber': isNumber,
          'isElement': isElement,
          'isArray': isArray,
          'version': version,
          'isDate': isDate,
          'lowercase': lowercase,
          'uppercase': uppercase,
          'callbacks': {counter: 0},
          'getTestability': getTestability,
          '$$minErr': minErr,
          '$$csp': csp,
          'reloadWithDebugInfo': reloadWithDebugInfo
        });
        angularModule = setupModuleLoader(window);
        try {
          angularModule('ngLocale');
        } catch (e) {
          angularModule('ngLocale', []).provider('$locale', $LocaleProvider);
        }
        angularModule('ng', ['ngLocale'], ['$provide', function ngModule($provide) {
          $provide.provider({$$sanitizeUri: $$SanitizeUriProvider});
          $provide.provider('$compile', $CompileProvider).directive({
            a: htmlAnchorDirective,
            input: inputDirective,
            textarea: inputDirective,
            form: formDirective,
            script: scriptDirective,
            select: selectDirective,
            style: styleDirective,
            option: optionDirective,
            ngBind: ngBindDirective,
            ngBindHtml: ngBindHtmlDirective,
            ngBindTemplate: ngBindTemplateDirective,
            ngClass: ngClassDirective,
            ngClassEven: ngClassEvenDirective,
            ngClassOdd: ngClassOddDirective,
            ngCloak: ngCloakDirective,
            ngController: ngControllerDirective,
            ngForm: ngFormDirective,
            ngHide: ngHideDirective,
            ngIf: ngIfDirective,
            ngInclude: ngIncludeDirective,
            ngInit: ngInitDirective,
            ngNonBindable: ngNonBindableDirective,
            ngPluralize: ngPluralizeDirective,
            ngRepeat: ngRepeatDirective,
            ngShow: ngShowDirective,
            ngStyle: ngStyleDirective,
            ngSwitch: ngSwitchDirective,
            ngSwitchWhen: ngSwitchWhenDirective,
            ngSwitchDefault: ngSwitchDefaultDirective,
            ngOptions: ngOptionsDirective,
            ngTransclude: ngTranscludeDirective,
            ngModel: ngModelDirective,
            ngList: ngListDirective,
            ngChange: ngChangeDirective,
            pattern: patternDirective,
            ngPattern: patternDirective,
            required: requiredDirective,
            ngRequired: requiredDirective,
            minlength: minlengthDirective,
            ngMinlength: minlengthDirective,
            maxlength: maxlengthDirective,
            ngMaxlength: maxlengthDirective,
            ngValue: ngValueDirective,
            ngModelOptions: ngModelOptionsDirective
          }).directive({ngInclude: ngIncludeFillContentDirective}).directive(ngAttributeAliasDirectives).directive(ngEventDirectives);
          $provide.provider({
            $anchorScroll: $AnchorScrollProvider,
            $animate: $AnimateProvider,
            $$animateQueue: $$CoreAnimateQueueProvider,
            $$AnimateRunner: $$CoreAnimateRunnerProvider,
            $browser: $BrowserProvider,
            $cacheFactory: $CacheFactoryProvider,
            $controller: $ControllerProvider,
            $document: $DocumentProvider,
            $exceptionHandler: $ExceptionHandlerProvider,
            $filter: $FilterProvider,
            $interpolate: $InterpolateProvider,
            $interval: $IntervalProvider,
            $http: $HttpProvider,
            $httpParamSerializer: $HttpParamSerializerProvider,
            $httpParamSerializerJQLike: $HttpParamSerializerJQLikeProvider,
            $httpBackend: $HttpBackendProvider,
            $location: $LocationProvider,
            $log: $LogProvider,
            $parse: $ParseProvider,
            $rootScope: $RootScopeProvider,
            $q: $QProvider,
            $$q: $$QProvider,
            $sce: $SceProvider,
            $sceDelegate: $SceDelegateProvider,
            $sniffer: $SnifferProvider,
            $templateCache: $TemplateCacheProvider,
            $templateRequest: $TemplateRequestProvider,
            $$testability: $$TestabilityProvider,
            $timeout: $TimeoutProvider,
            $window: $WindowProvider,
            $$rAF: $$RAFProvider,
            $$asyncCallback: $$AsyncCallbackProvider,
            $$jqLite: $$jqLiteProvider,
            $$HashMap: $$HashMapProvider,
            $$cookieReader: $$CookieReaderProvider
          });
        }]);
      }
      JQLite.expando = 'ng339';
      var jqCache = JQLite.cache = {},
          jqId = 1,
          addEventListenerFn = function(element, type, fn) {
            element.addEventListener(type, fn, false);
          },
          removeEventListenerFn = function(element, type, fn) {
            element.removeEventListener(type, fn, false);
          };
      JQLite._data = function(node) {
        return this.cache[node[this.expando]] || {};
      };
      function jqNextId() {
        return ++jqId;
      }
      var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
      var MOZ_HACK_REGEXP = /^moz([A-Z])/;
      var MOUSE_EVENT_MAP = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      };
      var jqLiteMinErr = minErr('jqLite');
      function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
          return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, 'Moz$1');
      }
      var SINGLE_TAG_REGEXP = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
      var HTML_REGEXP = /<|&#?\w+;/;
      var TAG_NAME_REGEXP = /<([\w:]+)/;
      var XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
      var wrapMap = {
        'option': [1, '<select multiple="multiple">', '</select>'],
        'thead': [1, '<table>', '</table>'],
        'col': [2, '<table><colgroup>', '</colgroup></table>'],
        'tr': [2, '<table><tbody>', '</tbody></table>'],
        'td': [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        '_default': [0, "", ""]
      };
      wrapMap.optgroup = wrapMap.option;
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      function jqLiteIsTextNode(html) {
        return !HTML_REGEXP.test(html);
      }
      function jqLiteAcceptsData(node) {
        var nodeType = node.nodeType;
        return nodeType === NODE_TYPE_ELEMENT || !nodeType || nodeType === NODE_TYPE_DOCUMENT;
      }
      function jqLiteBuildFragment(html, context) {
        var tmp,
            tag,
            wrap,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i;
        if (jqLiteIsTextNode(html)) {
          nodes.push(context.createTextNode(html));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (TAG_NAME_REGEXP.exec(html) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2];
          i = wrap[0];
          while (i--) {
            tmp = tmp.lastChild;
          }
          nodes = concat(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
        fragment.textContent = "";
        fragment.innerHTML = "";
        forEach(nodes, function(node) {
          fragment.appendChild(node);
        });
        return fragment;
      }
      function jqLiteParseHTML(html, context) {
        context = context || document;
        var parsed;
        if ((parsed = SINGLE_TAG_REGEXP.exec(html))) {
          return [context.createElement(parsed[1])];
        }
        if ((parsed = jqLiteBuildFragment(html, context))) {
          return parsed.childNodes;
        }
        return [];
      }
      function JQLite(element) {
        if (element instanceof JQLite) {
          return element;
        }
        var argIsString;
        if (isString(element)) {
          element = trim(element);
          argIsString = true;
        }
        if (!(this instanceof JQLite)) {
          if (argIsString && element.charAt(0) != '<') {
            throw jqLiteMinErr('nosel', 'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element');
          }
          return new JQLite(element);
        }
        if (argIsString) {
          jqLiteAddNodes(this, jqLiteParseHTML(element));
        } else {
          jqLiteAddNodes(this, element);
        }
      }
      function jqLiteClone(element) {
        return element.cloneNode(true);
      }
      function jqLiteDealoc(element, onlyDescendants) {
        if (!onlyDescendants)
          jqLiteRemoveData(element);
        if (element.querySelectorAll) {
          var descendants = element.querySelectorAll('*');
          for (var i = 0,
              l = descendants.length; i < l; i++) {
            jqLiteRemoveData(descendants[i]);
          }
        }
      }
      function jqLiteOff(element, type, fn, unsupported) {
        if (isDefined(unsupported))
          throw jqLiteMinErr('offargs', 'jqLite#off() does not support the `selector` argument');
        var expandoStore = jqLiteExpandoStore(element);
        var events = expandoStore && expandoStore.events;
        var handle = expandoStore && expandoStore.handle;
        if (!handle)
          return;
        if (!type) {
          for (type in events) {
            if (type !== '$destroy') {
              removeEventListenerFn(element, type, handle);
            }
            delete events[type];
          }
        } else {
          forEach(type.split(' '), function(type) {
            if (isDefined(fn)) {
              var listenerFns = events[type];
              arrayRemove(listenerFns || [], fn);
              if (listenerFns && listenerFns.length > 0) {
                return;
              }
            }
            removeEventListenerFn(element, type, handle);
            delete events[type];
          });
        }
      }
      function jqLiteRemoveData(element, name) {
        var expandoId = element.ng339;
        var expandoStore = expandoId && jqCache[expandoId];
        if (expandoStore) {
          if (name) {
            delete expandoStore.data[name];
            return;
          }
          if (expandoStore.handle) {
            if (expandoStore.events.$destroy) {
              expandoStore.handle({}, '$destroy');
            }
            jqLiteOff(element);
          }
          delete jqCache[expandoId];
          element.ng339 = undefined;
        }
      }
      function jqLiteExpandoStore(element, createIfNecessary) {
        var expandoId = element.ng339,
            expandoStore = expandoId && jqCache[expandoId];
        if (createIfNecessary && !expandoStore) {
          element.ng339 = expandoId = jqNextId();
          expandoStore = jqCache[expandoId] = {
            events: {},
            data: {},
            handle: undefined
          };
        }
        return expandoStore;
      }
      function jqLiteData(element, key, value) {
        if (jqLiteAcceptsData(element)) {
          var isSimpleSetter = isDefined(value);
          var isSimpleGetter = !isSimpleSetter && key && !isObject(key);
          var massGetter = !key;
          var expandoStore = jqLiteExpandoStore(element, !isSimpleGetter);
          var data = expandoStore && expandoStore.data;
          if (isSimpleSetter) {
            data[key] = value;
          } else {
            if (massGetter) {
              return data;
            } else {
              if (isSimpleGetter) {
                return data && data[key];
              } else {
                extend(data, key);
              }
            }
          }
        }
      }
      function jqLiteHasClass(element, selector) {
        if (!element.getAttribute)
          return false;
        return ((" " + (element.getAttribute('class') || '') + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1);
      }
      function jqLiteRemoveClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
          forEach(cssClasses.split(' '), function(cssClass) {
            element.setAttribute('class', trim((" " + (element.getAttribute('class') || '') + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " ")));
          });
        }
      }
      function jqLiteAddClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
          var existingClasses = (' ' + (element.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, " ");
          forEach(cssClasses.split(' '), function(cssClass) {
            cssClass = trim(cssClass);
            if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
              existingClasses += cssClass + ' ';
            }
          });
          element.setAttribute('class', trim(existingClasses));
        }
      }
      function jqLiteAddNodes(root, elements) {
        if (elements) {
          if (elements.nodeType) {
            root[root.length++] = elements;
          } else {
            var length = elements.length;
            if (typeof length === 'number' && elements.window !== elements) {
              if (length) {
                for (var i = 0; i < length; i++) {
                  root[root.length++] = elements[i];
                }
              }
            } else {
              root[root.length++] = elements;
            }
          }
        }
      }
      function jqLiteController(element, name) {
        return jqLiteInheritedData(element, '$' + (name || 'ngController') + 'Controller');
      }
      function jqLiteInheritedData(element, name, value) {
        if (element.nodeType == NODE_TYPE_DOCUMENT) {
          element = element.documentElement;
        }
        var names = isArray(name) ? name : [name];
        while (element) {
          for (var i = 0,
              ii = names.length; i < ii; i++) {
            if ((value = jqLite.data(element, names[i])) !== undefined)
              return value;
          }
          element = element.parentNode || (element.nodeType === NODE_TYPE_DOCUMENT_FRAGMENT && element.host);
        }
      }
      function jqLiteEmpty(element) {
        jqLiteDealoc(element, true);
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
      }
      function jqLiteRemove(element, keepData) {
        if (!keepData)
          jqLiteDealoc(element);
        var parent = element.parentNode;
        if (parent)
          parent.removeChild(element);
      }
      function jqLiteDocumentLoaded(action, win) {
        win = win || window;
        if (win.document.readyState === 'complete') {
          win.setTimeout(action);
        } else {
          jqLite(win).on('load', action);
        }
      }
      var JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
          var fired = false;
          function trigger() {
            if (fired)
              return;
            fired = true;
            fn();
          }
          if (document.readyState === 'complete') {
            setTimeout(trigger);
          } else {
            this.on('DOMContentLoaded', trigger);
            JQLite(window).on('load', trigger);
          }
        },
        toString: function() {
          var value = [];
          forEach(this, function(e) {
            value.push('' + e);
          });
          return '[' + value.join(', ') + ']';
        },
        eq: function(index) {
          return (index >= 0) ? jqLite(this[index]) : jqLite(this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
      };
      var BOOLEAN_ATTR = {};
      forEach('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
      });
      var BOOLEAN_ELEMENTS = {};
      forEach('input,select,option,textarea,button,form,details'.split(','), function(value) {
        BOOLEAN_ELEMENTS[value] = true;
      });
      var ALIASED_ATTR = {
        'ngMinlength': 'minlength',
        'ngMaxlength': 'maxlength',
        'ngMin': 'min',
        'ngMax': 'max',
        'ngPattern': 'pattern'
      };
      function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[nodeName_(element)] && booleanAttr;
      }
      function getAliasedAttrName(element, name) {
        var nodeName = element.nodeName;
        return (nodeName === 'INPUT' || nodeName === 'TEXTAREA') && ALIASED_ATTR[name];
      }
      forEach({
        data: jqLiteData,
        removeData: jqLiteRemoveData
      }, function(fn, name) {
        JQLite[name] = fn;
      });
      forEach({
        data: jqLiteData,
        inheritedData: jqLiteInheritedData,
        scope: function(element) {
          return jqLite.data(element, '$scope') || jqLiteInheritedData(element.parentNode || element, ['$isolateScope', '$scope']);
        },
        isolateScope: function(element) {
          return jqLite.data(element, '$isolateScope') || jqLite.data(element, '$isolateScopeNoTemplate');
        },
        controller: jqLiteController,
        injector: function(element) {
          return jqLiteInheritedData(element, '$injector');
        },
        removeAttr: function(element, name) {
          element.removeAttribute(name);
        },
        hasClass: jqLiteHasClass,
        css: function(element, name, value) {
          name = camelCase(name);
          if (isDefined(value)) {
            element.style[name] = value;
          } else {
            return element.style[name];
          }
        },
        attr: function(element, name, value) {
          var nodeType = element.nodeType;
          if (nodeType === NODE_TYPE_TEXT || nodeType === NODE_TYPE_ATTRIBUTE || nodeType === NODE_TYPE_COMMENT) {
            return;
          }
          var lowercasedName = lowercase(name);
          if (BOOLEAN_ATTR[lowercasedName]) {
            if (isDefined(value)) {
              if (!!value) {
                element[name] = true;
                element.setAttribute(name, lowercasedName);
              } else {
                element[name] = false;
                element.removeAttribute(lowercasedName);
              }
            } else {
              return (element[name] || (element.attributes.getNamedItem(name) || noop).specified) ? lowercasedName : undefined;
            }
          } else if (isDefined(value)) {
            element.setAttribute(name, value);
          } else if (element.getAttribute) {
            var ret = element.getAttribute(name, 2);
            return ret === null ? undefined : ret;
          }
        },
        prop: function(element, name, value) {
          if (isDefined(value)) {
            element[name] = value;
          } else {
            return element[name];
          }
        },
        text: (function() {
          getText.$dv = '';
          return getText;
          function getText(element, value) {
            if (isUndefined(value)) {
              var nodeType = element.nodeType;
              return (nodeType === NODE_TYPE_ELEMENT || nodeType === NODE_TYPE_TEXT) ? element.textContent : '';
            }
            element.textContent = value;
          }
        })(),
        val: function(element, value) {
          if (isUndefined(value)) {
            if (element.multiple && nodeName_(element) === 'select') {
              var result = [];
              forEach(element.options, function(option) {
                if (option.selected) {
                  result.push(option.value || option.text);
                }
              });
              return result.length === 0 ? null : result;
            }
            return element.value;
          }
          element.value = value;
        },
        html: function(element, value) {
          if (isUndefined(value)) {
            return element.innerHTML;
          }
          jqLiteDealoc(element, true);
          element.innerHTML = value;
        },
        empty: jqLiteEmpty
      }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
          var i,
              key;
          var nodeCount = this.length;
          if (fn !== jqLiteEmpty && (((fn.length == 2 && (fn !== jqLiteHasClass && fn !== jqLiteController)) ? arg1 : arg2) === undefined)) {
            if (isObject(arg1)) {
              for (i = 0; i < nodeCount; i++) {
                if (fn === jqLiteData) {
                  fn(this[i], arg1);
                } else {
                  for (key in arg1) {
                    fn(this[i], key, arg1[key]);
                  }
                }
              }
              return this;
            } else {
              var value = fn.$dv;
              var jj = (value === undefined) ? Math.min(nodeCount, 1) : nodeCount;
              for (var j = 0; j < jj; j++) {
                var nodeValue = fn(this[j], arg1, arg2);
                value = value ? value + nodeValue : nodeValue;
              }
              return value;
            }
          } else {
            for (i = 0; i < nodeCount; i++) {
              fn(this[i], arg1, arg2);
            }
            return this;
          }
        };
      });
      function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
          event.isDefaultPrevented = function() {
            return event.defaultPrevented;
          };
          var eventFns = events[type || event.type];
          var eventFnsLength = eventFns ? eventFns.length : 0;
          if (!eventFnsLength)
            return;
          if (isUndefined(event.immediatePropagationStopped)) {
            var originalStopImmediatePropagation = event.stopImmediatePropagation;
            event.stopImmediatePropagation = function() {
              event.immediatePropagationStopped = true;
              if (event.stopPropagation) {
                event.stopPropagation();
              }
              if (originalStopImmediatePropagation) {
                originalStopImmediatePropagation.call(event);
              }
            };
          }
          event.isImmediatePropagationStopped = function() {
            return event.immediatePropagationStopped === true;
          };
          if ((eventFnsLength > 1)) {
            eventFns = shallowCopy(eventFns);
          }
          for (var i = 0; i < eventFnsLength; i++) {
            if (!event.isImmediatePropagationStopped()) {
              eventFns[i].call(element, event);
            }
          }
        };
        eventHandler.elem = element;
        return eventHandler;
      }
      forEach({
        removeData: jqLiteRemoveData,
        on: function jqLiteOn(element, type, fn, unsupported) {
          if (isDefined(unsupported))
            throw jqLiteMinErr('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');
          if (!jqLiteAcceptsData(element)) {
            return;
          }
          var expandoStore = jqLiteExpandoStore(element, true);
          var events = expandoStore.events;
          var handle = expandoStore.handle;
          if (!handle) {
            handle = expandoStore.handle = createEventHandler(element, events);
          }
          var types = type.indexOf(' ') >= 0 ? type.split(' ') : [type];
          var i = types.length;
          while (i--) {
            type = types[i];
            var eventFns = events[type];
            if (!eventFns) {
              events[type] = [];
              if (type === 'mouseenter' || type === 'mouseleave') {
                jqLiteOn(element, MOUSE_EVENT_MAP[type], function(event) {
                  var target = this,
                      related = event.relatedTarget;
                  if (!related || (related !== target && !target.contains(related))) {
                    handle(event, type);
                  }
                });
              } else {
                if (type !== '$destroy') {
                  addEventListenerFn(element, type, handle);
                }
              }
              eventFns = events[type];
            }
            eventFns.push(fn);
          }
        },
        off: jqLiteOff,
        one: function(element, type, fn) {
          element = jqLite(element);
          element.on(type, function onFn() {
            element.off(type, fn);
            element.off(type, onFn);
          });
          element.on(type, fn);
        },
        replaceWith: function(element, replaceNode) {
          var index,
              parent = element.parentNode;
          jqLiteDealoc(element);
          forEach(new JQLite(replaceNode), function(node) {
            if (index) {
              parent.insertBefore(node, index.nextSibling);
            } else {
              parent.replaceChild(node, element);
            }
            index = node;
          });
        },
        children: function(element) {
          var children = [];
          forEach(element.childNodes, function(element) {
            if (element.nodeType === NODE_TYPE_ELEMENT) {
              children.push(element);
            }
          });
          return children;
        },
        contents: function(element) {
          return element.contentDocument || element.childNodes || [];
        },
        append: function(element, node) {
          var nodeType = element.nodeType;
          if (nodeType !== NODE_TYPE_ELEMENT && nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT)
            return;
          node = new JQLite(node);
          for (var i = 0,
              ii = node.length; i < ii; i++) {
            var child = node[i];
            element.appendChild(child);
          }
        },
        prepend: function(element, node) {
          if (element.nodeType === NODE_TYPE_ELEMENT) {
            var index = element.firstChild;
            forEach(new JQLite(node), function(child) {
              element.insertBefore(child, index);
            });
          }
        },
        wrap: function(element, wrapNode) {
          wrapNode = jqLite(wrapNode).eq(0).clone()[0];
          var parent = element.parentNode;
          if (parent) {
            parent.replaceChild(wrapNode, element);
          }
          wrapNode.appendChild(element);
        },
        remove: jqLiteRemove,
        detach: function(element) {
          jqLiteRemove(element, true);
        },
        after: function(element, newElement) {
          var index = element,
              parent = element.parentNode;
          newElement = new JQLite(newElement);
          for (var i = 0,
              ii = newElement.length; i < ii; i++) {
            var node = newElement[i];
            parent.insertBefore(node, index.nextSibling);
            index = node;
          }
        },
        addClass: jqLiteAddClass,
        removeClass: jqLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
          if (selector) {
            forEach(selector.split(' '), function(className) {
              var classCondition = condition;
              if (isUndefined(classCondition)) {
                classCondition = !jqLiteHasClass(element, className);
              }
              (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className);
            });
          }
        },
        parent: function(element) {
          var parent = element.parentNode;
          return parent && parent.nodeType !== NODE_TYPE_DOCUMENT_FRAGMENT ? parent : null;
        },
        next: function(element) {
          return element.nextElementSibling;
        },
        find: function(element, selector) {
          if (element.getElementsByTagName) {
            return element.getElementsByTagName(selector);
          } else {
            return [];
          }
        },
        clone: jqLiteClone,
        triggerHandler: function(element, event, extraParameters) {
          var dummyEvent,
              eventFnsCopy,
              handlerArgs;
          var eventName = event.type || event;
          var expandoStore = jqLiteExpandoStore(element);
          var events = expandoStore && expandoStore.events;
          var eventFns = events && events[eventName];
          if (eventFns) {
            dummyEvent = {
              preventDefault: function() {
                this.defaultPrevented = true;
              },
              isDefaultPrevented: function() {
                return this.defaultPrevented === true;
              },
              stopImmediatePropagation: function() {
                this.immediatePropagationStopped = true;
              },
              isImmediatePropagationStopped: function() {
                return this.immediatePropagationStopped === true;
              },
              stopPropagation: noop,
              type: eventName,
              target: element
            };
            if (event.type) {
              dummyEvent = extend(dummyEvent, event);
            }
            eventFnsCopy = shallowCopy(eventFns);
            handlerArgs = extraParameters ? [dummyEvent].concat(extraParameters) : [dummyEvent];
            forEach(eventFnsCopy, function(fn) {
              if (!dummyEvent.isImmediatePropagationStopped()) {
                fn.apply(element, handlerArgs);
              }
            });
          }
        }
      }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2, arg3) {
          var value;
          for (var i = 0,
              ii = this.length; i < ii; i++) {
            if (isUndefined(value)) {
              value = fn(this[i], arg1, arg2, arg3);
              if (isDefined(value)) {
                value = jqLite(value);
              }
            } else {
              jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
            }
          }
          return isDefined(value) ? value : this;
        };
        JQLite.prototype.bind = JQLite.prototype.on;
        JQLite.prototype.unbind = JQLite.prototype.off;
      });
      function $$jqLiteProvider() {
        this.$get = function $$jqLite() {
          return extend(JQLite, {
            hasClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteHasClass(node, classes);
            },
            addClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteAddClass(node, classes);
            },
            removeClass: function(node, classes) {
              if (node.attr)
                node = node[0];
              return jqLiteRemoveClass(node, classes);
            }
          });
        };
      }
      function hashKey(obj, nextUidFn) {
        var key = obj && obj.$$hashKey;
        if (key) {
          if (typeof key === 'function') {
            key = obj.$$hashKey();
          }
          return key;
        }
        var objType = typeof obj;
        if (objType == 'function' || (objType == 'object' && obj !== null)) {
          key = obj.$$hashKey = objType + ':' + (nextUidFn || nextUid)();
        } else {
          key = objType + ':' + obj;
        }
        return key;
      }
      function HashMap(array, isolatedUid) {
        if (isolatedUid) {
          var uid = 0;
          this.nextUid = function() {
            return ++uid;
          };
        }
        forEach(array, this.put, this);
      }
      HashMap.prototype = {
        put: function(key, value) {
          this[hashKey(key, this.nextUid)] = value;
        },
        get: function(key) {
          return this[hashKey(key, this.nextUid)];
        },
        remove: function(key) {
          var value = this[key = hashKey(key, this.nextUid)];
          delete this[key];
          return value;
        }
      };
      var $$HashMapProvider = [function() {
        this.$get = [function() {
          return HashMap;
        }];
      }];
      var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
      var FN_ARG_SPLIT = /,/;
      var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
      var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
      var $injectorMinErr = minErr('$injector');
      function anonFn(fn) {
        var fnText = fn.toString().replace(STRIP_COMMENTS, ''),
            args = fnText.match(FN_ARGS);
        if (args) {
          return 'function(' + (args[1] || '').replace(/[\s\r\n]+/, ' ') + ')';
        }
        return 'fn';
      }
      function annotate(fn, strictDi, name) {
        var $inject,
            fnText,
            argDecl,
            last;
        if (typeof fn === 'function') {
          if (!($inject = fn.$inject)) {
            $inject = [];
            if (fn.length) {
              if (strictDi) {
                if (!isString(name) || !name) {
                  name = fn.name || anonFn(fn);
                }
                throw $injectorMinErr('strictdi', '{0} is not using explicit annotation and cannot be invoked in strict mode', name);
              }
              fnText = fn.toString().replace(STRIP_COMMENTS, '');
              argDecl = fnText.match(FN_ARGS);
              forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
                arg.replace(FN_ARG, function(all, underscore, name) {
                  $inject.push(name);
                });
              });
            }
            fn.$inject = $inject;
          }
        } else if (isArray(fn)) {
          last = fn.length - 1;
          assertArgFn(fn[last], 'fn');
          $inject = fn.slice(0, last);
        } else {
          assertArgFn(fn, 'fn', true);
        }
        return $inject;
      }
      function createInjector(modulesToLoad, strictDi) {
        strictDi = (strictDi === true);
        var INSTANTIATING = {},
            providerSuffix = 'Provider',
            path = [],
            loadedModules = new HashMap([], true),
            providerCache = {$provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
              }},
            providerInjector = (providerCache.$injector = createInternalInjector(providerCache, function(serviceName, caller) {
              if (angular.isString(caller)) {
                path.push(caller);
              }
              throw $injectorMinErr('unpr', "Unknown provider: {0}", path.join(' <- '));
            })),
            instanceCache = {},
            instanceInjector = (instanceCache.$injector = createInternalInjector(instanceCache, function(serviceName, caller) {
              var provider = providerInjector.get(serviceName + providerSuffix, caller);
              return instanceInjector.invoke(provider.$get, provider, undefined, serviceName);
            }));
        forEach(loadModules(modulesToLoad), function(fn) {
          instanceInjector.invoke(fn || noop);
        });
        return instanceInjector;
        function supportObject(delegate) {
          return function(key, value) {
            if (isObject(key)) {
              forEach(key, reverseParams(delegate));
            } else {
              return delegate(key, value);
            }
          };
        }
        function provider(name, provider_) {
          assertNotHasOwnProperty(name, 'service');
          if (isFunction(provider_) || isArray(provider_)) {
            provider_ = providerInjector.instantiate(provider_);
          }
          if (!provider_.$get) {
            throw $injectorMinErr('pget', "Provider '{0}' must define $get factory method.", name);
          }
          return providerCache[name + providerSuffix] = provider_;
        }
        function enforceReturnValue(name, factory) {
          return function enforcedReturnValue() {
            var result = instanceInjector.invoke(factory, this);
            if (isUndefined(result)) {
              throw $injectorMinErr('undef', "Provider '{0}' must return a value from $get factory method.", name);
            }
            return result;
          };
        }
        function factory(name, factoryFn, enforce) {
          return provider(name, {$get: enforce !== false ? enforceReturnValue(name, factoryFn) : factoryFn});
        }
        function service(name, constructor) {
          return factory(name, ['$injector', function($injector) {
            return $injector.instantiate(constructor);
          }]);
        }
        function value(name, val) {
          return factory(name, valueFn(val), false);
        }
        function constant(name, value) {
          assertNotHasOwnProperty(name, 'constant');
          providerCache[name] = value;
          instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
          var origProvider = providerInjector.get(serviceName + providerSuffix),
              orig$get = origProvider.$get;
          origProvider.$get = function() {
            var origInstance = instanceInjector.invoke(orig$get, origProvider);
            return instanceInjector.invoke(decorFn, null, {$delegate: origInstance});
          };
        }
        function loadModules(modulesToLoad) {
          var runBlocks = [],
              moduleFn;
          forEach(modulesToLoad, function(module) {
            if (loadedModules.get(module))
              return;
            loadedModules.put(module, true);
            function runInvokeQueue(queue) {
              var i,
                  ii;
              for (i = 0, ii = queue.length; i < ii; i++) {
                var invokeArgs = queue[i],
                    provider = providerInjector.get(invokeArgs[0]);
                provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
              }
            }
            try {
              if (isString(module)) {
                moduleFn = angularModule(module);
                runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
                runInvokeQueue(moduleFn._invokeQueue);
                runInvokeQueue(moduleFn._configBlocks);
              } else if (isFunction(module)) {
                runBlocks.push(providerInjector.invoke(module));
              } else if (isArray(module)) {
                runBlocks.push(providerInjector.invoke(module));
              } else {
                assertArgFn(module, 'module');
              }
            } catch (e) {
              if (isArray(module)) {
                module = module[module.length - 1];
              }
              if (e.message && e.stack && e.stack.indexOf(e.message) == -1) {
                e = e.message + '\n' + e.stack;
              }
              throw $injectorMinErr('modulerr', "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e);
            }
          });
          return runBlocks;
        }
        function createInternalInjector(cache, factory) {
          function getService(serviceName, caller) {
            if (cache.hasOwnProperty(serviceName)) {
              if (cache[serviceName] === INSTANTIATING) {
                throw $injectorMinErr('cdep', 'Circular dependency found: {0}', serviceName + ' <- ' + path.join(' <- '));
              }
              return cache[serviceName];
            } else {
              try {
                path.unshift(serviceName);
                cache[serviceName] = INSTANTIATING;
                return cache[serviceName] = factory(serviceName, caller);
              } catch (err) {
                if (cache[serviceName] === INSTANTIATING) {
                  delete cache[serviceName];
                }
                throw err;
              } finally {
                path.shift();
              }
            }
          }
          function invoke(fn, self, locals, serviceName) {
            if (typeof locals === 'string') {
              serviceName = locals;
              locals = null;
            }
            var args = [],
                $inject = createInjector.$$annotate(fn, strictDi, serviceName),
                length,
                i,
                key;
            for (i = 0, length = $inject.length; i < length; i++) {
              key = $inject[i];
              if (typeof key !== 'string') {
                throw $injectorMinErr('itkn', 'Incorrect injection token! Expected service name as string, got {0}', key);
              }
              args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key, serviceName));
            }
            if (isArray(fn)) {
              fn = fn[length];
            }
            return fn.apply(self, args);
          }
          function instantiate(Type, locals, serviceName) {
            var instance = Object.create((isArray(Type) ? Type[Type.length - 1] : Type).prototype || null);
            var returnedValue = invoke(Type, instance, locals, serviceName);
            return isObject(returnedValue) || isFunction(returnedValue) ? returnedValue : instance;
          }
          return {
            invoke: invoke,
            instantiate: instantiate,
            get: getService,
            annotate: createInjector.$$annotate,
            has: function(name) {
              return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
            }
          };
        }
      }
      createInjector.$$annotate = annotate;
      function $AnchorScrollProvider() {
        var autoScrollingEnabled = true;
        this.disableAutoScrolling = function() {
          autoScrollingEnabled = false;
        };
        this.$get = ['$window', '$location', '$rootScope', function($window, $location, $rootScope) {
          var document = $window.document;
          function getFirstAnchor(list) {
            var result = null;
            Array.prototype.some.call(list, function(element) {
              if (nodeName_(element) === 'a') {
                result = element;
                return true;
              }
            });
            return result;
          }
          function getYOffset() {
            var offset = scroll.yOffset;
            if (isFunction(offset)) {
              offset = offset();
            } else if (isElement(offset)) {
              var elem = offset[0];
              var style = $window.getComputedStyle(elem);
              if (style.position !== 'fixed') {
                offset = 0;
              } else {
                offset = elem.getBoundingClientRect().bottom;
              }
            } else if (!isNumber(offset)) {
              offset = 0;
            }
            return offset;
          }
          function scrollTo(elem) {
            if (elem) {
              elem.scrollIntoView();
              var offset = getYOffset();
              if (offset) {
                var elemTop = elem.getBoundingClientRect().top;
                $window.scrollBy(0, elemTop - offset);
              }
            } else {
              $window.scrollTo(0, 0);
            }
          }
          function scroll(hash) {
            hash = isString(hash) ? hash : $location.hash();
            var elm;
            if (!hash)
              scrollTo(null);
            else if ((elm = document.getElementById(hash)))
              scrollTo(elm);
            else if ((elm = getFirstAnchor(document.getElementsByName(hash))))
              scrollTo(elm);
            else if (hash === 'top')
              scrollTo(null);
          }
          if (autoScrollingEnabled) {
            $rootScope.$watch(function autoScrollWatch() {
              return $location.hash();
            }, function autoScrollWatchAction(newVal, oldVal) {
              if (newVal === oldVal && newVal === '')
                return;
              jqLiteDocumentLoaded(function() {
                $rootScope.$evalAsync(scroll);
              });
            });
          }
          return scroll;
        }];
      }
      var $animateMinErr = minErr('$animate');
      var ELEMENT_NODE = 1;
      var NG_ANIMATE_CLASSNAME = 'ng-animate';
      function mergeClasses(a, b) {
        if (!a && !b)
          return '';
        if (!a)
          return b;
        if (!b)
          return a;
        if (isArray(a))
          a = a.join(' ');
        if (isArray(b))
          b = b.join(' ');
        return a + ' ' + b;
      }
      function extractElementNode(element) {
        for (var i = 0; i < element.length; i++) {
          var elm = element[i];
          if (elm.nodeType === ELEMENT_NODE) {
            return elm;
          }
        }
      }
      function splitClasses(classes) {
        if (isString(classes)) {
          classes = classes.split(' ');
        }
        var obj = createMap();
        forEach(classes, function(klass) {
          if (klass.length) {
            obj[klass] = true;
          }
        });
        return obj;
      }
      function prepareAnimateOptions(options) {
        return isObject(options) ? options : {};
      }
      var $$CoreAnimateRunnerProvider = function() {
        this.$get = ['$q', '$$rAF', function($q, $$rAF) {
          function AnimateRunner() {}
          AnimateRunner.all = noop;
          AnimateRunner.chain = noop;
          AnimateRunner.prototype = {
            end: noop,
            cancel: noop,
            resume: noop,
            pause: noop,
            complete: noop,
            then: function(pass, fail) {
              return $q(function(resolve) {
                $$rAF(function() {
                  resolve();
                });
              }).then(pass, fail);
            }
          };
          return AnimateRunner;
        }];
      };
      var $$CoreAnimateQueueProvider = function() {
        var postDigestQueue = new HashMap();
        var postDigestElements = [];
        this.$get = ['$$AnimateRunner', '$rootScope', function($$AnimateRunner, $rootScope) {
          return {
            enabled: noop,
            on: noop,
            off: noop,
            pin: noop,
            push: function(element, event, options, domOperation) {
              domOperation && domOperation();
              options = options || {};
              options.from && element.css(options.from);
              options.to && element.css(options.to);
              if (options.addClass || options.removeClass) {
                addRemoveClassesPostDigest(element, options.addClass, options.removeClass);
              }
              return new $$AnimateRunner();
            }
          };
          function addRemoveClassesPostDigest(element, add, remove) {
            var data = postDigestQueue.get(element);
            var classVal;
            if (!data) {
              postDigestQueue.put(element, data = {});
              postDigestElements.push(element);
            }
            if (add) {
              forEach(add.split(' '), function(className) {
                if (className) {
                  data[className] = true;
                }
              });
            }
            if (remove) {
              forEach(remove.split(' '), function(className) {
                if (className) {
                  data[className] = false;
                }
              });
            }
            if (postDigestElements.length > 1)
              return;
            $rootScope.$$postDigest(function() {
              forEach(postDigestElements, function(element) {
                var data = postDigestQueue.get(element);
                if (data) {
                  var existing = splitClasses(element.attr('class'));
                  var toAdd = '';
                  var toRemove = '';
                  forEach(data, function(status, className) {
                    var hasClass = !!existing[className];
                    if (status !== hasClass) {
                      if (status) {
                        toAdd += (toAdd.length ? ' ' : '') + className;
                      } else {
                        toRemove += (toRemove.length ? ' ' : '') + className;
                      }
                    }
                  });
                  forEach(element, function(elm) {
                    toAdd && jqLiteAddClass(elm, toAdd);
                    toRemove && jqLiteRemoveClass(elm, toRemove);
                  });
                  postDigestQueue.remove(element);
                }
              });
              postDigestElements.length = 0;
            });
          }
        }];
      };
      var $AnimateProvider = ['$provide', function($provide) {
        var provider = this;
        this.$$registeredAnimations = Object.create(null);
        this.register = function(name, factory) {
          if (name && name.charAt(0) !== '.') {
            throw $animateMinErr('notcsel', "Expecting class selector starting with '.' got '{0}'.", name);
          }
          var key = name + '-animation';
          provider.$$registeredAnimations[name.substr(1)] = key;
          $provide.factory(key, factory);
        };
        this.classNameFilter = function(expression) {
          if (arguments.length === 1) {
            this.$$classNameFilter = (expression instanceof RegExp) ? expression : null;
            if (this.$$classNameFilter) {
              var reservedRegex = new RegExp("(\\s+|\\/)" + NG_ANIMATE_CLASSNAME + "(\\s+|\\/)");
              if (reservedRegex.test(this.$$classNameFilter.toString())) {
                throw $animateMinErr('nongcls', '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', NG_ANIMATE_CLASSNAME);
              }
            }
          }
          return this.$$classNameFilter;
        };
        this.$get = ['$$animateQueue', function($$animateQueue) {
          function domInsert(element, parentElement, afterElement) {
            if (afterElement) {
              var afterNode = extractElementNode(afterElement);
              if (afterNode && !afterNode.parentNode && !afterNode.previousElementSibling) {
                afterElement = null;
              }
            }
            afterElement ? afterElement.after(element) : parentElement.prepend(element);
          }
          return {
            on: $$animateQueue.on,
            off: $$animateQueue.off,
            pin: $$animateQueue.pin,
            enabled: $$animateQueue.enabled,
            cancel: function(runner) {
              runner.end && runner.end();
            },
            enter: function(element, parent, after, options) {
              parent = parent && jqLite(parent);
              after = after && jqLite(after);
              parent = parent || after.parent();
              domInsert(element, parent, after);
              return $$animateQueue.push(element, 'enter', prepareAnimateOptions(options));
            },
            move: function(element, parent, after, options) {
              parent = parent && jqLite(parent);
              after = after && jqLite(after);
              parent = parent || after.parent();
              domInsert(element, parent, after);
              return $$animateQueue.push(element, 'move', prepareAnimateOptions(options));
            },
            leave: function(element, options) {
              return $$animateQueue.push(element, 'leave', prepareAnimateOptions(options), function() {
                element.remove();
              });
            },
            addClass: function(element, className, options) {
              options = prepareAnimateOptions(options);
              options.addClass = mergeClasses(options.addclass, className);
              return $$animateQueue.push(element, 'addClass', options);
            },
            removeClass: function(element, className, options) {
              options = prepareAnimateOptions(options);
              options.removeClass = mergeClasses(options.removeClass, className);
              return $$animateQueue.push(element, 'removeClass', options);
            },
            setClass: function(element, add, remove, options) {
              options = prepareAnimateOptions(options);
              options.addClass = mergeClasses(options.addClass, add);
              options.removeClass = mergeClasses(options.removeClass, remove);
              return $$animateQueue.push(element, 'setClass', options);
            },
            animate: function(element, from, to, className, options) {
              options = prepareAnimateOptions(options);
              options.from = options.from ? extend(options.from, from) : from;
              options.to = options.to ? extend(options.to, to) : to;
              className = className || 'ng-inline-animate';
              options.tempClasses = mergeClasses(options.tempClasses, className);
              return $$animateQueue.push(element, 'animate', options);
            }
          };
        }];
      }];
      function $$AsyncCallbackProvider() {
        this.$get = ['$$rAF', '$timeout', function($$rAF, $timeout) {
          return $$rAF.supported ? function(fn) {
            return $$rAF(fn);
          } : function(fn) {
            return $timeout(fn, 0, false);
          };
        }];
      }
      function Browser(window, document, $log, $sniffer) {
        var self = this,
            rawDocument = document[0],
            location = window.location,
            history = window.history,
            setTimeout = window.setTimeout,
            clearTimeout = window.clearTimeout,
            pendingDeferIds = {};
        self.isMock = false;
        var outstandingRequestCount = 0;
        var outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest;
        self.$$incOutstandingRequestCount = function() {
          outstandingRequestCount++;
        };
        function completeOutstandingRequest(fn) {
          try {
            fn.apply(null, sliceArgs(arguments, 1));
          } finally {
            outstandingRequestCount--;
            if (outstandingRequestCount === 0) {
              while (outstandingRequestCallbacks.length) {
                try {
                  outstandingRequestCallbacks.pop()();
                } catch (e) {
                  $log.error(e);
                }
              }
            }
          }
        }
        function getHash(url) {
          var index = url.indexOf('#');
          return index === -1 ? '' : url.substr(index + 1);
        }
        self.notifyWhenNoOutstandingRequests = function(callback) {
          if (outstandingRequestCount === 0) {
            callback();
          } else {
            outstandingRequestCallbacks.push(callback);
          }
        };
        var cachedState,
            lastHistoryState,
            lastBrowserUrl = location.href,
            baseElement = document.find('base'),
            reloadLocation = null;
        cacheState();
        lastHistoryState = cachedState;
        self.url = function(url, replace, state) {
          if (isUndefined(state)) {
            state = null;
          }
          if (location !== window.location)
            location = window.location;
          if (history !== window.history)
            history = window.history;
          if (url) {
            var sameState = lastHistoryState === state;
            if (lastBrowserUrl === url && (!$sniffer.history || sameState)) {
              return self;
            }
            var sameBase = lastBrowserUrl && stripHash(lastBrowserUrl) === stripHash(url);
            lastBrowserUrl = url;
            lastHistoryState = state;
            if ($sniffer.history && (!sameBase || !sameState)) {
              history[replace ? 'replaceState' : 'pushState'](state, '', url);
              cacheState();
              lastHistoryState = cachedState;
            } else {
              if (!sameBase) {
                reloadLocation = url;
              }
              if (replace) {
                location.replace(url);
              } else if (!sameBase) {
                location.href = url;
              } else {
                location.hash = getHash(url);
              }
            }
            return self;
          } else {
            return reloadLocation || location.href.replace(/%27/g, "'");
          }
        };
        self.state = function() {
          return cachedState;
        };
        var urlChangeListeners = [],
            urlChangeInit = false;
        function cacheStateAndFireUrlChange() {
          cacheState();
          fireUrlChange();
        }
        function getCurrentState() {
          try {
            return history.state;
          } catch (e) {}
        }
        var lastCachedState = null;
        function cacheState() {
          cachedState = getCurrentState();
          cachedState = isUndefined(cachedState) ? null : cachedState;
          if (equals(cachedState, lastCachedState)) {
            cachedState = lastCachedState;
          }
          lastCachedState = cachedState;
        }
        function fireUrlChange() {
          if (lastBrowserUrl === self.url() && lastHistoryState === cachedState) {
            return;
          }
          lastBrowserUrl = self.url();
          lastHistoryState = cachedState;
          forEach(urlChangeListeners, function(listener) {
            listener(self.url(), cachedState);
          });
        }
        self.onUrlChange = function(callback) {
          if (!urlChangeInit) {
            if ($sniffer.history)
              jqLite(window).on('popstate', cacheStateAndFireUrlChange);
            jqLite(window).on('hashchange', cacheStateAndFireUrlChange);
            urlChangeInit = true;
          }
          urlChangeListeners.push(callback);
          return callback;
        };
        self.$$applicationDestroyed = function() {
          jqLite(window).off('hashchange popstate', cacheStateAndFireUrlChange);
        };
        self.$$checkUrlChange = fireUrlChange;
        self.baseHref = function() {
          var href = baseElement.attr('href');
          return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
        };
        self.defer = function(fn, delay) {
          var timeoutId;
          outstandingRequestCount++;
          timeoutId = setTimeout(function() {
            delete pendingDeferIds[timeoutId];
            completeOutstandingRequest(fn);
          }, delay || 0);
          pendingDeferIds[timeoutId] = true;
          return timeoutId;
        };
        self.defer.cancel = function(deferId) {
          if (pendingDeferIds[deferId]) {
            delete pendingDeferIds[deferId];
            clearTimeout(deferId);
            completeOutstandingRequest(noop);
            return true;
          }
          return false;
        };
      }
      function $BrowserProvider() {
        this.$get = ['$window', '$log', '$sniffer', '$document', function($window, $log, $sniffer, $document) {
          return new Browser($window, $document, $log, $sniffer);
        }];
      }
      function $CacheFactoryProvider() {
        this.$get = function() {
          var caches = {};
          function cacheFactory(cacheId, options) {
            if (cacheId in caches) {
              throw minErr('$cacheFactory')('iid', "CacheId '{0}' is already taken!", cacheId);
            }
            var size = 0,
                stats = extend({}, options, {id: cacheId}),
                data = {},
                capacity = (options && options.capacity) || Number.MAX_VALUE,
                lruHash = {},
                freshEnd = null,
                staleEnd = null;
            return caches[cacheId] = {
              put: function(key, value) {
                if (isUndefined(value))
                  return;
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key] || (lruHash[key] = {key: key});
                  refresh(lruEntry);
                }
                if (!(key in data))
                  size++;
                data[key] = value;
                if (size > capacity) {
                  this.remove(staleEnd.key);
                }
                return value;
              },
              get: function(key) {
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key];
                  if (!lruEntry)
                    return;
                  refresh(lruEntry);
                }
                return data[key];
              },
              remove: function(key) {
                if (capacity < Number.MAX_VALUE) {
                  var lruEntry = lruHash[key];
                  if (!lruEntry)
                    return;
                  if (lruEntry == freshEnd)
                    freshEnd = lruEntry.p;
                  if (lruEntry == staleEnd)
                    staleEnd = lruEntry.n;
                  link(lruEntry.n, lruEntry.p);
                  delete lruHash[key];
                }
                delete data[key];
                size--;
              },
              removeAll: function() {
                data = {};
                size = 0;
                lruHash = {};
                freshEnd = staleEnd = null;
              },
              destroy: function() {
                data = null;
                stats = null;
                lruHash = null;
                delete caches[cacheId];
              },
              info: function() {
                return extend({}, stats, {size: size});
              }
            };
            function refresh(entry) {
              if (entry != freshEnd) {
                if (!staleEnd) {
                  staleEnd = entry;
                } else if (staleEnd == entry) {
                  staleEnd = entry.n;
                }
                link(entry.n, entry.p);
                link(entry, freshEnd);
                freshEnd = entry;
                freshEnd.n = null;
              }
            }
            function link(nextEntry, prevEntry) {
              if (nextEntry != prevEntry) {
                if (nextEntry)
                  nextEntry.p = prevEntry;
                if (prevEntry)
                  prevEntry.n = nextEntry;
              }
            }
          }
          cacheFactory.info = function() {
            var info = {};
            forEach(caches, function(cache, cacheId) {
              info[cacheId] = cache.info();
            });
            return info;
          };
          cacheFactory.get = function(cacheId) {
            return caches[cacheId];
          };
          return cacheFactory;
        };
      }
      function $TemplateCacheProvider() {
        this.$get = ['$cacheFactory', function($cacheFactory) {
          return $cacheFactory('templates');
        }];
      }
      var $compileMinErr = minErr('$compile');
      $CompileProvider.$inject = ['$provide', '$$sanitizeUriProvider'];
      function $CompileProvider($provide, $$sanitizeUriProvider) {
        var hasDirectives = {},
            Suffix = 'Directive',
            COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            CLASS_DIRECTIVE_REGEXP = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            ALL_OR_NOTHING_ATTRS = makeMap('ngSrc,ngSrcset,src,srcset'),
            REQUIRE_PREFIX_REGEXP = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/;
        var EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/;
        function parseIsolateBindings(scope, directiveName, isController) {
          var LOCAL_REGEXP = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/;
          var bindings = {};
          forEach(scope, function(definition, scopeName) {
            var match = definition.match(LOCAL_REGEXP);
            if (!match) {
              throw $compileMinErr('iscp', "Invalid {3} for directive '{0}'." + " Definition: {... {1}: '{2}' ...}", directiveName, scopeName, definition, (isController ? "controller bindings definition" : "isolate scope definition"));
            }
            bindings[scopeName] = {
              mode: match[1][0],
              collection: match[2] === '*',
              optional: match[3] === '?',
              attrName: match[4] || scopeName
            };
          });
          return bindings;
        }
        function parseDirectiveBindings(directive, directiveName) {
          var bindings = {
            isolateScope: null,
            bindToController: null
          };
          if (isObject(directive.scope)) {
            if (directive.bindToController === true) {
              bindings.bindToController = parseIsolateBindings(directive.scope, directiveName, true);
              bindings.isolateScope = {};
            } else {
              bindings.isolateScope = parseIsolateBindings(directive.scope, directiveName, false);
            }
          }
          if (isObject(directive.bindToController)) {
            bindings.bindToController = parseIsolateBindings(directive.bindToController, directiveName, true);
          }
          if (isObject(bindings.bindToController)) {
            var controller = directive.controller;
            var controllerAs = directive.controllerAs;
            if (!controller) {
              throw $compileMinErr('noctrl', "Cannot bind to controller without directive '{0}'s controller.", directiveName);
            } else if (!identifierForController(controller, controllerAs)) {
              throw $compileMinErr('noident', "Cannot bind to controller without identifier for directive '{0}'.", directiveName);
            }
          }
          return bindings;
        }
        function assertValidDirectiveName(name) {
          var letter = name.charAt(0);
          if (!letter || letter !== lowercase(letter)) {
            throw $compileMinErr('baddir', "Directive name '{0}' is invalid. The first character must be a lowercase letter", name);
          }
          if (name !== name.trim()) {
            throw $compileMinErr('baddir', "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", name);
          }
        }
        this.directive = function registerDirective(name, directiveFactory) {
          assertNotHasOwnProperty(name, 'directive');
          if (isString(name)) {
            assertValidDirectiveName(name);
            assertArg(directiveFactory, 'directiveFactory');
            if (!hasDirectives.hasOwnProperty(name)) {
              hasDirectives[name] = [];
              $provide.factory(name + Suffix, ['$injector', '$exceptionHandler', function($injector, $exceptionHandler) {
                var directives = [];
                forEach(hasDirectives[name], function(directiveFactory, index) {
                  try {
                    var directive = $injector.invoke(directiveFactory);
                    if (isFunction(directive)) {
                      directive = {compile: valueFn(directive)};
                    } else if (!directive.compile && directive.link) {
                      directive.compile = valueFn(directive.link);
                    }
                    directive.priority = directive.priority || 0;
                    directive.index = index;
                    directive.name = directive.name || name;
                    directive.require = directive.require || (directive.controller && directive.name);
                    directive.restrict = directive.restrict || 'EA';
                    var bindings = directive.$$bindings = parseDirectiveBindings(directive, directive.name);
                    if (isObject(bindings.isolateScope)) {
                      directive.$$isolateBindings = bindings.isolateScope;
                    }
                    directives.push(directive);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                });
                return directives;
              }]);
            }
            hasDirectives[name].push(directiveFactory);
          } else {
            forEach(name, reverseParams(registerDirective));
          }
          return this;
        };
        this.aHrefSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            $$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp);
            return this;
          } else {
            return $$sanitizeUriProvider.aHrefSanitizationWhitelist();
          }
        };
        this.imgSrcSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            $$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp);
            return this;
          } else {
            return $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
          }
        };
        var debugInfoEnabled = true;
        this.debugInfoEnabled = function(enabled) {
          if (isDefined(enabled)) {
            debugInfoEnabled = enabled;
            return this;
          }
          return debugInfoEnabled;
        };
        this.$get = ['$injector', '$interpolate', '$exceptionHandler', '$templateRequest', '$parse', '$controller', '$rootScope', '$document', '$sce', '$animate', '$$sanitizeUri', function($injector, $interpolate, $exceptionHandler, $templateRequest, $parse, $controller, $rootScope, $document, $sce, $animate, $$sanitizeUri) {
          var Attributes = function(element, attributesToCopy) {
            if (attributesToCopy) {
              var keys = Object.keys(attributesToCopy);
              var i,
                  l,
                  key;
              for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                this[key] = attributesToCopy[key];
              }
            } else {
              this.$attr = {};
            }
            this.$$element = element;
          };
          Attributes.prototype = {
            $normalize: directiveNormalize,
            $addClass: function(classVal) {
              if (classVal && classVal.length > 0) {
                $animate.addClass(this.$$element, classVal);
              }
            },
            $removeClass: function(classVal) {
              if (classVal && classVal.length > 0) {
                $animate.removeClass(this.$$element, classVal);
              }
            },
            $updateClass: function(newClasses, oldClasses) {
              var toAdd = tokenDifference(newClasses, oldClasses);
              if (toAdd && toAdd.length) {
                $animate.addClass(this.$$element, toAdd);
              }
              var toRemove = tokenDifference(oldClasses, newClasses);
              if (toRemove && toRemove.length) {
                $animate.removeClass(this.$$element, toRemove);
              }
            },
            $set: function(key, value, writeAttr, attrName) {
              var node = this.$$element[0],
                  booleanKey = getBooleanAttrName(node, key),
                  aliasedKey = getAliasedAttrName(node, key),
                  observer = key,
                  nodeName;
              if (booleanKey) {
                this.$$element.prop(key, value);
                attrName = booleanKey;
              } else if (aliasedKey) {
                this[aliasedKey] = value;
                observer = aliasedKey;
              }
              this[key] = value;
              if (attrName) {
                this.$attr[key] = attrName;
              } else {
                attrName = this.$attr[key];
                if (!attrName) {
                  this.$attr[key] = attrName = snake_case(key, '-');
                }
              }
              nodeName = nodeName_(this.$$element);
              if ((nodeName === 'a' && key === 'href') || (nodeName === 'img' && key === 'src')) {
                this[key] = value = $$sanitizeUri(value, key === 'src');
              } else if (nodeName === 'img' && key === 'srcset') {
                var result = "";
                var trimmedSrcset = trim(value);
                var srcPattern = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/;
                var pattern = /\s/.test(trimmedSrcset) ? srcPattern : /(,)/;
                var rawUris = trimmedSrcset.split(pattern);
                var nbrUrisWith2parts = Math.floor(rawUris.length / 2);
                for (var i = 0; i < nbrUrisWith2parts; i++) {
                  var innerIdx = i * 2;
                  result += $$sanitizeUri(trim(rawUris[innerIdx]), true);
                  result += (" " + trim(rawUris[innerIdx + 1]));
                }
                var lastTuple = trim(rawUris[i * 2]).split(/\s/);
                result += $$sanitizeUri(trim(lastTuple[0]), true);
                if (lastTuple.length === 2) {
                  result += (" " + trim(lastTuple[1]));
                }
                this[key] = value = result;
              }
              if (writeAttr !== false) {
                if (value === null || value === undefined) {
                  this.$$element.removeAttr(attrName);
                } else {
                  this.$$element.attr(attrName, value);
                }
              }
              var $$observers = this.$$observers;
              $$observers && forEach($$observers[observer], function(fn) {
                try {
                  fn(value);
                } catch (e) {
                  $exceptionHandler(e);
                }
              });
            },
            $observe: function(key, fn) {
              var attrs = this,
                  $$observers = (attrs.$$observers || (attrs.$$observers = createMap())),
                  listeners = ($$observers[key] || ($$observers[key] = []));
              listeners.push(fn);
              $rootScope.$evalAsync(function() {
                if (!listeners.$$inter && attrs.hasOwnProperty(key)) {
                  fn(attrs[key]);
                }
              });
              return function() {
                arrayRemove(listeners, fn);
              };
            }
          };
          function safeAddClass($element, className) {
            try {
              $element.addClass(className);
            } catch (e) {}
          }
          var startSymbol = $interpolate.startSymbol(),
              endSymbol = $interpolate.endSymbol(),
              denormalizeTemplate = (startSymbol == '{{' || endSymbol == '}}') ? identity : function denormalizeTemplate(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
              },
              NG_ATTR_BINDING = /^ngAttr[A-Z]/;
          compile.$$addBindingInfo = debugInfoEnabled ? function $$addBindingInfo($element, binding) {
            var bindings = $element.data('$binding') || [];
            if (isArray(binding)) {
              bindings = bindings.concat(binding);
            } else {
              bindings.push(binding);
            }
            $element.data('$binding', bindings);
          } : noop;
          compile.$$addBindingClass = debugInfoEnabled ? function $$addBindingClass($element) {
            safeAddClass($element, 'ng-binding');
          } : noop;
          compile.$$addScopeInfo = debugInfoEnabled ? function $$addScopeInfo($element, scope, isolated, noTemplate) {
            var dataName = isolated ? (noTemplate ? '$isolateScopeNoTemplate' : '$isolateScope') : '$scope';
            $element.data(dataName, scope);
          } : noop;
          compile.$$addScopeClass = debugInfoEnabled ? function $$addScopeClass($element, isolated) {
            safeAddClass($element, isolated ? 'ng-isolate-scope' : 'ng-scope');
          } : noop;
          return compile;
          function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
            if (!($compileNodes instanceof jqLite)) {
              $compileNodes = jqLite($compileNodes);
            }
            forEach($compileNodes, function(node, index) {
              if (node.nodeType == NODE_TYPE_TEXT && node.nodeValue.match(/\S+/)) {
                $compileNodes[index] = jqLite(node).wrap('<span></span>').parent()[0];
              }
            });
            var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
            compile.$$addScopeClass($compileNodes);
            var namespace = null;
            return function publicLinkFn(scope, cloneConnectFn, options) {
              assertArg(scope, 'scope');
              options = options || {};
              var parentBoundTranscludeFn = options.parentBoundTranscludeFn,
                  transcludeControllers = options.transcludeControllers,
                  futureParentElement = options.futureParentElement;
              if (parentBoundTranscludeFn && parentBoundTranscludeFn.$$boundTransclude) {
                parentBoundTranscludeFn = parentBoundTranscludeFn.$$boundTransclude;
              }
              if (!namespace) {
                namespace = detectNamespaceForChildElements(futureParentElement);
              }
              var $linkNode;
              if (namespace !== 'html') {
                $linkNode = jqLite(wrapTemplate(namespace, jqLite('<div>').append($compileNodes).html()));
              } else if (cloneConnectFn) {
                $linkNode = JQLitePrototype.clone.call($compileNodes);
              } else {
                $linkNode = $compileNodes;
              }
              if (transcludeControllers) {
                for (var controllerName in transcludeControllers) {
                  $linkNode.data('$' + controllerName + 'Controller', transcludeControllers[controllerName].instance);
                }
              }
              compile.$$addScopeInfo($linkNode, scope);
              if (cloneConnectFn)
                cloneConnectFn($linkNode, scope);
              if (compositeLinkFn)
                compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn);
              return $linkNode;
            };
          }
          function detectNamespaceForChildElements(parentElement) {
            var node = parentElement && parentElement[0];
            if (!node) {
              return 'html';
            } else {
              return nodeName_(node) !== 'foreignobject' && node.toString().match(/SVG/) ? 'svg' : 'html';
            }
          }
          function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
            var linkFns = [],
                attrs,
                directives,
                nodeLinkFn,
                childNodes,
                childLinkFn,
                linkFnFound,
                nodeLinkFnFound;
            for (var i = 0; i < nodeList.length; i++) {
              attrs = new Attributes();
              directives = collectDirectives(nodeList[i], [], attrs, i === 0 ? maxPriority : undefined, ignoreDirective);
              nodeLinkFn = (directives.length) ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null;
              if (nodeLinkFn && nodeLinkFn.scope) {
                compile.$$addScopeClass(attrs.$$element);
              }
              childLinkFn = (nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length) ? null : compileNodes(childNodes, nodeLinkFn ? ((nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement) && nodeLinkFn.transclude) : transcludeFn);
              if (nodeLinkFn || childLinkFn) {
                linkFns.push(i, nodeLinkFn, childLinkFn);
                linkFnFound = true;
                nodeLinkFnFound = nodeLinkFnFound || nodeLinkFn;
              }
              previousCompileContext = null;
            }
            return linkFnFound ? compositeLinkFn : null;
            function compositeLinkFn(scope, nodeList, $rootElement, parentBoundTranscludeFn) {
              var nodeLinkFn,
                  childLinkFn,
                  node,
                  childScope,
                  i,
                  ii,
                  idx,
                  childBoundTranscludeFn;
              var stableNodeList;
              if (nodeLinkFnFound) {
                var nodeListLength = nodeList.length;
                stableNodeList = new Array(nodeListLength);
                for (i = 0; i < linkFns.length; i += 3) {
                  idx = linkFns[i];
                  stableNodeList[idx] = nodeList[idx];
                }
              } else {
                stableNodeList = nodeList;
              }
              for (i = 0, ii = linkFns.length; i < ii; ) {
                node = stableNodeList[linkFns[i++]];
                nodeLinkFn = linkFns[i++];
                childLinkFn = linkFns[i++];
                if (nodeLinkFn) {
                  if (nodeLinkFn.scope) {
                    childScope = scope.$new();
                    compile.$$addScopeInfo(jqLite(node), childScope);
                    var destroyBindings = nodeLinkFn.$$destroyBindings;
                    if (destroyBindings) {
                      nodeLinkFn.$$destroyBindings = null;
                      childScope.$on('$destroyed', destroyBindings);
                    }
                  } else {
                    childScope = scope;
                  }
                  if (nodeLinkFn.transcludeOnThisElement) {
                    childBoundTranscludeFn = createBoundTranscludeFn(scope, nodeLinkFn.transclude, parentBoundTranscludeFn, nodeLinkFn.elementTranscludeOnThisElement);
                  } else if (!nodeLinkFn.templateOnThisElement && parentBoundTranscludeFn) {
                    childBoundTranscludeFn = parentBoundTranscludeFn;
                  } else if (!parentBoundTranscludeFn && transcludeFn) {
                    childBoundTranscludeFn = createBoundTranscludeFn(scope, transcludeFn);
                  } else {
                    childBoundTranscludeFn = null;
                  }
                  nodeLinkFn(childLinkFn, childScope, node, $rootElement, childBoundTranscludeFn, nodeLinkFn);
                } else if (childLinkFn) {
                  childLinkFn(scope, node.childNodes, undefined, parentBoundTranscludeFn);
                }
              }
            }
          }
          function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn, elementTransclusion) {
            var boundTranscludeFn = function(transcludedScope, cloneFn, controllers, futureParentElement, containingScope) {
              if (!transcludedScope) {
                transcludedScope = scope.$new(false, containingScope);
                transcludedScope.$$transcluded = true;
              }
              return transcludeFn(transcludedScope, cloneFn, {
                parentBoundTranscludeFn: previousBoundTranscludeFn,
                transcludeControllers: controllers,
                futureParentElement: futureParentElement
              });
            };
            return boundTranscludeFn;
          }
          function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
            var nodeType = node.nodeType,
                attrsMap = attrs.$attr,
                match,
                className;
            switch (nodeType) {
              case NODE_TYPE_ELEMENT:
                addDirective(directives, directiveNormalize(nodeName_(node)), 'E', maxPriority, ignoreDirective);
                for (var attr,
                    name,
                    nName,
                    ngAttrName,
                    value,
                    isNgAttr,
                    nAttrs = node.attributes,
                    j = 0,
                    jj = nAttrs && nAttrs.length; j < jj; j++) {
                  var attrStartName = false;
                  var attrEndName = false;
                  attr = nAttrs[j];
                  name = attr.name;
                  value = trim(attr.value);
                  ngAttrName = directiveNormalize(name);
                  if (isNgAttr = NG_ATTR_BINDING.test(ngAttrName)) {
                    name = name.replace(PREFIX_REGEXP, '').substr(8).replace(/_(.)/g, function(match, letter) {
                      return letter.toUpperCase();
                    });
                  }
                  var directiveNName = ngAttrName.replace(/(Start|End)$/, '');
                  if (directiveIsMultiElement(directiveNName)) {
                    if (ngAttrName === directiveNName + 'Start') {
                      attrStartName = name;
                      attrEndName = name.substr(0, name.length - 5) + 'end';
                      name = name.substr(0, name.length - 6);
                    }
                  }
                  nName = directiveNormalize(name.toLowerCase());
                  attrsMap[nName] = name;
                  if (isNgAttr || !attrs.hasOwnProperty(nName)) {
                    attrs[nName] = value;
                    if (getBooleanAttrName(node, nName)) {
                      attrs[nName] = true;
                    }
                  }
                  addAttrInterpolateDirective(node, directives, value, nName, isNgAttr);
                  addDirective(directives, nName, 'A', maxPriority, ignoreDirective, attrStartName, attrEndName);
                }
                className = node.className;
                if (isObject(className)) {
                  className = className.animVal;
                }
                if (isString(className) && className !== '') {
                  while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
                    nName = directiveNormalize(match[2]);
                    if (addDirective(directives, nName, 'C', maxPriority, ignoreDirective)) {
                      attrs[nName] = trim(match[3]);
                    }
                    className = className.substr(match.index + match[0].length);
                  }
                }
                break;
              case NODE_TYPE_TEXT:
                addTextInterpolateDirective(directives, node.nodeValue);
                break;
              case NODE_TYPE_COMMENT:
                try {
                  match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
                  if (match) {
                    nName = directiveNormalize(match[1]);
                    if (addDirective(directives, nName, 'M', maxPriority, ignoreDirective)) {
                      attrs[nName] = trim(match[2]);
                    }
                  }
                } catch (e) {}
                break;
            }
            directives.sort(byPriority);
            return directives;
          }
          function groupScan(node, attrStart, attrEnd) {
            var nodes = [];
            var depth = 0;
            if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
              do {
                if (!node) {
                  throw $compileMinErr('uterdir', "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                }
                if (node.nodeType == NODE_TYPE_ELEMENT) {
                  if (node.hasAttribute(attrStart))
                    depth++;
                  if (node.hasAttribute(attrEnd))
                    depth--;
                }
                nodes.push(node);
                node = node.nextSibling;
              } while (depth > 0);
            } else {
              nodes.push(node);
            }
            return jqLite(nodes);
          }
          function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
            return function(scope, element, attrs, controllers, transcludeFn) {
              element = groupScan(element[0], attrStart, attrEnd);
              return linkFn(scope, element, attrs, controllers, transcludeFn);
            };
          }
          function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
            previousCompileContext = previousCompileContext || {};
            var terminalPriority = -Number.MAX_VALUE,
                newScopeDirective,
                controllerDirectives = previousCompileContext.controllerDirectives,
                newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective,
                templateDirective = previousCompileContext.templateDirective,
                nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective,
                hasTranscludeDirective = false,
                hasTemplate = false,
                hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective,
                $compileNode = templateAttrs.$$element = jqLite(compileNode),
                directive,
                directiveName,
                $template,
                replaceDirective = originalReplaceDirective,
                childTranscludeFn = transcludeFn,
                linkFn,
                directiveValue;
            for (var i = 0,
                ii = directives.length; i < ii; i++) {
              directive = directives[i];
              var attrStart = directive.$$start;
              var attrEnd = directive.$$end;
              if (attrStart) {
                $compileNode = groupScan(compileNode, attrStart, attrEnd);
              }
              $template = undefined;
              if (terminalPriority > directive.priority) {
                break;
              }
              if (directiveValue = directive.scope) {
                if (!directive.templateUrl) {
                  if (isObject(directiveValue)) {
                    assertNoDuplicate('new/isolated scope', newIsolateScopeDirective || newScopeDirective, directive, $compileNode);
                    newIsolateScopeDirective = directive;
                  } else {
                    assertNoDuplicate('new/isolated scope', newIsolateScopeDirective, directive, $compileNode);
                  }
                }
                newScopeDirective = newScopeDirective || directive;
              }
              directiveName = directive.name;
              if (!directive.templateUrl && directive.controller) {
                directiveValue = directive.controller;
                controllerDirectives = controllerDirectives || createMap();
                assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode);
                controllerDirectives[directiveName] = directive;
              }
              if (directiveValue = directive.transclude) {
                hasTranscludeDirective = true;
                if (!directive.$$tlb) {
                  assertNoDuplicate('transclusion', nonTlbTranscludeDirective, directive, $compileNode);
                  nonTlbTranscludeDirective = directive;
                }
                if (directiveValue == 'element') {
                  hasElementTranscludeDirective = true;
                  terminalPriority = directive.priority;
                  $template = $compileNode;
                  $compileNode = templateAttrs.$$element = jqLite(document.createComment(' ' + directiveName + ': ' + templateAttrs[directiveName] + ' '));
                  compileNode = $compileNode[0];
                  replaceWith(jqCollection, sliceArgs($template), compileNode);
                  childTranscludeFn = compile($template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {nonTlbTranscludeDirective: nonTlbTranscludeDirective});
                } else {
                  $template = jqLite(jqLiteClone(compileNode)).contents();
                  $compileNode.empty();
                  childTranscludeFn = compile($template, transcludeFn);
                }
              }
              if (directive.template) {
                hasTemplate = true;
                assertNoDuplicate('template', templateDirective, directive, $compileNode);
                templateDirective = directive;
                directiveValue = (isFunction(directive.template)) ? directive.template($compileNode, templateAttrs) : directive.template;
                directiveValue = denormalizeTemplate(directiveValue);
                if (directive.replace) {
                  replaceDirective = directive;
                  if (jqLiteIsTextNode(directiveValue)) {
                    $template = [];
                  } else {
                    $template = removeComments(wrapTemplate(directive.templateNamespace, trim(directiveValue)));
                  }
                  compileNode = $template[0];
                  if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
                    throw $compileMinErr('tplrt', "Template for directive '{0}' must have exactly one root element. {1}", directiveName, '');
                  }
                  replaceWith(jqCollection, $compileNode, compileNode);
                  var newTemplateAttrs = {$attr: {}};
                  var templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs);
                  var unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                  if (newIsolateScopeDirective) {
                    markDirectivesAsIsolate(templateDirectives);
                  }
                  directives = directives.concat(templateDirectives).concat(unprocessedDirectives);
                  mergeTemplateAttributes(templateAttrs, newTemplateAttrs);
                  ii = directives.length;
                } else {
                  $compileNode.html(directiveValue);
                }
              }
              if (directive.templateUrl) {
                hasTemplate = true;
                assertNoDuplicate('template', templateDirective, directive, $compileNode);
                templateDirective = directive;
                if (directive.replace) {
                  replaceDirective = directive;
                }
                nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                  controllerDirectives: controllerDirectives,
                  newIsolateScopeDirective: newIsolateScopeDirective,
                  templateDirective: templateDirective,
                  nonTlbTranscludeDirective: nonTlbTranscludeDirective
                });
                ii = directives.length;
              } else if (directive.compile) {
                try {
                  linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                  if (isFunction(linkFn)) {
                    addLinkFns(null, linkFn, attrStart, attrEnd);
                  } else if (linkFn) {
                    addLinkFns(linkFn.pre, linkFn.post, attrStart, attrEnd);
                  }
                } catch (e) {
                  $exceptionHandler(e, startingTag($compileNode));
                }
              }
              if (directive.terminal) {
                nodeLinkFn.terminal = true;
                terminalPriority = Math.max(terminalPriority, directive.priority);
              }
            }
            nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === true;
            nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective;
            nodeLinkFn.elementTranscludeOnThisElement = hasElementTranscludeDirective;
            nodeLinkFn.templateOnThisElement = hasTemplate;
            nodeLinkFn.transclude = childTranscludeFn;
            previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective;
            return nodeLinkFn;
            function addLinkFns(pre, post, attrStart, attrEnd) {
              if (pre) {
                if (attrStart)
                  pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd);
                pre.require = directive.require;
                pre.directiveName = directiveName;
                if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                  pre = cloneAndAnnotateFn(pre, {isolateScope: true});
                }
                preLinkFns.push(pre);
              }
              if (post) {
                if (attrStart)
                  post = groupElementsLinkFnWrapper(post, attrStart, attrEnd);
                post.require = directive.require;
                post.directiveName = directiveName;
                if (newIsolateScopeDirective === directive || directive.$$isolateScope) {
                  post = cloneAndAnnotateFn(post, {isolateScope: true});
                }
                postLinkFns.push(post);
              }
            }
            function getControllers(directiveName, require, $element, elementControllers) {
              var value;
              if (isString(require)) {
                var match = require.match(REQUIRE_PREFIX_REGEXP);
                var name = require.substring(match[0].length);
                var inheritType = match[1] || match[3];
                var optional = match[2] === '?';
                if (inheritType === '^^') {
                  $element = $element.parent();
                } else {
                  value = elementControllers && elementControllers[name];
                  value = value && value.instance;
                }
                if (!value) {
                  var dataName = '$' + name + 'Controller';
                  value = inheritType ? $element.inheritedData(dataName) : $element.data(dataName);
                }
                if (!value && !optional) {
                  throw $compileMinErr('ctreq', "Controller '{0}', required by directive '{1}', can't be found!", name, directiveName);
                }
              } else if (isArray(require)) {
                value = [];
                for (var i = 0,
                    ii = require.length; i < ii; i++) {
                  value[i] = getControllers(directiveName, require[i], $element, elementControllers);
                }
              }
              return value || null;
            }
            function setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope) {
              var elementControllers = createMap();
              for (var controllerKey in controllerDirectives) {
                var directive = controllerDirectives[controllerKey];
                var locals = {
                  $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                  $element: $element,
                  $attrs: attrs,
                  $transclude: transcludeFn
                };
                var controller = directive.controller;
                if (controller == '@') {
                  controller = attrs[directive.name];
                }
                var controllerInstance = $controller(controller, locals, true, directive.controllerAs);
                elementControllers[directive.name] = controllerInstance;
                if (!hasElementTranscludeDirective) {
                  $element.data('$' + directive.name + 'Controller', controllerInstance.instance);
                }
              }
              return elementControllers;
            }
            function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn, thisLinkFn) {
              var i,
                  ii,
                  linkFn,
                  controller,
                  isolateScope,
                  elementControllers,
                  transcludeFn,
                  $element,
                  attrs;
              if (compileNode === linkNode) {
                attrs = templateAttrs;
                $element = templateAttrs.$$element;
              } else {
                $element = jqLite(linkNode);
                attrs = new Attributes($element, templateAttrs);
              }
              if (newIsolateScopeDirective) {
                isolateScope = scope.$new(true);
              }
              if (boundTranscludeFn) {
                transcludeFn = controllersBoundTransclude;
                transcludeFn.$$boundTransclude = boundTranscludeFn;
              }
              if (controllerDirectives) {
                elementControllers = setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope);
              }
              if (newIsolateScopeDirective) {
                compile.$$addScopeInfo($element, isolateScope, true, !(templateDirective && (templateDirective === newIsolateScopeDirective || templateDirective === newIsolateScopeDirective.$$originalDirective)));
                compile.$$addScopeClass($element, true);
                isolateScope.$$isolateBindings = newIsolateScopeDirective.$$isolateBindings;
                initializeDirectiveBindings(scope, attrs, isolateScope, isolateScope.$$isolateBindings, newIsolateScopeDirective, isolateScope);
              }
              if (elementControllers) {
                var scopeDirective = newIsolateScopeDirective || newScopeDirective;
                var bindings;
                var controllerForBindings;
                if (scopeDirective && elementControllers[scopeDirective.name]) {
                  bindings = scopeDirective.$$bindings.bindToController;
                  controller = elementControllers[scopeDirective.name];
                  if (controller && controller.identifier && bindings) {
                    controllerForBindings = controller;
                    thisLinkFn.$$destroyBindings = initializeDirectiveBindings(scope, attrs, controller.instance, bindings, scopeDirective);
                  }
                }
                for (i in elementControllers) {
                  controller = elementControllers[i];
                  var controllerResult = controller();
                  if (controllerResult !== controller.instance) {
                    controller.instance = controllerResult;
                    $element.data('$' + directive.name + 'Controller', controllerResult);
                    if (controller === controllerForBindings) {
                      thisLinkFn.$$destroyBindings();
                      thisLinkFn.$$destroyBindings = initializeDirectiveBindings(scope, attrs, controllerResult, bindings, scopeDirective);
                    }
                  }
                }
              }
              for (i = 0, ii = preLinkFns.length; i < ii; i++) {
                linkFn = preLinkFns[i];
                invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
              }
              var scopeToChild = scope;
              if (newIsolateScopeDirective && (newIsolateScopeDirective.template || newIsolateScopeDirective.templateUrl === null)) {
                scopeToChild = isolateScope;
              }
              childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, undefined, boundTranscludeFn);
              for (i = postLinkFns.length - 1; i >= 0; i--) {
                linkFn = postLinkFns[i];
                invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
              }
              function controllersBoundTransclude(scope, cloneAttachFn, futureParentElement) {
                var transcludeControllers;
                if (!isScope(scope)) {
                  futureParentElement = cloneAttachFn;
                  cloneAttachFn = scope;
                  scope = undefined;
                }
                if (hasElementTranscludeDirective) {
                  transcludeControllers = elementControllers;
                }
                if (!futureParentElement) {
                  futureParentElement = hasElementTranscludeDirective ? $element.parent() : $element;
                }
                return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
              }
            }
          }
          function markDirectivesAsIsolate(directives) {
            for (var j = 0,
                jj = directives.length; j < jj; j++) {
              directives[j] = inherit(directives[j], {$$isolateScope: true});
            }
          }
          function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
            if (name === ignoreDirective)
              return null;
            var match = null;
            if (hasDirectives.hasOwnProperty(name)) {
              for (var directive,
                  directives = $injector.get(name + Suffix),
                  i = 0,
                  ii = directives.length; i < ii; i++) {
                try {
                  directive = directives[i];
                  if ((maxPriority === undefined || maxPriority > directive.priority) && directive.restrict.indexOf(location) != -1) {
                    if (startAttrName) {
                      directive = inherit(directive, {
                        $$start: startAttrName,
                        $$end: endAttrName
                      });
                    }
                    tDirectives.push(directive);
                    match = directive;
                  }
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
            }
            return match;
          }
          function directiveIsMultiElement(name) {
            if (hasDirectives.hasOwnProperty(name)) {
              for (var directive,
                  directives = $injector.get(name + Suffix),
                  i = 0,
                  ii = directives.length; i < ii; i++) {
                directive = directives[i];
                if (directive.multiElement) {
                  return true;
                }
              }
            }
            return false;
          }
          function mergeTemplateAttributes(dst, src) {
            var srcAttr = src.$attr,
                dstAttr = dst.$attr,
                $element = dst.$$element;
            forEach(dst, function(value, key) {
              if (key.charAt(0) != '$') {
                if (src[key] && src[key] !== value) {
                  value += (key === 'style' ? ';' : ' ') + src[key];
                }
                dst.$set(key, value, true, srcAttr[key]);
              }
            });
            forEach(src, function(value, key) {
              if (key == 'class') {
                safeAddClass($element, value);
                dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
              } else if (key == 'style') {
                $element.attr('style', $element.attr('style') + ';' + value);
                dst['style'] = (dst['style'] ? dst['style'] + ';' : '') + value;
              } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
                dst[key] = value;
                dstAttr[key] = srcAttr[key];
              }
            });
          }
          function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
            var linkQueue = [],
                afterTemplateNodeLinkFn,
                afterTemplateChildLinkFn,
                beforeTemplateCompileNode = $compileNode[0],
                origAsyncDirective = directives.shift(),
                derivedSyncDirective = inherit(origAsyncDirective, {
                  templateUrl: null,
                  transclude: null,
                  replace: null,
                  $$originalDirective: origAsyncDirective
                }),
                templateUrl = (isFunction(origAsyncDirective.templateUrl)) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl,
                templateNamespace = origAsyncDirective.templateNamespace;
            $compileNode.empty();
            $templateRequest($sce.getTrustedResourceUrl(templateUrl)).then(function(content) {
              var compileNode,
                  tempTemplateAttrs,
                  $template,
                  childBoundTranscludeFn;
              content = denormalizeTemplate(content);
              if (origAsyncDirective.replace) {
                if (jqLiteIsTextNode(content)) {
                  $template = [];
                } else {
                  $template = removeComments(wrapTemplate(templateNamespace, trim(content)));
                }
                compileNode = $template[0];
                if ($template.length != 1 || compileNode.nodeType !== NODE_TYPE_ELEMENT) {
                  throw $compileMinErr('tplrt', "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                }
                tempTemplateAttrs = {$attr: {}};
                replaceWith($rootElement, $compileNode, compileNode);
                var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                if (isObject(origAsyncDirective.scope)) {
                  markDirectivesAsIsolate(templateDirectives);
                }
                directives = templateDirectives.concat(directives);
                mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
              } else {
                compileNode = beforeTemplateCompileNode;
                $compileNode.html(content);
              }
              directives.unshift(derivedSyncDirective);
              afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext);
              forEach($rootElement, function(node, i) {
                if (node == compileNode) {
                  $rootElement[i] = $compileNode[0];
                }
              });
              afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);
              while (linkQueue.length) {
                var scope = linkQueue.shift(),
                    beforeTemplateLinkNode = linkQueue.shift(),
                    linkRootElement = linkQueue.shift(),
                    boundTranscludeFn = linkQueue.shift(),
                    linkNode = $compileNode[0];
                if (scope.$$destroyed)
                  continue;
                if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                  var oldClasses = beforeTemplateLinkNode.className;
                  if (!(previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace)) {
                    linkNode = jqLiteClone(compileNode);
                  }
                  replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
                  safeAddClass(jqLite(linkNode), oldClasses);
                }
                if (afterTemplateNodeLinkFn.transcludeOnThisElement) {
                  childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn);
                } else {
                  childBoundTranscludeFn = boundTranscludeFn;
                }
                afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn, afterTemplateNodeLinkFn);
              }
              linkQueue = null;
            });
            return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
              var childBoundTranscludeFn = boundTranscludeFn;
              if (scope.$$destroyed)
                return;
              if (linkQueue) {
                linkQueue.push(scope, node, rootElement, childBoundTranscludeFn);
              } else {
                if (afterTemplateNodeLinkFn.transcludeOnThisElement) {
                  childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn);
                }
                afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, childBoundTranscludeFn, afterTemplateNodeLinkFn);
              }
            };
          }
          function byPriority(a, b) {
            var diff = b.priority - a.priority;
            if (diff !== 0)
              return diff;
            if (a.name !== b.name)
              return (a.name < b.name) ? -1 : 1;
            return a.index - b.index;
          }
          function assertNoDuplicate(what, previousDirective, directive, element) {
            if (previousDirective) {
              throw $compileMinErr('multidir', 'Multiple directives [{0}, {1}] asking for {2} on: {3}', previousDirective.name, directive.name, what, startingTag(element));
            }
          }
          function addTextInterpolateDirective(directives, text) {
            var interpolateFn = $interpolate(text, true);
            if (interpolateFn) {
              directives.push({
                priority: 0,
                compile: function textInterpolateCompileFn(templateNode) {
                  var templateNodeParent = templateNode.parent(),
                      hasCompileParent = !!templateNodeParent.length;
                  if (hasCompileParent)
                    compile.$$addBindingClass(templateNodeParent);
                  return function textInterpolateLinkFn(scope, node) {
                    var parent = node.parent();
                    if (!hasCompileParent)
                      compile.$$addBindingClass(parent);
                    compile.$$addBindingInfo(parent, interpolateFn.expressions);
                    scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
                      node[0].nodeValue = value;
                    });
                  };
                }
              });
            }
          }
          function wrapTemplate(type, template) {
            type = lowercase(type || 'html');
            switch (type) {
              case 'svg':
              case 'math':
                var wrapper = document.createElement('div');
                wrapper.innerHTML = '<' + type + '>' + template + '</' + type + '>';
                return wrapper.childNodes[0].childNodes;
              default:
                return template;
            }
          }
          function getTrustedContext(node, attrNormalizedName) {
            if (attrNormalizedName == "srcdoc") {
              return $sce.HTML;
            }
            var tag = nodeName_(node);
            if (attrNormalizedName == "xlinkHref" || (tag == "form" && attrNormalizedName == "action") || (tag != "img" && (attrNormalizedName == "src" || attrNormalizedName == "ngSrc"))) {
              return $sce.RESOURCE_URL;
            }
          }
          function addAttrInterpolateDirective(node, directives, value, name, allOrNothing) {
            var trustedContext = getTrustedContext(node, name);
            allOrNothing = ALL_OR_NOTHING_ATTRS[name] || allOrNothing;
            var interpolateFn = $interpolate(value, true, trustedContext, allOrNothing);
            if (!interpolateFn)
              return;
            if (name === "multiple" && nodeName_(node) === "select") {
              throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
            }
            directives.push({
              priority: 100,
              compile: function() {
                return {pre: function attrInterpolatePreLinkFn(scope, element, attr) {
                    var $$observers = (attr.$$observers || (attr.$$observers = {}));
                    if (EVENT_HANDLER_ATTR_REGEXP.test(name)) {
                      throw $compileMinErr('nodomevents', "Interpolations for HTML DOM event attributes are disallowed.  Please use the " + "ng- versions (such as ng-click instead of onclick) instead.");
                    }
                    var newValue = attr[name];
                    if (newValue !== value) {
                      interpolateFn = newValue && $interpolate(newValue, true, trustedContext, allOrNothing);
                      value = newValue;
                    }
                    if (!interpolateFn)
                      return;
                    attr[name] = interpolateFn(scope);
                    ($$observers[name] || ($$observers[name] = [])).$$inter = true;
                    (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function interpolateFnWatchAction(newValue, oldValue) {
                      if (name === 'class' && newValue != oldValue) {
                        attr.$updateClass(newValue, oldValue);
                      } else {
                        attr.$set(name, newValue);
                      }
                    });
                  }};
              }
            });
          }
          function replaceWith($rootElement, elementsToRemove, newNode) {
            var firstElementToRemove = elementsToRemove[0],
                removeCount = elementsToRemove.length,
                parent = firstElementToRemove.parentNode,
                i,
                ii;
            if ($rootElement) {
              for (i = 0, ii = $rootElement.length; i < ii; i++) {
                if ($rootElement[i] == firstElementToRemove) {
                  $rootElement[i++] = newNode;
                  for (var j = i,
                      j2 = j + removeCount - 1,
                      jj = $rootElement.length; j < jj; j++, j2++) {
                    if (j2 < jj) {
                      $rootElement[j] = $rootElement[j2];
                    } else {
                      delete $rootElement[j];
                    }
                  }
                  $rootElement.length -= removeCount - 1;
                  if ($rootElement.context === firstElementToRemove) {
                    $rootElement.context = newNode;
                  }
                  break;
                }
              }
            }
            if (parent) {
              parent.replaceChild(newNode, firstElementToRemove);
            }
            var fragment = document.createDocumentFragment();
            fragment.appendChild(firstElementToRemove);
            jqLite(newNode).data(jqLite(firstElementToRemove).data());
            if (!jQuery) {
              delete jqLite.cache[firstElementToRemove[jqLite.expando]];
            } else {
              skipDestroyOnNextJQueryCleanData = true;
              jQuery.cleanData([firstElementToRemove]);
            }
            for (var k = 1,
                kk = elementsToRemove.length; k < kk; k++) {
              var element = elementsToRemove[k];
              jqLite(element).remove();
              fragment.appendChild(element);
              delete elementsToRemove[k];
            }
            elementsToRemove[0] = newNode;
            elementsToRemove.length = 1;
          }
          function cloneAndAnnotateFn(fn, annotation) {
            return extend(function() {
              return fn.apply(null, arguments);
            }, fn, annotation);
          }
          function invokeLinkFn(linkFn, scope, $element, attrs, controllers, transcludeFn) {
            try {
              linkFn(scope, $element, attrs, controllers, transcludeFn);
            } catch (e) {
              $exceptionHandler(e, startingTag($element));
            }
          }
          function initializeDirectiveBindings(scope, attrs, destination, bindings, directive, newScope) {
            var onNewScopeDestroyed;
            forEach(bindings, function(definition, scopeName) {
              var attrName = definition.attrName,
                  optional = definition.optional,
                  mode = definition.mode,
                  lastValue,
                  parentGet,
                  parentSet,
                  compare;
              switch (mode) {
                case '@':
                  attrs.$observe(attrName, function(value) {
                    destination[scopeName] = value;
                  });
                  attrs.$$observers[attrName].$$scope = scope;
                  if (attrs[attrName]) {
                    destination[scopeName] = $interpolate(attrs[attrName])(scope);
                  }
                  break;
                case '=':
                  if (optional && !attrs[attrName]) {
                    return;
                  }
                  parentGet = $parse(attrs[attrName]);
                  if (parentGet.literal) {
                    compare = equals;
                  } else {
                    compare = function(a, b) {
                      return a === b || (a !== a && b !== b);
                    };
                  }
                  parentSet = parentGet.assign || function() {
                    lastValue = destination[scopeName] = parentGet(scope);
                    throw $compileMinErr('nonassign', "Expression '{0}' used with directive '{1}' is non-assignable!", attrs[attrName], directive.name);
                  };
                  lastValue = destination[scopeName] = parentGet(scope);
                  var parentValueWatch = function parentValueWatch(parentValue) {
                    if (!compare(parentValue, destination[scopeName])) {
                      if (!compare(parentValue, lastValue)) {
                        destination[scopeName] = parentValue;
                      } else {
                        parentSet(scope, parentValue = destination[scopeName]);
                      }
                    }
                    return lastValue = parentValue;
                  };
                  parentValueWatch.$stateful = true;
                  var unwatch;
                  if (definition.collection) {
                    unwatch = scope.$watchCollection(attrs[attrName], parentValueWatch);
                  } else {
                    unwatch = scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal);
                  }
                  onNewScopeDestroyed = (onNewScopeDestroyed || []);
                  onNewScopeDestroyed.push(unwatch);
                  break;
                case '&':
                  if (!attrs.hasOwnProperty(attrName) && optional)
                    break;
                  parentGet = $parse(attrs[attrName]);
                  if (parentGet === noop && optional)
                    break;
                  destination[scopeName] = function(locals) {
                    return parentGet(scope, locals);
                  };
                  break;
              }
            });
            var destroyBindings = onNewScopeDestroyed ? function destroyBindings() {
              for (var i = 0,
                  ii = onNewScopeDestroyed.length; i < ii; ++i) {
                onNewScopeDestroyed[i]();
              }
            } : noop;
            if (newScope && destroyBindings !== noop) {
              newScope.$on('$destroy', destroyBindings);
              return noop;
            }
            return destroyBindings;
          }
        }];
      }
      var PREFIX_REGEXP = /^((?:x|data)[\:\-_])/i;
      function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ''));
      }
      function nodesetLinkingFn(scope, nodeList, rootElement, boundTranscludeFn) {}
      function directiveLinkingFn(nodesetLinkingFn, scope, node, rootElement, boundTranscludeFn) {}
      function tokenDifference(str1, str2) {
        var values = '',
            tokens1 = str1.split(/\s+/),
            tokens2 = str2.split(/\s+/);
        outer: for (var i = 0; i < tokens1.length; i++) {
          var token = tokens1[i];
          for (var j = 0; j < tokens2.length; j++) {
            if (token == tokens2[j])
              continue outer;
          }
          values += (values.length > 0 ? ' ' : '') + token;
        }
        return values;
      }
      function removeComments(jqNodes) {
        jqNodes = jqLite(jqNodes);
        var i = jqNodes.length;
        if (i <= 1) {
          return jqNodes;
        }
        while (i--) {
          var node = jqNodes[i];
          if (node.nodeType === NODE_TYPE_COMMENT) {
            splice.call(jqNodes, i, 1);
          }
        }
        return jqNodes;
      }
      var $controllerMinErr = minErr('$controller');
      var CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;
      function identifierForController(controller, ident) {
        if (ident && isString(ident))
          return ident;
        if (isString(controller)) {
          var match = CNTRL_REG.exec(controller);
          if (match)
            return match[3];
        }
      }
      function $ControllerProvider() {
        var controllers = {},
            globals = false;
        this.register = function(name, constructor) {
          assertNotHasOwnProperty(name, 'controller');
          if (isObject(name)) {
            extend(controllers, name);
          } else {
            controllers[name] = constructor;
          }
        };
        this.allowGlobals = function() {
          globals = true;
        };
        this.$get = ['$injector', '$window', function($injector, $window) {
          return function(expression, locals, later, ident) {
            var instance,
                match,
                constructor,
                identifier;
            later = later === true;
            if (ident && isString(ident)) {
              identifier = ident;
            }
            if (isString(expression)) {
              match = expression.match(CNTRL_REG);
              if (!match) {
                throw $controllerMinErr('ctrlfmt', "Badly formed controller string '{0}'. " + "Must match `__name__ as __id__` or `__name__`.", expression);
              }
              constructor = match[1], identifier = identifier || match[3];
              expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, true) || (globals ? getter($window, constructor, true) : undefined);
              assertArgFn(expression, constructor, true);
            }
            if (later) {
              var controllerPrototype = (isArray(expression) ? expression[expression.length - 1] : expression).prototype;
              instance = Object.create(controllerPrototype || null);
              if (identifier) {
                addIdentifier(locals, identifier, instance, constructor || expression.name);
              }
              var instantiate;
              return instantiate = extend(function() {
                var result = $injector.invoke(expression, instance, locals, constructor);
                if (result !== instance && (isObject(result) || isFunction(result))) {
                  instance = result;
                  if (identifier) {
                    addIdentifier(locals, identifier, instance, constructor || expression.name);
                  }
                }
                return instance;
              }, {
                instance: instance,
                identifier: identifier
              });
            }
            instance = $injector.instantiate(expression, locals, constructor);
            if (identifier) {
              addIdentifier(locals, identifier, instance, constructor || expression.name);
            }
            return instance;
          };
          function addIdentifier(locals, identifier, instance, name) {
            if (!(locals && isObject(locals.$scope))) {
              throw minErr('$controller')('noscp', "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", name, identifier);
            }
            locals.$scope[identifier] = instance;
          }
        }];
      }
      function $DocumentProvider() {
        this.$get = ['$window', function(window) {
          return jqLite(window.document);
        }];
      }
      function $ExceptionHandlerProvider() {
        this.$get = ['$log', function($log) {
          return function(exception, cause) {
            $log.error.apply($log, arguments);
          };
        }];
      }
      var APPLICATION_JSON = 'application/json';
      var CONTENT_TYPE_APPLICATION_JSON = {'Content-Type': APPLICATION_JSON + ';charset=utf-8'};
      var JSON_START = /^\[|^\{(?!\{)/;
      var JSON_ENDS = {
        '[': /]$/,
        '{': /}$/
      };
      var JSON_PROTECTION_PREFIX = /^\)\]\}',?\n/;
      function serializeValue(v) {
        if (isObject(v)) {
          return isDate(v) ? v.toISOString() : toJson(v);
        }
        return v;
      }
      function $HttpParamSerializerProvider() {
        this.$get = function() {
          return function ngParamSerializer(params) {
            if (!params)
              return '';
            var parts = [];
            forEachSorted(params, function(value, key) {
              if (value === null || isUndefined(value))
                return;
              if (isArray(value)) {
                forEach(value, function(v, k) {
                  parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(serializeValue(v)));
                });
              } else {
                parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(serializeValue(value)));
              }
            });
            return parts.join('&');
          };
        };
      }
      function $HttpParamSerializerJQLikeProvider() {
        this.$get = function() {
          return function jQueryLikeParamSerializer(params) {
            if (!params)
              return '';
            var parts = [];
            serialize(params, '', true);
            return parts.join('&');
            function serialize(toSerialize, prefix, topLevel) {
              if (toSerialize === null || isUndefined(toSerialize))
                return;
              if (isArray(toSerialize)) {
                forEach(toSerialize, function(value) {
                  serialize(value, prefix + '[]');
                });
              } else if (isObject(toSerialize) && !isDate(toSerialize)) {
                forEachSorted(toSerialize, function(value, key) {
                  serialize(value, prefix + (topLevel ? '' : '[') + key + (topLevel ? '' : ']'));
                });
              } else {
                parts.push(encodeUriQuery(prefix) + '=' + encodeUriQuery(serializeValue(toSerialize)));
              }
            }
          };
        };
      }
      function defaultHttpResponseTransform(data, headers) {
        if (isString(data)) {
          var tempData = data.replace(JSON_PROTECTION_PREFIX, '').trim();
          if (tempData) {
            var contentType = headers('Content-Type');
            if ((contentType && (contentType.indexOf(APPLICATION_JSON) === 0)) || isJsonLike(tempData)) {
              data = fromJson(tempData);
            }
          }
        }
        return data;
      }
      function isJsonLike(str) {
        var jsonStart = str.match(JSON_START);
        return jsonStart && JSON_ENDS[jsonStart[0]].test(str);
      }
      function parseHeaders(headers) {
        var parsed = createMap(),
            i;
        function fillInParsed(key, val) {
          if (key) {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
        if (isString(headers)) {
          forEach(headers.split('\n'), function(line) {
            i = line.indexOf(':');
            fillInParsed(lowercase(trim(line.substr(0, i))), trim(line.substr(i + 1)));
          });
        } else if (isObject(headers)) {
          forEach(headers, function(headerVal, headerKey) {
            fillInParsed(lowercase(headerKey), trim(headerVal));
          });
        }
        return parsed;
      }
      function headersGetter(headers) {
        var headersObj;
        return function(name) {
          if (!headersObj)
            headersObj = parseHeaders(headers);
          if (name) {
            var value = headersObj[lowercase(name)];
            if (value === void 0) {
              value = null;
            }
            return value;
          }
          return headersObj;
        };
      }
      function transformData(data, headers, status, fns) {
        if (isFunction(fns)) {
          return fns(data, headers, status);
        }
        forEach(fns, function(fn) {
          data = fn(data, headers, status);
        });
        return data;
      }
      function isSuccess(status) {
        return 200 <= status && status < 300;
      }
      function $HttpProvider() {
        var defaults = this.defaults = {
          transformResponse: [defaultHttpResponseTransform],
          transformRequest: [function(d) {
            return isObject(d) && !isFile(d) && !isBlob(d) && !isFormData(d) ? toJson(d) : d;
          }],
          headers: {
            common: {'Accept': 'application/json, text/plain, */*'},
            post: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
            put: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
            patch: shallowCopy(CONTENT_TYPE_APPLICATION_JSON)
          },
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          paramSerializer: '$httpParamSerializer'
        };
        var useApplyAsync = false;
        this.useApplyAsync = function(value) {
          if (isDefined(value)) {
            useApplyAsync = !!value;
            return this;
          }
          return useApplyAsync;
        };
        var interceptorFactories = this.interceptors = [];
        this.$get = ['$httpBackend', '$$cookieReader', '$cacheFactory', '$rootScope', '$q', '$injector', function($httpBackend, $$cookieReader, $cacheFactory, $rootScope, $q, $injector) {
          var defaultCache = $cacheFactory('$http');
          defaults.paramSerializer = isString(defaults.paramSerializer) ? $injector.get(defaults.paramSerializer) : defaults.paramSerializer;
          var reversedInterceptors = [];
          forEach(interceptorFactories, function(interceptorFactory) {
            reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
          });
          function $http(requestConfig) {
            if (!angular.isObject(requestConfig)) {
              throw minErr('$http')('badreq', 'Http request configuration must be an object.  Received: {0}', requestConfig);
            }
            var config = extend({
              method: 'get',
              transformRequest: defaults.transformRequest,
              transformResponse: defaults.transformResponse,
              paramSerializer: defaults.paramSerializer
            }, requestConfig);
            config.headers = mergeHeaders(requestConfig);
            config.method = uppercase(config.method);
            config.paramSerializer = isString(config.paramSerializer) ? $injector.get(config.paramSerializer) : config.paramSerializer;
            var serverRequest = function(config) {
              var headers = config.headers;
              var reqData = transformData(config.data, headersGetter(headers), undefined, config.transformRequest);
              if (isUndefined(reqData)) {
                forEach(headers, function(value, header) {
                  if (lowercase(header) === 'content-type') {
                    delete headers[header];
                  }
                });
              }
              if (isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials)) {
                config.withCredentials = defaults.withCredentials;
              }
              return sendReq(config, reqData).then(transformResponse, transformResponse);
            };
            var chain = [serverRequest, undefined];
            var promise = $q.when(config);
            forEach(reversedInterceptors, function(interceptor) {
              if (interceptor.request || interceptor.requestError) {
                chain.unshift(interceptor.request, interceptor.requestError);
              }
              if (interceptor.response || interceptor.responseError) {
                chain.push(interceptor.response, interceptor.responseError);
              }
            });
            while (chain.length) {
              var thenFn = chain.shift();
              var rejectFn = chain.shift();
              promise = promise.then(thenFn, rejectFn);
            }
            promise.success = function(fn) {
              assertArgFn(fn, 'fn');
              promise.then(function(response) {
                fn(response.data, response.status, response.headers, config);
              });
              return promise;
            };
            promise.error = function(fn) {
              assertArgFn(fn, 'fn');
              promise.then(null, function(response) {
                fn(response.data, response.status, response.headers, config);
              });
              return promise;
            };
            return promise;
            function transformResponse(response) {
              var resp = extend({}, response);
              if (!response.data) {
                resp.data = response.data;
              } else {
                resp.data = transformData(response.data, response.headers, response.status, config.transformResponse);
              }
              return (isSuccess(response.status)) ? resp : $q.reject(resp);
            }
            function executeHeaderFns(headers, config) {
              var headerContent,
                  processedHeaders = {};
              forEach(headers, function(headerFn, header) {
                if (isFunction(headerFn)) {
                  headerContent = headerFn(config);
                  if (headerContent != null) {
                    processedHeaders[header] = headerContent;
                  }
                } else {
                  processedHeaders[header] = headerFn;
                }
              });
              return processedHeaders;
            }
            function mergeHeaders(config) {
              var defHeaders = defaults.headers,
                  reqHeaders = extend({}, config.headers),
                  defHeaderName,
                  lowercaseDefHeaderName,
                  reqHeaderName;
              defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]);
              defaultHeadersIteration: for (defHeaderName in defHeaders) {
                lowercaseDefHeaderName = lowercase(defHeaderName);
                for (reqHeaderName in reqHeaders) {
                  if (lowercase(reqHeaderName) === lowercaseDefHeaderName) {
                    continue defaultHeadersIteration;
                  }
                }
                reqHeaders[defHeaderName] = defHeaders[defHeaderName];
              }
              return executeHeaderFns(reqHeaders, shallowCopy(config));
            }
          }
          $http.pendingRequests = [];
          createShortMethods('get', 'delete', 'head', 'jsonp');
          createShortMethodsWithData('post', 'put', 'patch');
          $http.defaults = defaults;
          return $http;
          function createShortMethods(names) {
            forEach(arguments, function(name) {
              $http[name] = function(url, config) {
                return $http(extend({}, config || {}, {
                  method: name,
                  url: url
                }));
              };
            });
          }
          function createShortMethodsWithData(name) {
            forEach(arguments, function(name) {
              $http[name] = function(url, data, config) {
                return $http(extend({}, config || {}, {
                  method: name,
                  url: url,
                  data: data
                }));
              };
            });
          }
          function sendReq(config, reqData) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                cache,
                cachedResp,
                reqHeaders = config.headers,
                url = buildUrl(config.url, config.paramSerializer(config.params));
            $http.pendingRequests.push(config);
            promise.then(removePendingReq, removePendingReq);
            if ((config.cache || defaults.cache) && config.cache !== false && (config.method === 'GET' || config.method === 'JSONP')) {
              cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache;
            }
            if (cache) {
              cachedResp = cache.get(url);
              if (isDefined(cachedResp)) {
                if (isPromiseLike(cachedResp)) {
                  cachedResp.then(resolvePromiseWithResult, resolvePromiseWithResult);
                } else {
                  if (isArray(cachedResp)) {
                    resolvePromise(cachedResp[1], cachedResp[0], shallowCopy(cachedResp[2]), cachedResp[3]);
                  } else {
                    resolvePromise(cachedResp, 200, {}, 'OK');
                  }
                }
              } else {
                cache.put(url, promise);
              }
            }
            if (isUndefined(cachedResp)) {
              var xsrfValue = urlIsSameOrigin(config.url) ? $$cookieReader()[config.xsrfCookieName || defaults.xsrfCookieName] : undefined;
              if (xsrfValue) {
                reqHeaders[(config.xsrfHeaderName || defaults.xsrfHeaderName)] = xsrfValue;
              }
              $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType);
            }
            return promise;
            function done(status, response, headersString, statusText) {
              if (cache) {
                if (isSuccess(status)) {
                  cache.put(url, [status, response, parseHeaders(headersString), statusText]);
                } else {
                  cache.remove(url);
                }
              }
              function resolveHttpPromise() {
                resolvePromise(response, status, headersString, statusText);
              }
              if (useApplyAsync) {
                $rootScope.$applyAsync(resolveHttpPromise);
              } else {
                resolveHttpPromise();
                if (!$rootScope.$$phase)
                  $rootScope.$apply();
              }
            }
            function resolvePromise(response, status, headers, statusText) {
              status = Math.max(status, 0);
              (isSuccess(status) ? deferred.resolve : deferred.reject)({
                data: response,
                status: status,
                headers: headersGetter(headers),
                config: config,
                statusText: statusText
              });
            }
            function resolvePromiseWithResult(result) {
              resolvePromise(result.data, result.status, shallowCopy(result.headers()), result.statusText);
            }
            function removePendingReq() {
              var idx = $http.pendingRequests.indexOf(config);
              if (idx !== -1)
                $http.pendingRequests.splice(idx, 1);
            }
          }
          function buildUrl(url, serializedParams) {
            if (serializedParams.length > 0) {
              url += ((url.indexOf('?') == -1) ? '?' : '&') + serializedParams;
            }
            return url;
          }
        }];
      }
      function createXhr() {
        return new window.XMLHttpRequest();
      }
      function $HttpBackendProvider() {
        this.$get = ['$browser', '$window', '$document', function($browser, $window, $document) {
          return createHttpBackend($browser, createXhr, $browser.defer, $window.angular.callbacks, $document[0]);
        }];
      }
      function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
        return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
          $browser.$$incOutstandingRequestCount();
          url = url || $browser.url();
          if (lowercase(method) == 'jsonp') {
            var callbackId = '_' + (callbacks.counter++).toString(36);
            callbacks[callbackId] = function(data) {
              callbacks[callbackId].data = data;
              callbacks[callbackId].called = true;
            };
            var jsonpDone = jsonpReq(url.replace('JSON_CALLBACK', 'angular.callbacks.' + callbackId), callbackId, function(status, text) {
              completeRequest(callback, status, callbacks[callbackId].data, "", text);
              callbacks[callbackId] = noop;
            });
          } else {
            var xhr = createXhr();
            xhr.open(method, url, true);
            forEach(headers, function(value, key) {
              if (isDefined(value)) {
                xhr.setRequestHeader(key, value);
              }
            });
            xhr.onload = function requestLoaded() {
              var statusText = xhr.statusText || '';
              var response = ('response' in xhr) ? xhr.response : xhr.responseText;
              var status = xhr.status === 1223 ? 204 : xhr.status;
              if (status === 0) {
                status = response ? 200 : urlResolve(url).protocol == 'file' ? 404 : 0;
              }
              completeRequest(callback, status, response, xhr.getAllResponseHeaders(), statusText);
            };
            var requestError = function() {
              completeRequest(callback, -1, null, null, '');
            };
            xhr.onerror = requestError;
            xhr.onabort = requestError;
            if (withCredentials) {
              xhr.withCredentials = true;
            }
            if (responseType) {
              try {
                xhr.responseType = responseType;
              } catch (e) {
                if (responseType !== 'json') {
                  throw e;
                }
              }
            }
            xhr.send(post);
          }
          if (timeout > 0) {
            var timeoutId = $browserDefer(timeoutRequest, timeout);
          } else if (isPromiseLike(timeout)) {
            timeout.then(timeoutRequest);
          }
          function timeoutRequest() {
            jsonpDone && jsonpDone();
            xhr && xhr.abort();
          }
          function completeRequest(callback, status, response, headersString, statusText) {
            if (timeoutId !== undefined) {
              $browserDefer.cancel(timeoutId);
            }
            jsonpDone = xhr = null;
            callback(status, response, headersString, statusText);
            $browser.$$completeOutstandingRequest(noop);
          }
        };
        function jsonpReq(url, callbackId, done) {
          var script = rawDocument.createElement('script'),
              callback = null;
          script.type = "text/javascript";
          script.src = url;
          script.async = true;
          callback = function(event) {
            removeEventListenerFn(script, "load", callback);
            removeEventListenerFn(script, "error", callback);
            rawDocument.body.removeChild(script);
            script = null;
            var status = -1;
            var text = "unknown";
            if (event) {
              if (event.type === "load" && !callbacks[callbackId].called) {
                event = {type: "error"};
              }
              text = event.type;
              status = event.type === "error" ? 404 : 200;
            }
            if (done) {
              done(status, text);
            }
          };
          addEventListenerFn(script, "load", callback);
          addEventListenerFn(script, "error", callback);
          rawDocument.body.appendChild(script);
          return callback;
        }
      }
      var $interpolateMinErr = angular.$interpolateMinErr = minErr('$interpolate');
      $interpolateMinErr.throwNoconcat = function(text) {
        throw $interpolateMinErr('noconcat', "Error while interpolating: {0}\nStrict Contextual Escaping disallows " + "interpolations that concatenate multiple expressions when a trusted value is " + "required.  See http://docs.angularjs.org/api/ng.$sce", text);
      };
      $interpolateMinErr.interr = function(text, err) {
        return $interpolateMinErr('interr', "Can't interpolate: {0}\n{1}", text, err.toString());
      };
      function $InterpolateProvider() {
        var startSymbol = '{{';
        var endSymbol = '}}';
        this.startSymbol = function(value) {
          if (value) {
            startSymbol = value;
            return this;
          } else {
            return startSymbol;
          }
        };
        this.endSymbol = function(value) {
          if (value) {
            endSymbol = value;
            return this;
          } else {
            return endSymbol;
          }
        };
        this.$get = ['$parse', '$exceptionHandler', '$sce', function($parse, $exceptionHandler, $sce) {
          var startSymbolLength = startSymbol.length,
              endSymbolLength = endSymbol.length,
              escapedStartRegexp = new RegExp(startSymbol.replace(/./g, escape), 'g'),
              escapedEndRegexp = new RegExp(endSymbol.replace(/./g, escape), 'g');
          function escape(ch) {
            return '\\\\\\' + ch;
          }
          function unescapeText(text) {
            return text.replace(escapedStartRegexp, startSymbol).replace(escapedEndRegexp, endSymbol);
          }
          function stringify(value) {
            if (value == null) {
              return '';
            }
            switch (typeof value) {
              case 'string':
                break;
              case 'number':
                value = '' + value;
                break;
              default:
                value = toJson(value);
            }
            return value;
          }
          function $interpolate(text, mustHaveExpression, trustedContext, allOrNothing) {
            allOrNothing = !!allOrNothing;
            var startIndex,
                endIndex,
                index = 0,
                expressions = [],
                parseFns = [],
                textLength = text.length,
                exp,
                concat = [],
                expressionPositions = [];
            while (index < textLength) {
              if (((startIndex = text.indexOf(startSymbol, index)) != -1) && ((endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1)) {
                if (index !== startIndex) {
                  concat.push(unescapeText(text.substring(index, startIndex)));
                }
                exp = text.substring(startIndex + startSymbolLength, endIndex);
                expressions.push(exp);
                parseFns.push($parse(exp, parseStringifyInterceptor));
                index = endIndex + endSymbolLength;
                expressionPositions.push(concat.length);
                concat.push('');
              } else {
                if (index !== textLength) {
                  concat.push(unescapeText(text.substring(index)));
                }
                break;
              }
            }
            if (trustedContext && concat.length > 1) {
              $interpolateMinErr.throwNoconcat(text);
            }
            if (!mustHaveExpression || expressions.length) {
              var compute = function(values) {
                for (var i = 0,
                    ii = expressions.length; i < ii; i++) {
                  if (allOrNothing && isUndefined(values[i]))
                    return;
                  concat[expressionPositions[i]] = values[i];
                }
                return concat.join('');
              };
              var getValue = function(value) {
                return trustedContext ? $sce.getTrusted(trustedContext, value) : $sce.valueOf(value);
              };
              return extend(function interpolationFn(context) {
                var i = 0;
                var ii = expressions.length;
                var values = new Array(ii);
                try {
                  for (; i < ii; i++) {
                    values[i] = parseFns[i](context);
                  }
                  return compute(values);
                } catch (err) {
                  $exceptionHandler($interpolateMinErr.interr(text, err));
                }
              }, {
                exp: text,
                expressions: expressions,
                $$watchDelegate: function(scope, listener) {
                  var lastValue;
                  return scope.$watchGroup(parseFns, function interpolateFnWatcher(values, oldValues) {
                    var currValue = compute(values);
                    if (isFunction(listener)) {
                      listener.call(this, currValue, values !== oldValues ? lastValue : currValue, scope);
                    }
                    lastValue = currValue;
                  });
                }
              });
            }
            function parseStringifyInterceptor(value) {
              try {
                value = getValue(value);
                return allOrNothing && !isDefined(value) ? value : stringify(value);
              } catch (err) {
                $exceptionHandler($interpolateMinErr.interr(text, err));
              }
            }
          }
          $interpolate.startSymbol = function() {
            return startSymbol;
          };
          $interpolate.endSymbol = function() {
            return endSymbol;
          };
          return $interpolate;
        }];
      }
      function $IntervalProvider() {
        this.$get = ['$rootScope', '$window', '$q', '$$q', function($rootScope, $window, $q, $$q) {
          var intervals = {};
          function interval(fn, delay, count, invokeApply) {
            var hasParams = arguments.length > 4,
                args = hasParams ? sliceArgs(arguments, 4) : [],
                setInterval = $window.setInterval,
                clearInterval = $window.clearInterval,
                iteration = 0,
                skipApply = (isDefined(invokeApply) && !invokeApply),
                deferred = (skipApply ? $$q : $q).defer(),
                promise = deferred.promise;
            count = isDefined(count) ? count : 0;
            promise.then(null, null, (!hasParams) ? fn : function() {
              fn.apply(null, args);
            });
            promise.$$intervalId = setInterval(function tick() {
              deferred.notify(iteration++);
              if (count > 0 && iteration >= count) {
                deferred.resolve(iteration);
                clearInterval(promise.$$intervalId);
                delete intervals[promise.$$intervalId];
              }
              if (!skipApply)
                $rootScope.$apply();
            }, delay);
            intervals[promise.$$intervalId] = deferred;
            return promise;
          }
          interval.cancel = function(promise) {
            if (promise && promise.$$intervalId in intervals) {
              intervals[promise.$$intervalId].reject('canceled');
              $window.clearInterval(promise.$$intervalId);
              delete intervals[promise.$$intervalId];
              return true;
            }
            return false;
          };
          return interval;
        }];
      }
      function $LocaleProvider() {
        this.$get = function() {
          return {
            id: 'en-us',
            NUMBER_FORMATS: {
              DECIMAL_SEP: '.',
              GROUP_SEP: ',',
              PATTERNS: [{
                minInt: 1,
                minFrac: 0,
                maxFrac: 3,
                posPre: '',
                posSuf: '',
                negPre: '-',
                negSuf: '',
                gSize: 3,
                lgSize: 3
              }, {
                minInt: 1,
                minFrac: 2,
                maxFrac: 2,
                posPre: '\u00A4',
                posSuf: '',
                negPre: '(\u00A4',
                negSuf: ')',
                gSize: 3,
                lgSize: 3
              }],
              CURRENCY_SYM: '$'
            },
            DATETIME_FORMATS: {
              MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
              SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
              DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
              SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
              AMPMS: ['AM', 'PM'],
              medium: 'MMM d, y h:mm:ss a',
              'short': 'M/d/yy h:mm a',
              fullDate: 'EEEE, MMMM d, y',
              longDate: 'MMMM d, y',
              mediumDate: 'MMM d, y',
              shortDate: 'M/d/yy',
              mediumTime: 'h:mm:ss a',
              shortTime: 'h:mm a',
              ERANAMES: ["Before Christ", "Anno Domini"],
              ERAS: ["BC", "AD"]
            },
            pluralCat: function(num) {
              if (num === 1) {
                return 'one';
              }
              return 'other';
            }
          };
        };
      }
      var PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
          DEFAULT_PORTS = {
            'http': 80,
            'https': 443,
            'ftp': 21
          };
      var $locationMinErr = minErr('$location');
      function encodePath(path) {
        var segments = path.split('/'),
            i = segments.length;
        while (i--) {
          segments[i] = encodeUriSegment(segments[i]);
        }
        return segments.join('/');
      }
      function parseAbsoluteUrl(absoluteUrl, locationObj) {
        var parsedUrl = urlResolve(absoluteUrl);
        locationObj.$$protocol = parsedUrl.protocol;
        locationObj.$$host = parsedUrl.hostname;
        locationObj.$$port = toInt(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
      }
      function parseAppUrl(relativeUrl, locationObj) {
        var prefixed = (relativeUrl.charAt(0) !== '/');
        if (prefixed) {
          relativeUrl = '/' + relativeUrl;
        }
        var match = urlResolve(relativeUrl);
        locationObj.$$path = decodeURIComponent(prefixed && match.pathname.charAt(0) === '/' ? match.pathname.substring(1) : match.pathname);
        locationObj.$$search = parseKeyValue(match.search);
        locationObj.$$hash = decodeURIComponent(match.hash);
        if (locationObj.$$path && locationObj.$$path.charAt(0) != '/') {
          locationObj.$$path = '/' + locationObj.$$path;
        }
      }
      function beginsWith(begin, whole) {
        if (whole.indexOf(begin) === 0) {
          return whole.substr(begin.length);
        }
      }
      function stripHash(url) {
        var index = url.indexOf('#');
        return index == -1 ? url : url.substr(0, index);
      }
      function trimEmptyHash(url) {
        return url.replace(/(#.+)|#$/, '$1');
      }
      function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf('/') + 1);
      }
      function serverBase(url) {
        return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
      }
      function LocationHtml5Url(appBase, basePrefix) {
        this.$$html5 = true;
        basePrefix = basePrefix || '';
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this);
        this.$$parse = function(url) {
          var pathUrl = beginsWith(appBaseNoFile, url);
          if (!isString(pathUrl)) {
            throw $locationMinErr('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
          }
          parseAppUrl(pathUrl, this);
          if (!this.$$path) {
            this.$$path = '/';
          }
          this.$$compose();
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
        };
        this.$$parseLinkUrl = function(url, relHref) {
          if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
          }
          var appUrl,
              prevAppUrl;
          var rewrittenUrl;
          if ((appUrl = beginsWith(appBase, url)) !== undefined) {
            prevAppUrl = appUrl;
            if ((appUrl = beginsWith(basePrefix, appUrl)) !== undefined) {
              rewrittenUrl = appBaseNoFile + (beginsWith('/', appUrl) || appUrl);
            } else {
              rewrittenUrl = appBase + prevAppUrl;
            }
          } else if ((appUrl = beginsWith(appBaseNoFile, url)) !== undefined) {
            rewrittenUrl = appBaseNoFile + appUrl;
          } else if (appBaseNoFile == url + '/') {
            rewrittenUrl = appBaseNoFile;
          }
          if (rewrittenUrl) {
            this.$$parse(rewrittenUrl);
          }
          return !!rewrittenUrl;
        };
      }
      function LocationHashbangUrl(appBase, hashPrefix) {
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this);
        this.$$parse = function(url) {
          var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url);
          var withoutHashUrl;
          if (withoutBaseUrl.charAt(0) === '#') {
            withoutHashUrl = beginsWith(hashPrefix, withoutBaseUrl);
            if (isUndefined(withoutHashUrl)) {
              withoutHashUrl = withoutBaseUrl;
            }
          } else {
            withoutHashUrl = this.$$html5 ? withoutBaseUrl : '';
          }
          parseAppUrl(withoutHashUrl, this);
          this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase);
          this.$$compose();
          function removeWindowsDriveName(path, url, base) {
            var windowsFilePathExp = /^\/[A-Z]:(\/.*)/;
            var firstPathSegmentMatch;
            if (url.indexOf(base) === 0) {
              url = url.replace(base, '');
            }
            if (windowsFilePathExp.exec(url)) {
              return path;
            }
            firstPathSegmentMatch = windowsFilePathExp.exec(path);
            return firstPathSegmentMatch ? firstPathSegmentMatch[1] : path;
          }
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : '');
        };
        this.$$parseLinkUrl = function(url, relHref) {
          if (stripHash(appBase) == stripHash(url)) {
            this.$$parse(url);
            return true;
          }
          return false;
        };
      }
      function LocationHashbangInHtml5Url(appBase, hashPrefix) {
        this.$$html5 = true;
        LocationHashbangUrl.apply(this, arguments);
        var appBaseNoFile = stripFile(appBase);
        this.$$parseLinkUrl = function(url, relHref) {
          if (relHref && relHref[0] === '#') {
            this.hash(relHref.slice(1));
            return true;
          }
          var rewrittenUrl;
          var appUrl;
          if (appBase == stripHash(url)) {
            rewrittenUrl = url;
          } else if ((appUrl = beginsWith(appBaseNoFile, url))) {
            rewrittenUrl = appBase + hashPrefix + appUrl;
          } else if (appBaseNoFile === url + '/') {
            rewrittenUrl = appBaseNoFile;
          }
          if (rewrittenUrl) {
            this.$$parse(rewrittenUrl);
          }
          return !!rewrittenUrl;
        };
        this.$$compose = function() {
          var search = toKeyValue(this.$$search),
              hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
          this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
          this.$$absUrl = appBase + hashPrefix + this.$$url;
        };
      }
      var locationPrototype = {
        $$html5: false,
        $$replace: false,
        absUrl: locationGetter('$$absUrl'),
        url: function(url) {
          if (isUndefined(url)) {
            return this.$$url;
          }
          var match = PATH_MATCH.exec(url);
          if (match[1] || url === '')
            this.path(decodeURIComponent(match[1]));
          if (match[2] || match[1] || url === '')
            this.search(match[3] || '');
          this.hash(match[5] || '');
          return this;
        },
        protocol: locationGetter('$$protocol'),
        host: locationGetter('$$host'),
        port: locationGetter('$$port'),
        path: locationGetterSetter('$$path', function(path) {
          path = path !== null ? path.toString() : '';
          return path.charAt(0) == '/' ? path : '/' + path;
        }),
        search: function(search, paramValue) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (isString(search) || isNumber(search)) {
                search = search.toString();
                this.$$search = parseKeyValue(search);
              } else if (isObject(search)) {
                search = copy(search, {});
                forEach(search, function(value, key) {
                  if (value == null)
                    delete search[key];
                });
                this.$$search = search;
              } else {
                throw $locationMinErr('isrcharg', 'The first argument of the `$location#search()` call must be a string or an object.');
              }
              break;
            default:
              if (isUndefined(paramValue) || paramValue === null) {
                delete this.$$search[search];
              } else {
                this.$$search[search] = paramValue;
              }
          }
          this.$$compose();
          return this;
        },
        hash: locationGetterSetter('$$hash', function(hash) {
          return hash !== null ? hash.toString() : '';
        }),
        replace: function() {
          this.$$replace = true;
          return this;
        }
      };
      forEach([LocationHashbangInHtml5Url, LocationHashbangUrl, LocationHtml5Url], function(Location) {
        Location.prototype = Object.create(locationPrototype);
        Location.prototype.state = function(state) {
          if (!arguments.length) {
            return this.$$state;
          }
          if (Location !== LocationHtml5Url || !this.$$html5) {
            throw $locationMinErr('nostate', 'History API state support is available only ' + 'in HTML5 mode and only in browsers supporting HTML5 History API');
          }
          this.$$state = isUndefined(state) ? null : state;
          return this;
        };
      });
      function locationGetter(property) {
        return function() {
          return this[property];
        };
      }
      function locationGetterSetter(property, preprocess) {
        return function(value) {
          if (isUndefined(value)) {
            return this[property];
          }
          this[property] = preprocess(value);
          this.$$compose();
          return this;
        };
      }
      function $LocationProvider() {
        var hashPrefix = '',
            html5Mode = {
              enabled: false,
              requireBase: true,
              rewriteLinks: true
            };
        this.hashPrefix = function(prefix) {
          if (isDefined(prefix)) {
            hashPrefix = prefix;
            return this;
          } else {
            return hashPrefix;
          }
        };
        this.html5Mode = function(mode) {
          if (isBoolean(mode)) {
            html5Mode.enabled = mode;
            return this;
          } else if (isObject(mode)) {
            if (isBoolean(mode.enabled)) {
              html5Mode.enabled = mode.enabled;
            }
            if (isBoolean(mode.requireBase)) {
              html5Mode.requireBase = mode.requireBase;
            }
            if (isBoolean(mode.rewriteLinks)) {
              html5Mode.rewriteLinks = mode.rewriteLinks;
            }
            return this;
          } else {
            return html5Mode;
          }
        };
        this.$get = ['$rootScope', '$browser', '$sniffer', '$rootElement', '$window', function($rootScope, $browser, $sniffer, $rootElement, $window) {
          var $location,
              LocationMode,
              baseHref = $browser.baseHref(),
              initialUrl = $browser.url(),
              appBase;
          if (html5Mode.enabled) {
            if (!baseHref && html5Mode.requireBase) {
              throw $locationMinErr('nobase', "$location in HTML5 mode requires a <base> tag to be present!");
            }
            appBase = serverBase(initialUrl) + (baseHref || '/');
            LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url;
          } else {
            appBase = stripHash(initialUrl);
            LocationMode = LocationHashbangUrl;
          }
          $location = new LocationMode(appBase, '#' + hashPrefix);
          $location.$$parseLinkUrl(initialUrl, initialUrl);
          $location.$$state = $browser.state();
          var IGNORE_URI_REGEXP = /^\s*(javascript|mailto):/i;
          function setBrowserUrlWithFallback(url, replace, state) {
            var oldUrl = $location.url();
            var oldState = $location.$$state;
            try {
              $browser.url(url, replace, state);
              $location.$$state = $browser.state();
            } catch (e) {
              $location.url(oldUrl);
              $location.$$state = oldState;
              throw e;
            }
          }
          $rootElement.on('click', function(event) {
            if (!html5Mode.rewriteLinks || event.ctrlKey || event.metaKey || event.shiftKey || event.which == 2 || event.button == 2)
              return;
            var elm = jqLite(event.target);
            while (nodeName_(elm[0]) !== 'a') {
              if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0])
                return;
            }
            var absHref = elm.prop('href');
            var relHref = elm.attr('href') || elm.attr('xlink:href');
            if (isObject(absHref) && absHref.toString() === '[object SVGAnimatedString]') {
              absHref = urlResolve(absHref.animVal).href;
            }
            if (IGNORE_URI_REGEXP.test(absHref))
              return;
            if (absHref && !elm.attr('target') && !event.isDefaultPrevented()) {
              if ($location.$$parseLinkUrl(absHref, relHref)) {
                event.preventDefault();
                if ($location.absUrl() != $browser.url()) {
                  $rootScope.$apply();
                  $window.angular['ff-684208-preventDefault'] = true;
                }
              }
            }
          });
          if (trimEmptyHash($location.absUrl()) != trimEmptyHash(initialUrl)) {
            $browser.url($location.absUrl(), true);
          }
          var initializing = true;
          $browser.onUrlChange(function(newUrl, newState) {
            $rootScope.$evalAsync(function() {
              var oldUrl = $location.absUrl();
              var oldState = $location.$$state;
              var defaultPrevented;
              $location.$$parse(newUrl);
              $location.$$state = newState;
              defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, newState, oldState).defaultPrevented;
              if ($location.absUrl() !== newUrl)
                return;
              if (defaultPrevented) {
                $location.$$parse(oldUrl);
                $location.$$state = oldState;
                setBrowserUrlWithFallback(oldUrl, false, oldState);
              } else {
                initializing = false;
                afterLocationChange(oldUrl, oldState);
              }
            });
            if (!$rootScope.$$phase)
              $rootScope.$digest();
          });
          $rootScope.$watch(function $locationWatch() {
            var oldUrl = trimEmptyHash($browser.url());
            var newUrl = trimEmptyHash($location.absUrl());
            var oldState = $browser.state();
            var currentReplace = $location.$$replace;
            var urlOrStateChanged = oldUrl !== newUrl || ($location.$$html5 && $sniffer.history && oldState !== $location.$$state);
            if (initializing || urlOrStateChanged) {
              initializing = false;
              $rootScope.$evalAsync(function() {
                var newUrl = $location.absUrl();
                var defaultPrevented = $rootScope.$broadcast('$locationChangeStart', newUrl, oldUrl, $location.$$state, oldState).defaultPrevented;
                if ($location.absUrl() !== newUrl)
                  return;
                if (defaultPrevented) {
                  $location.$$parse(oldUrl);
                  $location.$$state = oldState;
                } else {
                  if (urlOrStateChanged) {
                    setBrowserUrlWithFallback(newUrl, currentReplace, oldState === $location.$$state ? null : $location.$$state);
                  }
                  afterLocationChange(oldUrl, oldState);
                }
              });
            }
            $location.$$replace = false;
          });
          return $location;
          function afterLocationChange(oldUrl, oldState) {
            $rootScope.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl, $location.$$state, oldState);
          }
        }];
      }
      function $LogProvider() {
        var debug = true,
            self = this;
        this.debugEnabled = function(flag) {
          if (isDefined(flag)) {
            debug = flag;
            return this;
          } else {
            return debug;
          }
        };
        this.$get = ['$window', function($window) {
          return {
            log: consoleLog('log'),
            info: consoleLog('info'),
            warn: consoleLog('warn'),
            error: consoleLog('error'),
            debug: (function() {
              var fn = consoleLog('debug');
              return function() {
                if (debug) {
                  fn.apply(self, arguments);
                }
              };
            }())
          };
          function formatError(arg) {
            if (arg instanceof Error) {
              if (arg.stack) {
                arg = (arg.message && arg.stack.indexOf(arg.message) === -1) ? 'Error: ' + arg.message + '\n' + arg.stack : arg.stack;
              } else if (arg.sourceURL) {
                arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
              }
            }
            return arg;
          }
          function consoleLog(type) {
            var console = $window.console || {},
                logFn = console[type] || console.log || noop,
                hasApply = false;
            try {
              hasApply = !!logFn.apply;
            } catch (e) {}
            if (hasApply) {
              return function() {
                var args = [];
                forEach(arguments, function(arg) {
                  args.push(formatError(arg));
                });
                return logFn.apply(console, args);
              };
            }
            return function(arg1, arg2) {
              logFn(arg1, arg2 == null ? '' : arg2);
            };
          }
        }];
      }
      var $parseMinErr = minErr('$parse');
      function ensureSafeMemberName(name, fullExpression) {
        if (name === "__defineGetter__" || name === "__defineSetter__" || name === "__lookupGetter__" || name === "__lookupSetter__" || name === "__proto__") {
          throw $parseMinErr('isecfld', 'Attempting to access a disallowed field in Angular expressions! ' + 'Expression: {0}', fullExpression);
        }
        return name;
      }
      function ensureSafeObject(obj, fullExpression) {
        if (obj) {
          if (obj.constructor === obj) {
            throw $parseMinErr('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj.window === obj) {
            throw $parseMinErr('isecwindow', 'Referencing the Window in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj.children && (obj.nodeName || (obj.prop && obj.attr && obj.find))) {
            throw $parseMinErr('isecdom', 'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj === Object) {
            throw $parseMinErr('isecobj', 'Referencing Object in Angular expressions is disallowed! Expression: {0}', fullExpression);
          }
        }
        return obj;
      }
      var CALL = Function.prototype.call;
      var APPLY = Function.prototype.apply;
      var BIND = Function.prototype.bind;
      function ensureSafeFunction(obj, fullExpression) {
        if (obj) {
          if (obj.constructor === obj) {
            throw $parseMinErr('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', fullExpression);
          } else if (obj === CALL || obj === APPLY || obj === BIND) {
            throw $parseMinErr('isecff', 'Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}', fullExpression);
          }
        }
      }
      var OPERATORS = createMap();
      forEach('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function(operator) {
        OPERATORS[operator] = true;
      });
      var ESCAPE = {
        "n": "\n",
        "f": "\f",
        "r": "\r",
        "t": "\t",
        "v": "\v",
        "'": "'",
        '"': '"'
      };
      var Lexer = function(options) {
        this.options = options;
      };
      Lexer.prototype = {
        constructor: Lexer,
        lex: function(text) {
          this.text = text;
          this.index = 0;
          this.tokens = [];
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            if (ch === '"' || ch === "'") {
              this.readString(ch);
            } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
              this.readNumber();
            } else if (this.isIdent(ch)) {
              this.readIdent();
            } else if (this.is(ch, '(){}[].,;:?')) {
              this.tokens.push({
                index: this.index,
                text: ch
              });
              this.index++;
            } else if (this.isWhitespace(ch)) {
              this.index++;
            } else {
              var ch2 = ch + this.peek();
              var ch3 = ch2 + this.peek(2);
              var op1 = OPERATORS[ch];
              var op2 = OPERATORS[ch2];
              var op3 = OPERATORS[ch3];
              if (op1 || op2 || op3) {
                var token = op3 ? ch3 : (op2 ? ch2 : ch);
                this.tokens.push({
                  index: this.index,
                  text: token,
                  operator: true
                });
                this.index += token.length;
              } else {
                this.throwError('Unexpected next character ', this.index, this.index + 1);
              }
            }
          }
          return this.tokens;
        },
        is: function(ch, chars) {
          return chars.indexOf(ch) !== -1;
        },
        peek: function(i) {
          var num = i || 1;
          return (this.index + num < this.text.length) ? this.text.charAt(this.index + num) : false;
        },
        isNumber: function(ch) {
          return ('0' <= ch && ch <= '9') && typeof ch === "string";
        },
        isWhitespace: function(ch) {
          return (ch === ' ' || ch === '\r' || ch === '\t' || ch === '\n' || ch === '\v' || ch === '\u00A0');
        },
        isIdent: function(ch) {
          return ('a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$');
        },
        isExpOperator: function(ch) {
          return (ch === '-' || ch === '+' || this.isNumber(ch));
        },
        throwError: function(error, start, end) {
          end = end || this.index;
          var colStr = (isDefined(start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end);
          throw $parseMinErr('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', error, colStr, this.text);
        },
        readNumber: function() {
          var number = '';
          var start = this.index;
          while (this.index < this.text.length) {
            var ch = lowercase(this.text.charAt(this.index));
            if (ch == '.' || this.isNumber(ch)) {
              number += ch;
            } else {
              var peekCh = this.peek();
              if (ch == 'e' && this.isExpOperator(peekCh)) {
                number += ch;
              } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) == 'e') {
                number += ch;
              } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) == 'e') {
                this.throwError('Invalid exponent');
              } else {
                break;
              }
            }
            this.index++;
          }
          this.tokens.push({
            index: start,
            text: number,
            constant: true,
            value: Number(number)
          });
        },
        readIdent: function() {
          var start = this.index;
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            if (!(this.isIdent(ch) || this.isNumber(ch))) {
              break;
            }
            this.index++;
          }
          this.tokens.push({
            index: start,
            text: this.text.slice(start, this.index),
            identifier: true
          });
        },
        readString: function(quote) {
          var start = this.index;
          this.index++;
          var string = '';
          var rawString = quote;
          var escape = false;
          while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            rawString += ch;
            if (escape) {
              if (ch === 'u') {
                var hex = this.text.substring(this.index + 1, this.index + 5);
                if (!hex.match(/[\da-f]{4}/i)) {
                  this.throwError('Invalid unicode escape [\\u' + hex + ']');
                }
                this.index += 4;
                string += String.fromCharCode(parseInt(hex, 16));
              } else {
                var rep = ESCAPE[ch];
                string = string + (rep || ch);
              }
              escape = false;
            } else if (ch === '\\') {
              escape = true;
            } else if (ch === quote) {
              this.index++;
              this.tokens.push({
                index: start,
                text: rawString,
                constant: true,
                value: string
              });
              return;
            } else {
              string += ch;
            }
            this.index++;
          }
          this.throwError('Unterminated quote', start);
        }
      };
      var AST = function(lexer, options) {
        this.lexer = lexer;
        this.options = options;
      };
      AST.Program = 'Program';
      AST.ExpressionStatement = 'ExpressionStatement';
      AST.AssignmentExpression = 'AssignmentExpression';
      AST.ConditionalExpression = 'ConditionalExpression';
      AST.LogicalExpression = 'LogicalExpression';
      AST.BinaryExpression = 'BinaryExpression';
      AST.UnaryExpression = 'UnaryExpression';
      AST.CallExpression = 'CallExpression';
      AST.MemberExpression = 'MemberExpression';
      AST.Identifier = 'Identifier';
      AST.Literal = 'Literal';
      AST.ArrayExpression = 'ArrayExpression';
      AST.Property = 'Property';
      AST.ObjectExpression = 'ObjectExpression';
      AST.ThisExpression = 'ThisExpression';
      AST.NGValueParameter = 'NGValueParameter';
      AST.prototype = {
        ast: function(text) {
          this.text = text;
          this.tokens = this.lexer.lex(text);
          var value = this.program();
          if (this.tokens.length !== 0) {
            this.throwError('is an unexpected token', this.tokens[0]);
          }
          return value;
        },
        program: function() {
          var body = [];
          while (true) {
            if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']'))
              body.push(this.expressionStatement());
            if (!this.expect(';')) {
              return {
                type: AST.Program,
                body: body
              };
            }
          }
        },
        expressionStatement: function() {
          return {
            type: AST.ExpressionStatement,
            expression: this.filterChain()
          };
        },
        filterChain: function() {
          var left = this.expression();
          var token;
          while ((token = this.expect('|'))) {
            left = this.filter(left);
          }
          return left;
        },
        expression: function() {
          return this.assignment();
        },
        assignment: function() {
          var result = this.ternary();
          if (this.expect('=')) {
            result = {
              type: AST.AssignmentExpression,
              left: result,
              right: this.assignment(),
              operator: '='
            };
          }
          return result;
        },
        ternary: function() {
          var test = this.logicalOR();
          var alternate;
          var consequent;
          if (this.expect('?')) {
            alternate = this.expression();
            if (this.consume(':')) {
              consequent = this.expression();
              return {
                type: AST.ConditionalExpression,
                test: test,
                alternate: alternate,
                consequent: consequent
              };
            }
          }
          return test;
        },
        logicalOR: function() {
          var left = this.logicalAND();
          while (this.expect('||')) {
            left = {
              type: AST.LogicalExpression,
              operator: '||',
              left: left,
              right: this.logicalAND()
            };
          }
          return left;
        },
        logicalAND: function() {
          var left = this.equality();
          while (this.expect('&&')) {
            left = {
              type: AST.LogicalExpression,
              operator: '&&',
              left: left,
              right: this.equality()
            };
          }
          return left;
        },
        equality: function() {
          var left = this.relational();
          var token;
          while ((token = this.expect('==', '!=', '===', '!=='))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.relational()
            };
          }
          return left;
        },
        relational: function() {
          var left = this.additive();
          var token;
          while ((token = this.expect('<', '>', '<=', '>='))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.additive()
            };
          }
          return left;
        },
        additive: function() {
          var left = this.multiplicative();
          var token;
          while ((token = this.expect('+', '-'))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.multiplicative()
            };
          }
          return left;
        },
        multiplicative: function() {
          var left = this.unary();
          var token;
          while ((token = this.expect('*', '/', '%'))) {
            left = {
              type: AST.BinaryExpression,
              operator: token.text,
              left: left,
              right: this.unary()
            };
          }
          return left;
        },
        unary: function() {
          var token;
          if ((token = this.expect('+', '-', '!'))) {
            return {
              type: AST.UnaryExpression,
              operator: token.text,
              prefix: true,
              argument: this.unary()
            };
          } else {
            return this.primary();
          }
        },
        primary: function() {
          var primary;
          if (this.expect('(')) {
            primary = this.filterChain();
            this.consume(')');
          } else if (this.expect('[')) {
            primary = this.arrayDeclaration();
          } else if (this.expect('{')) {
            primary = this.object();
          } else if (this.constants.hasOwnProperty(this.peek().text)) {
            primary = copy(this.constants[this.consume().text]);
          } else if (this.peek().identifier) {
            primary = this.identifier();
          } else if (this.peek().constant) {
            primary = this.constant();
          } else {
            this.throwError('not a primary expression', this.peek());
          }
          var next;
          while ((next = this.expect('(', '[', '.'))) {
            if (next.text === '(') {
              primary = {
                type: AST.CallExpression,
                callee: primary,
                arguments: this.parseArguments()
              };
              this.consume(')');
            } else if (next.text === '[') {
              primary = {
                type: AST.MemberExpression,
                object: primary,
                property: this.expression(),
                computed: true
              };
              this.consume(']');
            } else if (next.text === '.') {
              primary = {
                type: AST.MemberExpression,
                object: primary,
                property: this.identifier(),
                computed: false
              };
            } else {
              this.throwError('IMPOSSIBLE');
            }
          }
          return primary;
        },
        filter: function(baseExpression) {
          var args = [baseExpression];
          var result = {
            type: AST.CallExpression,
            callee: this.identifier(),
            arguments: args,
            filter: true
          };
          while (this.expect(':')) {
            args.push(this.expression());
          }
          return result;
        },
        parseArguments: function() {
          var args = [];
          if (this.peekToken().text !== ')') {
            do {
              args.push(this.expression());
            } while (this.expect(','));
          }
          return args;
        },
        identifier: function() {
          var token = this.consume();
          if (!token.identifier) {
            this.throwError('is not a valid identifier', token);
          }
          return {
            type: AST.Identifier,
            name: token.text
          };
        },
        constant: function() {
          return {
            type: AST.Literal,
            value: this.consume().value
          };
        },
        arrayDeclaration: function() {
          var elements = [];
          if (this.peekToken().text !== ']') {
            do {
              if (this.peek(']')) {
                break;
              }
              elements.push(this.expression());
            } while (this.expect(','));
          }
          this.consume(']');
          return {
            type: AST.ArrayExpression,
            elements: elements
          };
        },
        object: function() {
          var properties = [],
              property;
          if (this.peekToken().text !== '}') {
            do {
              if (this.peek('}')) {
                break;
              }
              property = {
                type: AST.Property,
                kind: 'init'
              };
              if (this.peek().constant) {
                property.key = this.constant();
              } else if (this.peek().identifier) {
                property.key = this.identifier();
              } else {
                this.throwError("invalid key", this.peek());
              }
              this.consume(':');
              property.value = this.expression();
              properties.push(property);
            } while (this.expect(','));
          }
          this.consume('}');
          return {
            type: AST.ObjectExpression,
            properties: properties
          };
        },
        throwError: function(msg, token) {
          throw $parseMinErr('syntax', 'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].', token.text, msg, (token.index + 1), this.text, this.text.substring(token.index));
        },
        consume: function(e1) {
          if (this.tokens.length === 0) {
            throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
          }
          var token = this.expect(e1);
          if (!token) {
            this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
          }
          return token;
        },
        peekToken: function() {
          if (this.tokens.length === 0) {
            throw $parseMinErr('ueoe', 'Unexpected end of expression: {0}', this.text);
          }
          return this.tokens[0];
        },
        peek: function(e1, e2, e3, e4) {
          return this.peekAhead(0, e1, e2, e3, e4);
        },
        peekAhead: function(i, e1, e2, e3, e4) {
          if (this.tokens.length > i) {
            var token = this.tokens[i];
            var t = token.text;
            if (t === e1 || t === e2 || t === e3 || t === e4 || (!e1 && !e2 && !e3 && !e4)) {
              return token;
            }
          }
          return false;
        },
        expect: function(e1, e2, e3, e4) {
          var token = this.peek(e1, e2, e3, e4);
          if (token) {
            this.tokens.shift();
            return token;
          }
          return false;
        },
        constants: {
          'true': {
            type: AST.Literal,
            value: true
          },
          'false': {
            type: AST.Literal,
            value: false
          },
          'null': {
            type: AST.Literal,
            value: null
          },
          'undefined': {
            type: AST.Literal,
            value: undefined
          },
          'this': {type: AST.ThisExpression}
        }
      };
      function ifDefined(v, d) {
        return typeof v !== 'undefined' ? v : d;
      }
      function plusFn(l, r) {
        if (typeof l === 'undefined')
          return r;
        if (typeof r === 'undefined')
          return l;
        return l + r;
      }
      function isStateless($filter, filterName) {
        var fn = $filter(filterName);
        return !fn.$stateful;
      }
      function findConstantAndWatchExpressions(ast, $filter) {
        var allConstants;
        var argsToWatch;
        switch (ast.type) {
          case AST.Program:
            allConstants = true;
            forEach(ast.body, function(expr) {
              findConstantAndWatchExpressions(expr.expression, $filter);
              allConstants = allConstants && expr.expression.constant;
            });
            ast.constant = allConstants;
            break;
          case AST.Literal:
            ast.constant = true;
            ast.toWatch = [];
            break;
          case AST.UnaryExpression:
            findConstantAndWatchExpressions(ast.argument, $filter);
            ast.constant = ast.argument.constant;
            ast.toWatch = ast.argument.toWatch;
            break;
          case AST.BinaryExpression:
            findConstantAndWatchExpressions(ast.left, $filter);
            findConstantAndWatchExpressions(ast.right, $filter);
            ast.constant = ast.left.constant && ast.right.constant;
            ast.toWatch = ast.left.toWatch.concat(ast.right.toWatch);
            break;
          case AST.LogicalExpression:
            findConstantAndWatchExpressions(ast.left, $filter);
            findConstantAndWatchExpressions(ast.right, $filter);
            ast.constant = ast.left.constant && ast.right.constant;
            ast.toWatch = ast.constant ? [] : [ast];
            break;
          case AST.ConditionalExpression:
            findConstantAndWatchExpressions(ast.test, $filter);
            findConstantAndWatchExpressions(ast.alternate, $filter);
            findConstantAndWatchExpressions(ast.consequent, $filter);
            ast.constant = ast.test.constant && ast.alternate.constant && ast.consequent.constant;
            ast.toWatch = ast.constant ? [] : [ast];
            break;
          case AST.Identifier:
            ast.constant = false;
            ast.toWatch = [ast];
            break;
          case AST.MemberExpression:
            findConstantAndWatchExpressions(ast.object, $filter);
            if (ast.computed) {
              findConstantAndWatchExpressions(ast.property, $filter);
            }
            ast.constant = ast.object.constant && (!ast.computed || ast.property.constant);
            ast.toWatch = [ast];
            break;
          case AST.CallExpression:
            allConstants = ast.filter ? isStateless($filter, ast.callee.name) : false;
            argsToWatch = [];
            forEach(ast.arguments, function(expr) {
              findConstantAndWatchExpressions(expr, $filter);
              allConstants = allConstants && expr.constant;
              if (!expr.constant) {
                argsToWatch.push.apply(argsToWatch, expr.toWatch);
              }
            });
            ast.constant = allConstants;
            ast.toWatch = ast.filter && isStateless($filter, ast.callee.name) ? argsToWatch : [ast];
            break;
          case AST.AssignmentExpression:
            findConstantAndWatchExpressions(ast.left, $filter);
            findConstantAndWatchExpressions(ast.right, $filter);
            ast.constant = ast.left.constant && ast.right.constant;
            ast.toWatch = [ast];
            break;
          case AST.ArrayExpression:
            allConstants = true;
            argsToWatch = [];
            forEach(ast.elements, function(expr) {
              findConstantAndWatchExpressions(expr, $filter);
              allConstants = allConstants && expr.constant;
              if (!expr.constant) {
                argsToWatch.push.apply(argsToWatch, expr.toWatch);
              }
            });
            ast.constant = allConstants;
            ast.toWatch = argsToWatch;
            break;
          case AST.ObjectExpression:
            allConstants = true;
            argsToWatch = [];
            forEach(ast.properties, function(property) {
              findConstantAndWatchExpressions(property.value, $filter);
              allConstants = allConstants && property.value.constant;
              if (!property.value.constant) {
                argsToWatch.push.apply(argsToWatch, property.value.toWatch);
              }
            });
            ast.constant = allConstants;
            ast.toWatch = argsToWatch;
            break;
          case AST.ThisExpression:
            ast.constant = false;
            ast.toWatch = [];
            break;
        }
      }
      function getInputs(body) {
        if (body.length != 1)
          return;
        var lastExpression = body[0].expression;
        var candidate = lastExpression.toWatch;
        if (candidate.length !== 1)
          return candidate;
        return candidate[0] !== lastExpression ? candidate : undefined;
      }
      function isAssignable(ast) {
        return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
      }
      function assignableAST(ast) {
        if (ast.body.length === 1 && isAssignable(ast.body[0].expression)) {
          return {
            type: AST.AssignmentExpression,
            left: ast.body[0].expression,
            right: {type: AST.NGValueParameter},
            operator: '='
          };
        }
      }
      function isLiteral(ast) {
        return ast.body.length === 0 || ast.body.length === 1 && (ast.body[0].expression.type === AST.Literal || ast.body[0].expression.type === AST.ArrayExpression || ast.body[0].expression.type === AST.ObjectExpression);
      }
      function isConstant(ast) {
        return ast.constant;
      }
      function ASTCompiler(astBuilder, $filter) {
        this.astBuilder = astBuilder;
        this.$filter = $filter;
      }
      ASTCompiler.prototype = {
        compile: function(expression, expensiveChecks) {
          var self = this;
          var ast = this.astBuilder.ast(expression);
          this.state = {
            nextId: 0,
            filters: {},
            expensiveChecks: expensiveChecks,
            fn: {
              vars: [],
              body: [],
              own: {}
            },
            assign: {
              vars: [],
              body: [],
              own: {}
            },
            inputs: []
          };
          findConstantAndWatchExpressions(ast, self.$filter);
          var extra = '';
          var assignable;
          this.stage = 'assign';
          if ((assignable = assignableAST(ast))) {
            this.state.computing = 'assign';
            var result = this.nextId();
            this.recurse(assignable, result);
            extra = 'fn.assign=' + this.generateFunction('assign', 's,v,l');
          }
          var toWatch = getInputs(ast.body);
          self.stage = 'inputs';
          forEach(toWatch, function(watch, key) {
            var fnKey = 'fn' + key;
            self.state[fnKey] = {
              vars: [],
              body: [],
              own: {}
            };
            self.state.computing = fnKey;
            var intoId = self.nextId();
            self.recurse(watch, intoId);
            self.return_(intoId);
            self.state.inputs.push(fnKey);
            watch.watchId = key;
          });
          this.state.computing = 'fn';
          this.stage = 'main';
          this.recurse(ast);
          var fnString = '"' + this.USE + ' ' + this.STRICT + '";\n' + this.filterPrefix() + 'var fn=' + this.generateFunction('fn', 's,l,a,i') + extra + this.watchFns() + 'return fn;';
          var fn = (new Function('$filter', 'ensureSafeMemberName', 'ensureSafeObject', 'ensureSafeFunction', 'ifDefined', 'plus', 'text', fnString))(this.$filter, ensureSafeMemberName, ensureSafeObject, ensureSafeFunction, ifDefined, plusFn, expression);
          this.state = this.stage = undefined;
          fn.literal = isLiteral(ast);
          fn.constant = isConstant(ast);
          return fn;
        },
        USE: 'use',
        STRICT: 'strict',
        watchFns: function() {
          var result = [];
          var fns = this.state.inputs;
          var self = this;
          forEach(fns, function(name) {
            result.push('var ' + name + '=' + self.generateFunction(name, 's'));
          });
          if (fns.length) {
            result.push('fn.inputs=[' + fns.join(',') + '];');
          }
          return result.join('');
        },
        generateFunction: function(name, params) {
          return 'function(' + params + '){' + this.varsPrefix(name) + this.body(name) + '};';
        },
        filterPrefix: function() {
          var parts = [];
          var self = this;
          forEach(this.state.filters, function(id, filter) {
            parts.push(id + '=$filter(' + self.escape(filter) + ')');
          });
          if (parts.length)
            return 'var ' + parts.join(',') + ';';
          return '';
        },
        varsPrefix: function(section) {
          return this.state[section].vars.length ? 'var ' + this.state[section].vars.join(',') + ';' : '';
        },
        body: function(section) {
          return this.state[section].body.join('');
        },
        recurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
          var left,
              right,
              self = this,
              args,
              expression;
          recursionFn = recursionFn || noop;
          if (!skipWatchIdCheck && isDefined(ast.watchId)) {
            intoId = intoId || this.nextId();
            this.if_('i', this.lazyAssign(intoId, this.computedMember('i', ast.watchId)), this.lazyRecurse(ast, intoId, nameId, recursionFn, create, true));
            return;
          }
          switch (ast.type) {
            case AST.Program:
              forEach(ast.body, function(expression, pos) {
                self.recurse(expression.expression, undefined, undefined, function(expr) {
                  right = expr;
                });
                if (pos !== ast.body.length - 1) {
                  self.current().body.push(right, ';');
                } else {
                  self.return_(right);
                }
              });
              break;
            case AST.Literal:
              expression = this.escape(ast.value);
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.UnaryExpression:
              this.recurse(ast.argument, undefined, undefined, function(expr) {
                right = expr;
              });
              expression = ast.operator + '(' + this.ifDefined(right, 0) + ')';
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.BinaryExpression:
              this.recurse(ast.left, undefined, undefined, function(expr) {
                left = expr;
              });
              this.recurse(ast.right, undefined, undefined, function(expr) {
                right = expr;
              });
              if (ast.operator === '+') {
                expression = this.plus(left, right);
              } else if (ast.operator === '-') {
                expression = this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0);
              } else {
                expression = '(' + left + ')' + ast.operator + '(' + right + ')';
              }
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.LogicalExpression:
              intoId = intoId || this.nextId();
              self.recurse(ast.left, intoId);
              self.if_(ast.operator === '&&' ? intoId : self.not(intoId), self.lazyRecurse(ast.right, intoId));
              recursionFn(intoId);
              break;
            case AST.ConditionalExpression:
              intoId = intoId || this.nextId();
              self.recurse(ast.test, intoId);
              self.if_(intoId, self.lazyRecurse(ast.alternate, intoId), self.lazyRecurse(ast.consequent, intoId));
              recursionFn(intoId);
              break;
            case AST.Identifier:
              intoId = intoId || this.nextId();
              if (nameId) {
                nameId.context = self.stage === 'inputs' ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', ast.name) + '?l:s');
                nameId.computed = false;
                nameId.name = ast.name;
              }
              ensureSafeMemberName(ast.name);
              self.if_(self.stage === 'inputs' || self.not(self.getHasOwnProperty('l', ast.name)), function() {
                self.if_(self.stage === 'inputs' || 's', function() {
                  if (create && create !== 1) {
                    self.if_(self.not(self.nonComputedMember('s', ast.name)), self.lazyAssign(self.nonComputedMember('s', ast.name), '{}'));
                  }
                  self.assign(intoId, self.nonComputedMember('s', ast.name));
                });
              }, intoId && self.lazyAssign(intoId, self.nonComputedMember('l', ast.name)));
              if (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.name)) {
                self.addEnsureSafeObject(intoId);
              }
              recursionFn(intoId);
              break;
            case AST.MemberExpression:
              left = nameId && (nameId.context = this.nextId()) || this.nextId();
              intoId = intoId || this.nextId();
              self.recurse(ast.object, left, undefined, function() {
                self.if_(self.notNull(left), function() {
                  if (ast.computed) {
                    right = self.nextId();
                    self.recurse(ast.property, right);
                    self.addEnsureSafeMemberName(right);
                    if (create && create !== 1) {
                      self.if_(self.not(self.computedMember(left, right)), self.lazyAssign(self.computedMember(left, right), '{}'));
                    }
                    expression = self.ensureSafeObject(self.computedMember(left, right));
                    self.assign(intoId, expression);
                    if (nameId) {
                      nameId.computed = true;
                      nameId.name = right;
                    }
                  } else {
                    ensureSafeMemberName(ast.property.name);
                    if (create && create !== 1) {
                      self.if_(self.not(self.nonComputedMember(left, ast.property.name)), self.lazyAssign(self.nonComputedMember(left, ast.property.name), '{}'));
                    }
                    expression = self.nonComputedMember(left, ast.property.name);
                    if (self.state.expensiveChecks || isPossiblyDangerousMemberName(ast.property.name)) {
                      expression = self.ensureSafeObject(expression);
                    }
                    self.assign(intoId, expression);
                    if (nameId) {
                      nameId.computed = false;
                      nameId.name = ast.property.name;
                    }
                  }
                  recursionFn(intoId);
                });
              }, !!create);
              break;
            case AST.CallExpression:
              intoId = intoId || this.nextId();
              if (ast.filter) {
                right = self.filter(ast.callee.name);
                args = [];
                forEach(ast.arguments, function(expr) {
                  var argument = self.nextId();
                  self.recurse(expr, argument);
                  args.push(argument);
                });
                expression = right + '(' + args.join(',') + ')';
                self.assign(intoId, expression);
                recursionFn(intoId);
              } else {
                right = self.nextId();
                left = {};
                args = [];
                self.recurse(ast.callee, right, left, function() {
                  self.if_(self.notNull(right), function() {
                    self.addEnsureSafeFunction(right);
                    forEach(ast.arguments, function(expr) {
                      self.recurse(expr, self.nextId(), undefined, function(argument) {
                        args.push(self.ensureSafeObject(argument));
                      });
                    });
                    if (left.name) {
                      if (!self.state.expensiveChecks) {
                        self.addEnsureSafeObject(left.context);
                      }
                      expression = self.member(left.context, left.name, left.computed) + '(' + args.join(',') + ')';
                    } else {
                      expression = right + '(' + args.join(',') + ')';
                    }
                    expression = self.ensureSafeObject(expression);
                    self.assign(intoId, expression);
                    recursionFn(intoId);
                  });
                });
              }
              break;
            case AST.AssignmentExpression:
              right = this.nextId();
              left = {};
              if (!isAssignable(ast.left)) {
                throw $parseMinErr('lval', 'Trying to assing a value to a non l-value');
              }
              this.recurse(ast.left, undefined, left, function() {
                self.if_(self.notNull(left.context), function() {
                  self.recurse(ast.right, right);
                  self.addEnsureSafeObject(self.member(left.context, left.name, left.computed));
                  expression = self.member(left.context, left.name, left.computed) + ast.operator + right;
                  self.assign(intoId, expression);
                  recursionFn(intoId || expression);
                });
              }, 1);
              break;
            case AST.ArrayExpression:
              args = [];
              forEach(ast.elements, function(expr) {
                self.recurse(expr, self.nextId(), undefined, function(argument) {
                  args.push(argument);
                });
              });
              expression = '[' + args.join(',') + ']';
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.ObjectExpression:
              args = [];
              forEach(ast.properties, function(property) {
                self.recurse(property.value, self.nextId(), undefined, function(expr) {
                  args.push(self.escape(property.key.type === AST.Identifier ? property.key.name : ('' + property.key.value)) + ':' + expr);
                });
              });
              expression = '{' + args.join(',') + '}';
              this.assign(intoId, expression);
              recursionFn(expression);
              break;
            case AST.ThisExpression:
              this.assign(intoId, 's');
              recursionFn('s');
              break;
            case AST.NGValueParameter:
              this.assign(intoId, 'v');
              recursionFn('v');
              break;
          }
        },
        getHasOwnProperty: function(element, property) {
          var key = element + '.' + property;
          var own = this.current().own;
          if (!own.hasOwnProperty(key)) {
            own[key] = this.nextId(false, element + '&&(' + this.escape(property) + ' in ' + element + ')');
          }
          return own[key];
        },
        assign: function(id, value) {
          if (!id)
            return;
          this.current().body.push(id, '=', value, ';');
          return id;
        },
        filter: function(filterName) {
          if (!this.state.filters.hasOwnProperty(filterName)) {
            this.state.filters[filterName] = this.nextId(true);
          }
          return this.state.filters[filterName];
        },
        ifDefined: function(id, defaultValue) {
          return 'ifDefined(' + id + ',' + this.escape(defaultValue) + ')';
        },
        plus: function(left, right) {
          return 'plus(' + left + ',' + right + ')';
        },
        return_: function(id) {
          this.current().body.push('return ', id, ';');
        },
        if_: function(test, alternate, consequent) {
          if (test === true) {
            alternate();
          } else {
            var body = this.current().body;
            body.push('if(', test, '){');
            alternate();
            body.push('}');
            if (consequent) {
              body.push('else{');
              consequent();
              body.push('}');
            }
          }
        },
        not: function(expression) {
          return '!(' + expression + ')';
        },
        notNull: function(expression) {
          return expression + '!=null';
        },
        nonComputedMember: function(left, right) {
          return left + '.' + right;
        },
        computedMember: function(left, right) {
          return left + '[' + right + ']';
        },
        member: function(left, right, computed) {
          if (computed)
            return this.computedMember(left, right);
          return this.nonComputedMember(left, right);
        },
        addEnsureSafeObject: function(item) {
          this.current().body.push(this.ensureSafeObject(item), ';');
        },
        addEnsureSafeMemberName: function(item) {
          this.current().body.push(this.ensureSafeMemberName(item), ';');
        },
        addEnsureSafeFunction: function(item) {
          this.current().body.push(this.ensureSafeFunction(item), ';');
        },
        ensureSafeObject: function(item) {
          return 'ensureSafeObject(' + item + ',text)';
        },
        ensureSafeMemberName: function(item) {
          return 'ensureSafeMemberName(' + item + ',text)';
        },
        ensureSafeFunction: function(item) {
          return 'ensureSafeFunction(' + item + ',text)';
        },
        lazyRecurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
          var self = this;
          return function() {
            self.recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck);
          };
        },
        lazyAssign: function(id, value) {
          var self = this;
          return function() {
            self.assign(id, value);
          };
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(c) {
          return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
        },
        escape: function(value) {
          if (isString(value))
            return "'" + value.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
          if (isNumber(value))
            return value.toString();
          if (value === true)
            return 'true';
          if (value === false)
            return 'false';
          if (value === null)
            return 'null';
          if (typeof value === 'undefined')
            return 'undefined';
          throw $parseMinErr('esc', 'IMPOSSIBLE');
        },
        nextId: function(skip, init) {
          var id = 'v' + (this.state.nextId++);
          if (!skip) {
            this.current().vars.push(id + (init ? '=' + init : ''));
          }
          return id;
        },
        current: function() {
          return this.state[this.state.computing];
        }
      };
      function ASTInterpreter(astBuilder, $filter) {
        this.astBuilder = astBuilder;
        this.$filter = $filter;
      }
      ASTInterpreter.prototype = {
        compile: function(expression, expensiveChecks) {
          var self = this;
          var ast = this.astBuilder.ast(expression);
          this.expression = expression;
          this.expensiveChecks = expensiveChecks;
          findConstantAndWatchExpressions(ast, self.$filter);
          var assignable;
          var assign;
          if ((assignable = assignableAST(ast))) {
            assign = this.recurse(assignable);
          }
          var toWatch = getInputs(ast.body);
          var inputs;
          if (toWatch) {
            inputs = [];
            forEach(toWatch, function(watch, key) {
              var input = self.recurse(watch);
              watch.input = input;
              inputs.push(input);
              watch.watchId = key;
            });
          }
          var expressions = [];
          forEach(ast.body, function(expression) {
            expressions.push(self.recurse(expression.expression));
          });
          var fn = ast.body.length === 0 ? function() {} : ast.body.length === 1 ? expressions[0] : function(scope, locals) {
            var lastValue;
            forEach(expressions, function(exp) {
              lastValue = exp(scope, locals);
            });
            return lastValue;
          };
          if (assign) {
            fn.assign = function(scope, value, locals) {
              return assign(scope, locals, value);
            };
          }
          if (inputs) {
            fn.inputs = inputs;
          }
          fn.literal = isLiteral(ast);
          fn.constant = isConstant(ast);
          return fn;
        },
        recurse: function(ast, context, create) {
          var left,
              right,
              self = this,
              args,
              expression;
          if (ast.input) {
            return this.inputs(ast.input, ast.watchId);
          }
          switch (ast.type) {
            case AST.Literal:
              return this.value(ast.value, context);
            case AST.UnaryExpression:
              right = this.recurse(ast.argument);
              return this['unary' + ast.operator](right, context);
            case AST.BinaryExpression:
              left = this.recurse(ast.left);
              right = this.recurse(ast.right);
              return this['binary' + ast.operator](left, right, context);
            case AST.LogicalExpression:
              left = this.recurse(ast.left);
              right = this.recurse(ast.right);
              return this['binary' + ast.operator](left, right, context);
            case AST.ConditionalExpression:
              return this['ternary?:'](this.recurse(ast.test), this.recurse(ast.alternate), this.recurse(ast.consequent), context);
            case AST.Identifier:
              ensureSafeMemberName(ast.name, self.expression);
              return self.identifier(ast.name, self.expensiveChecks || isPossiblyDangerousMemberName(ast.name), context, create, self.expression);
            case AST.MemberExpression:
              left = this.recurse(ast.object, false, !!create);
              if (!ast.computed) {
                ensureSafeMemberName(ast.property.name, self.expression);
                right = ast.property.name;
              }
              if (ast.computed)
                right = this.recurse(ast.property);
              return ast.computed ? this.computedMember(left, right, context, create, self.expression) : this.nonComputedMember(left, right, self.expensiveChecks, context, create, self.expression);
            case AST.CallExpression:
              args = [];
              forEach(ast.arguments, function(expr) {
                args.push(self.recurse(expr));
              });
              if (ast.filter)
                right = this.$filter(ast.callee.name);
              if (!ast.filter)
                right = this.recurse(ast.callee, true);
              return ast.filter ? function(scope, locals, assign, inputs) {
                var values = [];
                for (var i = 0; i < args.length; ++i) {
                  values.push(args[i](scope, locals, assign, inputs));
                }
                var value = right.apply(undefined, values, inputs);
                return context ? {
                  context: undefined,
                  name: undefined,
                  value: value
                } : value;
              } : function(scope, locals, assign, inputs) {
                var rhs = right(scope, locals, assign, inputs);
                var value;
                if (rhs.value != null) {
                  ensureSafeObject(rhs.context, self.expression);
                  ensureSafeFunction(rhs.value, self.expression);
                  var values = [];
                  for (var i = 0; i < args.length; ++i) {
                    values.push(ensureSafeObject(args[i](scope, locals, assign, inputs), self.expression));
                  }
                  value = ensureSafeObject(rhs.value.apply(rhs.context, values), self.expression);
                }
                return context ? {value: value} : value;
              };
            case AST.AssignmentExpression:
              left = this.recurse(ast.left, true, 1);
              right = this.recurse(ast.right);
              return function(scope, locals, assign, inputs) {
                var lhs = left(scope, locals, assign, inputs);
                var rhs = right(scope, locals, assign, inputs);
                ensureSafeObject(lhs.value, self.expression);
                lhs.context[lhs.name] = rhs;
                return context ? {value: rhs} : rhs;
              };
            case AST.ArrayExpression:
              args = [];
              forEach(ast.elements, function(expr) {
                args.push(self.recurse(expr));
              });
              return function(scope, locals, assign, inputs) {
                var value = [];
                for (var i = 0; i < args.length; ++i) {
                  value.push(args[i](scope, locals, assign, inputs));
                }
                return context ? {value: value} : value;
              };
            case AST.ObjectExpression:
              args = [];
              forEach(ast.properties, function(property) {
                args.push({
                  key: property.key.type === AST.Identifier ? property.key.name : ('' + property.key.value),
                  value: self.recurse(property.value)
                });
              });
              return function(scope, locals, assign, inputs) {
                var value = {};
                for (var i = 0; i < args.length; ++i) {
                  value[args[i].key] = args[i].value(scope, locals, assign, inputs);
                }
                return context ? {value: value} : value;
              };
            case AST.ThisExpression:
              return function(scope) {
                return context ? {value: scope} : scope;
              };
            case AST.NGValueParameter:
              return function(scope, locals, assign, inputs) {
                return context ? {value: assign} : assign;
              };
          }
        },
        'unary+': function(argument, context) {
          return function(scope, locals, assign, inputs) {
            var arg = argument(scope, locals, assign, inputs);
            if (isDefined(arg)) {
              arg = +arg;
            } else {
              arg = 0;
            }
            return context ? {value: arg} : arg;
          };
        },
        'unary-': function(argument, context) {
          return function(scope, locals, assign, inputs) {
            var arg = argument(scope, locals, assign, inputs);
            if (isDefined(arg)) {
              arg = -arg;
            } else {
              arg = 0;
            }
            return context ? {value: arg} : arg;
          };
        },
        'unary!': function(argument, context) {
          return function(scope, locals, assign, inputs) {
            var arg = !argument(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary+': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            var rhs = right(scope, locals, assign, inputs);
            var arg = plusFn(lhs, rhs);
            return context ? {value: arg} : arg;
          };
        },
        'binary-': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            var rhs = right(scope, locals, assign, inputs);
            var arg = (isDefined(lhs) ? lhs : 0) - (isDefined(rhs) ? rhs : 0);
            return context ? {value: arg} : arg;
          };
        },
        'binary*': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) * right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary/': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) / right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary%': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) % right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary===': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) === right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary!==': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) !== right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary==': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) == right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary!=': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) != right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary<': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) < right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary>': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) > right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary<=': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) <= right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary>=': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) >= right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary&&': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) && right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'binary||': function(left, right, context) {
          return function(scope, locals, assign, inputs) {
            var arg = left(scope, locals, assign, inputs) || right(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        'ternary?:': function(test, alternate, consequent, context) {
          return function(scope, locals, assign, inputs) {
            var arg = test(scope, locals, assign, inputs) ? alternate(scope, locals, assign, inputs) : consequent(scope, locals, assign, inputs);
            return context ? {value: arg} : arg;
          };
        },
        value: function(value, context) {
          return function() {
            return context ? {
              context: undefined,
              name: undefined,
              value: value
            } : value;
          };
        },
        identifier: function(name, expensiveChecks, context, create, expression) {
          return function(scope, locals, assign, inputs) {
            var base = locals && (name in locals) ? locals : scope;
            if (create && create !== 1 && base && !(base[name])) {
              base[name] = {};
            }
            var value = base ? base[name] : undefined;
            if (expensiveChecks) {
              ensureSafeObject(value, expression);
            }
            if (context) {
              return {
                context: base,
                name: name,
                value: value
              };
            } else {
              return value;
            }
          };
        },
        computedMember: function(left, right, context, create, expression) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            var rhs;
            var value;
            if (lhs != null) {
              rhs = right(scope, locals, assign, inputs);
              ensureSafeMemberName(rhs, expression);
              if (create && create !== 1 && lhs && !(lhs[rhs])) {
                lhs[rhs] = {};
              }
              value = lhs[rhs];
              ensureSafeObject(value, expression);
            }
            if (context) {
              return {
                context: lhs,
                name: rhs,
                value: value
              };
            } else {
              return value;
            }
          };
        },
        nonComputedMember: function(left, right, expensiveChecks, context, create, expression) {
          return function(scope, locals, assign, inputs) {
            var lhs = left(scope, locals, assign, inputs);
            if (create && create !== 1 && lhs && !(lhs[right])) {
              lhs[right] = {};
            }
            var value = lhs != null ? lhs[right] : undefined;
            if (expensiveChecks || isPossiblyDangerousMemberName(right)) {
              ensureSafeObject(value, expression);
            }
            if (context) {
              return {
                context: lhs,
                name: right,
                value: value
              };
            } else {
              return value;
            }
          };
        },
        inputs: function(input, watchId) {
          return function(scope, value, locals, inputs) {
            if (inputs)
              return inputs[watchId];
            return input(scope, value, locals);
          };
        }
      };
      var Parser = function(lexer, $filter, options) {
        this.lexer = lexer;
        this.$filter = $filter;
        this.options = options;
        this.ast = new AST(this.lexer);
        this.astCompiler = options.csp ? new ASTInterpreter(this.ast, $filter) : new ASTCompiler(this.ast, $filter);
      };
      Parser.prototype = {
        constructor: Parser,
        parse: function(text) {
          return this.astCompiler.compile(text, this.options.expensiveChecks);
        }
      };
      function setter(obj, path, setValue, fullExp) {
        ensureSafeObject(obj, fullExp);
        var element = path.split('.'),
            key;
        for (var i = 0; element.length > 1; i++) {
          key = ensureSafeMemberName(element.shift(), fullExp);
          var propertyObj = ensureSafeObject(obj[key], fullExp);
          if (!propertyObj) {
            propertyObj = {};
            obj[key] = propertyObj;
          }
          obj = propertyObj;
        }
        key = ensureSafeMemberName(element.shift(), fullExp);
        ensureSafeObject(obj[key], fullExp);
        obj[key] = setValue;
        return setValue;
      }
      var getterFnCacheDefault = createMap();
      var getterFnCacheExpensive = createMap();
      function isPossiblyDangerousMemberName(name) {
        return name == 'constructor';
      }
      var objectValueOf = Object.prototype.valueOf;
      function getValueOf(value) {
        return isFunction(value.valueOf) ? value.valueOf() : objectValueOf.call(value);
      }
      function $ParseProvider() {
        var cacheDefault = createMap();
        var cacheExpensive = createMap();
        this.$get = ['$filter', '$sniffer', function($filter, $sniffer) {
          var $parseOptions = {
            csp: $sniffer.csp,
            expensiveChecks: false
          },
              $parseOptionsExpensive = {
                csp: $sniffer.csp,
                expensiveChecks: true
              };
          return function $parse(exp, interceptorFn, expensiveChecks) {
            var parsedExpression,
                oneTime,
                cacheKey;
            switch (typeof exp) {
              case 'string':
                exp = exp.trim();
                cacheKey = exp;
                var cache = (expensiveChecks ? cacheExpensive : cacheDefault);
                parsedExpression = cache[cacheKey];
                if (!parsedExpression) {
                  if (exp.charAt(0) === ':' && exp.charAt(1) === ':') {
                    oneTime = true;
                    exp = exp.substring(2);
                  }
                  var parseOptions = expensiveChecks ? $parseOptionsExpensive : $parseOptions;
                  var lexer = new Lexer(parseOptions);
                  var parser = new Parser(lexer, $filter, parseOptions);
                  parsedExpression = parser.parse(exp);
                  if (parsedExpression.constant) {
                    parsedExpression.$$watchDelegate = constantWatchDelegate;
                  } else if (oneTime) {
                    parsedExpression.$$watchDelegate = parsedExpression.literal ? oneTimeLiteralWatchDelegate : oneTimeWatchDelegate;
                  } else if (parsedExpression.inputs) {
                    parsedExpression.$$watchDelegate = inputsWatchDelegate;
                  }
                  cache[cacheKey] = parsedExpression;
                }
                return addInterceptor(parsedExpression, interceptorFn);
              case 'function':
                return addInterceptor(exp, interceptorFn);
              default:
                return noop;
            }
          };
          function expressionInputDirtyCheck(newValue, oldValueOfValue) {
            if (newValue == null || oldValueOfValue == null) {
              return newValue === oldValueOfValue;
            }
            if (typeof newValue === 'object') {
              newValue = getValueOf(newValue);
              if (typeof newValue === 'object') {
                return false;
              }
            }
            return newValue === oldValueOfValue || (newValue !== newValue && oldValueOfValue !== oldValueOfValue);
          }
          function inputsWatchDelegate(scope, listener, objectEquality, parsedExpression, prettyPrintExpression) {
            var inputExpressions = parsedExpression.inputs;
            var lastResult;
            if (inputExpressions.length === 1) {
              var oldInputValueOf = expressionInputDirtyCheck;
              inputExpressions = inputExpressions[0];
              return scope.$watch(function expressionInputWatch(scope) {
                var newInputValue = inputExpressions(scope);
                if (!expressionInputDirtyCheck(newInputValue, oldInputValueOf)) {
                  lastResult = parsedExpression(scope, undefined, undefined, [newInputValue]);
                  oldInputValueOf = newInputValue && getValueOf(newInputValue);
                }
                return lastResult;
              }, listener, objectEquality, prettyPrintExpression);
            }
            var oldInputValueOfValues = [];
            var oldInputValues = [];
            for (var i = 0,
                ii = inputExpressions.length; i < ii; i++) {
              oldInputValueOfValues[i] = expressionInputDirtyCheck;
              oldInputValues[i] = null;
            }
            return scope.$watch(function expressionInputsWatch(scope) {
              var changed = false;
              for (var i = 0,
                  ii = inputExpressions.length; i < ii; i++) {
                var newInputValue = inputExpressions[i](scope);
                if (changed || (changed = !expressionInputDirtyCheck(newInputValue, oldInputValueOfValues[i]))) {
                  oldInputValues[i] = newInputValue;
                  oldInputValueOfValues[i] = newInputValue && getValueOf(newInputValue);
                }
              }
              if (changed) {
                lastResult = parsedExpression(scope, undefined, undefined, oldInputValues);
              }
              return lastResult;
            }, listener, objectEquality, prettyPrintExpression);
          }
          function oneTimeWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch,
                lastValue;
            return unwatch = scope.$watch(function oneTimeWatch(scope) {
              return parsedExpression(scope);
            }, function oneTimeListener(value, old, scope) {
              lastValue = value;
              if (isFunction(listener)) {
                listener.apply(this, arguments);
              }
              if (isDefined(value)) {
                scope.$$postDigest(function() {
                  if (isDefined(lastValue)) {
                    unwatch();
                  }
                });
              }
            }, objectEquality);
          }
          function oneTimeLiteralWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch,
                lastValue;
            return unwatch = scope.$watch(function oneTimeWatch(scope) {
              return parsedExpression(scope);
            }, function oneTimeListener(value, old, scope) {
              lastValue = value;
              if (isFunction(listener)) {
                listener.call(this, value, old, scope);
              }
              if (isAllDefined(value)) {
                scope.$$postDigest(function() {
                  if (isAllDefined(lastValue))
                    unwatch();
                });
              }
            }, objectEquality);
            function isAllDefined(value) {
              var allDefined = true;
              forEach(value, function(val) {
                if (!isDefined(val))
                  allDefined = false;
              });
              return allDefined;
            }
          }
          function constantWatchDelegate(scope, listener, objectEquality, parsedExpression) {
            var unwatch;
            return unwatch = scope.$watch(function constantWatch(scope) {
              return parsedExpression(scope);
            }, function constantListener(value, old, scope) {
              if (isFunction(listener)) {
                listener.apply(this, arguments);
              }
              unwatch();
            }, objectEquality);
          }
          function addInterceptor(parsedExpression, interceptorFn) {
            if (!interceptorFn)
              return parsedExpression;
            var watchDelegate = parsedExpression.$$watchDelegate;
            var regularWatch = watchDelegate !== oneTimeLiteralWatchDelegate && watchDelegate !== oneTimeWatchDelegate;
            var fn = regularWatch ? function regularInterceptedExpression(scope, locals, assign, inputs) {
              var value = parsedExpression(scope, locals, assign, inputs);
              return interceptorFn(value, scope, locals);
            } : function oneTimeInterceptedExpression(scope, locals, assign, inputs) {
              var value = parsedExpression(scope, locals, assign, inputs);
              var result = interceptorFn(value, scope, locals);
              return isDefined(value) ? result : value;
            };
            if (parsedExpression.$$watchDelegate && parsedExpression.$$watchDelegate !== inputsWatchDelegate) {
              fn.$$watchDelegate = parsedExpression.$$watchDelegate;
            } else if (!interceptorFn.$stateful) {
              fn.$$watchDelegate = inputsWatchDelegate;
              fn.inputs = parsedExpression.inputs ? parsedExpression.inputs : [parsedExpression];
            }
            return fn;
          }
        }];
      }
      function $QProvider() {
        this.$get = ['$rootScope', '$exceptionHandler', function($rootScope, $exceptionHandler) {
          return qFactory(function(callback) {
            $rootScope.$evalAsync(callback);
          }, $exceptionHandler);
        }];
      }
      function $$QProvider() {
        this.$get = ['$browser', '$exceptionHandler', function($browser, $exceptionHandler) {
          return qFactory(function(callback) {
            $browser.defer(callback);
          }, $exceptionHandler);
        }];
      }
      function qFactory(nextTick, exceptionHandler) {
        var $qMinErr = minErr('$q', TypeError);
        function callOnce(self, resolveFn, rejectFn) {
          var called = false;
          function wrap(fn) {
            return function(value) {
              if (called)
                return;
              called = true;
              fn.call(self, value);
            };
          }
          return [wrap(resolveFn), wrap(rejectFn)];
        }
        var defer = function() {
          return new Deferred();
        };
        function Promise() {
          this.$$state = {status: 0};
        }
        Promise.prototype = {
          then: function(onFulfilled, onRejected, progressBack) {
            var result = new Deferred();
            this.$$state.pending = this.$$state.pending || [];
            this.$$state.pending.push([result, onFulfilled, onRejected, progressBack]);
            if (this.$$state.status > 0)
              scheduleProcessQueue(this.$$state);
            return result.promise;
          },
          "catch": function(callback) {
            return this.then(null, callback);
          },
          "finally": function(callback, progressBack) {
            return this.then(function(value) {
              return handleCallback(value, true, callback);
            }, function(error) {
              return handleCallback(error, false, callback);
            }, progressBack);
          }
        };
        function simpleBind(context, fn) {
          return function(value) {
            fn.call(context, value);
          };
        }
        function processQueue(state) {
          var fn,
              deferred,
              pending;
          pending = state.pending;
          state.processScheduled = false;
          state.pending = undefined;
          for (var i = 0,
              ii = pending.length; i < ii; ++i) {
            deferred = pending[i][0];
            fn = pending[i][state.status];
            try {
              if (isFunction(fn)) {
                deferred.resolve(fn(state.value));
              } else if (state.status === 1) {
                deferred.resolve(state.value);
              } else {
                deferred.reject(state.value);
              }
            } catch (e) {
              deferred.reject(e);
              exceptionHandler(e);
            }
          }
        }
        function scheduleProcessQueue(state) {
          if (state.processScheduled || !state.pending)
            return;
          state.processScheduled = true;
          nextTick(function() {
            processQueue(state);
          });
        }
        function Deferred() {
          this.promise = new Promise();
          this.resolve = simpleBind(this, this.resolve);
          this.reject = simpleBind(this, this.reject);
          this.notify = simpleBind(this, this.notify);
        }
        Deferred.prototype = {
          resolve: function(val) {
            if (this.promise.$$state.status)
              return;
            if (val === this.promise) {
              this.$$reject($qMinErr('qcycle', "Expected promise to be resolved with value other than itself '{0}'", val));
            } else {
              this.$$resolve(val);
            }
          },
          $$resolve: function(val) {
            var then,
                fns;
            fns = callOnce(this, this.$$resolve, this.$$reject);
            try {
              if ((isObject(val) || isFunction(val)))
                then = val && val.then;
              if (isFunction(then)) {
                this.promise.$$state.status = -1;
                then.call(val, fns[0], fns[1], this.notify);
              } else {
                this.promise.$$state.value = val;
                this.promise.$$state.status = 1;
                scheduleProcessQueue(this.promise.$$state);
              }
            } catch (e) {
              fns[1](e);
              exceptionHandler(e);
            }
          },
          reject: function(reason) {
            if (this.promise.$$state.status)
              return;
            this.$$reject(reason);
          },
          $$reject: function(reason) {
            this.promise.$$state.value = reason;
            this.promise.$$state.status = 2;
            scheduleProcessQueue(this.promise.$$state);
          },
          notify: function(progress) {
            var callbacks = this.promise.$$state.pending;
            if ((this.promise.$$state.status <= 0) && callbacks && callbacks.length) {
              nextTick(function() {
                var callback,
                    result;
                for (var i = 0,
                    ii = callbacks.length; i < ii; i++) {
                  result = callbacks[i][0];
                  callback = callbacks[i][3];
                  try {
                    result.notify(isFunction(callback) ? callback(progress) : progress);
                  } catch (e) {
                    exceptionHandler(e);
                  }
                }
              });
            }
          }
        };
        var reject = function(reason) {
          var result = new Deferred();
          result.reject(reason);
          return result.promise;
        };
        var makePromise = function makePromise(value, resolved) {
          var result = new Deferred();
          if (resolved) {
            result.resolve(value);
          } else {
            result.reject(value);
          }
          return result.promise;
        };
        var handleCallback = function handleCallback(value, isResolved, callback) {
          var callbackOutput = null;
          try {
            if (isFunction(callback))
              callbackOutput = callback();
          } catch (e) {
            return makePromise(e, false);
          }
          if (isPromiseLike(callbackOutput)) {
            return callbackOutput.then(function() {
              return makePromise(value, isResolved);
            }, function(error) {
              return makePromise(error, false);
            });
          } else {
            return makePromise(value, isResolved);
          }
        };
        var when = function(value, callback, errback, progressBack) {
          var result = new Deferred();
          result.resolve(value);
          return result.promise.then(callback, errback, progressBack);
        };
        function all(promises) {
          var deferred = new Deferred(),
              counter = 0,
              results = isArray(promises) ? [] : {};
          forEach(promises, function(promise, key) {
            counter++;
            when(promise).then(function(value) {
              if (results.hasOwnProperty(key))
                return;
              results[key] = value;
              if (!(--counter))
                deferred.resolve(results);
            }, function(reason) {
              if (results.hasOwnProperty(key))
                return;
              deferred.reject(reason);
            });
          });
          if (counter === 0) {
            deferred.resolve(results);
          }
          return deferred.promise;
        }
        var $Q = function Q(resolver) {
          if (!isFunction(resolver)) {
            throw $qMinErr('norslvr', "Expected resolverFn, got '{0}'", resolver);
          }
          if (!(this instanceof Q)) {
            return new Q(resolver);
          }
          var deferred = new Deferred();
          function resolveFn(value) {
            deferred.resolve(value);
          }
          function rejectFn(reason) {
            deferred.reject(reason);
          }
          resolver(resolveFn, rejectFn);
          return deferred.promise;
        };
        $Q.defer = defer;
        $Q.reject = reject;
        $Q.when = when;
        $Q.all = all;
        return $Q;
      }
      function $$RAFProvider() {
        this.$get = ['$window', '$timeout', function($window, $timeout) {
          var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame;
          var cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame;
          var rafSupported = !!requestAnimationFrame;
          var rafFn = rafSupported ? function(fn) {
            var id = requestAnimationFrame(fn);
            return function() {
              cancelAnimationFrame(id);
            };
          } : function(fn) {
            var timer = $timeout(fn, 16.66, false);
            return function() {
              $timeout.cancel(timer);
            };
          };
          queueFn.supported = rafSupported;
          var cancelLastRAF;
          var taskCount = 0;
          var taskQueue = [];
          return queueFn;
          function flush() {
            for (var i = 0; i < taskQueue.length; i++) {
              var task = taskQueue[i];
              if (task) {
                taskQueue[i] = null;
                task();
              }
            }
            taskCount = taskQueue.length = 0;
          }
          function queueFn(asyncFn) {
            var index = taskQueue.length;
            taskCount++;
            taskQueue.push(asyncFn);
            if (index === 0) {
              cancelLastRAF = rafFn(flush);
            }
            return function cancelQueueFn() {
              if (index >= 0) {
                taskQueue[index] = null;
                index = null;
                if (--taskCount === 0 && cancelLastRAF) {
                  cancelLastRAF();
                  cancelLastRAF = null;
                  taskQueue.length = 0;
                }
              }
            };
          }
        }];
      }
      function $RootScopeProvider() {
        var TTL = 10;
        var $rootScopeMinErr = minErr('$rootScope');
        var lastDirtyWatch = null;
        var applyAsyncId = null;
        this.digestTtl = function(value) {
          if (arguments.length) {
            TTL = value;
          }
          return TTL;
        };
        function createChildScopeClass(parent) {
          function ChildScope() {
            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$watchersCount = 0;
            this.$id = nextUid();
            this.$$ChildScope = null;
          }
          ChildScope.prototype = parent;
          return ChildScope;
        }
        this.$get = ['$injector', '$exceptionHandler', '$parse', '$browser', function($injector, $exceptionHandler, $parse, $browser) {
          function destroyChildScope($event) {
            $event.currentScope.$$destroyed = true;
          }
          function Scope() {
            this.$id = nextUid();
            this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
            this.$root = this;
            this.$$destroyed = false;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$watchersCount = 0;
            this.$$isolateBindings = null;
          }
          Scope.prototype = {
            constructor: Scope,
            $new: function(isolate, parent) {
              var child;
              parent = parent || this;
              if (isolate) {
                child = new Scope();
                child.$root = this.$root;
              } else {
                if (!this.$$ChildScope) {
                  this.$$ChildScope = createChildScopeClass(this);
                }
                child = new this.$$ChildScope();
              }
              child.$parent = parent;
              child.$$prevSibling = parent.$$childTail;
              if (parent.$$childHead) {
                parent.$$childTail.$$nextSibling = child;
                parent.$$childTail = child;
              } else {
                parent.$$childHead = parent.$$childTail = child;
              }
              if (isolate || parent != this)
                child.$on('$destroy', destroyChildScope);
              return child;
            },
            $watch: function(watchExp, listener, objectEquality, prettyPrintExpression) {
              var get = $parse(watchExp);
              if (get.$$watchDelegate) {
                return get.$$watchDelegate(this, listener, objectEquality, get, watchExp);
              }
              var scope = this,
                  array = scope.$$watchers,
                  watcher = {
                    fn: listener,
                    last: initWatchVal,
                    get: get,
                    exp: prettyPrintExpression || watchExp,
                    eq: !!objectEquality
                  };
              lastDirtyWatch = null;
              if (!isFunction(listener)) {
                watcher.fn = noop;
              }
              if (!array) {
                array = scope.$$watchers = [];
              }
              array.unshift(watcher);
              incrementWatchersCount(this, 1);
              return function deregisterWatch() {
                if (arrayRemove(array, watcher) >= 0) {
                  incrementWatchersCount(scope, -1);
                }
                lastDirtyWatch = null;
              };
            },
            $watchGroup: function(watchExpressions, listener) {
              var oldValues = new Array(watchExpressions.length);
              var newValues = new Array(watchExpressions.length);
              var deregisterFns = [];
              var self = this;
              var changeReactionScheduled = false;
              var firstRun = true;
              if (!watchExpressions.length) {
                var shouldCall = true;
                self.$evalAsync(function() {
                  if (shouldCall)
                    listener(newValues, newValues, self);
                });
                return function deregisterWatchGroup() {
                  shouldCall = false;
                };
              }
              if (watchExpressions.length === 1) {
                return this.$watch(watchExpressions[0], function watchGroupAction(value, oldValue, scope) {
                  newValues[0] = value;
                  oldValues[0] = oldValue;
                  listener(newValues, (value === oldValue) ? newValues : oldValues, scope);
                });
              }
              forEach(watchExpressions, function(expr, i) {
                var unwatchFn = self.$watch(expr, function watchGroupSubAction(value, oldValue) {
                  newValues[i] = value;
                  oldValues[i] = oldValue;
                  if (!changeReactionScheduled) {
                    changeReactionScheduled = true;
                    self.$evalAsync(watchGroupAction);
                  }
                });
                deregisterFns.push(unwatchFn);
              });
              function watchGroupAction() {
                changeReactionScheduled = false;
                if (firstRun) {
                  firstRun = false;
                  listener(newValues, newValues, self);
                } else {
                  listener(newValues, oldValues, self);
                }
              }
              return function deregisterWatchGroup() {
                while (deregisterFns.length) {
                  deregisterFns.shift()();
                }
              };
            },
            $watchCollection: function(obj, listener) {
              $watchCollectionInterceptor.$stateful = true;
              var self = this;
              var newValue;
              var oldValue;
              var veryOldValue;
              var trackVeryOldValue = (listener.length > 1);
              var changeDetected = 0;
              var changeDetector = $parse(obj, $watchCollectionInterceptor);
              var internalArray = [];
              var internalObject = {};
              var initRun = true;
              var oldLength = 0;
              function $watchCollectionInterceptor(_value) {
                newValue = _value;
                var newLength,
                    key,
                    bothNaN,
                    newItem,
                    oldItem;
                if (isUndefined(newValue))
                  return;
                if (!isObject(newValue)) {
                  if (oldValue !== newValue) {
                    oldValue = newValue;
                    changeDetected++;
                  }
                } else if (isArrayLike(newValue)) {
                  if (oldValue !== internalArray) {
                    oldValue = internalArray;
                    oldLength = oldValue.length = 0;
                    changeDetected++;
                  }
                  newLength = newValue.length;
                  if (oldLength !== newLength) {
                    changeDetected++;
                    oldValue.length = oldLength = newLength;
                  }
                  for (var i = 0; i < newLength; i++) {
                    oldItem = oldValue[i];
                    newItem = newValue[i];
                    bothNaN = (oldItem !== oldItem) && (newItem !== newItem);
                    if (!bothNaN && (oldItem !== newItem)) {
                      changeDetected++;
                      oldValue[i] = newItem;
                    }
                  }
                } else {
                  if (oldValue !== internalObject) {
                    oldValue = internalObject = {};
                    oldLength = 0;
                    changeDetected++;
                  }
                  newLength = 0;
                  for (key in newValue) {
                    if (newValue.hasOwnProperty(key)) {
                      newLength++;
                      newItem = newValue[key];
                      oldItem = oldValue[key];
                      if (key in oldValue) {
                        bothNaN = (oldItem !== oldItem) && (newItem !== newItem);
                        if (!bothNaN && (oldItem !== newItem)) {
                          changeDetected++;
                          oldValue[key] = newItem;
                        }
                      } else {
                        oldLength++;
                        oldValue[key] = newItem;
                        changeDetected++;
                      }
                    }
                  }
                  if (oldLength > newLength) {
                    changeDetected++;
                    for (key in oldValue) {
                      if (!newValue.hasOwnProperty(key)) {
                        oldLength--;
                        delete oldValue[key];
                      }
                    }
                  }
                }
                return changeDetected;
              }
              function $watchCollectionAction() {
                if (initRun) {
                  initRun = false;
                  listener(newValue, newValue, self);
                } else {
                  listener(newValue, veryOldValue, self);
                }
                if (trackVeryOldValue) {
                  if (!isObject(newValue)) {
                    veryOldValue = newValue;
                  } else if (isArrayLike(newValue)) {
                    veryOldValue = new Array(newValue.length);
                    for (var i = 0; i < newValue.length; i++) {
                      veryOldValue[i] = newValue[i];
                    }
                  } else {
                    veryOldValue = {};
                    for (var key in newValue) {
                      if (hasOwnProperty.call(newValue, key)) {
                        veryOldValue[key] = newValue[key];
                      }
                    }
                  }
                }
              }
              return this.$watch(changeDetector, $watchCollectionAction);
            },
            $digest: function() {
              var watch,
                  value,
                  last,
                  watchers,
                  length,
                  dirty,
                  ttl = TTL,
                  next,
                  current,
                  target = this,
                  watchLog = [],
                  logIdx,
                  logMsg,
                  asyncTask;
              beginPhase('$digest');
              $browser.$$checkUrlChange();
              if (this === $rootScope && applyAsyncId !== null) {
                $browser.defer.cancel(applyAsyncId);
                flushApplyAsync();
              }
              lastDirtyWatch = null;
              do {
                dirty = false;
                current = target;
                while (asyncQueue.length) {
                  try {
                    asyncTask = asyncQueue.shift();
                    asyncTask.scope.$eval(asyncTask.expression, asyncTask.locals);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                  lastDirtyWatch = null;
                }
                traverseScopesLoop: do {
                  if ((watchers = current.$$watchers)) {
                    length = watchers.length;
                    while (length--) {
                      try {
                        watch = watchers[length];
                        if (watch) {
                          if ((value = watch.get(current)) !== (last = watch.last) && !(watch.eq ? equals(value, last) : (typeof value === 'number' && typeof last === 'number' && isNaN(value) && isNaN(last)))) {
                            dirty = true;
                            lastDirtyWatch = watch;
                            watch.last = watch.eq ? copy(value, null) : value;
                            watch.fn(value, ((last === initWatchVal) ? value : last), current);
                            if (ttl < 5) {
                              logIdx = 4 - ttl;
                              if (!watchLog[logIdx])
                                watchLog[logIdx] = [];
                              watchLog[logIdx].push({
                                msg: isFunction(watch.exp) ? 'fn: ' + (watch.exp.name || watch.exp.toString()) : watch.exp,
                                newVal: value,
                                oldVal: last
                              });
                            }
                          } else if (watch === lastDirtyWatch) {
                            dirty = false;
                            break traverseScopesLoop;
                          }
                        }
                      } catch (e) {
                        $exceptionHandler(e);
                      }
                    }
                  }
                  if (!(next = ((current.$$watchersCount && current.$$childHead) || (current !== target && current.$$nextSibling)))) {
                    while (current !== target && !(next = current.$$nextSibling)) {
                      current = current.$parent;
                    }
                  }
                } while ((current = next));
                if ((dirty || asyncQueue.length) && !(ttl--)) {
                  clearPhase();
                  throw $rootScopeMinErr('infdig', '{0} $digest() iterations reached. Aborting!\n' + 'Watchers fired in the last 5 iterations: {1}', TTL, watchLog);
                }
              } while (dirty || asyncQueue.length);
              clearPhase();
              while (postDigestQueue.length) {
                try {
                  postDigestQueue.shift()();
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
            },
            $destroy: function() {
              if (this.$$destroyed)
                return;
              var parent = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = true;
              if (this === $rootScope) {
                $browser.$$applicationDestroyed();
              }
              incrementWatchersCount(this, -this.$$watchersCount);
              for (var eventName in this.$$listenerCount) {
                decrementListenerCount(this, this.$$listenerCount[eventName], eventName);
              }
              if (parent && parent.$$childHead == this)
                parent.$$childHead = this.$$nextSibling;
              if (parent && parent.$$childTail == this)
                parent.$$childTail = this.$$prevSibling;
              if (this.$$prevSibling)
                this.$$prevSibling.$$nextSibling = this.$$nextSibling;
              if (this.$$nextSibling)
                this.$$nextSibling.$$prevSibling = this.$$prevSibling;
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = noop;
              this.$on = this.$watch = this.$watchGroup = function() {
                return noop;
              };
              this.$$listeners = {};
              this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
            },
            $eval: function(expr, locals) {
              return $parse(expr)(this, locals);
            },
            $evalAsync: function(expr, locals) {
              if (!$rootScope.$$phase && !asyncQueue.length) {
                $browser.defer(function() {
                  if (asyncQueue.length) {
                    $rootScope.$digest();
                  }
                });
              }
              asyncQueue.push({
                scope: this,
                expression: expr,
                locals: locals
              });
            },
            $$postDigest: function(fn) {
              postDigestQueue.push(fn);
            },
            $apply: function(expr) {
              try {
                beginPhase('$apply');
                return this.$eval(expr);
              } catch (e) {
                $exceptionHandler(e);
              } finally {
                clearPhase();
                try {
                  $rootScope.$digest();
                } catch (e) {
                  $exceptionHandler(e);
                  throw e;
                }
              }
            },
            $applyAsync: function(expr) {
              var scope = this;
              expr && applyAsyncQueue.push($applyAsyncExpression);
              scheduleApplyAsync();
              function $applyAsyncExpression() {
                scope.$eval(expr);
              }
            },
            $on: function(name, listener) {
              var namedListeners = this.$$listeners[name];
              if (!namedListeners) {
                this.$$listeners[name] = namedListeners = [];
              }
              namedListeners.push(listener);
              var current = this;
              do {
                if (!current.$$listenerCount[name]) {
                  current.$$listenerCount[name] = 0;
                }
                current.$$listenerCount[name]++;
              } while ((current = current.$parent));
              var self = this;
              return function() {
                var indexOfListener = namedListeners.indexOf(listener);
                if (indexOfListener !== -1) {
                  namedListeners[indexOfListener] = null;
                  decrementListenerCount(self, 1, name);
                }
              };
            },
            $emit: function(name, args) {
              var empty = [],
                  namedListeners,
                  scope = this,
                  stopPropagation = false,
                  event = {
                    name: name,
                    targetScope: scope,
                    stopPropagation: function() {
                      stopPropagation = true;
                    },
                    preventDefault: function() {
                      event.defaultPrevented = true;
                    },
                    defaultPrevented: false
                  },
                  listenerArgs = concat([event], arguments, 1),
                  i,
                  length;
              do {
                namedListeners = scope.$$listeners[name] || empty;
                event.currentScope = scope;
                for (i = 0, length = namedListeners.length; i < length; i++) {
                  if (!namedListeners[i]) {
                    namedListeners.splice(i, 1);
                    i--;
                    length--;
                    continue;
                  }
                  try {
                    namedListeners[i].apply(null, listenerArgs);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (stopPropagation) {
                  event.currentScope = null;
                  return event;
                }
                scope = scope.$parent;
              } while (scope);
              event.currentScope = null;
              return event;
            },
            $broadcast: function(name, args) {
              var target = this,
                  current = target,
                  next = target,
                  event = {
                    name: name,
                    targetScope: target,
                    preventDefault: function() {
                      event.defaultPrevented = true;
                    },
                    defaultPrevented: false
                  };
              if (!target.$$listenerCount[name])
                return event;
              var listenerArgs = concat([event], arguments, 1),
                  listeners,
                  i,
                  length;
              while ((current = next)) {
                event.currentScope = current;
                listeners = current.$$listeners[name] || [];
                for (i = 0, length = listeners.length; i < length; i++) {
                  if (!listeners[i]) {
                    listeners.splice(i, 1);
                    i--;
                    length--;
                    continue;
                  }
                  try {
                    listeners[i].apply(null, listenerArgs);
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (!(next = ((current.$$listenerCount[name] && current.$$childHead) || (current !== target && current.$$nextSibling)))) {
                  while (current !== target && !(next = current.$$nextSibling)) {
                    current = current.$parent;
                  }
                }
              }
              event.currentScope = null;
              return event;
            }
          };
          var $rootScope = new Scope();
          var asyncQueue = $rootScope.$$asyncQueue = [];
          var postDigestQueue = $rootScope.$$postDigestQueue = [];
          var applyAsyncQueue = $rootScope.$$applyAsyncQueue = [];
          return $rootScope;
          function beginPhase(phase) {
            if ($rootScope.$$phase) {
              throw $rootScopeMinErr('inprog', '{0} already in progress', $rootScope.$$phase);
            }
            $rootScope.$$phase = phase;
          }
          function clearPhase() {
            $rootScope.$$phase = null;
          }
          function incrementWatchersCount(current, count) {
            do {
              current.$$watchersCount += count;
            } while ((current = current.$parent));
          }
          function decrementListenerCount(current, count, name) {
            do {
              current.$$listenerCount[name] -= count;
              if (current.$$listenerCount[name] === 0) {
                delete current.$$listenerCount[name];
              }
            } while ((current = current.$parent));
          }
          function initWatchVal() {}
          function flushApplyAsync() {
            while (applyAsyncQueue.length) {
              try {
                applyAsyncQueue.shift()();
              } catch (e) {
                $exceptionHandler(e);
              }
            }
            applyAsyncId = null;
          }
          function scheduleApplyAsync() {
            if (applyAsyncId === null) {
              applyAsyncId = $browser.defer(function() {
                $rootScope.$apply(flushApplyAsync);
              });
            }
          }
        }];
      }
      function $$SanitizeUriProvider() {
        var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/,
            imgSrcSanitizationWhitelist = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            aHrefSanitizationWhitelist = regexp;
            return this;
          }
          return aHrefSanitizationWhitelist;
        };
        this.imgSrcSanitizationWhitelist = function(regexp) {
          if (isDefined(regexp)) {
            imgSrcSanitizationWhitelist = regexp;
            return this;
          }
          return imgSrcSanitizationWhitelist;
        };
        this.$get = function() {
          return function sanitizeUri(uri, isImage) {
            var regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
            var normalizedVal;
            normalizedVal = urlResolve(uri).href;
            if (normalizedVal !== '' && !normalizedVal.match(regex)) {
              return 'unsafe:' + normalizedVal;
            }
            return uri;
          };
        };
      }
      var $sceMinErr = minErr('$sce');
      var SCE_CONTEXTS = {
        HTML: 'html',
        CSS: 'css',
        URL: 'url',
        RESOURCE_URL: 'resourceUrl',
        JS: 'js'
      };
      function adjustMatcher(matcher) {
        if (matcher === 'self') {
          return matcher;
        } else if (isString(matcher)) {
          if (matcher.indexOf('***') > -1) {
            throw $sceMinErr('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', matcher);
          }
          matcher = escapeForRegexp(matcher).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
          return new RegExp('^' + matcher + '$');
        } else if (isRegExp(matcher)) {
          return new RegExp('^' + matcher.source + '$');
        } else {
          throw $sceMinErr('imatcher', 'Matchers may only be "self", string patterns or RegExp objects');
        }
      }
      function adjustMatchers(matchers) {
        var adjustedMatchers = [];
        if (isDefined(matchers)) {
          forEach(matchers, function(matcher) {
            adjustedMatchers.push(adjustMatcher(matcher));
          });
        }
        return adjustedMatchers;
      }
      function $SceDelegateProvider() {
        this.SCE_CONTEXTS = SCE_CONTEXTS;
        var resourceUrlWhitelist = ['self'],
            resourceUrlBlacklist = [];
        this.resourceUrlWhitelist = function(value) {
          if (arguments.length) {
            resourceUrlWhitelist = adjustMatchers(value);
          }
          return resourceUrlWhitelist;
        };
        this.resourceUrlBlacklist = function(value) {
          if (arguments.length) {
            resourceUrlBlacklist = adjustMatchers(value);
          }
          return resourceUrlBlacklist;
        };
        this.$get = ['$injector', function($injector) {
          var htmlSanitizer = function htmlSanitizer(html) {
            throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
          };
          if ($injector.has('$sanitize')) {
            htmlSanitizer = $injector.get('$sanitize');
          }
          function matchUrl(matcher, parsedUrl) {
            if (matcher === 'self') {
              return urlIsSameOrigin(parsedUrl);
            } else {
              return !!matcher.exec(parsedUrl.href);
            }
          }
          function isResourceUrlAllowedByPolicy(url) {
            var parsedUrl = urlResolve(url.toString());
            var i,
                n,
                allowed = false;
            for (i = 0, n = resourceUrlWhitelist.length; i < n; i++) {
              if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
                allowed = true;
                break;
              }
            }
            if (allowed) {
              for (i = 0, n = resourceUrlBlacklist.length; i < n; i++) {
                if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                  allowed = false;
                  break;
                }
              }
            }
            return allowed;
          }
          function generateHolderType(Base) {
            var holderType = function TrustedValueHolderType(trustedValue) {
              this.$$unwrapTrustedValue = function() {
                return trustedValue;
              };
            };
            if (Base) {
              holderType.prototype = new Base();
            }
            holderType.prototype.valueOf = function sceValueOf() {
              return this.$$unwrapTrustedValue();
            };
            holderType.prototype.toString = function sceToString() {
              return this.$$unwrapTrustedValue().toString();
            };
            return holderType;
          }
          var trustedValueHolderBase = generateHolderType(),
              byType = {};
          byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase);
          byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]);
          function trustAs(type, trustedValue) {
            var Constructor = (byType.hasOwnProperty(type) ? byType[type] : null);
            if (!Constructor) {
              throw $sceMinErr('icontext', 'Attempted to trust a value in invalid context. Context: {0}; Value: {1}', type, trustedValue);
            }
            if (trustedValue === null || trustedValue === undefined || trustedValue === '') {
              return trustedValue;
            }
            if (typeof trustedValue !== 'string') {
              throw $sceMinErr('itype', 'Attempted to trust a non-string value in a content requiring a string: Context: {0}', type);
            }
            return new Constructor(trustedValue);
          }
          function valueOf(maybeTrusted) {
            if (maybeTrusted instanceof trustedValueHolderBase) {
              return maybeTrusted.$$unwrapTrustedValue();
            } else {
              return maybeTrusted;
            }
          }
          function getTrusted(type, maybeTrusted) {
            if (maybeTrusted === null || maybeTrusted === undefined || maybeTrusted === '') {
              return maybeTrusted;
            }
            var constructor = (byType.hasOwnProperty(type) ? byType[type] : null);
            if (constructor && maybeTrusted instanceof constructor) {
              return maybeTrusted.$$unwrapTrustedValue();
            }
            if (type === SCE_CONTEXTS.RESOURCE_URL) {
              if (isResourceUrlAllowedByPolicy(maybeTrusted)) {
                return maybeTrusted;
              } else {
                throw $sceMinErr('insecurl', 'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}', maybeTrusted.toString());
              }
            } else if (type === SCE_CONTEXTS.HTML) {
              return htmlSanitizer(maybeTrusted);
            }
            throw $sceMinErr('unsafe', 'Attempting to use an unsafe value in a safe context.');
          }
          return {
            trustAs: trustAs,
            getTrusted: getTrusted,
            valueOf: valueOf
          };
        }];
      }
      function $SceProvider() {
        var enabled = true;
        this.enabled = function(value) {
          if (arguments.length) {
            enabled = !!value;
          }
          return enabled;
        };
        this.$get = ['$parse', '$sceDelegate', function($parse, $sceDelegate) {
          if (enabled && msie < 8) {
            throw $sceMinErr('iequirks', 'Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks ' + 'mode.  You can fix this by adding the text <!doctype html> to the top of your HTML ' + 'document.  See http://docs.angularjs.org/api/ng.$sce for more information.');
          }
          var sce = shallowCopy(SCE_CONTEXTS);
          sce.isEnabled = function() {
            return enabled;
          };
          sce.trustAs = $sceDelegate.trustAs;
          sce.getTrusted = $sceDelegate.getTrusted;
          sce.valueOf = $sceDelegate.valueOf;
          if (!enabled) {
            sce.trustAs = sce.getTrusted = function(type, value) {
              return value;
            };
            sce.valueOf = identity;
          }
          sce.parseAs = function sceParseAs(type, expr) {
            var parsed = $parse(expr);
            if (parsed.literal && parsed.constant) {
              return parsed;
            } else {
              return $parse(expr, function(value) {
                return sce.getTrusted(type, value);
              });
            }
          };
          var parse = sce.parseAs,
              getTrusted = sce.getTrusted,
              trustAs = sce.trustAs;
          forEach(SCE_CONTEXTS, function(enumValue, name) {
            var lName = lowercase(name);
            sce[camelCase("parse_as_" + lName)] = function(expr) {
              return parse(enumValue, expr);
            };
            sce[camelCase("get_trusted_" + lName)] = function(value) {
              return getTrusted(enumValue, value);
            };
            sce[camelCase("trust_as_" + lName)] = function(value) {
              return trustAs(enumValue, value);
            };
          });
          return sce;
        }];
      }
      function $SnifferProvider() {
        this.$get = ['$window', '$document', function($window, $document) {
          var eventSupport = {},
              android = toInt((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]),
              boxee = /Boxee/i.test(($window.navigator || {}).userAgent),
              document = $document[0] || {},
              vendorPrefix,
              vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/,
              bodyStyle = document.body && document.body.style,
              transitions = false,
              animations = false,
              match;
          if (bodyStyle) {
            for (var prop in bodyStyle) {
              if (match = vendorRegex.exec(prop)) {
                vendorPrefix = match[0];
                vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                break;
              }
            }
            if (!vendorPrefix) {
              vendorPrefix = ('WebkitOpacity' in bodyStyle) && 'webkit';
            }
            transitions = !!(('transition' in bodyStyle) || (vendorPrefix + 'Transition' in bodyStyle));
            animations = !!(('animation' in bodyStyle) || (vendorPrefix + 'Animation' in bodyStyle));
            if (android && (!transitions || !animations)) {
              transitions = isString(bodyStyle.webkitTransition);
              animations = isString(bodyStyle.webkitAnimation);
            }
          }
          return {
            history: !!($window.history && $window.history.pushState && !(android < 4) && !boxee),
            hasEvent: function(event) {
              if (event === 'input' && msie <= 11)
                return false;
              if (isUndefined(eventSupport[event])) {
                var divElm = document.createElement('div');
                eventSupport[event] = 'on' + event in divElm;
              }
              return eventSupport[event];
            },
            csp: csp(),
            vendorPrefix: vendorPrefix,
            transitions: transitions,
            animations: animations,
            android: android
          };
        }];
      }
      var $compileMinErr = minErr('$compile');
      function $TemplateRequestProvider() {
        this.$get = ['$templateCache', '$http', '$q', function($templateCache, $http, $q) {
          function handleRequestFn(tpl, ignoreRequestError) {
            handleRequestFn.totalPendingRequests++;
            var transformResponse = $http.defaults && $http.defaults.transformResponse;
            if (isArray(transformResponse)) {
              transformResponse = transformResponse.filter(function(transformer) {
                return transformer !== defaultHttpResponseTransform;
              });
            } else if (transformResponse === defaultHttpResponseTransform) {
              transformResponse = null;
            }
            var httpOptions = {
              cache: $templateCache,
              transformResponse: transformResponse
            };
            return $http.get(tpl, httpOptions)['finally'](function() {
              handleRequestFn.totalPendingRequests--;
            }).then(function(response) {
              $templateCache.put(tpl, response.data);
              return response.data;
            }, handleError);
            function handleError(resp) {
              if (!ignoreRequestError) {
                throw $compileMinErr('tpload', 'Failed to load template: {0} (HTTP status: {1} {2})', tpl, resp.status, resp.statusText);
              }
              return $q.reject(resp);
            }
          }
          handleRequestFn.totalPendingRequests = 0;
          return handleRequestFn;
        }];
      }
      function $$TestabilityProvider() {
        this.$get = ['$rootScope', '$browser', '$location', function($rootScope, $browser, $location) {
          var testability = {};
          testability.findBindings = function(element, expression, opt_exactMatch) {
            var bindings = element.getElementsByClassName('ng-binding');
            var matches = [];
            forEach(bindings, function(binding) {
              var dataBinding = angular.element(binding).data('$binding');
              if (dataBinding) {
                forEach(dataBinding, function(bindingName) {
                  if (opt_exactMatch) {
                    var matcher = new RegExp('(^|\\s)' + escapeForRegexp(expression) + '(\\s|\\||$)');
                    if (matcher.test(bindingName)) {
                      matches.push(binding);
                    }
                  } else {
                    if (bindingName.indexOf(expression) != -1) {
                      matches.push(binding);
                    }
                  }
                });
              }
            });
            return matches;
          };
          testability.findModels = function(element, expression, opt_exactMatch) {
            var prefixes = ['ng-', 'data-ng-', 'ng\\:'];
            for (var p = 0; p < prefixes.length; ++p) {
              var attributeEquals = opt_exactMatch ? '=' : '*=';
              var selector = '[' + prefixes[p] + 'model' + attributeEquals + '"' + expression + '"]';
              var elements = element.querySelectorAll(selector);
              if (elements.length) {
                return elements;
              }
            }
          };
          testability.getLocation = function() {
            return $location.url();
          };
          testability.setLocation = function(url) {
            if (url !== $location.url()) {
              $location.url(url);
              $rootScope.$digest();
            }
          };
          testability.whenStable = function(callback) {
            $browser.notifyWhenNoOutstandingRequests(callback);
          };
          return testability;
        }];
      }
      function $TimeoutProvider() {
        this.$get = ['$rootScope', '$browser', '$q', '$$q', '$exceptionHandler', function($rootScope, $browser, $q, $$q, $exceptionHandler) {
          var deferreds = {};
          function timeout(fn, delay, invokeApply) {
            if (!isFunction(fn)) {
              invokeApply = delay;
              delay = fn;
              fn = noop;
            }
            var args = sliceArgs(arguments, 3),
                skipApply = (isDefined(invokeApply) && !invokeApply),
                deferred = (skipApply ? $$q : $q).defer(),
                promise = deferred.promise,
                timeoutId;
            timeoutId = $browser.defer(function() {
              try {
                deferred.resolve(fn.apply(null, args));
              } catch (e) {
                deferred.reject(e);
                $exceptionHandler(e);
              } finally {
                delete deferreds[promise.$$timeoutId];
              }
              if (!skipApply)
                $rootScope.$apply();
            }, delay);
            promise.$$timeoutId = timeoutId;
            deferreds[timeoutId] = deferred;
            return promise;
          }
          timeout.cancel = function(promise) {
            if (promise && promise.$$timeoutId in deferreds) {
              deferreds[promise.$$timeoutId].reject('canceled');
              delete deferreds[promise.$$timeoutId];
              return $browser.defer.cancel(promise.$$timeoutId);
            }
            return false;
          };
          return timeout;
        }];
      }
      var urlParsingNode = document.createElement("a");
      var originUrl = urlResolve(window.location.href);
      function urlResolve(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
      }
      function urlIsSameOrigin(requestUrl) {
        var parsed = (isString(requestUrl)) ? urlResolve(requestUrl) : requestUrl;
        return (parsed.protocol === originUrl.protocol && parsed.host === originUrl.host);
      }
      function $WindowProvider() {
        this.$get = valueFn(window);
      }
      function $$CookieReader($document) {
        var rawDocument = $document[0] || {};
        var lastCookies = {};
        var lastCookieString = '';
        function safeDecodeURIComponent(str) {
          try {
            return decodeURIComponent(str);
          } catch (e) {
            return str;
          }
        }
        return function() {
          var cookieArray,
              cookie,
              i,
              index,
              name;
          var currentCookieString = rawDocument.cookie || '';
          if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
              cookie = cookieArray[i];
              index = cookie.indexOf('=');
              if (index > 0) {
                name = safeDecodeURIComponent(cookie.substring(0, index));
                if (lastCookies[name] === undefined) {
                  lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1));
                }
              }
            }
          }
          return lastCookies;
        };
      }
      $$CookieReader.$inject = ['$document'];
      function $$CookieReaderProvider() {
        this.$get = $$CookieReader;
      }
      $FilterProvider.$inject = ['$provide'];
      function $FilterProvider($provide) {
        var suffix = 'Filter';
        function register(name, factory) {
          if (isObject(name)) {
            var filters = {};
            forEach(name, function(filter, key) {
              filters[key] = register(key, filter);
            });
            return filters;
          } else {
            return $provide.factory(name + suffix, factory);
          }
        }
        this.register = register;
        this.$get = ['$injector', function($injector) {
          return function(name) {
            return $injector.get(name + suffix);
          };
        }];
        register('currency', currencyFilter);
        register('date', dateFilter);
        register('filter', filterFilter);
        register('json', jsonFilter);
        register('limitTo', limitToFilter);
        register('lowercase', lowercaseFilter);
        register('number', numberFilter);
        register('orderBy', orderByFilter);
        register('uppercase', uppercaseFilter);
      }
      function filterFilter() {
        return function(array, expression, comparator) {
          if (!isArrayLike(array)) {
            if (array == null) {
              return array;
            } else {
              throw minErr('filter')('notarray', 'Expected array but received: {0}', array);
            }
          }
          var expressionType = getTypeForFilter(expression);
          var predicateFn;
          var matchAgainstAnyProp;
          switch (expressionType) {
            case 'function':
              predicateFn = expression;
              break;
            case 'boolean':
            case 'null':
            case 'number':
            case 'string':
              matchAgainstAnyProp = true;
            case 'object':
              predicateFn = createPredicateFn(expression, comparator, matchAgainstAnyProp);
              break;
            default:
              return array;
          }
          return Array.prototype.filter.call(array, predicateFn);
        };
      }
      function hasCustomToString(obj) {
        return isFunction(obj.toString) && obj.toString !== Object.prototype.toString;
      }
      function createPredicateFn(expression, comparator, matchAgainstAnyProp) {
        var shouldMatchPrimitives = isObject(expression) && ('$' in expression);
        var predicateFn;
        if (comparator === true) {
          comparator = equals;
        } else if (!isFunction(comparator)) {
          comparator = function(actual, expected) {
            if (isUndefined(actual)) {
              return false;
            }
            if ((actual === null) || (expected === null)) {
              return actual === expected;
            }
            if (isObject(expected) || (isObject(actual) && !hasCustomToString(actual))) {
              return false;
            }
            actual = lowercase('' + actual);
            expected = lowercase('' + expected);
            return actual.indexOf(expected) !== -1;
          };
        }
        predicateFn = function(item) {
          if (shouldMatchPrimitives && !isObject(item)) {
            return deepCompare(item, expression.$, comparator, false);
          }
          return deepCompare(item, expression, comparator, matchAgainstAnyProp);
        };
        return predicateFn;
      }
      function deepCompare(actual, expected, comparator, matchAgainstAnyProp, dontMatchWholeObject) {
        var actualType = getTypeForFilter(actual);
        var expectedType = getTypeForFilter(expected);
        if ((expectedType === 'string') && (expected.charAt(0) === '!')) {
          return !deepCompare(actual, expected.substring(1), comparator, matchAgainstAnyProp);
        } else if (isArray(actual)) {
          return actual.some(function(item) {
            return deepCompare(item, expected, comparator, matchAgainstAnyProp);
          });
        }
        switch (actualType) {
          case 'object':
            var key;
            if (matchAgainstAnyProp) {
              for (key in actual) {
                if ((key.charAt(0) !== '$') && deepCompare(actual[key], expected, comparator, true)) {
                  return true;
                }
              }
              return dontMatchWholeObject ? false : deepCompare(actual, expected, comparator, false);
            } else if (expectedType === 'object') {
              for (key in expected) {
                var expectedVal = expected[key];
                if (isFunction(expectedVal) || isUndefined(expectedVal)) {
                  continue;
                }
                var matchAnyProperty = key === '$';
                var actualVal = matchAnyProperty ? actual : actual[key];
                if (!deepCompare(actualVal, expectedVal, comparator, matchAnyProperty, matchAnyProperty)) {
                  return false;
                }
              }
              return true;
            } else {
              return comparator(actual, expected);
            }
            break;
          case 'function':
            return false;
          default:
            return comparator(actual, expected);
        }
      }
      function getTypeForFilter(val) {
        return (val === null) ? 'null' : typeof val;
      }
      currencyFilter.$inject = ['$locale'];
      function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol, fractionSize) {
          if (isUndefined(currencySymbol)) {
            currencySymbol = formats.CURRENCY_SYM;
          }
          if (isUndefined(fractionSize)) {
            fractionSize = formats.PATTERNS[1].maxFrac;
          }
          return (amount == null) ? amount : formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize).replace(/\u00A4/g, currencySymbol);
        };
      }
      numberFilter.$inject = ['$locale'];
      function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
          return (number == null) ? number : formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
      }
      var DECIMAL_SEP = '.';
      function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (isObject(number))
          return '';
        var isNegative = number < 0;
        number = Math.abs(number);
        var isInfinity = number === Infinity;
        if (!isInfinity && !isFinite(number))
          return '';
        var numStr = number + '',
            formatedText = '',
            hasExponent = false,
            parts = [];
        if (isInfinity)
          formatedText = '\u221e';
        if (!isInfinity && numStr.indexOf('e') !== -1) {
          var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
          if (match && match[2] == '-' && match[3] > fractionSize + 1) {
            number = 0;
          } else {
            formatedText = numStr;
            hasExponent = true;
          }
        }
        if (!isInfinity && !hasExponent) {
          var fractionLen = (numStr.split(DECIMAL_SEP)[1] || '').length;
          if (isUndefined(fractionSize)) {
            fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
          }
          number = +(Math.round(+(number.toString() + 'e' + fractionSize)).toString() + 'e' + -fractionSize);
          var fraction = ('' + number).split(DECIMAL_SEP);
          var whole = fraction[0];
          fraction = fraction[1] || '';
          var i,
              pos = 0,
              lgroup = pattern.lgSize,
              group = pattern.gSize;
          if (whole.length >= (lgroup + group)) {
            pos = whole.length - lgroup;
            for (i = 0; i < pos; i++) {
              if ((pos - i) % group === 0 && i !== 0) {
                formatedText += groupSep;
              }
              formatedText += whole.charAt(i);
            }
          }
          for (i = pos; i < whole.length; i++) {
            if ((whole.length - i) % lgroup === 0 && i !== 0) {
              formatedText += groupSep;
            }
            formatedText += whole.charAt(i);
          }
          while (fraction.length < fractionSize) {
            fraction += '0';
          }
          if (fractionSize && fractionSize !== "0")
            formatedText += decimalSep + fraction.substr(0, fractionSize);
        } else {
          if (fractionSize > 0 && number < 1) {
            formatedText = number.toFixed(fractionSize);
            number = parseFloat(formatedText);
          }
        }
        if (number === 0) {
          isNegative = false;
        }
        parts.push(isNegative ? pattern.negPre : pattern.posPre, formatedText, isNegative ? pattern.negSuf : pattern.posSuf);
        return parts.join('');
      }
      function padNumber(num, digits, trim) {
        var neg = '';
        if (num < 0) {
          neg = '-';
          num = -num;
        }
        num = '' + num;
        while (num.length < digits)
          num = '0' + num;
        if (trim) {
          num = num.substr(num.length - digits);
        }
        return neg + num;
      }
      function dateGetter(name, size, offset, trim) {
        offset = offset || 0;
        return function(date) {
          var value = date['get' + name]();
          if (offset > 0 || value > -offset) {
            value += offset;
          }
          if (value === 0 && offset == -12)
            value = 12;
          return padNumber(value, size, trim);
        };
      }
      function dateStrGetter(name, shortForm) {
        return function(date, formats) {
          var value = date['get' + name]();
          var get = uppercase(shortForm ? ('SHORT' + name) : name);
          return formats[get][value];
        };
      }
      function timeZoneGetter(date, formats, offset) {
        var zone = -1 * offset;
        var paddedZone = (zone >= 0) ? "+" : "";
        paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
        return paddedZone;
      }
      function getFirstThursdayOfYear(year) {
        var dayOfWeekOnFirst = (new Date(year, 0, 1)).getDay();
        return new Date(year, 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
      }
      function getThursdayThisWeek(datetime) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (4 - datetime.getDay()));
      }
      function weekGetter(size) {
        return function(date) {
          var firstThurs = getFirstThursdayOfYear(date.getFullYear()),
              thisThurs = getThursdayThisWeek(date);
          var diff = +thisThurs - +firstThurs,
              result = 1 + Math.round(diff / 6.048e8);
          return padNumber(result, size);
        };
      }
      function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
      }
      function eraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERAS[0] : formats.ERAS[1];
      }
      function longEraGetter(date, formats) {
        return date.getFullYear() <= 0 ? formats.ERANAMES[0] : formats.ERANAMES[1];
      }
      var DATE_FORMATS = {
        yyyy: dateGetter('FullYear', 4),
        yy: dateGetter('FullYear', 2, 0, true),
        y: dateGetter('FullYear', 1),
        MMMM: dateStrGetter('Month'),
        MMM: dateStrGetter('Month', true),
        MM: dateGetter('Month', 2, 1),
        M: dateGetter('Month', 1, 1),
        dd: dateGetter('Date', 2),
        d: dateGetter('Date', 1),
        HH: dateGetter('Hours', 2),
        H: dateGetter('Hours', 1),
        hh: dateGetter('Hours', 2, -12),
        h: dateGetter('Hours', 1, -12),
        mm: dateGetter('Minutes', 2),
        m: dateGetter('Minutes', 1),
        ss: dateGetter('Seconds', 2),
        s: dateGetter('Seconds', 1),
        sss: dateGetter('Milliseconds', 3),
        EEEE: dateStrGetter('Day'),
        EEE: dateStrGetter('Day', true),
        a: ampmGetter,
        Z: timeZoneGetter,
        ww: weekGetter(2),
        w: weekGetter(1),
        G: eraGetter,
        GG: eraGetter,
        GGG: eraGetter,
        GGGG: longEraGetter
      };
      var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
          NUMBER_STRING = /^\-?\d+$/;
      dateFilter.$inject = ['$locale'];
      function dateFilter($locale) {
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        function jsonStringToDate(string) {
          var match;
          if (match = string.match(R_ISO8601_STR)) {
            var date = new Date(0),
                tzHour = 0,
                tzMin = 0,
                dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear,
                timeSetter = match[8] ? date.setUTCHours : date.setHours;
            if (match[9]) {
              tzHour = toInt(match[9] + match[10]);
              tzMin = toInt(match[9] + match[11]);
            }
            dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
            var h = toInt(match[4] || 0) - tzHour;
            var m = toInt(match[5] || 0) - tzMin;
            var s = toInt(match[6] || 0);
            var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
            timeSetter.call(date, h, m, s, ms);
            return date;
          }
          return string;
        }
        return function(date, format, timezone) {
          var text = '',
              parts = [],
              fn,
              match;
          format = format || 'mediumDate';
          format = $locale.DATETIME_FORMATS[format] || format;
          if (isString(date)) {
            date = NUMBER_STRING.test(date) ? toInt(date) : jsonStringToDate(date);
          }
          if (isNumber(date)) {
            date = new Date(date);
          }
          if (!isDate(date) || !isFinite(date.getTime())) {
            return date;
          }
          while (format) {
            match = DATE_FORMATS_SPLIT.exec(format);
            if (match) {
              parts = concat(parts, match, 1);
              format = parts.pop();
            } else {
              parts.push(format);
              format = null;
            }
          }
          var dateTimezoneOffset = date.getTimezoneOffset();
          if (timezone) {
            dateTimezoneOffset = timezoneToOffset(timezone, date.getTimezoneOffset());
            date = convertTimezoneToLocal(date, timezone, true);
          }
          forEach(parts, function(value) {
            fn = DATE_FORMATS[value];
            text += fn ? fn(date, $locale.DATETIME_FORMATS, dateTimezoneOffset) : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
          });
          return text;
        };
      }
      function jsonFilter() {
        return function(object, spacing) {
          if (isUndefined(spacing)) {
            spacing = 2;
          }
          return toJson(object, spacing);
        };
      }
      var lowercaseFilter = valueFn(lowercase);
      var uppercaseFilter = valueFn(uppercase);
      function limitToFilter() {
        return function(input, limit, begin) {
          if (Math.abs(Number(limit)) === Infinity) {
            limit = Number(limit);
          } else {
            limit = toInt(limit);
          }
          if (isNaN(limit))
            return input;
          if (isNumber(input))
            input = input.toString();
          if (!isArray(input) && !isString(input))
            return input;
          begin = (!begin || isNaN(begin)) ? 0 : toInt(begin);
          begin = (begin < 0 && begin >= -input.length) ? input.length + begin : begin;
          if (limit >= 0) {
            return input.slice(begin, begin + limit);
          } else {
            if (begin === 0) {
              return input.slice(limit, input.length);
            } else {
              return input.slice(Math.max(0, begin + limit), begin);
            }
          }
        };
      }
      orderByFilter.$inject = ['$parse'];
      function orderByFilter($parse) {
        return function(array, sortPredicate, reverseOrder) {
          if (!(isArrayLike(array)))
            return array;
          sortPredicate = isArray(sortPredicate) ? sortPredicate : [sortPredicate];
          if (sortPredicate.length === 0) {
            sortPredicate = ['+'];
          }
          sortPredicate = sortPredicate.map(function(predicate) {
            var descending = false,
                get = predicate || identity;
            if (isString(predicate)) {
              if ((predicate.charAt(0) == '+' || predicate.charAt(0) == '-')) {
                descending = predicate.charAt(0) == '-';
                predicate = predicate.substring(1);
              }
              if (predicate === '') {
                return reverseComparator(compare, descending);
              }
              get = $parse(predicate);
              if (get.constant) {
                var key = get();
                return reverseComparator(function(a, b) {
                  return compare(a[key], b[key]);
                }, descending);
              }
            }
            return reverseComparator(function(a, b) {
              return compare(get(a), get(b));
            }, descending);
          });
          return slice.call(array).sort(reverseComparator(comparator, reverseOrder));
          function comparator(o1, o2) {
            for (var i = 0; i < sortPredicate.length; i++) {
              var comp = sortPredicate[i](o1, o2);
              if (comp !== 0)
                return comp;
            }
            return 0;
          }
          function reverseComparator(comp, descending) {
            return descending ? function(a, b) {
              return comp(b, a);
            } : comp;
          }
          function isPrimitive(value) {
            switch (typeof value) {
              case 'number':
              case 'boolean':
              case 'string':
                return true;
              default:
                return false;
            }
          }
          function objectToString(value) {
            if (value === null)
              return 'null';
            if (typeof value.valueOf === 'function') {
              value = value.valueOf();
              if (isPrimitive(value))
                return value;
            }
            if (typeof value.toString === 'function') {
              value = value.toString();
              if (isPrimitive(value))
                return value;
            }
            return '';
          }
          function compare(v1, v2) {
            var t1 = typeof v1;
            var t2 = typeof v2;
            if (t1 === t2 && t1 === "object") {
              v1 = objectToString(v1);
              v2 = objectToString(v2);
            }
            if (t1 === t2) {
              if (t1 === "string") {
                v1 = v1.toLowerCase();
                v2 = v2.toLowerCase();
              }
              if (v1 === v2)
                return 0;
              return v1 < v2 ? -1 : 1;
            } else {
              return t1 < t2 ? -1 : 1;
            }
          }
        };
      }
      function ngDirective(directive) {
        if (isFunction(directive)) {
          directive = {link: directive};
        }
        directive.restrict = directive.restrict || 'AC';
        return valueFn(directive);
      }
      var htmlAnchorDirective = valueFn({
        restrict: 'E',
        compile: function(element, attr) {
          if (!attr.href && !attr.xlinkHref) {
            return function(scope, element) {
              if (element[0].nodeName.toLowerCase() !== 'a')
                return;
              var href = toString.call(element.prop('href')) === '[object SVGAnimatedString]' ? 'xlink:href' : 'href';
              element.on('click', function(event) {
                if (!element.attr(href)) {
                  event.preventDefault();
                }
              });
            };
          }
        }
      });
      var ngAttributeAliasDirectives = {};
      forEach(BOOLEAN_ATTR, function(propName, attrName) {
        if (propName == "multiple")
          return;
        function defaultLinkFn(scope, element, attr) {
          scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
            attr.$set(attrName, !!value);
          });
        }
        var normalized = directiveNormalize('ng-' + attrName);
        var linkFn = defaultLinkFn;
        if (propName === 'checked') {
          linkFn = function(scope, element, attr) {
            if (attr.ngModel !== attr[normalized]) {
              defaultLinkFn(scope, element, attr);
            }
          };
        }
        ngAttributeAliasDirectives[normalized] = function() {
          return {
            restrict: 'A',
            priority: 100,
            link: linkFn
          };
        };
      });
      forEach(ALIASED_ATTR, function(htmlAttr, ngAttr) {
        ngAttributeAliasDirectives[ngAttr] = function() {
          return {
            priority: 100,
            link: function(scope, element, attr) {
              if (ngAttr === "ngPattern" && attr.ngPattern.charAt(0) == "/") {
                var match = attr.ngPattern.match(REGEX_STRING_REGEXP);
                if (match) {
                  attr.$set("ngPattern", new RegExp(match[1], match[2]));
                  return;
                }
              }
              scope.$watch(attr[ngAttr], function ngAttrAliasWatchAction(value) {
                attr.$set(ngAttr, value);
              });
            }
          };
        };
      });
      forEach(['src', 'srcset', 'href'], function(attrName) {
        var normalized = directiveNormalize('ng-' + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
          return {
            priority: 99,
            link: function(scope, element, attr) {
              var propName = attrName,
                  name = attrName;
              if (attrName === 'href' && toString.call(element.prop('href')) === '[object SVGAnimatedString]') {
                name = 'xlinkHref';
                attr.$attr[name] = 'xlink:href';
                propName = null;
              }
              attr.$observe(normalized, function(value) {
                if (!value) {
                  if (attrName === 'href') {
                    attr.$set(name, null);
                  }
                  return;
                }
                attr.$set(name, value);
                if (msie && propName)
                  element.prop(propName, attr[name]);
              });
            }
          };
        };
      });
      var nullFormCtrl = {
        $addControl: noop,
        $$renameControl: nullFormRenameControl,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop,
        $setPristine: noop,
        $setSubmitted: noop
      },
          SUBMITTED_CLASS = 'ng-submitted';
      function nullFormRenameControl(control, name) {
        control.$name = name;
      }
      FormController.$inject = ['$element', '$attrs', '$scope', '$animate', '$interpolate'];
      function FormController(element, attrs, $scope, $animate, $interpolate) {
        var form = this,
            controls = [];
        var parentForm = form.$$parentForm = element.parent().controller('form') || nullFormCtrl;
        form.$error = {};
        form.$$success = {};
        form.$pending = undefined;
        form.$name = $interpolate(attrs.name || attrs.ngForm || '')($scope);
        form.$dirty = false;
        form.$pristine = true;
        form.$valid = true;
        form.$invalid = false;
        form.$submitted = false;
        parentForm.$addControl(form);
        form.$rollbackViewValue = function() {
          forEach(controls, function(control) {
            control.$rollbackViewValue();
          });
        };
        form.$commitViewValue = function() {
          forEach(controls, function(control) {
            control.$commitViewValue();
          });
        };
        form.$addControl = function(control) {
          assertNotHasOwnProperty(control.$name, 'input');
          controls.push(control);
          if (control.$name) {
            form[control.$name] = control;
          }
        };
        form.$$renameControl = function(control, newName) {
          var oldName = control.$name;
          if (form[oldName] === control) {
            delete form[oldName];
          }
          form[newName] = control;
          control.$name = newName;
        };
        form.$removeControl = function(control) {
          if (control.$name && form[control.$name] === control) {
            delete form[control.$name];
          }
          forEach(form.$pending, function(value, name) {
            form.$setValidity(name, null, control);
          });
          forEach(form.$error, function(value, name) {
            form.$setValidity(name, null, control);
          });
          forEach(form.$$success, function(value, name) {
            form.$setValidity(name, null, control);
          });
          arrayRemove(controls, control);
        };
        addSetValidityMethod({
          ctrl: this,
          $element: element,
          set: function(object, property, controller) {
            var list = object[property];
            if (!list) {
              object[property] = [controller];
            } else {
              var index = list.indexOf(controller);
              if (index === -1) {
                list.push(controller);
              }
            }
          },
          unset: function(object, property, controller) {
            var list = object[property];
            if (!list) {
              return;
            }
            arrayRemove(list, controller);
            if (list.length === 0) {
              delete object[property];
            }
          },
          parentForm: parentForm,
          $animate: $animate
        });
        form.$setDirty = function() {
          $animate.removeClass(element, PRISTINE_CLASS);
          $animate.addClass(element, DIRTY_CLASS);
          form.$dirty = true;
          form.$pristine = false;
          parentForm.$setDirty();
        };
        form.$setPristine = function() {
          $animate.setClass(element, PRISTINE_CLASS, DIRTY_CLASS + ' ' + SUBMITTED_CLASS);
          form.$dirty = false;
          form.$pristine = true;
          form.$submitted = false;
          forEach(controls, function(control) {
            control.$setPristine();
          });
        };
        form.$setUntouched = function() {
          forEach(controls, function(control) {
            control.$setUntouched();
          });
        };
        form.$setSubmitted = function() {
          $animate.addClass(element, SUBMITTED_CLASS);
          form.$submitted = true;
          parentForm.$setSubmitted();
        };
      }
      var formDirectiveFactory = function(isNgForm) {
        return ['$timeout', function($timeout) {
          var formDirective = {
            name: 'form',
            restrict: isNgForm ? 'EAC' : 'E',
            controller: FormController,
            compile: function ngFormCompile(formElement, attr) {
              formElement.addClass(PRISTINE_CLASS).addClass(VALID_CLASS);
              var nameAttr = attr.name ? 'name' : (isNgForm && attr.ngForm ? 'ngForm' : false);
              return {pre: function ngFormPreLink(scope, formElement, attr, controller) {
                  if (!('action' in attr)) {
                    var handleFormSubmission = function(event) {
                      scope.$apply(function() {
                        controller.$commitViewValue();
                        controller.$setSubmitted();
                      });
                      event.preventDefault();
                    };
                    addEventListenerFn(formElement[0], 'submit', handleFormSubmission);
                    formElement.on('$destroy', function() {
                      $timeout(function() {
                        removeEventListenerFn(formElement[0], 'submit', handleFormSubmission);
                      }, 0, false);
                    });
                  }
                  var parentFormCtrl = controller.$$parentForm;
                  if (nameAttr) {
                    setter(scope, controller.$name, controller, controller.$name);
                    attr.$observe(nameAttr, function(newValue) {
                      if (controller.$name === newValue)
                        return;
                      setter(scope, controller.$name, undefined, controller.$name);
                      parentFormCtrl.$$renameControl(controller, newValue);
                      setter(scope, controller.$name, controller, controller.$name);
                    });
                  }
                  formElement.on('$destroy', function() {
                    parentFormCtrl.$removeControl(controller);
                    if (nameAttr) {
                      setter(scope, attr[nameAttr], undefined, controller.$name);
                    }
                    extend(controller, nullFormCtrl);
                  });
                }};
            }
          };
          return formDirective;
        }];
      };
      var formDirective = formDirectiveFactory();
      var ngFormDirective = formDirectiveFactory(true);
      var ISO_DATE_REGEXP = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
      var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
      var DATE_REGEXP = /^(\d{4})-(\d{2})-(\d{2})$/;
      var DATETIMELOCAL_REGEXP = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var WEEK_REGEXP = /^(\d{4})-W(\d\d)$/;
      var MONTH_REGEXP = /^(\d{4})-(\d\d)$/;
      var TIME_REGEXP = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/;
      var inputType = {
        'text': textInputType,
        'date': createDateInputType('date', DATE_REGEXP, createDateParser(DATE_REGEXP, ['yyyy', 'MM', 'dd']), 'yyyy-MM-dd'),
        'datetime-local': createDateInputType('datetimelocal', DATETIMELOCAL_REGEXP, createDateParser(DATETIMELOCAL_REGEXP, ['yyyy', 'MM', 'dd', 'HH', 'mm', 'ss', 'sss']), 'yyyy-MM-ddTHH:mm:ss.sss'),
        'time': createDateInputType('time', TIME_REGEXP, createDateParser(TIME_REGEXP, ['HH', 'mm', 'ss', 'sss']), 'HH:mm:ss.sss'),
        'week': createDateInputType('week', WEEK_REGEXP, weekParser, 'yyyy-Www'),
        'month': createDateInputType('month', MONTH_REGEXP, createDateParser(MONTH_REGEXP, ['yyyy', 'MM']), 'yyyy-MM'),
        'number': numberInputType,
        'url': urlInputType,
        'email': emailInputType,
        'radio': radioInputType,
        'checkbox': checkboxInputType,
        'hidden': noop,
        'button': noop,
        'submit': noop,
        'reset': noop,
        'file': noop
      };
      function stringBasedInputType(ctrl) {
        ctrl.$formatters.push(function(value) {
          return ctrl.$isEmpty(value) ? value : value.toString();
        });
      }
      function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
      }
      function baseInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var type = lowercase(element[0].type);
        if (!$sniffer.android) {
          var composing = false;
          element.on('compositionstart', function(data) {
            composing = true;
          });
          element.on('compositionend', function() {
            composing = false;
            listener();
          });
        }
        var listener = function(ev) {
          if (timeout) {
            $browser.defer.cancel(timeout);
            timeout = null;
          }
          if (composing)
            return;
          var value = element.val(),
              event = ev && ev.type;
          if (type !== 'password' && (!attr.ngTrim || attr.ngTrim !== 'false')) {
            value = trim(value);
          }
          if (ctrl.$viewValue !== value || (value === '' && ctrl.$$hasNativeValidators)) {
            ctrl.$setViewValue(value, event);
          }
        };
        if ($sniffer.hasEvent('input')) {
          element.on('input', listener);
        } else {
          var timeout;
          var deferListener = function(ev, input, origValue) {
            if (!timeout) {
              timeout = $browser.defer(function() {
                timeout = null;
                if (!input || input.value !== origValue) {
                  listener(ev);
                }
              });
            }
          };
          element.on('keydown', function(event) {
            var key = event.keyCode;
            if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
              return;
            deferListener(event, this, this.value);
          });
          if ($sniffer.hasEvent('paste')) {
            element.on('paste cut', deferListener);
          }
        }
        element.on('change', listener);
        ctrl.$render = function() {
          element.val(ctrl.$isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue);
        };
      }
      function weekParser(isoWeek, existingDate) {
        if (isDate(isoWeek)) {
          return isoWeek;
        }
        if (isString(isoWeek)) {
          WEEK_REGEXP.lastIndex = 0;
          var parts = WEEK_REGEXP.exec(isoWeek);
          if (parts) {
            var year = +parts[1],
                week = +parts[2],
                hours = 0,
                minutes = 0,
                seconds = 0,
                milliseconds = 0,
                firstThurs = getFirstThursdayOfYear(year),
                addDays = (week - 1) * 7;
            if (existingDate) {
              hours = existingDate.getHours();
              minutes = existingDate.getMinutes();
              seconds = existingDate.getSeconds();
              milliseconds = existingDate.getMilliseconds();
            }
            return new Date(year, 0, firstThurs.getDate() + addDays, hours, minutes, seconds, milliseconds);
          }
        }
        return NaN;
      }
      function createDateParser(regexp, mapping) {
        return function(iso, date) {
          var parts,
              map;
          if (isDate(iso)) {
            return iso;
          }
          if (isString(iso)) {
            if (iso.charAt(0) == '"' && iso.charAt(iso.length - 1) == '"') {
              iso = iso.substring(1, iso.length - 1);
            }
            if (ISO_DATE_REGEXP.test(iso)) {
              return new Date(iso);
            }
            regexp.lastIndex = 0;
            parts = regexp.exec(iso);
            if (parts) {
              parts.shift();
              if (date) {
                map = {
                  yyyy: date.getFullYear(),
                  MM: date.getMonth() + 1,
                  dd: date.getDate(),
                  HH: date.getHours(),
                  mm: date.getMinutes(),
                  ss: date.getSeconds(),
                  sss: date.getMilliseconds() / 1000
                };
              } else {
                map = {
                  yyyy: 1970,
                  MM: 1,
                  dd: 1,
                  HH: 0,
                  mm: 0,
                  ss: 0,
                  sss: 0
                };
              }
              forEach(parts, function(part, index) {
                if (index < mapping.length) {
                  map[mapping[index]] = +part;
                }
              });
              return new Date(map.yyyy, map.MM - 1, map.dd, map.HH, map.mm, map.ss || 0, map.sss * 1000 || 0);
            }
          }
          return NaN;
        };
      }
      function createDateInputType(type, regexp, parseDate, format) {
        return function dynamicDateInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter) {
          badInputChecker(scope, element, attr, ctrl);
          baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
          var timezone = ctrl && ctrl.$options && ctrl.$options.timezone;
          var previousDate;
          ctrl.$$parserName = type;
          ctrl.$parsers.push(function(value) {
            if (ctrl.$isEmpty(value))
              return null;
            if (regexp.test(value)) {
              var parsedDate = parseDate(value, previousDate);
              if (timezone) {
                parsedDate = convertTimezoneToLocal(parsedDate, timezone);
              }
              return parsedDate;
            }
            return undefined;
          });
          ctrl.$formatters.push(function(value) {
            if (value && !isDate(value)) {
              throw $ngModelMinErr('datefmt', 'Expected `{0}` to be a date', value);
            }
            if (isValidDate(value)) {
              previousDate = value;
              if (previousDate && timezone) {
                previousDate = convertTimezoneToLocal(previousDate, timezone, true);
              }
              return $filter('date')(value, format, timezone);
            } else {
              previousDate = null;
              return '';
            }
          });
          if (isDefined(attr.min) || attr.ngMin) {
            var minVal;
            ctrl.$validators.min = function(value) {
              return !isValidDate(value) || isUndefined(minVal) || parseDate(value) >= minVal;
            };
            attr.$observe('min', function(val) {
              minVal = parseObservedDateValue(val);
              ctrl.$validate();
            });
          }
          if (isDefined(attr.max) || attr.ngMax) {
            var maxVal;
            ctrl.$validators.max = function(value) {
              return !isValidDate(value) || isUndefined(maxVal) || parseDate(value) <= maxVal;
            };
            attr.$observe('max', function(val) {
              maxVal = parseObservedDateValue(val);
              ctrl.$validate();
            });
          }
          function isValidDate(value) {
            return value && !(value.getTime && value.getTime() !== value.getTime());
          }
          function parseObservedDateValue(val) {
            return isDefined(val) ? (isDate(val) ? val : parseDate(val)) : undefined;
          }
        };
      }
      function badInputChecker(scope, element, attr, ctrl) {
        var node = element[0];
        var nativeValidation = ctrl.$$hasNativeValidators = isObject(node.validity);
        if (nativeValidation) {
          ctrl.$parsers.push(function(value) {
            var validity = element.prop(VALIDITY_STATE_PROPERTY) || {};
            return validity.badInput && !validity.typeMismatch ? undefined : value;
          });
        }
      }
      function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        badInputChecker(scope, element, attr, ctrl);
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        ctrl.$$parserName = 'number';
        ctrl.$parsers.push(function(value) {
          if (ctrl.$isEmpty(value))
            return null;
          if (NUMBER_REGEXP.test(value))
            return parseFloat(value);
          return undefined;
        });
        ctrl.$formatters.push(function(value) {
          if (!ctrl.$isEmpty(value)) {
            if (!isNumber(value)) {
              throw $ngModelMinErr('numfmt', 'Expected `{0}` to be a number', value);
            }
            value = value.toString();
          }
          return value;
        });
        if (isDefined(attr.min) || attr.ngMin) {
          var minVal;
          ctrl.$validators.min = function(value) {
            return ctrl.$isEmpty(value) || isUndefined(minVal) || value >= minVal;
          };
          attr.$observe('min', function(val) {
            if (isDefined(val) && !isNumber(val)) {
              val = parseFloat(val, 10);
            }
            minVal = isNumber(val) && !isNaN(val) ? val : undefined;
            ctrl.$validate();
          });
        }
        if (isDefined(attr.max) || attr.ngMax) {
          var maxVal;
          ctrl.$validators.max = function(value) {
            return ctrl.$isEmpty(value) || isUndefined(maxVal) || value <= maxVal;
          };
          attr.$observe('max', function(val) {
            if (isDefined(val) && !isNumber(val)) {
              val = parseFloat(val, 10);
            }
            maxVal = isNumber(val) && !isNaN(val) ? val : undefined;
            ctrl.$validate();
          });
        }
      }
      function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
        ctrl.$$parserName = 'url';
        ctrl.$validators.url = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          return ctrl.$isEmpty(value) || URL_REGEXP.test(value);
        };
      }
      function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        baseInputType(scope, element, attr, ctrl, $sniffer, $browser);
        stringBasedInputType(ctrl);
        ctrl.$$parserName = 'email';
        ctrl.$validators.email = function(modelValue, viewValue) {
          var value = modelValue || viewValue;
          return ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value);
        };
      }
      function radioInputType(scope, element, attr, ctrl) {
        if (isUndefined(attr.name)) {
          element.attr('name', nextUid());
        }
        var listener = function(ev) {
          if (element[0].checked) {
            ctrl.$setViewValue(attr.value, ev && ev.type);
          }
        };
        element.on('click', listener);
        ctrl.$render = function() {
          var value = attr.value;
          element[0].checked = (value == ctrl.$viewValue);
        };
        attr.$observe('value', ctrl.$render);
      }
      function parseConstantExpr($parse, context, name, expression, fallback) {
        var parseFn;
        if (isDefined(expression)) {
          parseFn = $parse(expression);
          if (!parseFn.constant) {
            throw minErr('ngModel')('constexpr', 'Expected constant expression for `{0}`, but saw ' + '`{1}`.', name, expression);
          }
          return parseFn(context);
        }
        return fallback;
      }
      function checkboxInputType(scope, element, attr, ctrl, $sniffer, $browser, $filter, $parse) {
        var trueValue = parseConstantExpr($parse, scope, 'ngTrueValue', attr.ngTrueValue, true);
        var falseValue = parseConstantExpr($parse, scope, 'ngFalseValue', attr.ngFalseValue, false);
        var listener = function(ev) {
          ctrl.$setViewValue(element[0].checked, ev && ev.type);
        };
        element.on('click', listener);
        ctrl.$render = function() {
          element[0].checked = ctrl.$viewValue;
        };
        ctrl.$isEmpty = function(value) {
          return value === false;
        };
        ctrl.$formatters.push(function(value) {
          return equals(value, trueValue);
        });
        ctrl.$parsers.push(function(value) {
          return value ? trueValue : falseValue;
        });
      }
      var inputDirective = ['$browser', '$sniffer', '$filter', '$parse', function($browser, $sniffer, $filter, $parse) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: {pre: function(scope, element, attr, ctrls) {
              if (ctrls[0]) {
                (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrls[0], $sniffer, $browser, $filter, $parse);
              }
            }}
        };
      }];
      var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
      var ngValueDirective = function() {
        return {
          restrict: 'A',
          priority: 100,
          compile: function(tpl, tplAttr) {
            if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
              return function ngValueConstantLink(scope, elm, attr) {
                attr.$set('value', scope.$eval(attr.ngValue));
              };
            } else {
              return function ngValueLink(scope, elm, attr) {
                scope.$watch(attr.ngValue, function valueWatchAction(value) {
                  attr.$set('value', value);
                });
              };
            }
          }
        };
      };
      var ngBindDirective = ['$compile', function($compile) {
        return {
          restrict: 'AC',
          compile: function ngBindCompile(templateElement) {
            $compile.$$addBindingClass(templateElement);
            return function ngBindLink(scope, element, attr) {
              $compile.$$addBindingInfo(element, attr.ngBind);
              element = element[0];
              scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
                element.textContent = value === undefined ? '' : value;
              });
            };
          }
        };
      }];
      var ngBindTemplateDirective = ['$interpolate', '$compile', function($interpolate, $compile) {
        return {compile: function ngBindTemplateCompile(templateElement) {
            $compile.$$addBindingClass(templateElement);
            return function ngBindTemplateLink(scope, element, attr) {
              var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
              $compile.$$addBindingInfo(element, interpolateFn.expressions);
              element = element[0];
              attr.$observe('ngBindTemplate', function(value) {
                element.textContent = value === undefined ? '' : value;
              });
            };
          }};
      }];
      var ngBindHtmlDirective = ['$sce', '$parse', '$compile', function($sce, $parse, $compile) {
        return {
          restrict: 'A',
          compile: function ngBindHtmlCompile(tElement, tAttrs) {
            var ngBindHtmlGetter = $parse(tAttrs.ngBindHtml);
            var ngBindHtmlWatch = $parse(tAttrs.ngBindHtml, function getStringValue(value) {
              return (value || '').toString();
            });
            $compile.$$addBindingClass(tElement);
            return function ngBindHtmlLink(scope, element, attr) {
              $compile.$$addBindingInfo(element, attr.ngBindHtml);
              scope.$watch(ngBindHtmlWatch, function ngBindHtmlWatchAction() {
                element.html($sce.getTrustedHtml(ngBindHtmlGetter(scope)) || '');
              });
            };
          }
        };
      }];
      var ngChangeDirective = valueFn({
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ctrl) {
          ctrl.$viewChangeListeners.push(function() {
            scope.$eval(attr.ngChange);
          });
        }
      });
      function classDirective(name, selector) {
        name = 'ngClass' + name;
        return ['$animate', function($animate) {
          return {
            restrict: 'AC',
            link: function(scope, element, attr) {
              var oldVal;
              scope.$watch(attr[name], ngClassWatchAction, true);
              attr.$observe('class', function(value) {
                ngClassWatchAction(scope.$eval(attr[name]));
              });
              if (name !== 'ngClass') {
                scope.$watch('$index', function($index, old$index) {
                  var mod = $index & 1;
                  if (mod !== (old$index & 1)) {
                    var classes = arrayClasses(scope.$eval(attr[name]));
                    mod === selector ? addClasses(classes) : removeClasses(classes);
                  }
                });
              }
              function addClasses(classes) {
                var newClasses = digestClassCounts(classes, 1);
                attr.$addClass(newClasses);
              }
              function removeClasses(classes) {
                var newClasses = digestClassCounts(classes, -1);
                attr.$removeClass(newClasses);
              }
              function digestClassCounts(classes, count) {
                var classCounts = element.data('$classCounts') || createMap();
                var classesToUpdate = [];
                forEach(classes, function(className) {
                  if (count > 0 || classCounts[className]) {
                    classCounts[className] = (classCounts[className] || 0) + count;
                    if (classCounts[className] === +(count > 0)) {
                      classesToUpdate.push(className);
                    }
                  }
                });
                element.data('$classCounts', classCounts);
                return classesToUpdate.join(' ');
              }
              function updateClasses(oldClasses, newClasses) {
                var toAdd = arrayDifference(newClasses, oldClasses);
                var toRemove = arrayDifference(oldClasses, newClasses);
                toAdd = digestClassCounts(toAdd, 1);
                toRemove = digestClassCounts(toRemove, -1);
                if (toAdd && toAdd.length) {
                  $animate.addClass(element, toAdd);
                }
                if (toRemove && toRemove.length) {
                  $animate.removeClass(element, toRemove);
                }
              }
              function ngClassWatchAction(newVal) {
                if (selector === true || scope.$index % 2 === selector) {
                  var newClasses = arrayClasses(newVal || []);
                  if (!oldVal) {
                    addClasses(newClasses);
                  } else if (!equals(newVal, oldVal)) {
                    var oldClasses = arrayClasses(oldVal);
                    updateClasses(oldClasses, newClasses);
                  }
                }
                oldVal = shallowCopy(newVal);
              }
            }
          };
          function arrayDifference(tokens1, tokens2) {
            var values = [];
            outer: for (var i = 0; i < tokens1.length; i++) {
              var token = tokens1[i];
              for (var j = 0; j < tokens2.length; j++) {
                if (token == tokens2[j])
                  continue outer;
              }
              values.push(token);
            }
            return values;
          }
          function arrayClasses(classVal) {
            var classes = [];
            if (isArray(classVal)) {
              forEach(classVal, function(v) {
                classes = classes.concat(arrayClasses(v));
              });
              return classes;
            } else if (isString(classVal)) {
              return classVal.split(' ');
            } else if (isObject(classVal)) {
              forEach(classVal, function(v, k) {
                if (v) {
                  classes = classes.concat(k.split(' '));
                }
              });
              return classes;
            }
            return classVal;
          }
        }];
      }
      var ngClassDirective = classDirective('', true);
      var ngClassOddDirective = classDirective('Odd', 0);
      var ngClassEvenDirective = classDirective('Even', 1);
      var ngCloakDirective = ngDirective({compile: function(element, attr) {
          attr.$set('ngCloak', undefined);
          element.removeClass('ng-cloak');
        }});
      var ngControllerDirective = [function() {
        return {
          restrict: 'A',
          scope: true,
          controller: '@',
          priority: 500
        };
      }];
      var ngEventDirectives = {};
      var forceAsyncEvents = {
        'blur': true,
        'focus': true
      };
      forEach('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function(eventName) {
        var directiveName = directiveNormalize('ng-' + eventName);
        ngEventDirectives[directiveName] = ['$parse', '$rootScope', function($parse, $rootScope) {
          return {
            restrict: 'A',
            compile: function($element, attr) {
              var fn = $parse(attr[directiveName], null, true);
              return function ngEventHandler(scope, element) {
                element.on(eventName, function(event) {
                  var callback = function() {
                    fn(scope, {$event: event});
                  };
                  if (forceAsyncEvents[eventName] && $rootScope.$$phase) {
                    scope.$evalAsync(callback);
                  } else {
                    scope.$apply(callback);
                  }
                });
              };
            }
          };
        }];
      });
      var ngIfDirective = ['$animate', function($animate) {
        return {
          multiElement: true,
          transclude: 'element',
          priority: 600,
          terminal: true,
          restrict: 'A',
          $$tlb: true,
          link: function($scope, $element, $attr, ctrl, $transclude) {
            var block,
                childScope,
                previousElements;
            $scope.$watch($attr.ngIf, function ngIfWatchAction(value) {
              if (value) {
                if (!childScope) {
                  $transclude(function(clone, newScope) {
                    childScope = newScope;
                    clone[clone.length++] = document.createComment(' end ngIf: ' + $attr.ngIf + ' ');
                    block = {clone: clone};
                    $animate.enter(clone, $element.parent(), $element);
                  });
                }
              } else {
                if (previousElements) {
                  previousElements.remove();
                  previousElements = null;
                }
                if (childScope) {
                  childScope.$destroy();
                  childScope = null;
                }
                if (block) {
                  previousElements = getBlockNodes(block.clone);
                  $animate.leave(previousElements).then(function() {
                    previousElements = null;
                  });
                  block = null;
                }
              }
            });
          }
        };
      }];
      var ngIncludeDirective = ['$templateRequest', '$anchorScroll', '$animate', '$sce', function($templateRequest, $anchorScroll, $animate, $sce) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: true,
          transclude: 'element',
          controller: angular.noop,
          compile: function(element, attr) {
            var srcExp = attr.ngInclude || attr.src,
                onloadExp = attr.onload || '',
                autoScrollExp = attr.autoscroll;
            return function(scope, $element, $attr, ctrl, $transclude) {
              var changeCounter = 0,
                  currentScope,
                  previousElement,
                  currentElement;
              var cleanupLastIncludeContent = function() {
                if (previousElement) {
                  previousElement.remove();
                  previousElement = null;
                }
                if (currentScope) {
                  currentScope.$destroy();
                  currentScope = null;
                }
                if (currentElement) {
                  $animate.leave(currentElement).then(function() {
                    previousElement = null;
                  });
                  previousElement = currentElement;
                  currentElement = null;
                }
              };
              scope.$watch($sce.parseAsResourceUrl(srcExp), function ngIncludeWatchAction(src) {
                var afterAnimation = function() {
                  if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                    $anchorScroll();
                  }
                };
                var thisChangeId = ++changeCounter;
                if (src) {
                  $templateRequest(src, true).then(function(response) {
                    if (thisChangeId !== changeCounter)
                      return;
                    var newScope = scope.$new();
                    ctrl.template = response;
                    var clone = $transclude(newScope, function(clone) {
                      cleanupLastIncludeContent();
                      $animate.enter(clone, null, $element).then(afterAnimation);
                    });
                    currentScope = newScope;
                    currentElement = clone;
                    currentScope.$emit('$includeContentLoaded', src);
                    scope.$eval(onloadExp);
                  }, function() {
                    if (thisChangeId === changeCounter) {
                      cleanupLastIncludeContent();
                      scope.$emit('$includeContentError', src);
                    }
                  });
                  scope.$emit('$includeContentRequested', src);
                } else {
                  cleanupLastIncludeContent();
                  ctrl.template = null;
                }
              });
            };
          }
        };
      }];
      var ngIncludeFillContentDirective = ['$compile', function($compile) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function(scope, $element, $attr, ctrl) {
            if (/SVG/.test($element[0].toString())) {
              $element.empty();
              $compile(jqLiteBuildFragment(ctrl.template, document).childNodes)(scope, function namespaceAdaptedClone(clone) {
                $element.append(clone);
              }, {futureParentElement: $element});
              return;
            }
            $element.html(ctrl.template);
            $compile($element.contents())(scope);
          }
        };
      }];
      var ngInitDirective = ngDirective({
        priority: 450,
        compile: function() {
          return {pre: function(scope, element, attrs) {
              scope.$eval(attrs.ngInit);
            }};
        }
      });
      var ngListDirective = function() {
        return {
          restrict: 'A',
          priority: 100,
          require: 'ngModel',
          link: function(scope, element, attr, ctrl) {
            var ngList = element.attr(attr.$attr.ngList) || ', ';
            var trimValues = attr.ngTrim !== 'false';
            var separator = trimValues ? trim(ngList) : ngList;
            var parse = function(viewValue) {
              if (isUndefined(viewValue))
                return;
              var list = [];
              if (viewValue) {
                forEach(viewValue.split(separator), function(value) {
                  if (value)
                    list.push(trimValues ? trim(value) : value);
                });
              }
              return list;
            };
            ctrl.$parsers.push(parse);
            ctrl.$formatters.push(function(value) {
              if (isArray(value)) {
                return value.join(ngList);
              }
              return undefined;
            });
            ctrl.$isEmpty = function(value) {
              return !value || !value.length;
            };
          }
        };
      };
      var VALID_CLASS = 'ng-valid',
          INVALID_CLASS = 'ng-invalid',
          PRISTINE_CLASS = 'ng-pristine',
          DIRTY_CLASS = 'ng-dirty',
          UNTOUCHED_CLASS = 'ng-untouched',
          TOUCHED_CLASS = 'ng-touched',
          PENDING_CLASS = 'ng-pending';
      var $ngModelMinErr = new minErr('ngModel');
      var NgModelController = ['$scope', '$exceptionHandler', '$attrs', '$element', '$parse', '$animate', '$timeout', '$rootScope', '$q', '$interpolate', function($scope, $exceptionHandler, $attr, $element, $parse, $animate, $timeout, $rootScope, $q, $interpolate) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$$rawModelValue = undefined;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = true;
        this.$touched = false;
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$error = {};
        this.$$success = {};
        this.$pending = undefined;
        this.$name = $interpolate($attr.name || '', false)($scope);
        var parsedNgModel = $parse($attr.ngModel),
            parsedNgModelAssign = parsedNgModel.assign,
            ngModelGet = parsedNgModel,
            ngModelSet = parsedNgModelAssign,
            pendingDebounce = null,
            parserValid,
            ctrl = this;
        this.$$setOptions = function(options) {
          ctrl.$options = options;
          if (options && options.getterSetter) {
            var invokeModelGetter = $parse($attr.ngModel + '()'),
                invokeModelSetter = $parse($attr.ngModel + '($$$p)');
            ngModelGet = function($scope) {
              var modelValue = parsedNgModel($scope);
              if (isFunction(modelValue)) {
                modelValue = invokeModelGetter($scope);
              }
              return modelValue;
            };
            ngModelSet = function($scope, newValue) {
              if (isFunction(parsedNgModel($scope))) {
                invokeModelSetter($scope, {$$$p: ctrl.$modelValue});
              } else {
                parsedNgModelAssign($scope, ctrl.$modelValue);
              }
            };
          } else if (!parsedNgModel.assign) {
            throw $ngModelMinErr('nonassign', "Expression '{0}' is non-assignable. Element: {1}", $attr.ngModel, startingTag($element));
          }
        };
        this.$render = noop;
        this.$isEmpty = function(value) {
          return isUndefined(value) || value === '' || value === null || value !== value;
        };
        var parentForm = $element.inheritedData('$formController') || nullFormCtrl,
            currentValidationRunId = 0;
        addSetValidityMethod({
          ctrl: this,
          $element: $element,
          set: function(object, property) {
            object[property] = true;
          },
          unset: function(object, property) {
            delete object[property];
          },
          parentForm: parentForm,
          $animate: $animate
        });
        this.$setPristine = function() {
          ctrl.$dirty = false;
          ctrl.$pristine = true;
          $animate.removeClass($element, DIRTY_CLASS);
          $animate.addClass($element, PRISTINE_CLASS);
        };
        this.$setDirty = function() {
          ctrl.$dirty = true;
          ctrl.$pristine = false;
          $animate.removeClass($element, PRISTINE_CLASS);
          $animate.addClass($element, DIRTY_CLASS);
          parentForm.$setDirty();
        };
        this.$setUntouched = function() {
          ctrl.$touched = false;
          ctrl.$untouched = true;
          $animate.setClass($element, UNTOUCHED_CLASS, TOUCHED_CLASS);
        };
        this.$setTouched = function() {
          ctrl.$touched = true;
          ctrl.$untouched = false;
          $animate.setClass($element, TOUCHED_CLASS, UNTOUCHED_CLASS);
        };
        this.$rollbackViewValue = function() {
          $timeout.cancel(pendingDebounce);
          ctrl.$viewValue = ctrl.$$lastCommittedViewValue;
          ctrl.$render();
        };
        this.$validate = function() {
          if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
            return;
          }
          var viewValue = ctrl.$$lastCommittedViewValue;
          var modelValue = ctrl.$$rawModelValue;
          var prevValid = ctrl.$valid;
          var prevModelValue = ctrl.$modelValue;
          var allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
          ctrl.$$runValidators(modelValue, viewValue, function(allValid) {
            if (!allowInvalid && prevValid !== allValid) {
              ctrl.$modelValue = allValid ? modelValue : undefined;
              if (ctrl.$modelValue !== prevModelValue) {
                ctrl.$$writeModelToScope();
              }
            }
          });
        };
        this.$$runValidators = function(modelValue, viewValue, doneCallback) {
          currentValidationRunId++;
          var localValidationRunId = currentValidationRunId;
          if (!processParseErrors()) {
            validationDone(false);
            return;
          }
          if (!processSyncValidators()) {
            validationDone(false);
            return;
          }
          processAsyncValidators();
          function processParseErrors() {
            var errorKey = ctrl.$$parserName || 'parse';
            if (parserValid === undefined) {
              setValidity(errorKey, null);
            } else {
              if (!parserValid) {
                forEach(ctrl.$validators, function(v, name) {
                  setValidity(name, null);
                });
                forEach(ctrl.$asyncValidators, function(v, name) {
                  setValidity(name, null);
                });
              }
              setValidity(errorKey, parserValid);
              return parserValid;
            }
            return true;
          }
          function processSyncValidators() {
            var syncValidatorsValid = true;
            forEach(ctrl.$validators, function(validator, name) {
              var result = validator(modelValue, viewValue);
              syncValidatorsValid = syncValidatorsValid && result;
              setValidity(name, result);
            });
            if (!syncValidatorsValid) {
              forEach(ctrl.$asyncValidators, function(v, name) {
                setValidity(name, null);
              });
              return false;
            }
            return true;
          }
          function processAsyncValidators() {
            var validatorPromises = [];
            var allValid = true;
            forEach(ctrl.$asyncValidators, function(validator, name) {
              var promise = validator(modelValue, viewValue);
              if (!isPromiseLike(promise)) {
                throw $ngModelMinErr("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", promise);
              }
              setValidity(name, undefined);
              validatorPromises.push(promise.then(function() {
                setValidity(name, true);
              }, function(error) {
                allValid = false;
                setValidity(name, false);
              }));
            });
            if (!validatorPromises.length) {
              validationDone(true);
            } else {
              $q.all(validatorPromises).then(function() {
                validationDone(allValid);
              }, noop);
            }
          }
          function setValidity(name, isValid) {
            if (localValidationRunId === currentValidationRunId) {
              ctrl.$setValidity(name, isValid);
            }
          }
          function validationDone(allValid) {
            if (localValidationRunId === currentValidationRunId) {
              doneCallback(allValid);
            }
          }
        };
        this.$commitViewValue = function() {
          var viewValue = ctrl.$viewValue;
          $timeout.cancel(pendingDebounce);
          if (ctrl.$$lastCommittedViewValue === viewValue && (viewValue !== '' || !ctrl.$$hasNativeValidators)) {
            return;
          }
          ctrl.$$lastCommittedViewValue = viewValue;
          if (ctrl.$pristine) {
            this.$setDirty();
          }
          this.$$parseAndValidate();
        };
        this.$$parseAndValidate = function() {
          var viewValue = ctrl.$$lastCommittedViewValue;
          var modelValue = viewValue;
          parserValid = isUndefined(modelValue) ? undefined : true;
          if (parserValid) {
            for (var i = 0; i < ctrl.$parsers.length; i++) {
              modelValue = ctrl.$parsers[i](modelValue);
              if (isUndefined(modelValue)) {
                parserValid = false;
                break;
              }
            }
          }
          if (isNumber(ctrl.$modelValue) && isNaN(ctrl.$modelValue)) {
            ctrl.$modelValue = ngModelGet($scope);
          }
          var prevModelValue = ctrl.$modelValue;
          var allowInvalid = ctrl.$options && ctrl.$options.allowInvalid;
          ctrl.$$rawModelValue = modelValue;
          if (allowInvalid) {
            ctrl.$modelValue = modelValue;
            writeToModelIfNeeded();
          }
          ctrl.$$runValidators(modelValue, ctrl.$$lastCommittedViewValue, function(allValid) {
            if (!allowInvalid) {
              ctrl.$modelValue = allValid ? modelValue : undefined;
              writeToModelIfNeeded();
            }
          });
          function writeToModelIfNeeded() {
            if (ctrl.$modelValue !== prevModelValue) {
              ctrl.$$writeModelToScope();
            }
          }
        };
        this.$$writeModelToScope = function() {
          ngModelSet($scope, ctrl.$modelValue);
          forEach(ctrl.$viewChangeListeners, function(listener) {
            try {
              listener();
            } catch (e) {
              $exceptionHandler(e);
            }
          });
        };
        this.$setViewValue = function(value, trigger) {
          ctrl.$viewValue = value;
          if (!ctrl.$options || ctrl.$options.updateOnDefault) {
            ctrl.$$debounceViewValueCommit(trigger);
          }
        };
        this.$$debounceViewValueCommit = function(trigger) {
          var debounceDelay = 0,
              options = ctrl.$options,
              debounce;
          if (options && isDefined(options.debounce)) {
            debounce = options.debounce;
            if (isNumber(debounce)) {
              debounceDelay = debounce;
            } else if (isNumber(debounce[trigger])) {
              debounceDelay = debounce[trigger];
            } else if (isNumber(debounce['default'])) {
              debounceDelay = debounce['default'];
            }
          }
          $timeout.cancel(pendingDebounce);
          if (debounceDelay) {
            pendingDebounce = $timeout(function() {
              ctrl.$commitViewValue();
            }, debounceDelay);
          } else if ($rootScope.$$phase) {
            ctrl.$commitViewValue();
          } else {
            $scope.$apply(function() {
              ctrl.$commitViewValue();
            });
          }
        };
        $scope.$watch(function ngModelWatch() {
          var modelValue = ngModelGet($scope);
          if (modelValue !== ctrl.$modelValue && (ctrl.$modelValue === ctrl.$modelValue || modelValue === modelValue)) {
            ctrl.$modelValue = ctrl.$$rawModelValue = modelValue;
            parserValid = undefined;
            var formatters = ctrl.$formatters,
                idx = formatters.length;
            var viewValue = modelValue;
            while (idx--) {
              viewValue = formatters[idx](viewValue);
            }
            if (ctrl.$viewValue !== viewValue) {
              ctrl.$viewValue = ctrl.$$lastCommittedViewValue = viewValue;
              ctrl.$render();
              ctrl.$$runValidators(modelValue, viewValue, noop);
            }
          }
          return modelValue;
        });
      }];
      var ngModelDirective = ['$rootScope', function($rootScope) {
        return {
          restrict: 'A',
          require: ['ngModel', '^?form', '^?ngModelOptions'],
          controller: NgModelController,
          priority: 1,
          compile: function ngModelCompile(element) {
            element.addClass(PRISTINE_CLASS).addClass(UNTOUCHED_CLASS).addClass(VALID_CLASS);
            return {
              pre: function ngModelPreLink(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0],
                    formCtrl = ctrls[1] || nullFormCtrl;
                modelCtrl.$$setOptions(ctrls[2] && ctrls[2].$options);
                formCtrl.$addControl(modelCtrl);
                attr.$observe('name', function(newValue) {
                  if (modelCtrl.$name !== newValue) {
                    formCtrl.$$renameControl(modelCtrl, newValue);
                  }
                });
                scope.$on('$destroy', function() {
                  formCtrl.$removeControl(modelCtrl);
                });
              },
              post: function ngModelPostLink(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0];
                if (modelCtrl.$options && modelCtrl.$options.updateOn) {
                  element.on(modelCtrl.$options.updateOn, function(ev) {
                    modelCtrl.$$debounceViewValueCommit(ev && ev.type);
                  });
                }
                element.on('blur', function(ev) {
                  if (modelCtrl.$touched)
                    return;
                  if ($rootScope.$$phase) {
                    scope.$evalAsync(modelCtrl.$setTouched);
                  } else {
                    scope.$apply(modelCtrl.$setTouched);
                  }
                });
              }
            };
          }
        };
      }];
      var DEFAULT_REGEXP = /(\s+|^)default(\s+|$)/;
      var ngModelOptionsDirective = function() {
        return {
          restrict: 'A',
          controller: ['$scope', '$attrs', function($scope, $attrs) {
            var that = this;
            this.$options = copy($scope.$eval($attrs.ngModelOptions));
            if (this.$options.updateOn !== undefined) {
              this.$options.updateOnDefault = false;
              this.$options.updateOn = trim(this.$options.updateOn.replace(DEFAULT_REGEXP, function() {
                that.$options.updateOnDefault = true;
                return ' ';
              }));
            } else {
              this.$options.updateOnDefault = true;
            }
          }]
        };
      };
      function addSetValidityMethod(context) {
        var ctrl = context.ctrl,
            $element = context.$element,
            classCache = {},
            set = context.set,
            unset = context.unset,
            parentForm = context.parentForm,
            $animate = context.$animate;
        classCache[INVALID_CLASS] = !(classCache[VALID_CLASS] = $element.hasClass(VALID_CLASS));
        ctrl.$setValidity = setValidity;
        function setValidity(validationErrorKey, state, controller) {
          if (state === undefined) {
            createAndSet('$pending', validationErrorKey, controller);
          } else {
            unsetAndCleanup('$pending', validationErrorKey, controller);
          }
          if (!isBoolean(state)) {
            unset(ctrl.$error, validationErrorKey, controller);
            unset(ctrl.$$success, validationErrorKey, controller);
          } else {
            if (state) {
              unset(ctrl.$error, validationErrorKey, controller);
              set(ctrl.$$success, validationErrorKey, controller);
            } else {
              set(ctrl.$error, validationErrorKey, controller);
              unset(ctrl.$$success, validationErrorKey, controller);
            }
          }
          if (ctrl.$pending) {
            cachedToggleClass(PENDING_CLASS, true);
            ctrl.$valid = ctrl.$invalid = undefined;
            toggleValidationCss('', null);
          } else {
            cachedToggleClass(PENDING_CLASS, false);
            ctrl.$valid = isObjectEmpty(ctrl.$error);
            ctrl.$invalid = !ctrl.$valid;
            toggleValidationCss('', ctrl.$valid);
          }
          var combinedState;
          if (ctrl.$pending && ctrl.$pending[validationErrorKey]) {
            combinedState = undefined;
          } else if (ctrl.$error[validationErrorKey]) {
            combinedState = false;
          } else if (ctrl.$$success[validationErrorKey]) {
            combinedState = true;
          } else {
            combinedState = null;
          }
          toggleValidationCss(validationErrorKey, combinedState);
          parentForm.$setValidity(validationErrorKey, combinedState, ctrl);
        }
        function createAndSet(name, value, controller) {
          if (!ctrl[name]) {
            ctrl[name] = {};
          }
          set(ctrl[name], value, controller);
        }
        function unsetAndCleanup(name, value, controller) {
          if (ctrl[name]) {
            unset(ctrl[name], value, controller);
          }
          if (isObjectEmpty(ctrl[name])) {
            ctrl[name] = undefined;
          }
        }
        function cachedToggleClass(className, switchValue) {
          if (switchValue && !classCache[className]) {
            $animate.addClass($element, className);
            classCache[className] = true;
          } else if (!switchValue && classCache[className]) {
            $animate.removeClass($element, className);
            classCache[className] = false;
          }
        }
        function toggleValidationCss(validationErrorKey, isValid) {
          validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
          cachedToggleClass(VALID_CLASS + validationErrorKey, isValid === true);
          cachedToggleClass(INVALID_CLASS + validationErrorKey, isValid === false);
        }
      }
      function isObjectEmpty(obj) {
        if (obj) {
          for (var prop in obj) {
            return false;
          }
        }
        return true;
      }
      var ngNonBindableDirective = ngDirective({
        terminal: true,
        priority: 1000
      });
      var ngOptionsMinErr = minErr('ngOptions');
      var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
      var ngOptionsDirective = ['$compile', '$parse', function($compile, $parse) {
        function parseOptionsExpression(optionsExp, selectElement, scope) {
          var match = optionsExp.match(NG_OPTIONS_REGEXP);
          if (!(match)) {
            throw ngOptionsMinErr('iexp', "Expected expression in form of " + "'_select_ (as _label_)? for (_key_,)?_value_ in _collection_'" + " but got '{0}'. Element: {1}", optionsExp, startingTag(selectElement));
          }
          var valueName = match[5] || match[7];
          var keyName = match[6];
          var selectAs = / as /.test(match[0]) && match[1];
          var trackBy = match[9];
          var valueFn = $parse(match[2] ? match[1] : valueName);
          var selectAsFn = selectAs && $parse(selectAs);
          var viewValueFn = selectAsFn || valueFn;
          var trackByFn = trackBy && $parse(trackBy);
          var getTrackByValueFn = trackBy ? function(value, locals) {
            return trackByFn(scope, locals);
          } : function getHashOfValue(value) {
            return hashKey(value);
          };
          var getTrackByValue = function(value, key) {
            return getTrackByValueFn(value, getLocals(value, key));
          };
          var displayFn = $parse(match[2] || match[1]);
          var groupByFn = $parse(match[3] || '');
          var disableWhenFn = $parse(match[4] || '');
          var valuesFn = $parse(match[8]);
          var locals = {};
          var getLocals = keyName ? function(value, key) {
            locals[keyName] = key;
            locals[valueName] = value;
            return locals;
          } : function(value) {
            locals[valueName] = value;
            return locals;
          };
          function Option(selectValue, viewValue, label, group, disabled) {
            this.selectValue = selectValue;
            this.viewValue = viewValue;
            this.label = label;
            this.group = group;
            this.disabled = disabled;
          }
          return {
            trackBy: trackBy,
            getTrackByValue: getTrackByValue,
            getWatchables: $parse(valuesFn, function(values) {
              var watchedArray = [];
              values = values || [];
              Object.keys(values).forEach(function getWatchable(key) {
                var locals = getLocals(values[key], key);
                var selectValue = getTrackByValueFn(values[key], locals);
                watchedArray.push(selectValue);
                if (match[2] || match[1]) {
                  var label = displayFn(scope, locals);
                  watchedArray.push(label);
                }
                if (match[4]) {
                  var disableWhen = disableWhenFn(scope, locals);
                  watchedArray.push(disableWhen);
                }
              });
              return watchedArray;
            }),
            getOptions: function() {
              var optionItems = [];
              var selectValueMap = {};
              var optionValues = valuesFn(scope) || [];
              var optionValuesKeys;
              if (!keyName && isArrayLike(optionValues)) {
                optionValuesKeys = optionValues;
              } else {
                optionValuesKeys = [];
                for (var itemKey in optionValues) {
                  if (optionValues.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
                    optionValuesKeys.push(itemKey);
                  }
                }
              }
              var optionValuesLength = optionValuesKeys.length;
              for (var index = 0; index < optionValuesLength; index++) {
                var key = (optionValues === optionValuesKeys) ? index : optionValuesKeys[index];
                var value = optionValues[key];
                var locals = getLocals(value, key);
                var viewValue = viewValueFn(scope, locals);
                var selectValue = getTrackByValueFn(viewValue, locals);
                var label = displayFn(scope, locals);
                var group = groupByFn(scope, locals);
                var disabled = disableWhenFn(scope, locals);
                var optionItem = new Option(selectValue, viewValue, label, group, disabled);
                optionItems.push(optionItem);
                selectValueMap[selectValue] = optionItem;
              }
              return {
                items: optionItems,
                selectValueMap: selectValueMap,
                getOptionFromViewValue: function(value) {
                  return selectValueMap[getTrackByValue(value)];
                },
                getViewValueFromOption: function(option) {
                  return trackBy ? angular.copy(option.viewValue) : option.viewValue;
                }
              };
            }
          };
        }
        var optionTemplate = document.createElement('option'),
            optGroupTemplate = document.createElement('optgroup');
        return {
          restrict: 'A',
          terminal: true,
          require: ['select', '?ngModel'],
          link: function(scope, selectElement, attr, ctrls) {
            var ngModelCtrl = ctrls[1];
            if (!ngModelCtrl)
              return;
            var selectCtrl = ctrls[0];
            var multiple = attr.multiple;
            var emptyOption;
            for (var i = 0,
                children = selectElement.children(),
                ii = children.length; i < ii; i++) {
              if (children[i].value === '') {
                emptyOption = children.eq(i);
                break;
              }
            }
            var providedEmptyOption = !!emptyOption;
            var unknownOption = jqLite(optionTemplate.cloneNode(false));
            unknownOption.val('?');
            var options;
            var ngOptions = parseOptionsExpression(attr.ngOptions, selectElement, scope);
            var renderEmptyOption = function() {
              if (!providedEmptyOption) {
                selectElement.prepend(emptyOption);
              }
              selectElement.val('');
              emptyOption.prop('selected', true);
              emptyOption.attr('selected', true);
            };
            var removeEmptyOption = function() {
              if (!providedEmptyOption) {
                emptyOption.remove();
              }
            };
            var renderUnknownOption = function() {
              selectElement.prepend(unknownOption);
              selectElement.val('?');
              unknownOption.prop('selected', true);
              unknownOption.attr('selected', true);
            };
            var removeUnknownOption = function() {
              unknownOption.remove();
            };
            if (!multiple) {
              selectCtrl.writeValue = function writeNgOptionsValue(value) {
                var option = options.getOptionFromViewValue(value);
                if (option && !option.disabled) {
                  if (selectElement[0].value !== option.selectValue) {
                    removeUnknownOption();
                    removeEmptyOption();
                    selectElement[0].value = option.selectValue;
                    option.element.selected = true;
                    option.element.setAttribute('selected', 'selected');
                  }
                } else {
                  if (value === null || providedEmptyOption) {
                    removeUnknownOption();
                    renderEmptyOption();
                  } else {
                    removeEmptyOption();
                    renderUnknownOption();
                  }
                }
              };
              selectCtrl.readValue = function readNgOptionsValue() {
                var selectedOption = options.selectValueMap[selectElement.val()];
                if (selectedOption && !selectedOption.disabled) {
                  removeEmptyOption();
                  removeUnknownOption();
                  return options.getViewValueFromOption(selectedOption);
                }
                return null;
              };
              if (ngOptions.trackBy) {
                scope.$watch(function() {
                  return ngOptions.getTrackByValue(ngModelCtrl.$viewValue);
                }, function() {
                  ngModelCtrl.$render();
                });
              }
            } else {
              ngModelCtrl.$isEmpty = function(value) {
                return !value || value.length === 0;
              };
              selectCtrl.writeValue = function writeNgOptionsMultiple(value) {
                options.items.forEach(function(option) {
                  option.element.selected = false;
                });
                if (value) {
                  value.forEach(function(item) {
                    var option = options.getOptionFromViewValue(item);
                    if (option && !option.disabled)
                      option.element.selected = true;
                  });
                }
              };
              selectCtrl.readValue = function readNgOptionsMultiple() {
                var selectedValues = selectElement.val() || [],
                    selections = [];
                forEach(selectedValues, function(value) {
                  var option = options.selectValueMap[value];
                  if (!option.disabled)
                    selections.push(options.getViewValueFromOption(option));
                });
                return selections;
              };
              if (ngOptions.trackBy) {
                scope.$watchCollection(function() {
                  if (isArray(ngModelCtrl.$viewValue)) {
                    return ngModelCtrl.$viewValue.map(function(value) {
                      return ngOptions.getTrackByValue(value);
                    });
                  }
                }, function() {
                  ngModelCtrl.$render();
                });
              }
            }
            if (providedEmptyOption) {
              emptyOption.remove();
              $compile(emptyOption)(scope);
              emptyOption.removeClass('ng-scope');
            } else {
              emptyOption = jqLite(optionTemplate.cloneNode(false));
            }
            updateOptions();
            scope.$watchCollection(ngOptions.getWatchables, updateOptions);
            function updateOptionElement(option, element) {
              option.element = element;
              element.disabled = option.disabled;
              if (option.value !== element.value)
                element.value = option.selectValue;
              if (option.label !== element.label) {
                element.label = option.label;
                element.textContent = option.label;
              }
            }
            function addOrReuseElement(parent, current, type, templateElement) {
              var element;
              if (current && lowercase(current.nodeName) === type) {
                element = current;
              } else {
                element = templateElement.cloneNode(false);
                if (!current) {
                  parent.appendChild(element);
                } else {
                  parent.insertBefore(element, current);
                }
              }
              return element;
            }
            function removeExcessElements(current) {
              var next;
              while (current) {
                next = current.nextSibling;
                jqLiteRemove(current);
                current = next;
              }
            }
            function skipEmptyAndUnknownOptions(current) {
              var emptyOption_ = emptyOption && emptyOption[0];
              var unknownOption_ = unknownOption && unknownOption[0];
              if (emptyOption_ || unknownOption_) {
                while (current && (current === emptyOption_ || current === unknownOption_)) {
                  current = current.nextSibling;
                }
              }
              return current;
            }
            function updateOptions() {
              var previousValue = options && selectCtrl.readValue();
              options = ngOptions.getOptions();
              var groupMap = {};
              var currentElement = selectElement[0].firstChild;
              if (providedEmptyOption) {
                selectElement.prepend(emptyOption);
              }
              currentElement = skipEmptyAndUnknownOptions(currentElement);
              options.items.forEach(function updateOption(option) {
                var group;
                var groupElement;
                var optionElement;
                if (option.group) {
                  group = groupMap[option.group];
                  if (!group) {
                    groupElement = addOrReuseElement(selectElement[0], currentElement, 'optgroup', optGroupTemplate);
                    currentElement = groupElement.nextSibling;
                    groupElement.label = option.group;
                    group = groupMap[option.group] = {
                      groupElement: groupElement,
                      currentOptionElement: groupElement.firstChild
                    };
                  }
                  optionElement = addOrReuseElement(group.groupElement, group.currentOptionElement, 'option', optionTemplate);
                  updateOptionElement(option, optionElement);
                  group.currentOptionElement = optionElement.nextSibling;
                } else {
                  optionElement = addOrReuseElement(selectElement[0], currentElement, 'option', optionTemplate);
                  updateOptionElement(option, optionElement);
                  currentElement = optionElement.nextSibling;
                }
              });
              Object.keys(groupMap).forEach(function(key) {
                removeExcessElements(groupMap[key].currentOptionElement);
              });
              removeExcessElements(currentElement);
              ngModelCtrl.$render();
              if (!ngModelCtrl.$isEmpty(previousValue)) {
                var nextValue = selectCtrl.readValue();
                if (ngOptions.trackBy && !equals(previousValue, nextValue) || previousValue !== nextValue) {
                  ngModelCtrl.$setViewValue(nextValue);
                  ngModelCtrl.$render();
                }
              }
            }
          }
        };
      }];
      var ngPluralizeDirective = ['$locale', '$interpolate', '$log', function($locale, $interpolate, $log) {
        var BRACE = /{}/g,
            IS_WHEN = /^when(Minus)?(.+)$/;
        return {link: function(scope, element, attr) {
            var numberExp = attr.count,
                whenExp = attr.$attr.when && element.attr(attr.$attr.when),
                offset = attr.offset || 0,
                whens = scope.$eval(whenExp) || {},
                whensExpFns = {},
                startSymbol = $interpolate.startSymbol(),
                endSymbol = $interpolate.endSymbol(),
                braceReplacement = startSymbol + numberExp + '-' + offset + endSymbol,
                watchRemover = angular.noop,
                lastCount;
            forEach(attr, function(expression, attributeName) {
              var tmpMatch = IS_WHEN.exec(attributeName);
              if (tmpMatch) {
                var whenKey = (tmpMatch[1] ? '-' : '') + lowercase(tmpMatch[2]);
                whens[whenKey] = element.attr(attr.$attr[attributeName]);
              }
            });
            forEach(whens, function(expression, key) {
              whensExpFns[key] = $interpolate(expression.replace(BRACE, braceReplacement));
            });
            scope.$watch(numberExp, function ngPluralizeWatchAction(newVal) {
              var count = parseFloat(newVal);
              var countIsNaN = isNaN(count);
              if (!countIsNaN && !(count in whens)) {
                count = $locale.pluralCat(count - offset);
              }
              if ((count !== lastCount) && !(countIsNaN && isNumber(lastCount) && isNaN(lastCount))) {
                watchRemover();
                var whenExpFn = whensExpFns[count];
                if (isUndefined(whenExpFn)) {
                  if (newVal != null) {
                    $log.debug("ngPluralize: no rule defined for '" + count + "' in " + whenExp);
                  }
                  watchRemover = noop;
                  updateElementText();
                } else {
                  watchRemover = scope.$watch(whenExpFn, updateElementText);
                }
                lastCount = count;
              }
            });
            function updateElementText(newText) {
              element.text(newText || '');
            }
          }};
      }];
      var ngRepeatDirective = ['$parse', '$animate', function($parse, $animate) {
        var NG_REMOVED = '$$NG_REMOVED';
        var ngRepeatMinErr = minErr('ngRepeat');
        var updateScope = function(scope, index, valueIdentifier, value, keyIdentifier, key, arrayLength) {
          scope[valueIdentifier] = value;
          if (keyIdentifier)
            scope[keyIdentifier] = key;
          scope.$index = index;
          scope.$first = (index === 0);
          scope.$last = (index === (arrayLength - 1));
          scope.$middle = !(scope.$first || scope.$last);
          scope.$odd = !(scope.$even = (index & 1) === 0);
        };
        var getBlockStart = function(block) {
          return block.clone[0];
        };
        var getBlockEnd = function(block) {
          return block.clone[block.clone.length - 1];
        };
        return {
          restrict: 'A',
          multiElement: true,
          transclude: 'element',
          priority: 1000,
          terminal: true,
          $$tlb: true,
          compile: function ngRepeatCompile($element, $attr) {
            var expression = $attr.ngRepeat;
            var ngRepeatEndComment = document.createComment(' end ngRepeat: ' + expression + ' ');
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!match) {
              throw ngRepeatMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
            }
            var lhs = match[1];
            var rhs = match[2];
            var aliasAs = match[3];
            var trackByExp = match[4];
            match = lhs.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
            if (!match) {
              throw ngRepeatMinErr('iidexp', "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", lhs);
            }
            var valueIdentifier = match[3] || match[1];
            var keyIdentifier = match[2];
            if (aliasAs && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(aliasAs) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(aliasAs))) {
              throw ngRepeatMinErr('badident', "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", aliasAs);
            }
            var trackByExpGetter,
                trackByIdExpFn,
                trackByIdArrayFn,
                trackByIdObjFn;
            var hashFnLocals = {$id: hashKey};
            if (trackByExp) {
              trackByExpGetter = $parse(trackByExp);
            } else {
              trackByIdArrayFn = function(key, value) {
                return hashKey(value);
              };
              trackByIdObjFn = function(key) {
                return key;
              };
            }
            return function ngRepeatLink($scope, $element, $attr, ctrl, $transclude) {
              if (trackByExpGetter) {
                trackByIdExpFn = function(key, value, index) {
                  if (keyIdentifier)
                    hashFnLocals[keyIdentifier] = key;
                  hashFnLocals[valueIdentifier] = value;
                  hashFnLocals.$index = index;
                  return trackByExpGetter($scope, hashFnLocals);
                };
              }
              var lastBlockMap = createMap();
              $scope.$watchCollection(rhs, function ngRepeatAction(collection) {
                var index,
                    length,
                    previousNode = $element[0],
                    nextNode,
                    nextBlockMap = createMap(),
                    collectionLength,
                    key,
                    value,
                    trackById,
                    trackByIdFn,
                    collectionKeys,
                    block,
                    nextBlockOrder,
                    elementsToRemove;
                if (aliasAs) {
                  $scope[aliasAs] = collection;
                }
                if (isArrayLike(collection)) {
                  collectionKeys = collection;
                  trackByIdFn = trackByIdExpFn || trackByIdArrayFn;
                } else {
                  trackByIdFn = trackByIdExpFn || trackByIdObjFn;
                  collectionKeys = [];
                  for (var itemKey in collection) {
                    if (collection.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
                      collectionKeys.push(itemKey);
                    }
                  }
                }
                collectionLength = collectionKeys.length;
                nextBlockOrder = new Array(collectionLength);
                for (index = 0; index < collectionLength; index++) {
                  key = (collection === collectionKeys) ? index : collectionKeys[index];
                  value = collection[key];
                  trackById = trackByIdFn(key, value, index);
                  if (lastBlockMap[trackById]) {
                    block = lastBlockMap[trackById];
                    delete lastBlockMap[trackById];
                    nextBlockMap[trackById] = block;
                    nextBlockOrder[index] = block;
                  } else if (nextBlockMap[trackById]) {
                    forEach(nextBlockOrder, function(block) {
                      if (block && block.scope)
                        lastBlockMap[block.id] = block;
                    });
                    throw ngRepeatMinErr('dupes', "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", expression, trackById, value);
                  } else {
                    nextBlockOrder[index] = {
                      id: trackById,
                      scope: undefined,
                      clone: undefined
                    };
                    nextBlockMap[trackById] = true;
                  }
                }
                for (var blockKey in lastBlockMap) {
                  block = lastBlockMap[blockKey];
                  elementsToRemove = getBlockNodes(block.clone);
                  $animate.leave(elementsToRemove);
                  if (elementsToRemove[0].parentNode) {
                    for (index = 0, length = elementsToRemove.length; index < length; index++) {
                      elementsToRemove[index][NG_REMOVED] = true;
                    }
                  }
                  block.scope.$destroy();
                }
                for (index = 0; index < collectionLength; index++) {
                  key = (collection === collectionKeys) ? index : collectionKeys[index];
                  value = collection[key];
                  block = nextBlockOrder[index];
                  if (block.scope) {
                    nextNode = previousNode;
                    do {
                      nextNode = nextNode.nextSibling;
                    } while (nextNode && nextNode[NG_REMOVED]);
                    if (getBlockStart(block) != nextNode) {
                      $animate.move(getBlockNodes(block.clone), null, jqLite(previousNode));
                    }
                    previousNode = getBlockEnd(block);
                    updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
                  } else {
                    $transclude(function ngRepeatTransclude(clone, scope) {
                      block.scope = scope;
                      var endNode = ngRepeatEndComment.cloneNode(false);
                      clone[clone.length++] = endNode;
                      $animate.enter(clone, null, jqLite(previousNode));
                      previousNode = endNode;
                      block.clone = clone;
                      nextBlockMap[block.id] = block;
                      updateScope(block.scope, index, valueIdentifier, value, keyIdentifier, key, collectionLength);
                    });
                  }
                }
                lastBlockMap = nextBlockMap;
              });
            };
          }
        };
      }];
      var NG_HIDE_CLASS = 'ng-hide';
      var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';
      var ngShowDirective = ['$animate', function($animate) {
        return {
          restrict: 'A',
          multiElement: true,
          link: function(scope, element, attr) {
            scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
              $animate[value ? 'removeClass' : 'addClass'](element, NG_HIDE_CLASS, {tempClasses: NG_HIDE_IN_PROGRESS_CLASS});
            });
          }
        };
      }];
      var ngHideDirective = ['$animate', function($animate) {
        return {
          restrict: 'A',
          multiElement: true,
          link: function(scope, element, attr) {
            scope.$watch(attr.ngHide, function ngHideWatchAction(value) {
              $animate[value ? 'addClass' : 'removeClass'](element, NG_HIDE_CLASS, {tempClasses: NG_HIDE_IN_PROGRESS_CLASS});
            });
          }
        };
      }];
      var ngStyleDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
          if (oldStyles && (newStyles !== oldStyles)) {
            forEach(oldStyles, function(val, style) {
              element.css(style, '');
            });
          }
          if (newStyles)
            element.css(newStyles);
        }, true);
      });
      var ngSwitchDirective = ['$animate', function($animate) {
        return {
          require: 'ngSwitch',
          controller: ['$scope', function ngSwitchController() {
            this.cases = {};
          }],
          link: function(scope, element, attr, ngSwitchController) {
            var watchExpr = attr.ngSwitch || attr.on,
                selectedTranscludes = [],
                selectedElements = [],
                previousLeaveAnimations = [],
                selectedScopes = [];
            var spliceFactory = function(array, index) {
              return function() {
                array.splice(index, 1);
              };
            };
            scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
              var i,
                  ii;
              for (i = 0, ii = previousLeaveAnimations.length; i < ii; ++i) {
                $animate.cancel(previousLeaveAnimations[i]);
              }
              previousLeaveAnimations.length = 0;
              for (i = 0, ii = selectedScopes.length; i < ii; ++i) {
                var selected = getBlockNodes(selectedElements[i].clone);
                selectedScopes[i].$destroy();
                var promise = previousLeaveAnimations[i] = $animate.leave(selected);
                promise.then(spliceFactory(previousLeaveAnimations, i));
              }
              selectedElements.length = 0;
              selectedScopes.length = 0;
              if ((selectedTranscludes = ngSwitchController.cases['!' + value] || ngSwitchController.cases['?'])) {
                forEach(selectedTranscludes, function(selectedTransclude) {
                  selectedTransclude.transclude(function(caseElement, selectedScope) {
                    selectedScopes.push(selectedScope);
                    var anchor = selectedTransclude.element;
                    caseElement[caseElement.length++] = document.createComment(' end ngSwitchWhen: ');
                    var block = {clone: caseElement};
                    selectedElements.push(block);
                    $animate.enter(caseElement, anchor.parent(), anchor);
                  });
                });
              }
            });
          }
        };
      }];
      var ngSwitchWhenDirective = ngDirective({
        transclude: 'element',
        priority: 1200,
        require: '^ngSwitch',
        multiElement: true,
        link: function(scope, element, attrs, ctrl, $transclude) {
          ctrl.cases['!' + attrs.ngSwitchWhen] = (ctrl.cases['!' + attrs.ngSwitchWhen] || []);
          ctrl.cases['!' + attrs.ngSwitchWhen].push({
            transclude: $transclude,
            element: element
          });
        }
      });
      var ngSwitchDefaultDirective = ngDirective({
        transclude: 'element',
        priority: 1200,
        require: '^ngSwitch',
        multiElement: true,
        link: function(scope, element, attr, ctrl, $transclude) {
          ctrl.cases['?'] = (ctrl.cases['?'] || []);
          ctrl.cases['?'].push({
            transclude: $transclude,
            element: element
          });
        }
      });
      var ngTranscludeDirective = ngDirective({
        restrict: 'EAC',
        link: function($scope, $element, $attrs, controller, $transclude) {
          if (!$transclude) {
            throw minErr('ngTransclude')('orphan', 'Illegal use of ngTransclude directive in the template! ' + 'No parent directive that requires a transclusion found. ' + 'Element: {0}', startingTag($element));
          }
          $transclude(function(clone) {
            $element.empty();
            $element.append(clone);
          });
        }
      });
      var scriptDirective = ['$templateCache', function($templateCache) {
        return {
          restrict: 'E',
          terminal: true,
          compile: function(element, attr) {
            if (attr.type == 'text/ng-template') {
              var templateUrl = attr.id,
                  text = element[0].text;
              $templateCache.put(templateUrl, text);
            }
          }
        };
      }];
      var noopNgModelController = {
        $setViewValue: noop,
        $render: noop
      };
      var SelectController = ['$element', '$scope', '$attrs', function($element, $scope, $attrs) {
        var self = this,
            optionsMap = new HashMap();
        self.ngModelCtrl = noopNgModelController;
        self.unknownOption = jqLite(document.createElement('option'));
        self.renderUnknownOption = function(val) {
          var unknownVal = '? ' + hashKey(val) + ' ?';
          self.unknownOption.val(unknownVal);
          $element.prepend(self.unknownOption);
          $element.val(unknownVal);
        };
        $scope.$on('$destroy', function() {
          self.renderUnknownOption = noop;
        });
        self.removeUnknownOption = function() {
          if (self.unknownOption.parent())
            self.unknownOption.remove();
        };
        self.readValue = function readSingleValue() {
          self.removeUnknownOption();
          return $element.val();
        };
        self.writeValue = function writeSingleValue(value) {
          if (self.hasOption(value)) {
            self.removeUnknownOption();
            $element.val(value);
            if (value === '')
              self.emptyOption.prop('selected', true);
          } else {
            if (value == null && self.emptyOption) {
              self.removeUnknownOption();
              $element.val('');
            } else {
              self.renderUnknownOption(value);
            }
          }
        };
        self.addOption = function(value, element) {
          assertNotHasOwnProperty(value, '"option value"');
          if (value === '') {
            self.emptyOption = element;
          }
          var count = optionsMap.get(value) || 0;
          optionsMap.put(value, count + 1);
        };
        self.removeOption = function(value) {
          var count = optionsMap.get(value);
          if (count) {
            if (count === 1) {
              optionsMap.remove(value);
              if (value === '') {
                self.emptyOption = undefined;
              }
            } else {
              optionsMap.put(value, count - 1);
            }
          }
        };
        self.hasOption = function(value) {
          return !!optionsMap.get(value);
        };
      }];
      var selectDirective = function() {
        return {
          restrict: 'E',
          require: ['select', '?ngModel'],
          controller: SelectController,
          link: function(scope, element, attr, ctrls) {
            var ngModelCtrl = ctrls[1];
            if (!ngModelCtrl)
              return;
            var selectCtrl = ctrls[0];
            selectCtrl.ngModelCtrl = ngModelCtrl;
            ngModelCtrl.$render = function() {
              selectCtrl.writeValue(ngModelCtrl.$viewValue);
            };
            element.on('change', function() {
              scope.$apply(function() {
                ngModelCtrl.$setViewValue(selectCtrl.readValue());
              });
            });
            if (attr.multiple) {
              selectCtrl.readValue = function readMultipleValue() {
                var array = [];
                forEach(element.find('option'), function(option) {
                  if (option.selected) {
                    array.push(option.value);
                  }
                });
                return array;
              };
              selectCtrl.writeValue = function writeMultipleValue(value) {
                var items = new HashMap(value);
                forEach(element.find('option'), function(option) {
                  option.selected = isDefined(items.get(option.value));
                });
              };
              var lastView,
                  lastViewRef = NaN;
              scope.$watch(function selectMultipleWatch() {
                if (lastViewRef === ngModelCtrl.$viewValue && !equals(lastView, ngModelCtrl.$viewValue)) {
                  lastView = shallowCopy(ngModelCtrl.$viewValue);
                  ngModelCtrl.$render();
                }
                lastViewRef = ngModelCtrl.$viewValue;
              });
              ngModelCtrl.$isEmpty = function(value) {
                return !value || value.length === 0;
              };
            }
          }
        };
      };
      var optionDirective = ['$interpolate', function($interpolate) {
        function chromeHack(optionElement) {
          if (optionElement[0].hasAttribute('selected')) {
            optionElement[0].selected = true;
          }
        }
        return {
          restrict: 'E',
          priority: 100,
          compile: function(element, attr) {
            if (isUndefined(attr.value)) {
              var interpolateFn = $interpolate(element.text(), true);
              if (!interpolateFn) {
                attr.$set('value', element.text());
              }
            }
            return function(scope, element, attr) {
              var selectCtrlName = '$selectController',
                  parent = element.parent(),
                  selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
              if (selectCtrl && selectCtrl.ngModelCtrl) {
                if (interpolateFn) {
                  scope.$watch(interpolateFn, function interpolateWatchAction(newVal, oldVal) {
                    attr.$set('value', newVal);
                    if (oldVal !== newVal) {
                      selectCtrl.removeOption(oldVal);
                    }
                    selectCtrl.addOption(newVal, element);
                    selectCtrl.ngModelCtrl.$render();
                    chromeHack(element);
                  });
                } else {
                  selectCtrl.addOption(attr.value, element);
                  selectCtrl.ngModelCtrl.$render();
                  chromeHack(element);
                }
                element.on('$destroy', function() {
                  selectCtrl.removeOption(attr.value);
                  selectCtrl.ngModelCtrl.$render();
                });
              }
            };
          }
        };
      }];
      var styleDirective = valueFn({
        restrict: 'E',
        terminal: false
      });
      var requiredDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            attr.required = true;
            ctrl.$validators.required = function(modelValue, viewValue) {
              return !attr.required || !ctrl.$isEmpty(viewValue);
            };
            attr.$observe('required', function() {
              ctrl.$validate();
            });
          }
        };
      };
      var patternDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            var regexp,
                patternExp = attr.ngPattern || attr.pattern;
            attr.$observe('pattern', function(regex) {
              if (isString(regex) && regex.length > 0) {
                regex = new RegExp('^' + regex + '$');
              }
              if (regex && !regex.test) {
                throw minErr('ngPattern')('noregexp', 'Expected {0} to be a RegExp but was {1}. Element: {2}', patternExp, regex, startingTag(elm));
              }
              regexp = regex || undefined;
              ctrl.$validate();
            });
            ctrl.$validators.pattern = function(value) {
              return ctrl.$isEmpty(value) || isUndefined(regexp) || regexp.test(value);
            };
          }
        };
      };
      var maxlengthDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            var maxlength = -1;
            attr.$observe('maxlength', function(value) {
              var intVal = toInt(value);
              maxlength = isNaN(intVal) ? -1 : intVal;
              ctrl.$validate();
            });
            ctrl.$validators.maxlength = function(modelValue, viewValue) {
              return (maxlength < 0) || ctrl.$isEmpty(viewValue) || (viewValue.length <= maxlength);
            };
          }
        };
      };
      var minlengthDirective = function() {
        return {
          restrict: 'A',
          require: '?ngModel',
          link: function(scope, elm, attr, ctrl) {
            if (!ctrl)
              return;
            var minlength = 0;
            attr.$observe('minlength', function(value) {
              minlength = toInt(value) || 0;
              ctrl.$validate();
            });
            ctrl.$validators.minlength = function(modelValue, viewValue) {
              return ctrl.$isEmpty(viewValue) || viewValue.length >= minlength;
            };
          }
        };
      };
      if (window.angular.bootstrap) {
        console.log('WARNING: Tried to load angular more than once.');
        return;
      }
      bindJQuery();
      publishExternalAPI(angular);
      jqLite(document).ready(function() {
        angularInit(document, bootstrap);
      });
    })(window, document);
    !window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("b", ["1a"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1a');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1b", ["b"], false, function(__require, __exports, __module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    "format global";
    "deps angular";
    if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
      module.exports = 'ui.router';
    }
    (function(window, angular, undefined) {
      'use strict';
      var isDefined = angular.isDefined,
          isFunction = angular.isFunction,
          isString = angular.isString,
          isObject = angular.isObject,
          isArray = angular.isArray,
          forEach = angular.forEach,
          extend = angular.extend,
          copy = angular.copy;
      function inherit(parent, extra) {
        return extend(new (extend(function() {}, {prototype: parent}))(), extra);
      }
      function merge(dst) {
        forEach(arguments, function(obj) {
          if (obj !== dst) {
            forEach(obj, function(value, key) {
              if (!dst.hasOwnProperty(key))
                dst[key] = value;
            });
          }
        });
        return dst;
      }
      function ancestors(first, second) {
        var path = [];
        for (var n in first.path) {
          if (first.path[n] !== second.path[n])
            break;
          path.push(first.path[n]);
        }
        return path;
      }
      function objectKeys(object) {
        if (Object.keys) {
          return Object.keys(object);
        }
        var result = [];
        forEach(object, function(val, key) {
          result.push(key);
        });
        return result;
      }
      function indexOf(array, value) {
        if (Array.prototype.indexOf) {
          return array.indexOf(value, Number(arguments[2]) || 0);
        }
        var len = array.length >>> 0,
            from = Number(arguments[2]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0)
          from += len;
        for (; from < len; from++) {
          if (from in array && array[from] === value)
            return from;
        }
        return -1;
      }
      function inheritParams(currentParams, newParams, $current, $to) {
        var parents = ancestors($current, $to),
            parentParams,
            inherited = {},
            inheritList = [];
        for (var i in parents) {
          if (!parents[i].params)
            continue;
          parentParams = objectKeys(parents[i].params);
          if (!parentParams.length)
            continue;
          for (var j in parentParams) {
            if (indexOf(inheritList, parentParams[j]) >= 0)
              continue;
            inheritList.push(parentParams[j]);
            inherited[parentParams[j]] = currentParams[parentParams[j]];
          }
        }
        return extend({}, inherited, newParams);
      }
      function equalForKeys(a, b, keys) {
        if (!keys) {
          keys = [];
          for (var n in a)
            keys.push(n);
        }
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          if (a[k] != b[k])
            return false;
        }
        return true;
      }
      function filterByKeys(keys, values) {
        var filtered = {};
        forEach(keys, function(name) {
          filtered[name] = values[name];
        });
        return filtered;
      }
      function indexBy(array, propName) {
        var result = {};
        forEach(array, function(item) {
          result[item[propName]] = item;
        });
        return result;
      }
      function pick(obj) {
        var copy = {};
        var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        forEach(keys, function(key) {
          if (key in obj)
            copy[key] = obj[key];
        });
        return copy;
      }
      function omit(obj) {
        var copy = {};
        var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var key in obj) {
          if (indexOf(keys, key) == -1)
            copy[key] = obj[key];
        }
        return copy;
      }
      function pluck(collection, key) {
        var result = isArray(collection) ? [] : {};
        forEach(collection, function(val, i) {
          result[i] = isFunction(key) ? key(val) : val[key];
        });
        return result;
      }
      function filter(collection, callback) {
        var array = isArray(collection);
        var result = array ? [] : {};
        forEach(collection, function(val, i) {
          if (callback(val, i)) {
            result[array ? result.length : i] = val;
          }
        });
        return result;
      }
      function map(collection, callback) {
        var result = isArray(collection) ? [] : {};
        forEach(collection, function(val, i) {
          result[i] = callback(val, i);
        });
        return result;
      }
      angular.module('ui.router.util', ['ng']);
      angular.module('ui.router.router', ['ui.router.util']);
      angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);
      angular.module('ui.router', ['ui.router.state']);
      angular.module('ui.router.compat', ['ui.router']);
      $Resolve.$inject = ['$q', '$injector'];
      function $Resolve($q, $injector) {
        var VISIT_IN_PROGRESS = 1,
            VISIT_DONE = 2,
            NOTHING = {},
            NO_DEPENDENCIES = [],
            NO_LOCALS = NOTHING,
            NO_PARENT = extend($q.when(NOTHING), {
              $$promises: NOTHING,
              $$values: NOTHING
            });
        this.study = function(invocables) {
          if (!isObject(invocables))
            throw new Error("'invocables' must be an object");
          var invocableKeys = objectKeys(invocables || {});
          var plan = [],
              cycle = [],
              visited = {};
          function visit(value, key) {
            if (visited[key] === VISIT_DONE)
              return;
            cycle.push(key);
            if (visited[key] === VISIT_IN_PROGRESS) {
              cycle.splice(0, indexOf(cycle, key));
              throw new Error("Cyclic dependency: " + cycle.join(" -> "));
            }
            visited[key] = VISIT_IN_PROGRESS;
            if (isString(value)) {
              plan.push(key, [function() {
                return $injector.get(value);
              }], NO_DEPENDENCIES);
            } else {
              var params = $injector.annotate(value);
              forEach(params, function(param) {
                if (param !== key && invocables.hasOwnProperty(param))
                  visit(invocables[param], param);
              });
              plan.push(key, value, params);
            }
            cycle.pop();
            visited[key] = VISIT_DONE;
          }
          forEach(invocables, visit);
          invocables = cycle = visited = null;
          function isResolve(value) {
            return isObject(value) && value.then && value.$$promises;
          }
          return function(locals, parent, self) {
            if (isResolve(locals) && self === undefined) {
              self = parent;
              parent = locals;
              locals = null;
            }
            if (!locals)
              locals = NO_LOCALS;
            else if (!isObject(locals)) {
              throw new Error("'locals' must be an object");
            }
            if (!parent)
              parent = NO_PARENT;
            else if (!isResolve(parent)) {
              throw new Error("'parent' must be a promise returned by $resolve.resolve()");
            }
            var resolution = $q.defer(),
                result = resolution.promise,
                promises = result.$$promises = {},
                values = extend({}, locals),
                wait = 1 + plan.length / 3,
                merged = false;
            function done() {
              if (!--wait) {
                if (!merged)
                  merge(values, parent.$$values);
                result.$$values = values;
                result.$$promises = result.$$promises || true;
                delete result.$$inheritedValues;
                resolution.resolve(values);
              }
            }
            function fail(reason) {
              result.$$failure = reason;
              resolution.reject(reason);
            }
            if (isDefined(parent.$$failure)) {
              fail(parent.$$failure);
              return result;
            }
            if (parent.$$inheritedValues) {
              merge(values, omit(parent.$$inheritedValues, invocableKeys));
            }
            extend(promises, parent.$$promises);
            if (parent.$$values) {
              merged = merge(values, omit(parent.$$values, invocableKeys));
              result.$$inheritedValues = omit(parent.$$values, invocableKeys);
              done();
            } else {
              if (parent.$$inheritedValues) {
                result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
              }
              parent.then(done, fail);
            }
            for (var i = 0,
                ii = plan.length; i < ii; i += 3) {
              if (locals.hasOwnProperty(plan[i]))
                done();
              else
                invoke(plan[i], plan[i + 1], plan[i + 2]);
            }
            function invoke(key, invocable, params) {
              var invocation = $q.defer(),
                  waitParams = 0;
              function onfailure(reason) {
                invocation.reject(reason);
                fail(reason);
              }
              forEach(params, function(dep) {
                if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
                  waitParams++;
                  promises[dep].then(function(result) {
                    values[dep] = result;
                    if (!(--waitParams))
                      proceed();
                  }, onfailure);
                }
              });
              if (!waitParams)
                proceed();
              function proceed() {
                if (isDefined(result.$$failure))
                  return;
                try {
                  invocation.resolve($injector.invoke(invocable, self, values));
                  invocation.promise.then(function(result) {
                    values[key] = result;
                    done();
                  }, onfailure);
                } catch (e) {
                  onfailure(e);
                }
              }
              promises[key] = invocation.promise;
            }
            return result;
          };
        };
        this.resolve = function(invocables, locals, parent, self) {
          return this.study(invocables)(locals, parent, self);
        };
      }
      angular.module('ui.router.util').service('$resolve', $Resolve);
      $TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
      function $TemplateFactory($http, $templateCache, $injector) {
        this.fromConfig = function(config, params, locals) {
          return (isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null);
        };
        this.fromString = function(template, params) {
          return isFunction(template) ? template(params) : template;
        };
        this.fromUrl = function(url, params) {
          if (isFunction(url))
            url = url(params);
          if (url == null)
            return null;
          else
            return $http.get(url, {
              cache: $templateCache,
              headers: {Accept: 'text/html'}
            }).then(function(response) {
              return response.data;
            });
        };
        this.fromProvider = function(provider, params, locals) {
          return $injector.invoke(provider, null, locals || {params: params});
        };
      }
      angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);
      var $$UMFP;
      function UrlMatcher(pattern, config, parentMatcher) {
        config = extend({params: {}}, isObject(config) ? config : {});
        var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            compiled = '^',
            last = 0,
            m,
            segments = this.segments = [],
            parentParams = parentMatcher ? parentMatcher.params : {},
            params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
            paramNames = [];
        function addParameter(id, type, config, location) {
          paramNames.push(id);
          if (parentParams[id])
            return parentParams[id];
          if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id))
            throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
          if (params[id])
            throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
          params[id] = new $$UMFP.Param(id, type, config, location);
          return params[id];
        }
        function quoteRegExp(string, pattern, squash, optional) {
          var surroundPattern = ['', ''],
              result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
          if (!pattern)
            return result;
          switch (squash) {
            case false:
              surroundPattern = ['(', ')' + (optional ? "?" : "")];
              break;
            case true:
              surroundPattern = ['?(', ')?'];
              break;
            default:
              surroundPattern = ['(' + squash + "|", ')?'];
              break;
          }
          return result + surroundPattern[0] + pattern + surroundPattern[1];
        }
        this.source = pattern;
        function matchDetails(m, isSearch) {
          var id,
              regexp,
              segment,
              type,
              cfg,
              arrayMode;
          id = m[2] || m[3];
          cfg = config.params[id];
          segment = pattern.substring(last, m.index);
          regexp = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
          type = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), {pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined)});
          return {
            id: id,
            regexp: regexp,
            segment: segment,
            type: type,
            cfg: cfg
          };
        }
        var p,
            param,
            segment;
        while ((m = placeholder.exec(pattern))) {
          p = matchDetails(m, false);
          if (p.segment.indexOf('?') >= 0)
            break;
          param = addParameter(p.id, p.type, p.cfg, "path");
          compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
          segments.push(p.segment);
          last = placeholder.lastIndex;
        }
        segment = pattern.substring(last);
        var i = segment.indexOf('?');
        if (i >= 0) {
          var search = this.sourceSearch = segment.substring(i);
          segment = segment.substring(0, i);
          this.sourcePath = pattern.substring(0, last + i);
          if (search.length > 0) {
            last = 0;
            while ((m = searchPlaceholder.exec(search))) {
              p = matchDetails(m, true);
              param = addParameter(p.id, p.type, p.cfg, "search");
              last = placeholder.lastIndex;
            }
          }
        } else {
          this.sourcePath = pattern;
          this.sourceSearch = '';
        }
        compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
        segments.push(segment);
        this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
        this.prefix = segments[0];
        this.$$paramNames = paramNames;
      }
      UrlMatcher.prototype.concat = function(pattern, config) {
        var defaultConfig = {
          caseInsensitive: $$UMFP.caseInsensitive(),
          strict: $$UMFP.strictMode(),
          squash: $$UMFP.defaultSquashPolicy()
        };
        return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
      };
      UrlMatcher.prototype.toString = function() {
        return this.source;
      };
      UrlMatcher.prototype.exec = function(path, searchParams) {
        var m = this.regexp.exec(path);
        if (!m)
          return null;
        searchParams = searchParams || {};
        var paramNames = this.parameters(),
            nTotal = paramNames.length,
            nPath = this.segments.length - 1,
            values = {},
            i,
            j,
            cfg,
            paramName;
        if (nPath !== m.length - 1)
          throw new Error("Unbalanced capture group in route '" + this.source + "'");
        function decodePathArray(string) {
          function reverseString(str) {
            return str.split("").reverse().join("");
          }
          function unquoteDashes(str) {
            return str.replace(/\\-/g, "-");
          }
          var split = reverseString(string).split(/-(?!\\)/);
          var allReversed = map(split, reverseString);
          return map(allReversed, unquoteDashes).reverse();
        }
        for (i = 0; i < nPath; i++) {
          paramName = paramNames[i];
          var param = this.params[paramName];
          var paramVal = m[i + 1];
          for (j = 0; j < param.replace; j++) {
            if (param.replace[j].from === paramVal)
              paramVal = param.replace[j].to;
          }
          if (paramVal && param.array === true)
            paramVal = decodePathArray(paramVal);
          values[paramName] = param.value(paramVal);
        }
        for (; i < nTotal; i++) {
          paramName = paramNames[i];
          values[paramName] = this.params[paramName].value(searchParams[paramName]);
        }
        return values;
      };
      UrlMatcher.prototype.parameters = function(param) {
        if (!isDefined(param))
          return this.$$paramNames;
        return this.params[param] || null;
      };
      UrlMatcher.prototype.validates = function(params) {
        return this.params.$$validates(params);
      };
      UrlMatcher.prototype.format = function(values) {
        values = values || {};
        var segments = this.segments,
            params = this.parameters(),
            paramset = this.params;
        if (!this.validates(values))
          return null;
        var i,
            search = false,
            nPath = segments.length - 1,
            nTotal = params.length,
            result = segments[0];
        function encodeDashes(str) {
          return encodeURIComponent(str).replace(/-/g, function(c) {
            return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase();
          });
        }
        for (i = 0; i < nTotal; i++) {
          var isPathParam = i < nPath;
          var name = params[i],
              param = paramset[name],
              value = param.value(values[name]);
          var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
          var squash = isDefaultValue ? param.squash : false;
          var encoded = param.type.encode(value);
          if (isPathParam) {
            var nextSegment = segments[i + 1];
            if (squash === false) {
              if (encoded != null) {
                if (isArray(encoded)) {
                  result += map(encoded, encodeDashes).join("-");
                } else {
                  result += encodeURIComponent(encoded);
                }
              }
              result += nextSegment;
            } else if (squash === true) {
              var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
              result += nextSegment.match(capture)[1];
            } else if (isString(squash)) {
              result += squash + nextSegment;
            }
          } else {
            if (encoded == null || (isDefaultValue && squash !== false))
              continue;
            if (!isArray(encoded))
              encoded = [encoded];
            encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
            result += (search ? '&' : '?') + (name + '=' + encoded);
            search = true;
          }
        }
        return result;
      };
      function Type(config) {
        extend(this, config);
      }
      Type.prototype.is = function(val, key) {
        return true;
      };
      Type.prototype.encode = function(val, key) {
        return val;
      };
      Type.prototype.decode = function(val, key) {
        return val;
      };
      Type.prototype.equals = function(a, b) {
        return a == b;
      };
      Type.prototype.$subPattern = function() {
        var sub = this.pattern.toString();
        return sub.substr(1, sub.length - 2);
      };
      Type.prototype.pattern = /.*/;
      Type.prototype.toString = function() {
        return "{Type:" + this.name + "}";
      };
      Type.prototype.$normalize = function(val) {
        return this.is(val) ? val : this.decode(val);
      };
      Type.prototype.$asArray = function(mode, isSearch) {
        if (!mode)
          return this;
        if (mode === "auto" && !isSearch)
          throw new Error("'auto' array mode is for query parameters only");
        function ArrayType(type, mode) {
          function bindTo(type, callbackName) {
            return function() {
              return type[callbackName].apply(type, arguments);
            };
          }
          function arrayWrap(val) {
            return isArray(val) ? val : (isDefined(val) ? [val] : []);
          }
          function arrayUnwrap(val) {
            switch (val.length) {
              case 0:
                return undefined;
              case 1:
                return mode === "auto" ? val[0] : val;
              default:
                return val;
            }
          }
          function falsey(val) {
            return !val;
          }
          function arrayHandler(callback, allTruthyMode) {
            return function handleArray(val) {
              val = arrayWrap(val);
              var result = map(val, callback);
              if (allTruthyMode === true)
                return filter(result, falsey).length === 0;
              return arrayUnwrap(result);
            };
          }
          function arrayEqualsHandler(callback) {
            return function handleArray(val1, val2) {
              var left = arrayWrap(val1),
                  right = arrayWrap(val2);
              if (left.length !== right.length)
                return false;
              for (var i = 0; i < left.length; i++) {
                if (!callback(left[i], right[i]))
                  return false;
              }
              return true;
            };
          }
          this.encode = arrayHandler(bindTo(type, 'encode'));
          this.decode = arrayHandler(bindTo(type, 'decode'));
          this.is = arrayHandler(bindTo(type, 'is'), true);
          this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
          this.pattern = type.pattern;
          this.$normalize = arrayHandler(bindTo(type, '$normalize'));
          this.name = type.name;
          this.$arrayMode = mode;
        }
        return new ArrayType(this, mode);
      };
      function $UrlMatcherFactory() {
        $$UMFP = this;
        var isCaseInsensitive = false,
            isStrictMode = true,
            defaultSquashPolicy = false;
        function valToString(val) {
          return val != null ? val.toString().replace(/\//g, "%2F") : val;
        }
        function valFromString(val) {
          return val != null ? val.toString().replace(/%2F/g, "/") : val;
        }
        var $types = {},
            enqueue = true,
            typeQueue = [],
            injector,
            defaultTypes = {
              string: {
                encode: valToString,
                decode: valFromString,
                is: function(val) {
                  return val == null || !isDefined(val) || typeof val === "string";
                },
                pattern: /[^/]*/
              },
              int: {
                encode: valToString,
                decode: function(val) {
                  return parseInt(val, 10);
                },
                is: function(val) {
                  return isDefined(val) && this.decode(val.toString()) === val;
                },
                pattern: /\d+/
              },
              bool: {
                encode: function(val) {
                  return val ? 1 : 0;
                },
                decode: function(val) {
                  return parseInt(val, 10) !== 0;
                },
                is: function(val) {
                  return val === true || val === false;
                },
                pattern: /0|1/
              },
              date: {
                encode: function(val) {
                  if (!this.is(val))
                    return undefined;
                  return [val.getFullYear(), ('0' + (val.getMonth() + 1)).slice(-2), ('0' + val.getDate()).slice(-2)].join("-");
                },
                decode: function(val) {
                  if (this.is(val))
                    return val;
                  var match = this.capture.exec(val);
                  return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
                },
                is: function(val) {
                  return val instanceof Date && !isNaN(val.valueOf());
                },
                equals: function(a, b) {
                  return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
              },
              json: {
                encode: angular.toJson,
                decode: angular.fromJson,
                is: angular.isObject,
                equals: angular.equals,
                pattern: /[^/]*/
              },
              any: {
                encode: angular.identity,
                decode: angular.identity,
                equals: angular.equals,
                pattern: /.*/
              }
            };
        function getDefaultConfig() {
          return {
            strict: isStrictMode,
            caseInsensitive: isCaseInsensitive
          };
        }
        function isInjectable(value) {
          return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
        }
        $UrlMatcherFactory.$$getDefaultValue = function(config) {
          if (!isInjectable(config.value))
            return config.value;
          if (!injector)
            throw new Error("Injectable functions cannot be called at configuration time");
          return injector.invoke(config.value);
        };
        this.caseInsensitive = function(value) {
          if (isDefined(value))
            isCaseInsensitive = value;
          return isCaseInsensitive;
        };
        this.strictMode = function(value) {
          if (isDefined(value))
            isStrictMode = value;
          return isStrictMode;
        };
        this.defaultSquashPolicy = function(value) {
          if (!isDefined(value))
            return defaultSquashPolicy;
          if (value !== true && value !== false && !isString(value))
            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
          defaultSquashPolicy = value;
          return value;
        };
        this.compile = function(pattern, config) {
          return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
        };
        this.isMatcher = function(o) {
          if (!isObject(o))
            return false;
          var result = true;
          forEach(UrlMatcher.prototype, function(val, name) {
            if (isFunction(val)) {
              result = result && (isDefined(o[name]) && isFunction(o[name]));
            }
          });
          return result;
        };
        this.type = function(name, definition, definitionFn) {
          if (!isDefined(definition))
            return $types[name];
          if ($types.hasOwnProperty(name))
            throw new Error("A type named '" + name + "' has already been defined.");
          $types[name] = new Type(extend({name: name}, definition));
          if (definitionFn) {
            typeQueue.push({
              name: name,
              def: definitionFn
            });
            if (!enqueue)
              flushTypeQueue();
          }
          return this;
        };
        function flushTypeQueue() {
          while (typeQueue.length) {
            var type = typeQueue.shift();
            if (type.pattern)
              throw new Error("You cannot override a type's .pattern at runtime.");
            angular.extend($types[type.name], injector.invoke(type.def));
          }
        }
        forEach(defaultTypes, function(type, name) {
          $types[name] = new Type(extend({name: name}, type));
        });
        $types = inherit($types, {});
        this.$get = ['$injector', function($injector) {
          injector = $injector;
          enqueue = false;
          flushTypeQueue();
          forEach(defaultTypes, function(type, name) {
            if (!$types[name])
              $types[name] = new Type(type);
          });
          return this;
        }];
        this.Param = function Param(id, type, config, location) {
          var self = this;
          config = unwrapShorthand(config);
          type = getType(config, type, location);
          var arrayMode = getArrayMode();
          type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
          if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
            config.value = "";
          var isOptional = config.value !== undefined;
          var squash = getSquashPolicy(config, isOptional);
          var replace = getReplace(config, arrayMode, isOptional, squash);
          function unwrapShorthand(config) {
            var keys = isObject(config) ? objectKeys(config) : [];
            var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 && indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
            if (isShorthand)
              config = {value: config};
            config.$$fn = isInjectable(config.value) ? config.value : function() {
              return config.value;
            };
            return config;
          }
          function getType(config, urlType, location) {
            if (config.type && urlType)
              throw new Error("Param '" + id + "' has two type configurations.");
            if (urlType)
              return urlType;
            if (!config.type)
              return (location === "config" ? $types.any : $types.string);
            return config.type instanceof Type ? config.type : new Type(config.type);
          }
          function getArrayMode() {
            var arrayDefaults = {array: (location === "search" ? "auto" : false)};
            var arrayParamNomenclature = id.match(/\[\]$/) ? {array: true} : {};
            return extend(arrayDefaults, arrayParamNomenclature, config).array;
          }
          function getSquashPolicy(config, isOptional) {
            var squash = config.squash;
            if (!isOptional || squash === false)
              return false;
            if (!isDefined(squash) || squash == null)
              return defaultSquashPolicy;
            if (squash === true || isString(squash))
              return squash;
            throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
          }
          function getReplace(config, arrayMode, isOptional, squash) {
            var replace,
                configuredKeys,
                defaultPolicy = [{
                  from: "",
                  to: (isOptional || arrayMode ? undefined : "")
                }, {
                  from: null,
                  to: (isOptional || arrayMode ? undefined : "")
                }];
            replace = isArray(config.replace) ? config.replace : [];
            if (isString(squash))
              replace.push({
                from: squash,
                to: undefined
              });
            configuredKeys = map(replace, function(item) {
              return item.from;
            });
            return filter(defaultPolicy, function(item) {
              return indexOf(configuredKeys, item.from) === -1;
            }).concat(replace);
          }
          function $$getDefaultValue() {
            if (!injector)
              throw new Error("Injectable functions cannot be called at configuration time");
            var defaultValue = injector.invoke(config.$$fn);
            if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
              throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
            return defaultValue;
          }
          function $value(value) {
            function hasReplaceVal(val) {
              return function(obj) {
                return obj.from === val;
              };
            }
            function $replace(value) {
              var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) {
                return obj.to;
              });
              return replacement.length ? replacement[0] : value;
            }
            value = $replace(value);
            return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
          }
          function toString() {
            return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}";
          }
          extend(this, {
            id: id,
            type: type,
            location: location,
            array: arrayMode,
            squash: squash,
            replace: replace,
            isOptional: isOptional,
            value: $value,
            dynamic: undefined,
            config: config,
            toString: toString
          });
        };
        function ParamSet(params) {
          extend(this, params || {});
        }
        ParamSet.prototype = {
          $$new: function() {
            return inherit(this, extend(new ParamSet(), {$$parent: this}));
          },
          $$keys: function() {
            var keys = [],
                chain = [],
                parent = this,
                ignore = objectKeys(ParamSet.prototype);
            while (parent) {
              chain.push(parent);
              parent = parent.$$parent;
            }
            chain.reverse();
            forEach(chain, function(paramset) {
              forEach(objectKeys(paramset), function(key) {
                if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1)
                  keys.push(key);
              });
            });
            return keys;
          },
          $$values: function(paramValues) {
            var values = {},
                self = this;
            forEach(self.$$keys(), function(key) {
              values[key] = self[key].value(paramValues && paramValues[key]);
            });
            return values;
          },
          $$equals: function(paramValues1, paramValues2) {
            var equal = true,
                self = this;
            forEach(self.$$keys(), function(key) {
              var left = paramValues1 && paramValues1[key],
                  right = paramValues2 && paramValues2[key];
              if (!self[key].type.equals(left, right))
                equal = false;
            });
            return equal;
          },
          $$validates: function $$validate(paramValues) {
            var keys = this.$$keys(),
                i,
                param,
                rawVal,
                normalized,
                encoded;
            for (i = 0; i < keys.length; i++) {
              param = this[keys[i]];
              rawVal = paramValues[keys[i]];
              if ((rawVal === undefined || rawVal === null) && param.isOptional)
                break;
              normalized = param.type.$normalize(rawVal);
              if (!param.type.is(normalized))
                return false;
              encoded = param.type.encode(normalized);
              if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
                return false;
            }
            return true;
          },
          $$parent: undefined
        };
        this.ParamSet = ParamSet;
      }
      angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
      angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) {}]);
      $UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
      function $UrlRouterProvider($locationProvider, $urlMatcherFactory) {
        var rules = [],
            otherwise = null,
            interceptDeferred = false,
            listener;
        function regExpPrefix(re) {
          var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
          return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
        }
        function interpolate(pattern, match) {
          return pattern.replace(/\$(\$|\d{1,2})/, function(m, what) {
            return match[what === '$' ? 0 : Number(what)];
          });
        }
        this.rule = function(rule) {
          if (!isFunction(rule))
            throw new Error("'rule' must be a function");
          rules.push(rule);
          return this;
        };
        this.otherwise = function(rule) {
          if (isString(rule)) {
            var redirect = rule;
            rule = function() {
              return redirect;
            };
          } else if (!isFunction(rule))
            throw new Error("'rule' must be a function");
          otherwise = rule;
          return this;
        };
        function handleIfMatch($injector, handler, match) {
          if (!match)
            return false;
          var result = $injector.invoke(handler, handler, {$match: match});
          return isDefined(result) ? result : true;
        }
        this.when = function(what, handler) {
          var redirect,
              handlerIsString = isString(handler);
          if (isString(what))
            what = $urlMatcherFactory.compile(what);
          if (!handlerIsString && !isFunction(handler) && !isArray(handler))
            throw new Error("invalid 'handler' in when()");
          var strategies = {
            matcher: function(what, handler) {
              if (handlerIsString) {
                redirect = $urlMatcherFactory.compile(handler);
                handler = ['$match', function($match) {
                  return redirect.format($match);
                }];
              }
              return extend(function($injector, $location) {
                return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
              }, {prefix: isString(what.prefix) ? what.prefix : ''});
            },
            regex: function(what, handler) {
              if (what.global || what.sticky)
                throw new Error("when() RegExp must not be global or sticky");
              if (handlerIsString) {
                redirect = handler;
                handler = ['$match', function($match) {
                  return interpolate(redirect, $match);
                }];
              }
              return extend(function($injector, $location) {
                return handleIfMatch($injector, handler, what.exec($location.path()));
              }, {prefix: regExpPrefix(what)});
            }
          };
          var check = {
            matcher: $urlMatcherFactory.isMatcher(what),
            regex: what instanceof RegExp
          };
          for (var n in check) {
            if (check[n])
              return this.rule(strategies[n](what, handler));
          }
          throw new Error("invalid 'what' in when()");
        };
        this.deferIntercept = function(defer) {
          if (defer === undefined)
            defer = true;
          interceptDeferred = defer;
        };
        this.$get = $get;
        $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
        function $get($location, $rootScope, $injector, $browser) {
          var baseHref = $browser.baseHref(),
              location = $location.url(),
              lastPushedUrl;
          function appendBasePath(url, isHtml5, absolute) {
            if (baseHref === '/')
              return url;
            if (isHtml5)
              return baseHref.slice(0, -1) + url;
            if (absolute)
              return baseHref.slice(1) + url;
            return url;
          }
          function update(evt) {
            if (evt && evt.defaultPrevented)
              return;
            var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
            lastPushedUrl = undefined;
            function check(rule) {
              var handled = rule($injector, $location);
              if (!handled)
                return false;
              if (isString(handled))
                $location.replace().url(handled);
              return true;
            }
            var n = rules.length,
                i;
            for (i = 0; i < n; i++) {
              if (check(rules[i]))
                return;
            }
            if (otherwise)
              check(otherwise);
          }
          function listen() {
            listener = listener || $rootScope.$on('$locationChangeSuccess', update);
            return listener;
          }
          if (!interceptDeferred)
            listen();
          return {
            sync: function() {
              update();
            },
            listen: function() {
              return listen();
            },
            update: function(read) {
              if (read) {
                location = $location.url();
                return;
              }
              if ($location.url() === location)
                return;
              $location.url(location);
              $location.replace();
            },
            push: function(urlMatcher, params, options) {
              var url = urlMatcher.format(params || {});
              if (url !== null && params && params['#']) {
                url += '#' + params['#'];
              }
              $location.url(url);
              lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
              if (options && options.replace)
                $location.replace();
            },
            href: function(urlMatcher, params, options) {
              if (!urlMatcher.validates(params))
                return null;
              var isHtml5 = $locationProvider.html5Mode();
              if (angular.isObject(isHtml5)) {
                isHtml5 = isHtml5.enabled;
              }
              var url = urlMatcher.format(params);
              options = options || {};
              if (!isHtml5 && url !== null) {
                url = "#" + $locationProvider.hashPrefix() + url;
              }
              if (url !== null && params && params['#']) {
                url += '#' + params['#'];
              }
              url = appendBasePath(url, isHtml5, options.absolute);
              if (!options.absolute || !url) {
                return url;
              }
              var slash = (!isHtml5 && url ? '/' : ''),
                  port = $location.port();
              port = (port === 80 || port === 443 ? '' : ':' + port);
              return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
            }
          };
        }
      }
      angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);
      $StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
      function $StateProvider($urlRouterProvider, $urlMatcherFactory) {
        var root,
            states = {},
            $state,
            queue = {},
            abstractKey = 'abstract';
        var stateBuilder = {
          parent: function(state) {
            if (isDefined(state.parent) && state.parent)
              return findState(state.parent);
            var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
            return compositeName ? findState(compositeName[1]) : root;
          },
          data: function(state) {
            if (state.parent && state.parent.data) {
              state.data = state.self.data = extend({}, state.parent.data, state.data);
            }
            return state.data;
          },
          url: function(state) {
            var url = state.url,
                config = {params: state.params || {}};
            if (isString(url)) {
              if (url.charAt(0) == '^')
                return $urlMatcherFactory.compile(url.substring(1), config);
              return (state.parent.navigable || root).url.concat(url, config);
            }
            if (!url || $urlMatcherFactory.isMatcher(url))
              return url;
            throw new Error("Invalid url '" + url + "' in state '" + state + "'");
          },
          navigable: function(state) {
            return state.url ? state : (state.parent ? state.parent.navigable : null);
          },
          ownParams: function(state) {
            var params = state.url && state.url.params || new $$UMFP.ParamSet();
            forEach(state.params || {}, function(config, id) {
              if (!params[id])
                params[id] = new $$UMFP.Param(id, null, config, "config");
            });
            return params;
          },
          params: function(state) {
            return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
          },
          views: function(state) {
            var views = {};
            forEach(isDefined(state.views) ? state.views : {'': state}, function(view, name) {
              if (name.indexOf('@') < 0)
                name += '@' + state.parent.name;
              views[name] = view;
            });
            return views;
          },
          path: function(state) {
            return state.parent ? state.parent.path.concat(state) : [];
          },
          includes: function(state) {
            var includes = state.parent ? extend({}, state.parent.includes) : {};
            includes[state.name] = true;
            return includes;
          },
          $delegates: {}
        };
        function isRelative(stateName) {
          return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
        }
        function findState(stateOrName, base) {
          if (!stateOrName)
            return undefined;
          var isStr = isString(stateOrName),
              name = isStr ? stateOrName : stateOrName.name,
              path = isRelative(name);
          if (path) {
            if (!base)
              throw new Error("No reference point given for path '" + name + "'");
            base = findState(base);
            var rel = name.split("."),
                i = 0,
                pathLength = rel.length,
                current = base;
            for (; i < pathLength; i++) {
              if (rel[i] === "" && i === 0) {
                current = base;
                continue;
              }
              if (rel[i] === "^") {
                if (!current.parent)
                  throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
                current = current.parent;
                continue;
              }
              break;
            }
            rel = rel.slice(i).join(".");
            name = current.name + (current.name && rel ? "." : "") + rel;
          }
          var state = states[name];
          if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
            return state;
          }
          return undefined;
        }
        function queueState(parentName, state) {
          if (!queue[parentName]) {
            queue[parentName] = [];
          }
          queue[parentName].push(state);
        }
        function flushQueuedChildren(parentName) {
          var queued = queue[parentName] || [];
          while (queued.length) {
            registerState(queued.shift());
          }
        }
        function registerState(state) {
          state = inherit(state, {
            self: state,
            resolve: state.resolve || {},
            toString: function() {
              return this.name;
            }
          });
          var name = state.name;
          if (!isString(name) || name.indexOf('@') >= 0)
            throw new Error("State must have a valid name");
          if (states.hasOwnProperty(name))
            throw new Error("State '" + name + "'' is already defined");
          var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.')) : (isString(state.parent)) ? state.parent : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name : '';
          if (parentName && !states[parentName]) {
            return queueState(parentName, state.self);
          }
          for (var key in stateBuilder) {
            if (isFunction(stateBuilder[key]))
              state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
          }
          states[name] = state;
          if (!state[abstractKey] && state.url) {
            $urlRouterProvider.when(state.url, ['$match', '$stateParams', function($match, $stateParams) {
              if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
                $state.transitionTo(state, $match, {
                  inherit: true,
                  location: false
                });
              }
            }]);
          }
          flushQueuedChildren(name);
          return state;
        }
        function isGlob(text) {
          return text.indexOf('*') > -1;
        }
        function doesStateMatchGlob(glob) {
          var globSegments = glob.split('.'),
              segments = $state.$current.name.split('.');
          for (var i = 0,
              l = globSegments.length; i < l; i++) {
            if (globSegments[i] === '*') {
              segments[i] = '*';
            }
          }
          if (globSegments[0] === '**') {
            segments = segments.slice(indexOf(segments, globSegments[1]));
            segments.unshift('**');
          }
          if (globSegments[globSegments.length - 1] === '**') {
            segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
            segments.push('**');
          }
          if (globSegments.length != segments.length) {
            return false;
          }
          return segments.join('') === globSegments.join('');
        }
        root = registerState({
          name: '',
          url: '^',
          views: null,
          'abstract': true
        });
        root.navigable = null;
        this.decorator = decorator;
        function decorator(name, func) {
          if (isString(name) && !isDefined(func)) {
            return stateBuilder[name];
          }
          if (!isFunction(func) || !isString(name)) {
            return this;
          }
          if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
            stateBuilder.$delegates[name] = stateBuilder[name];
          }
          stateBuilder[name] = func;
          return this;
        }
        this.state = state;
        function state(name, definition) {
          if (isObject(name))
            definition = name;
          else
            definition.name = name;
          registerState(definition);
          return this;
        }
        this.$get = $get;
        $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
        function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $urlRouter, $location, $urlMatcherFactory) {
          var TransitionSuperseded = $q.reject(new Error('transition superseded'));
          var TransitionPrevented = $q.reject(new Error('transition prevented'));
          var TransitionAborted = $q.reject(new Error('transition aborted'));
          var TransitionFailed = $q.reject(new Error('transition failed'));
          function handleRedirect(redirect, state, params, options) {
            var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);
            if (evt.defaultPrevented) {
              $urlRouter.update();
              return TransitionAborted;
            }
            if (!evt.retry) {
              return null;
            }
            if (options.$retry) {
              $urlRouter.update();
              return TransitionFailed;
            }
            var retryTransition = $state.transition = $q.when(evt.retry);
            retryTransition.then(function() {
              if (retryTransition !== $state.transition)
                return TransitionSuperseded;
              redirect.options.$retry = true;
              return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
            }, function() {
              return TransitionAborted;
            });
            $urlRouter.update();
            return retryTransition;
          }
          root.locals = {
            resolve: null,
            globals: {$stateParams: {}}
          };
          $state = {
            params: {},
            current: root.self,
            $current: root,
            transition: null
          };
          $state.reload = function reload(state) {
            return $state.transitionTo($state.current, $stateParams, {
              reload: state || true,
              inherit: false,
              notify: true
            });
          };
          $state.go = function go(to, params, options) {
            return $state.transitionTo(to, params, extend({
              inherit: true,
              relative: $state.$current
            }, options));
          };
          $state.transitionTo = function transitionTo(to, toParams, options) {
            toParams = toParams || {};
            options = extend({
              location: true,
              inherit: false,
              relative: null,
              notify: true,
              reload: false,
              $retry: false
            }, options || {});
            var from = $state.$current,
                fromParams = $state.params,
                fromPath = from.path;
            var evt,
                toState = findState(to, options.relative);
            var hash = toParams['#'];
            if (!isDefined(toState)) {
              var redirect = {
                to: to,
                toParams: toParams,
                options: options
              };
              var redirectResult = handleRedirect(redirect, from.self, fromParams, options);
              if (redirectResult) {
                return redirectResult;
              }
              to = redirect.to;
              toParams = redirect.toParams;
              options = redirect.options;
              toState = findState(to, options.relative);
              if (!isDefined(toState)) {
                if (!options.relative)
                  throw new Error("No such state '" + to + "'");
                throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
              }
            }
            if (toState[abstractKey])
              throw new Error("Cannot transition to abstract state '" + to + "'");
            if (options.inherit)
              toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
            if (!toState.params.$$validates(toParams))
              return TransitionFailed;
            toParams = toState.params.$$values(toParams);
            to = toState;
            var toPath = to.path;
            var keep = 0,
                state = toPath[keep],
                locals = root.locals,
                toLocals = [];
            if (!options.reload) {
              while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
                locals = toLocals[keep] = state.locals;
                keep++;
                state = toPath[keep];
              }
            } else if (isString(options.reload) || isObject(options.reload)) {
              if (isObject(options.reload) && !options.reload.name) {
                throw new Error('Invalid reload state object');
              }
              var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
              if (options.reload && !reloadState) {
                throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
              }
              while (state && state === fromPath[keep] && state !== reloadState) {
                locals = toLocals[keep] = state.locals;
                keep++;
                state = toPath[keep];
              }
            }
            if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
              if (hash)
                toParams['#'] = hash;
              $state.params = toParams;
              copy($state.params, $stateParams);
              if (options.location && to.navigable && to.navigable.url) {
                $urlRouter.push(to.navigable.url, toParams, {
                  $$avoidResync: true,
                  replace: options.location === 'replace'
                });
                $urlRouter.update(true);
              }
              $state.transition = null;
              return $q.when($state.current);
            }
            toParams = filterByKeys(to.params.$$keys(), toParams || {});
            if (options.notify) {
              if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
                $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
                $urlRouter.update();
                return TransitionPrevented;
              }
            }
            var resolved = $q.when(locals);
            for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
              locals = toLocals[l] = inherit(locals);
              resolved = resolveState(state, toParams, state === to, resolved, locals, options);
            }
            var transition = $state.transition = resolved.then(function() {
              var l,
                  entering,
                  exiting;
              if ($state.transition !== transition)
                return TransitionSuperseded;
              for (l = fromPath.length - 1; l >= keep; l--) {
                exiting = fromPath[l];
                if (exiting.self.onExit) {
                  $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
                }
                exiting.locals = null;
              }
              for (l = keep; l < toPath.length; l++) {
                entering = toPath[l];
                entering.locals = toLocals[l];
                if (entering.self.onEnter) {
                  $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
                }
              }
              if (hash)
                toParams['#'] = hash;
              if ($state.transition !== transition)
                return TransitionSuperseded;
              $state.$current = to;
              $state.current = to.self;
              $state.params = toParams;
              copy($state.params, $stateParams);
              $state.transition = null;
              if (options.location && to.navigable) {
                $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
                  $$avoidResync: true,
                  replace: options.location === 'replace'
                });
              }
              if (options.notify) {
                $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
              }
              $urlRouter.update(true);
              return $state.current;
            }, function(error) {
              if ($state.transition !== transition)
                return TransitionSuperseded;
              $state.transition = null;
              evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
              if (!evt.defaultPrevented) {
                $urlRouter.update();
              }
              return $q.reject(error);
            });
            return transition;
          };
          $state.is = function is(stateOrName, params, options) {
            options = extend({relative: $state.$current}, options || {});
            var state = findState(stateOrName, options.relative);
            if (!isDefined(state)) {
              return undefined;
            }
            if ($state.$current !== state) {
              return false;
            }
            return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
          };
          $state.includes = function includes(stateOrName, params, options) {
            options = extend({relative: $state.$current}, options || {});
            if (isString(stateOrName) && isGlob(stateOrName)) {
              if (!doesStateMatchGlob(stateOrName)) {
                return false;
              }
              stateOrName = $state.$current.name;
            }
            var state = findState(stateOrName, options.relative);
            if (!isDefined(state)) {
              return undefined;
            }
            if (!isDefined($state.$current.includes[state.name])) {
              return false;
            }
            return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
          };
          $state.href = function href(stateOrName, params, options) {
            options = extend({
              lossy: true,
              inherit: true,
              absolute: false,
              relative: $state.$current
            }, options || {});
            var state = findState(stateOrName, options.relative);
            if (!isDefined(state))
              return null;
            if (options.inherit)
              params = inheritParams($stateParams, params || {}, $state.$current, state);
            var nav = (state && options.lossy) ? state.navigable : state;
            if (!nav || nav.url === undefined || nav.url === null) {
              return null;
            }
            return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {absolute: options.absolute});
          };
          $state.get = function(stateOrName, context) {
            if (arguments.length === 0)
              return map(objectKeys(states), function(name) {
                return states[name].self;
              });
            var state = findState(stateOrName, context || $state.$current);
            return (state && state.self) ? state.self : null;
          };
          function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
            var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
            var locals = {$stateParams: $stateParams};
            dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
            var promises = [dst.resolve.then(function(globals) {
              dst.globals = globals;
            })];
            if (inherited)
              promises.push(inherited);
            function resolveViews() {
              var viewsPromises = [];
              forEach(state.views, function(view, name) {
                var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
                injectables.$template = [function() {
                  return $view.load(name, {
                    view: view,
                    locals: dst.globals,
                    params: $stateParams,
                    notify: options.notify
                  }) || '';
                }];
                viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function(result) {
                  if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
                    var injectLocals = angular.extend({}, injectables, dst.globals);
                    result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
                  } else {
                    result.$$controller = view.controller;
                  }
                  result.$$state = state;
                  result.$$controllerAs = view.controllerAs;
                  dst[name] = result;
                }));
              });
              return $q.all(viewsPromises).then(function() {
                return dst.globals;
              });
            }
            return $q.all(promises).then(resolveViews).then(function(values) {
              return dst;
            });
          }
          return $state;
        }
        function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
          function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
            function notSearchParam(key) {
              return fromAndToState.params[key].location != "search";
            }
            var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
            var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
            var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
            return nonQueryParamSet.$$equals(fromParams, toParams);
          }
          if (!options.reload && to === from && (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
            return true;
          }
        }
      }
      angular.module('ui.router.state').value('$stateParams', {}).provider('$state', $StateProvider);
      $ViewProvider.$inject = [];
      function $ViewProvider() {
        this.$get = $get;
        $get.$inject = ['$rootScope', '$templateFactory'];
        function $get($rootScope, $templateFactory) {
          return {load: function load(name, options) {
              var result,
                  defaults = {
                    template: null,
                    controller: null,
                    view: null,
                    locals: null,
                    notify: true,
                    async: true,
                    params: {}
                  };
              options = extend(defaults, options);
              if (options.view) {
                result = $templateFactory.fromConfig(options.view, options.params, options.locals);
              }
              if (result && options.notify) {
                $rootScope.$broadcast('$viewContentLoading', options);
              }
              return result;
            }};
        }
      }
      angular.module('ui.router.state').provider('$view', $ViewProvider);
      function $ViewScrollProvider() {
        var useAnchorScroll = false;
        this.useAnchorScroll = function() {
          useAnchorScroll = true;
        };
        this.$get = ['$anchorScroll', '$timeout', function($anchorScroll, $timeout) {
          if (useAnchorScroll) {
            return $anchorScroll;
          }
          return function($element) {
            return $timeout(function() {
              $element[0].scrollIntoView();
            }, 0, false);
          };
        }];
      }
      angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);
      $ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
      function $ViewDirective($state, $injector, $uiViewScroll, $interpolate) {
        function getService() {
          return ($injector.has) ? function(service) {
            return $injector.has(service) ? $injector.get(service) : null;
          } : function(service) {
            try {
              return $injector.get(service);
            } catch (e) {
              return null;
            }
          };
        }
        var service = getService(),
            $animator = service('$animator'),
            $animate = service('$animate');
        function getRenderer(attrs, scope) {
          var statics = function() {
            return {
              enter: function(element, target, cb) {
                target.after(element);
                cb();
              },
              leave: function(element, cb) {
                element.remove();
                cb();
              }
            };
          };
          if ($animate) {
            return {
              enter: function(element, target, cb) {
                var promise = $animate.enter(element, null, target, cb);
                if (promise && promise.then)
                  promise.then(cb);
              },
              leave: function(element, cb) {
                var promise = $animate.leave(element, cb);
                if (promise && promise.then)
                  promise.then(cb);
              }
            };
          }
          if ($animator) {
            var animate = $animator && $animator(scope, attrs);
            return {
              enter: function(element, target, cb) {
                animate.enter(element, null, target);
                cb();
              },
              leave: function(element, cb) {
                animate.leave(element);
                cb();
              }
            };
          }
          return statics();
        }
        var directive = {
          restrict: 'ECA',
          terminal: true,
          priority: 400,
          transclude: 'element',
          compile: function(tElement, tAttrs, $transclude) {
            return function(scope, $element, attrs) {
              var previousEl,
                  currentEl,
                  currentScope,
                  latestLocals,
                  onloadExp = attrs.onload || '',
                  autoScrollExp = attrs.autoscroll,
                  renderer = getRenderer(attrs, scope);
              scope.$on('$stateChangeSuccess', function() {
                updateView(false);
              });
              scope.$on('$viewContentLoading', function() {
                updateView(false);
              });
              updateView(true);
              function cleanupLastView() {
                if (previousEl) {
                  previousEl.remove();
                  previousEl = null;
                }
                if (currentScope) {
                  currentScope.$destroy();
                  currentScope = null;
                }
                if (currentEl) {
                  renderer.leave(currentEl, function() {
                    previousEl = null;
                  });
                  previousEl = currentEl;
                  currentEl = null;
                }
              }
              function updateView(firstTime) {
                var newScope,
                    name = getUiViewName(scope, attrs, $element, $interpolate),
                    previousLocals = name && $state.$current && $state.$current.locals[name];
                if (!firstTime && previousLocals === latestLocals)
                  return;
                newScope = scope.$new();
                latestLocals = $state.$current.locals[name];
                var clone = $transclude(newScope, function(clone) {
                  renderer.enter(clone, $element, function onUiViewEnter() {
                    if (currentScope) {
                      currentScope.$emit('$viewContentAnimationEnded');
                    }
                    if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                      $uiViewScroll(clone);
                    }
                  });
                  cleanupLastView();
                });
                currentEl = clone;
                currentScope = newScope;
                currentScope.$emit('$viewContentLoaded');
                currentScope.$eval(onloadExp);
              }
            };
          }
        };
        return directive;
      }
      $ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
      function $ViewDirectiveFill($compile, $controller, $state, $interpolate) {
        return {
          restrict: 'ECA',
          priority: -400,
          compile: function(tElement) {
            var initial = tElement.html();
            return function(scope, $element, attrs) {
              var current = $state.$current,
                  name = getUiViewName(scope, attrs, $element, $interpolate),
                  locals = current && current.locals[name];
              if (!locals) {
                return;
              }
              $element.data('$uiView', {
                name: name,
                state: locals.$$state
              });
              $element.html(locals.$template ? locals.$template : initial);
              var link = $compile($element.contents());
              if (locals.$$controller) {
                locals.$scope = scope;
                locals.$element = $element;
                var controller = $controller(locals.$$controller, locals);
                if (locals.$$controllerAs) {
                  scope[locals.$$controllerAs] = controller;
                }
                $element.data('$ngControllerController', controller);
                $element.children().data('$ngControllerController', controller);
              }
              link(scope);
            };
          }
        };
      }
      function getUiViewName(scope, attrs, element, $interpolate) {
        var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
        var inherited = element.inheritedData('$uiView');
        return name.indexOf('@') >= 0 ? name : (name + '@' + (inherited ? inherited.state.name : ''));
      }
      angular.module('ui.router.state').directive('uiView', $ViewDirective);
      angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);
      function parseStateRef(ref, current) {
        var preparsed = ref.match(/^\s*({[^}]*})\s*$/),
            parsed;
        if (preparsed)
          ref = current + '(' + preparsed[1] + ')';
        parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
        if (!parsed || parsed.length !== 4)
          throw new Error("Invalid state ref '" + ref + "'");
        return {
          state: parsed[1],
          paramExpr: parsed[3] || null
        };
      }
      function stateContext(el) {
        var stateData = el.parent().inheritedData('$uiView');
        if (stateData && stateData.state && stateData.state.name) {
          return stateData.state;
        }
      }
      $StateRefDirective.$inject = ['$state', '$timeout'];
      function $StateRefDirective($state, $timeout) {
        var allowedOptions = ['location', 'inherit', 'reload', 'absolute'];
        return {
          restrict: 'A',
          require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
          link: function(scope, element, attrs, uiSrefActive) {
            var ref = parseStateRef(attrs.uiSref, $state.current.name);
            var params = null,
                url = null,
                base = stateContext(element) || $state.$current;
            var hrefKind = Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]' ? 'xlink:href' : 'href';
            var newHref = null,
                isAnchor = element.prop("tagName").toUpperCase() === "A";
            var isForm = element[0].nodeName === "FORM";
            var attr = isForm ? "action" : hrefKind,
                nav = true;
            var options = {
              relative: base,
              inherit: true
            };
            var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
            angular.forEach(allowedOptions, function(option) {
              if (option in optionsOverride) {
                options[option] = optionsOverride[option];
              }
            });
            var update = function(newVal) {
              if (newVal)
                params = angular.copy(newVal);
              if (!nav)
                return;
              newHref = $state.href(ref.state, params, options);
              var activeDirective = uiSrefActive[1] || uiSrefActive[0];
              if (activeDirective) {
                activeDirective.$$addStateInfo(ref.state, params);
              }
              if (newHref === null) {
                nav = false;
                return false;
              }
              attrs.$set(attr, newHref);
            };
            if (ref.paramExpr) {
              scope.$watch(ref.paramExpr, function(newVal, oldVal) {
                if (newVal !== params)
                  update(newVal);
              }, true);
              params = angular.copy(scope.$eval(ref.paramExpr));
            }
            update();
            if (isForm)
              return;
            element.bind("click", function(e) {
              var button = e.which || e.button;
              if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target'))) {
                var transition = $timeout(function() {
                  $state.go(ref.state, params, options);
                });
                e.preventDefault();
                var ignorePreventDefaultCount = isAnchor && !newHref ? 1 : 0;
                e.preventDefault = function() {
                  if (ignorePreventDefaultCount-- <= 0)
                    $timeout.cancel(transition);
                };
              }
            });
          }
        };
      }
      $StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
      function $StateRefActiveDirective($state, $stateParams, $interpolate) {
        return {
          restrict: "A",
          controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
            var states = [],
                activeClass;
            activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);
            this.$$addStateInfo = function(newState, newParams) {
              var state = $state.get(newState, stateContext($element));
              states.push({
                state: state || {name: newState},
                params: newParams
              });
              update();
            };
            $scope.$on('$stateChangeSuccess', update);
            function update() {
              if (anyMatch()) {
                $element.addClass(activeClass);
              } else {
                $element.removeClass(activeClass);
              }
            }
            function anyMatch() {
              for (var i = 0; i < states.length; i++) {
                if (isMatch(states[i].state, states[i].params)) {
                  return true;
                }
              }
              return false;
            }
            function isMatch(state, params) {
              if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
                return $state.is(state.name, params);
              } else {
                return $state.includes(state.name, params);
              }
            }
          }]
        };
      }
      angular.module('ui.router.state').directive('uiSref', $StateRefDirective).directive('uiSrefActive', $StateRefActiveDirective).directive('uiSrefActiveEq', $StateRefActiveDirective);
      $IsStateFilter.$inject = ['$state'];
      function $IsStateFilter($state) {
        var isFilter = function(state) {
          return $state.is(state);
        };
        isFilter.$stateful = true;
        return isFilter;
      }
      $IncludedByStateFilter.$inject = ['$state'];
      function $IncludedByStateFilter($state) {
        var includesFilter = function(state) {
          return $state.includes(state);
        };
        includesFilter.$stateful = true;
        return includesFilter;
      }
      angular.module('ui.router.state').filter('isState', $IsStateFilter).filter('includedByState', $IncludedByStateFilter);
    })(window, window.angular);
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("c", ["1b"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('1b');
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("1c", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<navbar></navbar>\r\n<h1>{{ vm.name }}</h1>\r\n<section>\r\n\tThis is the about nothing page! Remove me if you don't need me please\r\n</section>\r\n";
  global.define = __define;
  return module.exports;
});

$__System.registerDynamic("7", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

$__System.register('1d', ['7'], function (_export) {
	var _classCallCheck, AboutController;

	return {
		setters: [function (_) {
			_classCallCheck = _['default'];
		}],
		execute: function () {
			'use strict';

			AboutController = function AboutController() {
				_classCallCheck(this, AboutController);

				this.name = 'about';
			};

			_export('default', AboutController);
		}
	};
});

$__System.register("1e", [], function() { return { setters: [], execute: function() {} } });

$__System.register('1f', ['1c', '1d', '1e'], function (_export) {
	'use strict';

	var template, controller, aboutComponent;
	return {
		setters: [function (_c) {
			template = _c['default'];
		}, function (_d) {
			controller = _d['default'];
		}, function (_e) {}],
		execute: function () {
			aboutComponent = function aboutComponent() {
				return {
					template: template,
					controller: controller,
					restrict: 'E',
					controllerAs: 'vm',
					scope: {},
					bindToController: true
				};
			};

			_export('default', aboutComponent);
		}
	};
});

$__System.register('20', ['b', 'c', '1f'], function (_export) {
	'use strict';

	var angular, aboutComponent, aboutModule;
	return {
		setters: [function (_b) {
			angular = _b['default'];
		}, function (_c) {}, function (_f) {
			aboutComponent = _f['default'];
		}],
		execute: function () {
			aboutModule = angular.module('about', ['ui.router']).config(function ($stateProvider) {
				$stateProvider.state('about', {
					url: '/about',
					template: '<about></about>'
				});
			}).directive('about', aboutComponent);

			_export('default', aboutModule);
		}
	};
});

$__System.register('21', ['19', '20', 'b'], function (_export) {
	'use strict';

	var Home, About, angular, componentModule;
	return {
		setters: [function (_) {
			Home = _['default'];
		}, function (_2) {
			About = _2['default'];
		}, function (_b) {
			angular = _b['default'];
		}],
		execute: function () {
			componentModule = angular.module('app.components', [Home.name, About.name]);

			_export('default', componentModule);
		}
	};
});

$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = "<!--Anything you want to be on every page, place it in this file-->\r\n<div class=\"app\">\r\n\t<div ui-view></div>\r\n</div>\r\n";
  global.define = __define;
  return module.exports;
});

$__System.register("23", [], function() { return { setters: [], execute: function() {} } });

$__System.register('24', ['22', '23'], function (_export) {
	'use strict';

	var template, appComponent;
	return {
		setters: [function (_) {
			template = _['default'];
		}, function (_2) {}],
		execute: function () {
			appComponent = function appComponent() {
				return {
					template: template, // because we have a variable name template we can use the shorcut here
					restrict: 'E'
				};
			};

			_export('default', appComponent);
		}
	};
});

$__System.register("25", [], function() { return { setters: [], execute: function() {} } });

$__System.registerDynamic("26", ["25"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('25');
  global.define = __define;
  return module.exports;
});

$__System.register('1', ['4', '14', '21', '24', '26', 'b', 'c'], function (_export) {
	'use strict';

	var Common, Components, AppComponent, angular, appModule, container, noAngularDOM;

	_export('__unload', __unload);

	function __unload() {
		container = document.getElementById('app-container');
		container.remove();
		document.body.appendChild(noAngularDOM.cloneNode(true));
	}

	return {
		setters: [function (_) {}, function (_2) {
			Common = _2['default'];
		}, function (_3) {
			Components = _3['default'];
		}, function (_4) {
			AppComponent = _4['default'];
		}, function (_5) {}, function (_b) {
			angular = _b['default'];
		}, function (_c) {}],
		execute: function () {
			appModule = angular.module('app', ['ui.router', 'ui.bootstrap', Common.name, Components.name]).directive('app', AppComponent);

			/*
    * As we are using ES6 with Angular 1.x we can't use ng-app directive
    * to bootstrap the application as modules are loaded asynchronously.
    * Instead, we need to bootstrap the application manually
    */
			container = document.getElementById('app-container');

			angular.element(document).ready(function () {
				if (location.origin.match(/localhost/)) {
					System.trace = true;
					noAngularDOM = container.cloneNode(true);
					if (!System.hotReloader) {
						System['import']('capaj/systemjs-hot-reloader').then(function (HotReloader) {
							System.hotReloader = new HotReloader['default']('http://localhost:8081/');
							System.hotReloader.on('change', function (name) {
								console.log(name, 'changed');
							});
						});
					}
				}
				angular.bootstrap(container, [appModule.name]), {
					strictDi: true
				};
			});

			_export('default', appModule);
		}
	};
});

$__System.register('app/common/navbar/navbar.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
$__System.register('app/common/hero/hero.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
$__System.register('app/components/home/home.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
$__System.register('app/components/about/about.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
$__System.register('app/app.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
$__System.register('github:necolas/normalize.css@3.0.3/normalize.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("@import url(http://fonts.googleapis.com/css?family=Roboto);body{height:100%;font-family:Roboto,sans-serif}.navbar{height:65px;background-color:#0277BD;padding:10px}.navbar .logo,.navbar .nav-links{display:inline-block}.navbar .logo{color:#F5F5F5;margin-right:50%}.navbar .nav-links span{color:#F5F5F5;font-size:1.6rem}.hero{background-color:#263238;height:500px;padding:30px}.hero *{color:#F5F5F5}.home{color:red}.about{color:red}.app{height:100%;background-color:#EFEFEF}/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}");
})
(function(factory) {
  factory();
});