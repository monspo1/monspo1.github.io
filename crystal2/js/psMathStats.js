/*jshint browser: true, jquery: true */
/*global ps:true */

/*
PseudoSavant JavaScript Math and Statistics Library

@file       psMathStats.js
@version    2.0
@author     Paul Ellis
@url        http://pseudosavant.com
@copyright  Copyright 2012, Paul Ellis
@license    BSD
*/

if (typeof ps !== "object") { var ps = {}; } // Declare ps object if not already set

(function () {
    "use strict";

    ps.array = function (psArray) {
        // Process arguments
        if (typeof psArray === "object" && !!psArray.length && psArray.push) {
            // Do nothing. psArray is an array already;        
        } else if (arguments.length > 0) { // If arguments are available 
            psArray = Array.prototype.slice.call(arguments);
        } else {
            psArray = [];
        }

        // Calculates the Standard Deviation of an array
        psArray.stdDev = function () {
            return Math.sqrt(this.variance());
        };

        // Calculates the Variance of an array
        psArray.variance = function () {
            var m = this.mean(), l = this.length;
            for (var i = 0, sumOfSquares = 0; i < l; i++) {
                sumOfSquares += Math.pow(this[i] - m, 2);
            }
            return sumOfSquares / l;
        };

        // Sums all values in an array
        psArray.sum = function () {
            var s = 0, l = this.length;
            for (var i = 0; i < l; i++) {
                s += this[i];
            };
            return s;
        };

        // Calculates the arithmetic mean of an array
        psArray.mean = function () {
            return this.sum() / this.length;
        };

        // Returns the highest numeric value of an array
        psArray.max = function () {
            if (this.length < 100000) { // Chrome has a limit of ~100k args for .apply
                return Math.max.apply(Math, this);
            } else {
                var l = this.length, max = -Infinity;
                for (var i=0; i<l; i++){
                    if (this[i] > max) { max = this[i]; }
                }
                return max;
            }
        };

        // Returns the lowest numeric value of an array
        psArray.min = function () {
            if (this.length < 100000) { // Chrome has a limit of ~100k args for .apply
                return Math.min.apply(Math, this);
            } else {
                var l = this.length, min = +Infinity;
                for (var i=0; i<l; i++){
                    if (this[i] < min) { min = this[i]; }
                }
                return min;

            }
        };

        // Calculates the median of an array
        psArray.median = function () {
            var l = this.length, mid, median;

            if (length % 2 == 1) { // Odd
                mid = Math.floor(l / 2);
                median = this.sortNumber()[mid];
            } else { // Even
                mid = l / 2;
                var sorted = this.sortNumber();
                median = (sorted[mid - 1] + sorted[mid]) / 2;
            }
            return median;
        };

        // Returns the value at the given percentile
        psArray.percentile = function(percent) {
            var index = Math.round(percent * this.length);
            return this.sortNumber()[index];
        };

        // Returns the array sorted ascendingly, or decendingly if sortNumber(true).
        psArray.sortNumber = function (invert) {
            if (!!invert) { // Decending
                return this.sort(function (a, b) { return a - b; }).reverse(); // Using reverse() is faster than b - a, for some reason.
            } else { // Ascending, default
                return this.sort(function (a, b) { return a - b; });
            }
        };

        // Returns an object where the key equals the item and the value equals the count of the times that item occured in the array
        psArray.histogram = function() {
            var a = this, l = this.length, o = {};
            for (var i = 0; i < l; i++) {
                var val = a[i];
                if (typeof o[val] === "number"){
                    o[val]++;
                } else {
                    o[val] = 1;
                }
            }

            return o;
        };

        // Returns an object that shows the total count of each type in an array
        psArray.countByType = function() {
            var a = this, l = this.length, o = {};
            for (var i = 0; i < l; i++) {
                var type = typeof a[i];
                if (typeof o[type] !== "undefined"){
                    o[type]++;
                } else {
                    o[type] = 1;
                }
            }

            return o;
        };

        return psArray;
    };

    ps.math = {
        // Returns true if n is an even number
        even: function(n) {
            return (typeof n === "number" && n % 2 === 0);
        },
        // Returns true if n is an odd number
        odd: function(n) {
            return (typeof n === "number" && n % 2 === 1); 
        },
        // Calculates the factorial for any given integer
        fact: function(n) {
            var f = 1;
            if (typeof n !== "number" || (n % 1) !== 0) { 
                f = null;
            }
            else if (n > 1) {
                for (var i = 2; i <= n; i++) {
                    f = f * i;
                }
            }
            return f;
        },
        // Returns the product of all of the arguments
        product: function() {
            var a = arguments, l = arguments.length, p = 1;
            for (var i = 0; i < l; i++){
                p = p * a[i];
            }
            return p;
        },
        // Calculates a random number between two numbers, defaulting to integers
        randomBetween: function(low, high, digits) {
            digits = (typeof digits === "number" && digits > 0 ? digits : 0);
            var r = Number((Math.random() * (high - low)) + low).toFixed(digits);

            return r;
        }
    };

    ps.stats = {
        // Lower tail quantile for standard normal distribution function.
        // Written by Alankar Misra (alankar@digitalsutras.com), algorithm by Peter John Acklam (pjacklam@online.no, http://home.online.no/~pjacklam)
        normsinv: function(p) {
            // Coefficients in rational approximations
            var a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00]; 
            var b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
            var c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
            var d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];

            // Define break-points.
            var plow = 0.02425;
            var phigh = 1 - plow;
        
            var q, z;

            // Rational approximation for lower region:
            if (p < plow) {
                q = Math.sqrt(-2 * Math.log(p));
                z = (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
            }
            else if (phigh < p) { // Rational approximation for upper region:
                q = Math.sqrt(-2 * Math.log(1 - p));
                z = -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
            }
            else { // Rational approximation for central region:
                q = p - 0.5;
                var r = q * q;
                z = (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
            }
            return +z;
        }
    };

}());