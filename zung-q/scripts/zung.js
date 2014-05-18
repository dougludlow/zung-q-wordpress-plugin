(function ($) {

    $.floatThead = $.floatThead || {};

    $.floatThead._ = window._ || (function () {
        var that = {};
        var hasOwnProperty = Object.prototype.hasOwnProperty, isThings = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'];
        that.has = function (obj, key) {
            return hasOwnProperty.call(obj, key);
        };
        that.keys = function (obj) {
            if (obj !== Object(obj)) throw new TypeError('Invalid object');
            var keys = [];
            for (var key in obj) if (that.has(obj, key)) keys.push(key);
            return keys;
        };
        $.each(isThings, function () {
            var name = this;
            that['is' + name] = function (obj) {
                return Object.prototype.toString.call(obj) == '[object ' + name + ']';
            };
        });
        that.debounce = function (func, wait, immediate) {
            var timeout, args, context, timestamp, result;
            return function () {
                context = this;
                args = arguments;
                timestamp = new Date();
                var later = function () {
                    var last = (new Date()) - timestamp;
                    if (last < wait) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        if (!immediate) result = func.apply(context, args);
                    }
                };
                var callNow = immediate && !timeout;
                if (!timeout) {
                    timeout = setTimeout(later, wait);
                }
                if (callNow) result = func.apply(context, args);
                return result;
            };
        };
        return that;
    })();
})(window.jQuery);

(function (window, angular, $) {
    $('table').floatThead();

    angular.module('ZungApp', [])
      .controller('ZungController', ['$scope', 'filterFilter', function ($scope, filter) {

          $scope.responses = [
                'A little of the time',
                'Some of the time',
                'Good part of the time',
                'Most of the time'
          ];

          $scope.survey = [
            { scores: [1, 2, 3, 4], statement: 'I feel down-hearted and blue' },
            { scores: [4, 3, 2, 1], statement: 'Morning is when I feel the best' },
            { scores: [1, 2, 3, 4], statement: 'I have crying spells or feel like it' },
            { scores: [1, 2, 3, 4], statement: 'I have trouble sleeping at night' },
            { scores: [4, 3, 2, 1], statement: 'I eat as much as I used to' },
            { scores: [4, 3, 2, 1], statement: 'I still enjoy sex' },
            { scores: [1, 2, 3, 4], statement: 'I notice that I am losing weight' },
            { scores: [1, 2, 3, 4], statement: 'I have trouble with constipation' },
            { scores: [1, 2, 3, 4], statement: 'My heart beats faster than usual' },
            { scores: [1, 2, 3, 4], statement: 'I get tired for no reason' },
            { scores: [4, 3, 2, 1], statement: 'My mind is as clear as it used to be' },
            { scores: [4, 3, 2, 1], statement: 'I find it easy to do the things I used to' },
            { scores: [1, 2, 3, 4], statement: 'I am restless and can\'t keep still' },
            { scores: [4, 3, 2, 1], statement: 'I feel hopeful about the future' },
            { scores: [1, 2, 3, 4], statement: 'I am more irritable than usual' },
            { scores: [4, 3, 2, 1], statement: 'I find it easy to make decisions' },
            { scores: [4, 3, 2, 1], statement: 'I feel that I am useful and needed' },
            { scores: [4, 3, 2, 1], statement: 'My life is pretty full' },
            { scores: [1, 2, 3, 4], statement: 'I feel that others would be better off if I were dead' },
            { scores: [4, 3, 2, 1], statement: 'I still enjoy the things I used to do' }
          ];

          $scope.ranges = [
            { lower: 0, upper: 44, description: 'Normal Range', stateClass: 'badge-success', iconClass: 'glyphicon-thumbs-up' },
            { lower: 45, upper: 59, description: 'Mildly Depressed', stateClass: 'badge-warning', iconClass: 'glyphicon-info-sign' },
            { lower: 60, upper: 69, description: 'Moderately Depressed', stateClass: 'badge-caution', iconClass: 'glyphicon-caution-sign' },
            { lower: 70, upper: 80, description: 'Severely Depressed', stateClass: 'badge-danger', iconClass: 'glyphicon-exclamation-sign' },
          ];

          $scope.scores = {};

          $scope.checks = 0;

          $scope.score = function () {
              var score = 0;
              $scope.checks = 0;

              for (var i in $scope.scores) {
                  score += parseInt($scope.scores[i]);
                  $scope.checks++;
              }

              return score;
          };

          $scope.range = function () {
              return filter($scope.ranges, function (range) {
                  return range.lower <= $scope.score() &&
                         range.upper >= $scope.score();
              })[0];
          };

          $scope.mailto = function () {
              var subject = 'Zung Self-Rating Score',
                  body = 'My Zung Self-Rating Depression Scale Score is ' + $scope.score();
              mailto = 'mailto:?subject= ' + subject + '&body=' + body;

              return encodeURI(mailto);
          };
      }]);
})(window, window.angular, window.jQuery);